import { TouchableOpacityProps } from "react-native"
import * as s from "./styled"

type Props = TouchableOpacityProps & s.FilterStyleProps & {
    title: string
}

export const Filter = ({ title, isActive = false, ...rest }: Props) => {
    return (
        <s.Container isActive={isActive} {...rest}>
            <s.Title>{title}</s.Title>
        </s.Container>
    )
}