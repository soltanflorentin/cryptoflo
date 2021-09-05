import { Link } from "react-router-dom";
import poz from './favicon.jpeg';

const NavBar = () => {
    return ( 
        // <div className="navBarDiv">
        //     <img className="inline-block float-left" src="./poz.jpg" alt="logo" />
        //     <h2 className="inline-block">CryptoFlo</h2>
        //     <div className="inline-block float-right">
        //         <form id="formNav" action="#">
        //             <div className="navButtons">
        //                     <button className="navBtn btn btn-warning" type="button">SignUp</button>
        //                     <button className="navBtn btn btn-primary" id="logInBtn " type="submit">&nbsp;LogIn&nbsp;</button>
        //             </div>
        //             <input className="inputFields" type="text" placeholder="Username" required/><br/>
        //             <input className="inputFields" type="password" placeholder="Password" required/>
        //         </form>
        //     </div>
            
        // </div>
        <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <a class="navbar-brand" href="#"><img src={poz} class="logoImg" alt="logo"/></a>
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Disabled</a>
                            </li>
                            </ul>
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li class="nav-item">
                                        BitFlo 
                                    </li>
                            </ul>
                            
                            <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                </nav>
            
        </div>
     );
}
 
export default NavBar;