import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

class NumberInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: null,
        }
    }

    onlyNumber = (value) => {
        this.setState({ number: value.replace(/[^0-9]/g, '') });
    }

    render() {
        return (
            <TextInput 
                {...this.props}
                keyboardType="numeric"
                onChangeText={ (value) => this.onlyNumber(value)}
                value={this.state.number}
            ></TextInput>
        )
    }
}

const styles = StyleSheet.create({
    input: {
    }
});


export default NumberInput;