export default function Card(props) {
  return (
    <>
      <div className="w-64 h-max p-1 shadow-lg bg-secondary rounded-lg cursor-pointer transition-all hover:scale-105 hover:border-2 border-primary">
        <img
          className="w-52 mx-auto mt-10 rounded-2xl"
          src={props.coverImg}
          alt="coffee bag"
        />
        <h1 className="ml-3 mt-3 px-5 text-center text-lg font-bold mr-3">
          {props.name} | {props.size}
        </h1>
        <div className="ml-8 my-3 flex justify-content content-center gap-12">
          <h2 className="text-lg">{props.reviewCount} Reviews</h2>
          <h2 className="text-lg opacity-50">${props.price}</h2>
        </div>
      </div>
    </>
  );
}
