import { Td, Tr, Image } from '@chakra-ui/react'

import { User } from '../../data/users'

interface Props {
    user: User
}
const UserTableItem = ({ user }: Props) => {
    return <Tr>
        <Td>
            <Image
                boxSize='100px'
                objectFit='cover'
                src={user.photo ? user.photo : '/vite.svg'}
            />
        </Td>
        <Td>{user.name ? user.name : '-'}</Td>
        <Td>{user.surname ? user.surname : '-'}</Td>
        <Td>{user.job ? user.job : '-'}</Td>
        <Td>{user.companyName ? user.companyName : '-'}</Td>
        <Td>{user.salary ? user.salary + '$' : '-'}</Td>
    </Tr>

}

export default UserTableItem
