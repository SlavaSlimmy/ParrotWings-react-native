import React from 'react';
import { Icon } from 'react-native-material-ui'
import { TextInput, View } from 'react-native';

const Input = ({ icon, style, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, iconStyle, containerStyle } = styles;

  return (
    <View style={[containerStyle, style]}>
      <Icon name={icon} style={iconStyle} />
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid='#03a9f4'
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 16,
    lineHeight: 23,
    flex: 2,
  },
  iconStyle: {
    paddingRight: 8,
  },
  containerStyle: {
    paddingLeft: 8,
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input }
