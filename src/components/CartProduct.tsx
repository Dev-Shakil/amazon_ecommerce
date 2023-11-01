import Image from "next/image";
import react from "react";
import FormattedPrice from "./FormattedPrice";
import { LuMinus, LuPlus } from "react-icons/lu";

interface Item{
    brand:string;
    category:string;
    description:string;
    image:string;
    isNew:boolean;	
    oldPrice:number;
    price:number;
    title:string;
    _id:number;
    quantity:number;
}
interface cartProductsPropse {
    item:Item;
}
const CartProduct = ({item}:cartProductsPropse) => {
    return <div className={"bg-gray-100 rounded-lg flex items-center gap-4"}>
        <Image className="object-cover"
        width={150}
        height={150}
        src={item.image}
        alt="productImage"
        />
        <div className="flex items-center px-2 gap-4">
            <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold text-amazon_blue">{item.title}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="text-sm text-gray-600">
                    Unit Price{" "}
                    <span className="font-semibold text-amazon_blue"><FormattedPrice amount={item.price}/></span>
                </p>
                <div className="flex items-center gap-6">
                    <div className="flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
                        <span className=" w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer duration-purple-300">
                            <LuPlus/>
                        </span>
                        <span className=" w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer duration-purple-300" >{item.quantity}</span>
                        <span className=" w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer duration-purple-300"> 
                            <LuMinus/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default CartProduct;