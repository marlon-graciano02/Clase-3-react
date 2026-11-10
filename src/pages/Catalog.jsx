

const Catalog = () => {
    const producto1 ="zapatos";
    const precio1 = "$50";

    const producto2 = "Camisa";
    const precio2 = "$25";


    const producto3 = "Pantalon";
    const precio3 = "$40"
  return (
    <section>
        <h2>Catalogo de Productos</h2>


    <div className="tarjeta">
        <h3>{producto1}</h3>
        <p>Precio:{precio1}</p>
        </div>

        <div className="tarjeta">
            <h3>{producto2}</h3>
            <p>precio:{precio2}</p>
        </div>

        <div className = "tarjeta">
        <h3>{producto3}</h3>
        <p>precio:{precio3}</p>
        </div>

     </section>
  );
};

export default Catalog