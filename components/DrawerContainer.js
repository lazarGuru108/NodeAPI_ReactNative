import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import logo from '../assets/images/logo.png';
import profile from '../assets/images/profile.jpg';
import { Row } from 'react-native-easy-grid';
import menuData from '../constants/menudata.json';
import { Left, Right, Body, Col } from 'native-base';
import SlideView from '../components/SlideView';

let iconSize = 25;

export default class DrawerContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOnline: true,
      showSub: false,
      menuData: menuData,
      allMenus: menuData.menus,
      // curActiveParentMenuKey: '',
    }
  }

  navigateToScreen = (route, title) => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.navigate(route, {name: title});
  }

  toggleMenu = (key) => {
    this.setState({ showSub: !this.state.showSub });
    
    let allMenus = this.state.allMenus;
    let toggledItem = allMenus[key];
    if(!toggledItem.hasChild){
      this.navigateToScreen(toggledItem.url,toggledItem.title);
    }
    allMenus.forEach((element, pKey) => {
      if(pKey !== key)
        allMenus[pKey].isOpen = false;
    });
    allMenus[key].isOpen = !toggledItem.isOpen;
    this.setState({allMenus});
  }

  render() {
    let isOnline = this.state.isOnline;
    let menuData = this.state.menuData;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.logoView}>
              <TouchableOpacity>
                <View style={styles.logoImage}>
                  <Image source={logo}
                    resizeMode="contain"
                    style={{
                      width: 100,
                      height: 50,
                    }}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.profileView}>
                <Image source={profile}
                  resizeMode="contain"
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 300,
                    borderColor: 'rgba(255,255,255,.1)',
                  }}
                />
                <Text style={{ color: 'white', fontSize: 14, marginTop: 10 }}>
                  John Doe
                </Text>
                <Text style={{ color: 'white', fontSize: 14 }}>
                  johndoe@gmail.com
                </Text>
                <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <FontAwesome name={isOnline ? 'circle' : 'x-circle'} size={12} style={{ color: isOnline ? 'green' : 'red', marginTop: 2 }} />
                  <Text style={{ color: '#2e8811' }}>{isOnline ? 'online' : 'offline'}</Text>
                </Row>
              </View>
            </View>
            {menuData.menus.map((menu, pKey) => (
              <View key={pKey}>
                <TouchableOpacity style={styles.drawerMenu} onPress={() => this.toggleMenu(pKey)}/*  onPressIn={menu.isOpen && this.navigateToScreen(menu.url)} */>
                    <Row>
                      <Col size={1}>
                        <FontAwesome name={ menu.icon } size={18} style={styles.drawerIcon} />
                      </Col>
                      <Col size={8}>
                        <Text style={styles.sectionHeadingStyle}> {menu.title} </Text>
                      </Col>
                      <Col size={.7}>
                      {
                        menu.hasChild && <FontAwesome name={menu.isOpen ? 'angle-down' : 'angle-left'} size={18} style={styles.drawerIcon} />
                      }
                      </Col>
                    </Row>
                  
                </TouchableOpacity>
                {menu.hasChild && menu.isOpen ?
                  <View style={styles.navSectionStyle}>
                    {menu.children.map((cMenu, cKey) =>
                      <TouchableOpacity key={cKey} style={styles.drawerSubmenu} onPress={()=>this.navigateToScreen(cMenu.url, cMenu.title)}>
                        <Text style={styles.navItemStyle} >{cMenu.title}</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                  :
                  null
                }
              </View>
            ))}
            
          </View>
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3136'
  },

  logoView: {
    width: '100%',
    height: 200,
  },

  logoImage: {
    width: '100%',
    height: 50,
    resizeMode: 'contain',
    backgroundColor: '#3e454c',
    // paddingVertical: 10,
    // paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileView: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },

  navItemStyle: {
    padding: 8,
    marginLeft: 20,
    color: 'white'
  },
  navSectionStyle: {
    // paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#1c1f22',
  },

  drawerIcon: {
    color: "grey"
  },

  drawerMenu: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    paddingLeft: 10,
    paddingVertical: 10,
  },

  drawerSubmenu: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    paddingLeft: 10,
  },
  sectionHeadingStyle: {
    paddingHorizontal: 5,
    backgroundColor: '#2c3136',
    color: 'white'
  },
})