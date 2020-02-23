import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import MainHeader from '../../components/MainHeader';
import { Button, Container, Row, Icon, Col, Card, CardItem, Body } from 'native-base';

class DashboardScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <View>
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
                        <Container style={{ justifyContent: 'flex-start', backgroundColor: '#f1f3f6', paddingTop: 15 }}>
                            <Row style={{ justifyContent: 'center', height: 150 }}>
                                <Col size={1}></Col>
                                <Col size={20}>
                                    <View style={{ backgroundColor: '#37a000', height: 80 }}>
                                        <Row style={styles.topRow}>
                                            <Text style={{ fontSize: 18, color: 'white' }}>13</Text>
                                        </Row>
                                        <Row style={styles.midRow}>
                                            <Text style={{ fontSize: 18, color: 'white' }}>Total Customer</Text>
                                        </Row>
                                    </View>
                                    <View style={styles.bottomRow1}>
                                        <Text style={{ fontSize: 16, color: 'white' }}>Total Customer</Text>
                                    </View>
                                </Col>
                                <Col size={1}></Col>
                            </Row>
                            <Row style={{ justifyContent: 'center', height: 150 }}>
                                <Col size={1}></Col>
                                <Col size={20}>
                                    <View style={{ backgroundColor: '#6cabbc', height: 80 }}>
                                        <Row style={styles.topRow}>
                                            <Text style={{ fontSize: 18, color: 'white' }}>9</Text>
                                        </Row>
                                        <Row style={styles.midRow}>
                                            <Text style={{ fontSize: 18, color: 'white' }}>Total Product</Text>
                                        </Row>
                                    </View>
                                    <View style={styles.bottomRow2}>
                                        <Text style={{ fontSize: 16, color: 'white' }}>Total Product</Text>
                                    </View>
                                </Col>
                                <Col size={1}></Col>
                            </Row>
                            <Row style={{ justifyContent: 'center', height: 150 }}>
                                <Col size={1}></Col>
                                <Col size={20}>
                                    <View style={{ backgroundColor: '#8459cf', height: 80 }}>
                                        <Row style={styles.topRow}>
                                            <Text style={{ fontSize: 18, color: 'white' }}>15</Text>
                                        </Row>
                                        <Row style={styles.midRow}>
                                            <Text style={{ fontSize: 18, color: 'white' }}>Total Supplier</Text>
                                        </Row>
                                    </View>
                                    <View style={styles.bottomRow3}>
                                        <Text style={{ fontSize: 16, color: 'white' }}>Total Supplier</Text>
                                    </View>
                                </Col>
                                <Col size={1}></Col>
                            </Row>
                            <Row style={{ justifyContent: 'center', height: 150 }}>
                                <Col size={1}></Col>
                                <Col size={20}>
                                    <View style={{ backgroundColor: '#749057', height: 80 }}>
                                        <Row style={styles.topRow}>
                                            <Text style={{ fontSize: 18, color: 'white' }}>24</Text>
                                        </Row>
                                        <Row style={styles.midRow}>
                                            <Text style={{ fontSize: 18, color: 'white' }}>Total Sale</Text>
                                        </Row>
                                    </View>
                                    <View style={styles.bottomRow4}>
                                        <Text style={{ fontSize: 16, color: 'white' }}>Total Sale</Text>
                                    </View>
                                </Col>
                                <Col size={1}></Col>
                            </Row>
                        </Container>
                        <Row></Row>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topRow: {
        justifyContent: 'center',
        alignItems: 'flex-end'
    },

    midRow: {
        justifyContent: 'center',
        alignItems: 'flex-start'
    },

    bottomRow1: {
        backgroundColor: '#319000',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bottomRow2: {
        backgroundColor: '#619aa9',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bottomRow3: {
        backgroundColor: '#7750ba',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bottomRow4: {
        backgroundColor: '#68814e',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default DashboardScreen;