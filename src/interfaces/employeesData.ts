import { Role } from "./roles"

export interface EmployeesData {
    id: number
    name: string
    roles: Role
    admissionDate: string
    phone: string
    avatar: string
}