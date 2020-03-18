import React, { Component } from 'react';
import { View, Row, Text, Col, Picker, Icon } from 'native-base';
import { StyleSheet, TextInput, ScrollView } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import NumberInput from '../../../components/NumberInput';
import SearchableDropdown from '../../../components/SearchableDropdown'

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

class GeneralTab extends Component {
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
            <ScrollView style={styles.content}>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Name </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Name" style={styles.nameInput} onChangeText={(text) => this.setState({ uname: text })} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Code Name </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Code Name" style={styles.nameInput} value={this.state.uname} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Country </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Picker
                            mode='dropdown'
                            // iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined, margin: 10,color: 'white' }}
                            placeholder="Select ..."
                            placeholderStyle={{ color: "#bfc6ea" }}
                            note={false}
                            placeholderIconColor="#007aff"
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
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Mobile </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Mobile" style={styles.nameInput} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Email </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput textContentType='emailAddress' placeholder="Email" style={styles.nameInput} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Zip Code </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Zip Code" style={styles.nameInput} />
                    </Col>
                </Row>
                <Row style={styles.inputArea}>
                    <Col size={4}>
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
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>VAT Reg.No. </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="VAT Reg.No." style={styles.nameInput} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Cashier Name </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Picker
                            mode='dropdown'
                            // iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined, margin: 10, color: 'white' }}
                            placeholder="Select ..."
                            placeholderStyle={{ color: "#bfc6ea" }}
                            note={false}
                            placeholderIconColor="#007aff"
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
                <Row style={{
                    height: 'auto',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Time Zone </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <SearchableDropdown style={{
                            margin: 10,
                            height: 'auto',
                            backgroundColor: 'white',
                            borderRadius: 50
                            // padding: 5
                        }}
                            list={list} onSelectItem={(e, item) => this.onSelectItem(e, item)}
                            placeholder="Select Time Zone ... " />
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
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text multiline={true} style={{ color: 'white',padding: 3, fontSize: fontSize, textAlign: 'right' }}>Invoice Edit Lifespan </Text>
                            <Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                            <Icon type="FontAwesome" name="question-circle" style={{ fontSize: 12, color: '#1e91cf' }} />
                        </Row>
                    </Col>
                    <Col size={4.9} >
                        <NumberInput placeholder="" style={styles.nameInput} />
                    </Col>
                    <Col size={0.2}></Col>
                    <Col size={4.9} >
                        <SearchableDropdown style={{
                            margin: 10,
                            height: 'auto',
                            backgroundColor: 'white',
                            borderRadius: 50
                            // padding: 5
                        }}
                            list={list} onSelectItem={(e, item) => this.onSelectItem(e, item)} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ color: 'white',padding: 3, fontSize: fontSize, textAlign: 'right' }}>Invoice Delete Lifespan </Text>
                            <Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                            <Icon type="FontAwesome" name="question-circle" style={{ fontSize: 12, color: '#1e91cf' }} />
                        </Row>
                    </Col>
                    <Col size={4.9} >
                        <NumberInput placeholder="" style={styles.nameInput} />
                    </Col>
                    <Col size={0.2}></Col>
                    <Col size={4.9} >
                        <SearchableDropdown style={{
                            margin: 10,
                            height: 'auto',
                            backgroundColor: 'white',
                            borderRadius: 50
                            // padding: 5
                        }}
                            list={list} onSelectItem={(e, item) => this.onSelectItem(e, item)} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>After Sell Page </Text>
                            <Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                            <Icon type="FontAwesome" name="question-circle" style={{ fontSize: 12, color: '#1e91cf' }} />
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Picker
                            mode='dropdown'
                            // iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined, margin: 10, color: 'white' }}
                            placeholder="Select ..."
                            placeholderStyle={{ color: "#bfc6ea" }}
                            note={false}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.selectedCountry}
                            onValueChange={(value) => this.onValueChange('country', value)}
                        >
                            <Picker.Item label="POS" value="0" />
                            <Picker.Item label="Invoice" value="1" />
                        </Picker>
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>POS Printing </Text>
                            <Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Picker
                            mode='dropdown'
                            // iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined, margin: 10, color: 'white' }}
                            placeholder="Select ..."
                            placeholderStyle={{ color: "#bfc6ea" }}
                            headerStyle={{ backgroundColor: "#b95dd3" }}
                            headerBackButtonTextStyle={{ color: "#fff" }}
                            headerTitleStyle={{ color: "#fff" }}
                            note={false}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.selectedCountry}
                            onValueChange={(value) => this.onValueChange('country', value)}
                        >
                            <Picker.Item label="Web Browser" value="0" />
                            <Picker.Item label="PHP Server" value="1" />
                        </Picker>
                    </Col>
                </Row>
                <Row style={{
                    height: 'auto',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Col size={4}>

                    </Col>
                    <Col size={10}>
                        <Text style={{ fontSize: 12, padding: 10, color: 'white' }}>
                            For local single machine installation: PHP Server will be the best choice and
                             for live server or local server setup (LAN): you can install PHP Pos Print
                             Server locally on each machine (recommended) or use web browser printing feature.
                        </Text>
                    </Col>
                </Row>
                <Row style={{
                    height: 'auto',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Col size={4}>

                    </Col>
                    <Col size={9}>
                        <View style={{ padding: 5, paddingTop: 10, paddingBottom: 10, backgroundColor: '#00000000' }} >
                            <Row>
                                <Col size={6}>
                                    <Picker
                                        mode='dropdown'
                                        // iosIcon={<Icon name="arrow-down" />}
                                        style={{ margin: 10, color: 'white' }}
                                        placeholder="Select ..."
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        headerStyle={{ backgroundColor: "#b95dd3" }}
                                        headerBackButtonTextStyle={{ color: "#fff" }}
                                        headerTitleStyle={{ color: "#fff" }}
                                        note={false}
                                        placeholderIconColor="#007aff"
                                        selectedValue={this.state.selectedCountry}
                                        onValueChange={(value) => this.onValueChange('country', value)}
                                    >
                                        <Picker.Item label="epison 4" value="0" />
                                        <Picker.Item label="Printer 1" value="1" />
                                    </Picker>
                                </Col>
                                <Col size={6}>
                                    {/* <View style={{padding: 10}}> */}
                                    <Picker
                                        mode='dropdown'
                                        // iosIcon={<Icon name="arrow-down" />}
                                        style={{ width: undefined, margin: 10, color: 'white' }}
                                        placeholder="Select ..."
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        headerStyle={{ backgroundColor: "#b95dd3" }}
                                        headerBackButtonTextStyle={{ color: "#fff" }}
                                        headerTitleStyle={{ color: "#fff" }}
                                        note={false}
                                        placeholderIconColor="#007aff"
                                        selectedValue={this.state.selectedCountry}
                                        onValueChange={(value) => this.onValueChange('country', value)}
                                    >
                                        <Picker.Item label="Yes" value="0" />
                                        <Picker.Item label="No" value="1" />
                                    </Picker>
                                    {/* </View> */}
                                </Col>
                            </Row>
                        </View>
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Tax </Text>
                            <Icon type="FontAwesome" name="question-circle" style={{ fontSize: 12, color: '#1e91cf' }} />
                        </Row>
                    </Col>
                    <Col size={10}>
                        <NumberInput placeholder="Tax" style={styles.nameInput} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ padding: 3, fontSize: fontSize, textAlign: 'right',color: 'white' }}>Stock Alert Quantity </Text>
                            <Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                            <Icon type="FontAwesome" name="question-circle" style={{ fontSize: 12, color: '#1e91cf' }} />
                        </Row>
                    </Col>
                    <Col size={10}>
                        <NumberInput placeholder="Stock Alert Quantity" style={styles.nameInput} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ padding: 3, fontSize: fontSize, textAlign: 'right',color: 'white' }}>Datatable Item Limit </Text>
                            <Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                            <Icon type="FontAwesome" name="question-circle" style={{ fontSize: 12, color: '#1e91cf' }} />
                        </Row>
                    </Col>
                    <Col size={10}>
                        <NumberInput placeholder="Datatable Item Limit" style={styles.nameInput} />
                    </Col>
                </Row>
                <Row style={styles.inputArea}>
                    <Col size={4}>
                        <Row style={styles.inputAreaLabelRow}>
                            <Text style={{ padding: 3, fontSize: fontSize, textAlign: 'right',color: 'white' }}> Invoice Footer Text </Text>
                            <Icon type="FontAwesome" name="question-circle" style={{ fontSize: 12, color: '#1e91cf' }} />
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
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Sound Effect </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Picker
                            mode='dropdown'
                            // iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined, margin: 10,color: 'white' }}
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
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Currency </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
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
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="" style={styles.nameInput} />
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'flex-start', alignItems: 'flex-start', height: 60 }}>
                    <Col size={4}>

                    </Col>
                    <Col size={10}>
                        <ScrollView style={{backgroundColor: '#ffffff88', borderRadius: 20}}>
                            <Row style={{ alignItems: 'center' }}>
                                <Col size={1} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    <CheckBox checked={true} size={15} checkedColor={'white'} />
                                </Col>
                                <Col size={5}>
                                    <Text style={[{ fontSize: fontSize },styles.whiteText]}>Store 01</Text>
                                </Col>
                            </Row>
                            <Row style={{ alignItems: 'center' }}>
                                <Col size={1} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    <CheckBox checked={true} size={15} checkedColor={'white'} />
                                </Col>
                                <Col size={5}>
                                    <Text style={[{ fontSize: fontSize },styles.whiteText]}>Store 02</Text>
                                </Col>
                            </Row>
                            <Row style={{ alignItems: 'center'}}>
                                <Col size={1} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    <CheckBox checked={true} size={15} checkedColor={'white'} />
                                </Col>
                                <Col size={5}>
                                    <Text style={[{ fontSize: fontSize },styles.whiteText]}>Store 03</Text>
                                </Col>
                            </Row>
                        </ScrollView>
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize },styles.whiteText]}>Payment Method </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
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
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="" style={styles.nameInput} />
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'flex-start', alignItems: 'flex-start', height: 60 }}>
                    <Col size={4}>

                    </Col>
                    <Col size={10}>
                            <Row style={{ alignItems: 'center' }}>
                                <Col size={1} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    <CheckBox checked={true} size={15} checkedColor={'white'} />
                                </Col>
                                <Col size={5}>
                                    <Text style={[{ fontSize: fontSize },styles.whiteText]}>Cash on Delivery</Text>
                                </Col>
                            </Row>
                            <Row style={{ alignItems: 'center' }}>
                                <Col size={1} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    <CheckBox checked={true} size={15} checkedColor={'white'} />
                                </Col>
                                <Col size={5}>
                                    <Text style={[{ fontSize: fontSize },styles.whiteText]}>Bcash</Text>
                                </Col>
                            </Row>
                            <Row style={{ alignItems: 'center'}}>
                                <Col size={1} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    <CheckBox checked={true} size={15} checkedColor={'white'} />
                                </Col>
                                <Col size={5}>
                                    <Text style={[{ fontSize: fontSize },styles.whiteText]}>Gift card</Text>
                                </Col>
                            </Row>
                    </Col>
                </Row>
                
                <Row style={styles.inputRow}>
                    <Col size={4}></Col>
                    <Col size={10}>
                        <Row style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Col size={4} style={{ alignItems: 'center' }}>
                                <Button buttonStyle={styles.resetButton} iconContainerStyle={{ padding: 10 }}
                                    icon={
                                        <Icon
                                            type="FontAwesome" name="chevron-left" style={{ fontSize: 12, color: 'white' }}
                                        />
                                    }
                                    title="Back" titleStyle={{ fontSize: 12, padding: 5 }}
                                />
                            </Col>
                            <Col size={1}></Col>
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
                            {/* <Col size={5}></Col> */}
                        </Row>
                    </Col>
                </Row>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        paddingVertical: 10,
        backgroundColor: "#00000088"
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
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputArea: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
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
        paddingLeft: 10,
        borderRadius: 20
    },

    saveButton: {
        marginTop: 5,
        height: 25,
        width: 70,
        backgroundColor: '#00C0EF',
        justifyContent: 'center',
        borderRadius: 50,
    },
    resetButton: {
        marginTop: 5,
        height: 25,
        width: 70,
        backgroundColor: '#DD4B39',
        justifyContent: 'center',
        borderRadius: 50,
    },
    whiteText: {
        color: 'white'
    }
});

export default GeneralTab;