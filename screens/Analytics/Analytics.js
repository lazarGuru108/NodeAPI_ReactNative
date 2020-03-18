import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Row, Col, View, Text, Icon } from 'native-base';
import LChart from './LChart';
import PChart from './PChart';
import { data1, data2, data3, data4, chartConfig1, chartConfig2 } from './data';
import BChart from './BChart';
import CustomerAnalytics from './CustomerAnalytics';
import LoginLogs from './LoginLogs';
import background from '../../assets/images/background.jpg';
import MainHeader from '../../components/MainHeader';
import TopIcon from '../../components/TopIcon';

class Analytics extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <ScrollView horizontal={true}>
            <ImageBackground style={styles.imgContainer} source={background}>
                <ScrollView style={styles.container}>
                <Row style={{ height: 80, flexDirection: 'column', justifyContent: 'center' }}>
                        <MainHeader />
                    </Row>
                    <TopIcon />
                    <ScrollView horizontal={true}>
                        <Row>
                            <Col style={{ padding: 5 }}>
                                <PChart title="Top Products" data={data1} chartConfig={chartConfig1} />
                            </Col>
                            <Col style={{ padding: 5 }}>
                                <PChart title="Top Customers" data={data2} chartConfig={chartConfig1} />
                            </Col>
                            <Col style={{ padding: 5 }}>
                                <PChart title="Top Suppliers" data={data3} chartConfig={chartConfig1} />
                            </Col>
                            <Col style={{ padding: 5 }}>
                                <PChart title="Top Brands" data={data4} chartConfig={chartConfig1} />
                            </Col>
                        </Row>
                    </ScrollView>
                    <ScrollView horizontal={true}>
                        <Row>
                            <Col size={5} style={{ padding: 5 }}>
                                <View style={styles.tableContainer}>
                                    <Row style={{ backgroundColor: '#D2D6DE', height: 35, width: 600 }}>
                                        <Col style={styles.tableCol} size={5}>
                                            <Text style={styles.textStyle}>Opening balance</Text>
                                        </Col>
                                        <Col style={styles.tableCol} size={5}>
                                            <Text style={styles.textStyle}>0.00</Text>
                                        </Col>
                                    </Row>
                                    <Row style={{ backgroundColor: '#D2D6DE', height: 35, width: 600 }}>
                                        <Col style={styles.tableCol} size={5}>
                                            <Row style={{ alignItems: 'center' }}>
                                                <TouchableOpacity>
                                                    <Icon type="FontAwesome" name="link" style={{ fontSize: 12 }} />
                                                </TouchableOpacity>
                                                <Text style={styles.textStyle}>Today's income</Text>
                                            </Row>
                                        </Col>
                                        <Col style={styles.tableCol} size={5}>
                                            <Text style={styles.textStyle}>30,232,112,619,165.00</Text>
                                        </Col>
                                    </Row>
                                    <Row style={{ backgroundColor: '#00A65A', height: 35, width: 600 }}>
                                        <Col style={styles.tableCol} size={5}>
                                            <Text style={styles.textWhiteStyle}>Total revenue</Text>
                                        </Col>
                                        <Col style={styles.tableCol} size={5}>
                                            <Text style={styles.textWhiteStyle}>30,232,112,619,165.00</Text>
                                        </Col>
                                    </Row>
                                    <Row style={{ backgroundColor: '#DD4B39', height: 35, width: 600 }}>
                                        <Col style={styles.tableCol} size={5}>
                                            <Row style={{ alignItems: 'center' }}>
                                                <TouchableOpacity>
                                                    <Icon type="FontAwesome" name="link" style={{ fontSize: 12, color: 'white' }} />
                                                </TouchableOpacity>
                                                <Text style={styles.textWhiteStyle}>Today's expenses (-)</Text>
                                            </Row>
                                        </Col>
                                        <Col style={styles.tableCol} size={5}>
                                            <Text style={styles.textWhiteStyle}>126,000.00</Text>
                                        </Col>
                                    </Row>
                                    <Row style={{ backgroundColor: '#0073B7', height: 35, width: 600 }}>
                                        <Col style={styles.tableCol} size={5}>
                                            <Text style={styles.textWhiteStyle}>Balance / Cash</Text>
                                        </Col>
                                        <Col style={styles.tableCol} size={5}>
                                            <Text style={styles.textWhiteStyle}>30,232,112,493,165.00</Text>
                                        </Col>
                                    </Row>
                                    <Row style={{ backgroundColor: '#F39C12', height: 45, width: 600 }}>
                                        <Col style={styles.tableCol} size={5}>
                                            <Text style={{ fontSize: 15, textAlign: 'right', color: 'white', fontWeight: 'bold' }}>
                                                Closing balance today
                                        </Text>
                                        </Col>
                                        <Col style={styles.tableCol} size={5}>
                                            <Text style={{ fontSize: 15, textAlign: 'right', color: 'white', fontWeight: 'bold' }}>30,232,112,493,165.00</Text>
                                        </Col>
                                    </Row>
                                </View>
                            </Col>
                            <Col size={1}></Col>
                            <Col size={5} style={{ padding: 5 }}>
                                <BChart title="Top Brands" chartConfig={chartConfig1} />
                            </Col>
                        </Row>
                    </ScrollView>
                    <ScrollView horizontal={true}>
                        <Row style={{ padding: 6 }}>
                            <CustomerAnalytics />
                        </Row>
                    </ScrollView>
                    <ScrollView horizontal={true}>
                        <Row style={{ padding: 5 }}>
                            <BChart title="Income vs Expense →February, 2020" chartConfig={chartConfig2} />
                        </Row>
                    </ScrollView>
                    <ScrollView horizontal={true}>
                        <Row style={{ padding: 5 }}>
                            <LoginLogs />
                        </Row>
                    </ScrollView>
                </ScrollView>
            </ImageBackground>
            // </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    imgContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        padding: 10,
    },

    tableContainer: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        height: 260,
        justifyContent: 'center'
    },

    tableCol: {
        borderColor: 'white',
        borderWidth: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },

    textStyle: {
        fontSize: 12,
        textAlign: 'right',
    },
    textWhiteStyle: {
        fontSize: 12,
        textAlign: 'right',
        color: 'white',
    },
});

export default Analytics;