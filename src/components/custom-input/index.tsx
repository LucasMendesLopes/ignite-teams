import { TextInputProps } from "react-native"
import * as s from "./styled"

export const CustomInput = ({ ...rest }: TextInputProps) => {
    return (
        <s.Container {...rest}>

        </s.Container>
    )
}