import styled from "styled-components"
import { EmployeesData } from "../../interfaces/employeesData"

interface EmployeeProps {
    employees: EmployeesData[]
}

export const EmployeesList = ({ employees }: EmployeeProps) => {
    function changeDateFormat(date: string) {
        const onlyDate = new Date(date).toLocaleDateString('pt-BR')
        return(onlyDate)
    }

    return (
        <Table>
            <thead>
                <tr>
                    <th>FOTO</th>
                    <th>NAME</th>
                    <th>CARGO</th>
                    <th>DATA DE ADMISSÃO</th>
                    <th>TELEFONE</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td className="image-prompt">
                            <img src={`http://localhost:3000/uploads/${employee.avatar}`} alt="Employee Photo" />
                        </td>
                        <td>{employee.name}</td>
                        <td>{employee.roles.name}</td>
                        <td>{changeDateFormat(employee.admissionDate)}</td>
                        <td>{employee.phone}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    text-align: left;
    border-radius: 10px 10px 0 0;
    overflow: hidden;

    thead{
        background: var(--blue);
        text-transform: uppercase;
    }
    thead th{
        color: white;
        padding: 20px 0;
        padding: 0.75rem 2rem;
    }
    tbody td{
        padding: 1rem 2rem;
        background: white;
        border-bottom: 1px solid #ccc;
    }
    tbody td img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    @media(max-width: 800px) {
        width: 100%;
        display: block;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }
`