

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

export const ViewContainer = ({ children, backgroundColor }: Props) => {
  return (
    <View style={{ backgroundColor, flex: 1 }}>{children}</View>
  )
}
