import React from 'react';
import { StyleSheet, View, Text, ScrollView, ImageBackground } from 'react-native';
import MainHeader from '../../components/MainHeader';
import { Container, Row, Icon, Col } from 'native-base';
import EditStore from './EditStore';
import ViewStores from './ViewStores';
import background from '../../assets/images/background.jpg';
import TopIcon from '../../components/TopIcon';


class ManageStores extends React.Component {

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
            headerKey === 'list' ? this.setState({ openedKey: 'list' }) : this.setState({ openedKey: 'add' });
        }
    }

    render() {
        let { openedKey } = this.state;
        return (
            <ImageBackground style={styles.container} source={background}>
                <ScrollView>
                    <Row style={{ height: 80, flexDirection: 'column', justifyContent: 'center' }}>
                        <MainHeader />
                    </Row>
                    <TopIcon />
                    <Container style={{ justifyContent: 'flex-start', backgroundColor: '#f1f3f600', padding: 15, height: 'auto' }}>
                        <Row style={styles.accordionHeader} onTouchEnd={() => this.handleTouchHeader('add')}>
                            <Col size={1} style={{ alignItems: 'center' }}>
                                <Icon type='FontAwesome' name={'plus'} style={{ fontSize: 15 }} />
                            </Col>
                            <Col size={8}>
                                <Text>Add New Stores</Text>
                            </Col>
                            <Col size={.7}>
                                {
                                    <Icon type='FontAwesome' name={openedKey === 'add' ? 'minus' : 'plus'} style={{ fontSize: 15 }} />
                                }
                            </Col>
                        </Row>
                        {openedKey === 'add' ?
                            <EditStore />
                            :
                            null
                        }
                        <Row style={styles.accordionHeader} onTouchEnd={() => this.handleTouchHeader('list')}>
                            <Col size={1} style={{ alignItems: 'center' }}>
                                <Icon type='FontAwesome' name={'plus'} style={{ fontSize: 15 }} />
                            </Col>
                            <Col size={8}>
                                <Text>Store List</Text>
                            </Col>
                            <Col size={.7}>
                                {
                                    <Icon type='FontAwesome' name={openedKey === 'list' ? 'minus' : 'plus'} style={{ fontSize: 15 }} />
                                }
                            </Col>
                        </Row>
                        {openedKey === 'list' ?
                            <ViewStores />
                            :
                            null
                        }
                    </Container>
                    <Row>
                    </Row>
                </ScrollView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    accordionHeader: {
        backgroundColor: "#ffffff88",
        height: 30,
        borderWidth: 0.5,
        borderColor: '#f5f5f5',
        alignItems: 'center',
    }
});

export default ManageStores;