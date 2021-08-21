
import React from "react"
import SignIn from "./SignIn"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import Home from "./Home"
import SignUp from "./SignUp"
import Layout from "./Layout"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </Layout>

      </AuthProvider>
    </Router>

  )
}

export default App