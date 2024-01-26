import React, { useEffect, useState } from 'react';
import Shimmer from '../components/Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
     fetchMenu();
     console.log('JJJJ');
  },[]);

  const fetchMenu = async () => {
    console.log("KKKK");
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if(resInfo === null) 
       return (<Shimmer/>);

  // console.log(resInfo);
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className='menu'>
      <h1>{name}</h1>
      <h1>{cuisines.join(", ")} - {costForTwoMessage}</h1>
    <h2></h2>
      <ul>
        {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price}</li>)}
      </ul>
    </div>
  )
}

export default RestaurantMenu