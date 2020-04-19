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
        <Typography variant="headline" className="mb15">
          <b>Refine Search:</b>
        </Typography>
        <div className="userBasics mt40">
          <label className="basicInfoLbl">Volunteers</label>
          <div>
          <form noValidate autoComplete="off">
          <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                >
                                    <Grid item xs={12} sm={6} md={6} lg={6} className="spcInputRght">

                                        <FormControl className="type_select">
                                            <InputLabel htmlFor="age-simple">Within</InputLabel>
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

                                    <Grid item xs={12} sm={6} md={6} lg={6} className="spcInputLft">
                                            <TextField
                                            id=""
                                            label="Zip"
                                            //variant="search"
                                            className={classes.textField}
                                            margin="normal"
                                        />

                                    </Grid>
                                </Grid>
                            <div className="letStartUsr">

                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                >
                                    <Grid item xs={12} sm={6} md={6} lg={6} className="spcInputRght">
                                        <TextField
                                            id=""
                                            label="City"
                                            //variant="search"
                                            className={classes.textField}
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6} className="spcInputLft">
                                        <TextField
                                            id=""
                                            label="State"
                                            //variant="search"
                                            className={classes.textField}
                                            margin="normal"
                                        />
                                    </Grid>
                                </Grid>

                                <TextField
                                    id=""
                                    label="Business Name"
                                    //variant="search"
                                    className={classes.textField}
                                    margin="normal"
                                />

                                 <TextField
                                    id=""
                                    label="County"
                                    //variant="search"
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <Button variant="raised" color="primary" className={classes.button} className="create_submit">
                                    Submit
                             </Button>

                            </div>
                        </form>
          </div>
        </div>
        <div className="userBasics mt40">
          <label className="basicInfoLbl">Volunteers Type:</label>
          <div>
            <ul className="left_search_ul">
              <li><a href="#">Current Events</a></li>
              <li><a href="#" className="current">Current Events</a></li>
              <li><a href="#">Current Events</a></li>
              <li><a href="#">Current Events</a></li>
              <li><a href="#">Current Events</a></li>
            </ul>
          </div>
        </div>
      </Grid>
      <Grid key={3} item xs={11} sm={1} md={1}></Grid>
      <Grid key={3} item xs={11} sm={7} md={7}>
                  <div >
                    <form noValidate autoComplete="off">
                    
                      <Typography variant="headline" className="mb15">
                         <b>Search:</b>
                       </Typography>
                       <Grid container direction="row" justify="center" alignItems="top" spacing={16} className="mt10 senior_community2">
                            <Grid key={3} item xs={10} sm={10} md={3}>
                              <div className="volunteers_img">
                                 <div>32 links</div>
                                 <img  width="100%" src="../../assets/images/home/background/1.png" alt="" title="" />
                              </div>
                            </Grid>
                            <Grid key={6} item xs={12} sm={12} md={9} className="community_col">
                              <h2>Sandra Johnson Tarpon Springs, FL 34689</h2>
                              <div className="ml-40 mt5">Music instrumnet Piano/Games/Current Events</div>
                              <div className="current_volunter">
                                 <i><img  width="100%" src="../../assets/images/community/tick_icon2.png" width="30" alt="" title="" /></i>
                                 Currently volunteers at Brookdale North West Hills
                              </div>
                              <div className="ml-40 mt5">
                                 <Grid container direction="row" alignItems="top" spacing={0}>
                                    <Grid key={3} item xs={12} lg={4}><a href="#" className="blue-txt">References</a></Grid>
                                    <Grid key={3} item xs={12} lg={4}><a href="#" className="blue-txt">6</a> Positive Reviews</Grid>
                                  </Grid>
                              </div>  
                            </Grid>
                        </Grid>
                        <div className="mt40">*Check availability by Month Da or Time</div>
                        <div className="mt20 font-24">Check Sandra Johnson's availability by:</div>
                        <Grid
                                    container
                                    direction="row"
                                >
                                    <Grid item xs={12} sm={4} md={4} lg={4} className="spcInputRght">
                                        <FormControl className="type_select">
                                            <InputLabel htmlFor="age-simple">Month</InputLabel>
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

                                <Grid
                                    container
                                    direction="row"
                                >
                                    <Grid item xs={12} sm={4} md={4} lg={4} className="spcInputRght">
                                        <FormControl className="type_select">
                                            <InputLabel htmlFor="age-simple">Month</InputLabel>
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

                                    <Grid item xs={12} sm={4} md={4} lg={4} className="spcInputLft">
                                     <div className="d-inline time_select d-inline">
                                      <FormControl className="type_select">
                                            <InputLabel htmlFor="age-simple">Day</InputLabel>
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
                                        <img className="d-inline" width="30" src="../../assets/images/community/calender.png" alt="" title="" />
                                    </Grid>
                                </Grid>

                                <Grid
                                    container
                                    direction="row"
                                >
                                    <Grid item xs={12} sm={4} md={4} lg={4} className="spcInputRght">
                                        <FormControl className="type_select">
                                            <InputLabel htmlFor="age-simple">Month</InputLabel>
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

                                    <Grid item xs={12} sm={4} md={4} lg={4} className="spcInputLft">
                                     <div className="d-inline time_select d-inline">
                                      <FormControl className="type_select">
                                            <InputLabel htmlFor="age-simple">Day</InputLabel>
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
                                        <img className="d-inline" width="30" src="../../assets/images/community/calender.png" alt="" title="" />
                                    </Grid>

                                    <Grid item xs={12} sm={4} md={4} lg={4} className="spcInputLft">
                                     <div className="d-inline time_select d-inline">
                                      <FormControl className="type_select">
                                            <InputLabel htmlFor="age-simple">Time</InputLabel>
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
                                        <img className="d-inline" width="30" src="../../assets/images/community/time.png" alt="" title="" />
                                    </Grid>
                                </Grid>
                       
                        
                        <div>
                            <div className="mt40 text-center">
                                <Button variant="raised" color="primary" className="red-border-btn">
                                    REQUEST
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