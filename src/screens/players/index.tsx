import { ButtonIcon, CustomInput, Filter, Header, Highlight } from "@components"
import * as s from "./styled"
import { useState } from "react"
import { FlatList, Text } from "react-native"

export function Players() {
    const [players, setPlayers] = useState(["Rodrigo", "Diego", "Lucas", "Matheus"])
    const [teamOneIsActive, setTeamOneIsActive] = useState(true)
    const [teamTwoIsActive, setTeamTwoIsActive] = useState(false)

    return (
        <s.Container>
            <Header showBackButton />

            <Highlight
                title="Nome da turma"
                subtitle="adicione a galera e separe os times"
            />

            <s.Form>
                <CustomInput
                    placeholder="Nome do participante"
                    autoCorrect={false}
                />

                <ButtonIcon
                    icon="add"
                />
            </s.Form>

            <s.FiltersContainer>
                <Filter
                    title="time a"
                    isActive={teamOneIsActive}
                    onPress={() => {
                        if (teamOneIsActive) return null
                        else {
                            setTeamTwoIsActive(false)
                            setTeamOneIsActive(true)
                        }
                    }}
                />

                <Filter
                    title="time b"
                    isActive={teamTwoIsActive}
                    onPress={() => {
                        if (teamTwoIsActive) return null
                        else {
                            setTeamOneIsActive(false)
                            setTeamTwoIsActive(true)
                        }
                    }}
                />

                <s.NumberOfPlayers>
                    {players.length}
                </s.NumberOfPlayers>
            </s.FiltersContainer>

            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => <Text>{item}</Text>}
            />
        </s.Container>
    )
}