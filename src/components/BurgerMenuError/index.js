import React, { useState } from 'react';
import { TouchableWithoutFeedback, Animated } from 'react-native';

import { Container, Inner } from './styles';

export default function BurgerMenuError() {
  const [activated, setActivated] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [rotation, setRotation] = useState(new Animated.Value(0));
  const [jsAnimation, setJsAnimation] = useState(new Animated.Value(0));

  const startAnimation = () => {
    const toValue = activated ? 0 : 1;
    setActivated(!activated);
    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.spring(rotation, {
      toValue,
      friction: 2,
      tension: 140,
      useNativeDriver: true,
    }).start();

    Animated.timing(jsAnimation, {
      toValue,
      duration: 300,
    }).start();
  };

  const animatedStyles = {
    lower: {
      transform: [
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -25],
          }),
        },
        {
          rotate: rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg'],
          }),
        },
      ],
    },
    upper: {
      transform: [
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 25],
          }),
        },
        {
          rotate: rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-45deg'],
          }),
        },
      ],
    },
    middle: {
      height: jsAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [10, 0],
      }),
    },
    burgerButton: {
      backgroundColor: jsAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['#448aff', '#d32f2f'],
      }),
    },
  };
  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Container style={animatedStyles.burgerButton}>
        <Inner style={animatedStyles.upper} />
        <Inner style={animatedStyles.middle} />
        <Inner style={animatedStyles.lower} />
      </Container>
    </TouchableWithoutFeedback>
  );
}
