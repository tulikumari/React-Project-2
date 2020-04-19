import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
                        <h1 className="createCmpnyH1">Create a Company</h1>
                        <form noValidate autoComplete="off">
                            <div className="letStartCmpny">
                                <div className="CmpnyStep1">
                                    <label className="CmpnyStep1Lbl">Step 1</label>
                                    <TextField
                                        id=""
                                        label="Company Name"
                                        //variant="search"
                                        className={classes.textField}
                                        margin="normal"
                                    />
                                </div>
                                <div className="CmpnyStep2">
                                    <label className="CmpnyStep2Lbl">Step 2</label>
                                    <FormControl className="type_select">
                                        <InputLabel htmlFor="age-simple"># of Locations</InputLabel>
                                        <Select
                                            value={this.state.age}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'age',
                                                id: 'age-simple'
                                            }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <Button variant="raised" color="primary" className={classes.button} className="create_submit">
                                    Submit
                                </Button>
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