import { useFetch } from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";

const Product = () => {

  // rota dinamica com useParams, pode desestruturar 
  // esse nome id vem la do home.js link dinamico
  const { id } = useParams();

  // trazer item individual
  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url);

  console.log(product);
  return(
    <>
    <p>ID do produto: {id} </p>
    {error && <p>Ocorreu um erro</p>}
    {loading && <p>Carregando...</p>}
    {product && (
      <div>
        <h1>{product.name}</h1>
        <p>R${product.price}</p>
      {/* Nested Routes */}
      <Link to={`/products/${product.id}/info`}>Mais informacoes</Link>
      </div>
    )}
    </>
  );
}

export default Product