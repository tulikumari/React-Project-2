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

              
                <Grid
                  container
                  direction="row"
                  justify="center"
                >
                <Grid item xs={12} sm={6} md={6} lg={6} className="spcInputRght">
                  <TextField
                    id=""
                    label="First Name"
                    //variant="search"
                    className={classes.textField}
                    margin="normal"
                  />
                </Grid>  

                <Grid item xs={12} sm={6} md={6} lg={6} className="spcInputLft">
                  <TextField
                    id=""
                    label="Last Name"
                    //variant="search"
                    className={classes.textField}
                    margin="normal"
                  />
                </Grid>  
              </Grid> 

              <Grid
                  container
                  direction="row"
                  justify="center"
                >
                <Grid item xs={12} sm={6} md={6} lg={6} className="spcInputRght">
                  <TextField
                    id=""
                    label="Create User Name"
                    //variant="search"
                    className={classes.textField}
                    margin="normal"
                  />
                </Grid>  

                <Grid item xs={12} sm={6} md={6} lg={6} className="spcInputLft">
                  <TextField
                    id=""
                    label="Email"
                    //variant="search"
                    className={classes.textField}
                    margin="normal"
                  />
                </Grid>  
              </Grid> 

                <div className="veri_email"><p>Verified Email Required</p></div>
                <div className="create_submit">
                  <Button variant="raised" color="primary" className={classes.button}>
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