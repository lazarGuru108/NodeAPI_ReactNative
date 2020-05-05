import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class AddCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>This is AddCustomer Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default AddCustomer;