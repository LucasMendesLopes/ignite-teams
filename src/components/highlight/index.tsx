import * as s from "./styled"

type Props = {
    title: string
    subtitle: string
}

export const Highlight = ({ title, subtitle }: Props) => {
    return (
        <s.Container>
            <s.Title>
                {title}
            </s.Title>

            <s.SubTitle>
                {subtitle}
            </s.SubTitle>
        </s.Container>
    )
}