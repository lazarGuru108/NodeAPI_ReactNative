import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import Tab1 from './Tabs/GeneralTab';
import Tab2 from './Tabs/PrinterTab';
import Tab3 from './Tabs/EmailTab';
import Tab4 from './Tabs/FTPTab';
import Tab5 from './Tabs/LogoTab';
import { StyleSheet } from 'react-native';

export default class EditStore extends Component {
  render() {
    return (
        <Tabs renderTabBar={()=> <ScrollableTab style={{height: 30}}/>}
            tabsContainerStyle={{backgroundColor: 'gray'}}
            // tabBarUnderlineStyle={{backgroundColor: 'gray'}}
        >
          <Tab heading="General" style={{backgroundColor: '#f1f3f600'}}
            tabStyle={{backgroundColor: '#37a000', shadowColor: 'black', shadowRadius: 3}} 
            textStyle={{color: 'white'}} 
            activeTextStyle={{color: 'white'}} 
            activeTabStyle={{backgroundColor:'#37a000ad'}}
            >
            <Tab1 />
          </Tab>
          <Tab heading="Printer" style={{backgroundColor: '#f1f3f600'}}
            tabStyle={{backgroundColor: '#37a000', shadowColor: 'black', shadowRadius: 3}} 
            textStyle={{color: 'white'}} 
            activeTextStyle={{color: 'white'}} 
            activeTabStyle={{backgroundColor:'#37a000ad'}}
            >
            <Tab2 />
          </Tab>
          <Tab heading="Email Setting" style={{backgroundColor: '#f1f3f600'}}
            tabStyle={{backgroundColor: '#37a000', shadowColor: 'black', shadowRadius: 3}} 
            textStyle={{color: 'white'}} 
            activeTextStyle={{color: 'white'}} 
            activeTabStyle={{backgroundColor:'#37a000ad'}}
            >
            <Tab3 />
          </Tab>
          <Tab heading="FTP Setting" style={{backgroundColor: '#f1f3f600'}}
            tabStyle={{backgroundColor: '#37a000', shadowColor: 'black', shadowRadius: 3}} 
            textStyle={{color: 'white'}} 
            activeTextStyle={{color: 'white'}} 
            activeTabStyle={{backgroundColor:'#37a000ad'}}
            >
            <Tab4 />
          </Tab>
          <Tab heading="Logo and Background" style={{backgroundColor: '#f1f3f600'}}
            tabStyle={{backgroundColor: '#37a000', shadowColor: 'black', shadowRadius: 3}} 
            textStyle={{color: 'white'}} 
            activeTextStyle={{color: 'white'}} 
            activeTabStyle={{backgroundColor:'#37a000ad'}}
            >
            <Tab5 />
          </Tab>
        </Tabs>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        backgroundColor: '#f1f3f6'
    }
});