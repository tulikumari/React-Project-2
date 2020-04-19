import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
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
import SearchIcon from '@material-ui/icons/Search';


function TabContainer(props) {
    const { children, dir } = props;

    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
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
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12} sm={12} md={10}>
                    <div className="connect_tab">
                        <div className={classes.root}>
                            <AppBar position="static" color="default">
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
                                className="connect_tabUper"
                            >
                                {/* Providers Tab Content */}
                                <TabContainer dir={theme.direction}>
                                    <div className="connect_tabInner">
                                        <Table>
                                            <Thead>
                                                <Tr>
                                                    <Th>NAME</Th>
                                                    <Th>STATUS</Th>
                                                    <Th>TYPE</Th>
                                                    <Th>OF TYPE</Th>
                                                    <Th>OFFER</Th>
                                                    <Th>OPTIONS</Th>
                                                    <Th>DISPLAY</Th>
                                                    <Th>ACTION</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>

                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Keller" />} label="Keller" /></Td>
                                                    <Td>Pending</Td>
                                                    <Td>Realtor</Td>
                                                    <Td>1</Td>
                                                    <Td>-500.00</Td>
                                                    <Td><a>Find More Like This</a></Td>
                                                    <Td>
                                                        <Switch
                                                            checked={this.state.checkedA}
                                                            onChange={this.handleToggle('checkedA')}
                                                            aria-label="checkedA"
                                                        />
                                                    </Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Dignity" />} label="Dignity" /></Td>
                                                    <Td>Pending</Td>
                                                    <Td>Funeral Home</Td>
                                                    <Td>1</Td>
                                                    <Td>-250.00</Td>
                                                    <Td><a>Find More Like This</a></Td>
                                                    <Td>
                                                        <Switch
                                                            checked={this.state.checkedA}
                                                            onChange={this.handleToggle('checkedA')}
                                                            aria-label="checkedA"
                                                        />
                                                    </Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Annex" />} label="Annex" /></Td>
                                                    <Td>Pending</Td>
                                                    <Td>Pharmacy</Td>
                                                    <Td>2</Td>
                                                    <Td>-50.00</Td>
                                                    <Td><a>Find More Like This</a></Td>
                                                    <Td>
                                                        <Switch
                                                            checked={this.state.checkedA}
                                                            onChange={this.handleToggle('checkedA')}
                                                            aria-label="checkedA"
                                                        />
                                                    </Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="John" />} label="John" /></Td>
                                                    <Td>Pending</Td>
                                                    <Td>Pharmacy</Td>
                                                    <Td>3</Td>
                                                    <Td>-150.00</Td>
                                                    <Td><a>Find More Like This</a></Td>
                                                    <Td>
                                                        <Switch
                                                            checked={this.state.checkedA}
                                                            onChange={this.handleToggle('checkedA')}
                                                            aria-label="checkedA"
                                                        />
                                                    </Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Smith" />} label="Smith" /></Td>
                                                    <Td>Connected</Td>
                                                    <Td>Non-Medical</Td>
                                                    <Td>4</Td>
                                                    <Td>-100.00</Td>
                                                    <Td><a>Find More Like This</a></Td>
                                                    <Td>
                                                        <Switch
                                                            checked={this.state.checkedA}
                                                            onChange={this.handleToggle('checkedA')}
                                                            aria-label="checkedA"
                                                        />
                                                    </Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Jack" />} label="Jack" /></Td>
                                                    <Td>Connected</Td>
                                                    <Td>Non-Medical</Td>
                                                    <Td>1</Td>
                                                    <Td>-50.00</Td>
                                                    <Td><a>Find More Like This</a></Td>
                                                    <Td>
                                                        <Switch
                                                            checked={this.state.checkedA}
                                                            onChange={this.handleToggle('checkedA')}
                                                            aria-label="checkedA"
                                                        />
                                                    </Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Tom" />} label="Tom" /></Td>
                                                    <Td>Connected</Td>
                                                    <Td>Non-Medical</Td>
                                                    <Td>1</Td>
                                                    <Td>-50.00</Td>
                                                    <Td><a>Find More Like This</a></Td>
                                                    <Td>
                                                        <Switch
                                                            checked={this.state.checkedA}
                                                            onChange={this.handleToggle('checkedA')}
                                                            aria-label="checkedA"
                                                        />
                                                    </Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Denny" />} label="Denny" /></Td>
                                                    <Td>Connected</Td>
                                                    <Td>Non-Medical</Td>
                                                    <Td>0</Td>
                                                    <Td>-80.00</Td>
                                                    <Td><a>Find More Like This</a></Td>
                                                    <Td>
                                                        <Switch
                                                            checked={this.state.checkedA}
                                                            onChange={this.handleToggle('checkedA')}
                                                            aria-label="checkedA"
                                                        />
                                                    </Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                            </Tbody>
                                        </Table>


                                        <div className="selectByType">
                                            <ul>
                                                <li><FormControlLabel control={<Checkbox value="selectall" />} label="Select All" /></li>
                                                <li><FormControlLabel control={<Checkbox value="assistedliving" />} label="Assisted living" /></li>
                                                <li><FormControlLabel control={<Checkbox value="nursinghome" />} label="Nursing Home" /></li>
                                                <li> <FormControlLabel control={<Checkbox value="rehab" />} label="Rehab" /></li>
                                                <li className="shareBy">
                                                    <MailOutlineIcon />
                                                    <ShareIcon />
                                                    <DeleteForeverIcon />
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="cmntyIncentive">
                                            <h3>Coonections more you up the search results and saves prospects and current residents $$</h3>
                                        </div>

                                    </div>
                                </TabContainer>
                                {/* End of Providers Tab Content */}

                                {/* Communities Tab Content */}
                                <TabContainer dir={theme.direction}>

                                    <div className="connect_tabInner">
                                        <Table>
                                            <Thead>
                                                <Tr>
                                                    <Th>NAME</Th>
                                                    <Th>STATUS</Th>
                                                    <Th>TYPE</Th>
                                                    <Th>OF TYPE</Th>
                                                    <Th>OFFER</Th>
                                                    <Th>OPTIONS</Th>
                                                    <Th>DISPLAY</Th>
                                                    <Th>ACTION</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>

                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Keller" />} label="Keller" /></Td>
                                                    <Td>Pending</Td>
                                                    <Td>Realtor</Td>
                                                    <Td>1</Td>
                                                    <Td>-500.00</Td>
                                                    <Td><a>Find More Like This</a></Td>
                                                    <Td>
                                                        <Switch
                                                            checked={this.state.checkedA}
                                                            onChange={this.handleToggle('checkedA')}
                                                            aria-label="checkedA"
                                                        />
                                                    </Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Dignity" />} label="Dignity" /></Td>
                                                    <Td>Pending</Td>
                                                    <Td>Funeral Home</Td>
                                                    <Td>1</Td>
                                                    <Td>-250.00</Td>
                                                    <Td><a>Find More Like This</a></Td>
                                                    <Td>
                                                        <Switch
                                                            checked={this.state.checkedA}
                                                            onChange={this.handleToggle('checkedA')}
                                                            aria-label="checkedA"
                                                        />
                                                    </Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Annex" />} label="Annex" /></Td>
                                                    <Td>Pending</Td>
                                                    <Td>Pharmacy</Td>
                                                    <Td>2</Td>
                                                    <Td>-50.00</Td>
                                                    <Td><a>Find More Like This</a></Td>
                                                    <Td>
                                                        <Switch
                                                            checked={this.state.checkedA}
                                                            onChange={this.handleToggle('checkedA')}
                                                            aria-label="checkedA"
                                                        />
                                                    </Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="John" />} label="John" /></Td>
                                                    <Td>Pending</Td>
                                                    <Td>Pharmacy</Td>
                                                    <Td>3</Td>
                                                    <Td>-150.00</Td>
                                                    <Td><a>Find More Like This</a></Td>
                                                    <Td>
                                                        <Switch
                                                            checked={this.state.checkedA}
                                                            onChange={this.handleToggle('checkedA')}
                                                            aria-label="checkedA"
                                                        />
                                                    </Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Smith" />} label="Smith" /></Td>
                                                    <Td>Connected</Td>
                                                    <Td>Non-Medical</Td>
                                                    <Td>4</Td>
                                                    <Td>-100.00</Td>
                                                    <Td><a>Find More Like This</a></Td>
                                                    <Td>
                                                        <Switch
                                                            checked={this.state.checkedA}
                                                            onChange={this.handleToggle('checkedA')}
                                                            aria-label="checkedA"
                                                        />
                                                    </Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Jack" />} label="Jack" /></Td>
                                                    <Td>Connected</Td>
                                                    <Td>Non-Medical</Td>
                                                    <Td>1</Td>
                                                    <Td>-50.00</Td>
                                                    <Td><a>Find More Like This</a></Td>
                                                    <Td>
                                                        <Switch
                                                            checked={this.state.checkedA}
                                                            onChange={this.handleToggle('checkedA')}
                                                            aria-label="checkedA"
                                                        />
                                                    </Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Tom" />} label="Tom" /></Td>
                                                    <Td>Connected</Td>
                                                    <Td>Non-Medical</Td>
                                                    <Td>1</Td>
                                                    <Td>-50.00</Td>
                                                    <Td><a>Find More Like This</a></Td>
                                                    <Td>
                                                        <Switch
                                                            checked={this.state.checkedA}
                                                            onChange={this.handleToggle('checkedA')}
                                                            aria-label="checkedA"
                                                        />
                                                    </Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Denny" />} label="Denny" /></Td>
                                                    <Td>Connected</Td>
                                                    <Td>Non-Medical</Td>
                                                    <Td>0</Td>
                                                    <Td>-80.00</Td>
                                                    <Td><a>Find More Like This</a></Td>
                                                    <Td>
                                                        <Switch
                                                            checked={this.state.checkedA}
                                                            onChange={this.handleToggle('checkedA')}
                                                            aria-label="checkedA"
                                                        />
                                                    </Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                            </Tbody>
                                        </Table>

                                        <div className="selectByType">
                                            <ul>
                                                <li><FormControlLabel control={<Checkbox value="selectall" />} label="Select All" /></li>
                                                <li><FormControlLabel control={<Checkbox value="assistedliving" />} label="Assisted living" /></li>
                                                <li><FormControlLabel control={<Checkbox value="nursinghome" />} label="Nursing Home" /></li>
                                                <li> <FormControlLabel control={<Checkbox value="rehab" />} label="Rehab" /></li>
                                                <li className="shareBy">
                                                    <MailOutlineIcon />
                                                    <ShareIcon />
                                                    <DeleteForeverIcon />
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="cmntyIncentive">
                                            <h3>Coonections more you up the search results and saves prospects and current residents $$</h3>
                                            <h4>Community Incentives: <span>$4,000.00</span></h4>
                                        </div>

                                        <div className="incentiveSbmt"><Button size="medium" className={classes.button}> Submit </Button></div>
                                    </div>

                                </TabContainer>
                                {/* End of Communities Tab Content */}

                                {/* Users Tab Content */}
                                <TabContainer dir={theme.direction}>
                                    <div className="connect_tabInner">
                                        <Table>
                                            <Thead>
                                                <Tr>
                                                    <Th>NAME</Th>
                                                    <Th>STATUS</Th>
                                                    <Th>TYPE</Th>
                                                    <Th>ADDED</Th>
                                                    <Th>OF TYPE</Th>
                                                    <Th>ACTION</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Keller" />} label="Keller" /></Td>
                                                    <Td>Pending</Td>
                                                    <Td>Realtor</Td>
                                                    <Td>08/05/2019</Td>
                                                    <Td>1</Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Dignity" />} label="Dignity" /></Td>
                                                    <Td>Pending</Td>
                                                    <Td>Funeral Home</Td>
                                                    <Td>08/05/2019</Td>
                                                    <Td>2</Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Annex" />} label="Annex" /></Td>
                                                    <Td>Pending</Td>
                                                    <Td>Pharmacy</Td>
                                                    <Td>08/05/2019</Td>
                                                    <Td>3</Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="John" />} label="John" /></Td>
                                                    <Td>Pending</Td>
                                                    <Td>Pharmacy</Td>
                                                    <Td>08/05/2019</Td>
                                                    <Td>4</Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Smith" />} label="Smith" /></Td>
                                                    <Td>Connected</Td>
                                                    <Td>Non-Medical</Td>
                                                    <Td>08/05/2019</Td>
                                                    <Td>5</Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Jack" />} label="Jack" /></Td>
                                                    <Td>Connected</Td>
                                                    <Td>Non-Medical</Td>
                                                    <Td>08/05/2019</Td>
                                                    <Td>6</Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Tom" />} label="Tom" /></Td>
                                                    <Td>Connected</Td>
                                                    <Td>Non-Medical</Td>
                                                    <Td>08/05/2019</Td>
                                                    <Td>7</Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Denny" />} label="Denny" /></Td>
                                                    <Td>Connected</Td>
                                                    <Td>Non-Medical</Td>
                                                    <Td>08/05/2019</Td>
                                                    <Td>8</Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                            </Tbody>
                                        </Table>

                                        <div className="selectByType">
                                            <ul>
                                                <li><FormControlLabel control={<Checkbox value="selectall" />} label="Select All" /></li>
                                                <li><FormControlLabel control={<Checkbox value="assistedliving" />} label="Assisted living" /></li>
                                                <li><FormControlLabel control={<Checkbox value="nursinghome" />} label="Nursing Home" /></li>
                                                <li> <FormControlLabel control={<Checkbox value="rehab" />} label="Rehab" /></li>
                                                <li className="shareBy">
                                                    <MailOutlineIcon />
                                                    <ShareIcon />
                                                    <DeleteForeverIcon />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="incentiveSbmt"><Button size="medium" className={classes.button}> Submit </Button></div>
                                    </div>
                                </TabContainer>
                                {/* End of Users Tab Content */}

                                {/* ALL USERS DESIGN */}
                                <TabContainer dir={theme.direction}>
                                    <div className="connect_tabInner">
                                        <Table>
                                            <Thead>
                                                <Tr>
                                                    <Th>NAME</Th>
                                                    <Th>STATUS</Th>
                                                    <Th>TYPE</Th>
                                                    <Th>ADDED</Th>
                                                    <Th>OF TYPE</Th>
                                                    <Th>ACTION</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Keller" />} label="Keller" /></Td>
                                                    <Td>Pending</Td>
                                                    <Td>Realtor</Td>
                                                    <Td>08/05/2019</Td>
                                                    <Td>1</Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Dignity" />} label="Dignity" /></Td>
                                                    <Td>Pending</Td>
                                                    <Td>Funeral Home</Td>
                                                    <Td>08/05/2019</Td>
                                                    <Td>2</Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Annex" />} label="Annex" /></Td>
                                                    <Td>Pending</Td>
                                                    <Td>Pharmacy</Td>
                                                    <Td>08/05/2019</Td>
                                                    <Td>3</Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="John" />} label="John" /></Td>
                                                    <Td>Pending</Td>
                                                    <Td>Pharmacy</Td>
                                                    <Td>08/05/2019</Td>
                                                    <Td>4</Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Smith" />} label="Smith" /></Td>
                                                    <Td>Connected</Td>
                                                    <Td>Non-Medical</Td>
                                                    <Td>08/05/2019</Td>
                                                    <Td>5</Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Jack" />} label="Jack" /></Td>
                                                    <Td>Connected</Td>
                                                    <Td>Non-Medical</Td>
                                                    <Td>08/05/2019</Td>
                                                    <Td>6</Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Tom" />} label="Tom" /></Td>
                                                    <Td>Connected</Td>
                                                    <Td>Non-Medical</Td>
                                                    <Td>08/05/2019</Td>
                                                    <Td>7</Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td><FormControlLabel control={<Checkbox value="Denny" />} label="Denny" /></Td>
                                                    <Td>Connected</Td>
                                                    <Td>Non-Medical</Td>
                                                    <Td>08/05/2019</Td>
                                                    <Td>8</Td>
                                                    <Td className="rowEditIcon">
                                                        <MailOutlineIcon />
                                                        <ShareIcon />
                                                        <DeleteForeverIcon />
                                                    </Td>
                                                </Tr>
                                            </Tbody>
                                        </Table>

                                        <div className="selectByType">
                                            <ul>
                                                <li><FormControlLabel control={<Checkbox value="selectall" />} label="Select All" /></li>
                                                <li><FormControlLabel control={<Checkbox value="assistedliving" />} label="Assisted living" /></li>
                                                <li><FormControlLabel control={<Checkbox value="nursinghome" />} label="Nursing Home" /></li>
                                                <li> <FormControlLabel control={<Checkbox value="rehab" />} label="Rehab" /></li>
                                                <li className="shareBy">
                                                    <MailOutlineIcon />
                                                    <ShareIcon />
                                                    <DeleteForeverIcon />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="incentiveSbmt"><Button size="medium" className={classes.button}> Submit </Button></div>
                                    </div>
                                </TabContainer>
                                {/* END OF ALL USERS DESIGN */}

                                {/* VOLUNTEER DESIGN */}
                                <div className="voluntryInnerTabs">

                                    <TabContainer dir={theme.direction}>
                                        {/* VOLUNTEER INNER TAB DESIGN */}
                                        <AppBar position="static" color="default">
                                            <Tabs
                                                value={this.state.value2}
                                                onChange={this.handleChange2}
                                                indicatorColor="primary"
                                                textColor="primary"
                                                fullWidth
                                            >
                                                <Tab label="VOLUNTEERS" />
                                                <Tab label="SETTING & NEEDS" />
                                            </Tabs>
                                        </AppBar>
                                        <SwipeableViews
                                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                            index={this.state.value2}
                                            onChangeIndex={this.handleChangeIndex2}
                                            className="voluntryTabsCntnt"
                                        >
                                            <TabContainer dir={theme.direction}>
                                                <div className="connect_tabInner">
                                                    <Table>
                                                        <Thead>
                                                            <Tr>
                                                                <Th>VOLUNTEERS NAME</Th>
                                                                <Th>STATUS</Th>
                                                                <Th>ASSIST IN</Th>
                                                                <Th>AVAILABILITY</Th>
                                                                <Th>NEXT VISIT</Th>
                                                                <Th>
                                                                    VISIBLE
                                                                    <span className="visibleInfo">
                                                                        <Tooltip title="Visible to the public on Community Page." aria-label="Visible to the public on Community Page.">
                                                                            <HelpIcon />
                                                                        </Tooltip>
                                                                    </span>
                                                                </Th>
                                                                <Th>ACTION</Th>
                                                            </Tr>
                                                        </Thead>
                                                        <Tbody>
                                                            <Tr>
                                                                <Td>Keller</Td>
                                                                <Td>Pending</Td>
                                                                <Td>Realtor</Td>
                                                                <Td>Every Third Wed 2:00</Td>
                                                                <Td>08/05/2019</Td>
                                                                <Td>
                                                                    <Switch
                                                                        checked={this.state.checkedA}
                                                                        onChange={this.handleToggle('checkedA')}
                                                                        aria-label="checkedA"
                                                                    />
                                                                </Td>
                                                                <Td className="rowEditIcon">
                                                                    <MailOutlineIcon />
                                                                    <ShareIcon />
                                                                    <DeleteForeverIcon />
                                                                </Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td>Dignity</Td>
                                                                <Td>Pending</Td>
                                                                <Td>Funeral Home</Td>
                                                                <Td>1st Friday of Month</Td>
                                                                <Td>08/05/2019</Td>
                                                                <Td>
                                                                    <Switch
                                                                        checked={this.state.checkedA}
                                                                        onChange={this.handleToggle('checkedA')}
                                                                        aria-label="checkedA"
                                                                    />
                                                                </Td>
                                                                <Td className="rowEditIcon">
                                                                    <MailOutlineIcon />
                                                                    <ShareIcon />
                                                                    <DeleteForeverIcon />
                                                                </Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td>Annex</Td>
                                                                <Td>Pending</Td>
                                                                <Td>Pharmacy</Td>
                                                                <Td>Wed, 10.25.2019 3:00</Td>
                                                                <Td>08/05/2019</Td>
                                                                <Td>
                                                                    <Switch
                                                                        checked={this.state.checkedA}
                                                                        onChange={this.handleToggle('checkedA')}
                                                                        aria-label="checkedA"
                                                                    />
                                                                </Td>
                                                                <Td className="rowEditIcon">
                                                                    <MailOutlineIcon />
                                                                    <ShareIcon />
                                                                    <DeleteForeverIcon />
                                                                </Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td>John</Td>
                                                                <Td>Pending</Td>
                                                                <Td>Pharmacy</Td>
                                                                <Td>Mondays at 3:00</Td>
                                                                <Td>08/05/2019</Td>
                                                                <Td>
                                                                    <Switch
                                                                        checked={this.state.checkedA}
                                                                        onChange={this.handleToggle('checkedA')}
                                                                        aria-label="checkedA"
                                                                    />
                                                                </Td>
                                                                <Td className="rowEditIcon">
                                                                    <MailOutlineIcon />
                                                                    <ShareIcon />
                                                                    <DeleteForeverIcon />
                                                                </Td>
                                                            </Tr>
                                                        </Tbody>
                                                    </Table>
                                                    <div className="srchVolun">
                                                        <a><SearchIcon /><span>for local Volunteers!</span></a>
                                                    </div>
                                                </div>
                                            </TabContainer>

                                            {/* Setting and Needs Tab Content */}
                                            <TabContainer dir={theme.direction}>
                                                <div className="setingMiles">
                                                    
                                                    <h4>Turn Accepting Volunteers OFF <Button size="small" className={classes.button}> CONFIRM </Button></h4>

                                                    <h1><span>84</span> Volunteers with in <span>20</span> miles of <span>34689</span></h1>
                                                    <h2>My community counter that has experience with:</h2>

                                                    <div className="settingMilesOptions">
                                                        <Grid
                                                            container
                                                            direction="row"
                                                            justify="center"
                                                            alignItems="center"
                                                        >
                                                            <Grid item xs={12} sm={6} md={6}>
                                                                <div><FormControlLabel control={<Checkbox value="Current" />} label="Current" /></div>
                                                                <div><FormControlLabel control={<Checkbox value="entertainment" />} label="Entertainment" /></div>
                                                                <div><FormControlLabel control={<Checkbox value="games" />} label="Games" /></div>
                                                                <div><FormControlLabel control={<Checkbox value="good listner" />} label="Good Listner" /></div>
                                                                <div><FormControlLabel control={<Checkbox value="greeter" />} label="Greeter" /></div>
                                                            </Grid>
                                                            <Grid item xs={12} sm={6} md={6}>
                                                                <div><FormControlLabel control={<Checkbox value="holidays" />} label="Holidays" /></div>
                                                                <div><FormControlLabel control={<Checkbox value="meals" />} label="Meals" /></div>
                                                                <div><FormControlLabel control={<Checkbox value="moving area" />} label="Moving Area" /></div>
                                                                <div><FormControlLabel control={<Checkbox value="music" />} label="Music" /></div>
                                                                <div><FormControlLabel control={<Checkbox value="selectAll" />} label="Select All" /></div>
                                                            </Grid>
                                                        </Grid>
                                                    </div>

                                                    <div className="allVoluntryNeed">
                                                        <h3>Dont see what you need?</h3>
                                                        <p><a>Request</a> Senioplicity add a volunteer type.</p>
                                                    </div>

                                                    <div className="allVoluntry">
                                                        <p>All Volunteers Must:</p>
                                                        <div><FormControlLabel control={<Checkbox value="PassBackgroundCheck" />} label="Pass a background check" /></div>
                                                        <div><FormControlLabel control={<Checkbox value="BeUpToDateOnTheirTBShot" />} label="Be up-to-date on their TB Shot" /></div>
                                                    </div>

                                                    <div className="srchVolun">
                                                        <Button size="medium" className={classes.button}> SEARCH VOLUNTEERS </Button>
                                                    </div>

                                                </div>

                                            </TabContainer>
                                            {/* End of Setting and Needs Tab Content */}

                                        </SwipeableViews>
                                        {/*END OF VOLUNTEER INNER TAB DESIGN */}
                                    </TabContainer>

                                </div>
                                {/* END OF VOLUNTEER DESIGN */}

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
