function Home(){
    return(
        <Card
            bgcolor="info"
            txtcolor="black"
            header="BadBank Landing Page"
            title="Welcome to the Bad Bank!"
            text="You should definitely NOT use this bank."
            body={<img src="256px/Commercial-Bank.png" className="img-fluid" alt="Responsive image"/>}
        />
    );
};