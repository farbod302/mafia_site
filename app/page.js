import Advanteg from "@components/advanteg/Advanteg";
import Counter from "@components/counter/Counter";
import LandPage from "@components/landPage/LandPage";
import LeaderBord from "@components/leaderBord/LeaderBord";
import ShopSlider from "@components/shopSlider/ShopSlider";
import Helper from "@container/helper";

export const metadata={
    title:"Age of Mafia"
}

const get_counter_data=()=>{
    return [100,1200,2300,4500]
}

const Page =async () => {
        let counter_data=get_counter_data()
        const slider_items=await fetch(`${Helper.BASE_URL}/items/last_items`,{method:"GET",next:{revalidate:3600}})
        let slider_items_json=await slider_items.json()

        // let counter_data=get_counter_data()
        // const slider_items=await fetch(`${Helper.BASE_URL}/items/last_items`,{method:"GET",next:{revalidate:3600}})
        // let slider_items_json=await slider_items.json()

        
    return ( 
       <div>
        <LandPage />
        <Counter counter_data={counter_data}/>
        <Advanteg/>
        <ShopSlider items={slider_items_json.items}/>
        <LeaderBord />
       </div>
     );
}


 
export default Page;