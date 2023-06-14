import { Container, VStack } from "@chakra-ui/react"
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <VStack>
            <Container maxW='6xl'>
                <Navbar></Navbar>
                <Outlet />
                <Footer></Footer>
            </Container>
        </VStack>
    )
}

export default Layout
