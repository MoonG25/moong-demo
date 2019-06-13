import React, {Fragment} from 'react';

const Deal = ({ deal }) => {

  const link = deal.link ? 'https://www.instagram.com/' + deal.link : '';
  const target = link ? '_blank' : '_self';
  return (
    <li className="deal">
      <a href={link} target="_blank">
        <img src={ deal.src } alt="place" className="cdn-image" data-src="" />
        <div className="deal-text">
          <div className="left">
            <h4 className="deal-city truncate">{ deal.title }</h4>
            <h4 className="deal-date">{ deal.date || deal.body }</h4>
          </div>
          <div className="right">
            {
              deal.price ?
                <div className="prices price-display">
                  <p className="deal-price-old">
                    <span
                        className="price-container hotel-price">{deal.price.old}</span>
                  </p>
                  <p className="deal-price-new">
                    <span
                        className="price-container hotel-price">{deal.price.new}</span>
                  </p>
                </div> :
                <Fragment/>
            }
            <div className="tcat-rate-label">{ deal.tag || deal.hashTags.join(',') }</div>
          </div>
        </div>
      </a>
    </li>
  )
};

export default Deal;