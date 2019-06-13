import React from 'react';
import PropTypes from 'prop-types'; 
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    border: '1px solid black',
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridAutoRows: '1fr',
    gridGap: '10px',
  }
});

class GridTileComponent extends React.Component {
  render() {
    const { classes, children, wrapper } = this.props;
    console.log(wrapper)
    return (
      <div className={wrapper ? classes.wrapper : classes.container}>
        {children}
      </div>
    )
  }
}

GridTileComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridTileComponent);