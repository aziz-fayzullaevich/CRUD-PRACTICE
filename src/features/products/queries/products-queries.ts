import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { productsApi } from "../api/products-api"
import type { ProductsAll, ProductsResponse } from "../types/products-types"
import { toast } from 'react-toastify';

export const useFetchProducts = () => {
    return useQuery<ProductsResponse>({
        queryKey: ['products'],
        queryFn: productsApi.getAll
    });
};

export const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: productsApi.delete,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });

            toast.success('Дата успешно удалён!')
        },
        onError: () => {
            toast.error('Ошибка при удалении!')
        },
    });
};

export const useCreateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: any) => productsApi.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
            toast.success('Продукт успешно создан!')
        },
        onError: () => {
            toast.error('Ошибка при добавлении товара!')
        }
    });
};

export const useUpdateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, payload }: { id: number, payload: Partial<ProductsAll> }) => productsApi.update({ id, payload }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
            toast.success('Данные обновлены!');
        },
        onError: () => {
            toast.error('Ошибка при обнавлении!')
        }
    })
};