import PropTypes from "prop-types";

const CurrentToCook = ({ currentCook }) => {
  let minute = 0
  let calor=0
  return (
    <div>
      {/* currently cooking section */}
      <h1 className="text-2xl font-semibold text-center mb-4">
        Currently cooking: {currentCook.length}
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
            {currentCook.map((food, idx) => {
                const numMinute = parseInt(food.preparing_time.slice(0,2))
                const numCalor = parseInt(food.calories.slice(0,3))
                minute+=numMinute
                calor+=numCalor
              return (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{food.recipe_name}</td>
                  <td>{food.preparing_time}</td>
                  <td>{food.calories}</td>
                </tr>
              );
            })}
            <tr>
              <th></th>
              <td></td>
              <td>Total Time = {minute} minutes</td>
              <td>Total Calories = {calor} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

CurrentToCook.propTypes = {
  currentCook: PropTypes.array.isRequired,
};
export default CurrentToCook;
