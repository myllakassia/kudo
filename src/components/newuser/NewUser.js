import { useState } from "react"
import './styles.css'


function NewUser() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    //Recebe os dados do formulário
    const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value});

    //Enviar os dados para o back-end, não esta sendo feito
    const addUser = async e => {
        e.preventDefault();

        if(!validate()) return;

        const saveDataForm = true

        if (saveDataForm){
            setStatus({
                type: 'success',
                message: 'Usuário cadastrado com sucesso'
            });
            setUser({
                name: '',
                email: '',
                password: ''
            });
        } else {
            setStatus({
                type: 'error',
                message: 'Erro: Usuário não cadastrado com sucesso!'
            });
        }
    }

    function validate(){
        if(!user.name) return setStatus({type: 'error', message:'Erro: Necessário preencher o campo nome!'})
        if(!user.email) return setStatus({type: 'error', message:'Erro: Necessário preencher o campo email!'})
        if(!user.password) return setStatus({type: 'error', message:'Erro: Necessário preencher o campo senha!'})
        if(user.password.length <6) return setStatus({type: 'error', message:'Erro: A senha precisar ter no mínimo seis caracteres'})

        return true;
    }

    return(
        <div>
            <div className="container">
              <div className="container-register">
                <div className="wrap-register">
                   <form className="register-form">

                    <span className="register">Cadastrar Usuário</span>
            
            {status.type === 'success' ? <p style={{color: 'green'}}>{status.message} </p> : ""}
            {status.type === 'error' ? <p style={{color: 'red'}}>{status.message} </p> : ""}

            <div onSubmit={addUser}>
                <span className="wrap-container">Nome*</span>
                <input className="input-user" type="text" name="name" placeholder="Nome completo do usuário" onChange={valueInput} 
                value={user.name} /> 
            </div>
            <div>   
                <span className="wrap-container">E-mail*</span>
                <input className="input-user" type="email" name="email" placeholder="Digite o e-mail coorporativo" onChange={valueInput} 
                value={user.email} /> <br></br>
            </div>     

            <div>
                <span className="wrap-container">Senha*</span>
                <input className="input-user" type="password" name="password" placeholder="Digite sua senha" onChange={valueInput} 
                value={user.password} /> <br></br>
            </div>
                <p className="required">*Campo obrigatório </p> <br></br>

                <button className="submit-btn">Cadastrar</button>
                
               </form>
            </div>
           </div>
         </div>
        </div>
    )
}

export default NewUser