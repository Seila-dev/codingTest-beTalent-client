import styled from "styled-components"
import { Header } from "../header"
import searchIcon from '../../assets/search.png'
import api from '../../services/api'
import { useEffect, useState } from "react"
import { EmployeesData } from "../../interfaces/employeesData"
import { EmployeesList } from "../employeesList"
import { Loading } from "../loading"
import { useSearchParams } from "react-router-dom"

export const App = () => {
    const [employeesGroup, setEmployeesGroup] = useState<EmployeesData[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const [searchParams, setSearchParams] = useSearchParams({ q: ''})
    const q: string = searchParams.get('q') || ''

    const filteredEmployees = employeesGroup.filter(item => {
        return (
            item.name.toLowerCase().includes(q.toLowerCase())
        )
    })

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get('/employees');

                setEmployeesGroup(response.data.employees)
                setLoading(false);
            } catch (error) {
                console.error('Error on fetching data', error);
                setLoading(false);
            }
        }

        fetchData();
    }, [])

    if (loading) return <Loading>Loading API.. This process can last a few seconds</Loading>

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
                                value={q}
                                onChange={e => setSearchParams(prev => {
                                    prev.set('q', e.target.value)
                                    return prev
                                }, { replace: true })}
                                name="search"
                                id="searchQuery"
                                placeholder="Pesquisar"
                                accept="abnt"
                            />
                            <button type="button" className="searchButton">
                                <img src={searchIcon} alt="Search Icon" />
                            </button>
                        </div>
                    </div>
                    <div className="sectionBody">
                        <EmployeesList employees={filteredEmployees} />
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