import React, { useState, useEffect,useRef } from 'react';
import {Link,Route, BrowserRouter } from 'react-router-dom'
import _ from 'lodash'
import { useForm } from 'react-hook-form';

const Form = ({onSubmit,handleSubmit,errors,register,setReload,reload,isOpen,setValue}) => {

  useEffect(()=>{
    setValue("title","")
    setValue("body","")
    setValue("password","")
  },[isOpen])


  return(
    <div className="form">
       <form onSubmit={handleSubmit(onSubmit,setReload,reload)}>
         
         <div className="formBlock">
           <div className="formRight">
              <input type="text" placeholder="제목을 입력해주세요" className="longInput" name="title"  {...register("title", { required: "제목을 입력해주세요" })}></input>
           </div>
         </div>

         <div className="formBlock">
           <div className="formRight">
              <textarea  placeholder="
              궁금한 질문이나 요청글을 이메일을 포함하여 남겨주세요.&#13;&#10; 
              이메일로 보내고 싶을 경우 lluvluv3@naver.com &#13;&#10;
              으로 보내주시면 감사하겠습니다 :-)&#13;&#10;&#13;&#10;
              광고성 글이나 원칙에 맞지 않는 글은 무통보 삭제하겠습니다. &#13;&#10;&#13;&#10;

              감사합니다! " className="areaInput" name="body"  {...register("body")}></textarea>
           </div>
         </div>

         <div className="formBlock">
           <div className="formRight">
              <input type="password" placeholder="비밀번호를 입력해주세요" className="shortInput" name="password" {...register("password", { required: "비밀번호를 입력해주세요" })}></input>
           </div>
         </div>

        <div className="saveZone">
           <input type="submit" className="savaButton"/>
        </div>
      </form>
    </div>
  )
}

export default Form

