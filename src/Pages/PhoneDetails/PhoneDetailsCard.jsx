const PhoneDetailsCard = ({ phone }) => {
  const { id, image, phone_name, brand_name } = phone || {};
  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-md">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img
            src={image}
            alt="image"
            className="object-cover w-full h-full bg-gray-300"
          />
        </div>
        <div className="p-6">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
           {phone_name}
          </h6>
          <h4 className="block mb-8 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {brand_name}
          </h4>
          <a className="inline-block" href="#">
            <button
              className="flex items-center gap-2 px-6 bg-blue-300 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
             Add To Fevorite
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetailsCard;
