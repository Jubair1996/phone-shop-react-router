import Phone from "./Phone";
import PropTypes from "prop-types";
const Phones = ({ phones }) => {
  return (
    <div>
      <h1 className="py-4 font-semibold text-2xl text-center">
        Our Phones Collections
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {phones.map((phone) => (
          <Phone key={phone.id} phone={phone}></Phone>
        ))}
      </div>
    </div>
  );
};
Phones.propTypes = {
  phones: PropTypes.array.isRequired,
};
export default Phones;
