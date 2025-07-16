import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface InputFieldProps extends TextInputProps {
  iconName: string;
  rightIcon?: string;
  onRightIconPress?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({ iconName, rightIcon, onRightIconPress, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <Icon name={iconName} size={24} color="#555" />
      <TextInput
        style={styles.input}
        placeholderTextColor="#777"
        {...rest}
      />
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          <Icon name={rightIcon} size={24} color="#555" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 12,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    height: 55
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
    fontFamily: 'Montserrat-Regular' 
    
  },
});

export default InputField;
