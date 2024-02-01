function MouseClicker() {
  
	function handleButtonClick(event) {
        //console.log(event)
				//console.log(event.target.src)
				console.log(event.target == event.currentTarget ? event.target.name : event.target.src)
	}

  return (
    <button name= "one" onClick={handleButtonClick}>
			<img src="../public/vite.svg" alt="" width={16} height={16}/>
			Click me!
			</button>
  )
}

export default MouseClicker