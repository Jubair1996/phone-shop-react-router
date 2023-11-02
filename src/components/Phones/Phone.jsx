import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Phone = ({ phone }) => {
  // console.log(phone)
  const { id, image, phone_name, brand_name, price, rating } = phone || {};
  return (
    <div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
          <img src={image} className="object-cover w-full h-full" />
        </div>
        <div className="p-6">
          <p className=" bg-green-400 rounded px-1 font-bold text-xl block font-sans antialiased leading-relaxed text-blue-gray-900">
            {phone_name}
          </p>
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {brand_name}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              ${price}
            </p>
          </div>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            {rating}
          </p>
        </div>
        <div className="p-6 pt-0">
         <Link to={`/phones/${id}`}>
         <button
            className="block bg-gray-300 w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            See Details
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};
Phone.propTypes = {
    phone: PropTypes.object.isRequired
  };
export default Phone;
