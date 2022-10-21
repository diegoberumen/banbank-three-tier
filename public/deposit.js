function Deposit(){
    const ctx = React.useContext(UserContext);
    let user = ctx.currentUser[0];
    const [status, setStatus]               = React.useState("");
    const [depositAmount, setDepositAmount] = React.useState("");
    let show = false;

    function checkUser(){
        if(ctx.currentUser.length === 1){
            show = true;
            return;
        } else {
            show = false;
            return;
        };
    };

    function handleDeposit(){
        if(depositAmount === ""){
            setTimeout(() => setStatus(""), 1500);
            return setStatus("Error: Enter Amount");;
        } else {
            if(depositAmount < 0){
                setTimeout(() => setStatus(""), 1500);
                setStatus("Error: Negative Value");
                return setDepositAmount("")
            } else {
                if(isNaN(depositAmount)){
                    setTimeout(() => setStatus(""), 1500);
                    setStatus("Error: Not a Number");
                    return setDepositAmount("")
                } else {
                    user.balance = Number(depositAmount) + Number(user.balance);  
                    setTimeout(() => setStatus(""), 1500);
                    setStatus("Deposit Confirmed");
                    return setDepositAmount("");
                };
            };
        };
    };
    
    return(
        <Card
            onhashchange={checkUser()}
            bgcolor="success"
            header="Deposit"
            status={status}
            body={show ? (
                <>
                    Hello {user.name}, your current balance is:<br/> 
                    <h1>${user.balance}</h1><br/>
                    Deposit Amount:<br/>
                    <input type="input" className="form-control" id="depositamount" placeholder="Enter Amount" value={depositAmount} onChange={e => setDepositAmount(e.currentTarget.value)}/><br/>
                    <button disabled={!depositAmount} type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
                </>
            ):(
                <>
                    <a className="nav-link" href="#/login/" data-toggle="tooltip" data-placement="bottom" title="Log-In to an existing account">Please Log-In</a>
                </>
            )}
        />
    );
};