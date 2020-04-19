import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Switch from '@material-ui/core/Switch';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ShareIcon from '@material-ui/icons/Share';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

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
        checkedA: true,
      };
    
      handleToggle = name => (event, checked) => {
        this.setState({ [name]: checked });
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
                    <Grid item xs={10} sm={10} md={10}>

                        <div className="connect_tab">
                            <Tabs>
                                <TabList>
                                    <Tab>PROVIDERS</Tab>
                                    <Tab>COMMUNITIES</Tab>
                                    <Tab>USERS</Tab>
                                    <Tab>ALL</Tab>
                                    <Tab>VOLUNTEER</Tab>
                                </TabList>

                                <TabPanel>
                                    <Table>
                                        <Thead>
                                            <Tr>
                                                <Th>NAME</Th>
                                                <Th>STATUS</Th>
                                                <Th>TYPE</Th>
                                                <Th>OF TYPE</Th>
                                                <Th>OFFER</Th>
                                                <Th>OPTION</Th>
                                                <Th>DISPLAY</Th>
                                                <Th>ACTION</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>

                                            <Tr>
                                                <Td>Keller</Td>
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
                                                <Td>Dignity</Td>
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
                                                <Td>Annex</Td>
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
                                                <Td>John</Td>
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
                                                <Td>Smith</Td>
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
                                                <Td>Jack</Td>
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
                                                <Td>Tom</Td>
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
                                                <Td>Denny</Td>
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
                                </TabPanel>

                                <TabPanel>
                                    <h2>COMMUNITIES content 2</h2>
                                </TabPanel>
                                <TabPanel>
                                    <h2>USERS content 2</h2>
                                </TabPanel>
                                <TabPanel>
                                    <h2>ALL content 2</h2>
                                </TabPanel>
                                <TabPanel>
                                    <h2>VOLUNTEER content 2</h2>
                                </TabPanel>

                            </Tabs>
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