import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Dimensions, FlatList } from 'react-native';
import Video from 'react-native-video';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');



const Player = ({video,isPlay,isPaused}) =>   {

    // const [paused, setPaused] = useState(true);

    // const togglePaused = () => setPaused(prev => !prev) // add this toggle function
  
    return isPlay? (
       
            <Video source={video} 
                ref={(ref) => {
                this.player = ref}}
                paused={isPaused}
                repeat={true}                              
                onBuffer={this.onBuffer}                
                onError={this.videoError}
                resizeMode='cover' 
                style={styles.container} 
            />

            
        
    ) : <Text>ll</Text>

}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: width
    }
});

export default Player;
