import React, { Component } from 'react';
import { useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native';


const Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(()=>{
            navigation.navigate("Home");
        },3000);
    }, [])
  
    return (
        <>
            <StatusBar translucent hidden/>

                <View style={styles.container}>
                    <View style={styles.logoContainer} >
                            <Image 
                                source={{uri: "https://media.giphy.com/media/lrt57LTR0pYkRqk5EJ/giphy.gif"}}
                                style={{height: 200, width: 200}}
                            />
                    </View>
                </View>

        </>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    cover:{
        ...StyleSheet.absoluteFillObject,
    },
    logoContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoStyle:{
        fontSize: 45,
        fontFamily: 'ferdokaonereg',
        textAlign: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
        color: '#000',
        backgroundColor: 'transparent',
        zIndex: 1
    },
    linearGradient:{
        ...StyleSheet.absoluteFillObject,
        opacity: 0.5,
      }
})

export default Splash;