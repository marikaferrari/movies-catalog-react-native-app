import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme';

const { width, height } = Dimensions.get('window');

const MovieList = ({ title, hideSeeAll, data }) => {
  const navigation = useNavigation();

  return (
    <View style={ViewPropTypes.style} className="mb-8 space-y-4">
      <View style={ViewPropTypes.style} className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-lg">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity>
            <Text style={styles.text} className="text-lg">
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => (
          <TouchableWithoutFeedback key={index} onPress={() => navigation.push('Movie', item)}>
            <View style={ViewPropTypes.style} className="space-y-1 mr-4">
              <Image
                // source={require('../assets/images/moviePoster2.png')}
                source={require('../assets/arche.jpg')}
                className="rounded-3xl"
                style={{ width: width * 0.33, height: height * 0.22 }}
              />
              <Text className="text-neutral-300 ml-1">Movie Title</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
};

export default MovieList;
