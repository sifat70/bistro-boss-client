import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css'
import featuredImg from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36">
                 <div>
                    <img src={featuredImg} alt="" />
                 </div>
                 <div className="md:ml-10">
                    <p>March 20, 2023</p>
                    <p>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam quasi qui facere architecto enim. Dolor repellendus pariatur atque aut? Eveniet illum repellat officia autem, recusandae eaque voluptate cumque cupiditate voluptas explicabo optio ad ab iusto ipsam sint vero dolores qui blanditiis necessitatibus iste, inventore tenetur nesciunt! Ipsa, eius ducimus?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Read more</button>
                 </div>
            </div>
        </div>
    );
};

export default Featured;