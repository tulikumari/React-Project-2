import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
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
                >
                    <Grid item xs={10} sm={5} md={5}>

                        <form noValidate autoComplete="off">
                            <div className="enterCode_input">
                                <TextField
                                    id=""
                                    label="Enter Code"
                                    //variant="search"
                                    className={classes.textField}
                                    margin="normal"
                                />

                                <div className="enterCode_submit">
                                    <Button variant="raised" color="primary" className={classes.button}>
                                        Submit
                                    </Button>
                                </div>
                                    
                            </div>
                        </form>

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