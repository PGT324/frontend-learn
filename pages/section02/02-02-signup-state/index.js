import { useState } from 'react';

export default function SignupStatePage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState('에러가 없습니다!');

    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
    }

    function onClickSignup() {
        // 1. 검증하기
        if (email.includes('@') === false) {
            setEmailError('이메일이 올바르지 않습니다!');
        } else {
            // 2. 백엔드 컴퓨터에 보내주기(API)

            // 3. 성공알람 보여주기
            alert('회원가입 축하합니다!')
        }
    }

    return (
        <div>
            이메일: <input type='text' onChange={onChangeEmail} />
            <div>{emailError}</div>
            비밀번호: <input type='password' onChange={onChangePassword} />
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )
}