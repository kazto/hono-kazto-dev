import LinkButton from './components/LinkButton'
import Layout from './components/Layout'
import './styles.scss'

const IndexPage = () => {
    const links = [
        { title: 'About', url: '/about' },
        { title: 'Curriculum Vitae', url: '/cv' },
        { title: 'X(Twitter)', url: 'https://x.com/kazto_dev' },
        { title: 'Bluesky', url: 'https://bsky.app/profile/kazto.dev' },
        { title: 'Lapras', url: 'https://lapras.com/public/kazto_dev' },
        { title: 'YOUTRUST', url: 'https://youtrust.jp/users/kazto' },
        { title: 'GitHub', url: 'https://github.com/kazto' },
        { title: 'Zenn', url: 'https://zenn.dev/kazto' },
        { title: 'Blog(Under Maintainance)', url: 'https://blog.kazto.dev' },
        { title: 'Wantedly', url: 'https://www.wantedly.com/users/75211914' },
        { title: 'LinkedIn', url: 'https://www.linkedin.com/in/kazto/' },
        { title: 'Note.com', url: 'https://note.com/kazto_dev' },
        { title: 'SpeakerDeck', url: 'https://speakerdeck.com/kazto' },
        { title: 'tamamoku .tokyo', url: 'https://tamamoku.tokyo/' },
    ]

    return (
        <Layout title="kazto.dev">
            <div className="logobox">
                <img className="logo" src="images/kazto_dev_logo.webp" alt="kazto.dev" />
            </div>
            <div className="linkdiv">
                <ul className="linkul">
                    {links.map((link, i) => (
                        <li className="linkli" key={i}>
                            <LinkButton title={link.title} url={link.url} />
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export default IndexPage
