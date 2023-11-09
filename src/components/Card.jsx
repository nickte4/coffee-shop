export default function Card(props) {
  return (
    <>
      <div className="w-64 h-max bg-secondary rounded-lg">
        <img
          className="w-52 mx-auto mt-10 rounded-2xl"
          src={props.image}
          alt="coffee bag"
        />
        <div className="ml-8 my-3 flex justify-content content-center gap-3">
          <h2 className="text-2xl">${props.price}</h2>
          <h2 className="text-2xl text-gray-600">• ({props.reviewCount})</h2>
        </div>
      </div>
    </>
  );
}
