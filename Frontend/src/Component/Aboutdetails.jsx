import Team from "./Team";
import Challenge from "./Challenge";
import Chooseus from "./Chooseus";

function Aboutdetails() {
  return (
    <div className="bg-white min-h-screen py-6 px-4 md:px-8 lg:px-12">
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto text-center">  
        <div className="mt-8 sm:mt-10">
          <Team />
          <Challenge />
          <Chooseus />
        </div>
      </div>
    </div>
  );
}

export default Aboutdetails;
