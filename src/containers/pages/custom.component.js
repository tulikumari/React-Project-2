import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import './customcss.css';

const styles = theme => ({
    root: {
      display: 'flex'
    },
    formControl: {
      margin: theme.spacing.unit * 3
    },
    group: {
      margin: `${theme.spacing.unit}px 0`
    }
  });
  
  
class Index extends React.Component {
    state = {
        value: ''
      };
    
      handleChange = (event, value) => {
        this.setState({ value });
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
                    <Grid item xs={11}>
                      <div className="center-content">
                        <form noValidate autoComplete="off">
                          <Typography variant="headline" className="mt50 mb15">
                             <b>Community specialties:</b>
                           </Typography>
                            <div>
                            <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="gender"
                                name="gender1"
                                className="radio_sec"
                                value={this.state.value}
                                onChange={this.handleChange}
                            >
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                <FormControlLabel value="disabled" control={<Radio />} label="Disabled" />
                            </RadioGroup>
                              </FormControl>
                                <div className="enterCode_submit">
                                    <Button variant="raised" color="primary" className={classes.button}>
                                        Next
                                    </Button>
                                </div>
                                    
                            </div>
                        </form>
                      </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Index.propTypes = {
    classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(Index);