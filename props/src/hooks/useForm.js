import { useState } from "react"

export function useForm() {
    
    const [data, setData] = useState({
		username:"",
		password:"",
		rememberChecked: false,
		buttonDisabled: true
	})

    function onLogin(state) {
        console.log(state)
    }
	
	function handleInputChange(event) {
		const name = event.target.name
		const type = event.target.type
		const value = event.target.value
		const checked = event.target.checked

		setData((data)=>
				 {return {...data,[name]:(type!="checkbox"?value:checked)} }	
		)
	}

	function handleButtonLogIn() {
		onLogin(data)
	}

	function handleButtonReset() {
		setData({
			username:"",
			password:"",
			rememberChecked: false,
		})
	}

	function handleSubmit(event) {
		event.preventDefault(); /*El evento default del browser es que al hacer submit la página se refresca */
		alert("Enviado")
	}

    return {data:data,onInputChange:handleInputChange,onReset:handleButtonReset,onLogin:handleButtonLogIn,onSubmit:handleSubmit}
    
}