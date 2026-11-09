import { type FC, type PropsWithChildren } from 'hono/jsx'

type Props = {
    title?: string
}

const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
    return (
        <div className="site">
            <header className="site-header">
                <a href="/" className="site-brand">kazto<span className="site-brand-dot">.dev</span></a>
                <nav className="site-nav">
                    <a href="/about">About</a>
                    <a href="/cv">Curriculum Vitae</a>
                    <a href="https://github.com/kazto" target="_blank" rel="noreferrer">GitHub</a>
                </nav>
            </header>
            <main>{children}</main>
            <footer className="site-footer">
                <span>© Kazto Takahashi — kazto.dev</span>
            </footer>
        </div>
    )
}

export default Layout
