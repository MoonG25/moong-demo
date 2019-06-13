import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import './Contents.css';
import Search from '../../components/Search/Search';
import Deals from '../../components/Deals';
import deals from '../../mocks/deals';

class Contents extends Component {

  state = {
    map: null,
    place: null
  };

  componentDidMount () {
    this._getCurrentLocation()
    .then(position => {
      const location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      // this._initMap(location);
      // this._loadPlace(location);
      // this._getGeocoder(location);
      this.setState({ location });
    })
    .catch(err => console.log(err));
  }

  _getCurrentLocation = (options) => {
    return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, options));
  };

  _initMap = (location) => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 13,
      mapTypeId: 'roadmap',
      disableDefaultUI: true
    });
    const place =  new google.maps.places.PlacesService(map);
    this.setState({ map, place });
  };

  _loadPlace = (location) => {
    const request = {
      location: new google.maps.LatLng(location),
      radius: 20000,
      type: 'airport',
      keyword: ''
    };

    this.state.place.nearbySearch(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log('nearbySearch', results);
      }
    });
  };

  _getGeocoder = (location) => {
    const self = this;
    const geocoder = new google.maps.Geocoder();
    const latLng = new google.maps.LatLng(location);
    geocoder.geocode({ 'latLng': latLng }, function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        // results
      }
    });
  };

  render() {

    return (
      <Fragment>
        <Search />
        <Deals deals={deals} />
      </Fragment>
    );
  }
}

Contents.propTypes = {};

export default Contents;