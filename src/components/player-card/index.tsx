
import { ButtonIcon } from "../button-icon"
import * as s from "./styled"

type Props = {
    name: string
    onRemove: () => void
}

export const PlayerCard = ({ name, onRemove }: Props) => {
    return (
        <s.Container>
            <s.Icon name="person" />

            <s.Name>
                {name}
            </s.Name>

            <ButtonIcon
                icon="close"
                type="SECONDARY"
                onPress={onRemove}
            />
        </s.Container>
    )
}