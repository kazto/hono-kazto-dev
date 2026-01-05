import { type FC, type PropsWithChildren } from 'hono/jsx'

type Props = {
    title?: string
}

const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
    return (
        <div>{children}</div>
    )
}

export default Layout
