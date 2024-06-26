import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

export default function ProtectedRouted({children}) {
  const navigate = useNavigate();
  const role = localStorage.getItem("roleUserLogin");
  useEffect(() => {
    if (role !== "admin" && role !== "supervisor") {
      navigate("/");
    } 
  },[role,navigate]);

  return(role === "admin" || role === "supervisor") ? children: null;
}