import React, { Component } from 'react';
import { View, Text , StyleSheet, StatusBar, Platform} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.followTextStyle}>Following</Text>
        <View style={styles.separator} />
        <Text style={{...styles.followTextStyle,fontWeight: 'bold'}}>For You</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: verticalScale(50),
        width: '100%',
        //backgroundColor: 'white',
        position: 'absolute',
        top: Platform.OS === 'android' ? verticalScale(30) : verticalScale(30),
        zIndex: 1,
    },
    separator:{
      width: scale(1),
      height: verticalScale(13),
      backgroundColor: '#d8d8d8',
      opacity: 0.6,
      marginHorizontal: scale(10)
    },
    followTextStyle:{
        fontSize: moderateScale(16),
        color: 'white'
    }
});
