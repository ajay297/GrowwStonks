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
      </div>
    </>
  );
};

export default Container;
