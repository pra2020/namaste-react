import { CON_URL } from "../utils/constants"

const RestaurantCard = (props) => {

  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = resData?.info;

  // console.log(resData);

  return (
    <div className="m-4 p-4 w-[280px] bg-gray-100 rounded-lg hover:bg-gray-200" >
      <img
        className="rounded-lg "
        src={CON_URL + cloudinaryImageId}
        alt=""
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;