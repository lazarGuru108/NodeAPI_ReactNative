import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, View, Row, Text, Col, Picker, Icon, ListItem, Body } from 'native-base';
import { StyleSheet, TextInput } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import NumberInput from '../../components/NumberInput';
import SearchableDropdown from '../../components/SearchableDropdown'

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

class EditSuppliers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            selectedState: undefined,
            selectedCountry: undefined
        }
    }

    onValueChange = (item, value) => {
        this.setState({
            selected2: value
        });
        if (item === 'state') this.setState({ selectedState: value })
        if (item === 'country') this.setState({ selectedCountry: value })
    }

    onSelectItem = (e, item) => {
        // console.log('Parent: ', item.title);
    }

    render() {
        const { value } = this.state;
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
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Code Name </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Code Name" style={styles.nameInput} value={this.state.uname} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Email </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput textContentType='emailAddress' placeholder="Email" style={styles.nameInput} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Mobile </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Mobile" style={styles.nameInput} />
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
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Address </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
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
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>City </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
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
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Country </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
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
                <Row style={styles.inputArea}>
                    <Col size={3}>
                        <Row style={styles.inputAreaLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Detail </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput
                            placeholder="Detail"
                            multiline={true}
                            numberOfLines={10} style={styles.textArea}
                        />
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

export default EditSuppliers;