import Color from "./Color";

function Colors({items}) {

  return (
    
      <ul>
        {items.map((item) => (
          <Color key={item.id} color={item}/>
        ))}
      </ul>
    
  );
}

export default Colors;
