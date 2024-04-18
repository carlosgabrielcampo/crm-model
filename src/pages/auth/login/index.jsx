import { useNavigate } from 'react-router-dom';
import api from '../../../config/api';
import './style.scss';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import InputText from '../../../components/input/text';
import Button from '../../../components/button';

export default function Login() {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [error, setError] = useState({
		error: true,
		message: null
	});
	const [email, setemail] = useState();
	const navigate = useNavigate();

	function auth({ email, password }) {
		api.post('/login', { email, password })
			.then(response => {
				const { data } = response;
				if (data.error) {
					setError(data);
				} else {
					sessionStorage.setItem('jwt', data.token);
					localStorage.setItem('user', JSON.stringify(data.user));
					navigate('/home');
				}
			})
			.catch(error => {
				console.error(error);
			});
	}

	return (
		<div className="box">
			<div className='box-left'>
				<div className='content'>
					<div className='title'>
						<h1>Seja inesquecível. Construa</h1>
						<h1>relacionamentos com seus clientes.</h1>
					</div>
					<div className='subtitle'>
						<h2>No mundo contemporâneo ter um atendimento excelente é o mínimo, não basta saber muito sobre o seu produto. Você precisa ser inesquecível, você precisa ser o melhor.</h2>
						<h2>Seja o melhor, seja XXXXXX.</h2>
					</div>
				</div>
			</div>
			<div className='box-right'>
				<div className='title'>
					<h1>Bem-vindo (a),</h1>
					<h1>Vamos começar!</h1>
				</div>
				<div className='subtitle'>
					<h2>Use suas credenciais para fazer o login.</h2>
					<h2>Se você não é um membro, registre-se.</h2>
				</div>
				<form>
					<InputText 
						type="text"
						placeholder="Email"
						register={register('email', { 
							required: { 
								value: true, 
								message: 'Este campo é obrigatorio!' 
							},
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: 'Email inválido'
							},
							setValueAs: value => {
								setemail(value);
								return email;
							}
						})}
						errors={errors}
					/>
					<InputText
						type="password"
						placeholder="Senha"
						register={register('password', { 
							required: {
								value: true, 
								message: 'Este campo é obrigatorio!' 
							}
						})}
						errors={errors}
					/>
					<Button 
						value="Login" 
						className="button-control" 
						onClick={handleSubmit(auth)} />
					{ error.error && <p className="error-message">{error.message}</p> }
				</form>
			</div>
		</div>
	);
}