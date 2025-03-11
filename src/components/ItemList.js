import { addItem } from "../utils/cartSlice";
import { CDN_URL1 } from "../utils/constant";
import {useDispatch} from "react-redux"

const ItemList = ({ items }) => {
  console.log("Accordion body items", items);
  const dispatch = useDispatch();

  const handleAddItems = (item) =>{
    //dispatch
    dispatch(addItem(item))
  }
  
  return (
    <div>
      {/* category */}
      <div>
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2  border-b-2 border-gray-200 flex justify-between"
          >
            <div className="w-9/12">
              <p className="font-semibold">{item?.card?.info?.name}</p>
              <span>
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>

              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <button onClick={()=>handleAddItems(item)} className="p-2 rounded-lg m-auto text-xs font-semibold bg-black text-white shadow-lg absolute text-black">
                Add+ 
              </button>
              <img
                src={CDN_URL1 + item?.card?.info?.imageId}
                className="w-full h-[100px] rounded-2xl float-right shadow-2xs"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
