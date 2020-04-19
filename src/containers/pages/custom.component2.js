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
                      <div className="center-content2">
                      
                        <form noValidate autoComplete="off">
                            <div className="tooltip-sec mt50 mb15">                            
                                <Tooltip title="Add" placement="top-start" className="tooltip-icon">
                                    <Button variant="fab" aria-label="delete" className="tooltip-icon">?</Button>
                                </Tooltip>
                                <Button variant="raised" color="primary" className="tooltip-btn">Assited Living</Button>
                            </div>
                            <div className="tooltip-sec mb15">                            
                                <Tooltip title="Add" placement="top-start" className="tooltip-icon">
                                    <Button variant="fab" aria-label="delete" className="tooltip-icon">?</Button>
                                </Tooltip>
                                <Button variant="raised" color="primary" className="tooltip-btn">Assited Living</Button>
                            </div>
                            <div className="tooltip-sec mb15">                            
                                <Tooltip title="Add" placement="top-start" className="tooltip-icon">
                                    <Button variant="fab" aria-label="delete" className="tooltip-icon">?</Button>
                                </Tooltip>
                                <Button variant="raised" color="primary" className="tooltip-btn">Assited Living</Button>
                            </div>
                            <div className="tooltip-sec mb15">                            
                                <Tooltip title="Add" placement="top-start" className="tooltip-icon">
                                    <Button variant="fab" aria-label="delete" className="tooltip-icon">?</Button>
                                </Tooltip>
                                <Button variant="raised" color="primary" className="tooltip-btn">Assited Living</Button>
                            </div>
                            <div className="tooltip-sec mb15" align="center">                            
                                <Button variant="raised">Continue</Button>
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