import { Box, Flex, Grid, GridItem, Link } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const links = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Another',
            path: '/another'
        }]

    return (
        <Box bgColor="#73A9AD" my={4} p={2} borderRadius={4}>
            <Flex gap={4}>
                {links.map(link => (
                    <Link key={link.path} as={NavLink} to={link.path} p={2} _hover={{ color: '#F5F0BB', textDecoration: 'none' }} >
                        {link.name}
                    </Link>
                ))}
            </Flex>
        </Box>
    )
}

export default Navbar
