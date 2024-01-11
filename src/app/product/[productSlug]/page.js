import Description from "@/components/Product/Description";
import Head from "@/components/Product/Head";
import Chart from "@/components/Product/Chart";
import TOP_GAINERS_LOSERS from "@/constants/topGainersLosers";
import DATA from "@/constants/companyOverview";


export default function Page({ params }) {

    const topGainersLosers = [...TOP_GAINERS_LOSERS.top_gainers, ...TOP_GAINERS_LOSERS.top_losers];

    const data= topGainersLosers.find(company=> company.ticker===params.productSlug);

  return (
    <>
      <main className="pb-4">
        <Head
          name={data.ticker}
          symbol={data.ticker}
          currentPrice={data.price}
          change={data.change_percentage}
          profitloss={
            parseInt(data.change_amount) > 0 ? "increase" : "decrease"
          }
        />

        <Chart ticker={params.productSlug} data={data} />

        <Description
          title={DATA.Name}
          desc={DATA.Description}
          sector={DATA.Sector}
          industry={DATA.Industry}
          currentPrice={DATA.price}
          weekHigh={DATA["52WeekHigh"]}
          weekLow={DATA["52WeekLow"]}
          dividendYield={DATA.DividendYield}
          profitMargin={DATA.ProfitMargin}
          beta={DATA.Beta}
          peRatio={DATA.PERatio}
          marketCap={DATA.MarketCapitalization}
        /> 
      </main>
    </>
  );
}
