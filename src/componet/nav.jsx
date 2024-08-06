import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import log from"./assets/picFi/logo2.jpg"
const Navv = () => {
    
        const [menu, setMenu] = useState(false);
      
        useEffect(() => {
          window.scroll(0, 0);
        }, []);
      
        const hamburger = () => {
          setMenu(!menu);
          // console.log("clicked");
          // const myNav = document.querySelector('.main-menu__list'); // Select the navigation element
          // myNav.style.display = myNav.style.display === "none" ? "block" : "none"; // Toggle the display property between "block" and "none"
        };
        const closee = () => {
          setMenu(false);
        };
        const [showNestedList, setShowNestedList] = useState(false);
      
        const handleServiceClick = () => {
          setShowNestedList(!showNestedList);
        };
      
        const [isNestedVisible, setIsNestedVisible] = useState(false);
      
        const toggleNestedVisibility = () => {
          setIsNestedVisible(!isNestedVisible);
        };
      
  return (
    <div>

<div className="topbar-one topbar-one--one_only">
        <div className="container-fluid">{/* /.topbar-one__inner */}</div>
        {/* /.container-fluid */}
      </div>
      {/* /.topbar-one */}
      <header
        className="main-header main-header--only-one main-header--one_only sticky-header sticky-header--normal"
        style={{ zIndex: 9999 }}
      >
        <div className="container-fluid">
          <div className="main-header__inner color">
            <div className="main-header__logo">
              <Link to="/">
                <img
                  src={log}
                  alt="Grdeen HTML"
                  style={{ height: "60px ", borderRadius: "26px" }}
                />
              </Link>
            </div>
            {/* /.main-header__logo */}
            <div className="main-header__wellcome d-flex align-items-center">
              <p className="main-header__wellcome__tagline"></p>
              <Link to="/">
                <img
                  src={log}
                  style={{
                    height: "60px ",
                    marginLeft: "60px",
                   marginTop:"10px"
                  }}
                  alt=""
                />
              </Link>
            </div>
            {/* /.main-header__logo */}

            <nav className="main-header__nav main-menu" style={{ zIndex: 999 }}>
              <ul className="main-menu__list">
                <li className="dropdown megamenu">
                  <Link to="/">Home</Link>
                </li>
                <li className="dropown">
                  <Link to="/">
                    Services<i
                  
                      class="bi bi-caret-down"
                      style={{ fontSize: "17px" }}
                    ></i>
                    
                  </Link>
                  
                  <ul
                    style={{
                      width: "80%",
                      backgroundColor: "transparent",
                      height: "20px",
                    }}
                  >
                    <li
                      style={{
                        color: "black ",
                        backgroundColor: "white",
                        borderRadius: "10px",
                      }}
                    >
                      <Link to="export">Export</Link>
                    </li>
                    <hr />
                    <li
                      style={{
                        color: "black ",
                        backgroundColor: "white",
                        borderRadius: "10px",
                      }}
                    >
                      {" "}
                      <Link to="/imp">Import</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/About">About Us</Link>
                </li>

                <li className="dropdown">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>

            {menu && (
              <nav
                style={{
                  position: "fixed",
                  borderRadius: "10px 10px 0 0px",
                  top: "0",
                  right: 0,
                  width: "70%",
                  background: "#ffffff",
                  height: "0vh",
                  zIndex: 100,
                }}
              >
                <div className="myol">
                  <ol style={{ listStyle: "none " }}>
                    <i
                      class="fa fa-times"
                      aria-hidden="true"
                      style={{
                        position: "absolute ",
                        right: "66px",
                        fontSize: "27px",
                        color: "white",
                      }}
                      onClick={() => setMenu(false)}
                    ></i>
                    <div style={{ paddingTop: "60px" }}>
                      <Link  to="/" onClick={() => setMenu(false)} style={{ marginLeft: "10px", color: "white" }}>
                        Home
                      </Link>{" "}
                      <hr style={{ color: "white", zIndex: "10" }} />
                      <div>
                        <Link
                        
                          style={{ marginLeft: "10px", color: "white" }}
                          onClick={handleServiceClick}
                        >
                          Service
                        </Link>
                        {showNestedList && (
                          <ol style={{ listStyle: "none", marginTop: "20px" }}>
                            <li>
                              <Link
                              onClick={() => setMenu(false)}
                                to="/export"
                                style={{ marginLeft: "20px", color: "white" }}
                              >
                                Export
                              </Link>
                            </li>
                            <hr />
                            <li>
                              <Link
                              onClick={() => setMenu(false)}
                                to="/imp"
                                style={{ marginLeft: "20px", color: "white" }}
                              >
                                Import
                              </Link>
                            </li>
                          </ol>
                        )}
                        <hr style={{ color: "white", zIndex: "10" }} />
                      </div>
                      <Link
                      onClick={() => setMenu(false)}
                        to="/about"
                        style={{ marginLeft: "10px", color: "white" }}
                      >
                        About
                      </Link>
                      <hr style={{ color: "white", zIndex: "10" }} />
                      <Link
                      onClick={() => setMenu(false)}
                        to="/contact"
                        style={{ marginLeft: "10px", color: "white" }}
                      >
                        Contact
                      </Link>
                      <hr style={{ color: "white", zIndex: "10" }} />
                    </div>
                  </ol>

                  <div 
                    style={{
                      maxWidth: "1500px",
                      marginTop: "130px",
                      marginLeft: "10px",
                      color: "white",
                      position:"fixed",
                      bottom:"0",
                    }}
                  >
                    <li style={{ listStyle: "none" }}>
                      {" "}
                      <i
                        className="fa fa-phone site-text-primary"
                        style={{ color: "#d7a222" }}
                      />{" "}
                      <b className="p-lr5 text-uppercase">Tel :</b>{" "}
                      (+251)9-146-545454{" "}
                    </li>
                    <br />
                    <li style={{ listStyle: "none" }}>
                      <i
                        className="fa fa-envelope site-text-primary"
                        style={{ color: "#d7a222" }}
                      />{" "}
                      <b className="p-lr5 text-uppercase">Email : </b>
                      export_bruk@purposeblack.et
                    </li>
                    <br />

                    <li style={{ listStyle: "none" }}>
                      <i
                        className="fa fa-location-arrow site-text-primary"
                        style={{ color: "#d7a222" }}
                      />{" "}
                      <b style={{ fontSize: "16px" }}>LOCATION :</b> Sengatera
                      Negadwoch <br />
                      <span style={{ marginLeft: "116px" }}></span> Hibret BLDG,
                      5th Floor
                      <br />
                      <br />
                      <a
                        href="https://facebook.com/"
                        style={{
                          marginRight: "20px",
                          fontSize: "25px",
                          marginTop: "15px",
                        }}
                      >
                        <i
                          className="fab fa-facebook-f"
                          style={{ color: "#d7a222" }}
                        />
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a
                        href="https://twitter.com/"
                        style={{
                          marginRight: "20px",
                          fontSize: "25px",
                          marginTop: "15px",
                        }}
                      >
                        <i
                          className="fab fa-twitter"
                          aria-hidden="true"
                          style={{ color: "#d7a222" }}
                        />
                        <span className="sr-only">Twitter</span>
                      </a>
                      <a
                        href="https://linkedin.com/"
                        style={{
                          marginRight: "20px",
                          fontSize: "25px",
                          marginTop: "15px",
                        }}
                      >
                        <i
                          className="fab fa-linkedin-in"
                          style={{ color: "#d7a222" }}
                        />
                        <span className="sr-only">Linkedin</span>
                      </a>
                      <a
                        href="https://www.instagram.com/"
                        style={{
                          marginRight: "20px",
                          fontSize: "25px",
                          marginTop: "15px",
                        }}
                      >
                        <i
                          className="fab fa-instagram"
                          style={{ color: "#d7a222" }}
                        />
                        <span className="sr-only">Instagram</span>
                      </a>
                    </li>
                  </div>
                </div>
              </nav>
            )}

            {/* /.main-header__nav */}
            <div className="main-header__right">
              <div
                className="mobile-nav__btn mobile-nav__toggler"
                onClick={hamburger}
              >
                <span />
                <span />
                <span />
              </div>

              <a href="https://purposeblacketh.com/" className="">
                <img
                  style={{ height: "70px", width: "70p", borderRadius: "35px" }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA8FBMVEX///8AAAD8/PwGBwmpqan///7V1tgEBATNzc2vr6/u7u7Q0ND///z5+fn//f7l5eUYGBgSEhKamprCwsIhIiS1tbW7u7s7OzugoKBjY2RVVVX+//nIyMjz8/OOjo7r6+v///MoKStCQkJycnJKSkqIiIiDg4NsbGz//+42NjZ8fHwfICLd3uAuLzFZWVmcnJz//+TW1rf//9vw8Or09OLSzbnUzq3d3dXo5s/b2bz09e3VzKn08NP3//TMwrTQwqnEwJi0s4zS0qjz8tft78fOwJ388N/Ew5jEvIfIuZDh3KvY1J/o58XBv43w79rPz7zqr+o6AAANXklEQVR4nO2aC1fbxhLHpcWyjayVscFPWbZsjN82BCgBktykoWl605R+/29zZ2YlWY81UEobzrnz62mwtavV/nd2Z2ZXNgyGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiG+b9DWJaQFn6SAv911Z9sLaGuCidd6rqGujV7kxDYTnRVSCNfQcQ3idzt22pStZS7W1t71Qs5RHq9crlS9A0LRdJddrlc7q2yfSlCvZ4fXoQ/xQpW6+HtvV51+8AifD9sIj1oF2UbkURJEuxKmZ5ZqcD/PhTFGvFPpUKN9srYtyY0dBgrhLabjf1Cu15oQFGj0WgWVes5lmaeVqdoWMqGRhkvdLIKh3i1El0tdvaSt/cj3c1uut1uwceOhwqgO9VFK1k+qtuxZeGfxjjfNaUdGql0atmyaVFrw5q5F2FOCwemuVfC2ieRgcpQDgozHOHVSjhmRai/t8XcDytN6Lklaq+kOjEvx7MUellIlCiWvdjGxkmq1bDtUKHRMHOlcEErcavQnIOZ23hnCXo1lmokK7sVFqkzAgyaflJBTbFFQqD6iGp6VIYixHFGHpU3IoXtvL5YIQhUmhLg97Uhcms7qXCBpf4EK5fAoGqthwqt9F3DUCFSMffSj6vTPGpSl0tpBfC1aIT+ZmLiSCYqlPC72VTDJs28iHCWGqJ6QIJG/UJIu9411eDmJSbuXij3t5qSGc0y1dbbcKtQGH1quzZtw4Poccq2QzUD59PJCdBfwLohCV18iKQFTorMTYfohlYcDqjVfWrV7HbSqMerwk7SsUjshjnWzNIKeNHQl1ZxdGF8Ra+Fo915kkKcjfi4XqJU3UcC+3Z8FUcO5oaap8LowjP2Eu5BFEdKs3JUOEnBoPoAsEFvsbbR4VsixFjjHYloFHcmOQ5UVcLQnGL3yKs9qlDg/DAnhiMd+iohHgr0E9jbuhHFLfwzIdEdmsS+WqJtg9YVLQgxpWtHVL+OrR6ngpyIv4xxqKBTlgiXD96PhjUHOYW7sBcUDR60YUU1PjZD/+kmaxxjZ9eZ2zp4cU4j16aFcZwK03JEF8uxwn4YHmlxCRknASMsJEch3Fgheh8zF7l3ATcc0rJ9qsJCRqHcoJj9zG1FUkAj16ePKyOVmxzSxQZ+PMVWN0mLCCFTCkciTnxg4khjiheruzKbnEL4H2bQ8xX6c1TYzLQqu2bkLY+VaxSpWTigaYxtQawEj272q4MQe5sNKYUlnOFR/gPjVCZ3kM8EdwDN9VVPnqnQRleaVUhz10TLSkHpTkelNpFCYc/x6gl+GagIZ9ZUwNgbdhenvpGwIS7+KrkNcI/SP61FvjSX7EaXkjkxCIMlYe+O+I8rPFLWyjzrOIyX4ZI7SefXQnaUK0ImYZgtUXxW8ew0zBVG2RCsQn4ikUw+NJrKtJCFMnx1irfQ9cd9qV7hUmPDUCGGA6Wwnx3xKQrqqs8LTV5WTynUFGuQqbVMTsuvH6A3phRnR176uMKD3Qop5+mqHCOtUJANN6quyGTeJII8Sagwm+8cFHQCMR4cK6aHyoBNjLwwLyrkpHuP5qV6hTWtwmm4DvETMMo0669D3apnsnJYX2zGrVZrNGqpRO2EOqUUDodHy+UBsFweDdfz+q5I0Y7HgHRUN5RZ7KmUZpfC2qM23NN5GvAkoJA2eSfKl6aNOKCLhVBhur/VOT5nSBGDogUkmb49GIC3tW3aCe3aAe9Fcxr3FvZEzYaSOfJVeQUn7LAq4gWLDa1oPFc0niqn0dgw5WnUIm/ixVoRm6hTztOIExWhUlycPA2NQBllqrTDpJymnzEZ3JHZHyiaif3huLOMnFRnEJYXo1xRhgcH+GiVitpq2e9SmLIh5YNgQmh6JNTsx3ZbKgCAu8c/1SMMorUV3SBToZJ2k0qhQQpLajIn60jtWYvaGWQX7XxfRvf6LXLDjbgxKFGj2ZIPK8xEC2H4Y5WMK3upncTUNuJANRgr1aGmlIlEtIehISGFLT+txDKyezzFUm0dN0C3O+52N9PFfk8Y25OeBc0cc1GMJmnxWA1KOzxu2OyyYTqnkYWh2i6qyY0zEpf7uq5OE4TfXqryMNXbGsTFsG6fUke7dBUcFk65QvMwzWqXwpI5yFyNR1BSJkX7nJTfjrNq8dAsXbdiMHrQfvA4bBl9UWoDbKrdxkglOfvZWKBynDqZu4cKc9HCDDfIGdAJm7WqriiU2kQj5qNrNF5Sb8OD3NNLtMcf+tH0OIwuJSvQGQCWFmhcc4/1aezlWBPysaVnKUQnZmYfZg7LYbkh9TbMKiwpCx1Uo0yU2g23+ZFClZaTwoZGocppYM7iJiWvEDI8nYTlIwopSR2byRbhy7QaZ7PygZwmI5FcdCLoFNfR9Yh5MTpoaeRHFfJYgcsTJ0HlIKfx2QrJB/f6iW6s65WEm4ZMyzRzO2DNLDXX7aJhJBRi/nScrKCyKlVcyN+/KBvRjlgafuEoX0M7S48eVvhcQGF4RvFcqrYvVdKyWq2qtuY4e9Wu1+v9JA1dQ09V+ODGMl+obKh94tPQ7ILSX/XhXcM/Z8O/pzAvKZOj5dJQkc30Qv5BhaW/p3CbsOonkDCyac+jCrHc1VR5YldisI28DfMnmcaDc19b/4HaIpPnxcQK/1qLDyLzCnG3R4exmn69AEqevqlIISTG5TK9yEtR/MtUKlWxex3m1s7LDCv0vmo/ZkM8534ZxpDjZxXWJ0jBzjy90skdxz1TYSFxuLhL4eSlFM41CkdhWSb7PwzfUvx9hW3zdMcmf7sO/cLL0B5oZunYnLTbp6PwpURCYeZ4LLXpze7ht2+x81raZENDsxrjdSi0L8Gfg9QqxNPVYjavyik0pB+ufj8f8IQxWBGa4EYKjWpvkBO/teHLeLVw7PMKMSd9gsLw3QbsE1dZxytEf6jKjvOPbdOOfILv7jIlyWjxUmgVLk7r9XF22WkUVsebTXfTHeZ/HoHioQSKNSe/yoZDc5Cbi8s4WgyesMb2nwLskMLMO6mQmBjpocwrjErt6Og7UdI0tWe+W4U9syNyPzkJbRi/73oB1tCbQS2dtY3NY8j9n2LDhtp3GTmFeC64Ow1sm4teHU8Icu5k+fLxcIQTIqcQPc2qljkDziv01+Z6DOgVZl9IJhUifY2X3Sr0e/jDpofIJjx6yuiY9QrtuTl4ZJYWa0PcGMpn2PCwYS41AWFD88remdU9A3Sm6g1ERqGoZ96JahSuauEhnkbhYcKJWpm/tA6nuYPwf4/oNdIifbmZVOgAhj+MJnvX3Z6YWlgmokBiTrGuBZsYy/HwINiRsMZODcc2Tf0vv/4FOvNWqzXf1DMj3BslVxboEG6v01UsHIJKUA9kEvvdEb6Hmp9gVcfzvLBcOFZj1HAgOx1PfpQRfRvJrhJ81bDtkIs2ufW8W6kgAaAtkoHHYr7vX1xc0NG+5wWeFzUUvuDF990vlpv9RYQh8qmmIY20QgMN4zmWC5+dUGFsyDCxxPmKd5ENo8bxpzUSf9dIPwf6UQjd2UoCl4zoWMLz4KOwYO5ZlsD/UAH++ol+rEvq0bbwHaob27MOqf+B6evBQdfhCdf1PDASWEq6ZHVlMWVKz3FRPdrXUB/E9ufMQv/y6dVgoTeBtSVcz4GeB4FDKwuE4e/JwLGgSXHmuq5DM1g6pJTqwO00qV+1RFDoOsFshsoMb3YGH8hfIhgWUIEFwqEGylKfSKtar97Wt75WYPydy6urnwJLuBcf8YN3670FJW9Rq3NxS6a9vrp6P0M7Xt5c3cw8mNK3F+Rxg7e3t6/cihDXret3gfyA/T179x6CwYfgPzNv9nGGy+/NL44beDcfz84+XTsfAvfy09mbK6jj3f+JRnVmP3+euSIOIK8RCBbu9efA/QCJijO7uoMl6QUfz2ZnX7YKgy+/Ot79R9Dl3n89O/8UwOS8vwGFRnDz7fczD6Lks458/x1wKn7/7SPMSVhPs6v7wHPF7MvnN+/+CwoNhxTOvvzqytm7QAj37o9vn25wEO5ucP3Nvp5/+zaDafyKFVqQaX7//Qw8DSp8c4lhEfp9dv5lBtPWe/Pdcb3ZlzsveA8KXff9H9/vZ1I4qNC1vPPf3r3748x7zTak7Pr77+eXEBNg0v10iZEguMJZGjgw+97ceSDn5ur8/Ov3ACTffQKLwX+g0HFlcPVLMPt6B972R+vYjYUh7/7z1Z8SAqLhXV8I9P9vA+FdeyA6uL6EECiCm8+fr9G/OJd/OpgcwLK8dlzr9uZMOtfXkBD9aB0PAr4fYhz2G0I/TFYPnST6RzANfIERkOBsIEQ4QaByO7IzBZMA7gsCGKcfLeIhPPKeM4kKIR1zLQsuQPKG65JyF0jn8Mc1KMwTkNK4uD10qcDFGyQE/NccDw0nwEgOXgSDGlhICFB4C1rAlB7sN9CYroW6PgiS56G7xXooHW2K+durNmKUkMR2iL5b6lN8dGGFfywrccEydvzui2EYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmGezv8Ahx4Esbb+wIMAAAAASUVORK5CYII="
                  alt=""
                />
              </a>
              {/* /.thm-btn main-header__btn */}
            </div>
            {/* /.main-header__right */}
          </div>
          {/* /.main-header__inner */}
        </div>
        {/* /.container-fluid */}
      </header>
    </div>
  )
}

export default Navv;