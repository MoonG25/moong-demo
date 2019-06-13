import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// components
import ContainerComponent from '../components/Container';
import Post from '../components/Post';

// projects
import project1 from '../assets/projects/2017-09-26-followon.md';
import project2 from '../assets/projects/2018-03-02-followon-renewal.md';
import project3 from '../assets/projects/2018-05-03-custom-ticket.md';
import project4 from '../assets/projects/2018-09-20-matrix.md';
import project5 from '../assets/projects/2018-10-19-chart.md';


const styles = () => ({
  container: {
    width: '100%',
    height: '100vh',
    padding: '20px'
  }
});

const projects = [project1, project2, project3, project4, project5];

class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
  };

  componentDidMount() {
    this.setState({
      projects
    })
  }
  
  render() {
    const { classes } = this.props;
    const { projects } = this.state;
    const renderProject = projects.map((project, index) => <Post key={index} content={project} title="임시 제목" />);
    return (
      <ContainerComponent>
        <main className={classes.container}>
          {renderProject}
        </main>
      </ContainerComponent>
    )
  }
}

PortfolioPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PortfolioPage);