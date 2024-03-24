import PropTypes from "prop-types";
import WantToCook from "../WantToCook/WantToCook";
import CurrentToCook from "../CurrentToCook/CurrentToCook";
const SidePanel = ({ orderFood, updateOrderFood, currentCook, cookCount }) => {
  return (
    <div className=" text-base">
      <WantToCook
        orderFood={orderFood}
        updateOrderFood={updateOrderFood}
        count={cookCount}
      ></WantToCook>
      <CurrentToCook currentCook={currentCook}></CurrentToCook>
    </div>
  );
};

SidePanel.propTypes = {
  orderFood: PropTypes.array.isRequired,
  updateOrderFood: PropTypes.func,
  currentCook: PropTypes.array.isRequired,
  cookCount: PropTypes.number.isRequired
};

export default SidePanel;
