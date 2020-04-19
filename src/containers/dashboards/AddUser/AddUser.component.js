import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

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

    state = {
        typevalue: '',
        statusvalue: '',
        age: '',
        name: 'hai'
    };

    typeChange = (event, typevalue) => {
        this.setState({ typevalue });
    };
    statusChange = (event, statusvalue) => {
        this.setState({ statusvalue });
    }
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
                >
                    <Grid key={10} item xs={10} sm={10} md={10}>

                        <div className="userdata_add">

                            {/* Start of Add User */}
                            <div className="userBasics_add">
                                <label className="basicInfoLbl_add">Add User</label>
                                <form noValidate autoComplete="off">

                                    <div className="basicInfo_form">

                                        <Grid
                                            container
                                            direction="row"
                                            justify="center"
                                        >
                                            <Grid key={6} item xs={12} sm={6} md={6} className="spcInputRght"> 
                                                <TextField
                                                    label="First Name"
                                                    className={classes.textField}
                                                    margin="normal"
                                                />
                                            </Grid>
                                            <Grid key={6} item xs={12} sm={6} md={6} className="spcInputLft"> 
                                                <TextField
                                                    label="Last Name"
                                                    className={classes.textField}
                                                    margin="normal"
                                                />
                                            </Grid>
                                        </Grid>

                                        <Grid
                                            container
                                            direction="row"
                                            justify="center"
                                        >
                                            <Grid key={6} item xs={12} sm={6} md={6} className="spcInputRght"> 
                                               <TextField
                                                    label="Title"
                                                    className={classes.textField}
                                                    margin="normal"
                                                />
                                            </Grid>
                                            <Grid key={6} item xs={12} sm={6} md={6} className="spcInputLft"> 
                                                <TextField
                                                    label="Nick Name"
                                                    className={classes.textField}
                                                    margin="normal"
                                                />
                                            </Grid>
                                        </Grid>

                            
                                        <TextField
                                            label="Started in industry"
                                            className={classes.textField}
                                            margin="normal"
                                        />
                                        <TextField
                                            label="Slogan"
                                            className={classes.textField}
                                            margin="normal"
                                        />
                                        <TextField
                                            label="Home Town"
                                            className={classes.textField}
                                            margin="normal"
                                        />
                                        <TextField
                                            label="About You"
                                            multiline
                                            className={classes.textField}
                                            margin="normal"
                                        />

                                        <Grid
                                            container
                                            direction="row"
                                            justify="center"
                                        >
                                            <Grid key={7} item xs={7} sm={7} md={7}>
                                                <TextField
                                                    label="Education"
                                                    multiline
                                                    className={classes.textField}
                                                    margin="normal"
                                                />
                                            </Grid>
                                            <Grid key={5} item xs={5} sm={5} md={5}>
                                                <div className="schoolLogo">
                                                    <label for="upload-photo-school">
                                                        <span>Upload School Logo</span>
                                                        <img src="../../assets/images/fileupload.png" alt="" title="" />
                                                    </label>
                                                    <input type="file" name="photo" id="upload-photo-school" />
                                                </div>
                                            </Grid>
                                        </Grid>

                                        <div className="userBasicsPic">
                                            <label for="upload-photo-profile" className="uploadIconImgPic">
                                                <span>Upload Your Photo</span>
                                                <img src="../../assets/images/fileupload.png" alt="" title="" />
                                            </label>
                                            <input type="file" name="photo" id="upload-photo-profile" />
                                        </div>

                                        <div className="userBasicsPic">
                                            <label for="upload-photo-profile" className="uploadIconImgPic">
                                                <span>Upload Certificates Designations and Awards</span>
                                                <img src="../../assets/images/fileupload.png" alt="" title=""  />
                                            </label>
                                            <input type="file" name="photo" id="upload-photo-profile" />
                                            <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
                                                <AddIcon />
                                            </Button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                            {/* End of Basic Information */}
                            <div className="create_submit_add">
                            <Button variant="raised" color="primary" className={classes.button}>
                                Submit</Button> </div>

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