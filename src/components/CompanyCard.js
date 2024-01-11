import {
    StatGroup,
    StatNumber,
    StatHelpText,
    StatArrow,
    Stat,
  } from "@chakra-ui/react";
  import Link from "next/link";
  export default function CompanyCard({
    ticker,
    value,
    percent,
    profitloss,
  }) {
  
    const hoverStyles = "hover:scale-105 hover:shadow-lg transition transform";
    return (
      <>
        <div
          className={
            "px-4 py-2 dark:bg-cardColor border border-black rounded-lg " +
            hoverStyles
          }
        >
          <Link href={`/product/${ticker}`}>
            <div>{ticker}</div>
            <StatGroup>
              <Stat>
                <StatNumber>${value}</StatNumber>
                <StatHelpText>
                  <StatArrow
                    type={"increase"}
                  />
                  {percent}
                </StatHelpText>
              </Stat>
            </StatGroup>
          </Link>
        </div>
      </>
    );
  }
  