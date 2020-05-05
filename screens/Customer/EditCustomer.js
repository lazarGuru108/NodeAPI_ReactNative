import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, View, Row, Text, Col, Picker, Icon, ListItem, Body } from 'native-base';
import { StyleSheet, TextInput } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import NumberInput from '../../components/NumberInput';
import SearchableDropdown from '../../components/SearchableDropdown'
import DateTimePicker from '@react-native-community/datetimepicker';

const fontSize = 12;

const list = [
    {
        title: 'state 01',
        id: 1
    },
    {
        title: 'state 02',
        id: 2
    },
    {
        title: 'state 03',
        id: 3
    }
]

class EditCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            balance: '',
            selectedState: undefined,
            selectedCountry: undefined,
            selectedStatus: undefined,
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
        if (item === 'status') this.setState({ selectedStatus: value })
    }

    onSelectItem = (e, item) => {
        // console.log('Parent: ', item.title);
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
        const { value, date, showDatePicker } = this.state;
        return (
            <View style={styles.content}>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Name </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Name" style={styles.nameInput} onChangeText={(text) => this.setState({ uname: text })} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Credit Balance </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Code Name" style={styles.nameInput} value={this.state.balance}  onChangeText={(text) => this.setState({ balance: text })}/>
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Phone </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Phone" style={styles.nameInput} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize, color: 'white' }}>Date of Birth </Text>
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
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Email </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput textContentType='emailAddress' placeholder="Email" style={styles.nameInput} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Sex </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Sex" style={styles.nameInput} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Gtin </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Gtin" style={styles.nameInput} />
                    </Col>
                </Row>
                <Row style={styles.inputArea}>
                    <Col size={3}>
                        <Row style={styles.inputAreaLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Address </Text>
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
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>City </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="City" style={styles.nameInput} />
                    </Col>
                </Row>
                <Row style={{
                     height: 'auto',
                     // padding: 10, 
                     // margin: 0,
                     justifyContent: 'center',
                     alignItems: 'center'
                }}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>State </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <SearchableDropdown style={{margin: 10, borderRadius: 50}} list = {list} onSelectItem={(e,item) => this.onSelectItem(e, item)}/>
                        {/* <Picker
                            mode='dropdown'
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined, margin: 10 }}
                            placeholder="Select ..."
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.selectedState}
                            onValueChange={(value) => this.onValueChange('state', value)}

                        >
                            <Picker.Item label="Wallet" value="key0" />
                            <Picker.Item label="ATM Card" value="key1" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4" />
                        </Picker> */}
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Country </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Picker
                            mode='dropdown'
                            // iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined, margin: 10, color: 'white' }}
                            placeholder="Select ..."
                            note={false}
                            selectedValue={this.state.selectedCountry}
                            onValueChange={(value) => this.onValueChange('country', value)}
                        >
                            <Picker.Item label="China" value="0" />
                            <Picker.Item label="Salvado" value="1" />
                            <Picker.Item label="U.K." value="2" />
                            <Picker.Item label="U.S." value="3" />
                        </Picker>
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Store </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Row style={{ alignItems: 'center', height: 15 }}>
                            <Col size={1} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <CheckBox checked={true} size={15} checkedColor={'white'} />
                            </Col>
                            <Col size={5}>
                                <Text style={[{ fontSize: fontSize },styles.whiteText]}>Select / Deselect</Text>
                            </Col>
                        </Row>
                        {/* <Row>
                            <TextInput placeholder="Select stores ..." style={{width: 280,height: 30, margin: 10, backgroundColor: 'white'}} />   
                        </Row> */}
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
                                <CheckBox checked={true} size={15} checkedColor={'white'} />
                            </Col>
                            <Col size={5}>
                                <Text style={[{ fontSize: fontSize },styles.whiteText]}>Store 01</Text>
                            </Col>
                        </Row>
                        <Row style={{ alignItems: 'center', marginVertical: 5 }}>
                            <Col size={1} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <CheckBox checked={true} size={15} checkedColor={'white'} />
                            </Col>
                            <Col size={5}>
                                <Text style={[{ fontSize: fontSize },styles.whiteText]}>Store 02</Text>
                            </Col>
                        </Row>
                        <Row style={{ alignItems: 'center', marginVertical: 5 }}>
                            <Col size={1} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <CheckBox checked={true} size={15} checkedColor={'white'} />
                            </Col>
                            <Col size={5}>
                                <Text style={[{ fontSize: fontSize },styles.whiteText]}>Store 03</Text>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Status </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Picker
                            mode='dropdown'
                            // iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined, margin: 10, color: 'white' }}
                            placeholder="Select ..."
                            note={false}
                            selectedValue={this.state.selectedStatus}
                            onValueChange={(value) => this.onValueChange('status', value)}
                        >
                            <Picker.Item label="Active" value="0" />
                            <Picker.Item label="Inactive" value="1" />
                        </Picker>
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Order </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <NumberInput placeholder="Order" style={styles.nameInput} />
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
                                    title="Save" titleStyle={{ fontSize: 12, padding: 5 }}
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
                                    title="Reset" titleStyle={{ fontSize: 12, padding: 5 }}
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
        textAlignVertical: 'top', 
        backgroundColor: 'white', 
        margin: 10, 
        marginTop: 5, 
        padding: 5,
        borderRadius: 20 
    },

    saveButton: {
        marginTop: 5,
        height: 25,
        width: 90,
        backgroundColor: '#00C0EF',
        justifyContent: 'center',
        borderRadius: 50
    },
    resetButton: {
        marginTop: 5,
        height: 25,
        width: 90,
        backgroundColor: '#DD4B39',
        justifyContent: 'center',
        borderRadius: 50
    },
    whiteText: {
        color: 'white'
    }
});

export default EditCustomer;