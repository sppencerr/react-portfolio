import React from 'react';

const LanguageList = () => {
  return (
    <section id="languages">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            These are the <span className="text--magenta">Languages</span> I work with
          </h1>
          <div className="language__list">
            <div className="language">
              <figure className="language__img--wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png" alt="Html Logo" className="language__img" />
              </figure>
              <span className="language__name">HTML</span>
            </div>
            <div className="language">
              <figure className="language__img--wrapper">
                <img src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png" alt="CSS Logo" className="language__img" />
              </figure>
              <span className="language__name">CSS</span>
            </div>
            <div className="language">
              <figure className="language__img--wrapper">
                <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png" alt="JavaScript Logo" className="language__img" />
              </figure>
              <span className="language__name">JavaScript</span>
            </div>
            <div className="language">
              <figure className="language__img--wrapper">
                <img src="./assets/Images/python.png" alt="Pythong Logo" className="language__img" />
              </figure>
              <span className="language__name">Python</span>
            </div>
            <div className="language">
              <figure className="language__img--wrapper">
                <img src="./assets/Images/kisspng-node-js-javascript-npm-computer-icons-web-applicat-5ae0f85a3ac1c4.3592483215246930822407.png" alt="Pythong Logo" className="language__img" />
              </figure>
              <span className="language__name">Node</span>
            </div>
            <div className="language">
              <figure className="language__img--wrapper">
                <img src="./assets/Images/kisspng-microsoft-azure-sql-database-microsoft-sql-server-database-5abeaece9df699.271102961522446030647.png" alt="Pythong Logo" className="language__img" />
              </figure>
              <span className="language__name">SQL</span>
            </div>
          </div>
        </div>
        </div>
        </section>
      );
      }

      export default LanguageList;
