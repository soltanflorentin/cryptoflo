import ContentMainPage from "./contentStartPage"
import LogInForm from "./logInForm";
import NavBar from "./navBarStartPage"
import TestDinamic from "./testDinamic"

const MainPage = () => {
    return ( 
        <div id="mainpage">
            <NavBar />
            <ContentMainPage />
            <LogInForm />
            <TestDinamic />
            
        </div>
     );
}
 
export default MainPage;