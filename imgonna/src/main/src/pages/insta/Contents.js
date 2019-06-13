import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Contents.css';
import Deals from '../../components/Deals';

class Contents extends Component {

  KEY_CODE_ENTER = 13;

  state = {
    posts: []
  }

  _enterHandler = (e) => {
    if (e.keyCode === this.KEY_CODE_ENTER) {
      const value = e.target.value;

      if (!value) {
        alert('검색어를 입력해주세요');
        return false;
      }

      e.target.value = '';
      this._getInstagramContentsById(value);
    }
  }

  _getInstagramContentsById = async (id) => {
    const contents = await this._getPage('http://localhost:3000/' + id);
    this.setState(state => ({ posts: contents.posts }));
  }

  _getPage = (url) => {
    return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));
  }

  _parseHTML = (html) => {
    let template = document.createElement('template');
    template.innerHTML = html;
    return template.content.cloneNode(true);
  }

  render() {
    const { posts } = this.state;

    return (
        <div id="insta-container">
          <div className="insta-header"></div>
          <div className="insta-contents">
            <div className="insta-search">
              <h1>검색해보세요</h1>
              <input type="text" onKeyDown={this._enterHandler} placeholder="official.khan.ig" />
            </div>
            <div className="insta-results">
              <Deals deals={posts} />
            </div>
          </div>
          <div className="insta-footer"></div>
        </div>
    );
  }
}

Contents.propTypes = {};

export default Contents;