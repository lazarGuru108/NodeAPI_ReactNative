import React, { Component } from 'react';
import { Col, Row, Picker, View, Text, Icon } from 'native-base';
import { StyleSheet, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import AgendaScreen from './agenda';
import { Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import background from '../../assets/images/background.jpg';
import MainHeader from '../../components/MainHeader';
import TopIcon from '../../components/TopIcon';

class Appointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedService: undefined,
            selectedProvider: undefined,
            selectedDates: [],
            isDatePickerVisible: false,
            isTimeButtonVisble: false,
            isTimePickerVisble: false,
            date: new Date().toString('dd-MMM-yyyy'),
        }
        this.setDate = this.setDate.bind(this);
        this.setTime = this.setTime.bind(this);
    }

    onValueChange = (item, value) => {
        this.setState({
            selected2: value
        });
        if (item === 'service') this.setState({ selectedService: value })
        if (item === 'provider') this.setState({ selectedProvider: value })
        console.log(value);
    }

    deleteDateList = (e, key) => {
        let selectedDates = this.state.selectedDates;
        delete selectedDates[key];
        this.setState({ selectedDates: selectedDates });
    }

    onSelectDate() {
        this.setState({ isDatePickerVisible: true, isTimeButtonVisble: false });
    }

    onSelectTime() {
        this.setState({ isTimePickerVisible: true });
    }

    setDate(e, newDate) {
        let date = newDate.toString().slice(0, 15);
        console.log(date);
        let oldDate = this.state.date;
        this.setState({ date: date || oldDate, isDatePickerVisible: false, isTimeButtonVisble: newDate ? true : false });
    }
    setTime(e, newTime) {
        let time = newTime.toString().slice(16, 21);
        console.log(time);
        let dateTime = { "date": this.state.date, "time": time };
        let selectedDates = this.state.selectedDates;
        selectedDates.push(dateTime);
        this.setState({ selectedDates: selectedDates, isTimePickerVisible: false/* , isTimeButtonVisble: newTime ? false : true */ });
    }

    doAppointment = () => {

    }


    render() {
        let { selectedDates, isDatePickerVisible, isTimeButtonVisble, isTimePickerVisible } = this.state;
        return (
            <ImageBackground style={styles.imgContainer} source={background}>
                <Row style={{ height: 80, flexDirection: 'column', justifyContent: 'center' }}>
                    <MainHeader />
                </Row>
                <TopIcon />
                <ScrollView style={styles.container}>

                    <View style={styles.formContainer}>
                        <Row>
                            <Col size={5}>
                                <Text style={{ color: 'white', fontSize: 14 }}>CHOOSE SERVICE *</Text>
                                <Picker
                                    mode='dropdown'
                                    // iosIcon={<Icon name="arrow-down" />}
                                    style={{ color: 'white', width: undefined, margin: 10 }}
                                    placeholder="Select ..."
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    note={false}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selectedService}
                                    onValueChange={(value) => this.onValueChange('service', value)}
                                >
                                    <Picker.Item label="Eyelash/Eyebrow Tinting" value="0" />
                                    <Picker.Item label="service2" value="1" />
                                </Picker>
                            </Col>
                            <Col size={1}></Col>
                            <Col size={5}>
                                <Text style={{ color: 'white', fontSize: 14 }}>CHOOSE PROVIDER *</Text>
                                <Picker
                                    mode='dropdown'
                                    // iosIcon={<Icon name="arrow-down" />}
                                    style={{ color: 'white', width: undefined, margin: 10 }}
                                    placeholder="Select ..."
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    note={false}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selectedProvider}
                                    onValueChange={(value) => this.onValueChange('provider', value)}
                                >
                                    <Picker.Item label="Alicia" value="0" />
                                    <Picker.Item label="Lua Brown" value="1" />
                                </Picker>
                            </Col>
                        </Row>
                        <Row>
                            <Text style={{ color: 'white', fontSize: 14 }}>
                                CHOOSE DATE & TIME*
                    </Text>
                        </Row>
                        <Row style={{ paddingTop: 10, paddingBottom: 10 }}>
                            <Text style={{ color: 'white', fontSize: 14 }}>
                                You can select 2 time slots per date and a maximum of 6 selections
                                in total for this demo. The selected bookings are shown below the calendar.
                    </Text>
                        </Row>
                        <Row>
                            {/* <AgendaScreen selectedDate={(item) => this.selectedDate(item)} /> */}
                            <Button title="Choose date"
                                buttonStyle={styles.selectDateButton}
                                onPress={() => this.onSelectDate()}></Button>
                            {
                                isDatePickerVisible &&
                                <DateTimePicker
                                    timeZoneOffsetInMinutes={0}
                                    value={new Date()}
                                    mode={'date'}
                                    dateFormat="yyyy/MM/dd"
                                    is24Hour={true}
                                    display="default"
                                    onChange={this.setDate}
                                    locale={"en"}
                                    show={false}
                                />
                            }
                            {
                                isTimeButtonVisble &&
                                <Button title="Choose time"
                                    buttonStyle={styles.selectDateButton}
                                    onPress={() => this.onSelectTime()}></Button>
                            }
                            {
                                isTimePickerVisible &&
                                <DateTimePicker
                                    timeZoneOffsetInMinutes={0}
                                    value={new Date()}
                                    mode={'time'}
                                    dateFormat="yyyy/MM/dd"
                                    is24Hour={true}
                                    display="default"
                                    onChange={this.setTime}
                                    locale={"en"}
                                    show={false}
                                />
                            }
                        </Row>
                        <View style={{ marginTop: 10 }}>
                            {
                                selectedDates.map((item, key) =>
                                    <TouchableOpacity key={key} onPress={(e) => this.deleteDateList(e, key)}>
                                        <Row key={key} style={{ height: 20, paddingLeft: 10, alignItems: 'center' }}>
                                            <Col size={0.1}>
                                                <Icon type="Ionicons" name="ios-close-circle" style={{ fontSize: 12, color: 'white' }}></Icon>
                                            </Col>
                                            <Col size={2}>
                                                <Text style={{ fontSize: 12, color: 'white' }}>{item.date + " " + item.time}</Text>
                                            </Col>
                                        </Row>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                        <View>
                            <Text style={{ color: 'white', fontSize: 14 }}>NAME *</Text>
                            <Row>
                                <Col size={5}>
                                    <TextInput style={styles.textInput}></TextInput>
                                    <Text style={{ color: 'white', fontSize: 12 }}>First</Text>
                                </Col>
                                <Col size={1}></Col>
                                <Col size={5}>
                                    <TextInput style={styles.textInput}></TextInput>
                                    <Text style={{ color: 'white', fontSize: 12 }}>Last</Text>
                                </Col>
                            </Row>
                        </View>
                        <View style={{ marginTop: 20, marginBottom: 10 }}>
                            <Text style={{ color: 'white', fontSize: 14 }}>EMAIL *</Text>
                            <TextInput style={styles.textInput}></TextInput>
                        </View>
                        <View style={{ justifyContent: 'center', height: 50 }}>
                            <Button buttonStyle={{ backgroundColor: 'green', borderRadius: 50 }}
                                title="Schedule Appointment" titleStyle={{ fontSize: 12, padding: 5 }}
                                onPress={() => this.doAppointment()}
                            />
                        </View>
                    </View>
                    {/* <View style={{height: 150}}></View> */}
                </ScrollView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    imgContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        /* padding: 10,
        paddingTop: 30,
        paddingBottom: 150, */
    },
    formContainer: {
        margin: 10,
        backgroundColor: "#00000088",
        padding: 20,
        borderRadius: 20,
        height: '100%'
    },
    textInput: {
        backgroundColor: 'white',
        padding: 5,
        height: 25,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 50,
        paddingLeft: 10,
    },
    selectDateButton: {
        height: 25,
        width: 160,
        backgroundColor: "#7C9299",
        marginRight: 20,
        borderRadius: 50
    },
    whiteText: {
        color: 'white',
    }
})

export default Appointment;