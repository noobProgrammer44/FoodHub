import { useEffect, useState } from "react";

const useRestaurantMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=" +
          resID +
          "&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      setResInfo(json.data);
      // console.log(json.data.cards[2].card.card.info.name)
      // console.log(resInfo.data.cards[2].card.card.name);
    } catch (err) {
      console.log(err);
    }
  };

  return resInfo;
};
export default useRestaurantMenu;
