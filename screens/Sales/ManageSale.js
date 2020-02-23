import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import MainHeader from '../../components/MainHeader';
import { Container, Row, Icon, Col } from 'native-base';
import LeftView from './LeftView'
import RightView from './RightView'

class ManageProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openedKey: 'list',
        };
    }

    handleTouchHeader = (headerKey) => {
        let openedKey = this.state.openedKey;
        if (openedKey === headerKey) {
            headerKey === 'list' ? this.setState({ openedKey: 'add' }) : this.setState({ openedKey: 'list' });
        } else {
            headerKey === 'list' ? this.setState({ openedKey: 'list' }) : this.setState({ openedKey: headerKey });
        }
    }

    render() {
        let { openedKey } = this.state;
        return (
            <ScrollView>
                <Row style={{ height: 80, flexDirection: 'column', justifyContent: 'center' }}>
                    <MainHeader />
                </Row>
                <Row style={{ height: 60, backgroundColor: 'white', justifyContent: 'flex-end', paddingRight: 20 }}>
                    <Col size={20}>
                        <Row>
                            <Col size={16}></Col>
                            <Col size={2} style={{ alignItems: 'flex-end' }}>
                                <View style={{ width: 25, height: 25, backgroundColor: '#f5f5f5', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name='alert-outline' type="MaterialCommunityIcons" style={{fontSize: 22}}/>
                                    <Icon name='circle' type="FontAwesome"
                                        style={{
                                            color: 'red',
                                            fontSize: 12,
                                            position: 'absolute', top: -4, right: -4
                                        }}
                                    />
                                    <Icon type='FontAwesome' name='circle-o'
                                        style={{
                                            fontSize: 5, color: 'white',
                                            position: 'absolute', top: -.8, right: -.8
                                        }}
                                    />
                                </View>
                            </Col>
                            <Col size={2} style={{ alignItems: 'flex-end' }}>
                                <View style={{ width: 25, height: 25, backgroundColor: '#f5f5f5', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name='settings' type="SimpleLineIcons"  style={{fontSize: 22}}/>
                                </View>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Container style={{ justifyContent: 'flex-start', backgroundColor: '#D3DFE4', padding: 10, height: 'auto' }}>
                    <LeftView></LeftView>
                    <View style={{height:50, backgroundColor: '#D3DFE4'}}></View>
                    <RightView></RightView>
                </Container>
                <Row>
                </Row>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    accordionHeader: {
        backgroundColor: "gray",
        height: 30,
        borderWidth: 1,
        borderColor: '#f5f5f5',
        alignItems: 'center',
    }
});

export default ManageProduct;