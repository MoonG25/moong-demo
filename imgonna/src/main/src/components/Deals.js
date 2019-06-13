import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Deals.css';
import Deal from './Deal';

class Deals extends Component {
  render() {
    const { deals, mode } = this.props;
    console.log(deals);

    return (
      <div className="tcat-deals">
        <h1>
          추천 항공권 목록<br />
          <span className="hide-small">이미지랑 금액</span>
        </h1>
        <p className="hide-small">떼껄룩</p>
        <form className="explore-deals hide-small">
          <input type="text" className="text-input-1 ui-autocomplete-input" placeholder="Enter Location" autoComplete="off" />
          <button className="blue-btn button-1" type="submit">Search Deals</button>
        </form>
        <div className="deal-container">
          <div className="hide-small alert alert-warning alert-deals alert-hidden">
            <div className="close"></div>
            Please enter another location or browse these random deals!
          </div>
          <ul>
            { deals.map(deal => <Deal deal={deal} />) }
          </ul>
          <div className="spinner">
            <div>
              <div className="spinner-image">
                <div id="circleG">
                  <div id="circleG_1" className="circleG"></div>
                  <div id="circleG_2" className="circleG"></div>
                  <div id="circleG_3" className="circleG"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Deals.propTypes = {};

export default Deals;