import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class AddPurchase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>This is AddPurchase Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default AddPurchase;