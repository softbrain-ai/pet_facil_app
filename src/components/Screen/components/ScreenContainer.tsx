

import React from 'react'
import { ScrollView, View } from 'react-native'


interface Props {
  children: React.ReactNode,
  backgroundColor?: string
}

export const ScrollViewContainer = ({ children, backgroundColor }: Props) => {
  return (
    <ScrollView style={{ backgroundColor }}>{children}</ScrollView>
  )
}

export const ViewContainer = ({ children }: Props) => {
  return (
    <View>{children}</View>
  )
}
