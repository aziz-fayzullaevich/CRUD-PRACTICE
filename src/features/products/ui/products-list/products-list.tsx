import { ActionIcon, Flex, Text } from "@mantine/core";
import { modals } from '@mantine/modals';
import type { Column } from "../../../../shared/types/custom-table-types";
import type { ProductsAll } from "../../types/products-types";
import { useFetchProducts } from "../../queries/products-queries";
import { CustomTable } from "../../../../shared/ui/CustomTable";
import { Edit, MinusCirlce } from 'iconsax-reactjs';
import { DeleteProduct } from "../delete-product";

export const ProductsList = () => {
    const { data, isLoading } = useFetchProducts();
    const products = data ? data.products : [];

    const columns: Column<ProductsAll>[] = [
        {
            key: 'id',
            header: 'ID',
            render: (product) => <Text>{product.id}</Text>
        },
        {
            key: 'title',
            header: 'Название товара',
            render: (product) => <Text>{product.title}</Text>
        },
        {
            key: 'description',
            header: 'Описание',
            render: (product) => <Text>{product.description}</Text>
        },
        {
            key: 'category',
            header: 'Категория',
            render: (product) => <Text>{product.category}</Text>
        },
        {
            key: 'price',
            header: 'Цена',
            render: (product) => <Text>{Math.floor(product.price)}$</Text>
        },
        {
            key: 'actiond',
            header: 'Действия',
            render: () => <Flex justify="center" align="center" gap="sm">
                <ActionIcon variant="subtle" size="lg">
                    <Edit color="#555555" />
                </ActionIcon>
                <ActionIcon variant="subtle" size="lg" onClick={() => {
                    modals.open({
                        title: 'Вы действительно хотите удалить?',
                        children: <DeleteProduct />
                    })
                }}>
                    <MinusCirlce color="#555555" />
                </ActionIcon>
            </Flex>
        },
    ];

    return (
        <div className="container">
            <CustomTable
                data={products}
                columns={columns}
                isLoading={isLoading}
            />
        </div>
    )
};