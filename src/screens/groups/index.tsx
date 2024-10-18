import { CustomButton, GroupCard, Header, Highlight, ListEmpty, Loading } from "@components";
import * as s from "./styled"
import { FlatList } from "react-native";
import { useCallback, useState } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { groupsGetAll } from "@storage/group/groupsGetAll";
import { useToast } from "react-native-toast-notifications";


export function Groups() {
    const [isLoadingGroups, setIsLoadingGroups] = useState(true)
    const [groups, setGroups] = useState<string[]>([])

    const navigation = useNavigation()

    const toast = useToast()

    const handleNewGroup = () => {
        navigation.navigate('new')
    }

    async function getGroups() {
        setIsLoadingGroups(true)

        try {
            const data = await groupsGetAll()
            setGroups(data)
        } catch (error) {
            console.log('error :>> ', error);
            toast.show("Não foi possível carregar as turmas.", { type: "danger" })
        } finally {
            setIsLoadingGroups(false)
        }
    }

    function handleOpenGroup(group: string) {
        navigation.navigate('players', { group })
    }

    useFocusEffect(useCallback(() => {
        getGroups()
    }, []))

    return (
        <s.Container>
            <Header />

            <Highlight title="Turmas" subtitle="jogue com a sua turma" />

            {isLoadingGroups ? <Loading /> : (
                <FlatList
                    data={groups}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => <GroupCard title={item} onPress={() => handleOpenGroup(item)} />}
                    contentContainerStyle={[
                        { gap: 12, paddingBottom: 50 },
                        groups.length === 0 && { flex: 1 }
                    ]}
                    style={{ marginBottom: 24 }}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <ListEmpty
                            message="Que tal cadastrar a primeira turma?"
                        />
                    )}
                />
            )}

            <CustomButton
                text="Criar nova turma"
                onPress={handleNewGroup}
            />
        </s.Container>
    );
}

