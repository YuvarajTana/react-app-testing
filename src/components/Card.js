
const Card = ({ id, name, price, rating }) => {
  return <div>
    <p>{id}</p>
    <p>{name}</p>
    <p>{price}</p>
    <p>{rating}</p>
  </div>
};
export default Card;