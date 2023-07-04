import { useState } from 'react';
import { useSelector, useDispatch} from "react-redux";

import { putUserInfos } from '../features/auth/authSlice';

function Form() {

    const auth = useSelector(state => state.auth)
    const [firstName,setFirstName] = useState(auth?.userInfos?.body?.firstName)
    const [lastName,setLastName] = useState(auth?.userInfos?.body?.lastName) 
    const dispatch = useDispatch()

    const updateHandler = (e) =>{
        const token = (auth?.user?.body?.token)
        const data = {
            user:{
            "firstName": firstName,
            "lastName": lastName
            }, 
            token:token
        }
        e.preventDefault()
        dispatch(putUserInfos(data))  
    }

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

