import React, { Component } from 'react';
import { Row, Col, View, Text } from 'native-base';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

class CustomerAnalytics extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Row style={styles.header}>
                    <Text style={{ fontSize: 16, color: 'white' }}>Customer Analytics</Text>
                </Row>
                <Row style={styles.content}>
                    <Col size={5} style={{ padding: 5 }}>
                        <View>
                            <Text style={{
                                padding: 5,
                                width: 120,
                                borderWidth: 2,
                                borderBottomColor: 'white',
                                borderRightColor: 'white',
                                borderLeftColor: 'white',
                                borderTopColor: '#0073B7'
                            }}>
                                Birthday Today
                            </Text>
                        </View>
                        {/**Birthday today table */}
                        <ScrollView>
                            <Row style={styles.tableHeader}>
                                <Col size={4} style={{padding: 5, borderWidth: 1, borderColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontSize: 15}}>Customer</Text>
                                </Col>
                                <Col size={4} style={{padding: 5, borderWidth: 1, borderColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontSize: 15}}>Member Since</Text>
                                </Col>
                                <Col size={1} style={{padding: 5, borderWidth: 1, borderColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontSize: 15}}>View</Text>
                                </Col>
                            </Row>
                            {/**Birthday today table row */}
                            <Row style={styles.tableRow}>
                                <Col size={4} style={{padding: 5, borderWidth: 1, borderColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontSize: 15}}>Customer</Text>
                                </Col>
                                <Col size={4} style={{padding: 5, borderWidth: 1, borderColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontSize: 15}}>Member Since</Text>
                                </Col>
                                <Col size={1} style={{padding: 5, borderWidth: 1, borderColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontSize: 15}}>View</Text>
                                </Col>
                            </Row>
                        </ScrollView>
                    </Col>
                    <Col size={5} style={{ padding: 5 }}>
                        <View style={{ backgroundColor: '#D9EDF7', height: 220, borderWidth: 1, borderColor: '#3C8DBC' }}>
                            <Row style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color: '#3C8DBC', fontSize: 20, fontWeight: 'bold'}}>Best Customer</Text>
                            </Row>
                            <Row style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
                                <TouchableOpacity>
                                    <Text style={{padding: 5, color: '#3C8DBC', fontSize: 20, backgroundColor: 'white',borderRadius: 30, borderStyle:'dotted', borderColor:'#3C8DBC', borderWidth: 2}}>Walking Customer</Text>
                                </TouchableOpacity>
                            </Row>
                            <Row style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color: '#3C8DBC', fontSize: 18}}>Purchase </Text>
                                <Text style={{color: '#3C8DBC', fontSize: 18, fontWeight: 'bold'}}> DH176,107.20</Text>
                            </Row>
                            <Row style={{height: 20, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color: '#3C8DBC', fontSize: 12, fontStyle:'italic'}}>Mobile: 0170000000000</Text>
                            </Row>
                            <Row style={{height: 20, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color: '#3C8DBC', fontSize: 12, fontStyle:'italic'}}>Email: wc@itsolution24.com</Text>
                            </Row>
                            <Row style={{height: 20, justifyContent: 'center', alignItems: 'center'}}>
                            </Row>
                        </View>
                    </Col>
                </Row>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        padding: 10,
        backgroundColor: 'white',
        width: 1000,
        // backgroundColor: 'gray'
    },

    header: {
        padding: 5,
        height: 30,
        backgroundColor: '#0073B7',
        alignItems: 'center',
    },

    content: {
        width: '100%',
        padding: 5,
        justifyContent: 'center',
        // alignItems: 'center',
    },

    tableHeader: {
        backgroundColor: '#D2D6DE',
        height: 30,
    },
    tableRow: {
        backgroundColor: '#F9F9F9',
        height: 30,
    },
});

export default CustomerAnalytics;