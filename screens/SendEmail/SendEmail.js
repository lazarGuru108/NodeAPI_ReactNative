import React, { Component } from 'react';
import { View, Row, Text, Col, Picker } from 'native-base';
import { StyleSheet, TextInput, ScrollView, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import NumberInput from '../../components/NumberInput';
import * as DocumentPicker from 'expo-document-picker';
import background from '../../assets/images/background.jpg';
import TopIcon from '../../components/TopIcon';
import MainHeader from '../../components/MainHeader';

const fontSize = 12;

class SendEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            selectedSubject: undefined,
            file: null,
        }
    }

    onValueChange = (item, value) => {
        this.setState({
            selected2: value
        });
        if (item === 'subject') this.setState({ selectedCountry: value })
        console.log(value);
    }

    sendDetails = () => {
        console.log('send details');
    }

    _pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        alert(result.uri);
        if (result.type === 'success')
            this.setState({ file: result.name });
        console.log(result);
    }

    onSelectItem = (e, item) => {
        // console.log('Parent: ', item.title);
    }

    render() {
        const { value } = this.state;
        return (
            <ImageBackground style={styles.container} source={background}>
                <Row style={{ height: 80, flexDirection: 'column', justifyContent: 'center' }}>
                    <MainHeader />
                </Row>
                <TopIcon />
                <ScrollView style={{ padding: 10, paddingTop: 0 }} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center',backgroundColor: '#00000088', borderRadius: 20 }}>
                    <Text style={[{ marginBottom: 0, marginTop: 5 },styles.whiteText]}>Please provide your details below</Text>
                    <View style={styles.content}>
                        <Row style={styles.inputRow}>
                            <Col size={3}>
                                <Row style={styles.inputLabelRow}>
                                    <Text style={{ fontSize: fontSize,color: 'white' }}> Your Name </Text>
                                </Row>
                            </Col>
                            <Col size={10}>
                                <TextInput placeholder="Name" style={styles.nameInput} onChangeText={(text) => this.setState({ uname: text })} />
                            </Col>
                        </Row>
                        <Row style={styles.inputRow}>
                            <Col size={3}>
                                <Row style={styles.inputLabelRow}>
                                    <Text style={{ fontSize: fontSize,color: 'white' }}>Email </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                                </Row>
                            </Col>
                            <Col size={10}>
                                <TextInput textContentType='emailAddress' placeholder="Email" style={styles.nameInput} />
                            </Col>
                        </Row>
                        <Row style={styles.inputRow}>
                            <Col size={3}>
                                <Row style={styles.inputLabelRow}>
                                    <Text style={{ fontSize: fontSize,color: 'white' }}>Phone </Text>
                                </Row>
                            </Col>
                            <Col size={10}>
                                <NumberInput placeholder="Order" style={styles.nameInput} />
                            </Col>
                        </Row>
                        <Row style={styles.inputRow}>
                            <Col size={3}>
                                <Row style={styles.inputLabelRow}>
                                    <Text style={{ fontSize: fontSize,color: 'white' }}>Subject </Text>
                                </Row>
                            </Col>
                            <Col size={10}>
                                <Picker
                                    mode='dropdown'
                                    // iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined, margin: 10, color: 'white', borderRadius: 10 }}
                                    placeholder="Select ..."
                                    placeholderStyle={{ color: "white" }}
                                    note={false}
                                    placeholderIconColor="white"
                                    selectedValue={this.state.selectedSubject}
                                    onValueChange={(value) => this.onValueChange('subject', value)}
                                >
                                    <Picker.Item label="subject1" value="0" />
                                    <Picker.Item label="subject2" value="1" />
                                    <Picker.Item label="subject3" value="2" />
                                    <Picker.Item label="subject4" value="3" />
                                </Picker>
                            </Col>
                        </Row>
                        <Row style={styles.inputArea}>
                            <Col size={3}>
                                <Row style={styles.inputAreaLabelRow}>
                                    <Text style={{ fontSize: fontSize,color: 'white' }}>Message </Text>
                                </Row>
                            </Col>
                            <Col size={10}>
                                <TextInput
                                    placeholder="Message"
                                    multiline={true}
                                    numberOfLines={10} style={styles.textArea}
                                />

                            </Col>
                        </Row>
                        <Row style={styles.inputRow}>
                            <Col size={3}>
                                <Row style={styles.inputLabelRow}>
                                    <Text style={{ fontSize: fontSize,color: 'white' }}>Upload a file</Text>
                                </Row>
                            </Col>
                            <Col size={4}>
                                <Button title="Select"
                                    buttonStyle={{ borderRadius: 50, height: 25, margin: 10, backgroundColor: '#6E6966', justifyContent: 'center', }}
                                    titleStyle={{ fontSize: 12, padding: 5 }}
                                    onPress={this._pickDocument}
                                />
                            </Col>
                            <Col size={6}>
                                <TextInput value={this.state.file} style={styles.nameInput} />
                            </Col>
                        </Row>

                        <Row style={styles.inputRow}>
                            <Col size={3}></Col>
                            <Col size={10}>
                                <Row style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                                    <Col size={4} style={{ alignItems: 'center' }}>
                                        <Button buttonStyle={styles.saveButton}
                                            title="Send Details" titleStyle={{ textAlign: 'center', fontSize: 12, padding: 5 }}
                                            onPress={() => this.sendDetails()}
                                        />
                                    </Col>

                                </Row>
                            </Col>
                        </Row>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    content: {
        width: 350,
        paddingTop: 15,
        paddingVertical: 10,
        // borderWidth: 0.5,
        // borderColor: 'grey',
        position: 'relative',
        padding: 10,
    },
    title: {
        backgroundColor: 'white',
        fontSize: 12,
        width: 200,
        position: 'absolute',
        top: -8,
        left: 12,
    },
    nameInput: {
        margin: 10,
        height: 30,
        backgroundColor: 'white',
        padding: 5,
        paddingLeft: 10,
        borderRadius: 50
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
    textArea: { 
        borderRadius: 10, 
        textAlignVertical: 'top', 
        backgroundColor: 'white', 
        margin: 10, 
        marginTop: 5,
        paddingLeft: 10, 
        padding: 5 
    },
    fileInput: {
        padding: 5,
        backgroundColor: 'white',
        width: 200, height: 25
    },

    saveButton: {
        marginTop: 5,
        height: 25,
        width: 100,
        backgroundColor: '#5CB85C',
        borderRadius: 50,
    },
    whiteText: {
        color: 'white'
    }

});

export default SendEmail;