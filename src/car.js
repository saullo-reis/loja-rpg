import { Section } from "./car-styles";
import { Link } from "react-router-dom";

export const Car = ({ parentToChild }) => {
  let arrayCar = parentToChild;
  var soma = 0;

  for (var i = 0; i < arrayCar.length; i++) {
    soma += arrayCar[i].price;
  }

  return (
    <Section>
      <ul>
        {arrayCar.length == 0 ? (
          <h1>Nenhum item adicionado ao carrinho</h1>
        ) : (
          arrayCar.map((element, index) => {
            return (
              <li key={index}>
                <h2>{element.nome}</h2>
                <img src={require(`${element.image}`)} alt="imagem" />
                <h2>Preço: {element.price}</h2>
                <p>{element.desc}</p>
              </li>
            );
          })
        )}
      </ul>
      <h2>Preço total da compra: {soma} Golds</h2>
      {arrayCar.length >= 1 ? (
        <Link to={"/"}>
          <button
            onClick={() => {
              window.alert("Compra Finalizada");
            }}
          >
            Finalizar compra
          </button>
        </Link>
      ) : null}
    </Section>
  );
};
