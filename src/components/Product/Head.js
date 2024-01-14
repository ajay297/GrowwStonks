import {
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatNumber,
} from "@chakra-ui/react";
export default function Head({
  name,
  symbol,
  currentPrice,
  change,
  profitloss,
}) {
  return (
    <>
      <div className="mt-2 px-6 py-4 border border-black dark:bg-cardColor rounded-lg">
        <div className="flex flex-wrap justify-between">
          <div>
            <div className="text-2xl font-bold">{name}</div>
            <div className="font-semibold">{symbol}</div>
          </div>
          <div className="text-right">
            <StatGroup>
              <Stat>
                <StatNumber>{currentPrice}</StatNumber>
                <StatHelpText>
                  <StatArrow type={profitloss} />
                  {change}
                </StatHelpText>
              </Stat>
            </StatGroup>
          </div>
        </div>
      </div>
    </>
  );
}
