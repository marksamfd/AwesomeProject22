import React from 'react';
import { Assets, Button, View, Colors } from 'react-native-ui-lib';
const smallBtnDims = 20
const AudioPlayer = (props) => {
  return (

    <View flex row spread centerH centerV height={20} paddingR-10 paddingL-10 style={props.style}>
      <Button //files
        iconSource={Assets.icons.play}
        iconStyle={{ height: 24, width: 24 }}
        outline
        style={{ width: 44, height: 44 }}
        outlineColor={Colors.$outlinePrimary}
      />

      <Button //+10
        iconSource={Assets.icons.play}
        iconStyle={{ height: 24, width: 24 }}
        outline
        style={{ width: 44, height: 44 }}
        outlineColor={Colors.$outlinePrimary}
      />

      <Button //play
        round
        outlineColor='red'
        backgroundColor="red"
        iconStyle={{ height: 30, width: 30 }}
        style={{ width: 60, height: 60 }}
        iconSource={Assets.icons.play}
      />

      <Button //-10
        iconSource={Assets.icons.play}
        iconStyle={{ height: 24, width: 24 }}
        outline
        style={{ width: 44, height: 44 }}
        outlineColor={Colors.$outlinePrimary}
      />
      <Button //playback speed
        iconSource={Assets.icons.play}
        iconStyle={{ height: 24, width: 24 }}
        outline
        style={{ width: 44, height: 44 }}
        outlineColor={Colors.$outlinePrimary}
      />

    </View >
  );
};
export default AudioPlayer;
