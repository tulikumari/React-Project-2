import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

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
          <Grid item xs={10} sm={10} md={10}>
            <Grid
              container
              direction="row"
              justify="center"
            >
              <Grid item xs={9} sm={9} md={9}>
                <div className="userdata">

                  {/* Start of Basic Information */}
                  <div className="userBasics">
                    <label className="basicInfoLbl">Basic Information</label>
                    <form noValidate autoComplete="off">

                      <div className="basicInfo_form">
                        <TextField
                          id=""
                          label="Company Name"
                          className={classes.textField}
                          margin="normal"
                        />

                        <Grid
                          container
                          direction="row"
                          justify="center"
                        >
                          <Grid item xs={12} sm={6} md={6} lg={6} className="spcInputRght">
                            <TextField
                              id=""
                              label="DBA"
                              className={classes.textField}
                              margin="normal"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6} lg={6} className="spcInputLft">
                            <TextField
                              id=""
                              label="License"
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
                          <Grid item xs={12} sm={12} md={4} lg={4} className="spcInputRght spcInputRghtType">
                            <FormControl className="typeRadioMain">
                              <div className="typeRadioLeft">
                                <FormLabel component="legend">Type</FormLabel>
                              </div>
                              <div className="typeRadioRght">
                                <RadioGroup
                                  aria-label="type"
                                  name="type1"
                                  value={this.state.typevalue}
                                  onChange={this.typeChange}
                                  className="typeRadioRghtInr"
                                >
                                  <FormControlLabel value="Publics" control={<Radio />} label="Publics" />
                                  <FormControlLabel value="Privates" control={<Radio />} label="Privates" />
                                </RadioGroup>
                              </div>
                            </FormControl>
                          </Grid>

                          <Grid item xs={12} sm={12} md={4} lg={4} className="spcInputLft spcInputLftType">
                            <FormControl className="typeRadioMain">
                              <div className="typeRadioLeft">
                                <FormLabel component="legend">Status</FormLabel>
                              </div>
                              <div className="typeRadioRght">
                                <RadioGroup
                                  aria-label="type"
                                  name="type1"
                                  value={this.state.statusvalue}
                                  onChange={this.statusChange}
                                  className="typeRadioRghtInr"
                                >
                                  <FormControlLabel value="Profit" control={<Radio />} label="Profit" />
                                  <FormControlLabel value="Non-Profit" control={<Radio />} label="Non-Profit" />
                                </RadioGroup>
                              </div>
                            </FormControl>
                          </Grid>

                          <Grid item xs={12} sm={12} md={4} lg={4} className="spcInputLft yearFound spcInputLftType">
                            <TextField
                              id=""
                              label="Year Founded"
                              className={classes.textField}
                              margin="normal"
                            />
                          </Grid>
                        </Grid>

                      </div>
                    </form>
                  </div>
                  {/* End of Basic Information */}

                  {/* Start of Contact Information */}
                  <div className="userBasics">
                    <label className="basicInfoLbl">Contact Information</label>
                    <form noValidate autoComplete="off">

                      <div className="basicInfo_form">
                        <TextField
                          id=""
                          label="Address"
                          className={classes.textField}
                          margin="normal"
                        />

                        <Grid
                          container
                          direction="row"
                          justify="center"
                        >
                          <Grid item xs={12} sm={6} md={6} lg={6} className="spcInputRght">
                            <TextField
                              id=""
                              label="City"
                              className={classes.textField}
                              margin="normal"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6} lg={6} className="spcInputLft">
                            <FormControl className="CountryDropdown">
                              <InputLabel htmlFor="country-simple">Country</InputLabel>
                              <Select
                                value={this.state.age}
                                onChange={this.handleChange}
                                inputProps={{
                                  name: 'age',
                                  id: 'country-simple'
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
                            <TextField
                              id=""
                              label="State"
                              className={classes.textField}
                              margin="normal"
                            />
                          </Grid>

                          <Grid item xs={12} sm={6} md={6} lg={6} className="spcInputLft">
                            <TextField
                              id=""
                              label="Zip"
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
                          <Grid item xs={12} sm={6} md={6} lg={6} className="spcInputRght">
                            <TextField
                              id=""
                              label="Primary Phone"
                              className={classes.textField}
                              margin="normal"
                            />
                          </Grid>

                          <Grid item xs={12} sm={6} md={6} lg={6} className="spcInputLft">
                            <TextField
                              id=""
                              label="Cell Phone"
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
                          <Grid item xs={12} sm={6} md={6} lg={6} className="spcInputRght">
                            <TextField
                              id=""
                              label="Fax"
                              className={classes.textField}
                              margin="normal"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6} lg={6} className="spcInputLft">
                            <TextField
                              id=""
                              label="Website"
                              className={classes.textField}
                              margin="normal"
                            />
                          </Grid>
                        </Grid>

                      </div>
                    </form>
                  </div>
                  {/* End of Contact Information */}

                  {/* Start of External Website */}
                  <div className="userBasics">
                    <label className="basicInfoLbl">External Website</label>
                    <form noValidate autoComplete="off">

                      <div className="basicInfo_form">
                        <TextField
                          id=""
                          label="Website 1"
                          className={classes.textField}
                          margin="normal"
                        />
                        <TextField
                          id=""
                          label="Website 2"
                          className={classes.textField}
                          margin="normal"
                        />
                        <TextField
                          id=""
                          label="Website 3"
                          className={classes.textField}
                          margin="normal"
                        />
                      </div>
                    </form>
                  </div>
                  {/* End of External Website */}

                  {/* Start of Logo Upload Website */}
                  <div className="userBasics">
                    <label className="basicInfoLbl">Company Description</label>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                    >
                      <Grid item xs={12} sm={12} md={4} lg={4} className="spcInputRght">
                        <div>
                          <label for="upload-photo" className="uploadIconImg">
                            <span>Logo Upload</span>
                            <img src="../../assets/images/fileupload.png" alt="" title="" />
                          </label>
                          <input type="file" name="photo" id="upload-photo" />
                        </div>
                      </Grid>

                      <Grid item xs={12} sm={12} md={8} lg={8} className="spcInputLft">
                        <div>
                          <label className="basicInfoLbl">Company Description</label>
                          <TextField
                            label="Description"
                            multiline
                            margin="normal"
                            className="cmpnyMultiLine"
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  {/* End of Logo Upload Website */}

                  <div className="create_submit">
                    <Button variant="raised" color="primary" className={classes.button}>
                      Submit Changes
                    </Button>
                  </div>

                </div>
              </Grid>

              <Grid item xs={3} sm={3} md={3}>
                <div className="VoucherLogo">
                  <img src="../../assets/images/222.png" alt="" title="" />
                </div>
              </Grid>

            </Grid>
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