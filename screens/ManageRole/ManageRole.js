import React from 'react';
import { StyleSheet, View, Text, ScrollView, ImageBackground } from 'react-native';
import MainHeader from '../../components/MainHeader';
import { Container, Row, Icon, Col } from 'native-base';
import EditRole from './EditRole';
import ViewRole from './ViewRole';
import initRole from './initRole.json';
import testData from './testData.json';
import background from '../../assets/images/background.jpg';
import TopIcon from '../../components/TopIcon';

class ManageRole extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openedKey: 'list',
            initData: testData,
            selectedRecord: initRole,
            selectedRecordKey: -1,
            isEditing: false,
        };
    }

    handleTouchHeader = (headerKey) => {
        let openedKey = this.state.openedKey;
        if (openedKey === headerKey) {
            headerKey === 'list' ? this.setState({ openedKey: 'add', selectedRecordKey: -1, selectedRecord: initRole }) : this.setState({ openedKey: 'list' });
        } else {
            headerKey === 'list' ? this.setState({ openedKey: 'list' }) : this.setState({ openedKey: 'add', selectedRecordKey: -1, selectedRecord: initRole });
        }
    }

    handleDelete = (key) => {
        let data = this.state.initData.roles;
        delete data[key];
        data.splice(key,1);
        let initData = {...this.state.initData, roles: data};
        this.setState({initData: initData});
    }

    handleEdit = (key) => {
        let roles = this.state.initData.roles;
        this.setState({selectedRecord: roles[key],selectedRecordKey: key, isEditing: true, openedKey: 'add'});
    }

    saveRole = (saveData) => {
        let {initData, selectedRecordKey,isEditing } = this.state;
        if(isEditing){
            initData.roles[selectedRecordKey] = saveData;
        }
        else{
            let len = initData.roles.length;
            let save = {...saveData, id: initData.roles[len-1].id + 1};
            initData.roles.push(save);
        }
        this.setState({initData: initData, openedKey: 'list', isEditing: false});
    }

    render() {
        let { openedKey, initData,selectedRecord } = this.state;
        return (
            <ImageBackground style={styles.container} source={background}>
            <ScrollView>
                <Row style={{ height: 80, flexDirection: 'column', justifyContent: 'center' }}>
                    <MainHeader />
                </Row>
                <TopIcon />               
                <Container style={{ justifyContent: 'flex-start', backgroundColor: '#f1f3f600', padding: 15, height: 'auto' }}>
                    <Row style={styles.accordionHeader} onTouchEnd={() => this.handleTouchHeader('add')}>
                        <Col size={1} style={{ alignItems: 'center' }}>
                            <Icon type='FontAwesome' name={'plus'} style={{ fontSize: 15 }} />
                        </Col>
                        <Col size={8}>
                            <Text>Add New Role</Text>
                        </Col>
                        <Col size={.7}>
                            {
                                <Icon type='FontAwesome' name={openedKey === 'add' ? 'minus' : 'plus'} style={{ fontSize: 15 }} />
                            }
                        </Col>
                    </Row>
                    {openedKey === 'add' ?
                        <EditRole initData={selectedRecord} saveRole={(saveData) => {this.saveRole(saveData)}} />
                        :
                        null
                    }
                    <Row style={styles.accordionHeader} onTouchEnd={() => this.handleTouchHeader('list')}>
                        <Col size={1} style={{ alignItems: 'center' }}>
                            <Icon type='FontAwesome' name={'plus'} style={{ fontSize: 15 }} />
                        </Col>
                        <Col size={8}>
                            <Text>Role List</Text>
                        </Col>
                        <Col size={.7}>
                            {
                                <Icon type='FontAwesome' name={openedKey === 'list' ? 'minus' : 'plus'} style={{ fontSize: 15 }} />
                            }
                        </Col>
                    </Row>
                    {openedKey === 'list' ?
                        <ViewRole initData={initData} handleEdit={(key) => this.handleEdit(key)} handleDelete={(key) => this.handleDelete(key)}/>
                        :
                        null
                    }
                </Container>
                <Row>
                </Row>
            </ScrollView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    accordionHeader: {
        backgroundColor: "#ffffff88",
        height: 30,
        borderWidth: 0.5,
        borderColor: '#f5f5f5',
        alignItems: 'center',
    }
});

export default ManageRole;