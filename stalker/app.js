const express = require('express');
const app = express();
const port = 3000;

const phantom = require('phantom');
const cheerio = require('cheerio');

const KHAN_TUBE = 'https://www.youtube.com/channel/UC5eW3okTTLwiNSQli25vDag/videos';
const KHAN_INSTA = 'https://www.instagram.com/official.khan.ig/';

const _stalking = async (url) => {
  const instance = await phantom.create();
  const page = await instance.createPage();
  const status = await page.open(url);
  const content = await page.property('content');
  const $ = cheerio.load(content, { decodeEntities: false });
  const result = _getPosts($);
  return result;
}

const _getPosts = ($) => {
  const result = { posts: [] };
  $('#react-root article > div > div > div').each(function (i, elem) {

    $(this).find('a').each(function (aIndex, aEl) {
      const link = $(this).attr('href');
      $(this).find('img').each(function (imgIndex, imgEl) {
        const $img = $(this);
        const alt = $img.attr('alt');
        const src = $img.attr('src');

        if (alt) {
          const splitAlt = alt.split('-');
          const title = splitAlt[0];
          const body = splitAlt[1];
          const hashTags = splitAlt.length === 3 ? splitAlt[2].split(' ') : [];
          const obj = {
            title: title,
            body: body,
            hashTags: hashTags,
            src: src,
            link: link
          };
    
          result.posts.push(obj);
        }
      });
    });
  });
  return result;
}

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/khan', (req, res) => res.send('instagram scrap'));
app.get('/:word', async (req, res) => {
  const url = 'https://www.instagram.com/' + req.params.word;
  const result = await _stalking(url);
  res.json(result);
});

app.listen(port, () => console.log('Khan Stalking...'));