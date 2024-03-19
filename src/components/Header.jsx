// import React from "react";
// import { Link } from "react-router-dom";

// const Header = ({ handleProfileClick, handleGenreClick, clearSearch }) => {
//   const handleLogoClick = () => {
//     clearSearch();
//   };

//   return (
//     <nav
//       className="navbar navbar-expand-lg navbar-light bg-light"
//       style={{ position: "sticky", top: 0, zIndex: 1000 }}
//     >
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/" onClick={handleLogoClick}>
//           <img
//             src="logo.png"
//             alt="Logo"
//             width="30"
//             height="24"
//             className="d-inline-block align-text-top"
//           />
//         </Link>
//         <div className="navbar-nav mx-auto">
//           <Link className="nav-link" onClick={() => handleGenreClick("action")}>
//             Action
//           </Link>
//           <Link className="nav-link" onClick={() => handleGenreClick("comedy")}>
//             Comedy
//           </Link>
//           <Link className="nav-link" onClick={() => handleGenreClick("drama")}>
//             Drama
//           </Link>
//           <Link className="nav-link" onClick={() => handleGenreClick("horror")}>
//             Horror
//           </Link>
//           <Link className="nav-link" onClick={() => handleGenreClick("new")}>
//             New
//           </Link>
//         </div>
//         <div className="navbar-nav">
//           <button
//             className="btn btn-link nav-link"
//             onClick={handleProfileClick}
//           >
//             <img
//               src="profile-icon.png"
//               alt="Profile"
//               width="24"
//               height="24"
//               className="d-inline-block align-text-top"
//             />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Header = ({ handleProfileClick, handleGenreClick, clearSearch }) => {
  const handleLogoClick = () => {
    clearSearch();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={handleLogoClick}>
          <img
            src="logo.png"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse  navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => handleGenreClick("action")}
              >
                Action
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => handleGenreClick("comedy")}
              >
                Comedy
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => handleGenreClick("drama")}
              >
                Drama
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => handleGenreClick("horror")}
              >
                Horror
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => handleGenreClick("new")}
              >
                New
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-link nav-link"
                onClick={handleProfileClick}
              >
                <img
                  src="profile-icon.png"
                  alt="Profile"
                  width="24"
                  height="24"
                  className="d-inline-block align-text-top"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
