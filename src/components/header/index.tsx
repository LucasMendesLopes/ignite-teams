import * as s from "./styled"
import logo from "@assets/logo.png"

type Props = {
    showBackButton?: boolean
}

export const Header = ({ showBackButton = false }: Props) => {
    return (
        <s.Container>
            {showBackButton &&
                <s.BackButton>
                    <s.BackIcon />
                </s.BackButton>
            }

            <s.Logo source={logo} />
        </s.Container>
    )
}