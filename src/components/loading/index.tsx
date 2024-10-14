import { ActivityIndicator } from "react-native"
import * as s from "./styled"

export const Loading = () => {
    return (
        <s.Container>
            <s.LoadIndicator />
        </s.Container>
    )
}