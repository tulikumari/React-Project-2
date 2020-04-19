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
      <Grid key={3} item xs={11} sm={3} md={3}>
        <form noValidate autoComplete="off">            
            <Typography variant="headline">
                <b>Montly Availability:</b>
            </Typography>
            <div className="w-50">
                <FormControl className="type_select">
                    <InputLabel htmlFor="age-simple">30 Min.</InputLabel>
                    <Select
                        value={this.state.age}
                        onChange={this.handleChange}
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
            <Typography variant="headline" className="mt50">
                <b>Days you're available:</b> <a href="#" className="font-14 blue-txt">Select All</a>
            </Typography>
            <ul className="date_ul">
                <li><a href="#">Mon</a></li>
                <li><a href="#" className="active">Tue</a></li>
                <li><a href="#" className="active">Wed</a></li>
                <li><a href="#">Thu</a></li>
                <li><a href="#" className="active">Fri</a></li>
                <li><a href="#">Sat</a></li>
                <li><a href="#">Sun</a></li>
            </ul>

            <Typography variant="headline" className="mt50">
                <b>Volunteer To:</b>
            </Typography>
            <div className="w-70">
                <FormControl className="type_select">
                    <InputLabel htmlFor="age-simple"></InputLabel>
                    <Select
                        value={this.state.age}
                        onChange={this.handleChange}
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
        </form>
      </Grid>
      <Grid key={3} item xs={11} sm={1} md={1}></Grid>
      <Grid key={3} item xs={11} sm={7} md={7}>
                  <div >
                    <form noValidate autoComplete="off">
                    
                      <Typography variant="headline" className="mb15">
                         <b>Volunteer Where:</b>
                       </Typography>
                       <div>Within:</div>
                       

                                <Grid
                                    container
                                    direction="row"
                                >
                                    <Grid item xs={12} sm={4} md={4} lg={4} className="spcInputRght">
                                        <FormControl className="type_select">
                                            <InputLabel htmlFor="age-simple">5 Miles</InputLabel>
                                            <Select
                                                value={this.state.age}
                                                onChange={this.handleChange}
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
                                    <Grid item xs={12} sm={1} md={1} lg={1} className="spcInputRght text-center mt40">
                                    of
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} lg={4} className="spcInputLft">
                                        <FormControl className="type_select">
                                            <InputLabel htmlFor="age-simple">City</InputLabel>
                                            <Select
                                                value={this.state.age}
                                                onChange={this.handleChange}
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
                                        <FormControl className="type_select">
                                            <InputLabel htmlFor="age-simple">State</InputLabel>
                                            <Select
                                                value={this.state.age}
                                                onChange={this.handleChange}
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
                                <div className="d-inline">
                                    <Typography variant="headline" className="mt50">
                                        <b>Ok to contact me about volunteering:</b>
                                    </Typography>
                                    <div className="text-right">(opt-in or out any time)</div>
                                </div>
                                <div className="w80">
                                    <FormControl className="type_select">
                                        <InputLabel htmlFor="age-simple">Yes</InputLabel>
                                        <Select
                                            value={this.state.age}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'age',
                                                id: 'age-simple'
                                            }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>No</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                    </form>
                  </div>
                </Grid>
            </Grid>
            <div className="mt40 text-center">
                <Button variant="raised" color="primary" className="red-border-btn">
                    SUBMIT
                </Button>
            </div>  
        </div>
        );
    }
}

Index.propTypes = {
    classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(Index);