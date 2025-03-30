function Mission() {
    return (
      <div className="relative w-full h-150 flex flex-col items-center justify-center px-6 md:px-12 py-16 bg-[#FFFFFF] text-[#000000]">
        {/* Main Content */}
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D0D46] mb-6 uppercase tracking-wide">
            Our <span className="text-gray-700">Mission</span>
          </h1>
  
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            At <span className="font-semibold text-[#000000]">Thanosphere Solutions Pvt Ltd</span>, we empower businesses to achieve sustainable growth and operational excellence.  
            Drawing on our expertise in strategic management, project management, and Business Process Management (BPM) guided by agile, data-informed methods,  
            <strong> we deliver integrated consulting and technology solutions</strong> that streamline operations and enhance decision-making.
          </p>
  
          <p className="text-lg md:text-xl leading-relaxed mt-6 text-gray-700">
            Our tailored strategies and innovative software drive measurable results, ensuring organizations continuously adapt and thrive in an ever-changing landscape.
          </p>
        </div>
  
        {/* Logo & Branding */}
        <div className="flex flex-col items-center mt-12">
          <img src="/logo.png" alt="Thanosphere Solutions Logo" className="h-14" />
          <p className="text-sm text-gray-600 uppercase tracking-wide mt-2">
            Design • Optimize • Transform
          </p>
        </div>
      </div>
    );
  }
  
  export default Mission;
  