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
      <Grid key={3} item xs={11} sm={7} md={7}>
                  <div >
                    <form noValidate autoComplete="off">
                      <Typography variant="headline" className="mb15">
                         <b>Senior Communities:</b>
                       </Typography>
                       <Typography variant="headline" className="txt2">
                         <b>54 Communities within 10-miles of 34699</b>
                       </Typography>
                       <Grid container direction="row" justify="center" alignItems="top" spacing={16} className="mt10">
                            <Grid key={3} item xs={3} sm={3}><img  width="100%" src="../../assets/images/home/background/1.png" alt="" title="" /></Grid>
                            <Grid key={3} item xs={9} sm={9} className="community_col">
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
                               <div className="red_text">Dummy text 
                               <HtmlTooltip
                                    title={
                                    <React.Fragment>
                                        <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                                        {"It's very engaging. Right?"}
                                    </React.Fragment>
                                    }
                                >
                                    <a>See more</a>
                                </HtmlTooltip>
                               </div>
                              </div>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="top" spacing={16} className="mt10">
                            <Grid key={3} item xs={3} sm={3}><img  width="100%" src="../../assets/images/home/background/1.png" alt="" title="" /></Grid>
                            <Grid key={3} item xs={9} sm={9} className="community_col">
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
                               <div className="red_text">Dummy text 
                               <HtmlTooltip
                                    title={
                                    <React.Fragment>
                                        <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                                        {"It's very engaging. Right?"}
                                    </React.Fragment>
                                    }
                                >
                                    <a>See more</a>
                                </HtmlTooltip>
                               </div>
                              </div>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="top" spacing={16} className="mt10">
                            <Grid key={3} item xs={3} sm={3}><img  width="100%" src="../../assets/images/home/background/1.png" alt="" title="" /></Grid>
                            <Grid key={3} item xs={9} sm={9} className="community_col">
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
                               <div className="red_text">Dummy text  
                               <HtmlTooltip
                                    title={
                                    <React.Fragment>
                                        <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                                        {"It's very engaging. Right?"}
                                    </React.Fragment>
                                    }
                                >
                                    <a>See more</a>
                                </HtmlTooltip>
                               </div>
                              </div>
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