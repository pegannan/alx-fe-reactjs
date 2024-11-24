// Dashboard component that contains nested routes
const Dashboard = () => {
    // useRouteMatch provides the current URL and path
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                <li>
                    <Link to={`${url}/profile`}>Profile</Link>
                </li>
                <li>
                    <Link to={`${url}/settings`}>Settings</Link>
                </li>
            </ul>

            {/* Nested routes within the Dashboard component */}
            <Switch>
                {/* Default route that displays a message */}
                <Route exact path={path}>
                    <h3>Please select an option.</h3>
                </Route>
                {/* Nested route for Profile */}
                <Route path={`${path}/profile`}>
                    <Profile />
                </Route>
                {/* Nested route for Settings */}
                <Route path={`${path}/settings`}>
                    <Settings />
                </Route>
            </Switch>
        </div>
    );
};

// ProfileDetails component
const Profile = () => <h3>Profile</h3>;

// ProfileSettings component
const Settings = () => <h3>Settings</h3>;

const NestedRoutes = () => (
    <Router>
        <div>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
            <Switch>
                {/* Route to Dashboard component */}
                <Route path="/dashboard" component={Dashboard} />
                {/* Default route to Home component */}
                <Route path="/">
                    <h2>Home</h2>
                </Route>
            </Switch>
        </div>
    </Router>
);

export default NestedRoutes;

// Function that checks if the user is authenticated
const isAuthenticated = () => {
    // Replace with your authentication logic, for instance checking if a token exists in local storage
    return localStorage.getItem('authToken') !== null;
};

// Custom Route component that checks for authentication
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                // If authenticated, render the component
                <Component {...props} />
            ) : (
                // If not authenticated, redirect to the login page
                <Redirect to="/login" />
            )
        }
    />
);

const ProtectedRoute = () => (
    <Router>
        <div>
            <Switch>
                {/* Public route to Login component */}
                <Route path="/login" component={Login} />
                {/* Protected route to Dashboard component */}
                <PrivateRoute path="/dashboard" component={Dashboard} />
                {/* Default route to Home component */}
                <Route path="/">
                    <h2>Home</h2>
                </Route>
            </Switch>
        </div>
    </Router>
);

// Simple Login component
const Login = () => {
    const handleLogin = () => {
        // Logic to handle login, e.g., setting authentication token in local storage
        localStorage.setItem('authToken', 'your-token');
        window.location.href = '/dashboard'; // Redirect to the dashboard after login
    };

    return <button onClick={handleLogin}>Login</button>;
};

// Simple Dashboard component
const Dashboard = () => <h2>Dashboard</h2>;

export default ProtectedRoute;