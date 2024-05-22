import React, { useContext } from "react";
import "./Cards.css";
import MainContext from "../../../../context/context";
import { Link } from "react-router-dom";
const Cards = () => {

     const {data,addToBasket}=useContext(MainContext)
  return (
    <div class="site-section p-5 " id="products-section">
      <div class="container">
        <div class="row mb-5 justify-content-center">
          <div class="col-md-6 text-center">
            <h3 class="section-sub-title">Popular Products</h3>
            <h2 class="section-title mb-3">Our Products</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut
              eveniet aut consequatur laboriosam ipsam.
            </p>
          </div>
        </div>
        <div class="row">
        
          {
               data.map((item,index)=>(
                    <div key={index} class="col-lg-4 col-md-6 mb-5">
                    <div class="product-item">
                      <figure style={{height:"250px"}}>
                        <img
                          src={item.image}
                          alt="Image"
                          class="img-fluid h-100  w-100 "
                          height="250px"
                        />
                      </figure>
                      <div class="px-4 text-center ">
                        <h3>
                          <Link to={`/detail/${item._id}`}>{item.title}</Link>
                        </h3>
                        <div class="mb-3 d-flex  gap-3 justify-content-center  ">
                          <span class="meta-icons mr-3">
                            <a  class="mr-2">
                              <span class="icon-star text-warning"><i class="fa-solid fa-star"></i></span>
                            </a>{" "}
                            5.0
                          </span>
                          <span class="meta-icons wishlist">
                            <a  class="mr-2">
                              <span class="icon-heart"><i class="fa-solid fa-heart"></i></span>
                            </a>{" "}
                            29
                          </span>
                        </div>
                        <p class="mb-4">
                        {item.category}
                        </p>
                        <div className=" d-flex  justify-content-center gap-3 ">
                          <a  onClick={()=>{
                              addToBasket(item._id)
                          }} class="btn btn-black mr-1 rounded-0">
                            Cart
                          </a>
                          <Link
                           to={`/detail/${item._id}`}
                            class="btn btn-black btn-outline-black ml-1 rounded-0"
                          >
                            View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
               ))
          }
          
        </div>
      </div>
    </div>
  );
};

export default Cards;
