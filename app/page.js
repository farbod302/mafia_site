import Counter from "@components/counter/Counter";
import LandPage from "@components/landPage/LandPage";
import LeaderBord from "@components/leaderBord/LeaderBord";
import ShopSlider from "@components/shopSlider/ShopSlider";

export const metadata={
    title:"Mafia Verse"
}

const get_counter_data=()=>{
    return [100,1200,2300,4500]
}

const Page =async () => {
        let counter_data=get_counter_data()
    return ( 
       <div>
        <LandPage />
        <Counter counter_data={counter_data}/>
        <ShopSlider/>
        <LeaderBord/>
       </div>
     );
}


 
export default Page;