import { Link } from "react-router-dom"

const LogInForm = () => {
    return ( 
        <div className="logIn-div">
                <form class="px-4 py-3">
                        <div class="form-group">
                        <label for="exampleDropdownFormEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" required/>
                        </div>
                        <div class="form-group">
                        <label for="exampleDropdownFormPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" required/>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="dropdownCheck"/>
                        <label class="form-check-label" for="dropdownCheck">
                            Remember me
                        </label>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item text-info" to="/signUp">New around here? Sign up</Link>
                <a class="dropdown-item text-danger" href="#">Forgot password?</a>
        
        </div>
     );
}
 
export default LogInForm;