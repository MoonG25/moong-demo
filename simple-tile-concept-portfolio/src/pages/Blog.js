import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

// components
import ContainerComponent from '../components/Container';

import content from '../assets/posts/markdown.md';

const styles = () => ({
  container: {
    width: '100%',
    height: '100%',
    padding: '20px'
  },
  textField: {
    width: '100%'
  }
})

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdown: '' }
  }

  _handleChangeMarkdown = (e) => {
    this.setState({
      markdown: e.target.value
    })
  }

  componentDidMount() {
    fetch(content)
    .then(res => res.text())
    .then(text => this.setState({ markdown: text }))
  }

  render() {
    const { classes } = this.props;
    const { markdown } = this.state;
    return (
      <ContainerComponent>
        <main className={classes.container}>
          <TextField
            id="outlined-multiline-flexible"
            label="markdown"
            multiline
            rows="10"
            value={this.state.markdown}
            onChange={this._handleChangeMarkdown}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <ReactMarkdown source={markdown} />
        </main>
      </ContainerComponent>
    )
  }
}

BlogPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogPage);