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

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43]
        }
    ]
};

export default class BChart extends Component {
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
                    <Text style={{ textAlign: 'left', color: 'white' }}>{this.props.title}</Text>
                </Row>
                <BarChart
                    // style={graphStyle}
                    data={data}
                    width={width}
                    height={190}
                    yAxisLabel="$"
                    // showBarTops={false}
                    // yAxisSuffix="$"
                    chartConfig={this.props.chartConfig}
                    // verticalLabelRotation={30}
                    withVerticalLabels={true}
                    
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
        backgroundColor: 'white',
        height: 260,
        justifyContent: 'center',
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