import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SearchHintItem.css';

class SearchHintItem extends Component {

  _mouseOverHandler = (e) => {
    const $el = e.target;
    $el.classList.add('ui-state-focus');
  }

  _mouseOutHandler = (e) => {
    const $el = e.target;
    $el.classList.remove('ui-state-focus');
  }

  render() {
    const { item, pindex, cindex } = this.props;
    const id = 'ui-ui-' + pindex + cindex;
    return (
      <li className="ui-menu-item"
          id={id}
          tabindex="-1"
          onMouseOver={(e) => this._mouseOverHandler(e)}
          onMouseOut={(e) => this._mouseOutHandler(e)}>
        <a>
          <span className="autocomplete-em">{ item.value }</span>
          { item.name } { item.location }
        </a>
      </li>
    );
  }
}

SearchHintItem.propTypes = {
  item: PropTypes.object.isRequired,
  pindex: PropTypes.number.isRequired,
  cindex: PropTypes.number.isRequired
};

export default SearchHintItem;