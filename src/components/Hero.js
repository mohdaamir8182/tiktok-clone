import React, { Component,useState } from 'react';
import { View, Text,StyleSheet,FlatList ,Button, TouchableOpacity,Dimensions, Image, TouchableWithoutFeedback} from 'react-native';
import {videos} from '../services/api'
import ViewPager from '@react-native-community/viewpager'


const {width} = Dimensions.get('window')
const {height} = Dimensions.get('window')

import Player from './Player'
import Sidebar from './Sidebar'
import Info from './Info'

const data = [
    {
        id:"1",
        video: require('../assets/videos/v1.mp4'),
        //poster: require('../assets/poster6.jpg')
    },
    {
        id:"2",
        video: require('../assets/videos/v2.mp4'),
        //poster: require('../assets/poster6.jpg')
    },
    {
        id:"3",
        video: require('../assets/videos/v3.mp4'),
        //poster: require('../assets/poster6.jpg')
    },
    {
        id:"4",
        video: require('../assets/videos/v1.mp4'),
        //poster: require('../assets/poster6.jpg')
    },
    {
        id:"5",
        video: require('../assets/videos/v2.mp4'),
        //poster: require('../assets/poster6.jpg')
    },
    {
        id:"6",
        video: require('../assets/videos/v3.mp4'),
        //poster: require('../assets/poster6.jpg')
    },
]

const Hero = () =>  {

    const [selected, setSelected] = useState(0);
    const [paused, setPaused] = useState(false);
    const [showBtn, setShowBtn] = useState(false);

    const togglePaused = () => setPaused(prev => !prev) // add this toggle function
    const toggleShow = () => setShowBtn(prev => !prev)

    const videoSwiped = (e) => {
        setSelected(e.nativeEvent.position)
        setPaused(false)
    }

   const onViewableItemsChanged = (changed, viewableItems) => {

    // console.log("CHANGED....",changed)changed[0]

    // console.log("SELECTED....", selected)

        // setSelected(changed.index);
    
        // viewableItems.forEach(item => {
        //   if (item.isViewable) {
        //     this.player[item.item.id].seek(0, 0);
        //   }
        // });
        
    };

    const renderListItem = (index , item) => {

        return(
            <View key={index}>

                <Player
                    video={item.video}
                    isPlay={selected === index}
                    isPaused={paused}
                />

                <Sidebar />
                
                <Info />

                <View style={styles.btn}>
                    {!paused ? null :<Image 
                        source={require('../assets/icons/play.png')} 
                        style={{height: '100%',width: '100%', tintColor: 'white'}}
                    />}
                </View>

            </View>
        )
    }

    return (

        <View style={{flex:1}}>
        
        <FlatList
          data={data}
          decelerationRate="fast"
          keyExtractor={item => item.id}
          onViewableItemsChanged={(changed, viewableItems) => onViewableItemsChanged(changed, viewableItems)}
          removeClippedSubviews={false}
          renderItem={({index , item}) => renderListItem(index , item)}
          showsVerticalScrollIndicator={false}
          snapToAlignment="start"
          snapToInterval={height + 5}
          viewabilityConfig={{
            waitForInteraction: true,
            viewAreaCoveragePercentThreshold: 100,
          }}
        />
        </View>
        
	)
}


const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
    },
    container:{
        // height: height,
        flex: 1
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