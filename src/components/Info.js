import "./Info.css";

import github from "./../images/github-mark.png";

const Info = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="info_inner">
          <a className="github_link" href="https://github.com/TsengelBair">
            <img className="github_img" src={github} alt="github_logo" />
          </a>
          <h3 className="info_text info_text_1">
            Hope, this project was helpful for you
          </h3>
          <h3 className="info_text info_text_2">
            If you liked it, you can find more interesting projects on my GitHub
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Info;
