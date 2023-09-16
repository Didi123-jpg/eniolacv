import "./App.css";
import { CardComponent, List, Portfolio } from "./components/List";
import {
  comp,
  links,
  socials,
  contact,
  portfolios,
} from "./components/constants";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <div style={{padding:"5px"}}>
            <img
              src="/images/eniola.png"
              alt="app"
              style={{ width: "50px", height: "50px", borderRadius: "25px"  }}
            />
          </div>
          <ul id="ul">{links.map((link) => List(link.link, link.title))}</ul>
        </nav>
        <div className="header-body">
          <div className="header-body-text">
            <span>
              <h3>HI EVERYONE ,</h3>
            </span>
            <span className="span">
              I'M
              <div className="body-big-text">ADEYEMO ENIOLA</div>
            </span>
            <span>
              <b>I AM A FRONTEND DEVELOPER</b>
            </span>
            <span>
              WHICH MEANS I CAN HELP 
              <em>
                <b> CREATE</b>
              </em>
            </span>
            <span
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "bisque",
              }}
            >
              <i>AWESOME WEB APPLICATIONS,</i>
            </span>
            <span
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "bisque",
              }}
            >
              <i>SOFTWARES, MOBILEAPPS</i>
            </span>
            <span
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "bisque",
              }}
            >
              <i>AS WELL AS WONDERFUL CROSS-PLATFORM APPS</i>
            </span>
            <br />
            <a id="btn" className="button" href='#contact'>
              CONTACT ME
            </a>
          </div>
          <div className="header-body-image">
            <img
              src={"/images/eniola.png"}
                          alt={"profile"}
                          style={{ width: "120%", heigth: "120%", borderRadius:"20px" }}
            />
            <div className="image-abs">
              <div className="straight-line"></div>
              {socials.map((items) => (
                <div key={items.alt}>
                  <a href={items.link} target="blank">
                    <img
                      src={items.image}
                      alt={items.alt}
                      style={{
                        height: "20px",
                        width: "20px",
                        borderRadius: "5px",
                        marginBottom: "2px",
                      }}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      <main className="App-main">
        <section id="about">
          <div className="main-about">
            <div className="side">
              <h2>About Me</h2>
            </div>
            <p style={{ color: "#7c808f" }}>
              I am a Creative Frontend Developer, I have 1year experience in web development.Proficient in developing, writing, and testing codes along with troubleshooting with existing issues, Knowledgeable about best methods
              for managing resources, schedules and personnel to achieve
              objectives. Tech-savvy and always looking for improvement
              opportunities.
            </p>
          </div>
          <div className="main-skill">
            <div id="skills">
              {comp.map((items) => CardComponent(items.stack, items.array))}
            </div>
            <div className="side">
              <h2>SKILLS</h2>
            </div>
          </div>
        </section>
        <section id="friends">
          <h2 style={{ color: "burlywood" }}>Friends</h2>
          <div className="portfolios">
            {portfolios.map(({image}) =>
              Portfolio(image)
            )}
          </div>
        </section>
        <section id="contact">
          <h2 style={{ color: "burlywood" }}>Contact Me</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "75%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderRadius: "15px",
                backgroundColor: "#838486",
                padding: "5px",
                fontWeight: "500",
              }}
            >
              <div style={{ width: "20px", height: "20px" }}>
                <img
                  src={"/images/email.png"}
                  alt="phone"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              </div>
               { " "} adedoyineniola91@gmail.com
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {contact.map((con) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: "15px",
                    backgroundColor: "#838486",
                    padding: "5px",
                    fontWeight: "500",
                    margin: "2px",
                  }}
                >
                  <div style={{ width: "20px", height: "20px" }}>
                    <img
                      src={"/images/phone.png"}
                      alt="phone"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  {con}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; Eniola Adeyemo, {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
