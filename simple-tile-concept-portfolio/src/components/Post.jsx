import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, Divider } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

const styles = theme => ({
  container: {
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  }
});

class PostComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdown: '', title: '' };
  }

  componentDidMount() {
    const { content, title } = this.props;
    fetch(content)
    .then(res => res.text())
    .then(text => this.setState({
      markdown: text, 
      title: title ? title : text.split('\n')[0].slice(2) 
    }));
  }

  render() {
    const { classes } = this.props;
    const { markdown, title } = this.state;
    return (
      <React.Fragment>
        <div className={classes.container}>

        <Grid container spacing={40} className={classes.mainGrid}>
            <Grid item xs={12} md={10}>
              <Typography variant="h6" gutterBottom>
                {title}
              </Typography>
              <Divider />
              <ReactMarkdown source={markdown} />
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

PostComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired
};

export default withStyles(styles)(PostComponent);