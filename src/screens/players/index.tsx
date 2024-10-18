import { useEffect, useState, useRef } from "react"
import { Alert, FlatList, KeyboardAvoidingView, TextInput } from "react-native"
import {
    ButtonIcon,
    CustomButton,
    CustomInput,
    Filter,
    Header,
    Highlight,
    ListEmpty,
    Loading,
    PlayerCard
} from "@components"
import * as s from "./styled"
import { useNavigation, useRoute } from "@react-navigation/native"
import { useToast } from "react-native-toast-notifications"
import { playerAddByGroup } from "@storage/player/playerAddByGroup"
import { AppError } from "@utils/AppError"
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam"
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO"
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup"
import { groupRemoveByName } from "@storage/group/groupRemoveByName"

type RouteParams = {
    group: string
}

type Team = "TIME A" | "TIME B"

export function Players() {
    const [isLoadingPLayers, setIsLoadingPLayers] = useState(true)
    const [newPlayerName, setNewPlayerName] = useState("")
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
    const [teamOneIsActive, setTeamOneIsActive] = useState(true)
    const [teamTwoIsActive, setTeamTwoIsActive] = useState(false)

    const team: Team = teamOneIsActive ? "TIME A" : "TIME B"

    const inputRef = useRef<TextInput>(null)

    const navigation = useNavigation()
    const route = useRoute()
    const toast = useToast();

    const { group } = route.params as RouteParams

    async function getPlayersByTeam() {
        setIsLoadingPLayers(true)

        try {
            const data = await playersGetByGroupAndTeam(group, team)
            setPlayers(data)
        } catch (error) {
            console.log('error :>> ', error);
            toast.show(`Não foi possível carregar os participantes do ${team}`, { type: "danger" })
        } finally {
            setIsLoadingPLayers(false)
        }
    }

    async function handleAddPlayer() {
        const formatedNewPlayerName = newPlayerName.trim()

        const newPlayer = {
            name: formatedNewPlayerName,
            team
        }

        try {
            if (formatedNewPlayerName === "") {
                return toast.show("Digite o nome do participante.", { type: "warning" })
            }

            await playerAddByGroup(newPlayer, group)

            setNewPlayerName("")
            inputRef.current?.blur()

            getPlayersByTeam()
        } catch (error) {
            if (error instanceof AppError) {
                toast.show(error.message, { type: "warning" })
            } else {
                console.log('error :>> ', error);
                toast.show("Não foi possível adicionar o participante.", { type: "danger" })
            }
        }
    }

    async function handleRemovePlayer(playerName: string) {
        try {
            await playerRemoveByGroup(playerName, group)
            getPlayersByTeam()
        } catch (error) {
            console.log('error :>> ', error);
        }
    }

    async function removeGroup() {
        try {
            await groupRemoveByName(group)
            navigation.navigate("groups")
        } catch (error) {
            console.log('error :>> ', error);
            toast.show("Não foi possível remover a turma.", { type: "danger" })
        }
    }

    async function handleRemoveGroup() {
        Alert.alert(
            "Remover",
            "Deseja remover a turma?",
            [
                { text: "Não", style: "cancel" },
                { text: "Sim", onPress: () => removeGroup() }
            ]
        )
    }

    useEffect(() => {
        getPlayersByTeam()
    }, [team])

    return (
        <s.Container>
            <Header showBackButton />

            <KeyboardAvoidingView
                style={{ flex: 1 }}
            >
                <Highlight
                    title={group}
                    subtitle="adicione a galera e separe os times"
                />

                <s.Form>
                    <CustomInput
                        inputRef={inputRef}
                        placeholder="Nome do participante"
                        autoCorrect={false}
                        value={newPlayerName}
                        onChangeText={setNewPlayerName}
                        onSubmitEditing={handleAddPlayer}
                        returnKeyType="done"
                    />

                    <ButtonIcon
                        icon="add"
                        onPress={handleAddPlayer}
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

                {isLoadingPLayers ? <Loading /> : (
                    <FlatList
                        data={players}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) =>
                            <PlayerCard
                                name={item.name}
                                onRemove={() => handleRemovePlayer(item.name)}
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
                )}


                <CustomButton
                    text="Remover turma"
                    type="SECONDARY"
                    onPress={handleRemoveGroup}
                />
            </KeyboardAvoidingView>
        </s.Container>
    )
}