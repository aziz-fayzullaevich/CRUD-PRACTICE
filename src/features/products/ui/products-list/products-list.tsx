import { ActionIcon, Button, Flex, Group, Pagination, Text, Title } from "@mantine/core";
import { modals } from '@mantine/modals';
import type { Column } from "../../../../shared/types/custom-table-types";
import type { ProductsAll } from "../../types/products-types";
import { useCreateProduct, useDeleteProduct, useFetchProducts, useUpdateProduct } from "../../queries/products-queries";
import { CustomTable } from "../../../../shared/ui/custom-table";
import { AddCircle, Edit, MinusCirlce } from 'iconsax-reactjs';
import { DeleteModal } from "../../../../shared/constants/delete-modal";
import { ProductsForm } from "../products-form";

export const ProductsList = () => {
    const { data, isLoading } = useFetchProducts();
    const products = data ? data.products : [];

    const { mutateAsync: mutateAsyncDelete, isPending: isPendingDelete } = useDeleteProduct()
    const { mutateAsync: createMutate } = useCreateProduct();
    const { mutateAsync: updateMutate } = useUpdateProduct();

    const deleteFn = (id: number) => {
        modals.open({
            title: <Text fw={700}>Удалить данные</Text>,
            children: (
                <DeleteModal onDelete={() => mutateAsyncDelete({ id })} />
            )
        })
    };

    const openCreateModal = () => {
        modals.open({
            title: 'Создать новый продукт',
            children: <ProductsForm onSubmit={async (formData) => {
                await createMutate({payload: formData});
                modals.closeAll();
            }} />
        });
    };

    const openUpdateModal = (product: ProductsAll) => {
        modals.open({
            title: `Редактировать: ${product.title}`,
            children: <ProductsForm
                initialData={product}
                onSubmit={async (formData) => {
                    await updateMutate({ id: product.id, payload: formData });
                    modals.closeAll();
                }}
            />
        });
    };

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
            render: (product) => <Flex justify="center" align="center" gap="sm">
                <ActionIcon variant="subtle" size="lg" onClick={() => openUpdateModal(product)}>
                    <Edit color="#555555" />
                </ActionIcon>
                <ActionIcon variant="subtle" size="lg"
                    onClick={() => deleteFn(product.id)}
                    loading={isPendingDelete}>
                    <MinusCirlce color="#555555" />
                </ActionIcon>
            </Flex>
        },
    ];

    return (
        <div className="container">
            <Group pt={'10px'} justify="center" gap={10}>
                <Flex justify={'space-between'} style={{ width: '100%' }} >
                    <Title size={'xl'}>Продукты</Title>
                    <Button leftSection={<AddCircle />} size="md" variant="gradient" onClick={openCreateModal}>Создать</Button>
                </Flex>
                <CustomTable
                    data={products}
                    columns={columns}
                    isLoading={isLoading}
                />
                <Pagination total={10} color="gray" size="sm" radius="xl" mt={10} />
            </Group>
        </div>
    )
};