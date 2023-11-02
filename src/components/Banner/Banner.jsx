const Banner = () => {
  return (
    <div
      className="h-[70vh] bg-green-200 flex justify-center items-center rounded"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundOrigin: "border-box",
        objectFit: 'cover'
      }}
    >
        <input className="w-[75%] py-4 px-2 rounded relative" type="text" name="" id="" placeholder="Search by category"/>
        <button className="bg-blue-700 py-2 px-4 rounded text-white font-semibold lg:absolute right-56 md:fixed  static">Search</button>
    </div>
  );
};

export default Banner;
