import React, { Component } from 'react';
import { View } from 'native-base';
import { TextInput, Text } from 'react-native';
import {SearchableFlatList} from 'react-native-searchable-list';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ["Taj Mahal", "Great Wall of China", "Machu Picchu", "Christ the Redeemer", "Chichen Itza", "Roman Colosseum", "Petra"],
            searchTerm: "",
            searchAttribute: "",
            ignoreCase: true,
            showList: false,
        };
    }

    render() {
        const { data, searchTerm, ignoreCase, showList } = this.state;
        return (
            <View>
                <TextInput
                    placeholder={"Search Wonders"}
                    onChangeText={searchTerm => this.setState({ searchTerm, showList: true })}
                    onEndEditing={() => this.setState({showList:false})}
                    />

                {showList && <SearchableFlatList
                    
                    data={data}
                    searchTerm={searchTerm} ignoreCase={ignoreCase}
                    renderItem={({ item }) => (<Text >{item}</Text>)}
                    keyExtractor={item => item} />
                }
                <TextInput placeholder={"Search Wonders"}></TextInput>
            </View>
        );
    }
}

export default Test;