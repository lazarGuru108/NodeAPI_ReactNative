import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import logo from '../../assets/images/logo.png';
import beach from '../../assets/images/beach.jpg';
import { Form, Item, Label, Input, Card, CardItem, Body, ListItem, Button, Icon, Left, Right, List } from 'native-base';
import { Row, Col, Grid } from 'react-native-easy-grid';
import CustomInput from '../../components/CustomInput';
import { cstyle } from '../../assets/commonStyle';
import { AntDesign } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements'

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 0,
      username: '',
      password: '',
      rememberCheck: true,
    }
  }

  onLogin = () => {
  }

  selectStore = (store)=>{
      this.props.navigation.navigate("Dashboard");
  }

  render() {
    let { stage, username, password, rememberCheck } = this.state;
    return (
      <ImageBackground style={styles.container} source={beach}>
        {
          stage === 0 &&
          <TouchableOpacity onPress={() => this.setState({ stage: 1 })}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo}
                resizeMode='contain'
                source={logo}
              />
            </View>
          </TouchableOpacity>
        }
        {
          stage === 1 &&
          <ScrollView style={styles.loginForm}>
            <Button style={styles.closeBtn} transparent onPress={() => this.setState({ stage: 0 })}>
              {/* <Icon name="ios-close" style={{color: 'white'}} /> */}
              <AntDesign name="closecircle" size={16} />
            </Button>
            <View style={styles.formContent}>

              <View>
                <Text style={styles.header}>Log In</Text>

              </View>
              <View>
                <Row style={styles.inputBlock}>
                  <Col>
                    <Text style={styles.labelText}>
                      Username :
                    </Text>
                    <CustomInput placeholder="Username" />
                  </Col>
                </Row>

                <Row style={styles.inputBlock}>
                  <Col>
                    <Text type='password' style={styles.labelText}>
                      Password :
                    </Text>
                    <CustomInput secureTextEntry={true} placeholder="Password" />
                  </Col>
                </Row>
              </View>
              <View>
                <Row style={styles.inputBlock}>
                  <TouchableOpacity style={styles.submitBtn} onPress={() => { this.setState({ stage: 2 }) }}>
                    <Text style={cstyle.textCenter}>Log in</Text>
                  </TouchableOpacity>
                </Row>
                <Row>
                  <Col>
                    {/* <CheckBox checked={true} /> */}
                    <CheckBox
                      title='Remember'
                      onPress={() => { this.setState({ rememberCheck: !rememberCheck }) }}
                      checked={this.state.rememberCheck}
                    />
                  </Col>
                  {/* <Col size={8}>
                  <Text>Remember</Text>
                </Col> */}
                </Row>
              </View>
            </View>

          </ScrollView>
        }
        {
          stage === 2 &&
          <ScrollView style={styles.loginForm}>
            <Button style={styles.closeBtn} transparent onPress={() => this.setState({ stage: 0 })}>
              {/* <Icon name="ios-close" style={{color: 'white'}} /> */}
              <AntDesign name="closecircle" size={16} />
            </Button>
            <View style={styles.formContent}>
              <View>
                <Text style={styles.header}>Log In</Text>
              </View>
            </View>
            <View>
              <List>
                <ListItem onPress={()=>{this.selectStore('Store 01')}}>
                  <Row>
                    <Icon active name="shopping-bag" type='FontAwesome' style={{ fontSize: 20, color: '#3c8dc0' }} />
                    <Text style={{ fontSize: 15, color: '#3c8dc0' }}> Store 01</Text>
                  </Row>
                  <Right>
                    <Icon name="arrow-forward" style={{ fontSize: 20, color: '#3c8dc0' }} />
                  </Right>
                </ListItem>
                <ListItem onPress={()=>{this.selectStore('Store 02')}}>
                  <Row>
                    <Icon active name="shopping-bag" type='FontAwesome' style={{ fontSize: 20, color: '#3c8dc0' }} />
                    <Text style={{ fontSize: 15, color: '#3c8dc0' }}> Store 02</Text>
                  </Row>
                  <Right>
                    <Icon name="arrow-forward" style={{ fontSize: 20, color: '#3c8dc0' }} />
                  </Right>
                </ListItem>
              </List>
            </View>
          </ScrollView>
        }
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'rgb(0, 67, 122)'
  },
  inputBlock: {
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoContainer: {
    width: 160,
    height: 150,
    borderRadius: 90,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    opacity: 0.85,
    padding: 20,
    justifyContent: 'center',
    flexDirection: 'column',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 170,
    },
    shadowOpacity: 1,
    shadowRadius: 45,
    elevation: 11,
  },
  logo: {
    width: '100%'
  },
  loginForm: {
    width: 250,
    height: 300,
    borderRadius: 10,
    position: 'absolute',
    top: 180,
    backgroundColor: 'white',
    opacity: 0.75,
    // paddingVertical: 10,
    // paddingHorizontal: 20,
  },
  formContent: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  closeBtn: {
    position: 'absolute',
    right: 3,
    top: 3,
    width: 20,
    height: 20,
    zIndex: 10,
  },
  labelText: {
    // fontSize: 16,
    color: '#005E9C',
    marginBottom: 10,
  },
  submitBtn: {
    padding: 5,
    backgroundColor: 'rgba(19, 140, 196, 0.753)',
    borderRadius: 5,
    width: '100%',
  }
});

export default HomeScreen;