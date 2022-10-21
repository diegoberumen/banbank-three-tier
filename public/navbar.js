function NavBar(){
    const ctx = React.useContext(UserContext);

    function handleLogOut(){
        return ctx.currentUser = [];
    };

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" data-toggle="tooltip" data-placement="bottom" title="Home page">
                    <img src="256px/Reputational-Risk.png" alt="" width="auto" height="28" className="d-inline-block align-text-top"/>
                    &nbsp; BadBank
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#/CreateAccount/" data-toggle="tooltip" data-placement="bottom" title="Create a new account">Create Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/login/" data-toggle="tooltip" data-placement="bottom" title="Log-In to an existing account">Log-In</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/deposit/" data-toggle="tooltip" data-placement="bottom" title="Make a deposit to your account">Deposit</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/withdraw/" data-toggle="tooltip" data-placement="bottom" title="Make a withdrawl from your account">Withdraw</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/balance/" data-toggle="tooltip" data-placement="bottom" title="View your balance">Balance</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/alldata/">All Data</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-toggle="tooltip" data-placement="bottom" title="Log out of account" onClick={handleLogOut}>Log Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};