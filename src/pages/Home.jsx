import heroImg from "../assets/hero-img.jpg";
const Home = () => {
  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="relative z-10 flex flex-col items-center pt-40 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight">
            Your Neighbourhood Healthcare Partner
          </h1>

          <button
            className="mt-8 px-8 py-3 text-white font-medium border-2 border-white rounded-full
          bg-transparent hover:bg-white hover:text-[#0088FF] transition-all duration-300"
          >
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
