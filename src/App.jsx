import React from "react";
import Menu from "./component/menu";
import Form from "./component/Form";
import Card from "./component/Card"; // Assurez-vous d'importer le composant Card

const App = () => {
  // Liste des données de cartes
  const cardData = [
    { title: "Titre 1", description: "Description 1", price: "1000" },
    { title: "Titre 2", description: "Description 2", price: "2000" },
    { title: "Titre 3", description: "Description 3", price: "3000" },
    { title: "Titre 1", description: "Description 1", price: "1000" },
    { title: "Titre 1", description: "Description 1", price: "1000" },
    { title: "Titre 1", description: "Description 1", price: "1000" },
    { title: "Titre 2", description: "Description 2", price: "2000" },
    { title: "Titre 3", description: "Description 3", price: "3000" },
    { title: "Titre 1", description: "Description 1", price: "1000" },
    { title: "Titre 1", description: "Description 1", price: "1000" },
    { title: "Titre 1", description: "Description 1", price: "1000" },
    { title: "Titre 2", description: "Description 2", price: "2000" },
    { title: "Titre 3", description: "Description 3", price: "3000" },
    { title: "Titre 1", description: "Description 1", price: "1000" },
  ];

  return (
    <div>
      <Menu />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "20px" }}>
        <Form />
        <div style={{ marginTop: '100px', marginLeft: '20px',display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", columnGap: "20px" }}>
          {cardData.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} price={card.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
