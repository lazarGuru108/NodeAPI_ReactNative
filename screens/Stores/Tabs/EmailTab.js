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
            // uname: '',
            driverState: undefined,
            sslState: undefined
        }
    }

    onValueChange = (item, value) => {
        this.setState({
            selected2: value
        });
        if (item === 'driver') this.setState({ driverState: value })
        if (item === 'ssl') this.setState({ sslState: value })
    }

    onSelectItem = (e, item) => {
        // console.log('Parent: ', item.title);
    }

    render() {
        const { driverState, sslState } = this.state;
        return (
            <ScrollView style={styles.content}>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize, color: 'white' }}>Email From </Text>
                            <Icon type="FontAwesome" name="question-circle" style={{ fontSize: 12, color: '#1e91cf' }} />
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Email From" style={styles.textInput}/*  onChangeText={(text) => this.setState({ uname: text })}  *//>
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize, color: 'white' }}>Email Address </Text>
                            <Icon type="FontAwesome" name="question-circle" style={{ fontSize: 12, color: '#1e91cf' }} />
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Email Address" style={styles.textInput}/*  onChangeText={(text) => this.setState({ uname: text })}  *//>
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize, color: 'white' }}>Email Driver </Text>
                            <Icon type="FontAwesome" name="question-circle" style={{ fontSize: 12, color: '#1e91cf' }} />
                        </Row>
                    </Col>
                    <Col size={10}>
                    <Picker
                            mode='dropdown'
                            style={{ width: undefined, margin: 10, color: 'white' }}
                            placeholder="Select ..."
                            placeholderStyle={{ color: "#bfc6ea" }}
                            note={false}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.driverState}
                            onValueChange={(value) => this.onValueChange('driver', value)}
                        >
                            <Picker.Item label="Use built in php mail() function" value="0" />
                            <Picker.Item label="send Email through SMTP Server" value="1" />
                        </Picker>
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize, color: 'white' }}>SMTP Host </Text>
                            <Icon type="FontAwesome" name="question-circle" style={{ fontSize: 12, color: '#1e91cf' }} />
                        </Row>
                    </Col>
                    <Col size={10}>
                    <TextInput placeholder="SMTP Host" style={styles.textInput}/*  onChangeText={(text) => this.setState({ uname: text })}  *//>
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize, color: 'white' }}>SMTP Username </Text>
                            <Icon type="FontAwesome" name="question-circle" style={{ fontSize: 12, color: '#1e91cf' }} />
                        </Row>
                    </Col>
                    <Col size={10}>
                    <TextInput placeholder="SMTP Username" style={styles.textInput}/*  onChangeText={(text) => this.setState({ uname: text })}  *//>
                    </Col>
                </Row>
                
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize, color: 'white' }}>SMTP Password </Text>
                            <Icon type="FontAwesome" name="question-circle" style={{ fontSize: 12, color: '#1e91cf' }} />
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput secureTextEntry={true} placeholder="SMTP Password" style={styles.textInput}/*  onChangeText={(text) => this.setState({ uname: text })}  *//>
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize, color: 'white' }}>SMTP Port </Text>
                            <Icon type="FontAwesome" name="question-circle" style={{ fontSize: 12, color: '#1e91cf' }} />
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="SMTP Port" style={styles.textInput}/*  onChangeText={(text) => this.setState({ uname: text })}  *//>
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize, color: 'white' }}>SSL/TLS </Text>
                            <Icon type="FontAwesome" name="question-circle" style={{ fontSize: 12, color: '#1e91cf' }} />
                        </Row>
                    </Col>
                    <Col size={10}>
                    <Picker
                            mode='dropdown'
                            style={{ width: undefined, margin: 10, color: 'white' }}
                            placeholder="Select ..."
                            placeholderStyle={{ color: "#bfc6ea" }}
                            note={false}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.sslState}
                            onValueChange={(value) => this.onValueChange('ssl', value)}
                        >
                            <Picker.Item label="TLS" value="0" />
                            <Picker.Item label="SSL" value="1" />
                        </Picker>
                    </Col>
                </Row>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        paddingVertical: 10,
        backgroundColor: '#00000088'
    },
    textInput: {
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

    inputLabelRow: {
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

});

export default GeneralTab;