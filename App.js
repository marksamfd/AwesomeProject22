/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import  React  from 'react';
import {StatusBar} from 'react-native'
import type { Node } from 'react';
import {
  View,
  Image,
} from 'react-native-ui-lib';
import AudioPlayer from './mm.';
import "./assets.js"
import RecordProgressBar from './proccessBar';


const App = () => {
  return (<View flex>
    <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        translucent={true}
      />
    <Image assetName='play' resizeMode='stretch' style={{ flex: 5, width: "100%" }} />
    <View flex-2 style={{
      justifyContent: 'flex-end',
      alignContent: "center",
      flex: 1,

      width: "100%",
      backgroundColor: "antiquewhite",
      /* minHeight: 120,
      position: "absolute",
      bottom: 0,
      zIndex: 200,*/
      padding: 10, 
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
    }}>
      <RecordProgressBar style={{ position: "relative" }} />
      <AudioPlayer style={{ position: "relative" }} />
    </View>
  </View>
  );
};

export default App;
