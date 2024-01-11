import ProductDescription from "@/components/Product/Description";
import Head from "@/components/Product/Head";
import Chart from "@/components/Product/Chart";
import DATA from "@/constants/topGainersLosers";


export default function Page({ params }) {

    const topGainersLosers = [...DATA.top_gainers, ...DATA.top_losers];

    const data= topGainersLosers.find(company=> company.ticker===params.productSlug);
    console.log('data', data);

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

        <Chart ticker={params.productSlug} />

        {/* <ProductDescription
          title={data.Name}
          desc={data.Description}
          sector={data.Sector}
          industry={data.Industry}
          currentPrice={tickerData.price}
          weekHigh={data["52WeekHigh"]}
          weekLow={data["52WeekLow"]}
          dividendYield={data.DividendYield}
          profitMargin={data.ProfitMargin}
          beta={data.Beta}
          peRatio={data.PERatio}
          marketCap={data.MarketCapitalization}
        />  */}
      </main>
    </>
  );
}
