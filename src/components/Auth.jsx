import React from "react";
import './auth.less';

const Auth = () => (
<div className="auth">
    <div className="background"/>
    <form>
        <div className="form">
        <h3>Авторизация</h3>
        <p>Введите логин и пароль, чтобы войти в личный кабинет</p>
        <input type="email" className="form-control" placeholder="Логин" />
        <input type="password" className="form-control" placeholder="Логин" />

        <button type="submit" className="button">Войти</button>
        </div>
    </form>
</div>
);

export default Auth;