import { useEffect, useState } from "react";
import AddToFevorite from "./AddToFevorite";

const Fevorite = () => {
  const [fevorites, setFevorites] = useState([]);
  const [noDataFound, setNoDataFound] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  //   const [noDataFound, setNoDataFound] = useState(false)

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

    if (favoriteItems) {
      setFevorites(favoriteItems);
      const total = favoriteItems.reduce(
        (preValue, currentItem) => preValue + currentItem.price,
        0
      );

      //   console.log(total);

      setTotalPrice(total);
    } else {
      setNoDataFound("No data Found");
    }
  }, []);
  //   console.log(fevorites);
  const handleRemove = () => {
    localStorage.clear();
    setFevorites([]);
    setNoDataFound("No data Found");
  };
  return (
    <div>
      {fevorites.length > 0 && (
       <div>
         <button
          onClick={handleRemove}
          className="px-5 block mx-auto rounded bg-green-600 my-8 text-white font-semibold text-xl"
        >
          Delete Favorite Phone
        </button>
        <h1 className="text-center text-xl font-semibold mb-4">Total price : {totalPrice}</h1>
       </div>
      )}

      {noDataFound ? (
        <p className="flex justify-center items-center h-[80vh]">
          {noDataFound}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {isShow
            ? fevorites.map((phone) => (
                <AddToFevorite key={phone.id} phone={phone}></AddToFevorite>
              ))
            : fevorites
                .slice(0, 2)
                .map((phone) => (
                  <AddToFevorite key={phone.id} phone={phone}></AddToFevorite>
                ))}
        </div>
      )}

      {fevorites.length > 2 && (
        <button
          onClick={() => setIsShow(!isShow)}
          className="px-5 block mx-auto rounded bg-green-600 my-8 text-white font-semibold text-xl"
        >
          {isShow ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
};

export default Fevorite;
