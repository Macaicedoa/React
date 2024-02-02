function MouseClicker() {
  
	function handleButtonClick(event) {
		console.log(event.target.name)
	}

	function handleimageClick(event) {
		event.stopPropagation();
		console.log(event.target.src)	
	}

  return (
    <button name= "one" onClick={handleButtonClick}>
			<img onClick={handleimageClick} src="../public/vite.svg" alt="" width={16} height={16}/>
			Click me!
		</button>
  )
}

export default MouseClicker