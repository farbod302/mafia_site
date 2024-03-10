
"use client"
import { useEffect, useState } from "react";
import "./style.scss"
const Advanteg = () => {

    const [active,setActive]=useState(0)

    useEffect(()=>{
        let elements=document.querySelectorAll(".advanteg-text")
        elements.forEach((element,index)=>element.addEventListener("click",()=>{setActive(index)}))
        setInterval(()=>{
            setActive(prv=>{
                return prv === 5 ? 0 : prv+1
            })
        },5000)
    },[])

    useEffect(()=>{
        let elements=document.querySelectorAll(".advanteg-text")
        elements.forEach(element=>element.classList.remove("active-text"))
        elements[active].classList.add("active-text")
        
    },[active])

    return (
        <div className="advanteg">
            <div className="title">
                برخی از امکانات  بازی
            </div>
            <div className="content container">
                <div className="advanteg-text rigth ">
                    <div className="label">
                        بازی با دوستان
                    </div>
                    <div className="info">
                        شما می توانید با دوستان خود یا اشخاص تصادفی به صورت آنلاین بازی کنید 
                    </div>
                </div>
                <div className="main-image">
                       <img src={`/images/screenshots/0${active+1}.jpg`} alt="" />
                </div>
                <div className="advanteg-text left">
                    <div className="label">
                        بازی حضوری
                    </div>
                    <div className="info">
                        شما می توانید از قابلیت مدیریت بازی حضوری برای دور همی های خود استفاده کنید
                    </div>
                </div>
                <div className="advanteg-text rigth">
                    <div className="label">
                        کانال صوتی پایدار
                    </div>
                    <div className="info">
                        ارتباط صوتی پایدار بدون قطعی و تاخیر
                    </div>
                </div>
                <div className="advanteg-text left">
                    <div className="label">
                       مینیمال و سبک
                    </div>
                    <div className="info">
                        مناسب برای تمام گوشی های موبایل و پشتیبانی از تمامی سخت افزار ها
                    </div>
                </div>
                <div className="advanteg-text rigth">
                    <div className="label">
                        احراز هویت سنی
                    </div>
                    <div className="info">
                        دارای سیستم هومشمند تشخیص سن کاربران برای گروه بندی ماسب اشخاص برای بازی
                    </div>
                </div>
                <div className="advanteg-text left">
                    <div className="label">
                        شخصی سازی های مختلف
                    </div>
                    <div className="info">
                       تنوع بالای شخصی سازی مناسب برای هر سلیقه
                    </div>
                </div>
                

            </div>
        </div>
    );
}

export default Advanteg;