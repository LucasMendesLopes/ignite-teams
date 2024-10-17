import { CustomButton, GroupCard, Header, Highlight, ListEmpty } from "@components";
import * as s from "./styled"
import { FlatList } from "react-native";
import { useCallback, useState } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { groupsGetAll } from "@storage/group/groupsGetAll";


export function Groups() {
    const [groups, setGroups] = useState<string[]>([])

    const navigation = useNavigation()

    const handleNewGroup = () => {
        navigation.navigate('new')
    }

    async function getGroups() {
        try {
            const data = await groupsGetAll()
            setGroups(data)
        } catch (error) {
            console.log('error :>> ', error);
        }
    }

    useFocusEffect(useCallback(() => {
        getGroups()
    }, []))

    return (
        <s.Container>
            <Header />

            <Highlight title="Turmas" subtitle="jogue com a sua turma" />

            <FlatList
                data={groups}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <GroupCard title={item} />}
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

            <CustomButton
                text="Criar nova turma"
                onPress={handleNewGroup}
            />
        </s.Container>
    );
}

