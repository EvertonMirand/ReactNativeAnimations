import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Inner = styled(Animated.View)`
  width: 60%;
  height: 10px;
  border-radius: 10px;
  background-color: #37474f;
`;

export const Container = styled(Animated.View)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 100px;
  padding: 20px 0;
  border-radius: 50px;
  background-color: #448aff;
`;
