import Tabs from "@/components/Tabs";
import TopGainersLosers from "@/components/TopGainersLosers";

const Container = ({ params }) => {
  return (
    <>
      <div className="p-4 h-full">
        <div className="flex">
          <Tabs selectedTab={params.tabSlug} />
        </div>
        <div className="max-h-full">
          <TopGainersLosers selectedTab={params.tabSlug} />
        </div>
        <div className="flex justify-center mt-6">
          <div className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full font-bold cursor-pointer hover:scale-105 hover:shadow-md transition transform">
            Load More
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
