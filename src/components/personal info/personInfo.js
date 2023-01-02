import React from 'react';

const PersonalInfo = () => {
  return (
    <div className="flex flex-1">
      <div className="personal-info__info row">
        <div className="personal-info__info--container">
          <figure className="personal-info__picture--mask">
            <img src="./assets/Images/IMG_3859.jpeg" className="personal-info__picture" alt="picture of me placeholder" />
          </figure>
          <h1 className="personal-info__info--title">
            Welcome! I'm <span className="text--magenta">Spencer Gerritsen</span>
          </h1>
          <p className="personal-info__info--para">
            I'm a <strong className="magenta">Student at the University of Utah</strong> located in Salt Lake City
            with just over 1 year of experience in web development, and I love creating well designed, responsive, web applications.
          </p> 
        </div>
      </div>
      <figure className="personal-info__img--container">
        <img src="./assets/Images/undraw_programming_re_kg9v.svg" className="personal-info__img" alt="" />
      </figure>
    </div>
  );
}

export default PersonalInfo;
