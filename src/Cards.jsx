import React from "react";

const Card = ({id, title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 max-w-sm">
      {image && <img src={image} alt={title} className="rounded-t-2xl h-48 w-full object-cover" />}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

const CardList = () => {
  const data = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the description for card 1.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the description for card 2.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the description for card 3.",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {data.map((item) => (
        <Card key={item.id} title={item.title} description={item.description} image={item.image}/>
      ))}
    </div>
  );
};

export default CardList;
