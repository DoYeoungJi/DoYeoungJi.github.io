import React, { useState, useEffect,useRef } from 'react';
import {Link,Route, BrowserRouter } from 'react-router-dom'
import _ from 'lodash'
import { useForm } from 'react-hook-form';

const Form = ({onSubmit,handleSubmit,errors,register,setReload,reload,pickDetail,setValue,isOpen}) => {

  useEffect(()=>{
    setValue("password","")
  },[isOpen])

  return(
    <div className="form">
       <form onSubmit={handleSubmit(onSubmit,setReload,reload,pickDetail)}>
    
         <div className="formBlock">
           <div className="formRight">
              <input type="password" placeholder="비밀번호를 입력해주세요" className="longInput" name="password" {...register("password")}></input>
           </div>
         </div>

        <div className="saveZone saveBottom">
           <input type="submit" className="savaButton"/>
        </div>
      </form>
    </div>
  )
}

export default Form

