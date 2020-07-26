import React from 'react';
import {View, Text} from 'react-native';

const GreetingBanner: React.FC = () => (
  <View accessibilityLabel="welcome-banner">
    <Text>Welcome to React Native</Text>
  </View>
);

export {GreetingBanner};
