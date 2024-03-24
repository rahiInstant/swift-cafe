import PropTypes from "prop-types";


const WantToCook = ({orderFood, updateOrderFood, count}) => {
    
  return (
    <div>
      {/* want to cook section */}
      <h1 className="text-2xl font-semibold text-center mb-4">
        Want to cook: {count}
      </h1>
      <div className=" px-24">
        <hr />
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="table show-order">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {orderFood.map((food, idx) => {
              return (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{food.recipe_name}</td>
                  <td>{food.preparing_time}</td>
                  <td>{food.calories}</td>
                  <td>
                    <button
                      onClick={() => updateOrderFood(food)}
                      className=" py-2 px-3 text-base font-medium rounded-[50px] bg-[#0BE58A] text-black"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

WantToCook.propTypes = {
    orderFood: PropTypes.array.isRequired,
    updateOrderFood: PropTypes.func,
    count:PropTypes.number.isRequired
}


export default WantToCook;
