import Color from "./Color";

function Colors({colors}) {

  return (
    <div>
      <ul>
        {colors.map((color) => (
          <Color color={color}/>
        ))}
      </ul>
    </div>
  );
}

export default Colors;
