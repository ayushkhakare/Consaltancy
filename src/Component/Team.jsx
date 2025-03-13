function Team() {
  return (
    <div className="flex justify-center py-16 px-6">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-10 border border-gray-200">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="/i9.avif"
              alt="Aditya Changdev Pansare"
              className="w-80 h-80 rounded-2xl shadow-md object-cover border-4 border-gray-300"
            />
          </div>

          {/* Details Section */}
          <div>
            <h2 className="text-4xl font-extrabold text-[#0D0D46]">FOUNDING DIRECTOR</h2>
            <h3 className="text-2xl font-semibold text-gray-800 mt-2">Aditya Changdev Pansare</h3>
            <p className="text-black leading-relaxed text-lg mt-4">
              With 8 years of experience in BPM and performance management,
              Aditya drives strategic planning and operational excellence.
              He ensures data-driven decision-making, guiding SMEs toward
              sustainable, growth-oriented transformations.
            </p>

            {/* Features Section */}
           
            <div className="grid grid-cols-2 gap-8 mt-8">
  <div className="text-center bg-gray-100 p-5 rounded-xl shadow-sm">
    <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3">
      🔄
    </div>
    <h3 className="font-semibold text-gray-800 text-lg">Business Process Management (BPM)</h3>
    <p className="text-gray-500 text-md">
      Streamlining workflows to enhance efficiency and productivity.
    </p>
  </div>

  <div className="text-center bg-gray-100 p-5 rounded-xl shadow-sm">
    <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3">
      💻
    </div>
    <h3 className="font-semibold text-gray-800 text-lg">IT Consulting</h3>
    <p className="text-gray-500 text-md">
      Expert guidance to optimize and transform your IT infrastructure.
    </p>
  </div>
</div>




          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
