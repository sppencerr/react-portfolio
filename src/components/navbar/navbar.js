import React from 'react';

const NavBar = () => {
  return (
    <body background="./assets/Images/aquablueBackground.jpeg">
      <section id="personal-info">
        <nav>
          <div className="website__creator">Spencer Gerritsen</div>
          <ul className="navbar__link--list">
            <li className="navbar__link">
              <a href="#languages" className="
                navbar__link--anch
                link__hover-effect
                link__hover-effect--black
              ">Languages</a>
            </li>
            <li className="navbar__link">
              <a href="#projects" className="
                navbar__link--anch
                link__hover-effect
                link__hover-effect--black
              ">Projects</a>
            </li>
            <li className="navbar__link">
              <a href="mailto:spencergerritsen@gmail.com" className="
                navbar__link--anch
                navbar__link--anch-main">Contact</a>
            </li>
          </ul>
        </nav>
      </section>
    </body>
  );
}

export default NavBar;
