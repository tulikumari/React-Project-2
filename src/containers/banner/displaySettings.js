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
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import './bannerCss.css';

const styles = theme => ({
    root: {
        display: 'flex'
      },
      formControl: {
        margin: theme.spacing.unit * 3
      },
      group: {
        margin: `${theme.spacing.unit}px 0`
      },
      formControl1: {
        margin: theme.spacing.unit,
        minWidth: 120,
        width: '100%'
      },
      selectEmpty: {
        marginTop: theme.spacing.unit * 2
      }
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
        name: 'hai'
      };
    
      handleChange = (event, value) => {
        this.setState({ value });
      };
    
      handleChange2 = (event) => {
        this.setState({ [event.target.name]: event.target.value });
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
    //className={classes.background}
    className="homeClick"
    spacing={16}
  >
      <Grid key={3} item xs={12} sm={8} md={8}>
                  <div >
                    <form noValidate autoComplete="off">
                      <Typography variant="headline" className="mb15">
                         <b>Settings:</b>
                       </Typography>
                       <Grid container direction="row" justify="center" alignItems="top" spacing={16} className="mt10">
                            <Grid key={3} item xs={12} md={6}>
                              <div>Display Where:</div>
                              <div className="inline-block valign-t">
                              <FormControl className={classes.formControl1}>
                                <InputLabel htmlFor="age-simple">State</InputLabel>
                                <Select
                                    value={this.state.age}
                                    onChange={this.handleChange2}
                                    inputProps={{
                                    name: 'age',
                                    id: 'age-simple'
                                    }}
                                >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                                </FormControl>
                              </div>
                              <div className="inline-block valign-t ml-10">
                              <FormControl className={classes.formControl1}>
                                <InputLabel htmlFor="age-simple">City</InputLabel>
                                <Select
                                    value={this.state.age}
                                    onChange={this.handleChange2}
                                    inputProps={{
                                    name: 'age',
                                    id: 'age-simple'
                                    }}
                                >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                                </FormControl>
                              </div>
                            </Grid>
                            <Grid key={3} item xs={12} md={6}>
                               <div className="stack_claim">Stake Claim: Select 2
                               <HtmlTooltip
                                    title={
                                    <React.Fragment>
                                        <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                                        {"It's very engaging. Right?"}
                                    </React.Fragment>
                                    }
                                >
                                    <i className="stack_claim_icon">?</i>
                                </HtmlTooltip>
                                </div>
                                <div className="white_box mt10">
                                <Grid container direction="row" alignItems="top" spacing={0}>
                                 <Grid key={3} item xs={12} sm={6}>
                                    <FormControl component="fieldset">
                                        <RadioGroup
                                            aria-label="gender"
                                            name="gender1"
                                            className="radio_sec"
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                        >
                                            <FormControlLabel value="Assisted Living" control={<Radio />} label="Assisted Living" className="radio_btn" />
                                            <FormControlLabel value="Nursing Homes" control={<Radio />} label="Nursing Homes" className="radio_btn" />
                                            <FormControlLabel value="Rehab Centers" control={<Radio />} label="Rehab Centers" className="radio_btn" />
                                        </RadioGroup>
                                    </FormControl>
                                  </Grid>
                                  <Grid key={3} item xs={12} sm={6}>
                                    <FormControl component="fieldset">
                                        <RadioGroup
                                            aria-label="gender"
                                            name="gender1"
                                            className="radio_sec"
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                        >
                                            <FormControlLabel value="DME" control={<Radio />} label="DME" className="radio_btn" />
                                            <FormControlLabel value="Funeral Homes" control={<Radio />} label="Funeral Homes" className="radio_btn" />
                                            <FormControlLabel value="Pharmecies" control={<Radio />} label="Pharmecies" className="radio_btn" />                                           
                                        </RadioGroup>
                                    </FormControl>
                                  </Grid>
                                 </Grid>
                                </div>
                                <div className="ml-10 mt10 font-size12">Additional types are $15.00/Month</div>
                            </Grid>
                        </Grid>


                        <Grid container direction="row" alignItems="top" spacing={16} className="mt10">
                            <Grid key={3} item xs={11} sm={5}>
                              <div>Display to Who:</div>
                              <div>
                               <Grid container direction="row" alignItems="top" spacing={0} className="mt5">
                                 <Grid key={3} item xs={12} sm={6}>
                                    <FormControl component="fieldset">
                                        <RadioGroup
                                            aria-label="gender"
                                            name="gender1"
                                            className="radio_sec"
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                        >
                                            <FormControlLabel value="Assisted Living2" control={<Radio />} label="Assisted Living" className="radio_btn" />
                                            <FormControlLabel value="Nursing Homes2" control={<Radio />} label="Nursing Homes" className="radio_btn" />
                                        </RadioGroup>
                                    </FormControl>
                                  </Grid>
                                  <Grid key={3} item xs={12} sm={6}>
                                    <FormControl component="fieldset">
                                        <RadioGroup
                                            aria-label="gender"
                                            name="gender1"
                                            className="radio_sec"
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                        >
                                            <FormControlLabel value="DME2" control={<Radio />} label="DME" className="radio_btn" />
                                            <FormControlLabel value="Funeral Homes2" control={<Radio />} label="Funeral Homes" className="radio_btn" />
                                        </RadioGroup>
                                    </FormControl>
                                  </Grid>
                                 </Grid>
                              </div>
                              <div>
                                <FormControl className={classes.formControl1}>
                                <InputLabel htmlFor="age-simple">Community Types</InputLabel>
                                <Select
                                    value={this.state.age}
                                    onChange={this.handleChange2}
                                    inputProps={{
                                    name: 'age',
                                    id: 'age-simple'
                                    }}
                                >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                                </FormControl>
                            </div>
                            <div>
                                <FormControl className={classes.formControl1}>
                                <InputLabel htmlFor="age-simple">Provider Types</InputLabel>
                                <Select
                                    value={this.state.age}
                                    onChange={this.handleChange2}
                                    inputProps={{
                                    name: 'age',
                                    id: 'age-simple'
                                    }}
                                >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                                </FormControl>
                              </div>
                            </Grid>
                        </Grid>


                        <div>
                            <div className="mt40 text-center">
                                <Button variant="raised" color="primary" className="red-border-btn">
                                    NEXT
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