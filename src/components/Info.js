import React, { Component,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Info = () => {
 
    return (
      <View style={styles.container}>

        <Text style={styles.nameStyle}> @mohd_aamir065 </Text>

        <Text style={styles.captionStyle}> ICC_CWC2019 </Text>

        <Text style={styles.tagsStyle}>
            Jason Roy six #viral, #trend  {"\n"}
            #foryoupage, #cwc2019, #hit{"\n"}
             #tiktok, #leeds, #stevesmith {"\n"}#six, #cricket, #view</Text>

        <Text style={styles.originalStyle}> @Original - Eng vs Aus cwc2019</Text>

      </View>
    );
  
}

const styles = StyleSheet.create({
    container:{
        height: '50%',
        justifyContent: 'flex-end',
        //backgroundColor: 'teal',
        position: 'absolute',
        left: scale(5),
        bottom: verticalScale(55),
        zIndex: 3 
    },
    nameStyle:{
        color: 'white',
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        marginBottom: verticalScale(15)
    },
    captionStyle:{
        color: 'white',
        fontSize: moderateScale(15),
        fontWeight: '600',
        marginBottom: verticalScale(15)
    },
    tagsStyle:{
        color: 'white',
        fontSize: moderateScale(18),
        fontWeight: '500',
        marginBottom: verticalScale(15)
    },
    originalStyle:{
        color: 'white',
        fontSize: moderateScale(18),
        //fontWeight: 'bold',
        marginBottom: verticalScale(15)
    }
});

export default  Info;