/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import Datatable from '../../../containers/table';
import registerIcon from '../../../images/icons/registericon.svg';
import { InputText, Button, Checkbox, InputSelect } from '../../../components';
import { useForm } from 'react-hook-form';
import validate from '../../../util/validationModel/index.js';
import plus from '../../../images/icons/plusIcon.svg';
import minus from '../../../images/icons/minusicon.svg';
import api from '../../../config/api';
import CRMContext from '../../../context/crmContext';
export default function UserRegister() {
	const { register, handleSubmit, getValues, setValue, resetField, formState: {errors} } = useForm();
	const [tabSelected, setTabSelected] = useState(1);
	const [modalShown, setModalShown] = useState(false);
	const [open, setOpen] = useState({});
	const {setAlertstate} = useContext(CRMContext);
	const head = [
		{
			thead: 'Nome',
			dataname: 'name',
			type: 'text'
		},
		{
			thead: 'E-mail',
			dataname: 'email',
			type: 'text'
		},
		{
			thead: 'Grupo',
			dataname: 'room',
			type: 'select'
		}, 
		{
			thead: 'Dt.Cadastro',
			dataname: 'createdAt',
			type: 'date'
		},
		{
			thead: 'Tipo',
			dataname:'type',
			type: 'select'
		},
		{
			thead: 'CPF',
			dataname: 'document',
			type: 'text'
		}
	];
	const type = ['Vendedor', 'Gerente', 'Administrador'];
	const room = ['VMD', 'PEG'];

	function openModal() {
		setModalShown(!modalShown);
	}

	useEffect(() => {},[handleSubmit]);

	function submitForm(data){
		const name = `${getValues('firstName')} ${getValues('surName')}`;
		delete data.firstName;
		delete data.surName;
		data.name = name;
		data.permissions = validate;
		api.post('/users',data)
			.then(() => {setAlertstate({class: 'success', msg: 'Dados salvos com sucesso', show: true});	setModalShown(false);})
			.catch((e) => setAlertstate({class: 'error', msg: e.response.data, show: true}));
	}
	function tabInformation() {
		return(
			<>
				<div>
					<h3 className='box-title'>Informações do usuário</h3>
				</div>
				<div className='row'>
					<InputText 
						label='Nome*'
						register={register('firstName',{
							required: {
								value: true,
								message: 'Este campo é obrigatorio'
							}
						})}
						errors={errors}
					/>
					<InputText 
						label='Sobrenome*'
						register={register('surName', {
							required: {
								value: true,
								message: 'Este campo é obrigatorio'
							}
						})}
						errors={errors}
					/>
				</div>
				<div className='row'>
					<InputText 
						label='E-mail*' 
						register={register('email',{
							required: {
								value: true,
								message: 'Este campo é obrigatorio'
							}
						})}
						errors={errors}
					/>
					<InputText 
						label='CPF*'
						register={register('document',{
							required: {
								value: true,
								message: 'Este campo é obrigatorio'
							}
						})}
						errors={errors}
					/>
				</div>
				<div className='row'>
					<InputText label='Senha*'
						register={register('password',{
							required: {
								value: true,
								message: 'Este campo é obrigatorio'
							}
						})}
						errors={errors}
					/>
					<InputText label='Validar 
          Senha*'
					register={register('password',{
						required: {
							value: true,
							message: 'Este campo é obrigatorio'
						}
					})}
					errors={errors}
					/>
				</div>
				<div className='row'>
					<InputSelect
						disabled={true}
						items={room}
						label='Grupo*'
						onMouseUp={(info) => {
							setValue('room',info.target.innerHTML);
						}}
						register={register('room',{
							required: {
								value: true,
								message: 'Este campo é obrigatorio'
							},
						})}
						errors={errors}
					/>
					<InputSelect
						label='Tipo Usuário*'
						items={type}
						disabled={true}
						onMouseUp={({target}) => {
							target.innerHTML 
								? setValue('type', target.innerHTML) 
								: resetField('type');
						}}
						register={register('type', {
							required: {
								value: true,
								message: 'Este campo é obrigatorio'
							},
						})}
						errors={errors}
					/>
				</div>
			</>
		);
	}

	function tabPermission() {
		return(
			<>
				<div>
					<h3 className='box-title'>Permissões do usuário</h3>
				</div>
				<div className='collapsible-buttons'>
					{ Object.keys(validate).map((e, i) => {
						return(
							<div key={i}>
								<div onClick={() => setOpen((prevState => ({...prevState, [e]: !prevState[e]})))} className='category-btn'>
									<img className='plus-icon' src={open[e] ? minus : plus}></img>
									<p plusIcon={true}	key={i}>{e}</p>
								</div>
								{ Object.keys(validate[e]).map((section, i) => {
									return (
										<div key={i} className={open[e] ? 'section' : ' section hide'}>
											<h3 key={i}>{section}</h3>
											<div className='options'>
												{ Object.keys(validate[e][section]).map((option, i) => {
													return (
														<Checkbox 
															key={i} 
															id={section+option} 
															label={option} 
															className="input-option"
															onClick={() => validate[e][section][option]= !validate[e][section][option]}
														/>
													);
												})}
											</div>
										</div>
									);
								})}
							</div>
						); 
					})}
				</div>
			</>
		);
	}

	function complementInformation() {
		return(
			<>
				<div>
					<h3 className='box-title'>Informações complementares</h3>
				</div>
				<div className='row'>
					<InputText 
						label='Chave PIX'
						register={register('bank_accounts.pix')}
						errors={errors}
					/>
					<InputText 
						label='Banco'
						register={register('bank_accounts.bank')}
						errors={errors}
					/>
					<InputText 
						label='Agêcia'
						register={register('bank_accounts.bank_branch')}
						errors={errors}
					/>
					<InputText 
						label='Tipo de Conta'
						register={register('bank_accounts.acc_type')}
						errors={errors}
					/>
				</div>
				<div className='row'>
					<InputText 
						label='Rua'
						register={register('address.street')}
						errors={errors}
					/>
					<InputText 
						label='Bairro'
						register={register('address.neighborhood')}
						errors={errors}
					/>
					<InputText 
						label='Número'
						className='p10'
						register={register('address.number')}
						errors={errors}
					/>
					<InputText label='Complemento'
						className='p10'
						register={register('address.complement')}
						errors={errors}
					/>
				</div>
				<div className='row'>
					<InputText 
						label='CEP'
						register={register('address.cep')}
						errors={errors}
					/>
					<InputText 
						label='Cidade'
						register={register('address.city')}
						errors={errors}
					/>
					<InputText 
						label='Estado'
						register={register('address.state')}
						errors={errors}
					/>
				</div>
			</>
		);
	}

	function modalFiller() {
		return(
			<form>
				<div className='modal'>
					<div className='modal-title'>
						<p>Novo cadastro</p>
					</div>
					<div className='modal-box'>
						<div className='box-left'>
							<Button onClick={() => setTabSelected(1)} className={ 'list-item' + (tabSelected === 1 && ' selected')} value='Informações' />
							<Button onClick={() => setTabSelected(2)} className={ 'list-item' + (tabSelected === 2 && ' selected')} value='Permissões' />
							<Button onClick={() => setTabSelected(3)} className={ 'list-item' + (tabSelected === 3 && ' selected')} value='Complementar' />
						</div>
						<div className='box-right'>
							{tabSelected === 1 && tabInformation()}
							{tabSelected === 2 && tabPermission()}
							{tabSelected === 3 && complementInformation()}
						</div>
					</div>
					<div className='btnModal'>
						<Button value="Gravar" onClick={handleSubmit(submitForm)} className='save'/>
						<Button value="Cancelar" onClick={openModal} />
					</div>
				</div>
			</form>
		);
	}

	return (
		<>
			<div className='page-title'>
				<img src={registerIcon}></img>
				<h1>Usúarios</h1>
			</div>
			<Datatable
				head={head}
				body={'/users/all'}
				search={'/users/search'}
				database={'users'}
				modal={modalShown && modalFiller()}
				modalHandle={openModal}
			/>
		</>
	);
}