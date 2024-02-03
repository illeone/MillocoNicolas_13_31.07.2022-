import { useState } from 'react';
import { useSelector, useDispatch} from "react-redux";

import { putUserInfos } from '../features/auth/asyncThunkService';

function Form({setShow}) {

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
        <form onSubmit={updateHandler}>
            <div className="input-wrapper-form">
                <div>
                    <label htmlFor="custom-first-name">First Name</label>
                    <input type="text" id="custom-first-name" value={firstName} onChange ={e => setFirstName(e.target.value)}  />
                    <button type="submit" className="save-button">Save</button>
                </div>
                <div>
                    <label htmlFor="custom-last-name">Last Name</label>
                    <input type="text" id="custom-last-name" value={lastName} onChange ={e => setLastName(e.target.value)} />
                    <button type="button" className="cancel-button" onClick={() => { setLastName(''); setFirstName(''); setShow(false); }}>Cancel</button>
                </div>
            </div>
        </form>
     );
}

export default Form ;

