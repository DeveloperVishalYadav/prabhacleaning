"use client";
import Slider from "react-slick";
import React, { Component } from "react";

// CAROUSEL DATA

interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
  starimg: string;
  detail: string;
}

const postData: DataType[] = [
  {
    profession: "UX/UI Designer",
    name: "Madhavan Manamohan",
    imgSrc: "/assets/students/user.png",
    starimg: "/assets/students/stars.png",
    detail:
      "Team did an excellent job My house didn't cleaned almost an year but now this techsquad team did a wonderful job .without my intervention they cleaned all the house including steps ,coridar ,Racks bathrooms bedrooms windows etc Excellent team love to call again",
  },
  {
    profession: "UX/UI Designer",
    name: "Venu Ramanarayanan",
    imgSrc: "/assets/students/user.png",
    starimg: "/assets/students/stars.png",
    detail:
      "Being a working professional, I always lack time to do home cleaning. Then I found TechsquadTeam, the best home cleaning service in Bhubaneswar. I just gave them my regular routine details, and they took care of cleaning my entire house very smartly.",
  },
  {
    profession: "UX/UI Designer",
    name: "Chethana V",
    imgSrc: "/assets/students/user.png",
    starimg: "/assets/students/stars.png",
    detail:
      " The team is just amazing and quite cooperative with all sorts of cleaning and managing the time as well. Highly recommended.They asked me thrice if the service has met my expectations.I was totally satisfied and suggest all to go for their service. !",
  },
  {
    profession: "UX/UI Designer",
    name: "Prasanth N",
    imgSrc: "/assets/students/user.png",
    starimg: "/assets/students/stars.png",
    detail:
      " I took combo service it was excellently done by your team. It was professional service and happy with the service provider. I really appreciate for work done and good response too. I refer to all my friends n colleagues in this covid-19 time I prefer you to go with HCS professional and worth service in my budget.",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };

    return (
      <div id="testimonial-section" className="bg-bgpink">
        <div className="mx-auto max-w-2xl px-4 pt-16 pb-64 sm:pt-32 lg:max-w-7xl lg:px-8">
          <div className="sm:flex justify-between items-center pb-6">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">
              What Our Happy <br /> Customers Says
            </h2>
            <div>
              {/* <button className="bg-transparent hover:bg-purple text-purple font-semibold hover:text-white py-3 px-4 border border-lightgrey hover:border-transparent rounded">
                Give Your Review
              </button> */}
            </div>
          </div>

          {/* <p className="text-lg font-medium pb-12">
            Build skills with our courses and mentor from world-class companies.
          </p> */}

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="bg-white m-4 pt-8 px-12 pb-10 text-center rounded-lg">
                  <div className="relative">
                    <img
                      src={items.imgSrc}
                      alt="gaby"
                      className="inline-block h-16 w-16 m-auto rounded-full ring-2 ring-white"
                    />
                    <img
                      src={"/assets/students/greenpic.svg"}
                      alt="greenbg"
                      className=" absolute inline-block h-6 w-6 position-green"
                    />
                  </div>
                  {/* <h3 className="text-sm pt-4 pb-2">{items.profession}</h3> */}
                  <h4 className="text-2xl font-semibold pb-3">{items.name}</h4>
                  <img
                    src={items.starimg}
                    alt="stars-img"
                    className="m-auto pb-6"
                  />
                  <p className="text-lg font-medium leading-9">
                    {items.detail}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
