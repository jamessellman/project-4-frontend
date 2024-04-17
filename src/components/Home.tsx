import React from "react";

function Home() {
React.useEffect(() => {
    console.log("The Home Page has mounted");
  }, []);
  return(
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">My Footballers Database</h1>
        <p className="text-lg text-gray-700 mb-8">The footballer DB!</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Sample cards */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Product 1</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Product 2</h2>
            <p className="text-gray-700">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Product 3</h2>
            <p className="text-gray-700">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;