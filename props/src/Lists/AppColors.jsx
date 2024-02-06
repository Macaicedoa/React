import Colors from "./Colors";

function AppColors() {
  const colors = [
    { id: 1, name: "red" },
    { id: 2, name: "blue" },
    { id: 3, name: "green" },
    { id: 4, name: "green" },
  ];
  return (
    <div>
      <h1>Lists</h1>
      <hr />
      <h2>Colores</h2>
      <Colors items={colors}/>
    </div>
  );
}

export default AppColors;
