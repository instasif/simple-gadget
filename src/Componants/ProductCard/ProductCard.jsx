import { Link } from "react-router-dom";


const ProductCard = ({product}) => {
    const {name, img, price} = product;
    return (
        <Link href="#" className="group relative block overflow-hidden">
  <img
    src={img}
    alt=""
    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
  />

  <div className="relative border border-gray-100 bg-white p-6">
    <span
      className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"
    >
      New
    </span>

    <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>

    <p className="mt-1.5 text-sm text-gray-700"><span className="text-xl font-bold">৳</span>{price}</p>

    <Link className="mt-4">
      <button
        className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
      >
        See Details
      </button>
    </Link>
  </div>
</Link>
    );
};

export default ProductCard;