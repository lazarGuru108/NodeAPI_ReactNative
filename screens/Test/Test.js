import React, { Component, Fragment } from 'react';
import { View } from 'native-base';
import { TextInput, Text, ScrollView } from 'react-native';
// import { SearchableFlatList } from 'react-native-searchable-list';

// import SearchableDropdown from 'react-native-searchable-dropdown';

import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
	'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

const items = [
    {
        id: 1,
        name: 'JavaScript',
    },
    {
        id: 2,
        name: 'Java',
    },
    {
        id: 3,
        name: 'Ruby',
    },
    {
        id: 4,
        name: 'React Native',
    },
    {
        id: 5,
        name: 'PHP',
    },
    {
        id: 6,
        name: 'Python',
    },
    {
        id: 7,
        name: 'Go',
    },
    {
        id: 8,
        name: 'Swift',
    },
];


class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ["Taj Mahal", "Great Wall of China", "Machu Picchu", "Christ the Redeemer", "Chichen Itza", "Roman Colosseum", "Petra"],
            searchTerm: "",
            searchAttribute: "",
            ignoreCase: true,
            showList: false,
            selectedItems: [
                {
                    id: 7,
                    name: 'Go',
                },
                {
                    id: 8,
                    name: 'Swift',
                }
            ]
        };
    }

    render() {
        const { data, searchTerm, ignoreCase, showList } = this.state;
        return (
            <ScrollView>
                {/* <TextInput
                    placeholder={"Search Wonders"}
                    onChangeText={searchTerm => this.setState({ searchTerm, showList: true })}
                    onEndEditing={() => this.setState({ showList: false })}
                />

                {showList && <SearchableFlatList

                    data={data}
                    searchTerm={searchTerm} ignoreCase={ignoreCase}
                    renderItem={({ item }) => (<Text >{item}</Text>)}
                    keyExtractor={item => item} />
                }
                <TextInput placeholder={"Search Wonders"}></TextInput> */}
            </ScrollView>
        );
    }
}

export default Test;