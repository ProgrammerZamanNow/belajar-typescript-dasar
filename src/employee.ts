export interface Employee {
    id: string;
    name: string;
    division: string;
}

export interface Manager extends Employee {
    numberOfEmployees: number;
}
