
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
                        شما می توانید با دوستان خود بازی کنید یا گرداننده بازی دوستان خود باشید
                    </div>
                </div>
                <div className="main-image">
                        اسکرین شات از  بخش {active+1}
                </div>
                <div className="advanteg-text left">
                    <div className="label">
                        عضویت در کانال
                    </div>
                    <div className="info">
                        میتوانید برای انجام بازی های دست جمعی,آشنایی با مافیا پلیر های جدید و یا شرکت در تورنومنت در کانال های مختلف عضو شوید
                    </div>
                </div>
                <div className="advanteg-text rigth">
                    <div className="label">
                        شخصی سازی های مختلف
                    </div>
                    <div className="info">
                        ده ها آواتار و انیمیشن برای شما طراحی شده که میتوانید کارکتر بازی خود را شخصی سازی کنید
                    </div>
                </div>
                <div className="advanteg-text left">
                    <div className="label">
                       طراحی آواتار اختصاصی
                    </div>
                    <div className="info">
                        به درخواست شما تیم طراحی ما آماده شخصی سازی بازی برای شما به صورت انحساری و اختصاصی است
                    </div>
                </div>
                <div className="advanteg-text rigth">
                    <div className="label">
                        گردانندگی حقیقی
                    </div>
                    <div className="info">
                        علاوه بر گردانندگی توسط ربات شما قادر هستید بازی هایی را با گردانندگی شخص حقیقی تجربه کنید یا گرداننده بازی های پلیر های دیگر باشید و از بازی کسب درامد کنید!
                    </div>
                </div>
                <div className="advanteg-text left">
                    <div className="label">
                        ورود به بازی های به عنوان بیننده
                    </div>
                    <div className="info">
                        شما می توانید در بازی های مختلف به عنوان بیننده حضور داشته باشید و با دیگر بینندگان گفت و گو کنید
                    </div>
                </div>
                

            </div>
        </div>
    );
}

export default Advanteg;