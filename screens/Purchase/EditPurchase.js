import React, { Component } from 'react';
import {Row, Text, Col, Picker, Icon, View } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, TextInput, ScrollView, Image } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import noImage from '../../assets/images/noimage.jpg';
import { TouchableOpacity } from 'react-native';


const fontSize = 12;

class EditPurchase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            selectedState: undefined,
            selectedCountry: undefined,
            date: new Date().toString('dd-MMM-yyyy'),
            showDatePicker: false,
        }
        this.setDate = this.setDate.bind(this);
    }

    onValueChange = (item, value) => {
        this.setState({
            selected2: value
        });
        if (item === 'state') this.setState({ selectedState: value })
        if (item === 'country') this.setState({ selectedCountry: value })
    }

    setDate(e,newDate) {
        // this.setState({ chosenDate: newDate });
        console.log(newDate);
        let oldDate = this.state.date;
        this.setState({date: newDate || oldDate, showDatePicker: false});
    }

    onSelectDate () {
        this.setState({showDatePicker: true})
    }

    render() {
        let { showDatePicker, date } = this.state;
        return (
            <View style={styles.content}>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize, color: 'white' }}>Date </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                    <TextInput placeholder="Select Date" style={styles.nameInput} 
                            value={ date.toString().slice(0,15) } 
                            onTouchEnd={() => this.onSelectDate()} />
                            { 
                                showDatePicker &&
                                <DateTimePicker
                                    placeHolderText="Select date"
                                    textStyle={{ color: "gray" }}
                                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                                    testID="dateTimePicker"
                                    timeZoneOffsetInMinutes={0}
                                    value={new Date()}
                                    mode={'date'}
                                    dateFormat="yyyy/MM/dd"
                                    is24Hour={true}
                                    display="default"
                                    onChange={this.setDate}
                                    locale={"en"}
                                    show={false}
                                />
                            }
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize, color: 'white' }}>Ref. No. </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Ref. No." style={styles.nameInput} value={this.state.uname} />
                    </Col>
                </Row>
                <Row style={styles.inputArea}>
                    <Col size={3}>
                        <Row style={styles.inputAreaLabelRow}>
                            <Text style={{ fontSize: fontSize, color: 'white' }}>Notes </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput
                            placeholder="Address"
                            multiline={true}
                            numberOfLines={10} style={styles.textArea}
                        />

                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize, color: 'white' }}>Attachment </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TouchableOpacity style={{ padding: 13 }}>
                            <Image
                                resizeMode='contain'
                                style={{ width: 40, height: 40 }}
                                source={noImage}
                            />
                        </TouchableOpacity>
                    </Col>
                </Row>
                <View style={{ backgroundColor: '#d6d4d4', padding: 10 }}>
                    <Row style={styles.inputRow}>
                        <Col size={3}>
                            <Row style={styles.inputLabelRow}>
                                <Text style={{ fontSize: fontSize }}>Supplier </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                            </Row>
                        </Col>
                        <Col size={10}>
                            <Picker
                                mode='dropdown'
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined, margin: 10 }}
                                placeholder="Select ..."
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selectedState}
                                onValueChange={(value) => this.onValueChange('state', value)}

                            >
                                <Picker.Item label="No Supplier" value="key0" />
                                <Picker.Item label="ghgf" value="key1" />
                                <Picker.Item label="Hamza" value="key2" />
                                <Picker.Item label="Future" value="key3" />
                                <Picker.Item label="tahr" value="key4" />
                            </Picker>
                        </Col>
                    </Row>
                    <Row style={styles.inputRow}>
                        <Col size={3}>
                            <Row style={styles.inputLabelRow}>
                                <Text style={{ fontSize: fontSize }}>Add Product </Text>
                            </Row>
                        </Col>
                        <Col size={10}>
                            <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Col size={1} style={{ alignItems: 'flex-end' }}>
                                    <Icon type='FontAwesome' name='barcode' style={{ fontSize: 33 }}></Icon>
                                </Col>
                                <Col size={8} style={{ alignItems: 'stretch' }}>
                                    <TextInput placeholder="" style={styles.addProductInput} />
                                </Col>
                                <Col size={3} style={{ backgroundColor: 'gray', height: 28 }}>
                                    <Text>Register</Text>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <ScrollView horizontal={true}>
                        <ScrollView>
                            <Row style={styles.tableHeader}>
                                <Col size={5} style={styles.headerCol}><Text style={styles.title}>Product</Text></Col>
                                <Col size={2} style={styles.headerCol}><Text style={styles.title}>Available</Text></Col>
                                <Col size={2} style={styles.headerCol}><Text style={styles.title}>Quantity</Text></Col>
                                <Col size={1} style={styles.headerCol}><Text style={styles.title}>Cost</Text></Col>
                                <Col size={3} style={styles.headerCol}><Text style={styles.title}>Sell Price</Text></Col>
                                <Col size={3} style={styles.headerCol}><Text style={styles.title}>Item Tax</Text></Col>
                                <Col size={3} style={styles.headerCol}><Text style={styles.title}>Item Total</Text></Col>
                                <Col size={1} style={styles.headerCol}><Icon type='AntDesign' name='delete' style={styles.title} /></Col>
                            </Row>
                            <Row style={styles.tableRow}>
                                <Col size={16} style={{ justifyContent: 'center', alignItems: 'flex-end' }}><Text style={styles.itemText}>Subtotal</Text></Col>
                                <Col size={3} style={{ justifyContent: 'center', alignItems: 'flex-end' }}><Text style={styles.itemText}>0.00</Text></Col>
                                <Col size={1}></Col>
                            </Row>
                            <Row style={styles.tableRow}>
                                <Col size={16} style={{ justifyContent: 'center', alignItems: 'flex-end' }}><Text style={styles.itemText}>Order Tax (%)</Text></Col>
                                <Col size={3} style={{ justifyContent: 'center', alignItems: 'flex-end' }}><TextInput style={styles.cellText}>0.00</TextInput></Col>
                                <Col size={1}></Col>
                            </Row>
                            <Row style={styles.tableRow}>
                                <Col size={16} style={{ justifyContent: 'center', alignItems: 'flex-end' }}><Text style={styles.itemText}>Shipping Charge</Text></Col>
                                <Col size={3} style={{ justifyContent: 'center', alignItems: 'flex-end' }}><TextInput style={styles.cellText}>0.00</TextInput></Col>
                                <Col size={1}></Col>
                            </Row>
                            <Row style={styles.tableRow}>
                                <Col size={16} style={{ justifyContent: 'center', alignItems: 'flex-end' }}><Text style={styles.itemText}>Other Charge</Text></Col>
                                <Col size={3} style={{ justifyContent: 'center', alignItems: 'flex-end' }}><TextInput style={styles.cellText}>0.00</TextInput></Col>
                                <Col size={1}></Col>
                            </Row>
                            <Row style={styles.tableRow}>
                                <Col size={16} style={{ justifyContent: 'center', alignItems: 'flex-end' }}><Text style={styles.itemText}>Discount</Text></Col>
                                <Col size={3} style={{ justifyContent: 'center', alignItems: 'flex-end' }}><TextInput style={styles.cellText}>0.00</TextInput></Col>
                                <Col size={1}></Col>
                            </Row>
                            <Row style={{
                                borderColor: 'white',
                                borderWidth: 0.5,
                                backgroundColor: '#F39C12',
                                width: 800,
                                height: 30,
                            }}>
                                <Col size={16} style={{ justifyContent: 'center', alignItems: 'flex-end' }}><Text style={styles.itemText}>Payable Amount</Text></Col>
                                <Col size={3} style={{ justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 12, textAlign: 'center' }}>0.00</Text></Col>
                                <Col size={1}></Col>
                            </Row>
                            <Row style={{
                                borderColor: 'white',
                                borderWidth: 0.5,
                                backgroundColor: '#0073B7',
                                width: 800,
                                height: 30,
                            }}>
                                <Col size={16} style={{ justifyContent: 'center', alignItems: 'flex-end' }}><Text style={styles.itemText}>Payment Method</Text></Col>
                                <Col size={3} style={{ justifyContent: 'center', alignItems: 'flex-end' }}><TextInput style={styles.cellText}>0.00</TextInput></Col>
                                <Col size={1}></Col>
                            </Row>
                            <Row style={{
                                borderColor: 'white',
                                borderWidth: 0.5,
                                backgroundColor: '#0073B7',
                                width: 800,
                                height: 30,
                            }}>
                                <Col size={16} style={{ justifyContent: 'center', alignItems: 'flex-end' }}><Text style={styles.itemText}>Paid Amount</Text></Col>
                                <Col size={3} style={{ justifyContent: 'center', alignItems: 'flex-end' }}><TextInput style={styles.cellText}>0.00</TextInput></Col>
                                <Col size={1}></Col>
                            </Row>
                            <Row style={styles.tableRow}>
                                <Col size={8} style={{ justifyContent: 'center', alignItems: 'flex-end' }}><Text style={styles.itemText}>Due Amount</Text></Col>
                                <Col size={8} style={{ justifyContent: 'center', alignItems: 'flex-end', backgroundColor: '#DD4B39' }}><Text style={styles.itemText}>0.00</Text></Col>
                                <Col size={4} style={{ justifyContent: 'center', alignItems: 'flex-end' }}></Col>
                            </Row>
                            <Row style={styles.tableRow}>
                                <Col size={8} style={{ justifyContent: 'center', alignItems: 'flex-end' }}><Text style={styles.itemText}>Change Amount</Text></Col>
                                <Col size={8} style={{ justifyContent: 'center', alignItems: 'flex-end', backgroundColor: '#00A65A' }}><Text style={styles.itemText}>0.00</Text></Col>
                                <Col size={3} style={{ justifyContent: 'center', alignItems: 'flex-end' }}></Col>
                                <Col size={1}></Col>
                            </Row>
                        </ScrollView>
                    </ScrollView>
                    <Row style={styles.inputRow}>
                        <Col size={3}></Col>
                        <Col size={10}>
                            <Row style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Col size={4} style={{ alignItems: 'center' }}>
                                <Button buttonStyle={styles.saveButton}
                                    icon={
                                        <Icon
                                            type="FontAwesome" name="save" style={{ fontSize: 12, color: 'white' }}
                                        />
                                    }
                                    title="Submit" titleStyle={{ fontSize: 12, padding:5 }}
                                />
                            </Col>
                            <Col size={1}></Col>
                            <Col size={4} style={{ alignItems: 'flex-start' }}>
                                <Button buttonStyle={styles.resetButton} iconContainerStyle={{ padding: 10 }}
                                    icon={
                                        <Icon
                                            type="FontAwesome" name="circle-o" style={{ fontSize: 12, color: 'white' }}
                                        />
                                    }
                                    title="Reset" titleStyle={{ fontSize: 12, padding:5 }}
                                />
                            </Col>
                            <Col size={5}></Col>
                        </Row>
                        </Col>
                    </Row>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#00000088',
        paddingVertical: 10
    },
    nameInput: {
        margin: 10,
        height: 30,
        backgroundColor: 'white',
        padding: 5,
        paddingLeft: 10,
        borderRadius: 50,
    },
    addProductInput: {
        height: 28,
        backgroundColor: 'white',
        padding: 5
    },

    inputRow: {
        height: 40,
        // padding: 10, 
        paddingBottom: 10,
        // margin: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputArea: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },

    inputLabelRow: {
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    inputAreaLabelRow: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    textArea: { 
        borderRadius: 20,
        textAlignVertical: 'top', 
        backgroundColor: 'white', 
        margin: 10, 
        marginTop: 0, 
        padding: 10
    },

    saveButton: {
        marginTop: 5,
        height: 25,
        width: 100,
        backgroundColor: '#00C0EF',
        justifyContent: 'center',
        borderRadius: 50,
    },
    resetButton: {
        marginTop: 5,
        height: 25,
        width: 100,
        backgroundColor: '#DD4B39',
        justifyContent: 'center',
        borderRadius: 50,
    },

    tableContainer: {
        padding: 5,
        height: 'auto',
        // backgroundColor: '#D9EDF7'
    },

    tableHeader: {
        width: 800,
        height: 25,
        backgroundColor: '#D9EDF7',
    },

    headerCol: {
        borderColor: '#D6D4D4',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 12,
    },

    itemText: {
        fontSize: 12,
        textAlign: 'right',
    },

    tableRow: {
        borderColor: 'white',
        borderWidth: 0.5,
        backgroundColor: '#A3A3A3',
        width: 800,
        height: 30,
    },
    cellText: {
        textAlign: 'right',
        width: 100,
        height: 20,
        backgroundColor: 'white',
        padding: 2,
        fontSize: 10
    }
});

export default EditPurchase;