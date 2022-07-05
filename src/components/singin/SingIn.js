import { useState } from 'react';
import logo from '../../assets/logo.kudo.png';
import './styles.css'


function SingIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword ] = useState("")

  return (
    <div>
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">

              <span className="login-form-title">Kudo-Wall</span>

              <span className="login-form-title">
                <img src={logo} alt="logo"/>
              </span>

              <div className='wrap-input'>
                <input 
                  className={email !== "" ? 'has-val input' : 'input'}
                  type="e-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <span type="focus-input" data-placeholder="Email"></span>
              </div>

              <div className='wrap-input'>
                <input 
                  className={password !== "" ? 'has-val input' : 'input'} 
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <span type="focus-input" data-placeholder="Password"></span>
              </div>

              <div className='container-login-form-btn'>
                <button className='login-form-btn'>Login</button>
              </div>

              <div className='text-center'>
                <span className="txt1">Não possui conta?</span>
                <a className='txt2' href="#"> Criar conta</a>
              </div>
              <div className='text-center'>
                <a className='txt3' href="#">Cadastrar novo usuário</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingIn;
