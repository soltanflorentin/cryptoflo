const NavBar = () => {
    return ( 
        <div className="navBarDiv">
            <img className="inline-block float-left" src="./poz.jpg" alt="logo" />
            <h2 className="inline-block">CryptoFlo</h2>
            <div className="inline-block float-right">
                <form id="formNav" action="#">
                    <div className="navButtons">
                            <button className="navBtn" type="button">SignUp</button>
                            <button className="navBtn" id="logInBtn " type="submit">LogIn</button>
                    </div>
                    <input className="inputFields" type="text" placeholder="Username" required/><br/>
                    <input className="inputFields" type="password" placeholder="Password" required/>
                </form>
            </div>
            
        </div>
     );
}
 
export default NavBar;