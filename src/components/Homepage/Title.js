import React from "react";
import BannerImage from "../../Pictures/hunter-newton--xNgyZfX1gs-unsplash.jpg";
import mobileHeroImage from "../../Pictures/Mobile-hero-image.jpg";

export default function Title() {
  return (
    <div
      style={{
        backgroundImage: "url('/Images/home-background.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <img
        src="./Images/Title-pattern.png"
        style={{
          position: "absolute",
          top: "-50px",
          left: "0",
          width: "100%",
          zIndex: "1000",
        }}
      />
      {/* DESKTOP HERO SECTION */}
      <div className="container">
        <div className="desktop-hero-section">
          <div>
            <div>
              <div className="row">
                <div className="col-lg-9 col-md-9 col-9">
                  <div
                    className="hero-left-side"
                    style={{ textAlign: "left", padding: "95px 0" }}
                  >
                    <h1 className="title-text">
                      Kostenlose <br />
                      <span style={{ color: "#2FAAE4" }}>
                        Pflegehilsmittel
                      </span>{" "}
                      sichern
                    </h1>
                    <br />
                    <p>
                      Pflegebedürftige Personen haben einen <br /> gesetzlichen
                      Anspruch auf Produkte im Wert <br /> von 60€
                    </p>
                    <br />
                    <a href="/box">
                      <button
                        style={{
                          textTransform: "uppercase",
                          backgroundColor: "#f87433",
                          color: "white",
                          border: "none",
                          padding: "12px 30px",
                          borderRadius: "10px",
                          position: "relative",
                          zIndex: "1000000",
                        }}
                      >
                        Pflegebox sichern
                      </button>
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-3 col-3"
                  style={{ position: "relative" }}
                >
                  <div className="container">
                    {" "}
                    <img
                      src="./Images/Group 34441.png"
                      style={{
                        position: "absolute",
                        bottom: "60px",
                        left: "60px",
                        zIndex: "1000",
                        height: "150px",
                      }}
                      className="orange-pattern2"
                    />
                    <img
                      className="hero-girl"
                      src="./Images/girl.png"
                      style={{
                        width: "140%",
                        height: "500px",
                        position: "absolute",
                        bottom: "0",
                        left: "-85%",
                      }}
                    />
                    <img
                      className="hero-car"
                      src="./Images/car.svg"
                      style={{
                        position: "absolute",
                        width: "80px",
                        height: "80px",
                        left: "-60%",
                        top: "100.65px",
                        zIndex: "100",
                      }}
                    />
                    <img
                      className="hero-box"
                      src="./Images/box.svg"
                      style={{
                        position: "absolute",
                        width: "80px",
                        height: "80px",
                        left: "40%",
                        top: "170.65px",
                        zIndex: "100",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mobile-TUV desktop-hero-section"
        style={{
          textAlign: "center",
          paddingLeft: "30px",
          height: "130px",
          padding: "20px",
          paddingBottom: "22px",
          margin: "-50px 0 0 0",
          zIndex: "1000",
          position: "relative",
        }}
      >
        <img
          src="./Images/badge.svg"
          style={{ width: "239px", height: "64px", marginRight: "30px" }}
        />
      </div>

      {/* MOBILE HERO SECTION */}
      <div
        className="mobile-hero-section"
        style={{ textAlign: "left", width: "100%", boxSizing: "content-box" }}
      >
        <img
          className="mobile-car"
          src="./Images/car.svg"
          style={{
            position: "absolute",
            width: "50px",
            height: "50px",
            left: "100.37px",
            top: "420.65px",
          }}
        />
        <img
          className="mobile-box"
          src="./Images/box.svg"
          style={{
            position: "absolute",
            width: "50px",
            height: "50px",
            left: "300.37px",
            top: "450.65px",
          }}
        />
        <div className="row" style={{ margin: "0" }}>
          <div className="col-9">
            <h3
              style={{
                fontSize: "28px",
                lineHeight: "38px",
                paddingTop: "60px",
              }}
            >
              Kostenlose{" "}
              <span style={{ color: "#2FAAE4" }}>Pflegehilsmittel</span> sichern
            </h3>
            <p>
              Pflegebedürftige Personen haben einen gesetzlichen Anspruch auf
              Produkte im Wert von 60€
            </p>
            <a href="/box">
              <button style={{ textTransform: "uppercase" }}>
                Pflegebox sichern
              </button>
            </a>
            <img
              className="mobile-girl"
              src="./Images/girl.png"
              style={{
                width: "303px",
                height: "313px",
                position: "relative",
                left: "20px",
              }}
            />
          </div>
          <div className="col-3 home-right-div">
            <svg
              width="100%"
              height="594"
              viewBox="0 0 85 594"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M269.381 176.446C224.226 172.262 136.386 154.631 146.265 117.572C158.613 71.2483 188.839 16.0658 98.8978 -13.2788M-148.442 255.252C-124.113 270.693 -77.4836 338.487 -49.8376 239.011C-22.1916 139.534 -41.3595 135.474 22.2263 117.572C85.8121 99.6701 103.69 29.3539 58.1661 -13.2788M-148.442 351.037C-97.3887 360.449 -49.8376 296.039 -34.7244 255.252C-19.6113 214.464 22.2263 214.464 58.1661 222.954C94.1058 231.444 107.376 149.87 165.248 169.802C211.546 185.747 248.432 229.168 263.852 258.574C256.296 261.342 179.624 223.139 123.595 223.877C53.5584 224.8 9.87775 277.952 -49.8376 331.104C-97.6098 373.626 -139.288 372.814 -154.155 367.093M130.23 15.143C161.562 33.045 145.635 104.106 115.301 145.256C90.4933 178.909 49.688 202.284 22.2263 198.039C-5.23538 193.794 -11.3175 176.446 0.293816 161.312C27.1702 126.283 79.9142 181.06 98.8978 117.572C117.881 54.0845 116.776 20.8643 87.4708 -7.55749M255.19 293.086C234.363 323.538 199.898 292.163 171.883 318.739C155.664 334.125 171.452 363.045 146.265 373.737C72.3577 405.112 176.491 480.226 241.92 463.985M241.92 323.538C232.397 316.894 211.104 310.619 202.109 338.671C190.867 373.737 144.422 382.411 165.248 405.112C186.075 427.812 247.633 444.976 269.381 425.044M241.92 351.037C223.243 356.758 189.134 371.227 202.109 383.334C218.328 398.468 224.042 421.168 246.712 405.112M-154.155 383.334C-129.212 390.532 -70.4062 393.189 -34.7244 346.238C9.87774 287.549 58.1661 329.074 98.8978 298.807C139.63 268.54 116.96 211.512 171.883 239.011C215.822 261.01 240.077 274.138 246.712 277.952M-162.633 436.486C-138.981 432.365 -80.285 417.292 -34.7244 389.978C22.2263 355.835 -0.197456 323.538 58.1661 323.538C102.584 323.538 183.863 263.003 191.42 282.197C195.821 293.377 133.732 313.018 136.865 338.671C139.998 364.325 32.5474 425.967 98.8978 478.196C151.978 519.98 189.822 577.795 202.109 601.48M136.865 580.625C115.055 570.475 68.7821 540.134 58.166 499.974C44.896 449.775 111.062 331.104 65.5383 351.037C20.0146 370.969 -120.058 483.918 -182.538 470.629M-148.442 509.386C-127.615 499.359 -49.8376 470.629 -10.7646 436.486C29.5243 401.281 27.9398 455.311 22.2263 514.185L32.5474 612M0.293778 588.192C2.81264 570.167 -0.66461 531.644 -34.7245 521.752C-77.2993 509.386 -113.423 571.028 -168.347 550.173M225.885 580.625C186.075 546.482 107.597 472.881 112.168 451.62C117.881 425.044 160.456 497.021 241.92 495.176M-138.858 233.474C-118.645 228.06 -75.3825 206.049 -64.0292 161.312C-49.8376 105.391 7.11316 128.092 22.2263 67.3726C34.3168 18.7972 12.6424 -10.4489 0.293831 -19M-14.8193 15.143C-6.27977 35.3827 1.69455 80.0332 -34.7244 96.7171C-71.1434 113.401 -138.98 87.3047 -168.347 72.1711M-138.858 207.82C-107.28 190.164 -52.0861 150.276 -83.9343 131.968C-115.782 113.659 -181.248 117.941 -210 122.371M-49.8376 15.143C-43.8169 32.5529 -39.9219 67.3726 -72.5073 67.3726C-113.239 67.3726 -86.6989 26.401 -138.858 9.42172M193.631 3.88505C182.88 30.7073 166.501 89.1134 186.996 108.16C212.615 131.968 277.859 108.344 295 145.256M255.19 76.8627C242.903 83.5424 221.459 70.0268 212.615 53.1617C201.028 31.0657 223.981 -1.89773 232.52 -7.55748"
                stroke="white"
                stroke-opacity="0.1"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
        <div
          className="mobile-TUV"
          style={{
            textAlign: "center",
            marginTop: "-25px",
            boxSizing: "content-box",
            paddingLeft: "30px",
            zIndex: "1000",
            position: "relative",
          }}
        >
          <img
            src="./Images/badge.svg"
            style={{ width: "70%", marginRight: "30px" }}
          />
        </div>
      </div>
    </div>
  );
}
