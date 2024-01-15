import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import Link from "next/link";
export default function CompanyCard({ ticker, value, percent, profitloss }) {
  const hoverStyles = "hover:scale-105 hover:shadow-lg transition transform";
  return (
    <>
      <div
        className={
          "px-4 py-2 dark:bg-black border border-black dark:border-white rounded-lg " +
          hoverStyles
        }
      >
        <Link href={`/product/${ticker}`}>
          <div>{ticker}</div>
          <div>
            <div className="text-2xl font-bold">${value}</div>
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
              <div>{percent}</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
