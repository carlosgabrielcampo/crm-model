import './style.scss';
export default function InputText({  className, maxLength,  onChange, onKeyUp,  type,  label,  placeholder,  value,  linkName,  handlerClickLink, errors,  register,  children,  disabled, required }) {
	return(
		<div className={ (className ? className : '') + ' content-input'}>
			<input type={type} placeholder={ placeholder || ' ' } { ...register } onChange={onChange} value={ value } onKeyUp={onKeyUp} maxLength={maxLength} required={required} disabled={disabled}/>
			<label>{ label }</label>
			{ children }
			{ errors && errors[register.name] &&  <span className="error-message">{ errors[register.name].message }</span> }
			{ linkName && <p className="link" onClick={ () => handlerClickLink() }>{ linkName }</p> }
		</div>
	);
}