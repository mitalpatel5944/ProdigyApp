import React, {useEffect, useState} from 'react';
import {View, FlatList, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getImageAPI} from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import styles from './styles';

const GridView = (props: any) => {
  const dispatch = useDispatch();
  const dataSource = useSelector((state: RootState) => state.home.gridItems)
  useEffect(() => {
    dispatch(getImageAPI(20, 1));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 1,
            }}>
            <Image style={styles.imageThumbnail} source={{uri: item}} />
          </View>
        )}
        //Setting the number of column
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};
export default GridView;
