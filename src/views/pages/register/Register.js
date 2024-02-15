/* eslint-disable prettier/prettier */
import React,{useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [formData,setFormData]=useState({firstname:'',lastname:'',email:'',password:'',repeatpass:''});
  // here our navigation
const navigation=useNavigate();
  const handleFormData=(event)=>{
    const {value,name}=event.target;
    setFormData((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const show=async()=>{

    var requestbody={
      "first_name": formData.firstname,
      "last_name": formData.lastname,
      "email": formData.email,
      "role_id": "Guest",
      "password": formData.password
  }

  try{

    const response=await axios.post('http://localhost:7000/api/users/signup',requestbody,{
      headers:{
      }
    });
    navigation('/login')
  }catch(error){
    console.error();
  }
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="First Name" name='firstname' onChange={handleFormData} autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Last Name" name='lastname' onChange={handleFormData} autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" name='email' onChange={handleFormData}  autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      name='password' onChange={handleFormData}
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      name='repeatpass' onChange={handleFormData}
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton onClick={show} color="success">Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
