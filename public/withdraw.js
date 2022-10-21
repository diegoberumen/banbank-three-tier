function Withdraw(){
    const ctx = React.useContext(UserContext);
    let user = ctx.currentUser[0]
    const [status, setStatus]               = React.useState("");
    const [withdrawalAmount, setWithdrawalAmount] = React.useState("");
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

    function handleWithdrawal(){
        if(withdrawalAmount === ""){
            setTimeout(() => setStatus(""), 1500);
            return setStatus("Error: Enter Amount");
        } else {
            if(withdrawalAmount < 0){
                setTimeout(() => setStatus(""), 1500);
                setStatus("Error: Negative Value");
                return setWithdrawalAmount("")
            } else {
                if(isNaN(withdrawalAmount)){
                    setTimeout(() => setStatus(""), 1500);
                    setStatus("Error: Not a Number");
                    return setWithdrawalAmount("")
                } else {
                    if((Number(user.balance) - Number(withdrawalAmount)) < 0){
                        setTimeout(() => setStatus(""), 1500);
                        return setStatus("Error: Insufficient Funds");
                    } else {
                        user.balance = Number(user.balance) - Number(withdrawalAmount);
                        setTimeout(() => setStatus(""), 1500);
                        setStatus("Withdrawal Confirmed");
                        return setWithdrawalAmount("");
                    };
                };
            };
        };
    };
    
    return(
        <Card
            onhashchange={checkUser()}
            bgcolor="danger"
            header="Withdraw"
            status={status}
            body={show ? (
                <>
                    Hello {user.name}, your current balance is:<br/> 
                    <h1>${user.balance}</h1><br/>
                    Withdrawal Amount:<br/>
                    <input type="input" className="form-control" id="withdrawalamount" placeholder="Enter Amount" value={withdrawalAmount} onChange={e => setWithdrawalAmount(e.currentTarget.value)}/><br/>
                    <button disabled={!withdrawalAmount} type="submit" className="btn btn-light" onClick={handleWithdrawal}>Withdraw</button>
                </>
            ):(
                <>
                    <a className="nav-link" href="#/login/" data-toggle="tooltip" data-placement="bottom" title="Log-In to an existing account">Please Log-In</a>
                </>
            )}
        />
    );
};