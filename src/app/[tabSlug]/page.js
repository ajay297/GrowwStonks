import Tabs from "@/components/Tabs";
import TopGainersLosers from "@/components/TopGainersLosers";
import { notFound } from "next/navigation";

const Container = ({ params }) => {
  if (!["top_gainers", "top_losers"].includes(params.tabSlug)) {
    return notFound();
  }

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
