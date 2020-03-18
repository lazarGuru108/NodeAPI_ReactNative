import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, Alert } from 'react-native';
import { Table, Row } from 'react-native-table-component';

class LoginLogs extends Component {
    constructor(props) {
        super(props);
        const elementButton = (value, status) => {
            if (value === 'status')
                return (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        {status === 'in' ?
                            <View style={styles.activebtn}>
                                <Text style={styles.btnText}>Logged In</Text>
                            </View>
                            :
                            <View style={styles.inactivebtn}>
                                <Text style={styles.btnText}>Logged Out</Text>
                            </View>
                        }
                    </View>
                );
        };
        this.state = {
            tableHead: ['Username', 'IP', 'Date', 'Status'],
            widthArr: [200, 200, 180, 100],
            tableData: [
                ['John', '188.43.136.32', '2020-02-22', elementButton('status', 'in')],
                ['Uhoa', '41.72.124.62', '2020-01-12', elementButton('status', 'out')],
                ['Jsoae', '102.146.80.56', '2020-02-16', elementButton('status', 'in')]

            ],
            selected2: undefined
        }
    }

    _alertIndex(index) {
        Alert.alert(`This is row ${index + 1}`);
        console.log(index);
    }

    onValueChange = (item, value) => {
        this.setState({
            selected2: value
        });
    }

    render() {
        const state = this.state;
        const tableData = this.state.tableData;
        
        return (
            <View style={styles.container}>
                <View style={{backgroundColor: '#0073B7', height: 30, width: '100%',padding: 5}}>
                    <Text style={{color: 'white'}}>Login Logs</Text>
                </View>
                <ScrollView horizontal={true}>
                    <View>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text} />
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                            <Table borderStyle={{ borderWidth: 1, borderColor: 'white' }}>
                                {
                                    tableData.map((rowData, index) => (
                                        <Row
                                            key={index}
                                            data={rowData}
                                            widthArr={state.widthArr}
                                            style={[styles.row, index % 2 && { backgroundColor: '#6e747d2e' }]}
                                            textStyle={styles.text}
                                        />
                                    ))
                                }
                            </Table>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { padding: 10, paddingTop: 10, backgroundColor: '#fff' },
    header: { height: 30, backgroundColor: 'lightgrey' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#f1f3f6' },
    activebtn: { width: 60, height: 18, backgroundColor: '#00a65a', borderRadius: 20 },
    inactivebtn: { width: 60, height: 18, backgroundColor: '#DD4B39', borderRadius: 20 },
    btnText: { textAlign: 'center', color: 'white', fontSize: 10 },
});

export default LoginLogs;