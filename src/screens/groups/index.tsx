import { GroupCard, Header, Highlight } from "@components";
import * as s from "./styled"

export function Groups() {
    return (
        <s.Container>
            <Header />

            <Highlight title="Turmas" subtitle="jogue com a sua turma" />

            <GroupCard title="Nome da turma" />
        </s.Container>
    );
}

