import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
  },
  menu: {
    width: '100%'
  }
});

class TextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR'
  };

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
     <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid key={8} item xs={10} sm={8} md={8}>
          <form noValidate autoComplete="off">
            <div className="createUpUsr">
            <TextField
              id=""
              label="Email Address"
              //variant="search"
              className={classes.textField}
              margin="normal"
            />

            <TextField
              id=""
              label="Create Password"
              //variant="search"
              className={classes.textField}
              margin="normal"
            />

            <TextField
              id=""
              label="Confirm Password"
              //variant="search"
              className={classes.textField}
              margin="normal"
            />
              <div className="create_submit">
              <Button variant="raised" color="primary" className={classes.button} >
                Submit
              </Button>
            </div>
           </div>
          </form>
        </Grid>
      </Grid>
  </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(TextFields);