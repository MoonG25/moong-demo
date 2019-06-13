import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// components
import ContainerComponent from '../components/Container';
import Post from '../components/Post';

// posts
import post1 from '../assets/posts/blog-post.1.md';
import post2 from '../assets/posts/blog-post.2.md';

const posts = [post1, post2];

const styles = () => ({
  container: {
    width: '100%',
    height: '100%',
    padding: '20px'
  }
});

/**
 * @description 글 목록
 */
class PostsPage extends React.Component {
  render() {
    const { classes } = this.props;
    const renderPosts = posts.map((post, index) => <Post key={index} content={post} />);
    return (
      <ContainerComponent>
        <main className={classes.container}>
          {renderPosts}
        </main>
      </ContainerComponent>
    )
  }
}

PostsPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostsPage);