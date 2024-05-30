import CakeCard from "./CakeCard";

const CakeGallery = () => {
  const cakes = [
    {
      name: "Chocolate Truffle",
      image: "cake1.jpg",
      price: 700,
      cakeid: 1,
    },
    {
      name: "White Truffle",
      image: "cake2.jpg",
      price: 600,
      cakeid: 2,
    },
    {
      name: "Coffee cake",
      image: "cake5.jpg",
      price: 700,
      cakeid: 3,
    },
    {
      name: "Black Forest",
      image: "cake4.jpg",
      price: 600,
      cakeid: 4,
    },
    {
      name: "Pine Apple",
      image: "cake3.jpg",
      price: 700,
      cakeid: 5,
    },
    {
      name: "Butter Scotch",
      image: "cake1.jpg",
      price: 600,
      cakeid: 6,
    },
    {
      name: "Ras Malai Cake",
      image: "cake5.jpg",
      price: 700,
      cakeid: 7,
    },
    {
      name: "Dark Chocolate",
      image: "cake4.jpg",
      price: 600,
      cakeid: 8,
    },
    {
      name: "Red Velvet",
      image: "cake1.jpg",
      price: 700,
      cakeid: 9,
    },
    {
      name: "Blueberry Cheesecake",
      image: "cake2.jpg",
      price: 600,
      cakeid: 10,
    },
    {
      name: "Burnt Vanilla Cheesecake",
      image: "cake1.jpg",
      price: 700,
      cakeid: 11,
    },
    {
      name: "Lotus Biscoff Icecream cake",
      image: "cake2.jpg",
      price: 600,
      cakeid: 12,
    },
    {
      name: "Dark Devil Fudge Cake",
      image: "cake5.jpg",
      price: 700,
      cakeid: 13,
    },
    {
      name: "Nutella Crunch Cake",
      image: "cake4.jpg",
      price: 600,
      cakeid: 14,
    },
    {
      name: "Nuttty Almond cake",
      image: "cake3.jpg",
      price: 700,
      cakeid: 15,
    },
    {
      name: "Oreo Cake",
      image: "cake1.jpg",
      price: 600,
      cakeid: 16,
    },
    {
      name: "Butter Almond Cake",
      image: "cake5.jpg",
      price: 700,
      cakeid: 17,
    },
    {
      name: "Ferrero Cake",
      image: "cake4.jpg",
      price: 600,
      cakeid: 18,
    },
    {
      name: "Hazzelnul Rocher Cake",
      image: "cake1.jpg",
      price: 700,
      cakeid: 19,
    },
    {
      name: "Caramel Almond Cake",
      image: "cake2.jpg",
      price: 600,
      cakeid: 20,
    },
  ];
  return (
    <div style={{ marginBottom: "550px" }}>
      <div
        style={{
          borderStyle: "solid",
          borderColor: " gold",
          padding: "7px",
          marginBottom: "10px",
          display: "inline-block",
        }}
      >
        <h3 style={{ fontWeight: "bold" }}> Cake 🎂 Gallery </h3>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {cakes.map((cake) => {
          return <CakeCard key={cake.cakeid} cake={cake} />;
        })}
      </div>
    </div>
  );
};

export default CakeGallery;
