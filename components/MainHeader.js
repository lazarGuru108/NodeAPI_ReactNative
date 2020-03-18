import React, { Component } from 'react';
import { View, Button, Text, Container, Content, StyleProvider, Icon } from 'native-base';
import { Row, Col } from 'react-native-easy-grid';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, ImageBackground } from 'react-native';
import beach from '../assets/images/beach.jpg'

class MainHeader extends Component {
    render() {
        return (
            <Container style={{ backgroundColor:"#00000000"}}>
                <Row style={{ padding: 10, paddingBottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                
                    <TouchableOpacity>
                        <Button style={styles.button1} iconLeft bordered success>
                            <Icon name='balance-scale' type="FontAwesome" style={styles.buttonFont} />
                            <Text uppercase={false} style={styles.buttonFont}>Sale</Text>
                        </Button>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Button style={styles.button2} iconLeft bordered success>
                            <Icon name='money' type="FontAwesome" style={styles.buttonFont} />
                            <Text uppercase={false} style={styles.buttonFont}>Supplier Payment</Text>
                        </Button>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Button style={styles.button3} iconLeft bordered success>
                            <Icon name='shopping-cart' type="FontAwesome" style={styles.buttonFont} />
                            <Text uppercase={false} style={styles.buttonFont}>Purchase</Text>
                        </Button>
                    </TouchableOpacity>
                </Row>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    button1: {
        width: 90,
        height: 40,
        padding: 10,
        margin: 10,
        marginTop: 0,
        justifyContent: 'center',
    },
    button2: {
        width: 120,
        height: 40,
        padding: 10,
        margin: 10,
        marginTop: 0,
        justifyContent: 'center',
    },
    button3: {
        width: 120,
        height: 40,
        padding: 10,
        margin: 10,
        marginTop: 0,
        justifyContent: 'center',
    },
    buttonFont: {
        fontSize: 15,
    }
});
export default MainHeader;