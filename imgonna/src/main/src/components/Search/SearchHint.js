import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SearchHint.css';
import SearchHintItem from './SearchHintItem';

class SearchHint extends Component {

  render() {
    const { hints, index } = this.props;
    const uiStyle = { display: 'none' };
    const id = 'ui-id-' + index;
    return (
        <ul className="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content" id={id} tabIndex="0" style={uiStyle}>
          {
            hints.map((item, itemIndex) => <SearchHintItem item={item} pindex={index} cindex={itemIndex} />)
          }
        </ul>
    );
  }
}

SearchHint.propTypes = {
  hints: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired
};

export default SearchHint;