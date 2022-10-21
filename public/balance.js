function Balance(){
    const ctx = React.useContext(UserContext);
    let user = ctx.currentUser[0]
    const [status, setStatus] = React.useState("");
    let show = false

    function checkUser(){
        if(ctx.currentUser.length === 1){
            show = true;
            return;
        } else {
            show = false;
            return;
        };
    };
    
    return(
        <Card
            onhashchange={checkUser()}
            bgcolor="secondary"
            header="Balance"
            status={status}
            body={show ? (
                <>
                    Hello {user.name}, your current balance is:<br/> 
                    <h1>${user.balance}</h1><br/>
                    <br/>
                    <br/>
                    <a className="btn btn-success" href="#/deposit/">Deposit</a>
                    <a className="btn btn-danger" href="#/withdraw/">Withdrawal</a>
                </>
            ):(
                <>
                    <a className="nav-link" href="#/login/" data-toggle="tooltip" data-placement="bottom" title="Log-In to an existing account">Please Log-In</a>
                </>
            )}
        />
    );
};