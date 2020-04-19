import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Switch from '@material-ui/core/Switch';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ShareIcon from '@material-ui/icons/Share';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/ModeEdit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import green from '@material-ui/core/colors/green';
import './adminCss.css';

function TabContainer(props) {
    const { children, dir } = props;

    return (
        <Typography component="div" dir={dir}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        position: 'relative',
        minHeight: 200
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500]
    }
});

class FloatingActionButtonZoom extends React.Component {
    state = {
        value: 0,
        value2: 0,
        checkedA: true,
        age: '',
        name: 'hai',
        checkedB: false,
        checkedF: true,
        checkedG: true
    };

    handleToggle = name => (event, checked) => {
        this.setState({ [name]: checked });
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = (index) => {
        this.setState({ value: index });
    };

    handleChange2 = (event, value2) => {
        this.setState({ value2 });
    };

    handleChangeIndex2 = (index) => {
        this.setState({ value2: index });
    };

    render() {
        const { classes, theme } = this.props;
        const transitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
          };
      
          const fabs = [
            {
              color: 'primary',
              className: classes.fab,
              icon: <AddIcon />
            },
            {
              color: 'secondary',
              className: classes.fab,
              icon: <EditIcon />
            },
            {
              color: 'inherit',
              className: classNames(classes.fab, classes.fabGreen),
              icon: <UpIcon />
            }
          ];
        return (
            <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={10}>
        
          <div className="connect_tab">
            <div className="blue-txt mt40"><b>SEARCH BY:</b></div>
            <div>Select options to see what users to search for:</div>
            <div className="blue-box">
                <div className="search_drop_sec">
                    <label className="d-block mt10"><b>Type:</b></label>
                    <FormControl className="type_select">
                    
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
                <div className="search_drop_sec">
                    <label className="d-block mt10"><b>Bed#:</b></label>
                    <FormControl className="type_select">                  
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
                    <label className="d-block mt10 text-center"><b>to:</b></label>
                    <FormControl className="type_select">
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
                <div className="search_drop_sec">
                    <label className="d-block mt10"><b>Specialities:</b></label>
                    <FormControl className="type_select">
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
                <div className="search_drop_sec">
                <label className="d-block mt10"><b>Amenities:</b></label>
                    <FormControl className="type_select">
                        
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
                <div className="search_drop_sec">
                <label className="d-block mt10"><b>Rates:</b></label>
                    <FormControl className="type_select">
                    
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
                <div className="search_drop_sec">
                <label className="d-block mt10"><b>City:</b></label>
                    <FormControl className="type_select">
                        
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
                <div className="search_drop_sec">
                <label className="d-block mt10"><b>Country:</b></label>
                    <FormControl className="type_select">
                    
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
                <div className="search_drop_sec">
                <label className="d-block mt10"><b>State:</b></label>
                    <FormControl className="type_select">
                    
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
                <div className="search_drop_sec">
                <label className="d-block mt10"><b>Zip:</b></label>
                    <FormControl className="type_select">
                    
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
                <div className="search_drop_sec">
                <label className="d-block mt10"><b>Region:</b></label>
                    <FormControl className="type_select">
                    
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
                <div className="search_drop_sec">
                <label className="d-block mt10"><b>Year Built:</b></label>
                    <FormControl className="type_select">
                    
                        <Select
                            value={this.state.age}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'age-simple'
                            }}
                        >
                            
                            <MenuItem value={10}>Yes</MenuItem>
                            <MenuItem value={20}>No</MenuItem>
                        </Select>
                    </FormControl>
                    
                </div>
                <div className="search_drop_sec">
                <label className="d-block mt10"><b>Medicaid:</b></label>
                    <FormControl className="type_select">
                    
