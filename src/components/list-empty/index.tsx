import * as s from "./styled"

type Props = {
    message: string
}

export const ListEmpty = ({ message }: Props) => {
    return (
        <s.Container>
            <s.Message>
                {message}
            </s.Message>
        </s.Container>
    )
}