import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
    state = {
        age: '',
        name: 'hai'
    };
    handleChange = (event) => {
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
                >
                    <Grid key={8} item xs={10} sm={8} md={8}>
                        <div className="confirm_section">
                            <h1>We have email <span>Brenda Lange</span> a verification code. Please contact Brenda Lange to forward your verification code to access ABC Senior Living Community.</h1>
                            <h2>Insert confirmation code to access ABC Senior Living:</h2>

                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                                className="cnfrmtonUpr"
                            >
                                <Grid key={7} item xs={12} sm={10} md={7}>
                                    <TextField
                                        id=""
                                        label="Confirmation Code"
                                        //variant="search"
                                        className={classes.textField}
                                        margin="normal"
                                    />
                                    <Button variant="raised" color="primary" className={classes.button} className="enterConfrm_submit">
                                        Submit
                                   </Button>
                                </Grid>
                            </Grid>

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