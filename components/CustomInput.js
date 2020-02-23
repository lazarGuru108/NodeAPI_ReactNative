import React from 'react';
import {StyleSheet} from 'react-native';
import { Input } from 'native-base';

class CustomInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Input 
            {...this.props}
            style={styles.input}></Input>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'lightgray',
        padding: 5,
        marginBottom: 5,
        height: 30
    }
});


export default CustomInput;