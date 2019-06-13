import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchHint from './SearchHint';
import './Search.css';

class Search extends Component {

  state = {
    hints: [
      [
        { label: 'ICN  Incheon Intl, Seoul, South Korea', value: 'ICN', name: 'Incheon Intl', location: 'Seoul, South Korea' },
        { label: 'GMP  Gimpo Intl, Seoul, South Korea', value: 'GMP', name: 'Gimpo Intl', location: 'Seoul, South Korea' },
        { label: 'PUS  Gimhae Intl, Busan, South Korea', value: 'PUS', name: 'Gimhae Intl', location: 'Busan, South Korea' }
      ],
      [
        { label: 'ANY  Anywhere', value: '', name: '', location: 'Anywhere' },
        { label: 'NYC  All Airports, New York, NY', value: 'NYC', name: 'All Airports', location: 'New York, NY' },
        { label: 'LAX  Los Angeles Intl, Los Angeles, CA', value: 'LAX', name: 'Los Angeles Intl', location: 'Los Angeles, CA' },
        { label: 'CHI  All Airports, Chicago, IL', value: 'CHI', name: 'All Airports', location: 'Chicago, IL' },
        { label: 'WAS  All Airports, Washington, District of Columbia', value: 'WAS', name: 'All Airports', location: 'Washington, District of Columbia' },
        { label: 'SFO  San Francisco Intl, San Francisco, CA', value: 'SFO', name: 'San Francisco Intl', location: 'San Francisco, CA' },
        { label: 'LAS  McCarran Intl, Las Vegas, NV', value: 'LAS', name: 'McCarran Intl', location: 'Las Vegas, NV' },
        { label: 'ATL  Hartsfield Jackson Atlanta Intl, Atlanta, GA', value: 'ATL', name: 'Hartsfield Jackson Atlanta Intl', location: 'Atlanta, GA' },
        { label: 'MIA  Miami Intl, Miami, FL', value: 'MIA', name: 'Miami Intl', location: 'Miami, FL'},
        { label: 'SEA  Seattle-Tacoma Intl, Seattle, WA', value: 'SEA', name: 'Seattle-Tacoma Intl', location: 'Seattle, WA' },
        { label: 'BOS  General Edward Lawrence Logan Intl, Boston, MA', value: 'BOS', name: 'General Edward Lawrence Logan Intl', location: 'Boston, MA' }
      ]
    ]
  };

  _clickSearchHandler = () => {
    const depCity1 = 'PUS';
    const arrCity1 = 'KIX';
    const depDate1 = '2019-01-01';
    const depCity2 = 'KIX';
    const arrCity2 = 'PUS';
    const depDate2 = '2019-01-04';
    const tripType = 'RT';
    const url = '/bx/search?depCity1=' + depCity1 + '&arrCity1=' + arrCity1 + '&depDate1=' + depDate1 + '&depCity2=' + depCity2 + '&arrCity2=' + arrCity2 + '&depDate2=' + depDate2 + '&tripType=' + tripType;
    fetch(url)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
  }


  _clickHintHandler = (e, i) => {
    const $parent = e.target.parentNode;
    const _top = $parent.offsetTop + $parent.offsetHeight + 10;
    const _left = $parent.offsetLeft;
    const _width = $parent.offsetWidth;
    const hintStyle = 'top:' + _top + 'px;left:' + _left + 'px;width:' + _width + 'px;display:block';
    const hint = document.querySelectorAll('.ui-autocomplete.ui-menu')[i-1];
    hint.setAttribute('style', hintStyle);
  }

  _focusOutHandler = (e) => {
    const hints = document.querySelectorAll('.ui-autocomplete.ui-menu');
    hints.forEach(hint => hint.style.display = 'none');
  }

  _handleDepCityChange = (e) => {
    const value = e.target.value;
    this.setState(state => ({
      depCity1: { id: value, label: state.label },
      arrCity2: { id: value, label: state.label }
    }));
  }

  _handleArrCityChange = (e) => {
    const value = e.target.value;
    this.setState(state => ({
      depCity2: { id: value, label: state.label },
      arrCity1: { id: value, label: state.label }
    }));
  }

  _handleDepDate1Change = (e) => {
    const value = e.target.value;
    this.setState({ depDate1: value });
  }

  _handleDepDate2Change = (e) => {
    const value = e.target.value;
    this.setState({ depDate2: value });
  }

