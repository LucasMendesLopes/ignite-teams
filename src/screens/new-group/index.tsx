import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { CustomButton, CustomInput, Header, Highlight } from "@components"
import * as s from "./styled"

export const NewGroup = () => {
    const [group, setGroup] = useState("")

    const navigation = useNavigation()

    const handleNew = () => {
        navigation.navigate('players', { group: group })
    }

    return (
        <s.Container>
            <Header showBackButton />

            <s.Content>
                <s.Icon />

                <Highlight title="Nova Turma" subtitle="crie uma turma para adicionar pessoas" />

                <CustomInput
                    placeholder="Nome da turma"
                    onChangeText={setGroup}
                />

                <CustomButton
                    text="Criar"
                    style={{ marginTop: 20 }}
                    onPress={handleNew}
                />
            </s.Content>
        </s.Container>
    )
}