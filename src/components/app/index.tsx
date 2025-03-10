import styled from "styled-components"
import { Header } from "../header"
import searchIcon from '../../assets/search.png'
import api from '../../services/api'
import { useEffect, useState } from "react"
import { EmployeesData } from "../../interfaces/employeesData"
import { EmployeesList } from "../employeesList"
import { Loading } from "../loading"

export const App = () => {
    const [employeesGroup, setEmployeesGroup] = useState<EmployeesData[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get('/employees');

                console.log(employeesGroup)
                setEmployeesGroup(response.data.employees)
                setLoading(false);
                console.log(response.data)
                console.log(employeesGroup)
            } catch (error) {
                console.error('Erro ao buscar dados', error);
                setLoading(false);
            }
        }

        fetchData();
    }, [])

    if (loading) return <Loading>Carregando API.. Esse processo pode demorar um pouco</Loading>

    return (
        <>
            <main>
                <Header />
                <EmployeesSection>
                    <div className="sectionHeader">
                        <h2>Funcionários</h2>
                        <div className="search">
                            <input
                                type="text"
                                name="search"
                                id="searchQuery"
                                placeholder="Pesquisar"
                            />
                            <button type="button" className="searchButton">
                                <img src={searchIcon} alt="Search Icon" />
                            </button>
                        </div>
                    </div>
                    <div className="sectionBody">
                        <EmployeesList employees={employeesGroup} />
                    </div>

                </EmployeesSection>
            </main>
        </>
    )
}

const EmployeesSection = styled.section`
    padding: 40px;
    .sectionHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        paddding: 20px 0;
        margin-bottom: 50px;
    }
    .sectionHeader .search{
        display: flex;
        align-items: center;
        background: white;
        padding: 2px 10px;
    }
    .sectionHeader .search #searchQuery{
        padding: 10px;
        border: none;
        border-radius: 5px;
        outline: none;
        font-size: 15px;
    }
    .sectionHeader .search .searchButton{
        background: transparent;
        border: none;
        cursor: pointer;
    }
    .sectionHeader .search .searchButton img{
        width: 25px;
    }

    .sectionBody{

        width: 100%;
        overflow-x: auto;
    }
    // .sectionBody .table{
    //     border-collapse: collapse;
    //     width: 100%;
    //     text-align: left;
    //     border-radius: 10px 10px 0 0;
    //     overflow: hidden;
    // }
    // .sectionBody .table thead{
    //     background: var(--blue);
    //     text-transform: uppercase;
    // }
    // .sectionBody .table thead th{
    //     color: white;
    //     padding: 20px 0;
    //     padding: 0.75rem 2rem;
    // }
    // .sectionBody .table tbody td{
    //     padding: 1rem 2rem;
    //     background: white;
    //     border-bottom: 1px solid #ccc;
    // }

    // @media(max-width: 800px) {
    //     .sectionBody .table{
    //         width: 100%;
    //         display: block;
    //         overflow-x: auto;
    //         -webkit-overflow-scrolling touch;
    //     }
    // }

    @media(max-width: 550px) {
        .sectionHeader{
            flex-direction: column;
        }
        .sectionHeader .search{
            width: 100%;
            margin-top: 10px;
        }
        .sectionHeader .search #searchQuery{
            width: 100%;
        }
    }
`