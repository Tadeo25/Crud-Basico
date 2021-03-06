import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
const AgregarProducto = () => {
  // crear states
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);
  // Traer variable de entorno
  const URL = process.env.REACT_APP_API_URL;
  
  const leerCategoria = (e) =>{
    setCategoria(e.target.value)
  }

  const handleSubmit = async (e) =>{
        e.preventDefault()
    //validaciones
    if(nombreProducto.trim() !== '' && precioProducto !== '' && categoria !== ''){
    // si esta bien envio datos del producto a la API
      setError(false);
    // crear objeto
    const producto = {
      // nombreProducto : nombreProducto,
      // precioProducto : precioProducto,
      // categoria : categoria
      nombreProducto,
      precioProducto,
      categoria
    }

    // enviar el request POST 
      try{
        // estructura de datos a usar
          const cabecera = {
            method: "POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
          };
          const response = await fetch(URL, cabecera)
          console.log(response)

          if(response.status === 201){
            alert('datos enviados')
            // Mostart una ventama de sweet alert
          }

      }catch(error){
        // mostrar un cartel de error al usuario

      }

    }else{
    // si fallo muestro cartel de error
      setError(true);
    }
  }
  return (
    <Container>
      <Form className="my-5" onSubmit={handleSubmit}>
        <h1 className="my-5">Agregar nuevo producto</h1>
        <Form.Group>
          <Form.Label>Nombre del producto*</Form.Label>
          <Form.Control type="text" placeholder="Café" onChange={(e)=> setNombreProducto(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="number" placeholder="50" onChange={(e)=> setPrecioProducto(e.target.value)}></Form.Control>
        </Form.Group>
        <h3 className="text-center mt-4">Categoria</h3>
        <div className="text-center my-4">
          <Form.Check
            inline
            type="radio"
            label="Bebida caliente"
            name="categoria"
            value='bebida-caliente'
            onChange={leerCategoria}
          ></Form.Check>
          <Form.Check
            inline
            type="radio"
            label="Bebida fria"
            name="categoria"
            value='bebida-fria'
            onChange={leerCategoria}
          ></Form.Check>
          <Form.Check
            inline
            type="radio"
            label="Dulce"
            name="categoria"
            value='dulce'
            onChange={leerCategoria}
          ></Form.Check>
          <Form.Check
            inline
            type="radio"
            label="Salado"
            name="categoria"
            value='salado'
            onChange={leerCategoria}
          ></Form.Check>
        </div>
        <Button variant='outline-warning' type='submit' className="w-100">Guardar</Button>
        {
          (error === true)?(
            <Alert variant='danger' className="my-5">Faltan cargar datos obligatorios</Alert>
          ): null
        }

      </Form>
    </Container>
  );
};
export default AgregarProducto;
