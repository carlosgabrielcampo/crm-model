/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, {useEffect, useState} from 'react';
import api from '../../config/api';
import { Button, Modal, InputText, InputSelect } from '../../components';
import './style.scss';


export default function Datatable({head, body, modal,database, modalHandle, search}) {
	const [tableHide, setTableHide] = useState(true);
	const [tablebody, setBody] = useState();
	const [infoSearch, setInfoSearch] = useState();
	const [selectInfo, setSelectInfo] = useState();
  
	useEffect(() => {
		api.get(body).then((response) =>{
			setBody(response.data);
			setSelectInfo(response.data);
		}).catch((e) => {  
			console.log(e);
		});
	},[]);

	useEffect(() => {
		infoSearch && api.post(search, infoSearch).then((response) =>{
			setBody(response.data);
		}).catch((e) => {  
			console.log(e);
		});
	},[infoSearch]);

	function hideData() {
		setTableHide(!tableHide);
	}

	return (
		<div className='pageContent'>
			{ modal && 
      <Modal>
      	{modal}
      </Modal>	
			}
			<div className='tableBtns'>
				<Button value='Novo Usuário' className='register' onClick={modalHandle}></Button>
				<Button value='Pesquisar' onClick={hideData} className='search'></Button>
			</div>
			<div className='modal-buttons'>
			</div>
			<div className={tableHide ? 'tableHolder hide' : 'tableHolder'}>
				<table>
					<thead>
						{ tablebody && selectInfo && body && head.map((e, i) => {
							const selectItems = [];
							selectInfo[database].map((ele) => {
								if(typeof ele[e.dataname] === 'object'){
									if(selectItems.indexOf(...ele[e.dataname]) === -1) {
										selectItems.push(...ele[e.dataname]);
									}
								} else if(selectItems.indexOf(ele[e.dataname]) === -1) {
									selectItems.push(ele[e.dataname]);
								}
							});
							return (
								<tr key={i} className='head-input'>
                	<p key={i}>{e.thead}</p>
									{e.type === 'text' && 
                    <InputText
                    	onChange={(info) => {
                    		setInfoSearch((prevState => ({...prevState, [e.dataname]: info.target.value})));
                    	}}
                    />
									}
									{e.type === 'date' && 
                    <InputText
                    	type={e.type}
                    	onChange={(info) => {
                    		setInfoSearch((prevState => ({...prevState, [e.dataname]: info.target.value})));
                    	}}
                    />
									}
									{e.type === 'select' && 
                    <InputSelect
                    	items={selectItems}
                    	onChange={(info) => {
                    		setInfoSearch((prevState => ({...prevState, [e.dataname]: info.target.value})));
                    	}}
                    	onMouseUp={(info) => {
                    		setInfoSearch((prevState => ({...prevState, [e.dataname]: info.target.innerHTML})));
                    	}}
                    />
									}
								</tr>
							);})}
					</thead>
					<tbody>
						{tablebody && tablebody[database].map((line, i) => { 
							return (
								<tr key={i}>{
									line && head.map((e, i) => { 
										return ( <td key={i}>{line[head[i]?.dataname]}</td> ); 
									})
								}</tr>
							);})
						}
					</tbody>
				</table>
			</div>
		</div>
	);
}