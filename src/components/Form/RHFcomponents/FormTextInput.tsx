import { TextInput, TextInputProps } from '@components';
import React from 'react';
import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...textInputProps
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextInput
          errorMessage={fieldState.error?.message}
          value={field.value}
          onChangeText={field.onChange}
          {...textInputProps}
        />
      )}
    />
  );
}
