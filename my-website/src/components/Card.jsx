import PropTypes from "prop-types";

function Card({ title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 flex flex-col">
      <h2 className="text-blue-600 text-2xl font-bold mb-2 truncate w-full">
        {title}
      </h2>
      <p className="text-lg">{description}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
