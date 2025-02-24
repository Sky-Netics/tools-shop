export interface Item {
    get_total_price: number;
    id: number;
    product_name: string;
    product_image: string;
    product_price: string;
    quantity: number;
};

export interface CartItmes {
    get_total_price: number;
    item_count: number;
    items: Item[];
};