import React, { Component } from 'react';
import { View, Row, Text, Col, Picker, Icon } from 'native-base';
import { StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Button, Badge } from 'react-native-elements';
import noImage from '../../assets/images/noimage.jpg';

const fontSize = 12;

class EditTransfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            selectedToStore: undefined,
            selectedStatus: undefined,
            stockList: [
                { itemName: 'Sandwitch', invoiceId: 'B665', badgeNum: '45', transferQty: 0 },
                { itemName: 'Banana', invoiceId: 'B564564', badgeNum: '15', transferQty: 0 },
                { itemName: 'Berger Small', invoiceId: ' Blk;;', badgeNum: '112', transferQty: 0 },
                { itemName: 'maida', invoiceId: 'S345', badgeNum: '21', transferQty: 0 },
                { itemName: 'Chocolets', invoiceId: 'DF1434', badgeNum: '34', transferQty: 0 },
            ],
            addedTransfer: false,       //if Transfer List will be showed ?
            transferQty: '',
            searchStock: '',
            stockListTmp: [],
        }
    }

    /* componentWillReceiveProps(props) {
        let addedTransfer = this.state.addedTransfer;
        let stockList = this.state.stockList;
        stockList.map((item, key) => {
            if(item.transferQty) addedTransfer = true;
            stockList[key].transferQty = 0;
        });
        this.setState({ stockList: stockList, stockListTmp: this.state.stockList, addedTransfer: addedTransfer });
    } */

    componentDidMount() {
        let addedTransfer = this.state.addedTransfer;
        let stockList = this.state.stockList;
        stockList.map((item, key) => {
            if (item.transferQty) addedTransfer = true;
            stockList[key].transferQty = 0;
        });
        this.setState({ stockList: stockList, stockListTmp: this.state.stockList, addedTransfer: addedTransfer });
    }

    changeSearchStock = (e) => {
        let val = e.target.value;
        let stockList = this.state.stockList;
        let stockListTmp = [];
        stockList.map((item, key) => {
            item.itemName.toLowerCase().indexOf(val.toLowerCase()) > -1 && stockListTmp.push(item);
        })
        this.setState({ searchStock: val, stockListTmp: stockListTmp });
    }

    changeQty = (e, key) => {
        let stockList = this.state.stockList;
        stockList[key].transferQty = e.target.value;
        this.setState({ stockList: stockList });
    }

    onDeleteItem = (e, key) => {
        let stockList = this.state.stockList;
        stockList[key].transferQty = 0;
        this.setState({ stockList: stockList });
    }

    onClickStockItem = (e, item, key) => {
        let stockList = this.state.stockList;
        stockList[key].transferQty++;
        this.setState({ stockList: stockList, addedTransfer: true });
    }


    onValueChange = (item, value) => {
        this.setState({
            selected2: value
        });
        if (item === 'toStore') this.setState({ selectedToStore: value })
        if (item === 'status') this.setState({ selectedStatus: value })
    }

    transferNow = () => {
        console.log('transfer now');
    }

    reset = () => {
        console.log('reset');
    }


    render() {
        let { stockList, stockListTmp } = this.state;
        return (
            <View style={styles.content}>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize, color: 'white' }}>Attachment </Text>
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
                            <Text style={{ fontSize: fontSize, color: 'white' }}>Ref. No. </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput placeholder="Name" style={styles.nameInput} onChangeText={(text) => this.setState({ uname: text })} />
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize, color: 'white' }}>Status </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Picker
                            mode='dropdown'
                            // iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined, margin: 10 }}
                            placeholder="Select ..."
                            placeholderStyle={{ color: "#bfc6ea" }}
                            note={false}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.selectedStatus}
                            onValueChange={(value) => this.onValueChange('status', value)}
                        >
                            <Picker.Item label="Sent" value="0" />
                            <Picker.Item label="Pending" value="1" />
                        </Picker>
                    </Col>
                </Row>
                <Row style={styles.inputArea}>
                    <Col size={3}>
                        <Row style={styles.inputAreaLabelRow}>
                            <Text style={{ fontSize: fontSize, color: 'white' }}>Notes </Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <TextInput
                            placeholder="Notes"
                            multiline={true}
                            numberOfLines={10} style={styles.textArea}
                        />

                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize, color: 'white' }}>From </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
                        </Row>
                    </Col>
                    <Col size={10}>
                        <Text style={{ fontSize: fontSize, margin: 10, height: 30, padding: 5, color: 'white' }}>Store01 </Text>
                        {/* <TextInput placeholder="From" style={styles.nameInput} value={this.state.uname} /> */}
                    </Col>
                </Row>
                <Row style={styles.inputRow}>
                    <Col size={3}>
                        <Row style={styles.inputLabelRow}>
                            <Text style={{ fontSize: fontSize, color: 'white' }}>To </Text><Text style={{ color: 'red', fontSize: fontSize }}>*</Text>
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
                            selectedValue={this.state.selectedToStore}
                            onValueChange={(value) => this.onValueChange('toStore', value)}
                        >
                            <Picker.Item label="Store 01" value="0" />
                            <Picker.Item label="Store 02" value="1" />
                            <Picker.Item label="Toko Laku Terus" value="2" />
                        </Picker>
                    </Col>
                </Row>
                <ScrollView horizontal={true} style={{ marginTop: 20 }}>
                    <Row>
                        <Col size={5}>
                            <Text style={{ margin: 10,marginBottom: 1, fontStyle: "italic", color: 'white' }}>Stock List</Text>
                            <TextInput placeholder="Search" style={{ height: 30, padding: 5, backgroundColor: "white", width: "100%" }} ></TextInput>
                            <View style={styles.viewStyle}>
                                {
                                    stockListTmp.map((item, key) => (
                                        <TouchableOpacity key={key} onPress={(e) => this.onClickStockItem(e, item, key)}>
                                            <Row style={styles.textItem}>
                                                <Text style={{ fontSize: 13 }}>-- {item.itemName},InvoiceId:{item.invoiceId},Stock: </Text>
                                                <Badge value={item.badgeNum} status="error" badgeStyle={{ backgroundColor: "gray" }} />
                                            </Row>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>

                        </Col>
                        <Col size={1} style={{ padding: 10 }}>
                        </Col>
                        <Col size={5}>
                            <Text style={{ margin: 5, marginBottom: 5, fontStyle: "italic", color: 'white' }}>Transfer List</Text>
                            <Row style={{ height: 30, width: 500 }}>
                                <Col size={10} style={styles.tableHeader}>
                                    <Text style={{ fontSize: 14 }}>Item Name</Text>
                                </Col>
                                <Col size={5} style={styles.tableHeader}>
                                    <Text style={{ fontSize: 14 }}>Invoice Id</Text>
                                </Col>
                                <Col size={5} style={styles.tableHeader}>
                                    <Text style={{ fontSize: 14 }}>Transfer Qty.</Text>
                                </Col>
                                <Col size={1} style={styles.tableHeader}>
                                    <Icon type='AntDesign' name='delete' style={{ fontSize: 12 }} />
                                </Col>
                            </Row>
                            <View style={styles.tableContainer}>
                                {
                                    stockList.map((item, key) => (
                                        item.transferQty ?
                                            <Row key={key} style={{ height: 30, width: 500 }}>
                                                <Col size={10} style={styles.tableCell}><Text style={{ fontSize: 13 }}>{item.itemName}</Text></Col>
                                                <Col size={5} style={styles.tableCell}><Text style={{ fontSize: 13 }}>{item.invoiceId}</Text></Col>
                                                <Col size={5} style={styles.tableCell}>
                                                    <TextInput type="number" style={{ width: "100%", backgroundColor: "white", height: 20 }} value={item.transferQty.toString()} name="transferQty"
                                                        onChange={(e) => { this.changeQty(e, key) }}
                                                    />
                                                </Col>
                                                <Col size={1} style={styles.tableCell}>
                                                    <TouchableOpacity onPress={(e) => this.onDeleteItem(e, key)}>
                                                        <Icon type='FontAwesome' name='close' style={{ fontSize: 12, color: 'red' }}/>
                                                    </TouchableOpacity>
                                                    {/* <span className="fa fa-close pointer" style={{color: "red"}} onClick={(e) => this.onDeleteItem(e, key)}/> */}
                                                </Col>
                                            </Row>
                                            :
                                            null
                                    ))
                                }
                            </View>

                        </Col>
                    </Row>
                </ScrollView>

                <Row style={styles.inputRow}>
                    <Col size={3}></Col>
                    <Col size={10}>
                        <Row style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Col size={4} style={{ alignItems: 'center' }}>
                                <Button buttonStyle={styles.saveButton}
                                    icon={
                                        <Icon
                                            type="FontAwesome" name="car" style={{ fontSize: 12, color: 'white' }}
                                        />
                                    }
                                    title="Transfer Now" titleStyle={{ fontSize: 12, padding: 5 }}
                                    onPress={() => this.transferNow()}
                                />
                            </Col>
                            <Col size={2}></Col>
                            <Col size={4} style={{ alignItems: 'flex-start' }}>
                                <Button buttonStyle={styles.resetButton} iconContainerStyle={{ padding: 10 }}
                                    icon={
                                        <Icon
                                            type="FontAwesome" name="circle-o" style={{ fontSize: 12, color: 'white' }}
                                        />
                                    }
                                    title="Reset" titleStyle={{ fontSize: 12, padding: 5 }}
                                    onPress={() => this.reset()}
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
        textAlignVertical: 'top', 
        backgroundColor: 'white', 
        margin: 10, 
        marginTop: 5, 
        padding: 5,
        paddingLeft: 10,
        borderRadius: 20, 
    },

    saveButton: {
        marginTop: 5,
        height: 25,
        width: 150,
        backgroundColor: '#00C0EF',
        justifyContent: 'center',
        borderRadius: 50,
    },
    resetButton: {
        marginTop: 5,
        height: 25,
        width: 80,
        backgroundColor: '#DD4B39',
        justifyContent: 'center',
        borderRadius: 50,
    },

    viewStyle: {
        padding: 10,
        paddingBottom: 15,
        backgroundColor: "#D2D6DE",
        width: 500,
        height: 400,
        borderWidth: 1,
        borderColor: "grey"
    },
    textItem: {
        padding: 2,
        borderColor: "#D2D6DE",
        borderStyle: "dotted",
        borderBottomColor: 'grey',
        borderWidth: 1,
        marginBottom: 5,
        height: "auto"
    },
    tableHeader: {
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
        borderColor: "white",
        borderWidth: 0.5,
    },
    tableCell: {
        backgroundColor: "#D9EDF7",
        borderColor: "white",
        borderWidth: 0.5,
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tableContainer: {
        // padding: 3,
        // paddingBottom: 15,
        backgroundColor: "#D2D6DE",
        width: 500,
        height: 400,
        borderWidth: 1,
        borderColor: "grey"
    }

});

export default EditTransfer;