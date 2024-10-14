import { CustomButton, CustomInput, Header, Highlight } from "@components"
import * as s from "./styled"

export const NewGroup = () => {
    return (
        <s.Container>
            <Header showBackButton />

            <s.Content>
                <s.Icon />

                <Highlight title="Nova Turma" subtitle="crie uma turma para adicionar pessoas" />

                <CustomInput placeholder="Nome da turma" />

                <CustomButton text="Criar" />
            </s.Content>
        </s.Container>
    )
}