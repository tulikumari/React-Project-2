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
                      <Typography variant="headline" className="mt50 mb15" align="center">
                        <b>Select other services you may require during the transition:</b>
                      </Typography>
                      <div className="center-content4">
                        <Grid container direction="row" justify="center" alignItems="center" className="mt20">
                          <Grid item xs={6}>
                            <Button variant="raised" color="primary" className="service_btn">Adult Day Care</Button>
                          </Grid>
                          <Grid item xs={6}>
                            <Button variant="raised" color="primary" className="service_btn">Insuarance</Button>
                          </Grid>
                        </Grid> 
                        <Grid container direction="row" justify="center" alignItems="center" className="mt10">
                          <Grid item xs={6}>
                            <Button variant="raised" color="primary" className="service_btn org-btn">Adult Day Care</Button>
                          </Grid>
                          <Grid item xs={6}>
                            <Button variant="raised" color="primary" className="service_btn">Insuarance</Button>
                          </Grid>
                        </Grid>  
                        <Grid container direction="row" justify="center" alignItems="center" className="mt10">
                          <Grid item xs={6}>
                            <Button variant="raised" color="primary" className="service_btn">Adult Day Care</Button>
                          </Grid>
                          <Grid item xs={6}>
                            <Button variant="raised" color="primary" className="service_btn org-btn">Insuarance</Button>
                          </Grid>
                        </Grid>  
                        <Grid container direction="row" justify="center" alignItems="center" className="mt10">
                          <Grid item xs={6}>
                            <Button variant="raised" color="primary" className="service_btn">Adult Day Care</Button>
                          </Grid>
                          <Grid item xs={6}>
                            <Button variant="raised" color="primary" className="service_btn">Insuarance</Button>
                          </Grid>
                        </Grid>  
                        <Grid container direction="row" justify="center" alignItems="center" className="mt10">
                          <Grid item xs={6}>
                            <Button variant="raised" color="primary" className="service_btn">Adult Day Care</Button>
                          </Grid>
                          <Grid item xs={6}>
                            <Button variant="raised" color="primary" className="service_btn org-btn">Insuarance</Button>
                          </Grid>
                        </Grid>  
                        <Grid container direction="row" justify="center" alignItems="center" className="mt10">
                          <Grid item xs={6}>
                            <Button variant="raised" color="primary" className="service_btn">Adult Day Care</Button>
                          </Grid>
                          <Grid item xs={6}>
                            <Button variant="raised" color="primary" className="service_btn">Insuarance</Button>
                          </Grid>
                        </Grid>  
                        <Grid container direction="row" justify="center" alignItems="center" className="mt10">
                          <Grid item xs={6}>
                            <Button variant="raised" color="primary" className="service_btn">Adult Day Care</Button>
                          </Grid>
                          <Grid item xs={6}>
                            <Button variant="raised" color="primary" className="service_btn">Insuarance</Button>
                          </Grid>
                        </Grid>  
                        <Grid container direction="row" justify="center" alignItems="center" className="mt10">
                          <Grid item xs={6}>
                            <Button variant="raised" color="primary" className="service_btn">Adult Day Care</Button>
                          </Grid>
                          <Grid item xs={6}>
                            <Button variant="raised" color="primary" className="service_btn">Insuarance</Button>
                          </Grid>
                        </Grid> 
                        <div className="tooltip-sec mt20 mb15" align="center">                            
                            <Button variant="raised" className="red-border-btn">NEXT</Button>
                        </div>
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