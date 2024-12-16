import { useEffect, useState } from 'react'
import { listEmps } from '../empservice/Emplist.js'
function EmpHome() {

    const [empData, setEmpData] = useState([])

    useEffect(
        ()=> {
            listEmps().then((response) => { setEmpData(response.data);}).catch(error => {
                console.error(error)
            })
        }
        , [])                 
       
    return (<div className='container'>
        <h2>List of Emp</h2>
        <table className='table table-striped table-bordered'>
       
        <thead>
        <tr>
            <th>id  </th>
            <th>firstName  </th>
            <th> lastName </th>
            <th> email </th>
        </tr>
        </thead>
            <tbody>
                {
                 empData.map(emp =>
                 <tr key={emp.id} >
                            <td>{emp.id}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>

                 </tr>
                    )
                }
            </tbody>
        </table>
       
            <button >Add Employee</button>

    </div>
    
    )
}
export default EmpHome