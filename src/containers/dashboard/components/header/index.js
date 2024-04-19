/* eslint-disable react/prop-types */
import React from 'react';
import notificationIcon from '../../../../images/icons/notificationicon.svg';
import searchIcon from '../../../../images/icons/searchicon.svg';
import './style.scss';
export default function Header({}) {
	return(
		<header className='header'>
			<div className='userHolder'>
				<p className='room'>{}</p>
				<h1 className='user'>Bem-vindo (a), {}!</h1>
				<p className='type'>{}</p>
			</div>
			<div className='utils'>
				<div className='searchHolder'>
					<div className='search'><img src={searchIcon}></img><input></input></div>
				</div>
				<img className='notificationicon' src={notificationIcon}></img>
			</div>
		</header>
	);
}