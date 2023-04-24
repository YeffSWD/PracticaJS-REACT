import './task.css' // Esto importa un archivo de estilos

export function TaskCard({ready}) {
    // const cardStyles = {
    //     background: "#202020",
    //     color: "#fff",
    //     padding: "20px",
    //     margin: "20px",
    //   }
    // const titleStyle = { fontWeight: "lighter" }

    

    return (
      <div className="card">
        <h1>Mi primer tarea</h1>
        {/* <span style={ready ? { color: "green" } : { color: "red" }}> */}
        <span className={ready ? 'c-green' : 'c-red'}>
          {ready ? "Tarea Realizada" : "Tarea Pendiente"}
        </span>
      </div>
    );
}