import React from 'react';
import {Text, View} from 'react-native';

function MessageScreen(props: any) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems:'center'
      }}>
        <Text style={{color:'black'}}>Messages</Text>
      </View>
  );
}
export default MessageScreen;
