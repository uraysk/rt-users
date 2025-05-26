export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: number;
    address: {
        city: string;
        street: string;
    };
    company: {
        name: string;
    };
};
