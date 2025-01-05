export interface Cart {
    genre: string;
    image: string;
    name: string;
    price: number;
    isNew?: boolean;
    description?: string;
}

export interface CartDetails {
    name: string;
    price: number;
}
