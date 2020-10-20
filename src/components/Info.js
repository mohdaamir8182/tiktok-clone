import React, { Component,useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Info = ({info}) => {
 
    return (
      <View style={styles.container}>

        <TouchableOpacity>
            <Text style={styles.nameStyle}> 
                {info.author} 
            </Text>
        </TouchableOpacity>

        <Text style={styles.captionStyle}> {info.caption} </Text>

        <Text style={styles.tagsStyle}>{info.tags}</Text>

        <Text style={styles.originalStyle}> @Original - {info.original}</Text>

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
        fontSize: moderateScale(19),
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
        fontSize: moderateScale(16),
        //fontWeight: 'bold',
        marginBottom: verticalScale(15)
    }
});

export default  Info;