import Link from "next/link";
import TABS from "@/constants/tabs";
const Tabs=({selectedTab})=>{

    return <>
    {
     TABS.map(({label, value}) => {
      const selectedTabClass= selectedTab === value ? 'border-b-2 border-orange-500': '';
         return (
             <Link key={value} href={`/${value}`}>
              <div
              className={`text-lg font-bold px-2 py-1 cursor-pointer mb-4 mr-2 ${selectedTabClass}`}
            >
              {label}
            </div>
             </Link>
         );
     })
    }
    </>;
}

export default Tabs;