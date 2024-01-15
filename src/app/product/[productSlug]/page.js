import Description from "@/components/Product/Description";
import Head from "@/components/Product/Head";
import Chart from "@/components/Product/Chart";

export default async function Page({ params }) {
  let response = await fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${params.productSlug}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
  );

  const currentData = await response.json();

  response = await fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${params.productSlug}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
  );
  const companyData = await response.json();

  const data = {
    ...currentData["Global Quote"],
    ...companyData,
  };

  return (
    <>
      <main className="pb-4">
        <Head
          name={data.Name}
          symbol={data.Symbol}
          currentPrice={data["05. price"]}
          change={data["10. change percent"]}
          profitloss={
            parseFloat(data["09. change"]) > 0 ? "increase" : "decrease"
          }
        />

        <Chart symbol={params.productSlug} data={data} />

        <Description
          title={data.Name}
          desc={data.Description}
          sector={data.Sector}
          industry={data.Industry}
          currentPrice={data["05. price"]}
          weekHigh={data["52WeekHigh"]}
          weekLow={data["52WeekLow"]}
          dividendYield={data.DividendYield}
          profitMargin={data.ProfitMargin}
          beta={data.Beta}
          peRatio={data.PERatio}
          marketCap={data.MarketCapitalization}
        />
      </main>
    </>
  );
}
