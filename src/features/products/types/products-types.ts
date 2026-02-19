export interface ProductsAll {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
};

export interface CreateProduct extends Omit<ProductsAll, 'id'> { };

export type ProductsResponse = {
    products: ProductsAll[];
    total: number;
    skip: number;
    limit: number;
};