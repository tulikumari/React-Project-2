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
                       
                       <Grid container direction="row" alignItems="top" spacing={16} className="mt10 banner_page3">
                            <Grid key={3} item xs={1} sm={6} md={6} lg={3} className="mt20">
                               <p>Created: 01/01/2020</p>
                               <p>Last Used: 01/01/2020</p>
                               <p className=" inline-block">Viewes: 300</p><p className="inline-block ml-5">Clicks: 75</p>
                               <p className="text-right"><a href="#" className="blue-txt">More Details</a></p>

                               <div class="process_image2 banner3 mt10">
                                  <Grid container direction="row" alignItems="top" spacing={0}>
                                    <Grid key={3} item xs={6} sm={4} lg={6}><img className="mt5" src="../../assets/images/banner_img/img1.png" alt="" title="" width="100" /></Grid>
                                    <Grid key={3} item xs={6} sm={4} lg={6} className="text-right"><img className="mt10 mr-10" src="../../assets/images/banner_img/img3.png" alt="" title="" width="70" /></Grid>
                                  </Grid>
                                  <Grid container direction="row" alignItems="top" spacing={0}>
                                    <Grid key={3} item xs={6} sm={4} lg={8} className="mt5"><img  src="../../assets/images/banner_img/img11.png" alt="" title="" width="100%" height="122" /></Grid>
                                    <Grid key={3} item xs={6} sm={4} lg={4} className="mt5 text-right font-size18"><p className="mr-10 mt20">(555)<br />555-<br />5555</p></Grid>
                                  </Grid>
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

                            
                            <Grid key={3} item xs={1} sm={6} md={6} lg={3} className="mt20">
                               <p>Created: 01/01/2020</p>
                               <p>Last Used: 01/01/2020</p>
                               <p className=" inline-block">Viewes: 300</p><p className="inline-block ml-5">Clicks: 75</p>
                               <p className="text-right"><a href="#" className="blue-txt">More Details</a></p>

                               <div class="process_image2 banner3 mt10">
                                 <Grid container direction="row" alignItems="top" spacing={0}>
                                    <Grid key={3} item xs={6} sm={4} lg={7} className="mt5 text-center"><img  src="../../assets/images/banner_img/img3.png" alt="" title="" height="100" /></Grid>
                                    <Grid key={3} item xs={6} sm={4} lg={5} className="mt5 text-center font-size18"><p className="mr-10 mt10 red-text">(555)<br />555-<br />5555</p></Grid>
                                  </Grid>
                                  <div className="text-center"><img  src="../../assets/images/banner_img/img1.png" alt="" title="" height="80" className="mt10" /></div>
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

                            <Grid key={3} item xs={1} sm={6} md={6} lg={3} className="mt20">
                               <p>Created: 01/01/2020</p>
                               <p>Last Used: 01/01/2020</p>
                               <p className=" inline-block">Viewes: 300</p><p className="inline-block ml-5">Clicks: 75</p>
                               <p className="text-right"><a href="#" className="blue-txt">More Details</a></p>

                               <div class="process_image2 banner3 mt10">
                                  <div className="text-center"><img className="mt10" src="../../assets/images/banner_img/img1.png" alt="" title="" width="120" /></div>
                                  <Grid container direction="row" alignItems="top" spacing={0}>
                                    <Grid key={3} item xs={6} sm={4} lg={8} className="mt5 text-center"><img className="mt30" src="../../assets/images/banner_img/img6.png" alt="" title="" width="80%"/></Grid>
                                    <Grid key={3} item xs={6} sm={4} lg={4} className="mt5 text-right font-size18"><p className="mr-10 mt20 blue-txt">(555)<br />555-<br />5555</p></Grid>
                                  </Grid>
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

                            <Grid key={3} item xs={1} sm={6} md={6} lg={3} className="mt20">
                               <p>Created: 01/01/2020</p>
                               <p>Last Used: 01/01/2020</p>
                               <p className=" inline-block">Viewes: 300</p><p className="inline-block ml-5">Clicks: 75</p>
                               <p className="text-right"><a href="#" className="blue-txt">More Details</a></p>

                               <div class="process_image2 banner3 mt10">
                                  <div className="text-center"><img className="mt10" src="../../assets/images/banner_img/img6.png" alt="" title="" width="120" /></div>
                                  <Grid container direction="row" alignItems="top" spacing={0}>
                                    <Grid key={3} item xs={6} sm={4} lg={8} className="mt5 text-center"><img className="mt30" src="../../assets/images/banner_img/img1.png" alt="" title="" width="80%"/></Grid>
                                    <Grid key={3} item xs={6} sm={4} lg={4} className="mt5 text-right font-size18"><p className="mr-10 mt20">(555)<br />555-<br />5555</p></Grid>
                                  </Grid>
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


                        <Grid container direction="row" alignItems="top" spacing={16} className="mt10 banner_page3">
                            <Grid key={3} item xs={1} sm={6} md={6} lg={3} className="mt20">
                               <p>Created: 01/01/2020</p>
                               <p>Last Used: 01/01/2020</p>
                               <p className=" inline-block">Viewes: 300</p><p className="inline-block ml-5">Clicks: 75</p>
                               <p className="text-right"><a href="#" className="blue-txt">More Details</a></p>

                               <div class="process_image2 banner3 mt10">
                                  <div><img src="../../assets/images/banner_img/img11.png" alt="" title="" width="100%" height="200" /></div>
                                  <div className="banner3_img"><img className="mt5" src="../../assets/images/banner_img/img1.png" alt="" title="" width="100" /></div>
                                  <div class="banner3_text">(555)555-5555</div>
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

                            
                            <Grid key={3} item xs={1} sm={6} md={6} lg={3} className="mt20">
                               <p>Created: 01/01/2020</p>
                               <p>Last Used: 01/01/2020</p>
                               <p className=" inline-block">Viewes: 300</p><p className="inline-block ml-5">Clicks: 75</p>
                               <p className="text-right"><a href="#" className="blue-txt">More Details</a></p>

                               <div class="process_image2 banner3 mt10">
                                 <div><img className="mt5 ml-5" src="../../assets/images/banner_img/img1.png" alt="" title="" height="60" className="mt10" /></div>
                                 <Grid container direction="row" alignItems="top" spacing={0}>
                                    <Grid key={3} item xs={6} sm={4} lg={5} className="mt5 text-center font-size18"><p className="mr-10 mt20">(555)<br />555-<br />5555</p></Grid>
                                    <Grid key={3} item xs={6} sm={4} lg={7} className="mt5 text-center"><img  src="../../assets/images/banner_img/img3.png" alt="" title="" height="100" /></Grid>
                                  </Grid>
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

                            <Grid key={3} item xs={1} sm={6} md={6} lg={3} className="mt20">
                               <p>Created: 01/01/2020</p>
                               <p>Last Used: 01/01/2020</p>
                               <p className=" inline-block">Viewes: 300</p><p className="inline-block ml-5">Clicks: 75</p>
                               <p className="text-right"><a href="#" className="blue-txt">More Details</a></p>

                               <div class="process_image2 banner3 mt10">
                               <div className="text-right"><img className="mt10 mr-10" src="../../assets/images/banner_img/img3.png" alt="" title="" width="70" /></div>
                                  <div><img className="ml-10" src="../../assets/images/banner_img/img1.png" alt="" title="" width="120" /></div>
                                  <div className="font-size18"><p className="ml-10 mt10">(555) 555-5555</p></div>
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

                            <Grid key={3} item xs={1} sm={6} md={6} lg={3} className="mt20">
                               <p>Created: 01/01/2020</p>
                               <p>Last Used: 01/01/2020</p>
                               <p className=" inline-block">Viewes: 300</p><p className="inline-block ml-5">Clicks: 75</p>
                               <p className="text-right"><a href="#" className="blue-txt">More Details</a></p>

                               <div class="process_image2 banner3 mt10">
                                  <div className="text-center"><img className="mt10" src="../../assets/images/banner_img/img1.png" alt="" title="" width="120" /></div>
                                  <p className="text-center green-text font-size18">(555) 555-5555</p>
                                  <Grid container direction="row" alignItems="top" spacing={0}>
                                    <Grid key={3} item xs={6} sm={4} lg={6} className="mt5 text-center"><img src="../../assets/images/banner_img/img11.png" alt="" title="" width="100%" height="84" /></Grid>
                                    <Grid key={3} item xs={6} sm={4} lg={6} className="mt5 text-center "><img src="../../assets/images/banner_img/img10.png" alt="" title="" width="60"/></Grid>
                                  </Grid>
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