import React from 'react';
import {Text, View,StyleSheet} from 'react-native';

function MessageScreen(props: any) {
  return (
    <View
      style={styles.view}>
        <Text style={styles.text}>Messages</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  view : {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems:'center'
  },
  text : {
    color : 'black'
  }
})
export default MessageScreen;
