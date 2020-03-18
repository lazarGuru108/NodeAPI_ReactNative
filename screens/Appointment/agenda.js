import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';


export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {},
      selectedDates: [],
    };
  }

  componentDidMount() {
    this.setState({selectDates: []});
  }

  selectDate = (item, e) => {
    let selectDates = this.state.selectedDates;
    selectDates.push(item.name);
    this.props.selectedDate(item);
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2020-03-16'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        // markingType={'period'}
        // markedDates={{
        //    '2020-05-08': {textColor: '#43515c'},
        //    '2020-05-09': {textColor: '#43515c'},
        //    '2020-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2020-05-21': {startingDay: true, color: 'blue'},
        //    '2020-05-22': {endingDay: true, color: 'gray'},
        //    '2020-05-24': {startingDay: true, color: 'gray'},
        //    '2020-05-25': {color: 'gray'},
        //    '2020-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        theme={{calendarBackground: '#F1F3F6', agendaKnobColor: '#1DD59A'}}
        // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        // hideExtraDays={false}
      />
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              // height: Math.max(25, Math.floor(Math.random() * 25))
              height: 25
            });
          }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 2000);
  }

  renderItem(item) {
    return (
      <TouchableOpacity 
        style={[styles.item, {height: 25}]} 
        onPress={(e) => this.selectDate(item, e)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});
