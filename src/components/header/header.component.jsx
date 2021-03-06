import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../asset/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP{" "}
      </Link>
      <Link className="option" to="/shop">
        CONTACT{" "}
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

//state is the root reducer
//pass in current user property so user value to get current user value
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
