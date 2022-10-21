function CreateAccount(){
    const [show, setShow]          = React.useState(true);
    const [status, setStatus]      = React.useState("");
    const [name, setName]          = React.useState("");
    const [email, setEmail]        = React.useState("");
    const [password, setPassword]  = React.useState("");
    const ctx = React.useContext(UserContext);

    function validate(field, label){
        if(!field){
            setStatus("Error: Enter " + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    };

    function validateEmail(){
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!email.match(mailformat)){
            setStatus("Error: Enter valid e-Mail");
            setTimeout(() => setStatus(''), 3000);
            return false;  
        }
        return true
    }

    function validatePwd(){
        if(password.length < 8){
            setStatus("Error: Password must be 8 characters");
            setTimeout(() => setStatus(''), 3000);
            return false;  
        }
        return true
    }

    function handleCreate(){
        if(!validate(name, "name")) return;
        if(!validate(email, "email")) return;
        if(!validate(password, "password")) return;
        if(!validateEmail()) return;
        if(!validatePwd()) return;
        const url = `/account/create/${name}/${email}/${password}`;
        (async () => {
            var res = await fetch(url);
            var data = await res.json();
        })();
        setShow(false);
    };

    function clearForm(){
        setName("");
        setEmail("");
        setPassword("");
        setShow(true);
    };

    return(
        <Card
            bgcolor="primary"
            header="Create Account"
            status={status}
            body={show ? (
                    <>
                        Name<br/>
                        <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => {setName(e.currentTarget.value)}}/><br/>
                        E-Mail Address<br/>
                        <input type="input" className="form-control" id="email" placeholder="Enter E-Mail" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                        Password<br/>
                        <input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                        <button id="submit-button" disabled={!name || !email || !password} type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
                    </>
                ):(
                    <>
                        <h5>Success!</h5>
                        <a className="btn btn-light" href="#/login/">Log-In</a>
                        <button type="submit" className="btn btn-light" onClick={clearForm}>Add Another Account</button><br/>
                    </>
                )}
        />
    );
};