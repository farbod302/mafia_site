"use client"
import Helper from "@container/helper"
import { useRouter } from "next/navigation"
const AddItem = ({ items }) => {

    const categorys = ["Game", "Anime", "Movie"]
    const Router=useRouter()

    const add_item = async (e) => {
        e.preventDefault()
        const item = {
            name: Helper.pick_input_value("name"),
            price: Helper.pick_input_value("price"),
            type: Helper.pick_input_value("type")
        }
        let categorys = document.querySelectorAll(".category")
        let selected_category = []
        for (let inp of categorys) {
            if (inp.checked) selected_category.push(inp.id)
        }
        item.categorys = selected_category
        let files = document.querySelectorAll(".files")
        let prv_image = files[0].files[0]
        let main_file = files[1].files[0] || null
        let upload_body = new FormData()
        upload_body.append("file", prv_image)
        if (main_file) upload_body.append("file", main_file)
        const respon = await fetch(`${Helper.BASE_URL}/admin/upload`, {
            method: "POST",
            body: upload_body
        })
        let res_json = await respon.json()
        const { data } = res_json
        item.image = data.files_list[0]
        item.file = data.files_list[1] || data.files_list[0]
        let bandel_items = Helper.pick_input_value("bandel")
        let rel_items = bandel_items.split("\n")
        rel_items = rel_items.filter(e => e)
        item.rel_items = rel_items
        let active_check_box = document.querySelector("#active")
        item.active = active_check_box.checked
        let token = localStorage.getItem("token")
        await Helper.server_post_request("admin/add_item", { ...item, token })
        Router.refresh()
        let all_inputs=document.querySelectorAll("input")
        for(let input of all_inputs){
            input.value=""
        }
    }


    return (
        <div className="add-item">
            <form className="add-item-form" onSubmit={(e) => { add_item(e) }}>

                <div className="form-input">
                    <div className="label">
                        نام آیتم
                    </div>
                    <div className="input-self">
                        <input type="text" id="name" className="ltr" placeholder="name" />
                    </div>
                </div>
                <div className="form-input">
                    <div className="label">
                        دسته بندی
                    </div>
                    <div className="input-self">
                        <select name="type" id="type">
                            <option value="avatar">آواتار</option>
                            <option value="animation">انیمیشن</option>
                            <option value="voice">ویس لاین</option>
                        </select>
                    </div>
                </div>
                <div className="form-input">
                    <div className="label">
                        کتگوری
                    </div>
                    <div className="input-self">
                        {categorys.map(category =>
                            <div className="each-category" key={category}>
                                <input type="checkbox" className="category" id={category} />
                                <div className="category-name">
                                    {category}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="form-input">
                    <div className="label">
                        قیمت (MVC)
                    </div>
                    <div className="input-self">
                        <input type="number" id="price" className="ltr" placeholder="price" />
                    </div>
                </div>

                <div className="form-input">
                    <div className="label">
                        عکس برای نمایش در مارکت
                    </div>
                    <div className="input-self">
                        <input type="file" id="prv" className="ltr files" />
                    </div>
                </div>

                <div className="form-input">
                    <div className="label">
                        فایل اورجینال
                    </div>
                    <div className="input-self">
                        <input type="file" id="prv" className="ltr files" />
                    </div>
                </div>
                <div className="form-input">
                    <div className="label">
                        <input type="checkbox" defaultChecked id="active" />
                        در فروشگاه موجود شود؟
                    </div>

                </div>
                <div className="form-input">
                    <div className="label">
                        ایتم هایی دیگر باندل(در هر خط یک آیتم)
                    </div>
                    <div className="input-self">
                        <textarea name="" id="bandel" className="ltr"></textarea>
                    </div>
                </div>
                <div className="button">
                    <button>
                        افزودن
                    </button>
                </div>
            </form>
            <div className="items-list tabel">
                <div className="tabel-head">
                    لیست آیتم ها
                </div>
                <div className="tabel-self">
                    {items.map((item, index) => {
                        const { name, price, active, image } = item
                        return (
                            <div className="each-tabel" style={{gridTemplateColumns:"repeat(4,1fr)"}} key={index}>
                                <div className="img"><img src={`${Helper.BASE_URL}/files/${image}`} alt="" /></div>
                                <div>{name}</div>
                                <div>{price}</div>
                                <div>{active ? "فعال":"غیر فعال"}</div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    );
}

export default AddItem;