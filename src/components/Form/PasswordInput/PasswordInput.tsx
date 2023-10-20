import React, { useState } from 'react';
import { TextInput, TextInputProps } from '../TextInput/TextInput';
import { Icon } from '@components';
import { Pressable } from 'react-native';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isHide, setIsHide] = useState(true);

  function toggleHide() {
    setIsHide(prev => !prev);
  }

  return (
    <TextInput
      secureTextEntry={isHide}
      {...props}
      RightComponent={

        <Icon
          onPress={toggleHide}
          color="gray2"
          name={isHide ? 'eyesOn' : 'eyesOff'}
        />
      }

    />
  );
}
