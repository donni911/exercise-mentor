import { Box, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import UserTableItem from './UserTableItem'
import users from '../../data/users'

const UsersTableList = () => {
    return (
        <Box m={6} w={'100%'} overflow={'auto'} maxHeight={'500px'}>
            <Table colorScheme='whiteAlpha'>
                <Thead position="sticky" top={0} bgColor="#73A9AD">
                    <Tr>
                        <Th color={'white'}>Photo</Th>
                        <Th color={'white'}>Name</Th>
                        <Th color={'white'}>Surname</Th>
                        <Th color={'white'}>Job</Th>
                        <Th color={'white'}>Company Name</Th>
                        <Th color={'white'}>Salary</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {users.length && users.map((user) => (
                        <UserTableItem key={user.id} user={user} />
                    ))}
                </Tbody>
            </Table>
        </Box>
    )
}

export default UsersTableList
