import {
    ButtonIcon,
    CustomButton,
    CustomInput,
    Filter,
    Header,
    Highlight,
    ListEmpty,
    PlayerCard
} from "@components"
import * as s from "./styled"
import { useState } from "react"
import { FlatList } from "react-native"
import { useRoute } from "@react-navigation/native"

const initialPlayers = [
    "Lucas",
    "Miguel",
    "Gabriel",
    "Felipe",
    "Matheus",
    "Rafael",
    "Gustavo",
    "Leonardo",
    "João",
    "Bruno",
    "André",
    "Daniel",
    "Thiago",
    "Vinícius",
    "Carlos"
]

type RouteParams = {
    group: string
}

export function Players() {
    const [players, setPlayers] = useState(initialPlayers)
    const [teamOneIsActive, setTeamOneIsActive] = useState(true)
    const [teamTwoIsActive, setTeamTwoIsActive] = useState(false)

    const route = useRoute()

    const { group } = route.params as RouteParams

    return (
        <s.Container>
            <Header showBackButton />

            <Highlight
                title={group}
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
                renderItem={({ item }) =>
                    <PlayerCard
                        name={item}
                        onRemove={() => { }}
                    />
                }
                style={{ marginTop: 19, marginBottom: 24 }}
                contentContainerStyle={[
                    { gap: 12, paddingBottom: 50 },
                    players.length === 0 && { flex: 1 }
                ]}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message="Não há pessoas nesse time."
                    />
                )}
            />

            <CustomButton
                text="Remover turma"
                type="SECONDARY"
                onPress={() => { }}
            />
        </s.Container>
    )
}