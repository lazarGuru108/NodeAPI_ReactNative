import React, { useState, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const SlideView = props => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 200,
      duration: 1000,
    }).start();
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        height: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

export default SlideView;