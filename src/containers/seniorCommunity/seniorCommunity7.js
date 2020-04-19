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
     
      <Grid key={3} item xs={11} sm={8} md={8}>
        <div className="p-20 mx-20 border-grey">
                    <form noValidate autoComplete="off">
                       <div><a href="#" className="blue-txt">Back to Community Search Results</a></div>
                       <Grid container direction="row" justify="center" alignItems="top" spacing={16} className="mt10 senior_community2">
                            <Grid key={3} item xs={1} sm={1}>
                            <div className="circular_progress circular_progress3">
                              <p>84%</p>
                              <CircularProgress variant="static" value={50} className="circular_bar" color="#ffcc00" />
                            </div>
                            </Grid>
                            <Grid key={3} item xs={2} sm={2}>
                              <img  width="100%" src="../../assets/images/home/background/1.png" alt="" title="" />
                            </Grid>
                            <Grid key={3} item xs={6} sm={5} className="community_col">
                              <h2><a href="#">ABC Senior Living</a></h2>
                              <div class="community_detail">
                               <div>Location:</div>
                               <div>Tarpon Springs, Florida</div>
                              </div>
                              <div class="community_detail">
                               <div>Type:</div>
                               <div>Assisted Living Community</div>
                              </div>
                              <div class="community_detail">
                               <div>Connected:</div>
                               <div>
                               <HtmlTooltip
                                          title={
                                            <React.Fragment>
                                            <Grid container direction="row" alignItems="top" spacing={0} className="tooltip_container">
                                              <Grid key={3} item xs={12} sm={6}>
                                                <ul className="tooltip_ul">
                                                   <li>
                                                     <div><img width="40" src="../../assets/images/icons/tooltip_icon1.png" alt="" title="" /></div>
                                                     <div>Auctioneer</div>
                                                     <div>$100 <sup>OFF</sup></div>
                                                     <div>
                                                        <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                        <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                        <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                     </div>
                                                   </li>
                                                   <li>
                                                     <div><img width="40" src="../../assets/images/icons/tooltip_icon2.png" alt="" title="" /></div>
                                                     <div>Auctioneer</div>
                                                     <div>$100 <sup>OFF</sup></div>
                                                     <div>
                                                        <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                        <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                        <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                     </div>
                                                   </li>
                                                   <li>
                                                     <div><img width="40" src="../../assets/images/icons/tooltip_icon3.png" alt="" title="" /></div>
                                                     <div>Auctioneer</div>
                                                     <div>$100 <sup>OFF</sup></div>
                                                     <div>
                                                        <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                        <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                        <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                     </div>
                                                   </li>
                                                </ul>
                                              </Grid>
                                              <Grid key={3} item xs={12} sm={6}>
                                                <ul className="tooltip_ul">
                                                   <li>
                                                     <div><img width="40" src="../../assets/images/icons/tooltip_icon1.png" alt="" title="" /></div>
                                                     <div>Auctioneer</div>
                                                     <div>$100 <sup>OFF</sup></div>
                                                     <div>
                                                        <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                        <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                        <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                     </div>
                                                   </li>
                                                   <li>
                                                     <div><img width="40" src="../../assets/images/icons/tooltip_icon3.png" alt="" title="" /></div>
                                                     <div>Auctioneer</div>
                                                     <div>$100 <sup>OFF</sup></div>
                                                     <div>
                                                        <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                        <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                        <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                     </div>
                                                   </li>
                                                   <li>
                                                     <div><img width="40" src="../../assets/images/icons/tooltip_icon3.png" alt="" title="" /></div>
                                                     <div>Auctioneer</div>
                                                     <div>$100 <sup>OFF</sup></div>
                                                     <div>
                                                        <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                        <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                        <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                     </div>
                                                   </li>
                                                </ul>
                                              </Grid>
                                            </Grid> 
                                       </React.Fragment>
                                          }
                                      >
                                          <a>14</a>
                                      </HtmlTooltip> Connects = $3,200.00 in incentives
                               </div>
                              </div>
                              <div class="community_detail">
                               <div>incentives:</div>
                               <div><a href="#">160% OFF</a> <span className="font-22 font-w-500 green-txt">= $6,700.00 - $7,680.00</span>
                               </div>
                              </div>
                            </Grid>
                            <Grid key={3} item xs={4} sm={4}>
                              <Grid container direction="row" justify="center" alignItems="top" spacing={0}>
                                  <Grid key={3} item xs={3} sm={3} className="text-center">
                                    <p className="community_tile3">Specialities</p>
                                    <p>4 of 6</p>
                                    <div className="circular_progress2">
                                      <p>80%</p>
                                      <CircularProgress variant="static" value={80} className="circular_bar2" color="#ffcc00" />
                                    </div>
                                  </Grid>
                                  <Grid key={3} item xs={3} sm={3} className="text-center">
                                    <p className="community_tile3">Amenities</p>
                                    <p>4 of 6</p>
                                    <div className="circular_progress2">
                                      <p>30%</p>
                                      <CircularProgress variant="static" value={30} className="circular_bar2" color="#ffcc00" />
                                    </div>
                                  </Grid>
                                  <Grid key={3} item xs={3} sm={3} className="text-center">
                                    <p className="community_tile3">$Rate+/-<br /></p>
                                    <p>In-Range</p>
                                    <div className="circular_progress2">
                                      <p>100%</p>
                                      <CircularProgress variant="static" value={100} className="circular_bar2" color="#ffcc00" />
                                    </div>
                                  </Grid>
                                  <Grid key={3} item xs={3} sm={3} className="text-center">
                                    <p className="community_tile3">Provides</p>
                                    <p>4 of 6</p>
                                    <div className="circular_progress2">
                                      <p>50%</p>
                                      <CircularProgress variant="static" value={50} className="circular_bar2" color="#ffcc00" />
                                    </div>
                                  </Grid>
                              </Grid>
                              <div className="text-right blue-txt">
                              <p className="pr-20"><a href="#" className="blue-txt"><img width="20" src="../../assets/images/icons/delete.png" alt="" title="" /></a> <a href="#" className="blue-txt  ml-8"><img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" /></a> <a href="#" className="blue-txt ml-8"><img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" /></a></p>
                              </div>
                           </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="top" spacing={16} className="mt10 senior_community2">
                            <Grid key={3} item xs={1} sm={1}></Grid>
                            <Grid key={3} item xs={2} sm={2}>
                              <div className="text-center"><img width="60" src="../../assets/images/icons/add_icon.png" alt="" title="" /></div>
                            </Grid>
                        </Grid>
                       
                        <hr className="mt20 mb20" />


                       <div><a href="#" className="blue-txt">Back to Providers Search Results</a></div>
                       <Grid container direction="row" justify="center" alignItems="top" spacing={16} className="mt10 senior_community2">
                            <Grid key={3} item xs={12} sm={2}>
                              <div class="process_image">
                                <img  src="../../assets/images/home/icons/logo-icon2.png" alt="" title="" />
                                <div class="cross_icon"><a href="#"><img  src="../../assets/images/icons/cross_icon.png" alt="" title="" /></a></div>
                                <div class="save_icon"><a href="#"><img  src="../../assets/images/icons/save_icon.png" alt="" title="" /></a></div>
                              </div>
                            </Grid>
                            <Grid key={3} item xs={12} sm={5} className="community_col">
                              <h2><a href="#">ABC Senior Living</a></h2>
                              <div class="community_detail">
                               <div>Location:</div>
                               <div>Tarpon Springs, Florida</div>
                              </div>
                              <div class="community_detail">
                               <div>Type:</div>
                               <div>Assisted Living Community</div>
                              </div>
                              <div class="community_detail">
                               <div>Connected:</div>
                               <div>
                               <HtmlTooltip
                                          title={
                                          <React.Fragment>
                                               <Grid container direction="row" alignItems="top" spacing={0} className="tooltip_container">
                                                 <Grid key={3} item xs={12} sm={6}>
                                                   <ul className="tooltip_ul">
                                                      <li>
                                                        <div><img width="40" src="../../assets/images/icons/tooltip_icon1.png" alt="" title="" /></div>
                                                        <div>Auctioneer</div>
                                                        <div>$100 <sup>OFF</sup></div>
                                                        <div>
                                                           <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                           <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                           <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                        </div>
                                                      </li>
                                                      <li>
                                                        <div><img width="40" src="../../assets/images/icons/tooltip_icon2.png" alt="" title="" /></div>
                                                        <div>Auctioneer</div>
                                                        <div>$100 <sup>OFF</sup></div>
                                                        <div>
                                                           <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                           <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                           <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                        </div>
                                                      </li>
                                                      <li>
                                                        <div><img width="40" src="../../assets/images/icons/tooltip_icon3.png" alt="" title="" /></div>
                                                        <div>Auctioneer</div>
                                                        <div>$100 <sup>OFF</sup></div>
                                                        <div>
                                                           <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                           <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                           <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                        </div>
                                                      </li>
                                                   </ul>
                                                 </Grid>
                                                 <Grid key={3} item xs={12} sm={6}>
                                                   <ul className="tooltip_ul">
                                                      <li>
                                                        <div><img width="40" src="../../assets/images/icons/tooltip_icon1.png" alt="" title="" /></div>
                                                        <div>Auctioneer</div>
                                                        <div>$100 <sup>OFF</sup></div>
                                                        <div>
                                                           <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                           <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                           <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                        </div>
                                                      </li>
                                                      <li>
                                                        <div><img width="40" src="../../assets/images/icons/tooltip_icon3.png" alt="" title="" /></div>
                                                        <div>Auctioneer</div>
                                                        <div>$100 <sup>OFF</sup></div>
                                                        <div>
                                                           <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                           <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                           <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                        </div>
                                                      </li>
                                                      <li>
                                                        <div><img width="40" src="../../assets/images/icons/tooltip_icon3.png" alt="" title="" /></div>
                                                        <div>Auctioneer</div>
                                                        <div>$100 <sup>OFF</sup></div>
                                                        <div>
                                                           <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                           <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                           <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                        </div>
                                                      </li>
                                                   </ul>
                                                 </Grid>
                                               </Grid> 
                                          </React.Fragment>
                                          }
                                      >
                                          <a>14</a>
                                      </HtmlTooltip> Connects = $3,200.00 in incentives
                               </div>
                              </div>
                              <div class="community_detail">
                               <div>incentives:</div>
                               <div><a href="#">Free Will Revision</a>
                               </div>
                              </div>
                            </Grid>
                            <Grid key={3} item xs={12} sm={3} className="text-center">
                              <p>18 Connections</p>
                              <div className="mt20">
                                <p><b>Estimated Savings:</b></p>
                                <p className="font-22 font-w-500 green-txt">$275.00-$595.05</p>
                              </div>
                              <div>
                                exp. 31.10.2019
                              </div>
                            </Grid>
                            <Grid key={3} item xs={12} sm={2}>
                              <div className="text-right blue-txt">
                                <p className="pr-20"><a href="#" className="blue-txt"><img width="20" src="../../assets/images/icons/delete.png" alt="" title="" /></a> <a href="#" className="blue-txt  ml-8"><img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" /></a> <a href="#" className="blue-txt ml-8"><img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" /></a></p>
                              </div>
                           </Grid>
                        </Grid>



                        <Grid container direction="row" justify="center" alignItems="top" spacing={16} className="mt10 senior_community2">
                            <Grid key={3} item xs={12} sm={2}>
                              <div class="process_image">
                                <img  src="../../assets/images/home/icons/logo-icon2.png" alt="" title="" />
                                <div class="cross_icon"><a href="#"><img  src="../../assets/images/icons/cross_icon.png" alt="" title="" /></a></div>
                                <div class="save_icon"><a href="#"><img  src="../../assets/images/icons/save_icon.png" alt="" title="" /></a></div>
                              </div>
                            </Grid>
                            <Grid key={3} item xs={12} sm={5} className="community_col">
                              <h2><a href="#">ABC Senior Living</a></h2>
                              <div class="community_detail">
                               <div>Location:</div>
                               <div>Tarpon Springs, Florida</div>
                              </div>
                              <div class="community_detail">
                               <div>Type:</div>
                               <div>Assisted Living Community</div>
                              </div>
                              <div class="community_detail">
                               <div>Connected:</div>
                               <div>
                               <HtmlTooltip
                                          title={
                                          <React.Fragment>
                                               <Grid container direction="row" alignItems="top" spacing={0} className="tooltip_container">
                                                 <Grid key={3} item xs={12} sm={6}>
                                                   <ul className="tooltip_ul">
                                                      <li>
                                                        <div><img width="40" src="../../assets/images/icons/tooltip_icon1.png" alt="" title="" /></div>
                                                        <div>Auctioneer</div>
                                                        <div>$100 <sup>OFF</sup></div>
                                                        <div>
                                                           <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                           <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                           <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                        </div>
                                                      </li>
                                                      <li>
                                                        <div><img width="40" src="../../assets/images/icons/tooltip_icon2.png" alt="" title="" /></div>
                                                        <div>Auctioneer</div>
                                                        <div>$100 <sup>OFF</sup></div>
                                                        <div>
                                                           <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                           <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                           <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                        </div>
                                                      </li>
                                                      <li>
                                                        <div><img width="40" src="../../assets/images/icons/tooltip_icon3.png" alt="" title="" /></div>
                                                        <div>Auctioneer</div>
                                                        <div>$100 <sup>OFF</sup></div>
                                                        <div>
                                                           <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                           <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                           <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                        </div>
                                                      </li>
                                                   </ul>
                                                 </Grid>
                                                 <Grid key={3} item xs={12} sm={6}>
                                                   <ul className="tooltip_ul">
                                                      <li>
                                                        <div><img width="40" src="../../assets/images/icons/tooltip_icon1.png" alt="" title="" /></div>
                                                        <div>Auctioneer</div>
                                                        <div>$100 <sup>OFF</sup></div>
                                                        <div>
                                                           <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                           <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                           <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                        </div>
                                                      </li>
                                                      <li>
                                                        <div><img width="40" src="../../assets/images/icons/tooltip_icon3.png" alt="" title="" /></div>
                                                        <div>Auctioneer</div>
                                                        <div>$100 <sup>OFF</sup></div>
                                                        <div>
                                                           <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                           <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                           <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                        </div>
                                                      </li>
                                                      <li>
                                                        <div><img width="40" src="../../assets/images/icons/tooltip_icon3.png" alt="" title="" /></div>
                                                        <div>Auctioneer</div>
                                                        <div>$100 <sup>OFF</sup></div>
                                                        <div>
                                                           <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                           <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                           <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                        </div>
                                                      </li>
                                                   </ul>
                                                 </Grid>
                                               </Grid> 
                                          </React.Fragment>
                                          }
                                      >
                                          <a>14</a>
                                      </HtmlTooltip> Connects = $3,200.00 in incentives
                               </div>
                              </div>
                              <div class="community_detail">
                               <div>incentives:</div>
                               <div><a href="#">Free Will Revision</a>
                               </div>
                              </div>
                            </Grid>
                            <Grid key={3} item xs={12} sm={3} className="text-center">
                              <p>18 Connections</p>
                              <div className="mt20">
                                <p><b>Estimated Savings:</b></p>
                                <p className="font-22 font-w-500 green-txt">$275.00-$595.05</p>
                              </div>
                              <div>
                                exp. 31.10.2019
                              </div>
                            </Grid>
                            <Grid key={3} item xs={12} sm={2}>
                              <div className="text-right blue-txt">
                                <p className="pr-20"><a href="#" className="blue-txt"><img width="20" src="../../assets/images/icons/delete.png" alt="" title="" /></a> <a href="#" className="blue-txt  ml-8"><img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" /></a> <a href="#" className="blue-txt ml-8"><img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" /></a></p>
                              </div>
                           </Grid>
                        </Grid>



                        <Grid container direction="row" justify="center" alignItems="top" spacing={16} className="mt10 senior_community2">
                            <Grid key={3} item xs={12} sm={2}>
                              <div class="process_image">
                                <img  src="../../assets/images/home/icons/logo-icon2.png" alt="" title="" />
                                <div class="cross_icon"><a href="#"><img  src="../../assets/images/icons/cross_icon.png" alt="" title="" /></a></div>
                                <div class="save_icon"><a href="#"><img  src="../../assets/images/icons/save_icon.png" alt="" title="" /></a></div>
                              </div>
                            </Grid>
                            <Grid key={3} item xs={12} sm={5} className="community_col">
                              <h2><a href="#">ABC Senior Living</a></h2>
                              <div class="community_detail">
                               <div>Location:</div>
                               <div>Tarpon Springs, Florida</div>
                              </div>
                              <div class="community_detail">
                               <div>Type:</div>
                               <div>Assisted Living Community</div>
                              </div>
                              <div class="community_detail">
                               <div>Connected:</div>
                               <div>
                               <HtmlTooltip
                                          title={
                                          <React.Fragment>
                                               <Grid container direction="row" alignItems="top" spacing={0} className="tooltip_container">
                                                 <Grid key={3} item xs={12} sm={6}>
                                                   <ul className="tooltip_ul">
                                                      <li>
                                                        <div><img width="40" src="../../assets/images/icons/tooltip_icon1.png" alt="" title="" /></div>
                                                        <div>Auctioneer</div>
                                                        <div>$100 <sup>OFF</sup></div>
                                                        <div>
                                                           <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                           <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                           <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                        </div>
                                                      </li>
                                                      <li>
                                                        <div><img width="40" src="../../assets/images/icons/tooltip_icon2.png" alt="" title="" /></div>
                                                        <div>Auctioneer</div>
                                                        <div>$100 <sup>OFF</sup></div>
                                                        <div>
                                                           <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                           <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                           <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                        </div>
                                                      </li>
                                                      <li>
                                                        <div><img width="40" src="../../assets/images/icons/tooltip_icon3.png" alt="" title="" /></div>
                                                        <div>Auctioneer</div>
                                                        <div>$100 <sup>OFF</sup></div>
                                                        <div>
                                                           <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                           <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                           <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                        </div>
                                                      </li>
                                                   </ul>
                                                 </Grid>
                                                 <Grid key={3} item xs={12} sm={6}>
                                                   <ul className="tooltip_ul">
                                                      <li>
                                                        <div><img width="40" src="../../assets/images/icons/tooltip_icon1.png" alt="" title="" /></div>
                                                        <div>Auctioneer</div>
                                                        <div>$100 <sup>OFF</sup></div>
                                                        <div>
                                                           <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                           <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                           <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                        </div>
                                                      </li>
                                                      <li>
                                                        <div><img width="40" src="../../assets/images/icons/tooltip_icon3.png" alt="" title="" /></div>
                                                        <div>Auctioneer</div>
                                                        <div>$100 <sup>OFF</sup></div>
                                                        <div>
                                                           <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                           <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                           <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                        </div>
                                                      </li>
                                                      <li>
                                                        <div><img width="40" src="../../assets/images/icons/tooltip_icon3.png" alt="" title="" /></div>
                                                        <div>Auctioneer</div>
                                                        <div>$100 <sup>OFF</sup></div>
                                                        <div>
                                                           <img width="20" src="../../assets/images/icons/save_icon3.png" alt="" title="" />
                                                           <img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" className="ml-4" />
                                                           <img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" className="ml-4" />
                                                        </div>
                                                      </li>
                                                   </ul>
                                                 </Grid>
                                               </Grid> 
                                          </React.Fragment>
                                          }
                                      >
                                          <a>14</a>
                                      </HtmlTooltip> Connects = $3,200.00 in incentives
                               </div>
                              </div>
                              <div class="community_detail">
                               <div>incentives:</div>
                               <div><a href="#">Free Will Revision</a>
                               </div>
                              </div>
                            </Grid>
                            <Grid key={3} item xs={12} sm={3} className="text-center">
                              <p>18 Connections</p>
                              <div className="mt20">
                                <p><b>Estimated Savings:</b></p>
                                <p className="font-22 font-w-500 green-txt">$275.00-$595.05</p>
                              </div>
                              <div>
                                exp. 31.10.2019
                              </div>
                            </Grid>
                            <Grid key={3} item xs={12} sm={2}>
                              <div className="text-right blue-txt">
                                <p className="pr-20"><a href="#" className="blue-txt"><img width="20" src="../../assets/images/icons/delete.png" alt="" title="" /></a> <a href="#" className="blue-txt  ml-8"><img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" /></a> <a href="#" className="blue-txt ml-8"><img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" /></a></p>
                              </div>
                           </Grid>
                        </Grid>

                        <Grid container direction="row" alignItems="top" spacing={16} className="mt10 senior_community2">
                            <Grid key={3} item xs={2} sm={2}>
                              <div className="text-center"><img width="60" src="../../assets/images/icons/add_icon.png" alt="" title="" /></div>
                            </Grid>
                        </Grid>

                        <div>
                            <div className="mt40 text-center">
                                <Button variant="raised" color="primary" className="red-border-btn w120">
                                  <img width="40" src="../../assets/images/icons/save_icon2.png" alt="" title="" />
                                </Button>
                                <Button variant="raised" color="primary" className="red-border-btn ml-20">
                                  <img width="40" src="../../assets/images/icons/save_icon2.png" alt="" title="" /> <span className="ml-10 font-22">&</span>  <img width="40" src="../../assets/images/icons/share_icon2.png" alt="" title="" className="ml-10" />
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