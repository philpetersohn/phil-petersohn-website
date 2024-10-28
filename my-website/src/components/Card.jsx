function Card({ title, description }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 flex flex-col">
      <h2 className="text-blue-600 text-2xl font-bold mb-2 text-nowrap">
        {title}
      </h2>
      <p className="text-xl max-w-4xl mx-auto">{description}</p>
    </div>
  );
}

export default Card;
