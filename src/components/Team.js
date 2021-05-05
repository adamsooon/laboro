import React from "react";
import Slider from "react-slick";

export default function Team() {
  const settings = {
    settings: "unslick",
    arrows: true,
    speed: 500,
    dots: true,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="team section">
      <div className="container">
        <h3 className="has-text-weight-semibold is-size-2 has-text-centered">
          Nasz zespół
        </h3>
        <div className="team-members">
          <Slider {...settings}>
            <div className="team-member">
              <figure className="team-member-photo">
                <img
                  src="https://randomuser.me/api/portraits/women/86.jpg"
                  alt="Lorem Ipsum"
                />
              </figure>
              <h3 className="team-member-name">Lorem Ipsum</h3>
              <p className="team-member-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="team-member">
              <figure className="team-member-photo">
                <img
                  src="https://randomuser.me/api/portraits/women/86.jpg"
                  alt="Lorem Ipsum"
                />
              </figure>
              <h3 className="team-member-name">Lorem Ipsum</h3>
              <p className="team-member-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="team-member">
              <figure className="team-member-photo">
                <img
                  src="https://randomuser.me/api/portraits/women/86.jpg"
                  alt="Lorem Ipsum"
                />
              </figure>
              <h3 className="team-member-name">Lorem Ipsum</h3>
              <p className="team-member-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="team-member">
              <figure className="team-member-photo">
                <img
                  src="https://randomuser.me/api/portraits/women/86.jpg"
                  alt="Lorem Ipsum"
                />
              </figure>
              <h3 className="team-member-name">Lorem Ipsum</h3>
              <p className="team-member-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="team-member">
              <figure className="team-member-photo">
                <img
                  src="https://randomuser.me/api/portraits/women/86.jpg"
                  alt="Lorem Ipsum"
                />
              </figure>
              <h3 className="team-member-name">Lorem Ipsum</h3>
              <p className="team-member-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
