import React from "react";
import './modal.less';
import closeBtn from '@Assets/images/Shape.png';


const Modal =({ closeModal }) => {
  const closeModalWindow = (e) => {
      if (e.target.classList.contains('auth')) {
          closeModal();
      }
  };
    return (
      <div className="auth" onClick={closeModalWindow}>
      <div className="background"/>
      <form>
          <div className="form">
          <img src={closeBtn} className="close-btn" onClick={closeModal}/>
          <h3>Авторизация</h3>
          <p>Введите логин и пароль, чтобы войти в личный кабинет</p>
          <input type="email" className="form-control" placeholder="Логин" />
          <input type="password" className="form-control" placeholder="Пароль" />
  
          <button type="submit" className="button">Войти</button>
          </div>
      </form>
  </div>
      )};

  export default Modal;