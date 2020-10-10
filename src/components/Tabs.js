import React, { Component,useState } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';



const Tabs = ()=>  {

    const [selected,setSelected] = useState('home');
  
    

    return (
      <View style={styles.container}>
        <TouchableOpacity
            onPress={()=>setSelected('home')} 
            style={styles.button}
        >
            <Image 
                source={require('../assets/icons/home.png')}
                style={{height: 22, width: 22, tintColor: selected == 'home' ? 'white' : "grey"}}
            />
            <Text style={{...styles.btnTitle,color: selected == 'home' ? "white" : "grey"}}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={()=>setSelected('disc')} 
            style={styles.button}
        >
            <Image 
                source={require('../assets/icons/filter.png')}
                style={{height: 22, width: 22, tintColor: selected == 'disc' ? 'white' : "grey"}}
            />
            <Text style={{...styles.btnTitle,color: selected == 'disc' ? "white" : "grey"}}>Disc</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={()=>setSelected('add')} 
            style={styles.button}
        >
            <Image 
                source={require('../assets/icons/ttadd.png')}
                style={{height: verticalScale(17), width: scale(40), }}
            />
            
        </TouchableOpacity>

        <TouchableOpacity
            onPress={()=>setSelected('inbox')} 
            style={styles.button}
        >
            <Image 
                source={require('../assets/icons/inbox.png')}
                style={{height: 22, width: 22, tintColor: selected == 'inbox' ? 'white' : "grey"}}
            />
            <Text style={{...styles.btnTitle,color: selected == 'inbox' ? "white" : "grey"}}>Inbox</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={()=>setSelected('me')} 
            style={styles.button}
        >
            <Image 
                source={require('../assets/icons/user.png')}
                style={{height: 22, width: 22, tintColor: selected == 'me' ? 'white' : "grey"}}
            />
            <Text style={{...styles.btnTitle,color: selected == 'me' ? "white" : "grey"}}>Me</Text>
        </TouchableOpacity>
        
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        height: Platform.OS === 'android' ? verticalScale(50) : verticalScale(55),
        width: '100%',
        backgroundColor: 'black',
        position: 'absolute',
        //top: Platform.OS === 'android' ? 10 : verticalScale(30),
        bottom: 0,
        zIndex: 1,
        paddingBottom: Platform.OS === 'android' ? 0 : verticalScale(8)
    },
    followTextStyle:{
        fontSize: moderateScale(18),
        color: 'white'
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center' ,
        marginHorizontal: scale(8)
    },
    btnTitle:{
        fontSize: moderateScale(10),
        marginTop: verticalScale(3),
        color: 'white',
        letterSpacing: 0.5,
        fontWeight: 'bold'
    }
});

export default Tabs;