import { Center, Loader, Text, Table } from "@mantine/core";
import type { TableProps } from "../types/custom-table-types";
import type { ReactNode } from "react";

export function CustomTable<T extends { id: string | number }>({ data, columns, isLoading }: TableProps<T>) {
    if (isLoading) {
        return (
            <Center h={200}>
                <Loader color="gray" />
            </Center>
        )
    };

    if (!data.length) {
        return (
            <Center h={200}>
                <Text>Данных пока нет</Text>
            </Center>
        )
    };

    return (
        <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead>
                <Table.Tr>
                    {columns.map(col => (
                        <Table.Th key={String(col.key)}>
                            {col.header}
                        </Table.Th>
                    ))}
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                {data.map(item => (
                    <Table.Tr key={String(item.id)}>
                        {columns.map(col => (
                            <Table.Td key={String(col.key)}>
                                {col.render ? col.render(item) : (item[col.key as keyof T] as ReactNode)}
                            </Table.Td>
                        ))}
                    </Table.Tr>
                ))}
            </Table.Tbody>
        </Table>
    )
}