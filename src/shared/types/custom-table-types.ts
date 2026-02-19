import type { ReactNode } from "react";

export interface Column<T> {
    key: keyof T | string;
    header: string;
    render: (item: T) => ReactNode;
};

export interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
    isLoading?: boolean;
};