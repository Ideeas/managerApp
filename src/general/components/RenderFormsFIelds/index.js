import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Controller } from 'react-hook-form'
import { COLORS } from '../../styles/colors'

import Input from '../Input'

export default function RenderForm(array, control, errors) {
  renderFormsFields = (array, control) => {
    return array.map(({ type, rules, placeholder }, index) => (
      <View key={index} style={{ marginVertical: 5 }}>
        <Controller
          control={control}
          name={type}
          rules={{
            ...rules,
            required: { value: true, message: `${placeholder} must not be empty` },
          }}
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              placeholder={placeholder}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
        {renderErrorMessage(type)}
      </View>
    ))
  }

  const renderErrorMessage = (type) => {
    return <Text style={styles.error}>{errors[type]?.message}</Text>
  }

  return renderFormsFields(array, control)
}

const styles = StyleSheet.create({
  error: {
    textAlign: 'center',
    fontSize: 16,
    color: COLORS.white,
    marginTop: 5,
  },
})
