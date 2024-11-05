import React, { useContext, useState } from 'react'; // Removed duplicate import of React and useContext
import './CSS/About.css';
import { ShopContext } from '../Context/ShopContext';

const About = () => {
  const { theme } = useContext(ShopContext);
  const [exampleState] = useState("Welcome!"); // Kept useState if you plan to use `exampleState` in the future

  return (
    <div className={`about_page_${theme}`}>
      <h1 className="text-center mt-4" id="aboutheading"><strong>About Us</strong></h1>
      <div className="container-my d-flex align-items-center justify-content-center border shadow-lg rounded py-4">
        <div className="content">
          <p className="txt py-5">
            {exampleState} The ShopNex app revolutionizes the way you shop for clothing, providing an immersive and convenient experience that caters to the diverse fashion needs of individuals and families alike. Seamlessly blending cutting-edge technology with a user-friendly interface, our app serves as a virtual fashion haven where the latest trends in men's, women's, and kids' apparel are just a tap away. Your fashion journey begins with the ShopNex app – download it today to witness the seamless convergence of style, technology, and unparalleled shopping satisfaction.
          </p>
        </div>
      </div>

      <div className="container-2 d-flex flex-column align-items-center justify-content-center border-1">
        <h2 className="text-center mb-4"><strong>Why Choose Us?</strong></h2>
        <div className="accordion" style={{ width: '1000px' }} id="accordionExample">
          <div className="accordion-item shadow">
            <h2 className="accordion-header">
              <button className="accordion-button text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ background: "#ff4141" }}>
                Affordable Online Shopping at Your Fingertips
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show text-body" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                There are many benefits of shopping online. You can take your time and look at different options to find exactly what you want. It's easy to compare prices online and find exactly what you are looking for.
              </div>
            </div>
          </div>
          <div className="accordion-item shadow">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ background: "#ff4141" }}>
                A Huge Collection of Clothes Across All Categories
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse text-light" data-bs-parent="#accordionExample">
              <div className="accordion-body text-body">
                We have a very wide range of clothes in all categories for men, women, and kids. In our latest collections, you will find popular items at an affordable price.
              </div>
            </div>
          </div>
          <div className="accordion-item shadow">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ background: "#ff4141" }}>
                Enjoy Safe and Secure Shopping
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse text-light" data-bs-parent="#accordionExample">
              <div className="accordion-body text-body">
                The privacy of your personal information is of utmost importance to us. We never release your information to outside parties.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
