import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
import './customcss.css';

const styles = theme => ({
    root: {
      width: 500,
    },
  });

  
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
                >
                    <Grid item xs={11}>
                      <div className="center-content3">
                      
                        <form noValidate autoComplete="off">
                            <div className="room-sec mt100 mb15">                            
                                <div className="room-icon">
                                  <img src="../../assets/images/non_private.jpg" alt="" title="" />
                                </div>
                                <Button variant="raised" color="primary" className="tooltip-btn">Non-Private <br />Room</Button>
                            </div>
                            <div className="room-sec mb15">                            
                                <div className="room-icon">
                                  <img src="../../assets/images/private.png" alt="" title="" />
                                </div>
                                <Button variant="raised" color="primary" className="tooltip-btn single_line">Private Room<br /></Button>
                            </div>
                            <div className="room-sec mb15">                            
                                <div className="room-icon">
                                  <img src="../../assets/images/private2.png" alt="" title="" />
                                </div>
                                <Button variant="raised" color="primary" className="tooltip-btn">Private 2- <br />Bathroom</Button>
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