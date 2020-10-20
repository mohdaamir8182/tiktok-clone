import React, { Component } from 'react';
import { View, Text,StatusBar,StyleSheet } from 'react-native';


import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Tabs from '../../components/Tabs'



const Home = () =>  {
 
    return (
      <View style={styles.container}>
           <StatusBar 
            translucent
            barStyle='light-content'
            backgroundColor='black'
          />

          <Header />

          <Hero />

          <Tabs />

        
          
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
	    backgroundColor: 'black'
    },
    gradient:{
        height: '100%',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1
    }
});

export default Home;