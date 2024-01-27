import React from "react";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // custom hook
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  // console.log(resInfo);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h1>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h1>
      <h2></h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
