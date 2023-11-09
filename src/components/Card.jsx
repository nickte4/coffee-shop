export default function Card(props) {
  return (
    <>
      <div className="w-64 h-96 bg-secondary rounded-lg">
        <img
          className="w-52 mx-auto mt-10 rounded-2xl"
          src={props.image}
          alt="coffee bag"
        />
        <h2 className="text-2xl ml-5">${props.price}</h2>
      </div>
    </>
  );
}
