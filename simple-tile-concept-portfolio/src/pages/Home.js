import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// components
import ContainerComponent from '../components/Container';
import TileComponent from '../components/Tile';

// images
import album from '../assets/images/album.jpg';
import apple from '../assets/images/apple.jpg';
import desktop from '../assets/images/desktop.jpg';
import pikachu from '../assets/images/pikachu.gif';
import plant from '../assets/images/plant.jpg';
import rose from '../assets/images/rose.jpg';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import github from '../assets/images/github.png';
import steam from '../assets/images/steam.png';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    padding: '20px'
  },
  sns: {
    width: '250px',
    height: '250px',
    flexGrow: '1',
    userSelect: 'none',
    display: 'flex',
  }
})

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: []
    };
  }

  _initTiles = () => {
    this.setState({
      tiles: [
        { src: plant },
        { src: album },
        { src: apple },
        { src: pikachu },
        { src: desktop },
        { src: 'small', tiles: [
          { src: steam, to: 'https://github.com/MoonG25' },
          { src: github, to: 'https://github.com/MoonG25' },
          { src: instagram, to: 'https://github.com/MoonG25' },
          { src: facebook, to: 'https://github.com/MoonG25' },
        ]},
        { src: rose },
      ]
    })
  }

  componentDidMount() {
    this._initTiles();
  }
  
  render() {
    const { classes } = this.props;
    const { tiles } = this.state;
    const renderTiles = tiles.map((tile, xindex) => (
        tile.src === 'small' ? (
          <div key={xindex} className={classes.sns}>
          {
            tile.tiles.map((smallTile, yindex) => (
              <TileComponent
                key={yindex}
                src={smallTile.src}
                to={smallTile.to}
              />)
            )
          }
          </div>
        ) : (
        <TileComponent key={xindex} src={tile.src} />
        )
      )
    );
    return (
      <ContainerComponent>
        <main className={classes.container}>
          {renderTiles}
        </main>
      </ContainerComponent>
    )
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);