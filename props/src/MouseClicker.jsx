function MouseClicker() {
  
	function handleButtonClick(event) {
        //console.log(event)
				console.log(event.target.name)
	}

  return (
    <button name= "one" onClick={handleButtonClick}>Click me!</button>
  )
}

export default MouseClicker