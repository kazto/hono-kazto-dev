type Props = {
    title: string
    url: string
    description?: string
    featured?: boolean
}

const LinkButton = ({ title, url, description, featured }: Props) => {
    const external = url.startsWith('http')
    return (
        <a
            href={url}
            className="linkbutton-anchor"
            {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
            <div className={featured ? 'bento-card bento-card-featured' : 'bento-card'}>
                <div className="bento-card-head">
                    <span className="bento-card-title">{title}</span>
                    <span className="bento-card-arrow" aria-hidden="true">↗</span>
                </div>
                {description ? <p className="bento-card-desc">{description}</p> : null}
            </div>
        </a>
    )
}

export default LinkButton
