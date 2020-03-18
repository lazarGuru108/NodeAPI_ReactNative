import React, { Component } from 'react';
import { View, Row, Text, Col, Picker, Icon } from 'native-base';
import { StyleSheet, TextInput, ScrollView } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
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
            
        }
    }

    render() {
        const { value } = this.state;
        return (
            <ScrollView style={styles.content}>
                <Row style={styles.inputRow}>
                            <Col size={1} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <CheckBox checked={true} size={15} checkedColor={'white'} />
                            </Col>
                            <Col size={5}>
                                <Text style={{ fontSize: fontSize, color: 'white' }}>Select / Deselect</Text>
                            </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={10}>
                        <TextInput placeholder="" style={styles.nameInput} />
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'flex-start', alignItems: 'flex-start', height: 60 }}>
                    <Col size={10}>
                        {/* <ScrollView style={{backgroundColor: 'gray'}}> */}
                            <Row style={{ alignItems: 'center' }}>
                                <Col size={1} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    <CheckBox checked={true} size={15} checkedColor={'white'} />
                                </Col>
                                <Col size={5}>
                                    <Text style={{ fontSize: fontSize, color: 'white' }}>epson4</Text>
                                </Col>
                            </Row>
                            <Row style={{ alignItems: 'center' }}>
                                <Col size={1} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    <CheckBox checked={true} size={15} checkedColor={'white'} />
                                </Col>
                                <Col size={5}>
                                    <Text style={{ fontSize: fontSize, color: 'white' }}>Printer1</Text>
                                </Col>
                            </Row>
                            <Row style={{ alignItems: 'center'}}>
                                <Col size={1} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    <CheckBox checked={true} size={15} checkedColor={'white'} />
                                </Col>
                                <Col size={5}>
                                    <Text style={{ fontSize: fontSize, color: 'white' }}>Printer2</Text>
                                </Col>
                            </Row>
                        {/* </ScrollView> */}
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
    nameInput: {
        margin: 10,
        height: 30,
        backgroundColor: 'white',
        padding: 5,
        paddingLeft: 10,
        borderRadius: 50
    },
    inputRow: {
        alignItems: 'center'
    }

});

export default GeneralTab;