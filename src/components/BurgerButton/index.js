import React, { useState } from 'react';
import { TouchableWithoutFeedback, Animated } from 'react-native';

import { Container, Inner } from './styles';

export default function MenuHumburger() {
  const [activated, setActivated] = useState(false);
  const [upperAnimation, setUpperAnimation] = useState(new Animated.Value(0));
  const [lowerAnimation, setLowerAnimation] = useState(new Animated.Value(0));

  const startAnimation = () => {
    setActivated(!activated);
    Animated.timing(upperAnimation, {
      toValue: activated ? 0 : 25,
      duration: 300,
    }).start();

    Animated.timing(lowerAnimation, {
      toValue: activated ? 0 : -25,
      duration: 300,
    }).start();
  };
  const animatedStyles = {
    lower: {
      transform: [
        {
          translateY: lowerAnimation,
        },
      ],
    },
    upper: {
      transform: [
        {
          translateY: upperAnimation,
        },
      ],
    },
  };
  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Container>
        <Inner style={animatedStyles.upper} />
        <Inner />
        <Inner style={animatedStyles.lower} />
      </Container>
    </TouchableWithoutFeedback>
  );
}
