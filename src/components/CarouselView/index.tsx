import {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useDispatch, useSelector} from 'react-redux';
import {getImageAPI} from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import {
  SCREEN_WIDTH,
  CAROUSEL_ITEM_WIDTH,
} from '../../utils/constants';

import styles from './styles';
type ItemProp = {
  item: string;
};
const CarouselView = (props: any) => {
  const [activeSlide, setActiveSlide] = useState(0); // current active slide card

  const dispatch = useDispatch();
  const carouselData = useSelector((state: RootState) => state.home.carouselItems)
  useEffect(() => {
    dispatch(getImageAPI(5, 2));
  }, []);

  const renderItem = (props: ItemProp) => {
    const {item} = props;
    // render every carousel content
    return (
      <View style={styles.snapCarouselItem}>
        <Image
          source={{uri: item}}
          resizeMode="cover"
          style={styles.imageStyle}
        />
      </View>
    );
  };

  const renderPagination = () => (
    // render carousel pagination
    <Pagination
      dotsLength={carouselData.length}
      activeDotIndex={activeSlide}
      containerStyle={styles.paginationContainer}
    />
  );
  return (
    <View style={styles.snapCarousel}>
      <View style={styles.snapCarousel}>
        <Carousel
          data={carouselData}
          renderItem={renderItem}
          onSnapToItem={index => setActiveSlide(index)} // we will update active slide index
          sliderWidth={SCREEN_WIDTH}
          itemWidth={CAROUSEL_ITEM_WIDTH}
        />
      </View>
      {renderPagination()}
    </View>
  );
};
export default CarouselView;
