import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            {/* <h1>this is home page</h1> */}
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
        </div>
    )
};

export default Home;