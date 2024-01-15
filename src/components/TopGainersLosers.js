import GridCard from "@/components/GridCard";

const TopGainersLosers = async ({ selectedTab }) => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
  );
  const resp = await response.json();
  const top_gainers = resp?.top_gainers;
  const top_losers = resp?.top_losers;
  const data = selectedTab === "top_gainers" ? top_gainers : top_losers;
  return <GridCard data={data} selectedTab={selectedTab} />;
};

export default TopGainersLosers;
