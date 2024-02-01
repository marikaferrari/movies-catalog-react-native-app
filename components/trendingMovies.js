import { View, Text, StyleSheet, TouchableWithoutFeedback, Dimensions, Image } from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

// size of current device window
var { width, height } = Dimensions.get('window');

export default function TrendingMovies({ data }) {
  // redirect user to another screen
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('Movie', item);
  };
  return (
    <View style={style.Container}>
      <Text style={style.Text}>Trending Movies</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      />
    </View>
  );
}

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('../assets/arche.jpg')}
          style={{
            borderRadius: 10,
            width: width * 0.6,
            height: height * 0.4,
            alignItems: 'center',
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

// how to apply style in React Native without NativeWind
// issue with NativeWind when style applied to components
const style = StyleSheet.create({
  Container: { flex: 1 },
  Text: { color: 'white', fontSize: 20, marginLeft: 4, marginBottom: 5 },
});
