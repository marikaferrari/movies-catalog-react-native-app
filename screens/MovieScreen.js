import { ViewPropTypes } from 'deprecated-react-native-prop-types';

import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeftIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieList from '../components/movieList';
import { styles, theme } from '../theme';
import Cast from '../components/cast';

var { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const topMargin = ios ? '' : ' mt-3';

export default function MovieScreen() {
  const { params: item } = useRoute();
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      style={ViewPropTypes.style}
      className="flex-1 bg-neutral-900"
    >
      {/* back button and movie poster */}
      <View className="w-full ">
        <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 ">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.background}
            className="rounded-xl p-1 "
          >
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
            <HeartIcon size="35" color={isFavourite ? theme.background : 'white'} />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image source={require('../assets/arche.jpg')} style={{ width, height: height * 0.55 }} />
          <LinearGradient
            colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
      </View>

      {/* movie details */}
      <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
        {/* title */}
        <Text className="text-white text-center text-3xl font-bold tracking-widest">
          Movie Title
        </Text>
      </View>

      {/* status, release year, runtime */}
      <Text className="text-neutral-400 font-semibold text-base text-center">
        Released • Date • Length in min
      </Text>

      {/* genres  */}
      <Text key={''} className="text-neutral-400 font-semibold text-base text-center">
        Genre
      </Text>

      {/* description */}
      <Text className="text-neutral-400 mx-4 tracking-wide">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </Text>

      {/* cast */}
      <Cast navigation={navigation} cast={cast} />

      {/* similar movies section */}

      <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies} />
    </ScrollView>
  );
}