  _handleSubmit = (e) => {
    const { depCity1, arrCity1, depCity2, arrCity2, depDate1, depDate2 } = this.state;
    console.log(depCity1.id, arrCity1.id, depCity2.id, arrCity2.id, depDate1, depDate2);

    // get triptype
    const tripType = document.querySelector(".active-trip").getAttribute("data-trip-type") === 'round-trip' ? "RT" : "OW";

    // validate city

    // validate date

    // search
    const url = '/bx/search?depCity1=' + depCity1.id + '&arrCity1=' + arrCity1.id + '&depDate1=' + depDate1 + '&depCity2=' + depCity2.id + '&arrCity2=' + arrCity2.id + '&depDate2=' + depDate2 + '&tripType=' + tripType;
    fetch(url)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
  }

  componentWillMount() {
    const { hints } = this.state;
    const departure = hints[0][0].label.split('  ');
    const arrival = hints[1][0].label.split('  ');

    const depCity1 = { id: departure[0], label: departure[1] };
    const arrCity1 = { id: arrival[0], label: arrival[0] };

    const depCity2 = { id: arrival[0], label: arrival[0] };
    const arrCity2 = { id: departure[0], label: departure[1] };

    const today = new Date();
    const year = today.getFullYear();
    const month = ('0'+(today.getMonth()+1)).slice(-2);
    const date = ('0'+(today.getDate()+1)).slice(-2);
    const depDate1 = year + '-' + month + '-' + date;
    const depDate2 = '';

    this.setState(state => ({ depCity1, arrCity1, depDate1, depCity2, arrCity2, depDate2 }));
  }

  render() {
    const { hints, depCity1, arrCity1, depDate1, depDate2 } = this.state;

    const flightSearchStyle = {
      backgroundImage: 'url(img/background-japan.jpg)'
    };

    return (
      <div className="flight-search" style={flightSearchStyle}>
        <h1 className="hide-small">리액트랑 스프링<br/>아무거나 코딩합시다.</h1>
        <h2 className="hide-small">아~ 리액트 아시는구나! 여기에 <a href="https://gitlab.com/moong/imgonna" className="font-medium color-deeppink">기여</a>해야지.</h2>
        <form className="flight-search-form ui-front" onSubmit={this.handleSubmit}>
          <div className="trip-type-selection">
            <button data-trip-type="round-trip" type="button" className="trip-type active-trip">Round Trip</button>
            <button data-trip-type="one-way" type="button" className="trip-type">One Way</button>
          </div>
          <div className="form-row">
            <div className="trip-row">
              <label className="input-label location-input">
                <span className="input-label-text">From</span>
                <input type="text" className="src-input ui-autocomplete-input"
                       value={ depCity1.id }
                       data-shadow={ depCity1.label }
                       autoComplete="off"
                       onClick={(e) => this._clickHintHandler(e, 1)}
                       onChange={this._handleDepCityChange}
                       onBlur={this._focusOutHandler} />
                <div className="input-shadow">
                  <span
                      className="truncate">{ depCity1.label }</span>
                </div>
              </label>
              <label className="input-label location-input">
                <span className="input-label-text">To</span>
                <input type="text" className="dst-input ui-autocomplete-input ui-autocomplete-loading"
                       value={ arrCity1.id }
                       data-shadow={ arrCity1.label }
                       autoComplete="off"
                       onClick={(e) => this._clickHintHandler(e, 2)}
                       onChange={this._handleArrCityChange}
                       onBlur={this._focusOutHandler} />
                <div className="input-shadow">
                  <span
                      className="truncate">{ arrCity1.label }</span>
                </div>
              </label>
              <div className="date-inputs date-range-picker">
                <label className="input-label date-input-label">
                  <span className="input-label-text">Departure</span>
                  <input type="text" className="date-input start-date hasDatepicker"
                         placeholder="Depart"
                         value={ depDate1 }
                         onChange={this._handleDepDate1Change}/>
                </label>
                <label className="input-label date-input-label">
                  <span className="input-label-text">Return</span>
                  <input type="text" className="date-input start-date hasDatepicker"
                         placeholder="Return"
                         value={ depDate2 }
                         onChange={this._handleDepDate2Change}/>
                </label>
              </div>
            </div>
            <button type="button" className="blue-btn" onClick={this._handleSubmit}>Search Flights</button>
          </div>
          {
            hints.map((hint, hintIndex) => <SearchHint hints={hint} index={hintIndex} />)
          }
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  airports: PropTypes.array.isRequired
};

export default Search;