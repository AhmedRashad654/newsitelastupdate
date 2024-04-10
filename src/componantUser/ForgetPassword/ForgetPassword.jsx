import {React,useContext, useState} from "react";
import style from "../RegisterUser/RegisterUser.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { ContextUser } from "../../context/Context";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function ForgetPassword() {

  const {openAuth, setOpenAuth}= useContext(ContextUser)
  const [email, setUserEmail] = useState('')
  const [key, setUserKey] = useState('')
   const navigate= useNavigate()
  const [success, setSuccess]= useState({})

 async function forgetPassword(e){
  e.preventDefault()
   await axios.post('http://localhost:4500/users/forgetPassword',{
        email,key
      }).then((data)=>{
        navigate(`/success/${data.data._id}`)
        console.log(data)
      }).catch((data)=>console.log(data))
    }

  
  return (
    <div className={style.RegisterUser}>
      <form className={style.formsForget} >
        <FontAwesomeIcon
          icon={faCircleXmark}
          style={{
            marginRight: "15px",
            marginTop: "10px",
            color: "red",
            cursor: "pointer",
          }}
          onClick={()=> setOpenAuth('')}
        />
        <div
          className={style.headForm}
          style={{ width: "80%", marginTop: "-20px" }}
        >
          <h6> نسيت كلمة المرور</h6>

          <hr />
        </div>
        <div className={style.inform1}>
          <div className={style.inpi2}>
            <label htmlFor="">ادخل الايميل   </label>
            <input
              type="text"
              name="email"
              onChange={(e)=>setUserEmail(e.target.value)}
              className="form-control"
              placeholder="   الايميل"
            />
          </div>
          <div className={style.inpi2}>
            <label htmlFor="">ادخل رمز الدخول  </label>
            <input
              type="text"
              name="key"
              onChange={(e)=>setUserKey(e.target.value)}
              className="form-control"
              placeholder="  رمز الدخول"
            />
          </div>
          
          <div className={style.btnInpu1}>
            <button onClick={(e)=>forgetPassword(e)} type="submit">   تعيين كلمة المرور </button>

            <button
              style={{
                backgroundColor: "transparent",
                              border: "1px solid #3035A1",
                color:'#3035A1'
                          } }
                          onClick={ ()=>setOpenAuth('') }
            >
              رجوع
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
