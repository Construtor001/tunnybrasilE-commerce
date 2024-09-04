"use client"
import axios from "axios";
import {RefObject, useRef} from "react"
import style from "./experimento.module.css"

export default function UploadForm() {

  let senhainp: RefObject<HTMLInputElement> = useRef(null)
  let emailinp: RefObject<HTMLInputElement> = useRef(null)

  function login() {
    var email = emailinp.current?.value;
    var senha = senhainp.current?.value;
  
    axios.post("http://localhost:3030/auth/token", { "email":email, "senha":senha })
      .then(res => {
        var token = res.data;
        localStorage.setItem("token", token);
        console.log(token);
      })
      .catch(err => {
        alert("Login incorreto....");
      });
  }


  function resultado() {
    var token = localStorage.getItem("token");
  
    if (token) {
      var axiosConfig = {
        headers: {
          Authorization: "Bearer " + token
        }
      };
  
      axios.get("http://localhost:3030/transactions/data", axiosConfig)
        .then(response => {
          console.log(response);
        })
        .catch(erro => {
          console.log(erro);
        });
    } else {
      console.log("Token não encontrado no localStorage.");
    }
  }
  

  return (
    <div>
        <div className={style.olamundo}></div>
        <input ref={emailinp} type="text" id="email"/>
        <input ref={senhainp} type="number" id="senha"/>
        <button id="botao" onClick={login}>Enviar</button>
        <button id="botaodois" onClick={resultado}>resultado</button>
    </div>
  );
}