import Layout from './components/Layout'

const AboutPage = () => (
    <Layout title="About">
        <div className="about">
            <p className="hero-eyebrow">About</p>
            <h1 className="page-title">I'm Kazto.</h1>
            <p className="hero-lead">ソフトウェアエンジニア。サーバサイド・バックエンドを中心に、幅広く開発しています。</p>

            <section className="about-card">
                <h2>What I do</h2>
                <ul className="about-list">
                    <li>サーバサイド・バックエンド</li>
                    <li>フロントエンド</li>
                    <li>Flutter</li>
                    <li>インフラ・CI/CD</li>
                </ul>
                <p>
                    職務経歴は「<a href={'/cv'}>Curriculum Vitae</a>」をご参照ください。
                    お仕事のご相談は、各種SNSからご連絡ください。
                </p>
            </section>

            <section className="about-card">
                <h2>Vision</h2>
                <p className="vmv">Engineering More Interesting.</p>
                <p className="vmv-ja">しごとを、もっと、おもしろく。</p>
                <h2>Mission</h2>
                <ul className="about-list">
                    <li>ともに成長する</li>
                    <li>三方良しを実現する</li>
                    <li>つらみを排し、仕事に熱中できる環境を提供する</li>
                </ul>
                <h2>Value</h2>
                <ul className="about-list">
                    <li>いいオヤジたる</li>
                    <li>調和を提供する</li>
                    <li>革新を追求する</li>
                </ul>
            </section>

            <section className="about-card">
                <p>仕事とは、いつも困難が降りかかり、つらく、きびしいものです。</p>
                <p>しかし、仕事が我が事であるかぎり、それは乗り越えるべき壁であると考えています。</p>
                <p>一方で、つらさ、きびしさに打ち負けてしまう方も数多くいらっしゃいます。</p>
                <p>少しでも、仕事が『おもしろい』ものであると感じることができる方を増やしたいという想いで勤めています。</p>
            </section>

            <p>
                <a href="/">← トップへ戻る</a>
            </p>
        </div>
    </Layout>
)

export default AboutPage
