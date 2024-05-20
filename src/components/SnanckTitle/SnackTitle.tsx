
import { ReactNode } from "react"
import { Title } from "./styles"

interface TitleProps {
    children: ReactNode
}

export function SnackTitles({children}:TitleProps) {
    return <Title>{children}</Title>
}