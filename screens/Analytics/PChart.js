import React, { Component } from "react";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { View, Text, Row } from "native-base";
// import { data, contributionData, pieChartData, progressChartData } from './data'

export default class PChart extends Component {
    constructor(props) {
        super(props);
        this.apiCaller = null;
        this.state = {

        };

    }

    render() {
        let width = Dimensions.get('window').width
        let height = 220
        return (
            <View style={styles.container}>
                <Row style={styles.header}>
                    <Text style={{textAlign: 'left', color: 'white'}}>{this.props.title}</Text>
                </Row>
                <PieChart
                    data={this.props.data}
                    width={width}
                    height={220}
                    chartConfig={this.props.chartConfig}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                    hasLegend={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        borderColor: 'gray',
        backgroundColor: 'white'
        // borderWidth: 0.5
    },
    header: {
        padding: 5,
        justifyContent: 'flex-start', 
        alignItems: 'center',
        backgroundColor: '#DD4B39', 
        height: 35,
        width: Dimensions.get('window').width
    },

    chartContainer: {
        height: 400,
        borderColor: "#000",
        borderWidth: 1
    }
});