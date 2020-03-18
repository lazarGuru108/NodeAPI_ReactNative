import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, Alert, TouchableOpacity } from 'react-native';
import { Row as RowLay, Col as ColLay, Picker } from 'native-base';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import { Icon } from 'native-base';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native';

class ViewStores extends Component {
    constructor(props) {
        super(props);
        const elementButton = (value, status) => {
            if (value === 'action')
                return (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        {status === 'active' ?
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Button buttonStyle={styles.activebtn} onPress={() => this._alertIndex(value)}
                                    title={status} titleStyle={{fontSize: 12}}
                                    icon={
                                        <Icon type='FontAwesome' name='check' style={{ fontSize: 12, color: 'white' }} />
                                    }
                                >
                                </Button>
                            </View>
                            :
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Button disabled buttonStyle={styles.inactivebtn} onPress={() => this._alertIndex(value)}
                                    title={status} titleStyle={{fontSize: 12}}
                                    disabledStyle={{backgroundColor: "#86CC94"}}
                                    disabledTitleStyle={{fontSize: 12, color: 'white'}}
                                    icon={
                                        <Icon type='FontAwesome' name='check' style={{ fontSize: 12, color: 'white' }} />
                                    }
                                >
                                </Button>
                            </View>
                        }
                    </View>
                );
            if (value === 'edit')
                return (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Button buttonStyle={styles.editbtn} onPress={() => this._alertIndex(value)}
                            icon={
                                <Icon type='FontAwesome' name='pencil' style={{ fontSize: 12, color: 'white' }} />
                            }
                        >
                        </Button>
                    </View>
                );
            if (value === 'delete')
                return (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Button buttonStyle={styles.deletebtn} onPress={() => this._alertIndex(value)}
                            icon={
                                <Icon type='AntDesign' name='delete' style={{ fontSize: 12, color: 'white' }} />
                            }
                        >
                        </Button>
                    </View>
                );
        };
        this.state = {
            tableHead: ['SL', 'Name', 'Country', 'Address', 'Created At', 'Edit', 'Delete', 'Action'],
            widthArr: [40, 60, 60, 100, 80, 100, 100, 100],
            tableData: [
                ['1', 'John', 'Weee', 'Address 01', '2020-02-22', elementButton('edit'), elementButton('delete'), elementButton('action', 'active')],
                ['2', 'Uhoa', 'Dool', 'Address 02', '2020-01-12', elementButton('edit'), elementButton('delete'), elementButton('action', 'inactive')],
                ['3', 'Jsoae', 'Rsdff', 'Address 03', '2020-02-16', elementButton('edit'), elementButton('delete'), elementButton('action', 'active')]

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
        /* for (let i = 0; i < 30; i += 1) {
            const rowData = [];
            for (let j = 0; j < 9; j += 1) {
                rowData.push(`${i}${j}`);
            }
            tableData.push(rowData);
        }
 */
        return (
            <View style={styles.container}>
                <RowLay style={{ height: 40 }}>
                    <ColLay>
                        <RowLay style={{ height: 30 }}>
                            <ColLay size={3}>
                                <RowLay style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 11 }}>Show </Text>
                                </RowLay>
                            </ColLay>
                            <ColLay size={9}>
                                <Picker
                                    mode='dropdown'
                                    iosIcon={<Icon type="MaterialIcons" name="keyboard-arrow-down" />}
                                    style={{ width: undefined, margin: 10 }}
                                    style={{ backgroundColor: '#F1F3F6', height: 12, width: 50 }}
                                    placeholder="Select ..."
                                    placeholderStyle={{ color: "black" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected2}
                                    onValueChange={(value) => this.onValueChange('state', value)}

                                >
                                    <Picker.Item label="10" value="key0" />
                                    <Picker.Item label="15" value="key1" />
                                    <Picker.Item label="25" value="key2" />
                                    <Picker.Item label="50" value="key3" />
                                    <Picker.Item label="100" value="key4" />
                                </Picker>
                            </ColLay>
                        </RowLay>
                    </ColLay>
                    <ColLay>
                        <RowLay style={{ justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 5 }}>
                            <TouchableOpacity>
                                <View style={styles.toolIconView}>
                                    <Icon type="FontAwesome" name="print" style={{ fontSize: 15, color: '#444444' }}></Icon>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.toolIconView}>
                                    <Icon type="FontAwesome" name="copy" style={{ fontSize: 15, color: '#E04B7C' }}></Icon>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.toolIconView}>
                                    <Icon type="FontAwesome" name="file-excel-o" style={{ fontSize: 15, color: '#F3B512' }}></Icon>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.toolIconView}>
                                    <Icon type="FontAwesome" name="file-text-o" style={{ fontSize: 15, color: '#37AF9F' }}></Icon>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.toolIconView}>
                                    <Icon type="FontAwesome" name="file-pdf-o" style={{ fontSize: 15, color: '#2B849C' }}></Icon>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.toolIconView}>
                                    <Icon type="MaterialIcons" name="email" style={{ fontSize: 15, color: '#444444' }}></Icon>
                                </View>
                            </TouchableOpacity>
                        </RowLay>
                    </ColLay>
                    <ColLay>
                        <RowLay style={{ height: 30 }}>
                            <ColLay size={6} style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                <RowLay style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 11 }}>Search </Text>
                                </RowLay>
                            </ColLay>
                            <ColLay size={5} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TextInput placeholder="item" style={{
                                    margin: 10,
                                    width: 50,
                                    height: 25,
                                    padding: 5,
                                    backgroundColor: '#F1F3F6'
                                }} /* onChangeText={(text) => this.setState({ uname: text })} */
                                />
                            </ColLay>
                        </RowLay>
                    </ColLay>
                </RowLay>
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
    container: { flex: 1, padding: 16, paddingTop: 10, backgroundColor: '#fff' },
    header: { height: 30, backgroundColor: 'lightgrey' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#f1f3f6' },
    inactivebtn: {  width: 62, height: 22, backgroundColor: '#86CC94', borderRadius: 3, justifyContent: 'center', alignItems: 'center' },
    activebtn: { width: 62, height: 22, backgroundColor: '#00C0EF', borderRadius: 3, justifyContent: 'center', alignItems: 'center'},
    editbtn: { width: 62, height: 22, backgroundColor: '#3C8DBC', borderRadius: 3, justifyContent: 'center', alignItems: 'center' },
    deletebtn: { width: 62, height: 22, backgroundColor: '#DD4B39', borderRadius: 3, justifyContent: 'center', alignItems: 'center' },
    btnText: { textAlign: 'center', color: 'white', fontSize: 10 },

    toolIconView: {
        width: 23, height: 23, borderWidth: 1, borderColor: 'gray', justifyContent: 'center', alignItems: 'center'
    }
});

export default ViewStores;