import { CON_URL } from "../utils/constants"

const RestaurantCard = (props) => {

  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = resData?.info;

  console.log(resData);

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CON_URL + cloudinaryImageId}
        alt=""
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;