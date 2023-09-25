import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

interface TextInputProps extends RNTextInputProps {
  label?: string;
}

export function TextInput(props: TextInputProps) {
  return <RNTextInput {...props} />;
}
