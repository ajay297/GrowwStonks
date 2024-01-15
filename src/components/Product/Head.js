import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
export default function Head({
  name,
  symbol,
  currentPrice,
  change,
  profitloss,
}) {
  return (
    <>
      <div className="mt-2 px-6 py-4 border border-black dark:border-white rounded-lg">
        <div className="flex flex-wrap justify-between">
          <div>
            <div className="text-2xl font-bold">{name}</div>
            <div className="font-semibold">{symbol}</div>
          </div>
          <div>
            <div className="text-2xl font-bold">${currentPrice}</div>
            <div className="flex items-baseline">
              <div className="self-center mr-1">
                {profitloss === "increase" ? (
                  <div className="text-green-500">
                    <TiArrowSortedUp />
                  </div>
                ) : (
                  <div className="text-red-500">
                    <TiArrowSortedDown />
                  </div>
                )}
              </div>
              <div>{change}%</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
