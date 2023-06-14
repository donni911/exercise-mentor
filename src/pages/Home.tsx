import { Heading, VStack } from "@chakra-ui/react"
import UsersTableList from "../components/users-table/UsersTableList"
const Home = () => {
    return (
        <VStack>
            <Heading>Table Users</Heading>
            <UsersTableList />
        </VStack>
    )
}

export default Home
