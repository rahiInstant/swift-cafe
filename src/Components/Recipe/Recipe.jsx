import { useEffect } from "react";
import { useState } from "react";
import "./Recipe.css";
import SidePanel from "../SidePanel/SidePanel";
import Card from "../Card/Card";
import Msg from "../Msg/Msg";

const Recipe = () => {
  const [orderFood, setOrderFood] = useState([]);
  const [foods, setFoods] = useState([]);
  const [currentCook, setCurrentCook] = useState([]);
  const [msg, setMsg] = useState(false);
  useEffect(() => {
    fetch("./food.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  function isValid(id) {
    for (let item of orderFood) {
      if (item.recipe_id === id) {
        return true;
      }
    }
    return false;
  }

  function handleCookBtn(food) {
    const onTheStore = isValid(food.recipe_id);
    if (!onTheStore) {
      setMsg(false);
      const newFood = [...orderFood, food];
      setOrderFood(newFood);
    } else {
      setMsg(true);
    }
  }
  setTimeout(() => {
    setMsg(false);
  }, 8000);
  function updateOrderFood(food) {
    let current = [...currentCook, food];
    setCurrentCook(current);
    const newFood = orderFood.filter((item) => food != item);
    const newOrderdFood = [...newFood];
    setOrderFood(newOrderdFood);
  }

  return (
    <div className=" mt-20">
      <div className="flex flex-col items-center">
        <div className=" text-center text-[40px] font-semibold">
          Our Recipes
        </div>
        <div className="text-center text-base w-[75%] mt-6">
          Dive into our recipes section for culinary delights curated by our
          expert chefs. Find inspiration to elevate your home cooking
          experience. Unleash your inner chef and create unforgettable dishes.
        </div>
      </div>
      <div className=" mt-12 flex gap-6">
        {/* food card */}
        <Card foods={foods} handleCookBtn={handleCookBtn}></Card>
        {/* Side panel */}
        <div className="border  rounded-2xl p-6 w-[500px] h-fit">
          <SidePanel
            orderFood={orderFood}
            updateOrderFood={updateOrderFood}
            currentCook={currentCook}
            cookCount={orderFood.length}
          ></SidePanel>
          <Msg msg={msg}></Msg>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
