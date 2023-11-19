import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();



    const handleAddCart = food => {
        if (user && user.email) {
            //  TODO: Send cart item to the database

            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
        }
        else {
            Swal.fire({
                title: "you are not logged in",
                text: "please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                   
                }
            });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">{price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title flex justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddCart(item)} className="btn btn-outline border-0 bg-slate-100 border-yellow-500 border-b-4 mt-4">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;