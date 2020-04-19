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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './customcss.css';

const styles = theme => ({
    root: {
      display: 'flex'
    },
    formControl: {
      margin: theme.spacing.unit * 3
    },
    group: {
      margin: `${theme.spacing.unit}px 0`
    }
  });
  
  
class Index extends React.Component {
    state = {
        value: ''
      };
    
      handleChange = (event, value) => {
        this.setState({ value });
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
        //className={classes.background}
        className="homeClick"
        spacing={16}
      >
          <Grid key={3} item xs={11} sm={8} md={8}>
                      <div >
                        <form noValidate autoComplete="off">
                          <Typography variant="headline" className="mb15">
                             <b>Community Types:</b>
                           </Typography>
                           <Typography variant="headline" className="txt2">
                             <b>Aging in place</b>
                           </Typography>
                           <Typography paragraph="true" className="txt2 mt20">
                           <b>What is it?</b> Any housing designed exclusively for seniors, usually including retirement communities, retirement homes, senior housing, and senior apartments.
<br /><br />
<b>Who it’s good for?</b> Older adults who want to live in an active community setting, free from worries about daily chores like house maintenance, cooking, or housekeeping.
<br /><br />
<b>How it works?</b> They’re a little like mini-college campuses, where people of similar age live together in a community that provides opportunities for socialization. In general, the housing is more compact, easier to navigate, and includes help with outside maintenance.
<br /><br />
<b>Relative cost?</b> Medium. In 2012, the average cost of a one-bedroom in independent living or a retirement community in the U.S. was $2,750 a month.
                           </Typography>
                           <Typography variant="headline" className="txt2">
                             <b>Select a community type to learn more:</b>
                           </Typography>
                           
                           <List className="itemList">
                            <ListItem>
                                <ListItemText primary="Aging in Place" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Assisted Living Community" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Continuing Care Retirement Community" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Independent Living" className="red-txt" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Memory Care" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Residential Care Home" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Skilled Nursing/Nursing Home" />
                            </ListItem>
                            </List>
                            <div>
                                <div className="mt20">
                                    <Button variant="raised" color="primary" className="red-border-btn">
                                        Next
                                    </Button>
                                </div>   
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