import { useState, useEffect } from 'react';
import Input from "../comman/input";
import Button from "../comman/Button";
import axios from "axios"

interface Props {
  isLogin: boolean
}
export default function Form({ isLogin }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [validError, setValidError] = useState([
    false,
    false,
    false,
    false
  ]);
  const [submitDisable, setSubmitDisable] = useState(false);



  useEffect(() => {
    console.log(name, email, password, password2, validError)
    if (!isLogin) {

      if (
        name &&
        email &&
        password &&
        password2 &&
        validError[0] &&
        validError[1] &&
        validError[2] &&
        validError[3]
      ) {

        console.log(name, email, password, password2)
        setSubmitDisable(false);
        return;
      }
    }

    if (isLogin) {

      if (
        email &&
        password &&
        validError[1] &&
        validError[2]
      ) {

        setSubmitDisable(false);
        return;
      }
    }
    setSubmitDisable(true);
  }, [name, email, password, password2, validError]);

  function onSubmitHandler() {
    if (!isLogin) {
      if (
        name &&
        email &&
        password2 &&
        password &&
        validError[0] &&
        validError[1] &&
        validError[2] &&
        validError[3]
      ) {
        console.log("run")
        axios.post('http://192.168.190.205:8000/register/', { 'name': name, 'email': email, 'password': password, 'password2': password2 }, { headers: { 'Content-Type': 'application/json' } }).then((res) => {
          console.log(res); setName("");
          setEmail("");
          setPassword("");
          setPassword2("");
          setSubmitDisable(true);
          setValidError([false, false, false, false]);
          sessionStorage.removeItem("token");
          sessionStorage.setItem("token", `${res.data.token.access}`);

        }).catch((er) => { console.log(er) })
      }
    }
    if (isLogin) {
      if (
        email &&
        password &&
        validError[1] &&
        validError[2]
      ) {
        console.log("run")
        axios.post('http://192.168.190.205:8000/register/', { 'name': name, 'email': email, 'password': password, 'password2': password2 }, { headers: { 'Content-Type': 'application/json' } }).then((res) => {
          console.log(res); setName("");
          setEmail("");
          setPassword("");
          setPassword2("");
          setSubmitDisable(true);
          setValidError([false, false, false, false]);
          sessionStorage.removeItem("token");
          sessionStorage.setItem("token", `${res.data.token.access}`);

        }).catch((er) => { console.log(er) })
      }
    }
  }

  return (
    <div className="lg:col-span-2 flex flex-col gap-3  lg:gap-5 w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 h-full lg:row-span-6 order-1 z-30 mx-auto my-auto">
      <div className=" w-full flex flex-col gap-2 pb-2 font-medium  text-DarkGrey ">
        <div className="flex flex-col lg:flex-row gap-2 w-full">
          {!isLogin && <div className="flex flex-col gap-1 w-full">
            <p className="">Your Name</p>
            <Input
              text="Name"
              value={name}
              setValue={setName}
              validError={validError}
              setValidError={setValidError}
              valid="name"
            />
          </div>}
          <div className="flex flex-col gap-1 w-full">
            <p className="">Your email?</p>
            <Input
              text="Email"
              value={email}
              setValue={setEmail}
              validError={validError}
              setValidError={setValidError}
              valid="email"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-col gap-1 w-full">
            <p className="">
              Password
            </p>
            <Input
              text="Password"
              value={password}
              setValue={setPassword}
              validError={validError}
              setValidError={setValidError}
              valid="password"
            />
          </div>
          {!isLogin && <div className="flex flex-col gap-1 w-full">
            <p className="">
              Confirm Password
            </p>
            <Input
              text="Confirm Password"
              value={password2}
              setValue={setPassword2}
              validError={validError}
              setValidError={setValidError}
              valid="password2"
            />
          </div>}
        </div>
      </div>
      <div
        onClick={() => {
          onSubmitHandler();
        }}
        className="lg:col-span-2 flex justify-center items-center h-full w-1/2 sm:w-1/3 mx-auto"
      >
        <Button text={`${isLogin ? "Login" : "Sing Up"}`} active={submitDisable ? false : true} />
      </div>
    </div>
  );
}