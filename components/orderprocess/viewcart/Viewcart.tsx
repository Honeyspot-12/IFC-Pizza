import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

const Viewcart: React.FC = () => {
  const { cart, total } = useCart();
  const router=useRouter()
  
  if (cart.length === 0) return null; // hide if no items

  return (
    <div className=" fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#994D1C] text-white flex items-center justify-between px-4 py-3 shadow-lg">
      <div>
        <span className="font-semibold">{cart.length} items</span>
        <span className="ml-3 font-bold">₹{total}</span>
      </div>
      <button
        onClick={() => {
          // navigate to cart 

          router.push('/cart')
        }}
        className="bg-white text-[#994D1C] font-semibold px-4 py-2 rounded-lg"
      >
        View Cart
      </button>
    </div>
  );
};

export default Viewcart;
