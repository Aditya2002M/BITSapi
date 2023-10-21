import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import "../styles/Home.css";
import { useState } from 'react';
// import component
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeCard from "../components/RecipeCard";
import axios from "axios";
// import recipeList from "../menu.json";

export default function Home() {
    const navigate = useNavigate();
    const [recipeList, setRecipeList] = React.useState([]);
    const [keyword, setKeyword] = React.useState("");

    React.useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BASE_URL}recipe?limit=6&page=1`)
            .then((response) => {
                const recipeData = response?.data?.data.slice(1); // Skip the first element which contains "full_count"
                setRecipeList(recipeData);
            });
    }, []);

  


    function handlesubmit(event) {
        event.preventDefault();
        navigate("/target");
    }

    const [calories, setCalories] = useState('');
    const [meals, setMeals] = useState([]);
    const fetchMeals = async () => {
        try {
            const response = await axios.get(
                `https://api.spoonacular.com/recipes/findByNutrients?apiKey=2f570a74f5234f65a8633fcbd019c909&maxCalories=${calories}`
            );
            setMeals(response.data);
        } catch (error) {
            console.error('Error fetching meals:', error);
        }
    };

    const handleCaloriesChange = (e) => {
        setCalories(e.target.value);
    };


    return (
        <>
            <Navbar />
            <div className="bg-yellow" style={{ zIndex: -1 }} />
            <div className="container hero display-4">
                <div
                    className="row align-item-center flex-column-reverse gap-5 flex-lg-row py-5"
                    style={{ height: "90vh" }}
                >
                    <div className="hero-col col-md-7 col-xs-12 order-2 order-md-1 hero-left mb-5">

                        <a className="hero-nav" href='./BMR'>First, Calculate BMR from here..</a>
                        <p className="hero-text">
                            Discover Recipe <br />
                            &amp; Delicious Food
                        </p>
                        <div className="search-input mt-4 w-50">
                            
                            <form onSubmit={handlesubmit}>
                                
                                <button
                                
                                    onClick={fetchMeals}
                                    className="btn btn-success"
                                >
                                    Find Meals
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-auto" />
                    <div className="col-md-5 hero">
                        <img src="/images/hero.png" alt="C:\Users\hp\Desktop\F_RECIPE\build\images\hero.png" />
                    </div>
                </div>
            </div>
            {/* end of header */}
            {/* start of popular for you */}
            <section className="main-section-recipe">
                <div className="container position-relative">
                    <div className="row mb-5">
                        <div className="col-md-3 popular-recipe-text-box">
                            <h3>New Recipe</h3>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="new-recipe-box" />
                            <img src="/images/new-recipe.png" alt="New Recipe" />
                        </div>
                        <div className="col-md-5 justify-content-between">
                            <h4>Crispy Chicken Burger</h4>
                            <hr style={{ width: "10vh" }} />
                            <p>
                                Indulge in the ultimate savory delight - a succulent, crispy chicken patty served with gourmet toppings, all tucked into a perfectly toasted burger bun, creating the mouthwatering Crispy Chicken Burger.
                            </p>
                            <Link className="text-decoration-none" to={`/detail/crispy-chicken-burger`}>
                                <button className="btn">Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of new recipe */}
            {/* <!-- start of popular recipe --> */}
            <section id="popular-recipe">
                <div className="container">
                    <h3 className="popular-recipe-title">Popular Recipe</h3>
                    <div className="row">
                        {recipeList.slice(0, 9).map((item) => (
                            <RecipeCard
                                title={item?.title}
                                image={item?.recipe_picture}
                                id={item?.id}
                            />
                        ))}
                    </div>
                </div>
            </section>
            {/* <!-- end of popular recipe --> */}
            <Footer />
        </>

    )
}
