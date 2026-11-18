import React , {useState}  from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import { toast} from 'react-toastify'



  const Formik = () => {
  const [loading , setloading] = useState(false)  
  const navigate = useNavigate();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
    const formik = useFormik({
        initialValues:{
            username:"",
            email:"",
            password:""
        },
        validationSchema: Yup.object({
            username: Yup.string().min(3, 'Username must be at least 3 characters').trim().max(100).required("Username is required"),
            email: Yup.string().email('Invalid email address').trim().required("Email is required"),
            password: Yup.string().min(6, 'Password must be at least 6 characters').matches(passwordRegex, 'Password must contain at least one uppercase letter, lowercase letter, and one number').max(100).required("Password is required")
        }),
         onSubmit: async (values)=>{
            setloading(true)
            console.log(values);
            const {username,email,password} = values
          try{  
            const res = await axios.get("http://localhost:6789/user")
            const alluser = res.data
            const existuser = alluser.find((user)=> user.email === email)
            console.log(existuser);
            if (existuser) {
                setloading(false)
                return toast.error("user already exist")
            }

            const response = await axios.post("http://localhost:6789/user", values)
            console.log( response);
            if(response.status === 201){
                setloading(false)
                toast.success("signup successful:");
                navigate("/login")
            }
          } catch (error) {
            setloading(false)
            console.error(error);
          }
        }

    })
    console.log(formik.errors);
    console.log(formik.touched);



    

  return (
    <div>
        <form className='w-50 px-3 py-3 shadow mx-auto' onSubmit={formik.handleSubmit}>

            <input onBlur={formik.handleBlur} className='form-control mb-3' name="username" onChange= {formik.handleChange} type="text" placeholder="Username" />
            {formik.errors.username && formik.touched.username && <p style={{ color: 'red', fontSize: '12px' }}>{formik.errors.username}</p>}
            <input onBlur={formik.handleBlur} className='form-control mb-3' name="email" onChange= {formik.handleChange} type="email" placeholder="Email" />
            {formik.errors.email && formik.touched.email && <p style={{ color: 'red', fontSize: '12px' }}>{formik.errors.email}</p>}
            <input onBlur={formik.handleBlur} className='form-control mb-3' name="password" onChange= {formik.handleChange} type="password" placeholder="Password" />
            {formik.errors.password && formik.touched.password && <p style={{ color: 'red', fontSize: '12px' }}>{formik.errors.password}</p>}
            <button className='btn btn-dark'disabled={loading} type='submit'>{loading ? "loading..." : "submit"}</button>
        </form>
    </div>
  )
}

export default Formik
