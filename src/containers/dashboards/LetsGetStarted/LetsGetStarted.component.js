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

                        <h1 className="getStartedH1">Lets Get Started !! </h1>

                        <form noValidate autoComplete="off">
                            <div className="letStartUsr">
                                <TextField
                                    id=""
                                    label="Community Name"
                                    //variant="search"
                                    className={classes.textField}
                                    margin="normal"
                                />

                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                >
                                    <Grid item xs={12} sm={4} md={4} lg={4} className="spcInputRght">
                                        <TextField
                                            id=""
                                            label="Address"
                                            //variant="search"
                                            className={classes.textField}
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} lg={4} className="spcInputLft">
                                        <TextField
                                            id=""
                                            label="City"
                                            //variant="search"
                                            className={classes.textField}
                                            margin="normal"
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={4} md={4} lg={4} className="spcInputLft">
                                        <FormControl className="type_select">
                                            <InputLabel htmlFor="age-simple">State</InputLabel>
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
                                    </Grid>
                                </Grid>

                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                >
                                    <Grid item xs={12} sm={6} md={6} lg={6} className="spcInputRght">

                                        <FormControl className="type_select">
                                            <InputLabel htmlFor="age-simple">Zip</InputLabel>
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
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={6} lg={6} className="spcInputLft">
                                        <FormControl className="type_select">
                                            <InputLabel htmlFor="age-simple">Type</InputLabel>
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

                                    </Grid>
                                </Grid>

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