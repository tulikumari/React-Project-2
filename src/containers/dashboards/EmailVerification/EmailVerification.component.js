import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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
            <div className="emailVerifyHead">
              <h1>Email Verification</h1>
              <p>We have sent an email to johns@noemail.com</p>
            </div>

            <form noValidate autoComplete="off">
              <div className="emailVerify_input">
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                //className="cnfrmtonUpr"
                >
                  <Grid key={7} item xs={12} sm={10} md={7}>
                    <TextField
                      id=""
                      label="Enter Code"
                      //variant="search"
                      className={classes.textField}
                      margin="normal"
                    />
                    <Button variant="raised" color="primary" className={classes.button} className="create_submit">
                      Submit
                   </Button>
                  </Grid>
                </Grid>

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