                        <Select
                            value={this.state.age}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'age-simple'
                            }}
                        >
                            
                            <MenuItem value={10}>Yes</MenuItem>
                            <MenuItem value={20}>No</MenuItem>
                        </Select>
                    </FormControl>
                    
                
                </div>
                <div className="search_drop_sec">
                <label className="d-block mt10"><b>Subsidized:</b></label>
                    <FormControl className="type_select">
                    
                        <Select
                            value={this.state.age}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'age-simple'
                            }}
                        >
                            
                            <MenuItem value={10}>Yes</MenuItem>
                            <MenuItem value={20}>No</MenuItem>
                        </Select>
                    </FormControl>
                    
                </div>
                <div className="search_drop_sec">
                <label className="d-block mt10"><b>Private pay:</b></label>
                    <FormControl className="type_select">
                    
                        <Select
                            value={this.state.age}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'age-simple'
                            }}
                        >
                            
                            <MenuItem value={10}>Yes</MenuItem>
                            <MenuItem value={20}>No</MenuItem>
                        </Select>
                    </FormControl>
                    
                </div>
                <div className="search_drop_sec">
                <label className="d-block mt10"><b>LTC:</b></label>
                    <FormControl className="type_select">
                    
                        <Select
                            value={this.state.age}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'age-simple'
                            }}
                        >
                            
                            <MenuItem value={10}>Yes</MenuItem>
                            <MenuItem value={20}>No</MenuItem>
                        </Select>
                    </FormControl>
                    
                </div>
            </div>
            <div className={classes.root}>
              <AppBar position="static" color="default" className="mt40">
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  fullWidth
                >
                  <Tab label="PROVIDERS" />
                  <Tab label="COMMUNITIES" />
                  <Tab label="USERS" />
                  <Tab label="ALL" />
                  <Tab label="VOLUNTEER" />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={this.state.value}
                onChangeIndex={this.handleChangeIndex}
              >
                <TabContainer dir={theme.direction}>
                  <div className="connect_tabInner">
                   
                    <Table className="mt40">
                        <Thead>
                            <Tr>
                                <Th className="text-center">TYPE:</Th>
                                <Th className="text-center">BED#:</Th>
                                <Th className="text-center">SPECIALITIES:</Th>
                                <Th className="text-center">AMENITIES:</Th>
                                <Th className="text-center">RATES:</Th>
                                <Th className="text-center">CITY:</Th>
                                <Th className="text-center">COUNTY:</Th>
                                <Th className="text-center">STATE:</Th>
                                <Th className="text-center">ZIP:</Th>
                                <Th className="text-center">REGION:</Th>
                                <Th className="text-center">YEAR BUILT:</Th>
                                <Th className="text-center">MEDICAID:</Th>
                                <Th className="text-center">SUBSIDIZED:</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <tr><td height="15"></td></tr>
                            <Tr>
                                <Td className="text-center">1</Td>
                                <Td className="text-center">55 - 75</Td>
                                <Td className="text-center">5,3,6,7,9,13,15</Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                            </Tr>
                            <Tr>
                                <Td className="text-center">1</Td>
                                <Td className="text-center">55 - 75</Td>
                                <Td className="text-center">5,3,6,7,9,13,15</Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                            </Tr>
                            <Tr>
                                <Td className="text-center">1</Td>
                                <Td className="text-center">55 - 75</Td>
                                <Td className="text-center">5,3,6,7,9,13,15</Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                            </Tr>
                            <Tr>
                                <Td className="text-center">1</Td>
                                <Td className="text-center">55 - 75</Td>
                                <Td className="text-center">5,3,6,7,9,13,15</Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                            </Tr>
                            <Tr>
                                <Td className="text-center">1</Td>
                                <Td className="text-center">55 - 75</Td>
                                <Td className="text-center">5,3,6,7,9,13,15</Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                            </Tr>
                            <Tr>
                                <Td className="text-center">1</Td>
                                <Td className="text-center">55 - 75</Td>
                                <Td className="text-center">5,3,6,7,9,13,15</Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                            </Tr>
                            <Tr>
                                <Td className="text-center">1</Td>
                                <Td className="text-center">55 - 75</Td>
                                <Td className="text-center">5,3,6,7,9,13,15</Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                            </Tr>
                            <Tr>
                                <Td className="text-center">1</Td>
                                <Td className="text-center">55 - 75</Td>
                                <Td className="text-center">5,3,6,7,9,13,15</Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                            </Tr>
                            <Tr>
                                <Td className="text-center">1</Td>
                                <Td className="text-center">55 - 75</Td>
                                <Td className="text-center">5,3,6,7,9,13,15</Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                            </Tr>
                            <Tr>
                                <Td className="text-center">1</Td>
                                <Td className="text-center">55 - 75</Td>
                                <Td className="text-center">5,3,6,7,9,13,15</Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                                <Td className="text-center"></Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    
                    <div className="cmntyIncentive">
                        <h3>I want to be able to view what usera are searching for, or who most of them are connecting to.</h3>
                    </div>
                   
                  </div>
                </TabContainer>
                <TabContainer dir={theme.direction}>Item Two 111</TabContainer>
                <TabContainer dir={theme.direction}>Item Three 111</TabContainer>
                <TabContainer dir={theme.direction}>Item four 111</TabContainer>
                <TabContainer dir={theme.direction}>Item five 111</TabContainer>
              </SwipeableViews>

             

            </div>
          </div>
        </Grid>
      </Grid>
        );
    }
}
FloatingActionButtonZoom.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    theme: PropTypes.shape({}).isRequired
};
export default withStyles(styles, { withTheme: true })(FloatingActionButtonZoom);
