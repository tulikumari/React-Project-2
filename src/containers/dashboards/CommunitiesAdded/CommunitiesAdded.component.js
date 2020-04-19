import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%'
    }
});
class Index extends React.Component {
    render() {
        return (
            <div>
                <Grid
                    container
                    direction="row"
                    justify="center"
                >
                    <Grid key={10} item xs={10} sm={10} md={10}>
                        <div className="comunitySuccess">
                            <h1>Communities have been added !!</h1>
                            <h2><a>Go to Log-in Home</a></h2>
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
 
