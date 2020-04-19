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
      <Grid key={3} item xs={11} sm={8} md={10}>
                  <div >
                    <form noValidate autoComplete="off">
                      <Typography variant="headline" className="mb15">
                         <b>Senior Communities:</b>
                       </Typography>
                       <Grid container direction="row" justify="center" alignItems="top" spacing={16} className="mt10">
                            <Grid key={3} item xs={11} sm={5}><img  width="100%" src="../../assets/images/community/img1.jpg" alt="" title="" /></Grid>
                            <Grid key={3} item xs={11} sm={7} className="community_col">
                               <Grid container direction="row" alignItems="top" spacing={0}>
                                    <Grid key={3} item xs={12} sm={12} md={5}>
                                        <h2>Contact Information</h2>
                                        <div>
                                            123 main street <br />
                                            Tarpon Springs, FL 34685
                                        </div>
                                        <div className="mt10">555-555-5555 <b>Primary</b></div>
                                        <div>555-555-5555 <b>Secondary</b></div>
                                        <div>555-555-5555 <b>Fax</b></div>

                                        <ul className="community_display_ul pt10">
                                          <li><a href="#"><i><img  src="../../assets/images/community/icon1.png" alt="" title="" height="25" /></i> Chat  with Community</a></li>
                                          <li><a href="#"><i><img  src="../../assets/images/community/icon2.png" alt="" title="" height="25" /></i> Request Info</a></li>
                                          <li><a href="#"><i><img  src="../../assets/images/community/icon3.png" alt="" title="" height="25" /></i> Visit Website</a></li>
                                          <li><a href="#"><i><img  src="../../assets/images/community/icon4.png" alt="" title="" height="25" /></i> Volunteer</a></li>
                                          <li><a href="#"><i><img  src="../../assets/images/community/icon5.png" alt="" title="" height="25" /></i> Request to Connect</a></li>
                                        </ul>
                                    </Grid>
                                    <Grid key={3} item xs={12} sm={12} md={7}>
                                      <div className="d-inline valign-mid w-50 text-center">
                                        <div><img  src="../../assets/images/community/logo.png" alt="" title="" className="avtar_logo" /></div>
                                        <div className="mt30 community_avtar">
                                          <img  src="../../assets/images/community/avtar.jpg" alt="" title="" />
                                          <div>John Smith</div>
                                          <div>Sales Director</div>
                                        </div>
                                      </div>
                                      <div className="d-inline valign-mid w-50 text-center">
                                        <img  src="../../assets/images/community/icon6.png" alt="" title="" className="avtar_certified" />
                                      </div>
                                    </Grid>
                                </Grid> 
                                <div><b>More Information:</b></div>                           
                                <div><b>Type:</b> Assisted Living</div>                           
                                <div><b>Community License #:</b> 12345678</div>                           
                                <div><b>Accepted Payment:</b> LTC Insurance, Private Pay</div>                           

                                <div className="userBasics mt40">
                                  <label className="basicInfoLbl">About ABC Senior Living</label>
                                  <div>
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /><br /> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                  </div>
                                </div>
                            </Grid>
                        </Grid>
                        
                       
                        
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