import React, { Component } from 'react';
import { Thumbnail, Text, Row, View, Col } from 'native-base';
import { StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import noImage from '../../../assets/images/noimage.jpg';

class LogoTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logoUri: '',
            backgroundUri: '',
        }
    }

    openImagePickerAsync = async (type) => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        type === 'logo' ?
            this.setState({ logoUri: pickerResult.uri })
            :
            this.setState({ backgroundUri: pickerResult.uri })

    }

    render() {
        let { logoUri, backgroundUri } = this.state;
        return (
            <ScrollView style={styles.container}>
                <View style={{ padding: 5, backgroundColor: '#88888888', borderRadius: 20 }}>
                    <Row style={{ height: 30, backgroundColor: '#00C0EF', justifyContent: 'flex-start', padding: 5 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Logo</Text>
                    </Row>
                    <Row style={{ height: 160, justifyContent: 'flex-start', borderColor: '#00C0EF', borderWidth: 1, padding: 5 }}>
                        <Col size={4} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            {
                                logoUri ?
                                    <Thumbnail square large source={{ uri: logoUri }} />
                                    :
                                    <Thumbnail square large source={noImage} />
                            }
                        </Col>
                        <Col size={6} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={{ padding: 10 }} onPress={() => this.openImagePickerAsync('logo')}>
                                <Text style={styles.textStyle}>Choose File</Text>
                            </TouchableOpacity>
                            <TextInput disabled={true} style={{ backgroundColor: 'white', width: 200 }} value={logoUri}></TextInput>
                        </Col>
                    </Row>
                </View>
                <View style={{ padding: 5, backgroundColor: '#88888888',borderRadius: 20 }}>
                    <Row style={{ height: 30, backgroundColor: '#00C0EF', justifyContent: 'flex-start', padding: 5 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Background</Text>
                    </Row>
                    <Row style={{ height: 160, justifyContent: 'flex-start', borderColor: '#00C0EF', borderWidth: 1, padding: 5 }}>
                        <Col size={4} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            {
                                backgroundUri ?
                                    <Thumbnail square large source={{ uri: backgroundUri }} />
                                    :
                                    <Thumbnail square large source={noImage} />
                            }
                        </Col>
                        <Col size={6} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={{ padding: 10 }} onPress={() => this.openImagePickerAsync('background')}>
                                <Text style={styles.textStyle}>Choose File</Text>
                            </TouchableOpacity>
                            <TextInput disabled={true} style={{ backgroundColor: 'white', width: 200 }} value={backgroundUri}></TextInput>
                        </Col>
                    </Row>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#00000088'
    },

    textStyle: {
        fontSize: 15,
        color: '#00C0EF',
    }
});

export default LogoTab;