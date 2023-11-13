import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <div>
            <section className="mb-12">
                <SectionTitle
                    heading="From Our Menu"
                    subHeading='Popular Item'
                ></SectionTitle>
                <div className="grid md:grid-cols-2 gap-4">
                    {
                        menu.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
                <div className="flex mt-8 justify-center">
                <button className="btn btn-outline uppercase border-0 border-b-4 mt-4">View Full menu</button>
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;