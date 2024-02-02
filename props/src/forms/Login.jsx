import { useState } from "react"

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

		setData(()=>{
			if (data.username.length>=1 && data.password.length>=1) {
				return {...data,[name]:(type!="checkbox"?value:checked),buttonDisabled:false} 
			}else {
				return {...data,[name]:(type!="checkbox"?value:checked),buttonDisabled:true} 
			}
		})
	}

	function handleButtonClick() {
		onLogin(data)
	}
	
  return (
		<div>
			<label htmlFor="username">User:</label>
			<input name="username" value={data.username} type="text" onChange={handleInputChange}/>
			<br />
			<label htmlFor="password">Password</label>
			<input type="password" value={data.password} name="password" onChange={handleInputChange}/>
			<br />
			<label htmlFor="remember">Remember:</label>
			<input type="checkbox" checked={data.rememberChecked} name="rememberChecked" onChange={handleInputChange}/>
			<br />
			<button disabled={data.buttonDisabled} onClick={handleButtonClick}>Login</button>
		</div>
  )
}

export default Login