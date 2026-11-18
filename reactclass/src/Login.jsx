import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

export const Login = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').trim().required("Email is required"),
      password: Yup.string().min(6, 'Password must be at least 6 characters').matches(passwordRegex, 'Password must contain at least one uppercase letter, lowercase letter, and one number').max(100).required("Password is required")
    }),
    onSubmit: async (values) => {
      try {
        console.log(values);
        const{email,password} = values
        const response = await axios.get("http://localhost:6789/user");
        const alluser = response.data;

        const existuser = alluser.find((user) => user.email === email && user.password === password);
        console.log(existuser);
        if (existuser) {
         return alert("Login successful!");
        }  
        return alert("user not found");
      } catch (error) {
        console.log(error);


      }

    }


  });

    console.log(formik.errors);
    console.log(formik.touched);

  return (
    <div>
        <form className='w-50 px-3 py-3 shadow mx-auto' onSubmit={formik.handleSubmit}>

            <input onBlur={formik.handleBlur} className='form-control mb-3' name="email" onChange= {formik.handleChange} type="email" placeholder="Email" />
            {formik.errors.email && formik.touched.email && <p style={{ color: 'red', fontSize: '12px' }}>{formik.errors.email}</p>}
            <input onBlur={formik.handleBlur} className='form-control mb-3' name="password" onChange= {formik.handleChange} type="password" placeholder="Password" />
            {formik.errors.password && formik.touched.password && <p style={{ color: 'red', fontSize: '12px' }}>{formik.errors.password}</p>}
            <button className='btn btn-dark' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Login
