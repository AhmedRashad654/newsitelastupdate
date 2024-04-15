import React, { useContext, useState } from 'react'
import style from '../componantUser/RegisterUser/RegisterUser.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { ContextUser } from '../context/Context'
import Joi from 'joi';
export default function RegisterUser() {
    const { setOpenAuth } = useContext( ContextUser )
      //////////////////////////////////
  const [ userUpdate, setUserUpdate ] = useState( {} );
    const [ errorListUpdate, setErrorListUpdate ] = useState();
    const [ success, setSuccess ] = useState( false );
      ////////////function handleChange///////////////
      function handlechange(e) {
        setUserUpdate((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      }
      /////////handle image////////////////
      const [imageProfile, setImageProfile] = useState("");

      const [loading, setLoading] = useState(false);
      function handleImg(e) {
        setImageProfile(e.target.files[0]);
      }
      ////////////valid Joi///////////////
      function validationAddUser() {
        let schema = Joi.object({
          name: Joi.string().allow(""),
          selfImg: Joi.string().allow(""),
          government: Joi.string().allow(""),
          phone: Joi.string().min(10).max(15).allow("").messages({
            "string.min": "    رقم  الهاتف يجب الا يقل عن عشرة ارقام",
            "string.max": "    رقم  الهاتف يجب الا يزيد عن  خمسة عشر رقم",
          }),
        });
        return schema.validate(userUpdate, { abortEarly: false });
      }
      /////////////////function submit ///////////////////
  async function handleSubmit( e ) {
        setErrorListUpdate('')
      e.preventDefault();
      setSuccess( false );
        let responseValidateUser = validationAddUser();
        if (responseValidateUser.error) {
          setErrorListUpdate([responseValidateUser.error.details]);
        } else{
          setErrorListUpdate(null);
          const formData = new FormData();
          if ( userUpdate.name !== "" && userUpdate.name !== undefined && userUpdate.name !== null ) {
            formData.append("name", userUpdate.name);
          }
           if (userUpdate.phone !== "" && userUpdate.phone !== undefined && userUpdate.phone !== null) {
             formData.append("phone", userUpdate.phone);
           }
            if (userUpdate.government !== "" && userUpdate.government !== undefined && userUpdate.government !== null) {
              formData.append("government", userUpdate.government);
            }
          if (imageProfile !== null && imageProfile !== undefined && imageProfile !== "") {
            formData.append("photo", imageProfile);
          }
          try {
            setLoading(true);
            const response = await fetch(
              `https://syrianrevolution1.com/users/${localStorage.getItem(
                "idUserLogin"
              )}`,
              {
                method: "PATCH",
                headers: {
                  Authorization: localStorage.getItem("token"),
                },
                body: formData,
              }
            );
            const result = await response.json();
            setLoading( false );
            console.log( result );
            if (result.user.createdAt) {
                setSuccess( true );
                localStorage.selfImg = result.user.selfImg;
            }
          } catch (error) {
            console.error(error);
          }
        }
      }

 return (
   <>
     <div className={style.RegisterUser}>
       <form
         className={style.forms}
         style={{ height: "60%", transform: "translateY(50px)" }}
       >
         <div className={style.headForm}>
           <p> تحديث بيانات</p>
           <FontAwesomeIcon
             icon={faCircleXmark}
             style={{
               position: "absolute",
               top: "-20%",
               right: 0,
               color: "red",
               cursor: "pointer",
             }}
             onClick={() => setOpenAuth("")}
           />
           <hr />
         </div>
         {errorListUpdate &&
           errorListUpdate.map((error, index) => (
             <p
               key={index}
               className="alert alert-secondary alerthemself"
               style={{ width: "90%" }}
             >
               {error[index].message}
             </p>
           ))}
         {success && (
           <p
           
             className="alert alert-secondary alerthemself"
             style={{ width: "90%" }}
           >
            تم التحديث بنجاح
           </p>
         )}
         <div className={style.inform}>
           <div className={style.input}>
             <div className={style.inpi}>
               <label htmlFor="">اسم المستخدم</label>
               <input
                 type="text"
                 className="form-control"
                 name="name"
                 placeholder="الاسم"
                 onChange={handlechange}
               />
             </div>

             <div className={style.inpi}>
               <label htmlFor="">رقم الهاتف </label>
               <input
                 type="text"
                 className="form-control"
                 name="phone"
                 placeholder="رقم الهاتف"
                 onChange={handlechange}
               />
             </div>
           </div>
           <div className={style.input}>
             <div className={style.inpi}>
               <label htmlFor=""> المحافظة </label>
               <input
                 type="text"
                 className="form-control"
                 name="government"
                 placeholder="المحافظة"
                 onChange={handlechange}
               />
             </div>
             <div className={style.inpi} style={{ marginTop: "7px" }}>
               <p style={{ fontSize: "11px", marginBottom: "10px" }}>
                 تحميل صورة الملف الشخصي{" "}
               </p>

               <label htmlFor="file-upload1" className={style.customfileupload}>
                 ارفع الصورة
               </label>
               <input
                 type="file"
                 className="form-control"
                 id="file-upload1"
                 name="photo"
                 onChange={handleImg}
               />
             </div>
           </div>
         </div>
         <button
           onClick={handleSubmit}
           className="btn btn-primary"
           style={{
             position: "absolute",
             left: "50%",
             transform: "translate(-50%,50px)",
           }}
         >
           {loading ? (
             <div className="spinner-border text-secondary" role="status">
               <span className="sr-only"></span>
             </div>
           ) : (
             "    تحديث بيانات"
           )}
         </button>
       </form>
     </div>
   </>
 );
}

