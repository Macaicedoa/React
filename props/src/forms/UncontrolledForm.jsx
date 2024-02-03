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