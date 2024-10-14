import { TouchableOpacityProps } from "react-native"
import * as s from "./styled"

type Props = TouchableOpacityProps & {
    text: string
    type?: s.ButtonTypeStyleProps
}

export const CustomButton = ({ text, type = "PRIMARY", ...rest }: Props) => {
    return (
        <s.Button type={type} {...rest}>
            <s.Text>
                {text}
            </s.Text>
        </s.Button>
    )
}