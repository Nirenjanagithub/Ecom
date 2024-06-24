
function LoginPage(){
    return(
        <div className ="Main-Page">
            <LoginPageHeader />
            <div className ="flex-container">
                <div className="Left">
                    <LoginPageText />
                </div>
                <div className="Right">
                    <LoginContent />
                    <SingUpContent />
                </div>
            </div>
        </div>
    )
}
export  default LoginPage;