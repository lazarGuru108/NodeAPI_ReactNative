import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class AddSupplier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>This is AddSupplier Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default AddSupplier;