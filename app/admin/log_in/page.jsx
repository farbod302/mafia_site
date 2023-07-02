import "./style.scss"
const LogIn = () => {
    return ( 
        <div className="admin-log-in">
            <div className="content">
                <div className="label">
                    Password
                </div>
                <div className="input">
                    <input type="password" />
                </div>
                <div className="button">
                    <button>
                        Dig In
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default LogIn;