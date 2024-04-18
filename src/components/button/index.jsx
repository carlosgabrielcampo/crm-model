import "./style.scss"
export default function Button({ className, onClick, disabled, value, style }) {
	return (
		<div className='button-input'>
			<input className={className} type="button" style={style} disabled={disabled} onClick={() => onClick()} value={value}/>
		</div>
	);
}