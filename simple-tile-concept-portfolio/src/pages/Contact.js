import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Icon, IconButton } from '@material-ui/core';
import {
  Delete as DeleteIcon,
  PhotoCamera as PhotoCameraIcon,
  AddShoppingCart as AddShoppingCartIcon
} from '@material-ui/icons';

// components
import ContainerComponent from '../components/Container';

const styles = theme => ({
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '480px',
    textAlign: 'center',
  },
  textField: {
    width: '100%'
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

/**
 * @description 연락방법, SNS나 깃헙계정, 메일 등
 */
class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  _handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <ContainerComponent>
        <main className={classes.container}> 
          <div className={classes.flex}>
            <Typography variant="h4">
              contact
            </Typography>
            <TextField
              id="outlined-name"
              label="Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this._handleChange('name')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-email"
              label="Email"
              className={classes.textField}
              type="email"
              value={this.state.email}
              onChange={this._handleChange('email')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows="4"
              value={this.state.message}
              onChange={this._handleChange('message')}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <div>
              <IconButton className={classes.button} aria-label="Delete">
                <DeleteIcon />
              </IconButton>
              <IconButton className={classes.button} aria-label="Delete" disabled color="primary">
                <DeleteIcon />
              </IconButton>
              <IconButton color="secondary" className={classes.button} aria-label="Add an alarm">
                <Icon>alarm</Icon>
              </IconButton>
              <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
                <AddShoppingCartIcon />
              </IconButton>
              <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
              <label htmlFor="icon-button-file">
                <IconButton color="primary" className={classes.button} component="span">
                  <PhotoCameraIcon />
                </IconButton>
              </label>
            </div>
          </div>
        </main>
      </ContainerComponent>
    )
  }
}

ContactPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactPage);