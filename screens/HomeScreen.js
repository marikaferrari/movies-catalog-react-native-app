import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { View, Text, TouchableOpacity, ScrollView, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../theme';
import TrendingMovies from '../components/trendingMovies';
import MovieList from '../components/movieList';

// declare variable to fix styling between platforms
const ios = Platform.OS === 'ios';

export default function HomeScreen() {
  // state for changing trending movies
  const [trending, setTrending] = useState([1, 2, 3]);

  // state for upcoming movies
  const [upcoming, setUpcoming] = useState([1, 2, 3]);

  // state for top rated movies
  const [topRated, setTopRated] = useState([1, 2, 3]);

  return (
    <ScrollView
      style={ViewPropTypes.style}
      className="flex-1 bg-black"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 10 }}
    >
      {/* search bar and logo */}
      <SafeAreaView className={ios ? '-mb-2' : 'mb-3'}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* trending movies carousel */}
        <TrendingMovies data={trending} />

        {/* upcoming movies row */}
        <MovieList title="Upcoming" data={upcoming} />

        {/* top rated movies row */}
        <MovieList title="Top Rated" data={topRated} />
      </ScrollView>
    </ScrollView>
  );
}
