import React, { useState } from 'react';

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function BMR(props) {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');

  const calculateBMR = () => {
    let bmr = 0;
    if (gender === 'male') {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else if (gender === 'female') {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
    }
    setResult(bmr.toFixed(2) + ' calories per day');
  };

  return (
  <>
  <Navbar />
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body">
                <h1 className="card-title h2">BMR Calculator</h1>
                <p className="card-text">Calculate your Basal Metabolic Rate (BMR) based on your gender, age, weight, and height.</p>

                <form>
                  <div className="mb-3">
                    <label className="form-label">Gender:</label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="form-select"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Age (years):</label>
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Weight (kg):</label>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Height (cm):</label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>

                  <button
                    type="button"
                    onClick={calculateBMR}
                    className="btn btn-success"
                  >
                    Calculate BMR
                  </button>
                </form>
                <div className="mt-4">
                  <h2 className="card-title h5">Your Basal Metabolic Rate (BMR) is:</h2>
                  <p className="card-text h4" id="result">
                    {result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <Footer />
</>
  );
  }
export default BMR;