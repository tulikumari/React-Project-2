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
import TextField from '@material-ui/core/TextField';
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
                            

                                {/* VOLUNTEER DESIGN */}
                                <div className="voluntryInnerTabs">
                                            <div className="blue-txt"><b>SEARCH BY:</b></div>
                                            <div className="selectByType admin_search_filter">
                                                <ul>
                                                    <li><FormControlLabel control={<Checkbox value="selectall" />} label="First" /></li>
                                                    <li><FormControlLabel control={<Checkbox value="assistedliving" />} label="Last" /></li>
                                                    <li><FormControlLabel control={<Checkbox value="nursinghome" />} label="Email" /></li>
                                                    <li> <FormControlLabel control={<Checkbox value="rehab" />} label="Zip" /></li>
                                                    <li> <FormControlLabel control={<Checkbox value="rehab" />} label="County" /></li>
                                                    <li> <FormControlLabel control={<Checkbox value="rehab" />} label="State" /></li>
                                                </ul>
                                            </div>

                                            <div className="srchVolun filter_search">
                                                <a>
                                                <TextField
                                                    margin="normal"
                                                    id="title"
                                                    label=""
                                                    type="text"
                                                    value="Keyword"
                                                    className="search_textbox"
                                                /><SearchIcon className="search_btn" /></a>
                                            </div>

                                            {/* Setting and Needs Tab Content */}
                                            <TabContainer dir={theme.direction}>
                                                <div className="connect_tabInner">
                                                    <Table>
                                                        <Thead>
                                                            <Tr>
                                                                <Th>FIRST NAME:</Th>
                                                                <Th>LAST NAME:</Th>
                                                                <Th>EMAIL:</Th>
                                                                <Th>CITY:</Th>
                                                                <Th>STATE:</Th>
                                                                <Th>LAST ONLINE:</Th>
                                                                <Th>ADDED:</Th>
                                                                <Th>ACTIVE</Th>
                                                                <Th>ACTION</Th>
                                                            </Tr>
                                                        </Thead>
                                                        <Tbody>
                                                            <Tr>
                                                                <Td>Keller</Td>
                                                                <Td>Pending</Td>
                                                                <Td>Robert@seniorplicity.com</Td>
                                                                <Td>Tarpon Springs</Td>
                                                                <Td>FL</Td>
                                                                <Td>08/05/2019</Td>
                                                                <Td>08/05/2019</Td>
                                                                <Td className="rowEditIcon">TRUE</Td>
                                                                <Td className="rowEditIcon">
                                                                    <MailOutlineIcon />
                                                                    <ShareIcon />
                                                                    <DeleteForeverIcon />
                                                                </Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td>Keller</Td>
                                                                <Td>Pending</Td>
                                                                <Td>Robert@seniorplicity.com</Td>
                                                                <Td>Tarpon Springs</Td>
                                                                <Td>FL</Td>
                                                                <Td>08/05/2019</Td>
                                                                <Td>08/05/2019</Td>
                                                                <Td className="rowEditIcon">TRUE</Td>
                                                                <Td className="rowEditIcon">
                                                                    <MailOutlineIcon />
                                                                    <ShareIcon />
                                                                    <DeleteForeverIcon />
                                                                </Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td>Keller</Td>
                                                                <Td>Pending</Td>
                                                                <Td>Robert@seniorplicity.com</Td>
                                                                <Td>Tarpon Springs</Td>
                                                                <Td>FL</Td>
                                                                <Td>08/05/2019</Td>
                                                                <Td>08/05/2019</Td>
                                                                <Td className="rowEditIcon">TRUE</Td>
                                                                <Td className="rowEditIcon">
                                                                    <MailOutlineIcon />
                                                                    <ShareIcon />
                                                                    <DeleteForeverIcon />
                                                                </Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td>Keller</Td>
                                                                <Td>Pending</Td>
                                                                <Td>Robert@seniorplicity.com</Td>
                                                                <Td>Tarpon Springs</Td>
                                                                <Td>FL</Td>
                                                                <Td>08/05/2019</Td>
                                                                <Td>08/05/2019</Td>
                                                                <Td className="rowEditIcon">TRUE</Td>
                                                                <Td className="rowEditIcon">
                                                                    <MailOutlineIcon />
                                                                    <ShareIcon />
                                                                    <DeleteForeverIcon />
                                                                </Td>
                                                            </Tr>
                                                        </Tbody>
                                                    </Table>
                                                    
                                                </div>
                                            </TabContainer>
                                            {/* End of Setting and Needs Tab Content */}

                                            <div className="incentiveSbmt text-right mr-35"><Button size="medium" className={classes.button}> Submit </Button></div>
                                   

                                </div>
                                {/* END OF VOLUNTEER DESIGN */}

                          
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
