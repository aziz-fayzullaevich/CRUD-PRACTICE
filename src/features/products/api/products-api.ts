import { http } from "../../../shared/constants/api/api"
import type { ProductsResponse } from "../types/products-types"

export const productsApi = {
    getAll: async () => {
        const { data } = await http.get<ProductsResponse>('/products');
        return data;
    },

    delete: async ({ id }: { id: number}) => {
        const { data } = await http.delete(`/products/${id}`);
        return data;
    }
};