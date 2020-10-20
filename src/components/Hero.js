import React, { Component,useState } from 'react';
import { View, Text,StyleSheet,FlatList ,Button, TouchableOpacity,Dimensions, Image, TouchableWithoutFeedback} from 'react-native';
import {videos} from '../services/api'
import ViewPager from '@react-native-community/viewpager'


const {width} = Dimensions.get('window')
const {height} = Dimensions.get('window')


import Player from './Player'
import Sidebar from './Sidebar'
import Info from './Info'



const Hero = () =>  {

    const [selected, setSelected] = useState(0);
    const [paused, setPaused] = useState(false);

    const togglePaused = () => setPaused(prev => !prev) 

    const renderVideo = (item , index) => {
        return(
            <View key={index}>
                <Player
                    video={item.video}
                    isPlay={selected === index}
                    isPaused={paused}
                />

                <Sidebar 
                    analytics={item.analytics}
                />
                
                <Info
                    info={item.info}
                />

                <View style={styles.btn}>
                    {!paused ? null :<Image 
                        source={require('../assets/icons/play.png')} 
                        style={{height: '100%',width: '100%', tintColor: 'white'}}
                    />}
                </View>

            </View>
        );
    }


    const onVideoSwiped = (e) => {
        setSelected(e.nativeEvent.position)
        setPaused(false)
    }

    return (
        
        <TouchableOpacity
            activeOpacity={1} 
            onPress={togglePaused} 
            style={styles.mainContainer}
        >

            <ViewPager
                style={styles.container}
                orientation='vertical'
                onPageSelected={e => onVideoSwiped(e)}
                initialPage={0}>
                {
                    videos &&  videos.map((item, index) => renderVideo(item , index))
                }
            </ViewPager>

        </TouchableOpacity>
	)
}


const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
    },
    container:{
        height: height,
    },
    btn:{
        height: 50,
        width: 50,
        alignSelf: 'center',
        position: 'absolute',
        top: height*0.48
        
    }
});

export default Hero;