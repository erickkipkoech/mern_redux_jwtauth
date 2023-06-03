import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../../slices/usersApiSlice.js";
import {logout} from '../../slices/authSlice.js'

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [logoutApiCall]=useLogoutMutation();

  const logoutHandler=async (e)=>{
    e.preventDefault();
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <nav className="main_nav header scrolled ">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="main_nav_content d-flex flex-row">
                {/* <!-- Categories Menu --> */}

                {/* <!-- Main Nav Menu --> */}

                <div className="main_nav_menu">
                  <ul className="standard_dropdown main_nav_dropdown">
                    <li>
                      <Link to="/">
                        Home<i className="fas fa-chevron-down"></i>
                      </Link>
                    </li>
                    <li className="hassubs">
                      <Link to="#">
                        Collection<i className="fas fa-chevron-down"></i>
                      </Link>
                      <ul>
                        <li>
                          <Link to="/collection">
                            Collections<i className="fas fa-chevron-down"></i>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="hassubs">
                      <Link to="/about">
                        About us<i className="fas fa-chevron-down"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        Contact<i className="fas fa-chevron-down"></i>
                      </Link>
                    </li>
                    {userInfo ? (
                      <li className="hassubs">
                        <Link to="#">
                          {userInfo.name}{" "}
                          <i className="fas fa-chevron-down"></i>
                        </Link>
                        <ul>
                          <li>
                            <Link to="/profile">
                              Profile<i className="fas fa-chevron-down"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/add_projects">
                              Add New<i className="fas fa-chevron-down"></i>
                            </Link>
                          </li>
                          <li>
                            <button onClick={logoutHandler}>
                              Logout<i className="fas fa-chevron-down"></i>
                            </button>
                          </li>
                        </ul>
                      </li>
                    ) : null}
                  </ul>
                </div>

                {/* <!-- Menu Trigger --> */}

                <div className="menu_trigger_container ml-auto">
                  <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                    <div className="menu_burger">
                      <div className="cat_burger menu_burger_inner">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
