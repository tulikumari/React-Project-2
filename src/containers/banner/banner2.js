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
                       
                       <Grid container direction="row" alignItems="top" spacing={16} className="mt10 banner_page2">
                            <Grid key={3} item xs={6} sm={4} lg={2} className="mt20">
                               <p>Created: 01/01/2020</p>
                               <p>Last Used: 01/01/2020</p>
                               <p className="inline-block">Viewes: 300</p><p className="inline-block ml-5">Clicks: 75</p>
                               <p className="text-right"><a href="#" className="blue-txt">More Details</a></p>
                               <div class="process_image2 mt10">
                                  <div className="mt10 text-center"><img  src="../../assets/images/banner_img/img1.png" alt="" title="" width="90" /></div>
                                  <div className="mt30"><img  src="../../assets/images/banner_img/img2.png" alt="" title="" width="100%" /></div>
                                  <div className="mt10 text-center"><img  src="../../assets/images/banner_img/img6.png" alt="" title="" width="90" /></div>
                                  <div className="callUs text-center">
                                     <p>Call ABC Today!</p>
                                     <p className="mt5">555-555-5555</p>
                                  </div>
                               </div>
                               <div className="text-center process_checkbox2">
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

                            <Grid key={3} item xs={6} sm={4} lg={2} className="mt20">
                               <p>Created: 01/01/2020</p>
                               <p>Last Used: 01/01/2020</p>
                               <p className="inline-block">Viewes: 300</p><p className="inline-block ml-5">Clicks: 75</p>
                               <p className="text-right"><a href="#" className="blue-txt">More Details</a></p>
                               <div class="process_image2 mt10">
                                  <div className="mt10 text-center"><img  src="../../assets/images/banner_img/img1.png" alt="" title="" width="90" /></div>
                                  <div className="mt10"><img  src="../../assets/images/banner_img/img2.png" alt="" title="" width="100%" /></div>
                                  <div className="mt30 text-center"><img  src="../../assets/images/banner_img/img1.png" alt="" title="" width="90" /></div>
                                  <div className="callUs text-center">
                                     <p>Call ABC Today!</p>
                                     <p className="mt5">555-555-5555</p>
                                  </div>
                               </div>
                               <div className="text-center process_checkbox2">
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
                        
                            <Grid key={3} item xs={6} sm={4} lg={2} className="mt20">
                               <p>Created: 01/01/2020</p>
                               <p>Last Used: 01/01/2020</p>
                               <p className="inline-block">Viewes: 300</p><p className="inline-block ml-5">Clicks: 75</p>
                               <p className="text-right"><a href="#" className="blue-txt">More Details</a></p>
                               <div class="process_image2 mt10">
                                  <div className="mt10 text-center"><img  src="../../assets/images/banner_img/img1.png" alt="" title="" width="90" /></div>
                                  <div className="mt10"><img  src="../../assets/images/banner_img/img2.png" alt="" title="" width="100%" /></div>
                                  <div className="mt20 text-center">
                                   <img  src="../../assets/images/banner_img/img3.png" alt="" title="" width="70" className="valign-m" />
                                   <img  src="../../assets/images/banner_img/img7.png" alt="" title="" width="50" className="ml-5 valign-m" />
                                  </div>
                                  <div className="callUs text-center">
                                     <p>Call ABC Today!</p>
                                     <p className="mt5">555-555-5555</p>
                                  </div>
                               </div>
                               <div className="text-center process_checkbox2">
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

                            <Grid key={3} item xs={6} sm={4} lg={2} className="mt20">
                               <p>Created: 01/01/2020</p>
                               <p>Last Used: 01/01/2020</p>
                               <p className="inline-block">Viewes: 300</p><p className="inline-block ml-5">Clicks: 75</p>
                               <p className="text-right"><a href="#" className="blue-txt">More Details</a></p>
                               <div class="process_image2 yell_bg mt10">
                               <div className="mt10 text-center"><img  src="../../assets/images/banner_img/img6.png" alt="" title="" width="90" /></div>
                                  <div className="mt10 text-center"><img  src="../../assets/images/banner_img/img1.png" alt="" title="" width="90" /></div>
                                  <div className="mt30"><img  src="../../assets/images/banner_img/img2.png" alt="" title="" width="100%" /></div>
                                  <div className="callUs text-center">
                                     <p>Call ABC Today!</p>
                                     <p className="mt5">555-555-5555</p>
                                  </div>
                               </div>
                               <div className="text-center process_checkbox2">
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
                        
                            <Grid key={3} item xs={6} sm={4} lg={2} className="mt20">
                               <p>Created: 01/01/2020</p>
                               <p>Last Used: 01/01/2020</p>
                               <p className="inline-block">Viewes: 300</p><p className="inline-block ml-5">Clicks: 75</p>
                               <p className="text-right"><a href="#" className="blue-txt">More Details</a></p>
                               <div class="process_image2 mt10">
                                  <div className="mt10 text-center"><img  src="../../assets/images/banner_img/img1.png" alt="" title="" width="90" /></div>
                                  <div className="mt20 text-center">Need Assistance?</div>
                                  <div className="mt30 text-center"><img  src="../../assets/images/banner_img/img8.png" alt="" title="" width="90%" /></div>
                                  <div className="callUs text-center">
                                     <p>Call ABC Today!</p>
                                     <p className="mt5">555-555-5555</p>
                                  </div>
                               </div>
                               <div className="text-center process_checkbox2">
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

                            <Grid key={3} item xs={6} sm={4} lg={2} className="mt20">
                               <p>Created: 01/01/2020</p>
                               <p>Last Used: 01/01/2020</p>
                               <p className="inline-block">Viewes: 300</p><p className="inline-block ml-5">Clicks: 75</p>
                               <p className="text-right"><a href="#" className="blue-txt">More Details</a></p>
                               <div class="process_image2 mt10">
                                  <div className="mt20 text-center"><img  src="../../assets/images/banner_img/img1.png" alt="" title="" width="90" /></div>
                                  <div className="mt10 text-center"><img  src="../../assets/images/banner_img/img9.png" alt="" title="" width="80" /></div>
                                  <div className="mt10 text-center">
                                     <p>Call ABC Today!</p>
                                     <p className="mt5">555-555-5555</p>
                                  </div>
                                  <div className="mt10 text-center"><img  src="../../assets/images/banner_img/img3.png" alt="" title="" width="90" /></div>
                               </div>
                               <div className="text-center process_checkbox2">
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