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
                src={user.photo}
            />
        </Td>
        <Td>{user.name}</Td>
        <Td>{user.surname}</Td>
        <Td>{user.job}</Td>
        <Td>{user.companyName}</Td>
        <Td>{user.salary}$</Td>
    </Tr>

}

export default UserTableItem
