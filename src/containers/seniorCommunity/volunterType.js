import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Theme, makeStyles } from '@material-ui/core/styles';
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
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './communityCss.css';

const styles = theme => ({
    root: {
      width: 500,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: '100%',
      marginBottom:0
     },
  });
  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 1)',
      maxWidth: 320,
      fontSize: theme.typography.pxToRem(15),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);

  
class Index extends React.Component {
    state = {
      value: '',
      age: '',
      name: 'hai',
      checkedA: true,
      checkedB: false,
      checkedF: true,
      checkedG: true
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
    alignItems="top"
    //className={classes.background}
    className="homeClick"
    spacing={0}
    justify="center"
  >
      
      <Grid key={3} item xs={11} sm={5} md={5}>
                  <div >
                    <form noValidate autoComplete="off">
                    <div>
                        
                      </div>
                     
                      <div className="userBasics mt40">
                        <label className="basicInfoLbl">Need volunter for:</label>
                        <div>
                          <Grid container direction="row" justify="center" alignItems="top" spacing={16} className="mt10 senior_community2">
                            <Grid key={3} item xs={12} sm={6} md={6}>
                              <FormControl component="fieldset">
                                    <RadioGroup
                                        aria-label="gender"
                                        name="gender1"
                                        className="radio_sec"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                    >
                                        <HtmlTooltip
                                            title={
                                            <React.Fragment>
                                                <FormControl component="fieldset">
                                                    <RadioGroup
                                                        aria-label="gender"
                                                        name="gender1"
                                                        className="radio_sec"
                                                        value={this.state.value}
                                                        onChange={this.handleChange}
                                                    >
                                                        <FormControlLabel value="Assisted Living2" control={<Radio />} label="3-Months = $90.00" className="radio_btn" />
                                                        <FormControlLabel value="Nursing Homes2" control={<Radio />} label="6-Months = $90.00" className="radio_btn" />
                                                        <FormControlLabel value="DME2" control={<Radio />} label="12-Months = $90.00" className="radio_btn" />
                                                    </RadioGroup>
                                                </FormControl>
                                            </React.Fragment>
                                            }
                                        >
                                            <FormControlLabel value="Assisted Living2" control={<Radio />} label="3-Months = $90.00" className="radio_btn radio-font-18" />
                                        </HtmlTooltip>
                                        
                                        <FormControlLabel value="Nursing Homes2" control={<Radio />} label="6-Months = $90.00" className="radio_btn radio-font-18" />
                                        <FormControlLabel value="DME2" control={<Radio />} label="12-Months = $90.00" className="radio_btn radio-font-18" />
                                        <FormControlLabel value="Assisted Living2" control={<Radio />} label="3-Months = $90.00" className="radio_btn radio-font-18" />
                                        <FormControlLabel value="Nursing Homes2" control={<Radio />} label="6-Months = $90.00" className="radio_btn radio-font-18" />
                                        <FormControlLabel value="DME2" control={<Radio />} label="12-Months = $90.00" className="radio_btn radio-font-18" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid key={3} item xs={12} sm={6} md={6}>
                             <FormControl component="fieldset">
                                    <RadioGroup
                                        aria-label="gender"
                                        name="gender1"
                                        className="radio_sec"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                    >
                                        <FormControlLabel value="Assisted Living2" control={<Radio />} label="3-Months = $90.00" className="radio_btn radio-font-18" />
                                        <FormControlLabel value="Nursing Homes2" control={<Radio />} label="6-Months = $90.00" className="radio_btn radio-font-18" />
                                        <FormControlLabel value="DME2" control={<Radio />} label="12-Months = $90.00" className="radio_btn radio-font-18" />
                                        <FormControlLabel value="Assisted Living2" control={<Radio />} label="3-Months = $90.00" className="radio_btn radio-font-18" />
                                        <FormControlLabel value="Nursing Homes2" control={<Radio />} label="6-Months = $90.00" className="radio_btn radio-font-18" />
                                        <FormControlLabel value="DME2" control={<Radio />} label="12-Months = $90.00" className="radio_btn radio-font-18" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                          </Grid>
                        </div>
                      </div>

                      
                        <div>
                            <div className="mt40 text-center">
                                <div className="d-inline valign-mid"><a href=""><img  width="100%" src="../../assets/images/community/back_arrow.png" width="50" alt="" title="" /></a></div>
                                <div className="d-inline valign-mid">
                                  <Button variant="raised" color="primary" className="red-border-btn ml-20">
                                    SAVE
                                  </Button>
                                </div>
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