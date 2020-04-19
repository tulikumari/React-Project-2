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
                    className="added_use"
                >
                    <Grid key={8} item xs={10} sm={8} md={8}>
                        <h1><span>Johns1</span> is already in use. How about: </h1>
                        <div className="othr_option">
                             <a>Johns001</a>
                             <a>Johns255</a>
                             <a>Johns213</a>
                        </div>  
                        <div className="added_useBtn">  
                            <Button variant="raised" color="primary" className={classes.button}>
                                Next
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