import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%'
    },
    menu: {
        width: '100%'
    }
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
                    className="alterEmailUpr"
                >
                    <Grid key={8} item xs={10} sm={8} md={8}>

                        <div className="alterEmail">
                            <h1>Alternate Email Address:</h1>
                            <TextField
                                id=""
                                label="Use a personal Email Address"
                                className={classes.textField}

                            />
                        </div>

                        <div className="alterOR"><label>OR</label></div>

                        <div className="alterEmail2">
                            <h2>Recovery Cell:</h2>

                            <Grid
                                container
                                direction="row"
                                justify="center"
                            >
                                <Grid key={4} item xs={12} sm={4} md={4} className="spcInputRght"> 
                                    <TextField
                                        id=""
                                        label="Step 1"
                                        //className={classes.textField}
                                        className="cellInput"
                                    />
                                </Grid>  
                                <Grid key={4} item xs={12} sm={4} md={4} className="spcInputLft">   
                                    <TextField
                                        id=""
                                        label="Step 2"
                                        //className={classes.textField}
                                        className="cellInput"
                                    />
                                </Grid>  
                                <Grid key={4} item xs={12} sm={4} md={4} className="spcInputLft">   
                                <TextField
                                    id=""
                                    label="Step 3"
                                    //className={classes.textField}
                                    className="cellInput"
                                />
                                </Grid>  
                            </Grid>  


                        </div>

                        <div className="updateSeting"><h3>This information can be updated in the My Settings Tab.</h3></div>

                        <Button variant="raised" color="primary" className={classes.button} className="altrNxtBtn">
                            next
                        </Button>

                        <div className="ntShr">
                            <ul><li>None of this information will be shared.</li></ul>
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