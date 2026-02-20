import { http } from "../../../shared/constants/api/api"
import type { ProductsAll, ProductsResponse } from "../types/products-types"

export const productsApi = {
    getAll: async () => {
        const { data } = await http.get<ProductsResponse>('/products');
        return data;
    },

    delete: async ({ id }: { id: number }) => {
        const { data } = await http.delete(`/products/${id}`);
        return data;
    },

    create: async ({ payload }: { payload: Omit<ProductsAll, 'id'> }) => {
        const { data } = await http.post<ProductsAll>('/products/add', payload);
        return data;
    },

    update: async ({ id, payload }: { id: number, payload: Partial<ProductsAll> }) => {
        const { data } = await http.patch<ProductsAll>(`/products/${id}`, payload);
        return data;
    }
};