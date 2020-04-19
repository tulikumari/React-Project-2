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
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import './bannerCss.css';

const styles = theme => ({
    root: {
        display: 'flex'
      },
      formControl: {
        margin: theme.spacing.unit * 3
      },
      group: {
        margin: `${theme.spacing.unit}px 0`
      },
      formControl1: {
        margin: theme.spacing.unit,
        minWidth: 120,
        width: '100%'
      },
      selectEmpty: {
        marginTop: theme.spacing.unit * 2
      }
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
        name: 'hai'
      };
    
      handleChange = (event, value) => {
        this.setState({ value });
      };
    
      handleChange2 = (event) => {
        this.setState({ [event.target.name]: event.target.value });
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
      <Grid key={3} item xs={12} sm={8} md={8}>
                  <div >
                    <form noValidate autoComplete="off">
                      <Typography variant="headline" className="mb15">
                         <b>Settings:</b>
                       </Typography>
                       <Grid container direction="row" alignItems="top" spacing={16} className="mt10">
                            <Grid key={3} item xs={12} md={6}>
                              <div className="font-size12">Upload banner Ad: 3 size</div>
                              <div  className="mt10">
                              <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                />
                                </div>
                                <div  className="mt10">
                                <label htmlFor="raised-button-file">
                                    <Button variant="raised" component="span" className={classes.button}>
                                    Upload
                                    </Button>
                                </label>
                              </div>
                              <div className="upload_or mt20">
                                <div className="text-center">OR</div>
                                <div className="text-center">
                                    <Button variant="raised" color="primary" className="mt20 white_btn">
                                        Create Banner AD
                                    </Button>
                                </div>
                              </div>
                            </Grid>
                            <Grid key={3} item xs={12} sm={4}>
                               <FormControl className={classes.formControl1}>
                                <InputLabel htmlFor="age-simple">Hyperlink</InputLabel>
                                <Select
                                    value={this.state.age}
                                    onChange={this.handleChange2}
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