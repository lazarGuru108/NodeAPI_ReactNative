import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, View, Row, Text, Col, Picker, Icon, ListItem, Body } from 'native-base';
import { StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import noImage from '../../assets/images/noimage.jpg';
import DateTimePicker from '@react-native-community/datetimepicker';
import NumberInput from '../../components/NumberInput';

const fontSize = 12;

class EditUser extends Component {
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


    setDate(e, newDate) {
        // this.setState({ chosenDate: newDate });
        console.log(newDate);
        let oldDate = this.state.date;
        this.setState({ date: newDate || oldDate, showDatePicker: false });
    }

    onSelectDate() {
        this.setState({ showDatePicker: true })
    }


    render() {
        let showDatePicker = this.state.showDatePicker;
        let date = this.state.date;
        return (
            <View style={styles.content}>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize }}>Thumbnail </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
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
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize }}>Name </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Name" style={styles.nameInput} onChangeText={(text) => this.setState({ uname: text })} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize }}>Email </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Email" style={styles.nameInput} onChangeText={(text) => this.setState({ uname: text })} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize }}>Mobile </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Mobile" style={styles.nameInput} onChangeText={(text) => this.setState({ uname: text })} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize }}>Password </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Password" style={styles.nameInput} onChangeText={(text) => this.setState({ uname: text })} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow, { height: 40 }}>
                            <Text style={{ fontSize: fontSize }}>Retype Password </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Retype Password" style={styles.nameInput} onChangeText={(text) => this.setState({ uname: text })} />
                    </Col>
                </Row>

                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize }}>Group </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Picker
                                mode='dropdown'
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined, margin: 10 }}
                                placeholder="Select ..."
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selectedState}
                                style={{ fontSize: 10 }}
                                onValueChange={(value) => this.onValueChange('state', value)}

                            >
                                <Picker.Item label="Group 1" value="key0" />
                                <Picker.Item label="Group 2" value="key1" />
                                <Picker.Item label="Group 3" value="key2" />
                                <Picker.Item label="Group 4" value="key3" />
                                <Picker.Item label="Group 5" value="key4" />
                            </Picker>
                            <TouchableOpacity>
                                <View style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon type="FontAwesome" name="plus" style={{ fontSize: 18, color: 'gray' }}></Icon>
                                </View>
                            </TouchableOpacity>
                        </Row>
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize }}>Date of Birth </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Select Date" style={styles.nameInput}
                            value={date.toString().slice(0, 15)}
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
                            <Text style={{ fontSize: fontSize }}>Store </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Row style={{ alignItems: 'center', height: 15 }}>
                            <Col size={1} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <CheckBox checked={true} size={15} checkedColor={'gray'} />
                            </Col>
                            <Col size={5}>
                                <Text style={{ fontSize: fontSize }}>Select / Deselect</Text>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="" style={styles.nameInput} />
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'flex-start', alignItems: 'flex-start', height: 60 }}>
                    <Col size={3}>

                    </Col>
                    <Col size={10}>
                        <Row style={{ alignItems: 'center', marginVertical: 5 }}>
                            <Col size={1} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <CheckBox checked={true} size={15} checkedColor={'gray'} />
                            </Col>
                            <Col size={5}>
                                <Text style={{ fontSize: fontSize }}>Store 01</Text>
                            </Col>
                        </Row>
                        <Row style={{ alignItems: 'center', marginVertical: 5 }}>
                            <Col size={1} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <CheckBox checked={true} size={15} checkedColor={'gray'} />
                            </Col>
                            <Col size={5}>
                                <Text style={{ fontSize: fontSize }}>Store 02</Text>
                            </Col>
                        </Row>
                        <Row style={{ alignItems: 'center', marginVertical: 5 }}>
                            <Col size={1} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <CheckBox checked={true} size={15} checkedColor={'gray'} />
                            </Col>
                            <Col size={5}>
                                <Text style={{ fontSize: fontSize }}>Store 03</Text>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize }}>Status </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Picker
                            mode='dropdown'
                            // iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined, margin: 10 }}
                            placeholder="Select ..."
                            placeholderStyle={{ color: "#bfc6ea" }}
                            note={false}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.selectedCountry}
                            onValueChange={(value) => this.onValueChange('country', value)}
                        >
                            <Picker.Item label="Active" value="0" />
                            <Picker.Item label="Inactive" value="1" />
                        </Picker>
                    </Col>
                </Row>

                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize }}>Order </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <NumberInput placeholder="Order" style={styles.nameInput}/>
                    </Col>
                </Row>

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
                                    title="Save" titleStyle={{ fontSize: 12, padding:5 }}
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
        );
    }
}

const styles = StyleSheet.create({
    content: {
        paddingVertical: 10
    },
    nameInput: {
        margin: 10,
        height: 30,
        backgroundColor: 'white',
        padding: 5
    },

    inputRow: {
        height: 40,
        // padding: 10, 
        // margin: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputArea: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 10, 
        padding: 5,
    },

    inputLabelRow: {
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    inputAreaLabelRow: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    textArea: { textAlignVertical: 'top', backgroundColor: 'white', margin: 10, marginTop: 5, padding: 5 },

    saveButton: {
        marginTop: 5,
        height: 25,
        width: 64,
        backgroundColor: '#00C0EF',
        // justifyContent: 'center',
    },
    resetButton: {
        marginTop: 5,
        height: 25,
        width: 64,
        backgroundColor: '#DD4B39',
        justifyContent: 'center',
    },
});

export default EditUser;