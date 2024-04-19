import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Datatable from '../../../containers/table';
import registerIcon from '../../../images/icons/registericon.svg';
import api from '../../../config/api';
import InputText from '../../../components/input/text';
import Button from '../../../components/button';

export default function ClientRegister() {
	const { register, handleSubmit, getValues, formState: {errors} } = useForm();
	const [tabSelected, setTabSelected] = useState(1);
	const [modalShown, setModalShown] = useState(false);
	const head = [
		{
			thead: 'Nome',
			dataname: 'name',
			type: 'text'
		},
		{
			thead: 'CPF',
			dataname: 'document',
			type: 'text'
		},
		{
			thead: 'Status',
			dataname: 'clientStatus',
			type: 'text'
		},
	];

	function openModal() {
		setModalShown(!modalShown);
	}

	function submitForm(data){
		const name = `${getValues('firstName')} ${getValues('surName')}`;
		delete data.firstName;
		delete data.surName;
		data.name = name;
		api.post('/users',data).catch((e) => console.log(e));
	}
	
	useEffect(() => {},[handleSubmit]);

	function tabInformation() {
		return(
			<>
				<div>
					<h3 className='box-title'>Informações básicas do cliente</h3>
				</div>
				<div className='row'>
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
					<InputText 
						label='Nome Completo*'
						register={register('name', {
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
						label='Observações'
						register={register('obs',{
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

	function tabProfession() {
		return(
			<>
				<div>
					<h3 className='box-title'>Dados profissionais</h3>
				</div>
			</>
		);
	}

	function referencesInformation() {
		return(
			<>
				<div>
					<h3 className='box-title'>Informações de referência</h3>
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
							<Button onClick={() => setTabSelected(2)} className={ 'list-item' + (tabSelected === 2 && ' selected')} value='Profissionais' />
							<Button onClick={() => setTabSelected(3)} className={ 'list-item' + (tabSelected === 3 && ' selected')} value='Referências' />
						</div>
						<div className='box-right'>
							{tabSelected === 1 && tabInformation()}
							{tabSelected === 2 && tabProfession()}
							{tabSelected === 3 && referencesInformation()}
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

	return(
		<>
			<div className='page-title'>
				<img src={registerIcon}></img>
				<h1>Clientes</h1>
			</div>
			<Datatable
				head={head}
				body={'/clients/all'}
				search={'/clients/search'}
				database={'clients'}
				modal={modalShown && modalFiller()}
				modalHandle={openModal}
			/>
		</>
	);
}