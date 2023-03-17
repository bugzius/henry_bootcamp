import { useState} from "react";
import { useNavigate, Navigate } from 'react-router-dom';
import styled from "styled-components";
import { hashSession, password, username, colorBlueBase, colorGreenBase } from "../../VariablesENV";

const ContentLoginStyled = styled.div`
    background: #dfdfdf;
    text-align: center;
    padding: 20px 10px;

    border-radius: 5px;
    
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    
    width: 100%;
    max-width: 700px;
    left: 50%;
    & h1{
        margin: 0 auto;
        width: fit-content;
        border-bottom: 4px solid #c7c7c7;
    }
    & .form-inputs{
        margin-top: 30px;
        & form{
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            & input{
                width: 100%;
                max-width: 500px;
                margin: 0 auto;
                display: block;
                border: none;
                padding: 15px 20px;
                border-radius: 2px;
            }
            input[type="password"].not-validate,input[type="text"].not-validate{
                background: #ff8888;
            }
            & input[type="text"].not-validate:focus, input[type="password"].not-validate:focus{
                border: 3px solid red;
                outline: none;
            }
            & input[type="text"],input[type="password"]{
                border-radius: 10px;
                transition: all .1s ease;
                box-shadow: 0 1px 5px #c7c7c7;
            }
            & input[type="text"]:focus, input[type="password"]:focus{
                border: 3px solid ${colorBlueBase};
                outline: none;
            }

            & input[type="submit"]{
                outline: none;
                color: white;
                text-shadow: -1px 0px 0 white,
                              0 0 2px white;
                width: fit-content;
                padding: 10px 20px;
                background: ${colorBlueBase};
                transition: background .3s ease;
                cursor: pointer;
                box-shadow: 0 1px 5px #c7c7c7;
            }
            & input[type="submit"]:disabled{
                opacity: .4;
                cursor: not-allowed;
            }
            & input[type="submit"]:hover:disabled{
                color: black;
                background: ${colorGreenBase};
            }
            & input[type="submit"]:hover:disabled{
                color: white;
                background: ${colorBlueBase};
            }
        }
    }
`;
export function Login(props){
    const objCrendentials = {username:"", password:""};
    const [credentials, setCredentials] = useState(objCrendentials);
    const [errors, setErrors] = useState(objCrendentials);

    const navigate = useNavigate();
    
    const objRegex = {username: /^([a-zA-Z0-9]{6,18})+$/,password:/^(?=.*[A-Za-z])[A-Za-z\d]{8,}$/}

    const validateInputs = inputs => {
        const errors = {};

        Object.entries(inputs).forEach(([tagName, val]) => {
            const validate = objRegex[tagName].test(val);
            if(!validate){
                errors[tagName] = !validate;
            }
        });

        return errors;
    };

    const handleChangeInput = e => {
        setErrors(
            validateInputs(
                {
                    ...credentials,
                    [e.target.name]:e.target.value.slice(0,18)
                }
            )
        );

        setCredentials(
            {
                ...credentials,
                [e.target.name]:e.target.value.slice(0,25)
            }
        );
    };

    const handleSubmit = e => {
        e.preventDefault();
        sessionStorage.setItem(hashSession,username ===  credentials.username && password === credentials);
        navigate('/');
    }

    return (
        <div>
            {
                props.session && <Navigate replace to='/' />
            }
            <ContentLoginStyled>
                <h1>Iniciar Sesion</h1>
                <div className="form-inputs">
                    <form action="" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            onChange={handleChangeInput}
                            value={credentials.username}
                            name="username"
                            placeholder="Nombre de Usuario"
                            className={errors.username && 'not-validate'}
                        />
                        <input
                            type="password"
                            onChange={handleChangeInput}
                            value={credentials.password}
                            name="password"
                            placeholder="Contraseña"
                            className={errors.password && 'not-validate'}
                        />
                        <input disabled={ Object.values(errors).length > 0  || errors.username || errors.password} type="submit" value="Enviar" />
                    </form>
                </div>
            </ContentLoginStyled>
        </div>
    )
}