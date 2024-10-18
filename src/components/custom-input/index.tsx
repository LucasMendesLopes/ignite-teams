import { TextInput, TextInputProps } from "react-native"
import * as s from "./styled"
import { RefObject } from "react"

type Props = TextInputProps & {
    inputRef?: RefObject<TextInput>
}

export const CustomInput = ({ inputRef, ...rest }: Props) => {
    return (
        <s.Container
            ref={inputRef}
            {...rest}
        >

        </s.Container>
    )
}