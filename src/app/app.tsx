import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalsProvider } from "@mantine/modals";
import '@mantine/core/styles.css';
import { RouterProvider } from "react-router-dom";
import { router } from "../shared/constants/routes/router";
import { useState } from "react";

export const App = () => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <MantineProvider>
                <ModalsProvider>
                    <RouterProvider router={router} />
                </ModalsProvider>
            </MantineProvider>
        </QueryClientProvider>
    )
}