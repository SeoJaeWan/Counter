/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Styled from 'styled-components/native';
import Counter from './Screens/Counter';

const Container = Styled.View`
  flex:1;
  background-color:#eee;
  `;

const App = () => {
  return (
    <Container>
      <Counter title="Counter App" initValue={0} />
    </Container>
  );
};

export default App;
