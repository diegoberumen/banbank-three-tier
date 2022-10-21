function Spa(){
    return (
        <HashRouter>  
            <UserContext.Provider value={{users:[{name:'Abel',email:'abel@mit.edu',password:'secret',balance:100}], currentUser:[]}}>
                <NavBar/>
                <Route path="/" exact          component={Home}/>
                <Route path="/CreateAccount/"  component={CreateAccount}/>
                <Route path="/login/"          component={LogIn}/>
                <Route path="/deposit/"        component={Deposit}/>
                <Route path="/withdraw/"       component={Withdraw}/>
                <Route path="/balance/"        component={Balance}/>
                <Route path="/alldata/"        component={AllData}/>
            </UserContext.Provider>
        </HashRouter>
    );
};

ReactDOM.render(<Spa/>, document.getElementById("root"));