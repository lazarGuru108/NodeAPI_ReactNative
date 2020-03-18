import React, { Component } from 'react';
import { Row, Col, Icon, Text, View } from 'native-base';

class TopIcon extends Component {
    render() {
        return (
            <Row style={{ height: 60, backgroundColor: 'white', justifyContent: 'flex-end', paddingRight: 20, backgroundColor: "#00000000" }}>
                <Col size={20}>
                    <Row>
                        <Col size={16}></Col>
                        <Col size={2} style={{ alignItems: 'flex-end' }}>
                            <View style={{ width: 25, height: 25, backgroundColor: '#f5f5f500', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name='alert-outline' type="MaterialCommunityIcons" style={{ fontSize: 22 }} />
                                <Text
                                    style={{
                                        color: 'red',
                                        fontSize: 12,
                                        position: 'absolute', top: -8, right: -4,
                                    }}
                                >0</Text>
                            </View>
                        </Col>
                        <Col size={2} style={{ alignItems: 'flex-end' }}>
                            <View style={{ width: 25, height: 25, backgroundColor: '#f5f5f500', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name='settings' type="SimpleLineIcons" style={{ fontSize: 22 }} />
                            </View>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default TopIcon;