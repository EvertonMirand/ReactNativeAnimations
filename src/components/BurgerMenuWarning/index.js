import React, { useState } from 'react';
import { TouchableWithoutFeedback, Animated } from 'react-native';

import { Container, Inner } from './styles';

export default function BurgerMenuWarning() {
  const [activated, setActivated] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const startAnimation = () => {
    const toValue = activated ? 0 : 1;
    setActivated(!activated);
    Animated.timing(animation, {
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
      ],
    },

    burgerButton: {
      backgroundColor: animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['#448aff', '#fdd835'],
      }),
    },
  };
  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Container style={animatedStyles.burgerButton}>
        <Inner style={animatedStyles.upper} />
        <Inner />
        <Inner style={animatedStyles.lower} />
      </Container>
    </TouchableWithoutFeedback>
  );
}
