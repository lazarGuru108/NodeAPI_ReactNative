import React from 'react';
import { StyleSheet, View, Text, ScrollView, ImageBackground } from 'react-native';
import MainHeader from '../../components/MainHeader';
import { Container, Row, Icon, Col } from 'native-base';
import LeftView from './LeftView';
import RightView from './RightView';
import background from '../../assets/images/background.jpg';
import TopIcon from '../../components/TopIcon';

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
            <ImageBackground style={styles.container} source={background}>
                <ScrollView>
                    <Row style={{ height: 80, flexDirection: 'column', justifyContent: 'center' }}>
                        <MainHeader />
                    </Row>
                    <TopIcon />
                    <Container style={{ justifyContent: 'flex-start', backgroundColor: '#D3DFE400', padding: 10, height: 'auto' }}>
                        <LeftView></LeftView>
                        <View style={{ height: 50, backgroundColor: '#D3DFE400' }}></View>
                        <RightView></RightView>
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
        backgroundColor: "gray",
        height: 30,
        borderWidth: 1,
        borderColor: '#f5f5f5',
        alignItems: 'center',
    }
});

export default ManageProduct;