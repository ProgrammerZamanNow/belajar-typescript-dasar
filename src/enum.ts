export enum CustomerType {
    PLATINUM = "PLATINUM",
    REGULAR = "REGULAR",
    GOLD = "GOLD"
}

export type Customer = {
    id: number;
    name: string;
    type: CustomerType;
}
