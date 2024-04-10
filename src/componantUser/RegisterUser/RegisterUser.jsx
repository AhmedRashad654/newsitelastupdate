import React, { useState,useContext } from 'react'
import style from './RegisterUser.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { ContextUser } from '../../context/Context';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RegisterUser() {
  
    const [ open, setOpen ] = useState( false );
    const {openAuth, setOpenAuth}= useContext(ContextUser)
    const [errorMsg, setErrorMsg]= useState('')
    const [isLoading, setIsLoading]= useState(false)
    const navigate=useNavigate()

    const validationSchema = Yup.object({
      username: Yup.string().required('اسم المستخدم مطلوب'),
      name: Yup.string().required('الاسم مطلوب'),
      phone: Yup.string().required('رقم الهاتف مطلوب').matches(/^\d{10}$/, 'رقم الهاتف يجب أن يحتوي على 10 أرقام'),
      government: Yup.string().required('المحافظة مطلوبة'),
      password: Yup.string().required('كلمة المرور مطلوبة').matches(/^\d{6}$/, 'كلمة المرور يجب أن تحتوي على 6 أرقام'),
      email: Yup.string().required('البريد الإلكتروني مطلوب').email('من فضلك أدخل بريد إلكتروني صحيح'),
      key:Yup.string().required('رمز الدخول مطلوب'),
      selfImg:Yup.string(),
  });
  

    const{values,handleSubmit,handleChange,handleBlur,errors,touched, isValid}= useFormik({
            initialValues:{
              username:'',
              name:'',
              phone:'',
              government:'',
              password:'',
              email:'',
              key:'',
              selfImg:'',

           },
            onSubmit:async ()=>{
              setErrorMsg('')
              setIsLoading('true')
               try{
                let response= await fetch.post('http://localhost:4500/users/register', values)
               console.log(response)
                if(response){
                  // navigate('/successregister')
                }
               }
               catch(error){
                   console.log(error)
                   setErrorMsg(error.response.data)
               }
               
               setIsLoading('false')
            },
            validationSchema

           })


  return (
    <>
      <div className={style.RegisterUser}>
        <form className={style.forms} onSubmit={handleSubmit} >
          <div className={style.headForm}>
            <p>انشاء حساب</p>
            <FontAwesomeIcon
              icon={faCircleXmark}
              style={{
                position: "absolute",
                top: "-20%",
                right: 0,
                color: "red",
                cursor: "pointer",
              }}
              onClick={()=>setOpenAuth('')}
            />
            <hr />
          </div>
          <div className={style.inform}>
            <div className={style.input}>
              <div className={style.inpi}>
                <label htmlFor="">اسم المستخدم</label>
                <input type="text" className="form-control" name='username' value={values.username} onChange={handleChange} onBlur={handleBlur}/>
                {errors.username && touched.username && <p className={`alert alert-danger p-1 fw-1 ${style.alert}`}>{errors.username}</p>}
              </div>

              <div className={style.inpi}>
                <label htmlFor="">رقم الهاتف </label>
                <input type="text" className="form-control" name='phone' onChange={handleChange} onBlur={handleBlur} />
                {errors.phone && touched.phone && <p className={`alert alert-danger p-1 fw-1 ${style.alert}`}>{errors.phone}</p>}
              </div>
            </div>
            <div className={style.input}>
              <div className={style.inpi}>
                <label htmlFor="">(ثلاثي) الاسم بالكامل</label>
                <input type="text" className="form-control" name='name' onChange={handleChange} onBlur={handleBlur} />
                {errors.name && touched.name && <p className={`alert alert-danger p-1 fw-1 ${style.alert}`}>{errors.name}</p>}

              </div>
              <div className={style.inpi}>
                <label htmlFor=""> المحافظة </label>
                <input type="text" className="form-control" name='government' onChange={handleChange} onBlur={handleBlur} />
                {errors.government && touched.government && <p className={`alert alert-danger p-1 fw-1 ${style.alert}`}>{errors.government}</p>}
              </div>
            </div>
            <div className={style.input}>
              <div className={style.inpi}>
                <label htmlFor="">البريد الالكتروني </label>
                <input type="email" className="form-control" name="email"   onChange={handleChange} onBlur={handleBlur} />
                {errors.email && touched.email && <p className={`alert alert-danger p-1 fw-1 ${style.alert}`}>{errors.email}</p>}

              </div>
              <div className={style.inpi}>
                <label htmlFor="">كلمة المرور </label>
                <input type="password" className="form-control" name="password" onChange={handleChange} onBlur={handleBlur} />
                {errors.password && touched.password && <p className={`alert alert-danger p-1 fw-1 ${style.alert}`}>{errors.password}</p>}

              </div>
            </div>
            
            <div className={style.input}>
            <div className={style.inpi}>
                <label htmlFor="">   رمز الدخول (احتفظ به في حالة نسيت كلمة المرور) </label>
                <input type="text" className="form-control " name="key" onChange={handleChange} onBlur={handleBlur} />
                {errors.key && touched.key && <p className= {`alert alert-danger p-1 fw-1 ${style.alert}`}>{errors.key}</p>}
              </div>
            </div>

            <div className={style.picture}>
              <div className={style.pictureText}>
                <p>تحميل صورة الملف الشخصي (اختياري)</p>
              </div>
              <div className={style.pictureInput}>
                <label
                  htmlFor="file-upload1"
                  className={style.customfileupload}
                >
                  ارفع الملف
                </label>
                <input type="file" className="form-control" id="file-upload1" onChange={handleChange} />
              </div>
            </div>
            <div className={style.btnInpu}>
              {isLoading ? null : <button >انشاء حساب</button>}
             
              <button onClick={()=>setOpenAuth('login')}>لدي حساب بالفعل</button>
              {errorMsg && <div className={`form-control  alert alert-danger m-3 p-1 w-75 text-center ${style.alert}`}>{errorMsg}</div>}

            </div>
          </div>
        </form>
      </div>
    </>
  );
}
