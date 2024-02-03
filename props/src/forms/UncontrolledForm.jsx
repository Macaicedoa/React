function UncontrolledForm() {

	function handleFormSubmit(event) {
		event.preventDefault()
		const username = event.target.elements.namedItem('username').value
		const password = event.target.elements.namedItem('password').value
		const session = event.target.elements.namedItem('session').checked

		const data = {
			username,
			password,
			session
		}
		
		console.log(data)

		const myFormData = new FormData(event.target)

		console.log(myFormData.get('username'),myFormData.get('password'))

		/*Advantages:
		 There’s less boilerplate when there are many inputs and we don’t need to manage multiple hook calls or a large complex state object.
		 Disadvantages:
		 We don’t have direct access to each input’s value. This can make custom validation more difficult, and makes direct input value manipulation impossible 
		 (like disabling buttons or checking passwords)
		 */

	}

  return (
    <form onSubmit={handleFormSubmit}>
			<label htmlFor="username">Username:</label>
			<input name="username" type="text" />
			<br />
			<label htmlFor="password">Password</label>
			<input name="password" type="password"  />
			<br />
			<label htmlFor="session">Remember</label>
			<input type="checkbox" name="session" />
			<br />
			<button>Login</button> 
			<button type="reset">Reset</button>
    </form>
  )
}

export default UncontrolledForm