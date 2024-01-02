import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

interface IProps {
  text: string
}

export function TitleLine({ text }: IProps) {
  return (
    <Box position="relative" mt="s26" mb="s26">
      <Box style={Line}></Box>

      <Box
        style={Description}
        paddingHorizontal="s10"
        justifyContent="center"
        backgroundColor="gray5"
        position="absolute"
      >
        <Text preset="headingSmall"
          color='gray1'
        >
          {text}
        </Text>
      </Box>
    </Box>
  )
}

const Line = {
  backgroundColor: '#8E8E8E',
  with: '100%',
  height: 1
}

const Description = {
  top: -13,
  left: 97
}