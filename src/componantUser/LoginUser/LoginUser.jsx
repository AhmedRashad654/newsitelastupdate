import React,{useContext, useState} from 'react'
import style from '../RegisterUser/RegisterUser.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { ContextUser} from '../../context/Context';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
export default function LoginUser() {

const { setOpenAuth}= useContext(ContextUser)
  const [ user, setUser ] = useState()
  const [ loading, setLoading ] = useState( false );
  function handlechange( e ) {
    setUser( ( prevState ) => ( {
      ...prevState,
      [ e.target.name ]: e.target.value,
    } ) );
  }
  async function handlesubmit( e ) {
    e.preventDefault();
    setLoading( true );
    await axios.post(
      "https://syrianrevolution1.com/users/login"
      , user ).then( ( result ) => {
        if ( result.data.message === "success" ) {
          setLoading( false );
          const decodedToken = jwtDecode(result.data.token);
          localStorage.setItem( 'token', result.data.token )
          localStorage.setItem( 'idUserLogin', decodedToken.data.id )
          localStorage.setItem("roleUserLogin", decodedToken.data.role);
          
          console.log( decodedToken );
          setOpenAuth( '' );
        }
      } ).catch( ( error ) => {

        console.log( error )
        setLoading( false );
      } );
  
  }
  return (
    <div className={style.RegisterUser}>
      <form className={style.formsLogin} onSubmit={handlesubmit}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          style={{
            marginRight: "15px",
            marginTop: "10px",
            color: "red",
            cursor: "pointer",
          }}
          onClick={() => setOpenAuth("")}
        />
        <div
          className={style.headForm}
          style={{ width: "60%", marginTop: "-20px" }}
        >
          <h6> تسجيل الدخول</h6>

          <hr />
        </div>
        <div className={style.inform}>
          <div className={style.inpi2}>
            <label htmlFor=""> البريد الالكتروني </label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={handlechange}
              placeholder="البريد الالكتروني"
            />
          </div>

          <div className={style.inpi2}>
            <label htmlFor=""> كلمة المرور </label>
            <input
              type="text"
              className="form-control"
              name="password"
              onChange={handlechange}
              placeholder="كلمة المرور"
            />

            <p
              onClick={() => setOpenAuth("forget")}
              style={{ cursor: "pointer" }}
            >
              هل نسيت كلمة المرور
            </p>
          </div>
          <div className={style.btnInpu}>
            <button type="submit">
              {" "}
              {loading ? (
                <div className="spinner-border text-secondary" role="status">
                  <span className="sr-only"></span>
                </div>
              ) : (
              "تسجيل الدخول"
              )}
            </button>
            <button onClick={(e) => e.preventDefault()}>
              {" "}
              ليس لدي حساب .{" "}
              <span onClick={() => setOpenAuth("register")}>انشاء حساب</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}









