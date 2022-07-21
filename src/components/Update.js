import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Update= () => {
    let navigate = useNavigate();
    // const params = useParams();
    const { state } = useLocation();
    const { userId } = state;
    const [addFormData, setAddFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        contactNo: '',
    });

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        let usersData = JSON.parse(localStorage.getItem('users'));
        const userIndex = usersData.findIndex((el) => el.id === userId);
        usersData[userIndex]['firstName'] = addFormData.firstName; 
        usersData[userIndex]['lastName'] = addFormData.lastName;
        usersData[userIndex]['email'] = addFormData.email;
        usersData[userIndex]['age'] = addFormData.age;
        usersData[userIndex]['contactNo'] = addFormData.contactNo;
        localStorage.setItem('users', JSON.stringify(usersData));
        navigate('/');
    };

    useEffect(() => {
        let usersData = JSON.parse(localStorage.getItem('users'));
        const user = usersData.find((el) => el.id === userId);
        setAddFormData({
            ...addFormData,
            firstName: user.firstName, 
            lastName: user.lastName,
            age: user.age,
            email: user.email,
            contactNo: user.contactNo,
        });
    }, []);

    return (
        <div className=' container my-5'>
            <form onSubmit={handleAddFormSubmit}>
                <div className='form-group row'>
                    <div className='col-sm-6'>
                        <label htmlFor='inputFirstname'>First name</label>
                        <input
                            type='text'
                            name='firstName'
                            className='form-control border border-warning '
                            id='inputFirstname'
                            placeholder='First name'
                            value={addFormData.firstName}
                            onChange={handleAddFormChange}
                        />
                    </div>
                    <div className='col-sm-6'>
                        <label htmlFor='inputLastname'>Last name</label>
                        <input
                            type='text'
                            name='lastName'
                            className='form-control border border-warning'
                            id='inputLastname'
                            value={addFormData.lastName}
                            placeholder='Last name'
                            onChange={handleAddFormChange}
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <div className='col-sm-6'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            name='email'
                            className='form-control border border-warning'
                            id='email'
                            placeholder=' Email'
                            value={addFormData.email}
                            onChange={handleAddFormChange}
                        />
                    </div>
                    <div className='col-sm-6'>
                        <label htmlFor='contact'>Contact No</label>
                        <input
                            type='number'
                            name='contactNo'
                            className='form-control border border-warning'
                            id='contact'
                            placeholder='Contact no'
                            value={addFormData.contactNo}
                            onChange={handleAddFormChange}
                            
                        />
                    </div>
                </div>


                <div className='form-group row col-sm-2'>
                    <label htmlFor='age'>Age</label>
                    <input
                        type='text'
                        name='age'
                        className='form-control border border-warning'
                        id='age'
                        placeholder='Age'
                        value={addFormData.age}
                        onChange={handleAddFormChange}
                    />
                </div>

                <div className='col-auto text-center m-5 '>
                    <button type='submit' className='btn btn-warning  mb-2'>
                        update User
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Update;
