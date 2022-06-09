import React from 'react';
import { Assets, Button, View, Colors, Slider, Text } from 'react-native-ui-lib';

const RecordProgressBar = (props) => {
    return (
        <View paddingR-10 paddingL-10 style={props.style}>
            <Slider
                trackStyle={{ height: 5,backgroundColor:"transparent" }}
                thumbStyle={{ height: 20, width: 20 }}
                style={{ backgroundColor: "transparent", height:50 }}
                
                value={40}
                minimumValue={0}
                maximumValue={100}
                renderTrack={() => {
                    return (<View flex row  style={{ backgroundColor: "aquablue" }}>
                        <View style={{ width: "30%", backgroundColor: "rgba(192,192,192,0.5)" }}></View>
                        <View style={{ width: "15%", backgroundColor: "rgba(192,192,192,0.5)", marginLeft: 3 }}></View>
                        <View style={{ width: "15%", backgroundColor: "rgba(192,192,192,0.5)", marginLeft: 3 }}></View>
                        <View style={{ width: "20%", backgroundColor: "rgba(192,192,192,0.5)", marginLeft: 3 }}></View>
                        <View style={{ width: "20%", backgroundColor: "rgba(192,192,192,0.5)", marginLeft: 3 }}></View>
                    </View>)
                }}
                onValueChange={() => console.log('value changed')}
            />
            <View spread row>
                <Text color='black'>{"00:00"}</Text>
                <Text color='black'>{"00:00"}</Text>
            </View>
        </View>

    )
}

export default RecordProgressBar