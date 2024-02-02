import { useEffect, useState } from "react"

function Login({onLogin}) {
  
	const [data, setData] = useState({
		username:"",
		password:"",
		rememberChecked: false,
		buttonDisabled: true
	})

	
	function handleInputChange(event) {
		const name = event.target.name
		const type = event.target.type
		const value = event.target.value
		const checked = event.target.checked

		setData((data)=>
				 {return {...data,[name]:(type!="checkbox"?value:checked)} }	
		)

		setData((data)=>{
			if (data.username.length>=1 && data.password.length>=1) {
				return {...data,buttonDisabled:false} 
			}else {
				return {...data,buttonDisabled:true} 
			}
		})
	}

	function handleButtonLogIn() {
		onLogin(data)
	}

	function handleButtonReset() {
		setData({
			username:"",
			password:"",
			rememberChecked: false,
			buttonDisabled: true
		})
	}

	function handleSubmit(event) {
		event.preventDefault(); /*El evento default del browser es que al hacer submit la página se refresca */
		alert("Enviado")
	}
	
  return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">User:</label>
				<input name="username" value={data.username} type="text" onChange={handleInputChange}/>
				<br />
				<label htmlFor="password">Password</label>
				<input type="password" value={data.password} name="password" onChange={handleInputChange}/>
				<br />
				<label htmlFor="remember">Remember:</label>
				<input type="checkbox" checked={data.rememberChecked} name="rememberChecked" onChange={handleInputChange}/>
				<br />
				<button disabled={data.buttonDisabled} onClick={handleButtonLogIn}>Login</button>
			</form>
			{/* Boton de reset */}
			<button onClick={handleButtonReset} >Reset</button> 
		</div>
  )
}

export default Login