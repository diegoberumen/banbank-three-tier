function AllData(){
    const [data, setData] = React.useState('');

    React.useEffect(() => {
        //fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    }, []);

    return (
      <Card
        bgcolor="dark"
        textcolor="dark"
        header="All Data"
        body={Array.from(data).map((user, index) => {
          return (
            <div key={index}>
              Id: {user._id}
              <br />
              Name: {user.name}
              <br />
              E-Mail: {user.email}
              <br />
              Password: {user.password}
              <br />
              Balance: {user.balance}
              <br />
              <br />
            </div>
          );
        })}
      />
    );
};