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
import Checkbox from '@material-ui/core/Checkbox';
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
        width: '100%',
        marginTop:0,
      },
      selectEmpty: {
        marginTop: theme.spacing.unit * 2
      },
      textField: {
        marginTop: 0,
        marginBottom: 0,
        width: '100%',
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
    
      handleChange2 = name => (event) => {
        this.setState({ [name]: event.target.checked });
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
                         <b>Payment Method:</b>
                       </Typography>
                       <Grid container direction="row" alignItems="top" spacing={16} className="mt10">
                            <Grid key={3} item xs={12} md={4}>
                              <div>
                                <a href="#" className="blue-txt inline-block"><img width="80" src="../../assets/images/banner_img/payment_option1.png" alt="" title="" /></a> 
                                <a href="#" className="blue-txt inline-block ml-5"><img width="80" src="../../assets/images/banner_img/payment_option2.png" alt="" title="" /></a> 
                                <a href="#" className="blue-txt inline-block ml-5"><img width="80" src="../../assets/images/banner_img/payment_option3.png" alt="" title="" /></a> 
                              </div>
                              <div>
                                <a href="#" className="blue-txt inline-block"><img width="80" src="../../assets/images/banner_img/payment_option4.png" alt="" title="" /></a> 
                                <a href="#" className="blue-txt inline-block ml-5"><img width="80" src="../../assets/images/banner_img/payment_option5.png" alt="" title="" /></a> 
                                <a href="#" className="blue-txt inline-block ml-5"><img width="80" src="../../assets/images/banner_img/payment_option6.png" alt="" title="" /></a> 
                              </div>
                            </Grid>
                            <Grid key={3} item xs={12} md={4}>
                               <div><b>Who:</b> Families, Funeral Homes, Pharmacy</div>
                               <div><b>What:</b> Banner, Ad</div>
                               <div><b>Where:</b> Tampa, FL</div>
                            </Grid>
                        </Grid>

                        <Grid container direction="row" alignItems="top" spacing={16} className="mt10">
                            <Grid key={3} item xs={11} md={4}>
                             <div className="width-80">
                                    <div className="mt20">Billing Address:</div>
                                    <div className="mt10 ml-10">
                                    <FormControlLabel
                                            control={
                                                <Checkbox
                                                onChange={this.handleChange2('checkedA')}
                                                value="checkedA"
                                                className="banner_checkbox"
                                                />
                                            }
                                            label="Use profile info:"
                                            />
                                    </div>
                                    <div>
                                        <TextField
                                            id="First"
                                            label="First"
                                            placeholder="First"
                                            className={classes.textField}
                                            margin="normal"
                                            />
                                    </div>
                                    <div>
                                        <TextField
                                            id="Last"
                                            label="Last"
                                            placeholder="Last"
                                            className={classes.textField}
                                            margin="normal"
                                            />
                                    </div>
                                    <div>
                                        <TextField
                                            id="Steet"
                                            label="Steet"
                                            placeholder="Steet"
                                            className={classes.textField}
                                            margin="normal"
                                            />
                                    </div>
                                    <div>
                                        <TextField
                                            id="City"
                                            label="City"
                                            placeholder="City"
                                            className={classes.textField}
                                            margin="normal"
                                            />
                                    </div>
                                    <Grid container direction="row" alignItems="top" spacing={0}>
                                        <Grid key={3} item xs={6} sm={6} lg={6}>
                                        <TextField
                                            id="State"
                                            label="State"
                                            placeholder="State"
                                            className={classes.textField}
                                            margin="normal"
                                            />
                                        </Grid>
                                        <Grid key={3} item xs={6} sm={6} lg={6}>
                                        <FormControl className={classes.formControl1}>
                                            <InputLabel htmlFor="age-simple">Zip</InputLabel>
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
                                   </Grid>
                                 </Grid>
                                </div>
                            </Grid>
                            <Grid key={3} item xs={12} md={4}>
                            <div className="mt20">Payment Options:</div>
                              <div className="mt10">
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
                                  
                              </div>
                            </Grid>
                            <Grid key={3} item xs={11} md={4}>
                             <div className="width-80">
                                    <div className="mt20">Payment Information:</div>
                                    <div className="mt10">
                                        <TextField
                                            id="Card"
                                            label="Card#:"
                                            placeholder="Card#:"
                                            className={classes.textField}
                                            margin="normal"
                                            />
                                    </div>
                                    <div>
                                        <Grid container direction="row" alignItems="top" spacing={0}>
                                            <Grid key={3} item xs={6} sm={6} lg={6}>
                                               <FormControl className={classes.formControl1}>
                                                    <InputLabel htmlFor="age-simple">Expire Month:</InputLabel>
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
                                            </Grid>
                                            <Grid key={3} item xs={6} sm={6} lg={6}>
                                              <div className="ml-10">
                                                <FormControl className={classes.formControl1}>
                                                    <InputLabel htmlFor="age-simple">Expire Year:</InputLabel>
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
                                    </div>
                                    <div>
                                        <TextField
                                            id="SecurityCode"
                                            label="Security Code:"
                                            placeholder="Security Code:"
                                            className={classes.textField}
                                            margin="normal"
                                            />
                                    </div>
                                    <div>
                                        <TextField
                                            id="PromotionalCode"
                                            label="Promotional Code:"
                                            placeholder="Promotional Code:"
                                            className={classes.textField}
                                            margin="normal"
                                            />
                                    </div>
                                   
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="top" spacing={0}>
                            <Grid key={3} item xs={11} sm={12} className="text-right">
                            <FormControlLabel
                                            control={
                                                <Checkbox
                                                onChange={this.handleChange2('checkedA')}
                                                value="checkedA"
                                                className="banner_checkbox"
                                                />
                                            }
                                            label="I Agree to Terms"
                                            />
                            </Grid>
                        </Grid>  

                        <div>
                            <div className="mt40 text-center">
                                <Button variant="raised" color="primary" className="red-border-btn">
                                    Submit
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