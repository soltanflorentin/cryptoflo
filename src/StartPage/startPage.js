import ContentMainPage from "./contentStartPage"
import NavBar from "./navBarStartPage"

const MainPage = () => {
    return ( 
        <div id="mainpage">
            <NavBar />
            <ContentMainPage />
        </div>
     );
}
 
export default MainPage;