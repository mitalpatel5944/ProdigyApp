import React, {useState} from 'react';
import {StyleSheet, Image, View, SafeAreaView, ScrollView} from 'react-native';
import CarouselView from '../components/CarouselView';
import GridView from '../components/GridView';




const HomeScreen = (props: any) => {

  return (
    <ScrollView style={styles.container}>
     <CarouselView/>
     <GridView />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
export default HomeScreen;
