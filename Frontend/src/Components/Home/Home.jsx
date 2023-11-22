import Header from "../Header/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center py-72">
        <h1 className="text-6xl ">
          Welcome to{" "}
          <span className="text-purple-500 linkSty font-bold underline">Blockchain Explorer!</span>
        </h1>
      </div>
    </>
  );
}

export default Home;
