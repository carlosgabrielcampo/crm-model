/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import homeIcon from '../../images/icons/homeicon.svg';
import registerIcon from '../../images/icons/registericon.svg';
import settingIcon from '../../images/icons/settingicon.svg';
import horizontalStack from '../../images/icons/horizontalstack.svg';
import logoutIcon from '../../images/icons/logouticon.svg';
import financialIcon from '../../images/icons/financialIcon.svg';
import logoIcon from '../../images/icons/logoicon.svg';
import userIcon from '../../images/icons/user.svg';
import lockIcon from '../../images/icons/lockicon.svg';
import unlockIcon from '../../images/icons/unlockicon.svg';

import { useNavigate } from 'react-router-dom';
import DashboardOption from './components/options';
import Header from './components/header';
import Alert from '../../components/alert/index.jsx';
// import CRMProvider from '../../config/context/provider';

export default function DashboardContainer({ children }) {
	const [sidebarOpen, setSidebarOpen ] = useState(false);
	// const {alertState, setAlertstate} = useContext(CRMProvider);
	const [user, setUser] = useState();
	const [iconsState, seticonsState ] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('user'));
		setUser(data);
	},[]);

	function handleClick(path, event) {
		const parent = event?.target?.parentElement.id;
		navigate(path);
		if(parent) { 
            seticonsState((prevState => ({...prevState, [parent]: !prevState[parent]}))) 
        } else return ""
	}

	const dashOptions = [
		{
			name: 'Home',
			id: 'home-options',
			icon: homeIcon,
			arrowEnable: true,
			path: '/home',
		},
		{
			name: 'Cadastro',
			id: 'cadastro-options',
			icon: registerIcon,
			arrowEnable: true,
			path: '/cadastro',
			options: [
				{
					name: 'Cadastro de usuários',
					path: '/cadastro/usuarios'
				},
				{
					name: 'Cadastro de clientes',
					path: '/cadastro/clientes'
				},
			]
		},
		{
			name: 'Funil',
			id: 'funil-options',
			icon: horizontalStack,
			arrowEnable: true,
			path: '/funil',
		},
		{
			name: 'Financeiro',
			id: 'financeiro-options',
			icon: financialIcon,
			arrowEnable: true,
			path: '/financeiro',
		},
		{
			name: 'Configurações',
			id: 'configuracoes-options',
			icon: settingIcon,
			arrowEnable: true,
			path: '/configuracoes',
		},
		{
			name: 'Sair',
			icon: logoutIcon,
			arrowEnable: false,
			path: '/',
		}
	];

	return (
		<div className='page'>
			{ 
		// 		alertState?.show && 
		// <Alert 
		// 	className={alertState?.class}
		// 	message={alertState?.msg}
		// 	onClick={() => setAlertstate({show: false})}
		// />
			}
			<div className={`dashboard ${sidebarOpen ? 'open' : 'closed'}`} >
				<div className='logo'>
					<div className='logoHolder'>
						<img src={logoIcon}></img>
						<p>SBase</p>
					</div>
				</div>
				<div className='user'>
					<div className='userHolder'>
						<img src={userIcon}></img>
						<p>{user?.name}</p>
					</div>
				</div>
				<div className='icons' >
					{dashOptions.map((e, i) => {
						return(
							<DashboardOption
								key={i}
								icon={e.icon}
								id={e.id}
								name={e.name}
								arrowEnable={e.arrowEnable}
								iconsState={iconsState}
								path={e.path}
								handleClick={handleClick}
								options={e.options}
							/>
						);
					})}
				</div>
				<div className='lockPlacer'>
					<div className='lockHolder' onClick={() => setSidebarOpen(!sidebarOpen) }>
						<div>
							<img src={sidebarOpen ? lockIcon : unlockIcon} className='exit'></img>
						</div>
					</div>
				</div>
			</div>
			<div className='pageRight'>
				<Header user={user}/>
				<div className='childElements'>	{children} </div>
			</div>
		</div>
	);
}