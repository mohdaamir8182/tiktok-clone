import ViewPager from '@react-native-community/viewpager';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image , TouchableOpacity} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

 const Sidebar = () => {
 

    return (
      <View style={styles.container}>

        <View style={styles.avatar}>
            <Image 
                source={require('../assets/roundprofile.png')}
                style={{height: '100%', width: '100%', }}
                resizeMode='cover'
            />
            <View style={styles.follow}>
                <Image 
                    source={require('../assets/icons/plus.png')}
                    style={{width: '100%', height: '100%', tintColor: '#c62a88'}}
                    resizeMode='cover'
                />
            </View>
        </View>
        
        <TouchableOpacity onPress={()=>console.log('clicked')} style={styles.icon}>
            <Image 
                source={require('../assets/icons/like.png')}
                style={{height: '100%', width: '100%', }}
                resizeMode='cover'
            />
            <Text style={styles.textStyle}>79.2K</Text>
        </TouchableOpacity>

        <View style={styles.icon}>
            <Image 
                source={require('../assets/icons/comment.png')}
                style={{height: '100%', width: '100%', }}
                resizeMode='cover'
            />
            <Text style={styles.textStyle}>6788</Text>
        </View>

        <View style={styles.icon}>
            <Image 
                source={require('../assets/icons/share.png')}
                style={{height: '100%', width: '100%', }}
                resizeMode='cover'
            />
            <Text style={styles.textStyle}>14.2K</Text>
        </View>

        <View style={{...styles.soundBg, marginTop: verticalScale(35),}}>
            <Image 
                source={require('../assets/roundprofile.png')}
                style={{height: '50%', width: '50%', }}
                resizeMode='cover'
            />
        </View>

    
      </View>
    );
  }

  const styles = StyleSheet.create({
      container:{
          height: '100%',
          //width: scale(60),
          justifyContent: 'flex-end',
          alignItems: 'center',
          //backgroundColor: 'teal',
          position: 'absolute',
          right: scale(5),
          bottom: verticalScale(70) 
      },
      avatar:{
        width: moderateScale(48),
        height: moderateScale(48),
        marginBottom: verticalScale(10),
        borderRadius: moderateScale(48),
        borderWidth: 2,
        borderColor: '#ffffff'
      },
      icon:{
          height: verticalScale(36),
          width: verticalScale(36),
          marginVertical: verticalScale(15),
          alignItems: 'center'
      },
      textStyle:{
          marginVertical: verticalScale(5),
          color: 'white',
          fontWeight: 'bold',
          
      },
      soundBg:{
        backgroundColor: '#1f191f',
        width: moderateScale(50),
        height: moderateScale(50),
        borderRadius: moderateScale(50),
        alignItems: 'center',
        justifyContent: 'center',
      },
      follow:{
          height: moderateScale(20), 
          width: moderateScale(20),
          borderRadius: moderateScale(20),
          tintColor: 'orange',  
          position: 'absolute', 
          bottom: -12, 
          left: 14,
          backgroundColor: 'white', 
        }
  });

export default Sidebar;