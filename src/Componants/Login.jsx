import React, { useState } from 'react';
import { AiOutlineUser, AiFillUnlock } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // เรียกใช้ useNavigate เพื่อเปลี่ยนเส้นทาง
  const handleLogin = () => {
    // ตรวจสอบข้อมูลล็อกอิน ในที่นี้ใช้ข้อมูลคงที่เป็น "admin" และ "password"
    if (username === 'admin' && password === '1234') {
      setSuccessMessage('เข้าสู่ระบบสำเร็จ');
      navigate('/home'); // เปลี่ยนเส้นทางไปยังหน้า home
    } else {
      setSuccessMessage('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className='body'>
    <div className='wrapper'> 
      <div className='logo'>
          <img className='logo-image' src="src/Componants/Assets/DusitLogo-removebg-preview.png" alt="" />
      </div>

      <div className='input-box'>
        <input type="text" id='username' placeholder='ชื่อผู้ใช้' value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
        <AiOutlineUser className='icon'/>
      </div>
      
      <div className='input-box'>
        <input type="password" id='pwd' placeholder='รหัสผ่าน' value={password} onChange={(e) => setPassword(e.target.value)} required/> <br />
        <AiFillUnlock className='icon' />
      </div>
      
      <button onClick={handleLogin}>เข้าสู่ระบบ</button>
      
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
    </div>
  );
}

export default Login;


//    <h1>Login</h1>
    //    <form action="/action_php.php">
    //    <input type="email" id='email' placeholder='Email' name='email' /> <br />
    //    <input type="password" id='pwd' placeholder='password' name='pwd' minLength={8}/> <br />
    //    <button>Submit</button>
    //    </form>


