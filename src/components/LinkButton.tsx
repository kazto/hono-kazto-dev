type Props = {
    title: string
    url: string
}

const LinkButton = ({ title, url }: Props) => {
    return (
        <a href={url} className="linkbutton-anchor">
            <div className="linkbutton-css">
                {title}
            </div>
        </a>
    )
}

export default LinkButton
