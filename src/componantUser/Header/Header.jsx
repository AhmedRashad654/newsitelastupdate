import {React,useContext} from 'react';
import image1 from '../../assests/photo_2024-04-03_23-07-55.jpg';
import './Header.css';
import { ContextUser } from '../../context/Context';
import EnterInformUser from '../EnterInformUser/EnterInformUser';
import SuccessAddInform from '../SuccessAddInform/SuccessAddInform';
import FaildAddInform from '../FaildAddForm/FaildAddForm';
import TawsikEmail from '../TawsikEmail';
import axios from 'axios';
export default function Header() {
  const {openAuth, setOpenAuth}= useContext(ContextUser)
  function handleOpen() {
    if ( !localStorage.getItem( 'token' ) ) {
      setOpenAuth( 'login' );
    } else {
    
        axios
          .get(
            `https://syrianrevolution1.com/users/single/${localStorage.getItem(
              "idUserLogin"
            )}`,
            {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            }
          )
          .then((result) => {
            console.log(result);
            result?.data?.isConfident === true
              ? setOpenAuth("enterinform")
              : setOpenAuth("faild");
          })
          .catch((error) => console.log(error)); 
    }
  
  }

  return (
    <>
      <div className="header-container overflow-hidden perantHeader">
        <div className=" perantparhead">
          <p className=" perantpar">
            أهلا بك في موقعنا الرسمي ، حيث ستجد هنا كل ما تريد معرفته عن سوريا
            بداية من آخر الأخبار والتغطية المستمرة ، كما نحرص جاهدين أن يكون
            موقعنا بمثابة ملف توثيق لكل الأحداث والجرائم التي حدثت ولا زالت تحدث
            ويتم حذفها من وسائل التواصل والمنصات المختلفة ..
            <br />
            نحن لتوثيق الحدث ، كن شريكا معنا وسجل الآن لتحصل على ميزة التوثيق
          </p>
          <button className="head-btn" onClick={handleOpen}>
            أدخل بيانات{" "}
          </button>
        </div>

        <img src={image1} alt="mainpicture" className="head-img" />
      </div>

      {openAuth === "enterinform" && <EnterInformUser />}
      {openAuth === "successaddinform" && <SuccessAddInform />}
      {openAuth === "faild" && <FaildAddInform />}
      {openAuth === "tawsicEmail" && <TawsikEmail />}
    </>
  );
}



