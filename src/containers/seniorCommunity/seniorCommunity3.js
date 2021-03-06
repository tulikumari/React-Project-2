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
import './communityCss.css';

const styles = theme => ({
    root: {
      width: 500,
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
      <Grid key={3} item xs={11} sm={8} md={8}>
                  <div >
                    <form noValidate autoComplete="off">
                      <Typography variant="headline" className="mb15">
                         <b>Senior Communities:</b>
                       </Typography>
                       <Typography variant="headline" className="txt2">
                         <b>54 Communities within 10-miles of 34699</b>
                       </Typography>
                       <Grid container direction="row" justify="center" alignItems="top" spacing={16} className="mt10 senior_community2">
                            <Grid key={3} item xs={1} sm={1}>
                            <div className="circular_progress">
                              <p>84%</p>
                              <CircularProgress variant="static" value={50} className="circular_bar" color="#ffcc00" />
                            </div>
                            </Grid>
                            <Grid key={3} item xs={3} sm={3}><img  width="100%" src="../../assets/images/home/background/1.png" alt="" title="" /></Grid>
                            <Grid key={3} item xs={5} sm={4} className="community_col">
                              <h2><a href="#">ABC Senior Living</a></h2>
                              <div class="community_detail">
                               <div>Language:</div>
                               <div>English</div>
                              </div>
                              <div class="community_detail">
                               <div>Language:</div>
                               <div>English</div>
                              </div>
                              <div class="community_detail">
                               <div>Language:</div>
                               <div>English</div>
                              </div>
                              <div class="community_detail">
                               <div>Language:</div>
                               <div>Dummy text 
                               </div>
                              </div>
                            </Grid>
                            <Grid key={3} item xs={4} sm={4}>
                              <Grid container direction="row" justify="center" alignItems="top" spacing={0}>
                                  <Grid key={3} item xs={3} sm={3} className="text-center">
                                    <p className="community_tile3">Title</p>
                                    <p>4 of 6</p>
                                    <div className="circular_progress2">
                                      <p>80%</p>
                                      <CircularProgress variant="static" value={80} className="circular_bar2" color="#ffcc00" />
                                    </div>
                                  </Grid>
                                  <Grid key={3} item xs={3} sm={3} className="text-center">
                                    <p className="community_tile3">Title</p>
                                    <p>4 of 6</p>
                                    <div className="circular_progress2">
                                      <p>30%</p>
                                      <CircularProgress variant="static" value={30} className="circular_bar2" color="#ffcc00" />
                                    </div>
                                  </Grid>
                                  <Grid key={3} item xs={3} sm={3} className="text-center">
                                    <p className="community_tile3">Title</p>
                                    <p>4 of 6</p>
                                    <div className="circular_progress2">
                                      <p>20%</p>
                                      <CircularProgress variant="static" value={20} className="circular_bar2" color="#ffcc00" />
                                    </div>
                                  </Grid>
                                  <Grid key={3} item xs={3} sm={3} className="text-center">
                                    <p className="community_tile3">Title</p>
                                    <p>
                                      <HtmlTooltip
                                          title={
                                          <React.Fragment>
                                              <p>Content</p>
                                              <p>Content</p>
                                              <p>Content</p>
                                              <p>Content</p>
                                          </React.Fragment>
                                          }
                                      >
                                          <a>4 of 6</a>
                                      </HtmlTooltip>
                                    </p>
                                    <div className="circular_progress2">
                                      <p>50%</p>
                                      <CircularProgress variant="static" value={50} className="circular_bar2" color="#ffcc00" />
                                    </div>
                                  </Grid>
                              </Grid>
                              <p className="text-right blue-txt">Right side content</p>
                           </Grid>
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="top" spacing={16} className="mt10 senior_community2">
                            <Grid key={3} item xs={1} sm={1}>
                            <div className="circular_progress">
                              <p>84%</p>
                              <CircularProgress variant="static" value={50} className="circular_bar" color="#ffcc00" />
                            </div>
                            </Grid>
                            <Grid key={3} item xs={3} sm={3}><img  width="100%" src="../../assets/images/home/background/1.png" alt="" title="" /></Grid>
                            <Grid key={3} item xs={5} sm={4} className="community_col">
                              <h2><a href="#">ABC Senior Living</a></h2>
                              <div class="community_detail">
                               <div>Language:</div>
                               <div>English</div>
                              </div>
                              <div class="community_detail">
                               <div>Language:</div>
                               <div>English</div>
                              </div>
                              <div class="community_detail">
                               <div>Language:</div>
                               <div>English</div>
                              </div>
                              <div class="community_detail">
                               <div>Language:</div>
                               <div>Dummy text 
                               </div>
                              </div>
                            </Grid>
                            <Grid key={3} item xs={4} sm={4}>
                              <Grid container direction="row" justify="center" alignItems="top" spacing={0}>
                                  <Grid key={3} item xs={3} sm={3} className="text-center">
                                    <p className="community_tile3">Title</p>
                                    <p>4 of 6</p>
                                    <div className="circular_progress2">
                                      <p>80%</p>
                                      <CircularProgress variant="static" value={80} className="circular_bar2" color="#ffcc00" />
                                    </div>
                                  </Grid>
                                  <Grid key={3} item xs={3} sm={3} className="text-center">
                                    <p className="community_tile3">Title</p>
                                    <p>4 of 6</p>
                                    <div className="circular_progress2">
                                      <p>30%</p>
                                      <CircularProgress variant="static" value={30} className="circular_bar2" color="#ffcc00" />
                                    </div>
                                  </Grid>
                                  <Grid key={3} item xs={3} sm={3} className="text-center">
                                    <p className="community_tile3">Title</p>
                                    <p>4 of 6</p>
                                    <div className="circular_progress2">
                                      <p>20%</p>
                                      <CircularProgress variant="static" value={20} className="circular_bar2" color="#ffcc00" />
                                    </div>
                                  </Grid>
                                  <Grid key={3} item xs={3} sm={3} className="text-center">
                                    <p className="community_tile3">Title</p>
                                    <p>
                                      <HtmlTooltip
                                          title={
                                          <React.Fragment>
                                              <p>Content</p>
                                              <p>Content</p>
                                              <p>Content</p>
                                              <p>Content</p>
                                          </React.Fragment>
                                          }
                                      >
                                          <a>4 of 6</a>
                                      </HtmlTooltip>
                                    </p>
                                    <div className="circular_progress2">
                                      <p>50%</p>
                                      <CircularProgress variant="static" value={50} className="circular_bar2" color="#ffcc00" />
                                    </div>
                                  </Grid>
                              </Grid>
                              <p className="text-right blue-txt">Right side content</p>
                           </Grid>
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="top" spacing={16} className="mt10 senior_community2">
                            <Grid key={3} item xs={1} sm={1}>
                            <div className="circular_progress">
                              <p>84%</p>
                              <CircularProgress variant="static" value={50} className="circular_bar" color="#ffcc00" />
                            </div>
                            </Grid>
                            <Grid key={3} item xs={3} sm={3}><img  width="100%" src="../../assets/images/home/background/1.png" alt="" title="" /></Grid>
                            <Grid key={3} item xs={5} sm={4} className="community_col">
                              <h2><a href="#">ABC Senior Living</a></h2>
                              <div class="community_detail">
                               <div>Language:</div>
                               <div>English</div>
                              </div>
                              <div class="community_detail">
                               <div>Language:</div>
                               <div>English</div>
                              </div>
                              <div class="community_detail">
                               <div>Language:</div>
                               <div>English</div>
                              </div>
                              <div class="community_detail">
                               <div>Language:</div>
                               <div>Dummy text 
                               </div>
                              </div>
                            </Grid>
                            <Grid key={3} item xs={4} sm={4}>
                              <Grid container direction="row" justify="center" alignItems="top" spacing={0}>
                                  <Grid key={3} item xs={3} sm={3} className="text-center">
                                    <p className="community_tile3">Title</p>
                                    <p>4 of 6</p>
                                    <div className="circular_progress2">
                                      <p>80%</p>
                                      <CircularProgress variant="static" value={80} className="circular_bar2" color="#ffcc00" />
                                    </div>
                                  </Grid>
                                  <Grid key={3} item xs={3} sm={3} className="text-center">
                                    <p className="community_tile3">Title</p>
                                    <p>4 of 6</p>
                                    <div className="circular_progress2">
                                      <p>30%</p>
                                      <CircularProgress variant="static" value={30} className="circular_bar2" color="#ffcc00" />
                                    </div>
                                  </Grid>
                                  <Grid key={3} item xs={3} sm={3} className="text-center">
                                    <p className="community_tile3">Title</p>
                                    <p>4 of 6</p>
                                    <div className="circular_progress2">
                                      <p>20%</p>
                                      <CircularProgress variant="static" value={20} className="circular_bar2" color="#ffcc00" />
                                    </div>
                                  </Grid>
                                  <Grid key={3} item xs={3} sm={3} className="text-center">
                                    <p className="community_tile3">Title</p>
                                    <p>
                                      <HtmlTooltip
                                          title={
                                          <React.Fragment>
                                              <p>Content</p>
                                              <p>Content</p>
                                              <p>Content</p>
                                              <p>Content</p>
                                          </React.Fragment>
                                          }
                                      >
                                          <a>4 of 6</a>
                                      </HtmlTooltip>
                                    </p>
                                    <div className="circular_progress2">
                                      <p>50%</p>
                                      <CircularProgress variant="static" value={50} className="circular_bar2" color="#ffcc00" />
                                    </div>
                                  </Grid>
                              </Grid>
                              <p className="text-right blue-txt">Right side content</p>
                           </Grid>
                        </Grid>
                        <div>
                            <div className="mt40 text-center">
                                <Button variant="raised" color="primary" className="red-border-btn">
                                    Read More Like This
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