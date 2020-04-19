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
      
      <Grid key={3} item xs={11} sm={5} md={5}>
                  <div >
                    <form noValidate autoComplete="off">
                    <div>
                        
                      </div>
                     
                      <div className="userBasics mt40 text-center">
                        <div className="font-24">
                         Forward your search to a family or colleague to share the savings!
                        </div>
                        <div className="font-18 mt40">
                         FORWARD: 10.09.2019 Community Search to 
                        </div>
                        <div className="font-18 mt20">
                         <a href="#" className="blue-txt">Select From My Contacts</a> 
                        </div>
                        <div className="text-center"> 
                           <TextField
                                                    label="Sara@gmail.com"
                                                    multiline
                                                    className="w-50 font-18"
                                                    margin="normal"
                                                />
                        </div>
                        <div className="w-50 margin-auto">
                            <div className="addEmail">
                                <label>
                                    <span>Add Email</span>
                                    <img src="../../assets/images/community/add_icon.png" alt="" title="" />
                                </label>
                            </div>
                        </div>
                      </div>

                      
                        <div>
                            <div className="mt40 text-center">
                                <div className="d-inline valign-mid">
                                <Button variant="raised" color="primary" className="red-border-btn ml-20">
                                    Back
                                  </Button>
                                </div>
                                <div className="d-inline valign-mid ml-10">
                                  <Button variant="raised" color="primary" className="red-border-btn">
                                    SUBMIT
                                  </Button>
                                </div>
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