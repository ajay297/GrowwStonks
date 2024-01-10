import Link from "next/link";
import TABS from "@/constants/tabs";
const Tabs=({selectedTab})=>{

    return (
       <>
       {
        TABS.map(({label, value})=>(
           <Link key={value} href={`/${value}`}>
            <div
            className={'cursor-pointer'}
          >
            {label}
          </div>
           </Link>
        ))
       }
       </>
    )
}

export default Tabs;