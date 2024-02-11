import { useState } from "react"
import { useForm } from "./useForm"

function HookForm() {

    const {data,onInputChange,onReset,onLogin,onSubmit}=useForm()
	
  return (
		<div>
			<form onSubmit={onSubmit}>
				<label htmlFor="username">User:</label>
				<input name="username" value={data.username} type="text" onChange={onInputChange}/>
				<br />
				<label htmlFor="password">Password</label>
				<input type="password" value={data.password} name="password" onChange={onInputChange}/>
				<br />
				<label htmlFor="remember">Remember:</label>
				<input type="checkbox" checked={data.rememberChecked} name="rememberChecked" onChange={onInputChange}/>
				<br />
				<button disabled={!data.username||!data.password} onClick={onLogin}>Login</button>
			</form>
			{/* Boton de reset */}
			<button onClick={onReset} >Reset</button> 
		</div>
  )
}

export default HookForm