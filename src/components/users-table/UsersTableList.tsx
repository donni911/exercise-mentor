import { Box, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import UserTableItem from './UserTableItem'
import users from '../../data/users'

const UsersTableList = () => {
    const tableValues = ['Photo', 'Name', 'Surname', 'Job', 'Company Name', 'Salary']

    return (
        <Box m={6} w={'100%'} overflow={'auto'} maxHeight={'500px'}>
            <Table colorScheme='whiteAlpha'>
                <Thead position="sticky" top={0} bgColor="#73A9AD">
                    <Tr>
                        {tableValues.map((value) => (
                            <Th key={value} color={'white'}>{value}</Th>
                        ))}
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
