import React, { useState } from "react"

const Login = () => {
  const [enteredEmail ,setEnteredEmail] =  useState<string>('');
  const [isValidEmail ,setIsValidEmail] = useState<boolean>(true);
  const [enteredPassword , setEnteredPassword] = useState <string>('');
  const [isValidPassword ,setIsValidPassword] = useState <boolean>(true);
  const [isValidForm ,setIsValidForm] = useState<boolean>(false);


  const emailChangeHandler = ( event: React.ChangeEvent<HTMLInputElement>)=>{
    setEnteredEmail(event.target.value)
  }
  const emailValidHandler = ()=>{
    setIsValidEmail(enteredEmail.includes('@'))    
  }
  const passwordChangeHandler =(event: React.ChangeEvent<HTMLInputElement>)=>{
    setEnteredPassword(event.target.value);
  }
  const passwordValidHandler = ()=>{
    setIsValidPassword(enteredPassword.trim().length>6)
  }
  const formValidHandler = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailValidHandler(); // Trigger email validation
    passwordValidHandler(); // Trigger password validation
    setIsValidForm(isValidEmail && isValidPassword);
    console.log('123');
  
  };
  
  
  return (
    <form onSubmit={formValidHandler}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
        onChange={emailChangeHandler}
        onBlur={emailValidHandler}
        type="email" name="email" id="email" />
        {!isValidEmail && <p>please enter valid mail</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
         onChange={passwordChangeHandler}
         onBlur={passwordValidHandler}
        type="password" name="password" id="password" />
        {!isValidPassword && <p>Password must be at least 6 characters long</p>}
      </div>
      <div>
        <button
        
        
         disabled={!isValidForm} type="submit">Login</button>
      </div>
    </form>
  )
}

export default Login


















// import React, { useState } from "react";
// const Login = () => {
//   const [enteredEmail, setEnteredEmail] = useState<string>("");
//   const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
//   const [enteredPassword, setEnteredPassword] = useState<string>("");
//   const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
//   const [isValidForm, setIsValidForm] = useState<boolean>(false);

//   const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setEnteredEmail(event.target.value);
//   };

//   const emailValidHandler = () => {
//     setIsValidEmail(enteredEmail.includes("@"));
//   };

//   const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setEnteredPassword(event.target.value);
//   };
  
//   const passwordValidHandler = () => {
//     setIsValidPassword(enteredPassword.trim().length > 6);
//   };

//   // Function to check overall form validity and set it accordingly
//   const checkFormValidity = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     setIsValidForm(isValidEmail && isValidPassword);
//     console.log("122");
    
//   };

//   return (
//     <form>
//       <div>
//         <label htmlFor="email">E_mail</label>
//         <input
//           onChange={emailChangeHandler}
//           onBlur={emailValidHandler}
//           type="email"
//           name="email"
//           id="email"
//         />
//       </div>
//       {!isValidEmail && <p>Please enter a valid email</p>}
//       <div>
//         <label htmlFor="password">Password</label>
//         <input
//           onChange={passwordChangeHandler}
//           onBlur={passwordValidHandler}
//           type="password"
//           name="password"
//           id="password"
//         />
//       </div>
//       {!isValidPassword && <p>Password must be at least 6 characters long</p>}
//       <button onClick={checkFormValidity} disabled={!isValidForm}>Submit</button>
//     </form>
//   );
// };

// export default Login;
