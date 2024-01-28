import React from "react";

const Card = () => {
  return (
    <div className="card w-auto bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Pizzaa"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Taste!</h2>
        <p>Pizza is not just a food, it's an emotion.</p>
        <div className="card-actions justify-end">
          <button className="btn bg-red-500 rounded-full text-white">Add to cart $3.2</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
