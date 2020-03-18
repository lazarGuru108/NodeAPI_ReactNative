import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, View, Row, Text, Col, Picker, Icon, ListItem, Body } from 'native-base';
import { StyleSheet, TextInput } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import NumberInput from '../../components/NumberInput';
import SearchableDropdown from '../../components/SearchableDropdown'
import { TouchableOpacity } from 'react-native-gesture-handler';

class EditRole extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role_name: "",
            initData: this.props.initData,
        }
    }

    componentDidMount() {
        this.setState({ initData: {...this.props.initData}, role_name: this.props.initData.rolename })
    }

    saveRole = () => {
        let initData = this.state.initData;
        initData.rolename = this.state.role_name;
        this.setState({ initData: initData });
        this.props.saveRole(initData);
    }

    render() {
        let { role_name, initData } = this.state;
        return (
            <View style={styles.content}>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: 12, color: 'white' }}>Name </Text><Text style={{ color: 'red', fontSize: 12 }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput 
                        placeholder="Name" 
                        style={styles.nameInput} 
                        value={role_name}
                        onChangeText={(text) => this.setState({ role_name: text })} 
                        />
                    </Col>
                    <Col size={3}>
                        <TouchableOpacity onPress={() => this.saveRole()}>
                            <Text style={{color: "#2A5699"}}>Save</Text>
                        </TouchableOpacity>
                    </Col>
                </Row>
                {
                    initData.fields.map((item, key) => (
                        <View key={key} style={{ padding: 5 }}>
                            <Text style={{color: 'white'}}>{item.field_name}</Text>
                            <Row style={styles.header}>
                                <Col style={styles.col}><Text style={{ fontSize: 12 }}>SI No</Text></Col>
                                <Col size={2} style={styles.col}><Text style={{ fontSize: 12 }}>Menu Name</Text></Col>
                                <Col style={styles.col}><Text style={{ fontSize: 12 }}>Create</Text></Col>
                                <Col style={styles.col}><Text style={{ fontSize: 12 }}>Read</Text></Col>
                                <Col style={styles.col}><Text style={{ fontSize: 12 }}>Update</Text></Col>
                                <Col style={styles.col}><Text style={{ fontSize: 12 }}>Delete</Text></Col>
                            </Row>
                            {
                                item.permission.map((perm, index) => (
                                    <Row key={index} style={styles.row}>
                                        <Col style={styles.col}><Text style={{ fontSize: 12 }}>{index}</Text></Col>
                                        <Col size={2} style={styles.col}><Text style={{ fontSize: 12 }}>{perm.permission_name}</Text></Col>
                                        <Col style={styles.col}>
                                            <CheckBox size={15} checkedColor={'gray'}
                                                checked={perm.create}
                                                onPress={() => {
                                                    initData.fields[key].permission[index].create = !perm.create;
                                                    this.setState({initData: initData});
                                                }}
                                            />
                                        </Col>
                                        <Col style={styles.col}>
                                            <CheckBox size={15} checkedColor={'gray'}
                                                checked={perm.read}
                                                onPress={() => {
                                                    initData.fields[key].permission[index].read = !perm.read;
                                                    this.setState({initData: initData});
                                                }}
                                            />
                                        </Col>
                                        <Col style={styles.col}>
                                            <CheckBox size={15} checkedColor={'gray'}
                                                checked={perm.update}
                                                onPress={() => {
                                                    initData.fields[key].permission[index].update = !perm.update;
                                                    this.setState({initData: initData});
                                                }}
                                            />
                                        </Col>
                                        <Col style={styles.col}>
                                            <CheckBox size={15} checkedColor={'gray'}
                                                checked={perm.delete}
                                                onPress={() => {
                                                    initData.fields[key].permission[index].delete = !perm.delete;
                                                    this.setState({initData: initData});
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                ))
                            }
                        </View>
                    ))
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#00000088',
        // paddingVertical: 10,
        padding: 10
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

    inputLabelRow: {
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    header: {
        backgroundColor: '#D3D3D3',
        height: 30,
    },
    col: {
        borderWidth: 0.5,
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    row: {
        backgroundColor: '#F1F3F6',
        height: 30,
    }
});

export default EditRole;