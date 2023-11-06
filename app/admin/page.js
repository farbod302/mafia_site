import Admin from "@components/admin/Admin";
import Helper from "@container/helper";

const admin = async () => {

    const items = await fetch(`${Helper.BASE_URL}/items/items_list`, { method: "GET", cache: "no-cache" })
    let items_json=await items.json()
   

   

    return (
        <div>
            <Admin items={items_json.items}/>
        </div>
    );
}

export default admin;