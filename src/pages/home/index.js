/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useState } from 'react';
import Alert from '../../components/alert/index.jsx';
import './style.scss';

export default function Home() {
	const [alertState, setAlertstate] = useState(true);
	useEffect(() => {
		// jsonwebtoken.decode();
	});
	return (
		<>
			{ alertState && 
      <Alert 
      	className='success'
      	message='Dados salvos com sucesso'
      	onClick={() => setAlertstate(!alertState)}
      />
			}
			<div className='homebox'></div>
		</>
	);
}