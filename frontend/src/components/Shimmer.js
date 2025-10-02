const ShimmerCard = () => {
    return (
      <div className="m-4 p-4 w-[250px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-300 animate-pulse">
        <div className="h-[150px] bg-gray-200 rounded-2xl"></div>
        <div className="py-4">
          <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
        </div>
      </div>
    );
  };



  const Shimmer = () => {
    const numCards = 20; 
  
    return (
      <div className="flex flex-wrap items-center justify-center">
        {[...Array(numCards)].map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    );
  };
export default Shimmer;
