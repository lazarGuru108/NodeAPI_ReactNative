import React, { Component } from 'react';
import { View, Row, Text, Col, Icon, Button, Picker } from 'native-base';
import { StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

class LeftView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
        }
    }

    onValueChange = (value) => {
        this.setState({
            selected: value
        });
        console.log(value);
    }

    render() {
        return (
            <ScrollView horizontal={true}>
                <View>
                    <ScrollView style={styles.container}>
                        <View style={{ padding: 5 }}>
                            <Row style={styles.header}>
                                <Col size={1} style={styles.headerCol}>
                                    <TouchableOpacity>
                                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon type="FontAwesome" name="search" style={styles.iconStyle}></Icon>
                                        </Row>
                                    </TouchableOpacity>
                                </Col>
                                <Col size={1} style={styles.headerCol}>
                                    <TouchableOpacity>
                                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon type="FontAwesome" name="barcode" style={styles.iconStyle}></Icon>
                                        </Row>
                                    </TouchableOpacity>
                                </Col>
                                <Col size={8} style={styles.headerCol}>
                                    <TouchableOpacity>
                                        <Row style={{ justifyContent: 'space-around', alignItems: 'stretch' }}>
                                            <TextInput placeholder='barcode, SKU, product name or category ...' style={{ backgroundColor: 'white', width: 635 }}></TextInput>
                                        </Row>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                        </View>
                        <View style={{ padding: 5 }}>
                            <Row style={styles.header}>
                                <Col size={1} style={styles.headerCol}>
                                    <TouchableOpacity>
                                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon type="FontAwesome" name="eye" style={styles.iconStyle}></Icon>
                                        </Row>
                                    </TouchableOpacity>
                                </Col>
                                <Col size={1} style={styles.headerCol}>
                                    <TouchableOpacity>
                                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon type="FontAwesome" name="arrow-left" style={styles.iconStyle}></Icon>
                                        </Row>
                                    </TouchableOpacity>
                                </Col>
                                <Col size={8} style={styles.headerCol}>
                                    <TouchableOpacity>
                                        <Row style={{ justifyContent: 'space-around', alignItems: 'stretch' }}>
                                            
                                        </Row>
                                    </TouchableOpacity>
                                </Col>
                                <Col size={1} style={styles.headerCol}>
                                    <TouchableOpacity>
                                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon type="FontAwesome" name="arrow-right" style={styles.iconStyle}></Icon>
                                        </Row>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                        </View>

                    </ScrollView>
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
    },

    header: {
        backgroundColor: '#E7E7E7',
        height: 30,
        width: 800,
    },

    headerCol: {
        borderWidth: 0.5,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },

    iconStyle: {
        fontSize: 13,
    },

    btnStyle: {
        fontSize: 13,
    }

});

export default LeftView;