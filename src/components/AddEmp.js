
import { listEmps, createEmp } from '../empservice/Emplist.js'
import { useState } from 'react'

function AddEmp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    function saveEmployee(e) {
        e.preventDefault();
        const emp = { firstName, lastName, email }
        console.log(emp);
        createEmp(emp).then((response) => { console.log(response.data) })

    }
    return (
        <>
            <div className='container'>
            <br/>
                <div className='row'>
                    <div className='card'>
                    <h2 className='text-center'> Add Employee</h2>
                        <div className='card-body'>

                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'> FirstName:</label>
                                    <input
                                        type='text'
                                        name='fName'

                                        className='form-control'
                                        placeholder='please enter firstName'
                                        value={firstName}
                                        onChange={(e) => {
                                            setFirstName(e.target.value)
                                        }}

                                    ></input>
                                    <label className='form-label'> lastName:</label>
                                    <input
                                        type='text'
                                        name='lName'
                                        className='form-control'
                                        placeholder='please enter lastName'
                                        value={lastName}
                                        onChange={(e) => {
                                            setLastName(e.target.value)
                                        }}

                                    ></input>
                                    <label className='form-label'> Email:</label>
                                    <input
                                        type='text'
                                        name='email'
                                        className='form-control'
                                        placeholder='please enter Email'
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }}

                                    ></input>


                                </div>

                                <button className='btn btn-success' onClick={saveEmployee}>submit</button>

                            </form>



                        </div>

                    </div>
                </div>
            </div>
        </>
    )


}
export default AddEmp