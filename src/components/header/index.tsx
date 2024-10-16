import { useNavigation } from "@react-navigation/native"
import * as s from "./styled"
import logo from "@assets/logo.png"

type Props = {
    showBackButton?: boolean
}

export const Header = ({ showBackButton = false }: Props) => {
    const navigation = useNavigation()

    const handleBack = () => {
        navigation.navigate('groups')
    }

    return (
        <s.Container>
            {showBackButton &&
                <s.BackButton onPress={handleBack}>
                    <s.BackIcon />
                </s.BackButton>
            }

            <s.Logo source={logo} />
        </s.Container>
    )
}