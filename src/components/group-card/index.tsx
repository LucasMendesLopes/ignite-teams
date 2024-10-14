import { TouchableOpacityProps } from "react-native"
import * as s from "./styled"

type Props = TouchableOpacityProps & {
    title: string
}

export const GroupCard = ({ title, ...rest }: Props) => {
    return (
        <s.Container {...rest} activeOpacity={0.5}>
            <s.Icon />

            <s.Title>
                {title}
            </s.Title>
        </s.Container>
    )
}