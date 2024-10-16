import { TouchableOpacityProps } from "react-native"
import * as s from "./styled"
import { MaterialIcons } from "@expo/vector-icons"

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    type?: s.ButtonIconTypeStyleProps
}

export const ButtonIcon = ({ icon, type = "PRIMARY", ...rest }: Props) => {
    return (
        <s.Button {...rest}>
            <s.Icon
                name={icon}
                type={type}
            />
        </s.Button>
    )
}