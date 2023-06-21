import Slider from "@components/slider/Slider";

import "./style.scss"
const ShopSlider = () => {
   return (
      <div className="shop-slider">
         <div className="content container">
            <div className="shop-title">
               جدید ترین محصولات فروشگاه
            </div>
            <div className="slider-container">
               <Slider />
            </div>
            <div className="show-more">
               <button>مشاهده همه محصولات</button>
            </div>
         </div>
      </div>
   );
}

export default ShopSlider;