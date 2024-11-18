export default function TeamCard({ name, desc, since, image }) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{desc}</p>
        <p>{since}</p>
      </div>
    </div>
  );
}
