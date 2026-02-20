import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { productsApi } from "../api/products-api"
import type { ProductsResponse } from "../types/products-types"
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
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['products'] });

            toast.success(data.message)
        },
        onError: (err) => {
            toast.error(err.message)
        },
    });
};