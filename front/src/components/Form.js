function Form() { 

    return ( 
        <form>
            <div className="input-wrapper">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />
            </div>
                        
            <input className="sign-in-button" type = "submit" />
        </form>
     );
}

export default Form ;