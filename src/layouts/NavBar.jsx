import SearchBar from "../components/SearchBar";

const NavBar = () => {
  return (
    <div className="container nav_container menu-default menu-right ">
      <div id="site-navigation">
        <div className="three columns ">
          <div id="logo">
            <a
              className=""
              rel="home"
              style={{color:"white"}}
            >
              Church Name
            </a>
          </div>
        </div>

        <div className="thirteen columns">
          <div id="navigation" className="top-navigation ">
            <div className="menu-emmanuel-tv-en-header-container">
              <ul id="menu-emmanuel-tv-en-header" className="nav-menu ">
                <li
                  id="menu-item-550501"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-550501"
                >
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://stream.emmanuel.tv/"
                    style={{color:"white"}}
                  >
                    Live
                  </a>
                  <ul className="sub-menu">
                    <li
                      id="menu-item-550500"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-550500"
                    >
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://stream.emmanuel.tv"
                      >
                        Watch Emmanuel TV
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-545120"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-545120"
                >
                  <a href="https://emmanuel.tv/about/"
                  style={{color:"white"}}
                  >About</a>
                  <ul className="sub-menu flex flex-col">
                    <li
                      id="menu-item-545121"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-545121"
                    >
                      <a href="https://emmanuel.tv/about/about-tb-joshua/"
                      
                      >
                        Prophet TB Joshua
                      </a>
                    </li>
                    <li
                      id="menu-item-545122"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-545122"
                    >
                      <a href="https://emmanuel.tv/watch-emmanuel-tv-on-demand/">
                        Emmanuel TV
                      </a>
                    </li>
                    <li
                      id="menu-item-545124"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-545124"
                    >
                      <a >
                        Official Books
                      </a>
                    </li>
                    <li
                      id="menu-item-545123"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-545123"
                    >
                      <a href="https://emmanuel.tv/crusade/">Crusades</a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-545125"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-545125"
                >
                  <a href="https://emmanuel.tv/contacts/"
                  style={{color:"white"}}
                  >Contacts</a>
                </li>
                <li
                  id="menu-item-545126"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-545126"
                >
                  <a href="https://emmanuel.tv/tune-in/"
                  style={{color:"white"}}
                  >Tune In</a>
                  <ul className="sub-menu">
                    <li
                      id="menu-item-545127"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-545127"
                    >
                      <a href="https://emmanuel.tv/programming/">Programming</a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-547958"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-547958"
                >
                  <a href="https://emmanuel.tv/partnership/"
                  style={{color:"white"}}
                  >Partnership</a>
                  <ul className="sub-menu flex flex-col">
                    <li
                      id="menu-item-547967"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-547967"
                    >
                      <a href="https://emmanuel.tv/partnership/">
                        About Partnership
                      </a>
                    </li>
                    <li
                      id="menu-item-545137"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-545137"
                    >
                      <a href="https://emmanuel.tv/partnership/#paymentSection">
                        Partnership Payments
                      </a>
                    </li>
                    <li
                      id="menu-item-549408"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-549408"
                    >
                      <a href="https://emmanuel.tv/donate/">
                        One-Time Offering
                      </a>
                    </li>
                    <li
                      id="menu-item-545130"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-545130"
                    >
                      <a href="https://emmanuel.tv/partnership-1/signup/">
                        Sign Up
                      </a>
                    </li>
                    <li
                      id="menu-item-546770"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-546770"
                    >
                      <a href="https://emmanuel.tv/partnership-1/login/">
                        Login
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-545132"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-545132"
                >
                  <a href="https://emmanuel.tv/testimony/"
                  style={{color:"white"}}
                  >Testimony</a>
                  <ul className="sub-menu flex flex-col text-white" >
                    <li
                      id="menu-item-545176"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-545176"
                    >
                      <a href="https://emmanuel.tv/testimony/">Testimonies</a>
                    </li>
                    <li
                      id="menu-item-545133"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-545133"
                    >
                      <a href="https://emmanuel.tv/submit-your-testimony/">
                        Add Your Testimony
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="menu-dropdown ">
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <SearchBar />
    </div>
  );
};

export default NavBar;
