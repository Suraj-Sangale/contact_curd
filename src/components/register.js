import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
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

    const newContact = {
      id: nanoid(),
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      age: addFormData.age,
      email: addFormData.email,
      contactNo: addFormData.contactNo,
    };
    console.log('newContact:-', newContact);
    const newContacts = [...users, newContact];
    localStorage.setItem('users', JSON.stringify(newContacts));
    navigate('/');
    // setContacts(newContacts);
    // setFormErrors(validate(addFormData));
    // setIsSubmit(true);
  };

  // const validate = (users) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!users.firstName) {
  //     errors.firstName = "Fiest Name is Invalid!";
  //   }
  //   if (!users.lastName) {
  //     errors.lastName = "Last Name is Invalid!";
  //   }
  //   if (!users.email) {
  //     errors.username = "Email is Invalid!";
  //   }

  //   if (!users.age) {
  //     errors.age = "Age is Invalid!";
  //   }
  //   if (!users.password) {
  //     errors.password = "Password is Invalid!";
  //   }

  //   if (!users.contactNo) {
  //     errors.contactNo = "contact No. is Invalid!";
  //   } else if (users.contactNo< 10) {
  //     errors.contactNo = "Enter a valid No.";
  //   return errors;
  // };

  useEffect(() => {
    // console.log(formErrors)
    // if (Object.keys (formErrors).length === 0 && isSubmit) {
    //   console.log(addFormData);
    //   } 
    let usersData = localStorage.getItem('users');
    if (!usersData) {
      setUsers([]);
    } else {
      setUsers(JSON.parse(usersData));
    }
  }, [])
// };
console.log('usersData:-', users);

return (

  <div>

    <div className='container py-5 '>
      <div className='row'>
        <div className='col-md-10 mx-auto'>
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
                  onChange={handleAddFormChange}
                />
                {/* <p>{formErrors.firstName}</p> */}
              </div>
              <div className='col-sm-6'>
                <label htmlFor='inputLastname'>Last name</label>
                <input
                  type='text'
                  name='lastName'
                  className='form-control border border-warning'
                  id='inputLastname'
                  placeholder='Last name'
                  onChange={handleAddFormChange}
                />
                {/* <p>{formErrors.lastName}</p> */}
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
                  onChange={handleAddFormChange}
                />
                {/* <p>{formErrors.email}</p> */}

              </div>
              <div className='col-sm-6'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  className='form-control border border-warning'
                  id='password'
                  placeholder='Password'
                />
                {/* <p>{formErrors.password}</p> */}
              </div>
            </div>
            <div className='form-group row'>
              <div className='col-sm-6'>
                <label htmlFor='contact'>Contact No</label>
                <input
                  type='number'
                  name='contactNo'
                  className='form-control border border-warning'
                  id='contact'
                  placeholder='Contact no'
                  onChange={handleAddFormChange}
                />
                {/* <p>{formErrors.contactNo}</p> */}
              </div>
              <div className='col-sm-2'>
                <label htmlFor='age'>Age</label>
                <input
                  type='text'
                  name='age'
                  className='form-control border border-warning'
                  id='age'
                  placeholder='Age'
                  onChange={handleAddFormChange}
                />
                {/* <p>{formErrors.age}</p> */}
              </div>

            </div>
            <div className='col-auto text-center m-5 '>
              <button type='submit' className='btn btn-warning  mb-2'>
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
};

export default Register;














