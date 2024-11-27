const HeroSection = () => {
    return (
      <section className="hero bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="text-center text-white pt-40">
          <h1 className="text-4xl font-bold">Get Accurate Construction Estimates</h1>
          <p className="mt-4 text-lg">Our tool helps you plan better, with accurate and reliable cost estimates for your construction projects.</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded">Get Started</button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  