import type { User } from '../interfaces'

type Props = {
    data: User
}

const ListItem = ({ data }: Props) => (
    <a href={`/users/${data.id}`}>
        {data.id}:{data.name}
    </a>
)

export default ListItem
