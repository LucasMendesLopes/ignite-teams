import theme from "@theme"
import { CheckCircle, Info, XCircle } from "phosphor-react-native"
import { ReactNode } from "react"

import * as s from "./styled"

type Props = {
    children: ReactNode
}

export const ToastBase = ({ children }: Props) => {
    return (
        <s.ToastContainer
            placement='top'
            animationType='slide-in'
            swipeEnabled
            successIcon={
                <CheckCircle
                    color={theme.COLORS.GREEN_500}
                    size={30}
                />
            }
            warningIcon={
                <Info
                    color={theme.COLORS.BLUE_500}
                    size={30}
                />
            }
            dangerIcon={
                <XCircle
                    color={theme.COLORS.RED}
                    size={30}
                />
            }
        >
            {children}
        </s.ToastContainer>
    )
}