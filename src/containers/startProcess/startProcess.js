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
import './processCss.css';

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
                       <Typography variant="headline" className="txt2">
                         <b>Want to Start a Process</b>
                       </Typography>
                       <Grid container direction="row" alignItems="top" spacing={16} className="mt10 senior_community2">
                            <Grid key={3} item xs={1} sm={1} className="mt30">
                              <a href="#" className="blue-txt font-weight-600">Pause</a>
                            </Grid>
                            <Grid key={3} item xs={2} sm={2}>
                             <div class="process_image">
                              <img  src="../../assets/images/home/icons/logo-icon.png" alt="" title="" />
                              <p>24 Links</p>
                             </div>
                            </Grid>
                            <Grid key={3} item xs={5} sm={4} className="community_col font-weight-600">
                              <p>50% Off First Visit</p>
                              <div class="process_detail">
                               <div>Estimated Savings:</div>
                               <div>$80.00</div>
                              </div>                              
                              <p className="mt10">
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
                                    <a href="#" className="blue-txt">Details</a>
                                </HtmlTooltip>
                              </p>
                            </Grid>
                            <Grid key={3} item xs={3} sm={3} className="font-weight-600">
                              <p><a href="#" className="blue-txt">Biggest discount <br /> 8 more like this</a></p>
                            </Grid>
                            <Grid key={3} item xs={1} sm={1} className="text-right mt20">
                              <p><a href="#" className="blue-txt"><img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" /></a> <a href="#" className="blue-txt ml-8"><img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" /></a></p>
                            </Grid>
                          </Grid>

                          <Grid container direction="row" alignItems="top" spacing={16} className="mt10 senior_community2">
                            <Grid key={3} item xs={1} sm={1} className="mt30">
                              <a href="#" className="blue-txt font-weight-600">Pause</a>
                            </Grid>
                            <Grid key={3} item xs={2} sm={2}>
                             <div class="process_image">
                              <img  src="../../assets/images/home/icons/logo-icon.png" alt="" title="" />
                              <p>24 Links</p>
                             </div>
                            </Grid>
                            <Grid key={3} item xs={5} sm={4} className="community_col font-weight-600">
                              <p>50% Off First Visit</p>
                              <div class="process_detail">
                               <div>Estimated Savings:</div>
                               <div>$80.00</div>
                              </div>                              
                              <p className="mt10">
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
                                    <a href="#" className="blue-txt">Details</a>
                                </HtmlTooltip>
                              </p>
                            </Grid>
                            <Grid key={3} item xs={3} sm={3} className="font-weight-600">
                              <p><a href="#" className="blue-txt">Biggest discount <br /> 8 more like this</a></p>
                            </Grid>
                            <Grid key={3} item xs={1} sm={1} className="text-right mt20">
                              <p><a href="#" className="blue-txt"><img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" /></a> <a href="#" className="blue-txt ml-8"><img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" /></a></p>
                            </Grid>
                          </Grid>

                          <Grid container direction="row" alignItems="top" spacing={16} className="mt10 senior_community2">
                            <Grid key={3} item xs={1} sm={1} className="mt30">
                              <a href="#" className="blue-txt font-weight-600">Pause</a>
                            </Grid>
                            <Grid key={3} item xs={2} sm={2}>
                             <div class="process_image">
                              <img  src="../../assets/images/home/icons/logo-icon.png" alt="" title="" />
                              <p>24 Links</p>
                             </div>
                            </Grid>
                            <Grid key={3} item xs={5} sm={4} className="community_col font-weight-600">
                              <p>50% Off First Visit</p>
                              <div class="process_detail">
                               <div>Estimated Savings:</div>
                               <div>$80.00</div>
                              </div>                              
                              <p className="mt10">
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
                                    <a href="#" className="blue-txt">Details</a>
                                </HtmlTooltip>
                              </p>
                            </Grid>
                            <Grid key={3} item xs={3} sm={3} className="font-weight-600">
                              <p><a href="#" className="blue-txt">Biggest discount <br /> 8 more like this</a></p>
                            </Grid>
                            <Grid key={3} item xs={1} sm={1} className="text-right mt20">
                              <p><a href="#" className="blue-txt"><img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" /></a> <a href="#" className="blue-txt ml-8"><img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" /></a></p>
                            </Grid>
                          </Grid>

                          <Grid container direction="row" alignItems="top" spacing={16} className="mt10 senior_community2">
                            <Grid key={3} item xs={1} sm={1} className="mt30">
                              <a href="#" className="blue-txt font-weight-600">Pause</a>
                            </Grid>
                            <Grid key={3} item xs={2} sm={2}>
                             <div class="process_image">
                              <img  src="../../assets/images/home/icons/logo-icon.png" alt="" title="" />
                              <p>24 Links</p>
                             </div>
                            </Grid>
                            <Grid key={3} item xs={5} sm={4} className="community_col font-weight-600">
                              <p>50% Off First Visit</p>
                              <div class="process_detail">
                               <div>Estimated Savings:</div>
                               <div>$80.00</div>
                              </div>                              
                              <p className="mt10">
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
                                    <a href="#" className="blue-txt">Details</a>
                                </HtmlTooltip>
                              </p>
                            </Grid>
                            <Grid key={3} item xs={3} sm={3} className="font-weight-600">
                              <p><a href="#" className="blue-txt">Biggest discount <br /> 8 more like this</a></p>
                            </Grid>
                            <Grid key={3} item xs={1} sm={1} className="text-right mt20">
                              <p><a href="#" className="blue-txt"><img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" /></a> <a href="#" className="blue-txt ml-8"><img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" /></a></p>
                            </Grid>
                          </Grid>

                          <Grid container direction="row" alignItems="top" spacing={16} className="mt10 senior_community2">
                            <Grid key={3} item xs={1} sm={1} className="mt30">
                              <a href="#" className="blue-txt font-weight-600">Pause</a>
                            </Grid>
                            <Grid key={3} item xs={2} sm={2}>
                             <div class="process_image">
                              <img  src="../../assets/images/home/icons/logo-icon.png" alt="" title="" />
                              <p>24 Links</p>
                             </div>
                            </Grid>
                            <Grid key={3} item xs={5} sm={4} className="community_col font-weight-600">
                              <p>50% Off First Visit</p>
                              <div class="process_detail">
                               <div>Estimated Savings:</div>
                               <div>$80.00</div>
                              </div>                              
                              <p className="mt10">
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
                                    <a href="#" className="blue-txt">Details</a>
                                </HtmlTooltip>
                              </p>
                            </Grid>
                            <Grid key={3} item xs={3} sm={3} className="font-weight-600">
                              <p><a href="#" className="blue-txt">Biggest discount <br /> 8 more like this</a></p>
                            </Grid>
                            <Grid key={3} item xs={1} sm={1} className="text-right mt20">
                              <p><a href="#" className="blue-txt"><img width="20" src="../../assets/images/icons/mail_icon.png" alt="" title="" /></a> <a href="#" className="blue-txt ml-8"><img width="20" src="../../assets/images/icons/share_icon.png" alt="" title="" /></a></p>
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