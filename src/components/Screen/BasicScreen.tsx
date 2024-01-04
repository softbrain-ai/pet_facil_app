import { Platform, TouchableOpacity } from "react-native";
import { StyleProp, ViewStyle } from 'react-native';
import { Box } from "../Box/Box";
import { useAppSafeArea } from "@hooks";
import { Text } from "../Text/Text";
import { Icon } from "../Icon/Icon";



interface Props {
  children: React.ReactNode;
  title: string
  goBack: () => void
}

export function BasicScreen({ children, title, goBack }: Props) {
  const { top } = useAppSafeArea();

  return (
    <Box style={{ paddingTop: top }} paddingHorizontal="s24" mt={"s13"}>
      <Box flexDirection="row" justifyContent="center" alignItems="center" height={48}>
        <TouchableOpacity style={contentBtn} onPress={() => goBack()}>
          <Box backgroundColor="primary"
            width={61}
            height={48}
            justifyContent="center"
            alignItems="center"
            style={btn}
          >
            <Icon name="arrowBack" />
          </Box>

        </TouchableOpacity>
        <Box justifyContent="center">
          <Text preset="paragraphLarge" bold color='gray1'>
            {title}
          </Text>
        </Box>
      </Box>



      <Box>
        {children}
      </Box>
    </Box>
  )
}


const contentBtn: StyleProp<ViewStyle> = {
  position: 'absolute',
  top: 0,
  left: 0,
}

const btn = {
  borderRadius: 24,
}