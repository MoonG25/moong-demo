import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Contents.css';

class Contents extends Component {

  KEY_CODE_ENTER = 13;

  state = {
    airline: null
  }

  _enterHandler = (e) => {
    if (e.keyCode === this.KEY_CODE_ENTER) {
      const value = e.target.value;

      if (!value) {
        alert('검색어를 입력해주세요');
        return false;
      }

      e.target.value = '';
      this._getAirlineByCode(value);
    }
  }

  _getAirlineByCode = async (code) => {
    const airline = await this._callApi('http://localhost:8080/airlines/code/' + code);
    this.setState({ airline });
  }

  _callApi = (url) => {
    return fetch(url)
    .then(res => res.json())
    .then(json => {
      if (json.error) {
        alert('이 세상에 그런건 존재하지 않음');
      } else {
        return json;
      }
    })
    .catch(err => console.log(err));
  }

  render() {

    const { airline } = this.state;

    const searchStyle = {
      backgroundImage: 'url(img/background-code.jpg)',
      backgroundSize: 'cover'
    };

    return (
        <div id="code-container">
          <div className="code-header"></div>
          <div className="code-search" style={searchStyle}>
            <h1>IATA CODE 여기서 검색하세요</h1>
            <br/>
            <input type="text" placeholder="insert code" onKeyDown={this._enterHandler} />
          </div>
          <div className="code-result">
            { airline ?
              <div className="result__airline">
                <div className="result__airline-map"></div>
                <div className="result__airline-name">
                  <div className="airline-flag">
                    <img src="https://www.world-airport-codes.com/content/themes/wac-genesis-child/images/flags/32/kr.png" alt="KR"/>
                  </div>
                  <div className="airline-name">
                    <h1>{airline.name}</h1>
                    <p>Busan, Korea(KR)</p>
                  </div>

                </div>
                <div className="result__airline-code">
                  IATA CODE <span>{airline.iataCode}</span><br/>
                  ICAO CODE <span>{airline.icaoCode}</span>
                </div>
              </div> :
              <h1>검색결과 여기에 노출</h1>
            }
          </div>
        </div>
    );
  }
}

Contents.propTypes = {};

export default Contents;