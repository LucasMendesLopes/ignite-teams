import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { CustomButton, CustomInput, Header, Highlight } from "@components"
import * as s from "./styled"
import { groupCreate } from "@storage/group/groupCreate"
import { AppError } from "@utils/AppError"
import { useToast } from "react-native-toast-notifications"

export const NewGroup = () => {
    const [group, setGroup] = useState("")

    const toast = useToast();

    const navigation = useNavigation()

    const handleNew = async () => {
        const formatedGroup = group.trim()

        try {
            if (formatedGroup === "") {
                return toast.show("Digite o nome da turma.", { type: "warning" })
            }

            await groupCreate(formatedGroup)
            navigation.navigate('players', { group: group })
        } catch (error) {
            if (error instanceof AppError) {
                toast.show(error.message, { type: "warning" })
            } else {
                toast.show("Não foi possível criar uma nova turma.", { type: "danger" })
                console.log('error :>> ', error);
            }
        }
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