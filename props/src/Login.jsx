import { useState } from "react"

function Login() {
  
	const [data, setData] = useState({
		username:"",
		password:"",
		remember: false,
	})
	
	function handleInputChange(event) {
		const name = event.target.name
		const type = event.target.type
		const value = event.target.value
		const checked = event.target.checked

		setData(()=>{
			return {...data,[name]:(type!="checkbox"?value:checked)}
		})
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
			<input type="checkbox" checked={data.remember} name="remember" onChange={handleInputChange}/>
		</div>
  )
}

export default Login