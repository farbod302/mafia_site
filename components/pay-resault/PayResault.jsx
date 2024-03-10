import "./style.scss"
const PayResult = ({ status, code }) => {
    return (
        <div className="result">
            <div className="result-content">
                <div className="logo">
                    <img src={status === "true" ? "/images/pay_success.png" : "/images/pay_fail.png"} alt="" />
                </div>
                <div className="main-title">
                    نتیجه پرداخت:
                    {
                        status === "true" ?
                            <span style={{ color: "green" }}>موفق</span>
                            :
                            <span style={{ color: "red" }}>ناموفق</span>
                    }
                </div>
                {
                    code != 0 &&
                    <div className="sub-title">
                        کد رهگیری:{code}
                    </div>
                }
                <a className="button" href="app://ir.greendex.mafia" target="_blank">
                    <button>
                        بازگشت به عصر مافیا
                    </button>
                </a>
            </div>
        </div>
    );
}

export default PayResult;