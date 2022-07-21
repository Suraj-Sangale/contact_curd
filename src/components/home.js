import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import {FiEdit } from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';

const Home = () => {
  const [modalShow, setModalShow] = useState(false);
  const [users, setUsers] = useState([]);
  const [userdata, setuserdata] = useState({});


  const handleDelete = (id) => {
    console.log('ascd', userdata);
    const userIndex = users.findIndex((el) => el.id === id);
    users.splice(userIndex, 1);
    localStorage.setItem('users', JSON.stringify(users));
    setUsers([...users]);
    setModalShow(false);
  };
  const handleDeleteModal = (id) => {
    const userdataWhichIsGoingToDelete = users.find((el) => el.id === id);
    setuserdata(userdataWhichIsGoingToDelete);
    setModalShow(true);
  };

  useEffect(() => {
    let usersData = localStorage.getItem('users');
    if (!usersData) {
      setUsers([]);
    } else {
      setUsers(JSON.parse(usersData));
    }
  }, []);
  let navigate = useNavigate();

  return (
    <>
      <div className='App'>
        <button
          className=' btn btn-lg  float-right m-3 btn-warning text-white'
          onClick={() => {
            navigate('/register');
          }}
        >
          {' '}
          Add user
        </button>

        <table style={{ width: '100%' }}>
          <thead>
            <tr >
              <th>sr no.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>age</th>
              <th>Email </th>
              <th>contact no.</th>
              <th>update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((contact, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.age}</td>
                <td>{contact.email}</td>
                <td>{contact.contactNo}</td>
                <td><div>
                <button type="button" className="btn btn-outline-light text-warning " id='update'
                    onClick={() =>
                      navigate('/update', { state: { userId: contact.id } })
                    }
                  >
                    <FiEdit/>Update
                  </button>
                </div></td>
                 <td><div><button type="button" className="btn btn-outline-light text-warning"
                  onClick={() => handleDeleteModal(contact.id)}>
                  <MdDelete/>Delete
                </button></div></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        handledelete={handleDelete}
        userdata={userdata}
      />
    </>
  );
};
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header >
        <Modal.Title id='contained-modal-title-vcenter'>
          Want to delete user ?
          <div>
            <Button className='btn mx-2 px-3 btn-warning text-light' onClick={() => props.handledelete(props.userdata?.id)}>Yes</Button>
            <Button className='btn mx-2 px-3 btn-warning text-light' onClick={props.onHide}>No</Button>
          </div>
        </Modal.Title>

      </Modal.Header>
      <Modal.Body>
        <div>
          <span>Name: </span>
          {props.userdata?.firstName}

        </div>
        <div>
          <span>Last Name: </span>
          {props.userdata?.lastName}
        </div>
        <div>
          <span>Age: </span>
          {props.userdata?.age}

        </div>
        <div>
          <span>Email: </span>
          {props.userdata?.email}
        </div>
        <div>
          <span>Contact Number: </span>
          {props.userdata?.contactNo}
        </div>

      </Modal.Body>
      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  );
}
export default Home;
