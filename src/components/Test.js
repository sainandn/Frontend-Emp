import { useState,useEffect } from "react"

import { listEmps } from "../empservice/Emplist"
import { useNavigate} from "react-router-dom"
const GetEmp = () => {
    const [empdata, setEmpdata] = useState([])
    const navObj = useNavigate();

    useEffect(() => {
        listEmps().then((response) => { setEmpdata(response.data) }).catch(
            error => { console.error(error) })
    }, [])

    function addNewEmpolyee() {
       
        navObj('/addemp')
    }

    return (
        <div className="container">
            <h1 text-align="center">Emp Details</h1>
          
            <table className="table table-striped table-bordered">
            <thead>
                <tr>
                <th>id</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>Email</th>
                    <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empdata.map((emp) =>
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.email}</td>
                                <td><p>Hyderabad</p></td>
                            </tr>)
                    }

                </tbody>
            </table>
            <button className='btn btn-primary mb-2' onClick={addNewEmpolyee} >Add Employee</button>

        </div>
    )

}
export default GetEmp