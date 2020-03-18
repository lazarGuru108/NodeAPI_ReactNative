import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, View, Row, Text, Col, Picker, Icon, ListItem, Body } from 'native-base';
import { StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { CheckBox, Button, withTheme } from 'react-native-elements';
import noImage from '../../assets/images/noimage.jpg';
import NumberInput from '../../components/NumberInput';
import '../../assets/commonStyle.js';

const fontSize = 12;

class EditProduct extends Component {
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

    render() {
        return (
            <View style={styles.content}>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize }, styles.whiteText]}>Attachment </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
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
                            <Text style={[{ fontSize: fontSize }, styles.whiteText]}>Product Type </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Picker
                            mode='dropdown'
                            iosIcon={<Icon name="arrow-down" />}
                            style={[{ width: undefined, margin: 10 }, styles.whiteText]}
                            placeholder="Select ..."
                            selectedValue={this.state.selectedState}
                            onValueChange={(value) => this.onValueChange('state', value)}

                        >
                            <Picker.Item label="Standard" value="key0" />
                            <Picker.Item label="Service" value="key1" />
                        </Picker>
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize }, styles.whiteText]}>Name </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Name" style={styles.nameInput} onChangeText={(text) => this.setState({ uname: text })} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize }, styles.whiteText]}>P.Code </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TextInput placeholder="Code Name" style={{
                                margin: 10,
                                marginLeft: 13,
                                height: 30,
                                backgroundColor: 'white',
                                padding: 5,
                                width: 250,
                                paddingLeft: 10,
                                borderRadius: 50,
                            }} value={this.state.uname} />
                            <TouchableOpacity>
                                <View style={{ width: 30, height: 30, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Icon type="FontAwesome" name="random" style={{ fontSize: 18, color: 'gray' }}></Icon>
                                </View>
                            </TouchableOpacity>
                        </Row>
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize }, styles.whiteText]}>Category </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Picker
                                mode='dropdown'
                                iosIcon={<Icon name="arrow-down" />}
                                style={[{ width: undefined, margin: 10 }, styles.whiteText]}
                                placeholder="Select ..."
                                selectedValue={this.state.selectedState}
                                onValueChange={(value) => this.onValueChange('state', value)}

                            >
                                <Picker.Item label="ABC Categories" value="key0" />
                                <Picker.Item label="asdard" value="key1" />
                                <Picker.Item label="fwe Card" value="key2" />
                                <Picker.Item label="gre Card" value="key3" />
                                <Picker.Item label="gwe Banking" value="key4" />
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
                            <Text style={[{ fontSize: fontSize }, styles.whiteText]}>Supplier </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Picker
                                mode='dropdown'
                                iosIcon={<Icon name="arrow-down" />}
                                style={[{ width: undefined, margin: 10 },styles.whiteText]}
                                placeholder="Select ..."
                                selectedValue={this.state.selectedState}
                                onValueChange={(value) => this.onValueChange('state', value)}

                            >
                                <Picker.Item label="No Supplier" value="key0" />
                                <Picker.Item label="Frghhre" value="key1" />
                                <Picker.Item label="Herher" value="key2" />
                                <Picker.Item label="Ehrehs" value="key3" />
                                <Picker.Item label="Jewrgh" value="key4" />
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
                            <Text style={[{ fontSize: fontSize }, styles.whiteText]}>Brand </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Picker
                                mode='dropdown'
                                iosIcon={<Icon name="arrow-down" />}
                                style={[{ width: undefined, margin: 10 },styles.whiteText]}
                                placeholder="Select ..."
                                // placeholderStyle={{ color: "#bfc6ea" }}
                                // placeholderIconColor="#007aff"
                                selectedValue={this.state.selectedState}
                                // style={{ fontSize: 10 }}
                                onValueChange={(value) => this.onValueChange('state', value)}

                            >
                                <Picker.Item label="ALbhernb" value="key0" />
                                <Picker.Item label="Rrhjtrj" value="key1" />
                                <Picker.Item label="Urhbe" value="key2" />
                                <Picker.Item label="Wrgherh" value="key3" />
                                <Picker.Item label="Rdfht" value="key4" />
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
                            <Text style={[{ fontSize: fontSize }, styles.whiteText]}>HSN Code </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput textContentType='emailAddress' placeholder="HSN Code" style={styles.nameInput} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize }, styles.whiteText]}>Product Price </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Product Price" style={styles.nameInput} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize }, styles.whiteText]}>Product Tax </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Picker
                                mode='dropdown'
                                iosIcon={<Icon name="arrow-down" />}
                                style={[{ width: undefined, margin: 10 },styles.whiteText]}
                                placeholder="Select ..."
                                selectedValue={this.state.selectedState}
                                onValueChange={(value) => this.onValueChange('state', value)}

                            >
                                <Picker.Item label="ALbhernb" value="key0" />
                                <Picker.Item label="Rrhjtrj" value="key1" />
                                <Picker.Item label="Urhbe" value="key2" />
                                <Picker.Item label="Wrgherh" value="key3" />
                                <Picker.Item label="Rdfht" value="key4" />
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
                            <Text style={[{ fontSize: fontSize }, styles.whiteText]}>Tax Method </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Picker
                            mode='dropdown'
                            iosIcon={<Icon name="arrow-down" />}
                            style={[{ width: undefined, margin: 10 },styles.whiteText]}
                            placeholder="Select ..."
                            selectedValue={this.state.selectedState}
                            onValueChange={(value) => this.onValueChange('state', value)}

                        >
                            <Picker.Item label="Inclusive" value="key0" />
                            <Picker.Item label="Exclusive" value="key1" />
                        </Picker>
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize }, styles.whiteText]}>Store </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Row style={{ alignItems: 'center', height: 15 }}>
                            <Col size={1} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <CheckBox checked={true} size={15} checkedColor={'white'} />
                            </Col>
                            <Col size={5}>
                                <Text style={[{ fontSize: fontSize }, styles.whiteText]}>Select / Deselect</Text>
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
                                <CheckBox checked={true} size={15} checkedColor={'white'} />
                            </Col>
                            <Col size={5}>
                                <Text style={[{ fontSize: fontSize }, styles.whiteText]}>Store 01</Text>
                            </Col>
                        </Row>
                        <Row style={{ alignItems: 'center', marginVertical: 5 }}>
                            <Col size={1} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <CheckBox checked={true} size={15} checkedColor={'white'} />
                            </Col>
                            <Col size={5}>
                                <Text style={[{ fontSize: fontSize }, styles.whiteText]}>Store 02</Text>
                            </Col>
                        </Row>
                        <Row style={{ alignItems: 'center', marginVertical: 5 }}>
                            <Col size={1} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <CheckBox checked={true} size={15} checkedColor={'white'} />
                            </Col>
                            <Col size={5}>
                                <Text style={[{ fontSize: fontSize }, styles.whiteText]}>Store 03</Text>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize }, styles.whiteText]}>City </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="City" style={styles.nameInput} />
                    </Col>
                </Row>

                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={[{ fontSize: fontSize }, styles.whiteText]}>Status </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Picker
                            mode='dropdown'
                            // iosIcon={<Icon name="arrow-down" />}
                            style={[{ width: undefined, margin: 10 },styles.whiteText]}
                            placeholder="Select ..."
                            note={false}
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
                            <Text style={[{ fontSize: fontSize }, styles.whiteText]}>Order </Text>
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
        width: 90,
        backgroundColor: '#00C0EF',
        justifyContent: 'center',
        borderRadius: 50,
    },
    resetButton: {
        marginTop: 5,
        height: 25,
        width: 90,
        backgroundColor: '#DD4B39',
        justifyContent: 'center',
        borderRadius: 50,
    },
    whiteText: {
        color: 'white',
    }
});

export default EditProduct;