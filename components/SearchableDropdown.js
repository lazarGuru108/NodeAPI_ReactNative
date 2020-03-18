import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Input, View, List, ListItem, Text } from 'native-base';

class SearchableDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: false,
            list: this.props.list,
            searchedList: this.props.list,
            selected: '',
        }
    }

    onSelectItem = (e,item) => {
        let searchedList = [];
        searchedList.push(item);
        this.setState({ showList: false, selected: item.title, searchedList: searchedList });
        this.props.onSelectItem(e,item);
    }

    onChangeText = (text) => {
        let list = this.state.list;
        let searchedList = [];
        list.map((item, key) => {
            if(item.title.toLowerCase().indexOf(text.toLowerCase()) >= 0)
                searchedList.push(item);
        });
        this.setState({selected: text, searchedList: searchedList});
    }

    render() {
        let { showList, list,searchedList, selected } = this.state;
        return (
            <View style={this.props.style}>
                <TextInput style={styles.input} placeholder={this.props.placeholder} value={selected}
                    onFocus = { () => this.setState({ showList: true }) }
                    onChangeText = { (text) => this.onChangeText(text)}
                    // onBlur = { () => this.setState({showList: false}) }
                >
                </TextInput>
                {
                    showList && <ScrollView>
                        {
                            searchedList.map((item, i) => (
                                <TouchableOpacity key = {i} onPress = { (e) => this.onSelectItem(e,item)} >
                                    <Text style={styles.listItem}>{ item.title }</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        padding: 5,
        // marginBottom: 5,
        height: 30,
        position: 'relative',
        borderRadius: 50
    }, 
    
    listItem: {
        backgroundColor: 'lightgrey',
        padding: 5,
        fontSize: 15,

    }
});


export default SearchableDropdown;