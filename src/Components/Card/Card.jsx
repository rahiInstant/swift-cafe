import PropTypes from 'prop-types'

const Card = ({foods, handleCookBtn}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-auto gap-6">
      {/* card 01 */}
      {foods.map((food, idx) => {
        return (
          <div
            key={idx}
            className=" border border-[#878787] rounded-2xl p-6 w-72"
          >
            <img
              className="h-[200px] rounded-2xl w-full"
              src={food.recipe_image}
              alt=""
            />
            <h1 className="mt-6 text-xl font-semibold">{food.recipe_name}</h1>
            <p className="text-base leading-[30px] text-[#878787]">
              {food.short_description}
            </p>
            <hr className="mt-4 mb-6" />
            <h1 className="text-lg font-medium">
              ingredients: {food.ingredients.length}
            </h1>
            <ul className="indent-4">
              {food.ingredients.map((item, idx) => {
                return <li key={idx}>{item}</li>;
              })}
            </ul>
            <div className="flex justify-between my-6">
              <div>
                <i className="fa-regular fa-clock"></i> {food.preparing_time}
              </div>
              <div>
                <i className="fa-solid fa-fire-flame-curved"></i>{" "}
                {food.calories}
              </div>
            </div>

            <button
              onClick={() => handleCookBtn(food)}
              className="py-3 px-6 rounded-[50px] text-lg font-medium bg-[#0BE58A] text-black"
            >
              Want to Cook
            </button>
          </div>
        );
      })}
    </div>
  );
};

Card.propTypes = {
    foods: PropTypes.array.isRequired,
    handleCookBtn: PropTypes.func.isRequired
}

export default Card;
