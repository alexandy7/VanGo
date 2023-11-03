import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Appee = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animatable.View animation="bounceIn" duration={1500}>
        <TouchableOpacity onPress={() => console.log('Botão pressionado!')}>
          <View
            style={{
              backgroundColor: 'blue',
              padding: 20,
              borderRadius: 10,
            }}>
            <Text style={{ color: 'white' }}>Pressione-me!</Text>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Appee;
