import LinkButton from './components/LinkButton'
import Layout from './components/Layout'
import './styles.scss'

type LinkItem = {
    title: string
    url: string
    description: string
    featured?: boolean
}

const groups: Array<{ heading: string; links: LinkItem[] }> = [
    {
        heading: 'Profile',
        links: [
            { title: 'About', url: '/about', description: 'プロフィールと Vision / Mission / Value', featured: true },
            { title: 'Curriculum Vitae', url: '/cv', description: '職務経歴書', featured: true },
            { title: 'GitHub', url: 'https://github.com/kazto', description: 'コードと個人開発', featured: true },
            { title: 'Zenn', url: 'https://zenn.dev/kazto', description: '技術記事', featured: true },
        ],
    },
    {
        heading: 'Career',
        links: [
            { title: 'LAPRAS', url: 'https://lapras.com/public/kazto_dev', description: 'エンジニアプロフィール' },
            { title: 'YOUTRUST', url: 'https://youtrust.jp/users/kazto', description: 'キャリアSNS' },
            { title: 'Wantedly', url: 'https://www.wantedly.com/users/75211914', description: 'プロフィール' },
            { title: 'LinkedIn', url: 'https://www.linkedin.com/in/kazto/', description: 'プロフィール（英語）' },
        ],
    },
    {
        heading: 'Connect & Writing',
        links: [
            { title: 'X (Twitter)', url: 'https://x.com/kazto_dev', description: '@kazto_dev' },
            { title: 'Bluesky', url: 'https://bsky.app/profile/kazto.dev', description: '@kazto.dev' },
            { title: 'note', url: 'https://note.com/kazto_dev', description: 'エッセイ・雑記' },
            { title: 'Speaker Deck', url: 'https://speakerdeck.com/kazto', description: '登壇資料' },
            { title: 'Blog', url: 'https://blog.kazto.dev', description: 'メンテナンス中' },
            { title: 'tamamoku .tokyo', url: 'https://tamamoku.tokyo/', description: '多摩地区もくもく会（活動休止中）' },
        ],
    },
]

const skills = ['Backend', 'Frontend', 'Flutter', 'Infra / CI-CD', 'Ruby / Rails', 'TypeScript']

const IndexPage = () => {
    return (
        <Layout title="kazto.dev">
            <section className="hero">
                <div className="hero-text">
                    <p className="hero-eyebrow">Software Engineer — Tokyo</p>
                    <h1 className="hero-name">Kazto Takahashi</h1>
                    <p className="hero-tagline">
                        Engineering More Interesting.
                        <span className="hero-tagline-ja">しごとを、もっと、おもしろく。</span>
                    </p>
                    <p className="hero-lead">
                        サーバサイドを中心に、フロントエンドからインフラ・CI/CDまで。
                        仕事が『おもしろい』と感じる人を増やしたい、ソフトウェアエンジニアです。
                    </p>
                    <ul className="hero-skills">
                        {skills.map((s) => (
                            <li key={s}>{s}</li>
                        ))}
                    </ul>
                    <div className="hero-actions">
                        <a className="btn-primary" href="/about">About を見る</a>
                        <a className="btn-ghost" href="/cv">職務経歴書</a>
                    </div>
                </div>
                <figure className="hero-photo">
                    <img src="/images/elia-clerici-XIrIWKCQykg-unsplash.webp" alt="" />
                    <figcaption>
                        Photo by{' '}
                        <a href="https://unsplash.com/@ielix?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Elia Clerici</a>{' '}
                        on <a href="https://unsplash.com/">Unsplash</a>
                    </figcaption>
                </figure>
            </section>

            {groups.map((group) => (
                <section className="bento-section" key={group.heading}>
                    <h2 className="bento-heading">{group.heading}</h2>
                    <div className="bento-grid">
                        {group.links.map((link) => (
                            <LinkButton
                                key={link.title}
                                title={link.title}
                                url={link.url}
                                description={link.description}
                                featured={link.featured}
                            />
                        ))}
                    </div>
                </section>
            ))}
        </Layout>
    )
}

export default IndexPage
