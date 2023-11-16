import Shop from "@components/shop/Shop";
import Helper from "@container/helper";

const shop = async () => {

    const items_list = await fetch(`${Helper.BASE_URL}/items/items_list`, { method: "GET"})
    let items_list_json=await items_list.json()
    const {items}=items_list_json
    console.log({items});
    const res=[...items[0].items,...items[1].items]
    return (
        <Shop items={res}/>
    );
}

export default shop;