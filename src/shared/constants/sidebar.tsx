import { NavLink as RouterNavLink } from 'react-router-dom';
import { Stack, NavLink, Text, Box } from '@mantine/core';
import { NAV_ITEMS } from './navigation';

export const Sidebar = () => {
    return (
        <Box w={300} p="md" style={{ borderRight: '1px solid #eee', height: '100vh' }}>
            <Text fw={700} size="xl" mb="xl" pl="md">CRUD | PRCTICE</Text>

            <Stack gap={4}>
                {NAV_ITEMS.map((item) => (
                    <NavLink
                        key={item.link}
                        component={RouterNavLink}
                        to={item.link}
                        label={item.label}
                        leftSection={item.icon}
                        styles={{
                            root: {
                                borderRadius: '8px',
                                '&[data-active]': {
                                    backgroundColor: 'var(--mantine-color-blue-light)',
                                },
                            },
                        }}
                    />
                ))}
            </Stack>
        </Box>
    );
};