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
import Checkbox from '@material-ui/core/Checkbox';
import './bannerCss.css';

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
    state = {
        checkedA: true,
        checkedB: false,
        checkedF: true,
        checkedG: true
      };
    
      handleChange = name => (event) => {
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
      <Grid key={3} item xs={11} sm={8} md={8}>
                  <div >
                    <form noValidate autoComplete="off">
                       <Typography variant="headline" className="txt2">
                         <b>Want to Start a Process</b>
                       </Typography>
                       
                       <Grid container direction="row" alignItems="top" spacing={16} className="mt10 senior_community2">
                            <Grid key={3} item xs={12} lg={6} className="mt20">
                               <p>Created: 01/01/2020</p>
                               <p>Last Used: 01/01/2020</p>
                               <p className="inline-block">Viewes: 300</p><p className="inline-block ml-10">Clicks: 75</p><p className="inline-block ml-10"><a href="#" className="blue-txt">More Details</a></p>
                               <div class="process_image mt10">
                                 <Grid container direction="row" alignItems="center" className="process_container">
                                   <Grid key={3} item xs={4} sm={4} className="text-center"><img  src="../../assets/images/banner_img/img1.png" alt="" title="" width="90" /></Grid>
                                   <Grid key={3} item xs={4} sm={4} className="text-center"><img  src="../../assets/images/banner_img/img2.png" alt="" title="" className="bannerImg" /></Grid>
                                   <Grid key={3} item xs={4} sm={4} className="text-center">
                                     <p>Call ABC Today!</p>
                                     <p className="mt5">555-555-5555</p>
                                   </Grid>
                                 </Grid>
                               </div>
                               <div className="text-center process_checkbox">
                                    <FormControlLabel
                                    control={
                                        <Checkbox
                                        onChange={this.handleChange('checkedA')}
                                        value="checkedA"
                                        className="banner_checkbox"
                                        />
                                    }
                                    label="Use Again!"
                                    />
                               </div>
                            </Grid>

                            <Grid key={3} item xs={12} lg={6} className="mt20">
                               <p>Created: 01/01/2020</p>
                               <p>Last Used: 01/01/2020</p>
                               <p className="inline-block">Viewes: 300</p><p className="inline-block ml-10">Clicks: 75</p><p className="inline-block ml-10"><a href="#" className="blue-txt">More Details</a></p>
                               <div class="process_image mt10">
                                 <Grid container direction="row" alignItems="center" className="process_container">
                                   <Grid key={3} item xs={4} sm={4} className="text-center">
                                     <p>Call ABC Today!</p>
                                     <p className="mt5">555-555-5555</p>
                                   </Grid>
                                   <Grid key={3} item xs={3} sm={3} className="text-center"><img  src="../../assets/images/banner_img/img2.png" alt="" title="" className="bannerImg" /></Grid>
                                   <Grid key={3} item xs={5} sm={5} className="text-center">
                                     <div className="inline-block"><img  src="../../assets/images/banner_img/img3.png" alt="" title="" width="65" /></div>
                                     <div className="inline-block valign-t ml-10">
                                         <div><img  src="../../assets/images/banner_img/img1.png" alt="" title="" width="90" /></div>
                                     </div>
                                   </Grid>
                                 </Grid>
                               </div>
                               <div className="text-center process_checkbox">
                               
                                    <FormControlLabel
                                    control={
                                        <Checkbox
                                        onChange={this.handleChange('checkedA')}
                                        value="checkedA"
                                        className="banner_checkbox"
                                        />
                                    }
                                    label="Use Again!"
                                    />
                               </div>
                            </Grid>
                        </Grid>


                        <Grid container direction="row" alignItems="top" spacing={16} className="mt10 senior_community2">
                            <Grid key={3} item xs={12} lg={6} className="mt20">
                               <p>Created: 01/01/2020</p>
                               <p>Last Used: 01/01/2020</p>
                               <p className="inline-block">Viewes: 300</p><p className="inline-block ml-10">Clicks: 75</p><p className="inline-block ml-10"><a href="#" className="blue-txt">More Details</a></p>
                               <div class="process_image mt10">
                                 <Grid container direction="row" alignItems="center" className="process_container">
                                   <Grid key={3} item xs={4} sm={4} className="text-center"><img  src="../../assets/images/banner_img/img1.png" alt="" title="" width="90" /></Grid>
                                   <Grid key={3} item xs={3} sm={3}><img  src="../../assets/images/banner_img/img2.png" alt="" title="" className="bannerImg" /></Grid>
                                   <Grid key={3} item xs={5} sm={5}>
                                     <div className="inline-block valign-t"><img  src="../../assets/images/banner_img/img3.png" alt="" title="" width="60" /></div>
                                     <div className="inline-block valign-t ml-10">
                                         <p>Call ABC Today!</p>
                                         <p className="mt5">555-555-5555</p>
                                     </div>
                                   </Grid>
                                 </Grid>
                               </div>
                               <div className="text-center process_checkbox">
                                    <FormControlLabel
                                    control={
                                        <Checkbox
                                        onChange={this.handleChange('checkedA')}
                                        value="checkedA"
                                        className="banner_checkbox"
                                        />
                                    }
                                    label="Use Again!"
                                    />
                               </div>
                            </Grid>

                            <Grid key={3} item xs={12} lg={6} className="mt20">
                               <p>Created: 01/01/2020</p>
                               <p>Last Used: 01/01/2020</p>
                               <p className="inline-block">Viewes: 300</p><p className="inline-block ml-10">Clicks: 75</p><p className="inline-block ml-10"><a href="#" className="blue-txt">More Details</a></p>
                               <div class="process_image yell_bg mt10">
                                 <Grid container direction="row" alignItems="center" className="process_container">
                                   <Grid key={3} item xs={4} sm={4} className="text-center">
                                     <img  src="../../assets/images/banner_img/img1.png" alt="" title="" width="80" />
                                     <p>555-555-5555</p>
                                   </Grid>
                                   <Grid key={3} item xs={4} sm={4} className="text-center"><img  src="../../assets/images/banner_img/img2.png" alt="" title="" className="bannerImg" /></Grid>
                                   <Grid key={3} item xs={4} sm={4} className="text-center">
                                     <img  src="../../assets/images/banner_img/img1.png" alt="" title="" width="80" />
                                     <p>555-555-5555</p>
                                   </Grid>
                                 </Grid>
                               </div>
                               <div className="text-center process_checkbox">
                               
                                    <FormControlLabel
                                    control={
                                        <Checkbox
                                        onChange={this.handleChange('checkedA')}
                                        value="checkedA"
                                        className="banner_checkbox"
                                        />
                                    }
                                    label="Use Again!"
                                    />
                               </div>
                            </Grid>
                        </Grid>

                        <Grid container direction="row" alignItems="top" spacing={16} className="mt10 senior_community2">
                            <Grid key={3} item xs={12} lg={6} className="mt20">
                               <p>Created: 01/01/2020</p>
                               <p>Last Used: 01/01/2020</p>
                               <p className="inline-block">Viewes: 300</p><p className="inline-block ml-10">Clicks: 75</p><p className="inline-block ml-10"><a href="#" className="blue-txt">More Details</a></p>
                               <div class="process_image mt10">
                                 <Grid container direction="row" alignItems="center" className="process_container">
                                   <Grid key={3} item xs={4} sm={4} className="text-center"><img  src="../../assets/images/banner_img/img1.png" alt="" title="" width="90" /></Grid>
                                   <Grid key={3} item xs={8} sm={8}>
                                     <img  src="../../assets/images/banner_img/img4.png" alt="" title="" height="58" width="100%" />
                                     <div className="text-center">
                                         <p className="inline-block">Call ABC Today!</p>
                                         <p className="inline-block ml-10">555-555-5555</p>
                                     </div>
                                   </Grid>
                                 </Grid>
                               </div>
                               <div className="text-center process_checkbox">
                                    <FormControlLabel
                                    control={
                                        <Checkbox
                                        onChange={this.handleChange('checkedA')}
                                        value="checkedA"
                                        className="banner_checkbox"
                                        />
                                    }
                                    label="Use Again!"
                                    />
                               </div>
                            </Grid>

                            <Grid key={3} item xs={12} lg={6} className="mt20">
                               <p>Created: 01/01/2020</p>
                               <p>Last Used: 01/01/2020</p>
                               <p className="inline-block">Viewes: 300</p><p className="inline-block ml-10">Clicks: 75</p><p className="inline-block ml-10"><a href="#" className="blue-txt">More Details</a></p>
                               <div class="process_image mt10">
                                 <Grid container direction="row" alignItems="center" className="process_container">
                                   <Grid key={3} item xs={3} sm={3} className="text-center">
                                     <img  src="../../assets/images/banner_img/img1.png" alt="" title="" width="80" />
                                   </Grid>
                                   <Grid key={3} item xs={3} sm={3} className="text-center"><img  src="../../assets/images/banner_img/img3.png" alt="" title="" height="65" /></Grid>
                                   <Grid key={3} item xs={3} sm={3} className="text-center">
                                     <img  src="../../assets/images/banner_img/img2.png" alt="" title="" width="70" />
                                     <p>555-555-5555</p>
                                   </Grid>
                                   <Grid key={3} item xs={3} sm={3} className="text-center">
                                     <img  src="../../assets/images/banner_img/img5.png" alt="" title="" height="70" />
                                   </Grid>
                                 </Grid>
                               </div>
                               <div className="text-center process_checkbox">
                               
                                    <FormControlLabel
                                    control={
                                        <Checkbox
                                        onChange={this.handleChange('checkedA')}
                                        value="checkedA"
                                        className="banner_checkbox"
                                        />
                                    }
                                    label="Use Again!"
                                    />
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