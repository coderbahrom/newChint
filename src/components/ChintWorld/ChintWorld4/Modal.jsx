import React from "react";
import "./Modal.css";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


import { useForm } from "react-hook-form";
const btn = {
  backgroundColor: "#1e59a4",
  borderRadius: "10px",
  width: "246px",
  height: "58px",
  color: "white",
  marginRight:'auto'
};
const text = {
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "36px",
  lineHeight: "43px",
  color: "#1E59A4",
};
const forming = {
  width:'80%',
  margin:'0 auto',
  display: "flex",
  flexDirection: "column",
  gap: "30px",
};
const random = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: " #E8E8E8",
  border: " 1px solid #E8E8E8",
  boxSizing: " border-box",
  borderRadius: "10px",
  width: "40%",
};
const codes = {
  display: "flex",
  flexDirection: "row !important",
  justifyContent: "center",
  gap:"30px"
};  
 // marginBottom:"Math.floor(Math.random() * 10)*10"

let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);
let c = Math.floor(Math.random() * 10);
let d = Math.floor(Math.random() * 10);
const code = [a, b, c, d];


function ModalForm({ toggle, isOpen, save }) {

  const { register, handleSubmit, watch , reset, formState: { errors } } = useForm();
  const onSubmit = (data) =>{
    if(data.capture===''+a+b+c+d)
   console.log(data);
   console.log(''+a+b+c+d)
    reset()
  }

 
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader>
        <h1 style={text}>Заявка на сотрудничество</h1>
      </ModalHeader>
      <ModalBody>
        <form style={forming} id={"add-user"} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">
            Имя
            <input  {...register("name", { required: true })}   className={"form-control"} type="text" />
          </label>

          <label htmlFor="">
            Номер телефона
            <input  {...register("phone", { required: true })}  className={"form-control"} type="text" />
          </label>
          <label htmlFor="">
            Email
            <input  {...register("email",  { required: true })}  className={"form-control"} type="text" />
          </label>
          <label htmlFor="">
            Город
            <input  {...register("city", { required: true })}  className={"form-control"} type="text" />
          </label>
          <label htmlFor="">
            Комментарий
            <input  {...register("commit", { required: true })}   className={"form-control"} type="text" />
          </label>
          <div style={codes}>
            <label htmlFor="">
              Повторите символы
              <div style={random}>
                {code.map((item, index) => {
                    const stil={
                        marginTop:`${Math.floor(Math.random() * index*index+index)}px`,
                        // marginBottom:"Math.floor(Math.random() * 10)*10"
                    }
                  return <label style={stil} htmlFor="">{item}</label>;
                })}
              </div>
              </label>
              
              <input type="text" {...register("capture", { required: true })}  />
        
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <button style={btn} form={"add-user"} type="submit" onClick={toggle} >
          Отправить
        </button>
       
      </ModalFooter>
    </Modal>
  );
}

export default ModalForm;
