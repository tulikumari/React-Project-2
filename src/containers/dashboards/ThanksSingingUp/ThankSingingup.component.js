import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';

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
        const { classes } = this.props;
        return (
            <div>
                <Grid
                    container
                    direction="row"
                    justify="center"
                >
                    <Grid key={10} item xs={10} sm={10} md={10}>
                        <div className="signSuccess">
                            <h1> Thanks for Singing Up !! </h1>
                            <h2> Will you be adding: </h2>

                            <div className="selLoc">
                                <Button variant="raised" size="medium" color="primary" className={classes.button}>
                                    Single Location
                                </Button>
                            </div>

                            <div>
                                <div className="multiLocUpr">
                                   <div className="selLoc">  
                                    <Button variant="raised" size="medium" color="primary" className={classes.button}>
                                        Multiple Locations
                                    </Button>
                                   </div>

                                    <Tooltip title="If you are the contact of a company that control multiple communities, creating a company allows you in easily manage all entities the manager and still of each entity.">
                                        <HelpIcon className="multiLoc" />
                                    </Tooltip>
                                </div>
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