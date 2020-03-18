import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Row, Col, Button, Icon } from 'native-base';
import testData from './testData.json';

class ViewRole extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initData: [],
        }
    }

    componentDidMount() {
        this.setState({ initData: this.props.initData });
    }

    handleEdit = (e, key) => {
        this.props.handleEdit(key);
    }

    handleDelete = (e, key) => {
        this.props.handleDelete(key);
    }

    render() {
        let initData = this.props.initData;
        return (
            <View style={styles.container}>
                <Row style={styles.header}>
                    <Col size={1} style={styles.col}>
                        <Text style={{ fontSize: 12 }}>SL.</Text>
                    </Col>
                    <Col size={4} style={styles.col}>
                        <Text style={{ fontSize: 12 }}>Role Name</Text>
                    </Col>
                    <Col size={2} style={styles.col}>
                        <Text style={{ fontSize: 12 }}>Action</Text>
                    </Col>
                </Row>
                {
                    initData.roles.map((item, key) => (
                        <Row key={key} style={styles.row}>
                            <Col size={1} style={styles.col}>
                                <Text style={{ fontSize: 12 }}>{key}</Text>
                            </Col>
                            <Col size={4} style={styles.col}>
                                <Text style={{ fontSize: 12 }}>{item.rolename}</Text>
                            </Col>
                            <Col size={2} style={styles.col}>
                                <Row style={{ alignItems: 'center' }}>
                                    <TouchableOpacity style={{ padding: 3 }} onPress={(e) => this.handleEdit(e, key)}>
                                        <Icon type='FontAwesome' name='pencil' style={{ fontSize: 12, color: 'green' }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ padding: 3 }} onPress={(e) => this.handleDelete(e, key)}>
                                        <Icon type='AntDesign' name='delete' style={{ fontSize: 12, color: 'red' }} />
                                    </TouchableOpacity>
                                </Row>
                            </Col>

                        </Row>
                    ))
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 10, backgroundColor: '#fff' },
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

export default ViewRole;