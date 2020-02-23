import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import MainHeader from '../../components/MainHeader';
import { Button, Container, Row, Icon, Col, Card, CardItem, Body, Header, Content, Accordion } from 'native-base';
import EditSuppliers from './EditSuppliers';
import ViewSuppliers from './ViewSuppliers';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

class ManageSupplier extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openedKey: 'list',
        };
    }

    handleTouchHeader = (headerKey) => {
        let openedKey = this.state.openedKey;
        if (openedKey === headerKey) {
            headerKey === 'list' ? this.setState({ openedKey: 'add' }) : this.setState({ openedKey: 'list' });
        } else {
            headerKey === 'list' ? this.setState({ openedKey: 'list' }) : this.setState({ openedKey: 'add' });
        }
    }

    render() {
        let { openedKey } = this.state;
        return (
            <ScrollView>
                <Row style={{ height: 80, flexDirection: 'column', justifyContent: 'center' }}>
                    <MainHeader />
                </Row>
                <Row style={{ height: 60, backgroundColor: 'white', justifyContent: 'flex-end', paddingRight: 20 }}>
                    <Col size={20}>
                        <Row>
                            <Col size={16}></Col>
                            <Col size={2} style={{ alignItems: 'flex-end' }}>
                                <View style={{ width: 25, height: 25, backgroundColor: '#f5f5f5', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name='alert-outline' type="MaterialCommunityIcons" style={{ fontSize: 22 }} />
                                    <Icon name='circle' type="FontAwesome"
                                        style={{
                                            color: 'red',
                                            fontSize: 12,
                                            position: 'absolute', top: -4, right: -4
                                        }}
                                    />
                                    <Icon type='FontAwesome' name='circle-o'
                                        style={{
                                            fontSize: 5, color: 'white',
                                            position: 'absolute', top: -.8, right: -.8
                                        }}
                                    />
                                </View>
                            </Col>
                            <Col size={2} style={{ alignItems: 'flex-end' }}>
                                <View style={{ width: 25, height: 25, backgroundColor: '#f5f5f5', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name='settings' type="SimpleLineIcons" style={{ fontSize: 22 }} />
                                </View>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Container style={{ justifyContent: 'flex-start', backgroundColor: '#f1f3f6', padding: 15, height: 'auto' }}>
                    <Row style={styles.accordionHeader} onTouchEnd={() => this.handleTouchHeader('add')}>
                        <Col size={1} style={{ alignItems: 'center' }}>
                            <Icon type='FontAwesome' name={'plus'} style={{ fontSize: 15 }} />
                        </Col>
                        <Col size={8}>
                            <Text>Add New Supplier</Text>
                        </Col>
                        <Col size={.7}>
                            {
                                <Icon type='FontAwesome' name={openedKey === 'add' ? 'minus' : 'plus'} style={{ fontSize: 15 }} />
                            }
                        </Col>
                    </Row>
                    {openedKey === 'add' ?
                        <EditSuppliers />
                        :
                        null
                    }
                    <Row style={styles.accordionHeader} onTouchEnd={() => this.handleTouchHeader('list')}>
                        <Col size={1} style={{ alignItems: 'center' }}>
                            <Icon type='FontAwesome' name={'plus'} style={{ fontSize: 15 }} />
                        </Col>
                        <Col size={8}>
                            <Text>Supplier List</Text>
                        </Col>
                        <Col size={.7}>
                            {
                                <Icon type='FontAwesome' name={openedKey === 'list' ? 'minus' : 'plus'} style={{ fontSize: 15 }} />
                            }
                        </Col>
                    </Row>
                    {openedKey === 'list' ?
                        <ViewSuppliers />
                        :
                        null
                    }
                </Container>
                <Row>
                </Row>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    accordionHeader: {
        backgroundColor: "gray",
        height: 30,
        borderWidth: 1,
        borderColor: '#f5f5f5',
        alignItems: 'center',
    }
});

export default ManageSupplier;