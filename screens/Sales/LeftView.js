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
                                <Col size={4} style={styles.headerCol}>
                                    <Picker
                                        mode='dropdown'
                                        // iosIcon={<Icon name="arrow-down" />}
                                        style={{ width: undefined, margin: 10 }}
                                        placeholder="Select ..."
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        note={false}
                                        placeholderIconColor="#007aff"
                                        selectedValue={this.state.selected}
                                        onValueChange={(value) => this.onValueChange(value)}
                                    >
                                        <Picker.Item label="Active" value="0" />
                                        <Picker.Item label="Inactive" value="1" />
                                    </Picker>
                                </Col>
                                <Col size={2} style={styles.headerCol}>
                                    <TouchableOpacity>
                                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon type="FontAwesome" name="user-o" style={styles.iconStyle}></Icon>
                                            <Text style={styles.btnStyle}>Add Customer</Text>
                                        </Row>
                                    </TouchableOpacity>
                                </Col>
                                <Col size={1} style={styles.headerCol}>
                                    <TouchableOpacity>
                                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon type="FontAwesome" name="pencil" style={styles.iconStyle}></Icon>
                                            <Text style={styles.btnStyle}>Note</Text>
                                        </Row>
                                    </TouchableOpacity>
                                </Col>
                                <Col size={2} style={styles.headerCol}>
                                    <TouchableOpacity>
                                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon type="FontAwesome" name="truck" style={styles.iconStyle}></Icon>
                                            <Text style={styles.btnStyle}>Shipping</Text>
                                        </Row>
                                    </TouchableOpacity>
                                </Col>
                                <Col size={1} style={styles.headerCol}>
                                    <TouchableOpacity>
                                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon type="FontAwesome" name="plus" style={styles.iconStyle}></Icon>
                                            <Text style={styles.btnStyle}>Item</Text>
                                        </Row>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                        </View>
                        <View style={{ padding: 5, paddingBottom: 1 }}>
                            <Row style={{ backgroundColor: '#E7E7E7', height: 30 }}>
                                <Col size={4} style={{ padding: 5, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 13 }}>Items</Text>
                                </Col>
                                <Col size={2} style={{ padding: 5, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 13 }}>Unit Price</Text>
                                </Col>
                                <Col size={2} style={{ padding: 5, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 13 }}>Quantity</Text>
                                </Col>
                                <Col size={2} style={{ padding: 5, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 13 }}>Total Price</Text>
                                </Col>
                            </Row>
                        </View>
                        <View style={{ padding: 5, paddingTop: 0, paddingBottom: 1 }}>
                            <Row style={{ backgroundColor: 'white', height: 30 }}>
                                <Col size={4} style={{ padding: 5, justifyContent: 'center' }}>
                                    <Row style={{ alignItems: 'center' }}>
                                        <TouchableOpacity>
                                            <View style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E7E7E7' }}>
                                                <Icon type='FontAwesome' name='edit' style={styles.iconStyle}></Icon>
                                            </View>
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 13 }}>Items</Text>
                                    </Row>
                                </Col>
                                <Col size={2} style={{ padding: 5, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 13 }}>$23</Text>
                                </Col>
                                <Col size={2} style={{ padding: 5, justifyContent: 'center' }}>
                                    <Row style={{ alignItems: 'center' }}>
                                        <TouchableOpacity>
                                            <View style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E7E7E7' }}>
                                                <Icon type='FontAwesome' name='minus' style={{fontSize: 10}}></Icon>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={{ width: 50, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E7E7E7' }}>
                                                <Text style={styles.btnStyle}>12</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E7E7E7' }}>
                                                <Icon type='FontAwesome' name='plus' style={{fontSize: 10}}></Icon>
                                            </View>
                                        </TouchableOpacity>
                                    </Row>
                                </Col>
                                <Col size={2} style={{ padding: 5, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 13 }}>$35</Text>
                                </Col>
                            </Row>
                            <Row style={{ backgroundColor: 'white', height: 30 }}>
                                <Col size={4} style={{ padding: 5, justifyContent: 'center' }}>
                                    <Row style={{ alignItems: 'center' }}>
                                        <TouchableOpacity>
                                            <View style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E7E7E7' }}>
                                                <Icon type='FontAwesome' name='edit' style={styles.iconStyle}></Icon>
                                            </View>
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 13 }}>awegwe</Text>
                                    </Row>
                                </Col>
                                <Col size={2} style={{ padding: 5, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 13 }}>$345</Text>
                                </Col>
                                <Col size={2} style={{ padding: 5, justifyContent: 'center' }}>
                                    <Row style={{ alignItems: 'center' }}>
                                        <TouchableOpacity>
                                            <View style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E7E7E7' }}>
                                                <Icon type='FontAwesome' name='minus' style={{fontSize: 10}}></Icon>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={{ width: 50, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E7E7E7' }}>
                                                <Text style={styles.btnStyle}>231</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={{ width: 25, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E7E7E7' }}>
                                                <Icon type='FontAwesome' name='plus' style={{fontSize: 10}}></Icon>
                                            </View>
                                        </TouchableOpacity>
                                    </Row>
                                </Col>
                                <Col size={2} style={{ padding: 5, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 13 }}>$453</Text>
                                </Col>
                            </Row>
                        </View>
                        {/* below table */}
                        <View style={{ padding: 5, paddingBottom: 1 }}>
                            <Row style={{ backgroundColor: '#F5F5F5', height: 30 }}>
                                <Col size={5} style={{ padding: 5, alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: 13 }}>Products count ( 438 )</Text>
                                </Col>
                                <Col size={1} style={{ padding: 5, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 13 }}>Sub Total</Text>
                                </Col>
                                <Col size={1} style={{ padding: 5, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 13 }}>$124</Text>
                                </Col>
                            </Row>
                            <Row style={{ backgroundColor: '#F5F5F5', height: 30 }}>
                                <Col size={7.5} style={{ padding: 5, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                    <Text style={{ fontSize: 13, textAlign: 'right' }}>Discount on Cart</Text>
                                </Col>
                                <Col size={1} style={{ padding: 5, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 13 }}>$0.00</Text>
                                </Col>
                            </Row>
                            <Row style={{ backgroundColor: '#F5F5F5', height: 30 }}>
                                <Col size={9} style={{ padding: 5, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 13 }}>Shipping</Text>
                                </Col>
                                <Col size={1} style={{ padding: 5, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 13 }}>$0.00</Text>
                                </Col>
                            </Row>
                            <Row style={{ backgroundColor: '#F5F5F5', height: 30 }}>
                                <Col size={10} style={{ padding: 5, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 13 }}>Net Payable</Text>
                                </Col>
                                <Col size={1} style={{ padding: 5, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 13 }}>$52200</Text>
                                </Col>
                            </Row>
                        </View>

                        <View style={{ padding: 5 }}>
                            <Row style={styles.header}>
                                <Col style={styles.headerCol}>
                                    <TouchableOpacity>
                                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon type="FontAwesome" name="money" style={styles.iconStyle}></Icon>
                                            <Text style={styles.btnStyle}>Pay</Text>
                                        </Row>
                                    </TouchableOpacity>
                                </Col>
                                <Col style={styles.headerCol}>
                                    <TouchableOpacity>
                                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon type="FontAwesome" name="hand-stop-o" style={styles.iconStyle}></Icon>
                                            <Text style={styles.btnStyle}>Hold</Text>
                                        </Row>
                                    </TouchableOpacity>
                                </Col>
                                <Col style={styles.headerCol}>
                                    <TouchableOpacity>
                                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon type="FontAwesome" name="gift" style={styles.iconStyle}></Icon>
                                            <Text style={styles.btnStyle}>Discount</Text>
                                        </Row>
                                    </TouchableOpacity>
                                </Col>
                                <Col style={styles.headerCol}>
                                    <TouchableOpacity>
                                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon type="FontAwesome" name="refresh" style={styles.iconStyle}></Icon>
                                            <Text style={styles.btnStyle}>Cancel</Text>
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
        // paddingBottom: 30
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