import React, {useCallback, useRef, useState} from 'react';
import LoginStatus from "./model/LoginStatus";


function App() {
    const [password, setPassword] = useState("");
    const [state, setState] = useState(LoginStatus.idle);

    const onClick = useCallback(() => {
        setState(state.isValidate(password));
    }, [password]);

    const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    }, []);


    return (
        <div className="App">
            <label>{state.getMessage()}</label>
            <input type={'text'} onChange={onChangePassword}/>
            <button onClick={onClick}>로그인</button>
        </div>
    );
}

export default App;
