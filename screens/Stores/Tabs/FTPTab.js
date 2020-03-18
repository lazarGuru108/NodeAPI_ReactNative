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
                            <Text style={{ fontSize: fontSize, color: 'white' }}>FTP Hostname </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="FTP Hostname" style={styles.textInput}/*  onChangeText={(text) => this.setState({ uname: text })}  *//>
                    </Col>
                </Row>
                
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize, color: 'white' }}>FTP Username </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="FTP Hostname" style={styles.textInput}/*  onChangeText={(text) => this.setState({ uname: text })}  *//>
                    </Col>
                </Row>
                
                <Row style={styles.inputRow}>
                    <Col size={4}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize, color: 'white' }}>FTP Password </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput secureTextEntry={true} placeholder="FTP Hostname" style={styles.textInput}/*  onChangeText={(text) => this.setState({ uname: text })}  *//>
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
    textInput: {
        margin: 10,
        height: 30,
        backgroundColor: 'white',
        padding: 5,
        paddingLeft: 10,
        borderRadius: 50
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