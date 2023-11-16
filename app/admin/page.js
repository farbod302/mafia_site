import Admin from "@components/admin/Admin";
import Helper from "@container/helper";

const admin = async () => {

    const items = await fetch(`${Helper.BASE_URL}/items/items_list`, { method: "GET", cache: "no-cache" })
    let items_json=await items.json()
    const {items:i}=items_json
    const res=[...i[0].items,...i[1].items]
   

   

    return (
        <div>
            <Admin items={res}/>
        </div>
    );
}

export default admin;