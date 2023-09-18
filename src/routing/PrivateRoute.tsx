import React from "react";
import { Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

interface Props {
  path?: string;
  element: React.ComponentType;
  auth: any;
}

const PrivateRoute: React.FC<Props> = ({
  element: Component,
  auth: { isAuthenticated },
  ...rest
}) => (
  <Route
    {...rest}
    Component={(props: any) =>
      isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
