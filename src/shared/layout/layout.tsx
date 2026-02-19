import { Flex, Box } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../constants/sidebar';

const Layout = () => {
    return (
        <Flex h="100vh">
            <Sidebar />

            <Box style={{ flex: 1, overflowY: 'auto' }} p="md">
                <Outlet />
            </Box>
        </Flex>
    );
};

export default Layout;