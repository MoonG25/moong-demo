import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// components
import ContainerComponent from '../components/Container';

const styles = theme => ({
  container: {
    width: '100%',
    height: '100vh',
  },
  emptyBox: {
    height: '120px',
  },
});

/**
 * @description 스킬같은것들 내용 추가하기
 */
class AboutPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <ContainerComponent>
        <main className={classes.container}> 
          <div className={classes.emptyBox} />
          <Typography variant="h2">
            피카추
          </Typography>
          <img src="https://img.insight.co.kr/static/2019/05/01/700/r6qs70z26i8rgou7632p.jpg" alt="" />
          <Typography variant="h2">
            좋아하는것 : 커피
          </Typography>
          <img src="https://scontent-ort2-2.cdninstagram.com/vp/9718900def8b364494670783e7936c33/5D7B9E8F/t51.2885-15/e35/59699152_322547731726986_1491420058396686197_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com" alt="" />
          <Typography variant="h2">
            직업 : 탐정
          </Typography>
          <img src="https://scontent-ort2-2.cdninstagram.com/vp/f4780387922c3982a5868ee4d47eb77d/5D6419BF/t51.2885-15/e35/59562911_608980796289139_141791852157608856_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com" alt="" />
        </main>
      </ContainerComponent>
    )
  }
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutPage);