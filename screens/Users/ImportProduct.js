import React, { Component } from 'react';
import { View, Row, Text, Col, Icon, Button } from 'native-base';
import { StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

class ImportProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
        }
    }

    _pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        alert(result.uri);
        if (result.type === 'success')
            this.setState({ file: result.name });
        console.log(result);
    }

    render() {
        return (
            <View style={styles.container}>
                <Row style={{ backgroundColor: '#D2D6DE', padding: 20 }}>
                    <Text>
                        The first line in downloaded .xls file should remain as it is. Please do not change the order of columns. Please make sure the (*.xls) file is UTF-8 encoded. The images should be uploaded in storage/products/ (or where you pointed) folder. The System will check that if a row exists then update, if not exist then insert.
                    </Text>
                </Row>
                <Row style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                    <Text style={{ fontSize: 15 }}>Download Sample Format File</Text>
                    <TouchableOpacity>
                        <Row style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                            <Icon type="FontAwesome" name="download" style={{ fontSize: 15, color: '#00C0EF' }}></Icon>
                            <Text style={{ fontSize: 15, color: '#00C0EF' }}>Download</Text>
                        </Row>
                    </TouchableOpacity>
                </Row>
                <Row style={{ justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                    <Col style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={this._pickDocument}>
                            <Text>Select *.xlsx file</Text>
                        </TouchableOpacity>
                    </Col>
                    <Col style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TextInput value={this.state.file}
                            style={ styles.fileInput }>
                        </TextInput>
                    </Col>
                </Row>
                <Row style={styles.importButtonRow}>
                    <Button iconLeft style={styles.importButton}>
                        <Icon type="FontAwesome" name="upload" style={styles.iconStyle}></Icon>
                        <Text uppercase={false} style={{fontSize: 12}}>Import</Text>
                    </Button>
                </Row>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

    fileInput: {
        padding: 5,
        backgroundColor: 'white',
        width: 200, height: 25
    },

    importButtonRow: {
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 10
    },

    importButton: {
        width: 300,
        height: 25,
        justifyContent: 'center',
        backgroundColor: '#008D4C',
    },

    iconStyle: {
        fontSize: 12,
    }
});

export default ImportProduct;