import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import React from 'react';

const Cast = ({ cast, navigation }) => {
  let personName = 'Cast Member';
  let characterName = 'Character Name';

  return (
    <View style={ViewPropTypes.style} className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast &&
          cast.map((person, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('Person', person)}
              className="mr-4 items-center"
            >
              <View
                style={ViewPropTypes.style}
                className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500"
              >
                <Image className="rounded-2xl h-24 w-20" source={require('../assets/Photo.jpg')} />
              </View>

              <Text className="text-white text-xs mt-1">{characterName}</Text>
              <Text className="text-neutral-400 text-xs">{personName}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default Cast;
