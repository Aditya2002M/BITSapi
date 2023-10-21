import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard(props) {
  const { title, image, calories , id} = props;

  return (
    <>
      <div className="col-md-4 col-xs-12 mb-4">
          <Link className="text-decoration-none text-white" to={`/detail/${title?.toLowerCase()?.split(" ").join("-")}`}>
            <div className="popular-recipe-image" style={{ backgroundImage: `url('${image}')`, borderBottomLeftRadius:'0', borderBottomRightRadius:'0' }}>
              <h3 style={{ textShadow: "0px 0px 2px rgba(0, 0, 0, 0.8)"}}>{title}</h3>
            </div>
            <div className="popular-recipe-image" style={{padding: '10px', borderTopRightRadius: '0', borderTopLeftRadius: '0', border: '1px solid #7FDA89', height: '60px', backgroundColor: 'white'}}>
              <h3 style={{fontSize:'20px',color:'white', textShadow: "1px 1px 2px rgba(0.2, 0.2, 0.2)" }} >id: {id} &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Calories: {calories}</h3>
              </div>
          </Link>
        </div>
    </>
  );
}