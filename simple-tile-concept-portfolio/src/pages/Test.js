import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// redux
import { connect } from 'react-redux';

// components
import ContainerComponent from '../components/Container';
import GridTileComponent from '../components/GridTile';

const styles = theme => ({
  container: {
    width: '100%',
    height: '100%',

    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    // gridTemplateRows: '150px 150px 150px 150px',
    gridGap: '10px',
    // gridTemplateColumns: 'repeat(3, 1fr)',
    // gridGap: '10px',
    gridAutoRows: 'minmax(150px, auto)',
  },
});

class TestPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <ContainerComponent>
        <main className={classes.container}>
          <GridTileComponent />
          <GridTileComponent />
          <GridTileComponent />
          <GridTileComponent />

          <GridTileComponent />
          <GridTileComponent />
          <GridTileComponent />
          <GridTileComponent />

          <GridTileComponent wrapper={true}>
            <GridTileComponent />
            <GridTileComponent />
            <GridTileComponent />
            <GridTileComponent />
          </GridTileComponent>

          <GridTileComponent />
          <GridTileComponent />
          <GridTileComponent />
          <GridTileComponent />

          <GridTileComponent wrapper={true}>
            <GridTileComponent />
            <GridTileComponent />
          </GridTileComponent>
        </main>
      </ContainerComponent>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default withStyles(styles)(TestPage);