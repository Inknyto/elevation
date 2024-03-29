import React from 'react';
import './footer.css';
const FooterComponent = () => {
  return (
    <footer>
      <div className="left">
        <h2 style={{fontFamily: 'sans-serif'}} >ELƎVATION</h2>
        <div className="social-icons">
          <a href="#" title="facebook">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
          </a>
          <a href="#" title="twitter">
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
          </a>
          <a href="#" title="instagram">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="#" title="youtube">
            <i className="fa fa-youtube-square" aria-hidden="true"></i>
          </a>
          <a href="#" title="linkedin">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
          {/* Uncomment if needed
          <a href="#" title="pinterest">
            <i className="fa fa-pinterest-p" aria-hidden="true"></i>
          </a>
          <a href="#" title="camera">
            <i className="fa fa-camera-retro" aria-hidden="true"></i>
          </a>
          */}
        </div>
      </div>
      <div className="right">
        <p>A propos de moi</p>
            Mbaye Sene
        {/* Uncomment if needed
        <a href="#" title="twitter">
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </a>
        <a href="#" title="youtube">
          <i className="fa fa-youtube-square" aria-hidden="true"></i>
        </a>
        <a href="#" title="linkedin">
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
        */}
        <div className="nous">
          <p className="us">
            <em>
	    Développeur Full Stack,
	  Data Engineer<br/>
	  Ai Enthusiast<br/>
            </em>

            <em>
	  Passionné du développement et de l'intelligence artificielle,
	  et reconnaissant de l'occasion qui m'a offerte par la Sonatel Academy, j'apporte par 
          cette application ma pierre à l'édifice.  
	  </em>
          </p>
          <p className="us">
            <em>Vous pouvez retrouver mon oeuvre sur</em>
              <a style={{color:'#ffffff'}} href="https://github.com/Inknyto" title="github">
                <i className="fa fa-github-square" aria-hidden="true"></i>
		Github 
              </a>
	  Ou me contacter sur <a style={{color:'#ffffff'}} href="https://github.com/Inknyto" title="github">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
	  Whatsapp
              </a>
et par appel au 772882167
          </p>
          <p className="us">
            Mbaye Sene:
            <b>
              <a href="#" title="twitter">
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
              </a>
              <a href="#" title="linkedin">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
            </b>
            <em>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, debitis? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Suscipit, earum!
            </em>
          </p>
        </div>
      </div>
      <div className="right">Un tremplin d'insertion professionnelle</div>
      <div className="right">elevation.inc ®</div>
    </footer>
  );
};

export default FooterComponent;
