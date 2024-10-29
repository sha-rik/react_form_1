import './App.css';
import { useState } from 'react';



// HERE WE ARE USING A SINGLE FUNCTION TO UPDATE THE STATE OF MULTIPLE INPUTS
// 

function App() {

  const [formData, setformData] = useState({ firstName: "", lastName: "", email: "",comments:"",isVisible:false,mode:"", favCar:"" });
  

  console.log(formData);

  function changeHandler(event) {

    const { name, value, type, checked } = event.target;
    setformData(prevFormData => {
      return {

        ...prevFormData,
        [name]: type==="checkbox" ? checked : value
 
      }
    });
  }

  return (
    <div className="App">
      <form>
        <input type="type"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"

          // par ham aisha kion kar rahe hain?
          value={formData.firstName}
        />

        <br />
        <br />


        <input type="type"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastName"

          // par ham aisha kion kar rahe hain?
          value={formData.lastName}
        />


        <br />
        


        <input type="email"
          placeholder="Email"
          onChange={changeHandler}
          name="email"

          // par ham aisha kion kar rahe hain?
          value={formData.email}
        />

        <br />
        <textarea 
        placeholder="Enter your commetns"
        onChange={changeHandler}
        name="comments"
        value={formData.comments}
        
        />

        <br />

        <input 
        type="checkbox"
        onChange={changeHandler}
        name="isVisible"
        id="isVisible"
        checked={formData.isVisible}
        />

        <label htmlFor='isVisible'>Am i visible?</label>

        <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Online-Mode"
          id="Online-Mode"
          checked={formData.mode == "Online-Mode"}
        />
        <label htmlFor="Online-Mode">Online-Mode</label> 
        <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Offline-Mode"
          id="Offline-Mode"
          checked={formData.mode == "Offline-Mode"}
        />

        <label htmlFor="Offline-Mode">Offline-Mode</label> 


        <br />


        <select
          name="favCar"
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>

        </select>

        <label htmlFor="favCar">Select your fav car</label>

        <button
        type="submit"
        onClick={(event)=>{
          event.preventDefault();
          console.log("Form Submitted");
          console.log(formData);
        }}
        >submit</button>

        </form>


    </div>
  );
}

export default App;
