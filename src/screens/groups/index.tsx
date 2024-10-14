import { CustomButton, GroupCard, Header, Highlight, ListEmpty } from "@components";
import * as s from "./styled"
import { FlatList } from "react-native";
import { useState } from "react";

const initialGroups = [
    { id: "1", title: "Galera da Macle" },
    { id: "2", title: "Time dos Coders" },
    { id: "3", title: "Leões da Beira Rio" },
    { id: "4", title: "DevSquad United" },
    { id: "5", title: "Marketing FC" },
    { id: "6", title: "Time dos Inovadores" },
    { id: "7", title: "Logística FC" },
    { id: "8", title: "RH United" },
    { id: "9", title: "Comercial Stars" },
    { id: "10", title: "Time dos Criativos" },
    { id: "11", title: "Financeiros FC" },
    { id: "12", title: "Support FC" },
    { id: "13", title: "Analistas FC" },
    { id: "14", title: "Jurídico United" },
    { id: "15", title: "Desbravadores da TI" }
];

export function Groups() {
    const [groups, setGroups] = useState(initialGroups)

    return (
        <s.Container>
            <Header />

            <Highlight title="Turmas" subtitle="jogue com a sua turma" />

            <FlatList
                data={groups}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <GroupCard title={item.title} />}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                style={{ marginBottom: 32 }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<ListEmpty message="Que tal cadastrar a primeira turma?" />}
            />

            <CustomButton text="Criar nova turma" />
        </s.Container>
    );
}

