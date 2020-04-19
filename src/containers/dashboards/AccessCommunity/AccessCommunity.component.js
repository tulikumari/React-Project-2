import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className="added_liv"
                >
                    <Grid key={8} item xs={10} sm={8} md={8}>

                        <h1><span>johns@noemail.com</span> has been added to ABC Senior Living </h1>
                        <div className="added_livBtn">
                            <Button variant="raised" color="primary" className={classes.button}>
                            Access Community Page
                            </Button>
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