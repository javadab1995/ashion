import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Logo from "../../ui/Logo";
import { login, updateName } from "./userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated); 
  

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/account"); 
    }
  }, [isAuthenticated, navigate]);

  function handleClick() {
    setIsLogin((login) => !login);
  }

  const handleLogin = (e) => {
    e.preventDefault()

    if (!username) return;

    dispatch(updateName(username));
    dispatch(login(username))
    navigate("/");

    
   
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center mt-10">
      <div className="p-4 img">
        <Logo />
      </div>

      {/* فرم لاگین یا ثبت‌نام */}
      {!isLogin && (
        <div className="w-full h-full">
          <form
            className="w-full flex flex-col items-center justify-center lg:mt-40 md:mt-10 mt-0"
            onSubmit={handleLogin}
          >
            <div className="flex flex-col justify-center items-center gap-10 px-2 bg-indigo-300 md:w-8/12 w-full rounded-xl self-center h-screen md:h-[600px]">
              <Button onClick={handleClick} type="formbtn">
                Sign up
              </Button>
              <input
                type="text"
                name="txt"
                placeholder="Name"
                onChange={(e) => setUsername(e.target.value)}
                required=""
                className="md:w-7/12 w-full rounded-full h-14 px-10 transition-all duration-300 focus:outline-none focus:ring focus:ring-indigo-600"
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="md:w-7/12 w-full rounded-full h-14 px-10 transition-all duration-300 focus:outline-none focus:ring focus:ring-indigo-600"
              />
              <input
                type="password"
                name="pswd"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
                required
                className="md:w-7/12 w-full rounded-full h-14 px-10 transition-all duration-300 focus:outline-none focus:ring focus:ring-indigo-600"
              />
              <Button type="submit">Sign up</Button>
            </div>
          </form>
        </div>
      )}

      {/* فرم لاگین */}
      {isLogin && (
        <div className="w-full h-full">
          <form
            className="w-full flex flex-col items-center justify-center lg:mt-40 md:mt-10 mt-0"
            onSubmit={handleLogin}
          >
            <div className="flex flex-col justify-center items-center gap-10 bg-indigo-300 md:w-8/12 w-full px-2 rounded-xl self-center h-screen md:h-[600px]">
              <Button onClick={handleClick} type="formbtn">
                Login
              </Button>

              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required=""
                className="md:w-7/12 w-full rounded-full h-14 px-10 transition-all duration-300 focus:outline-none focus:ring focus:ring-indigo-600"
              />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                value={password}
                required=""
                className="md:w-7/12 w-full rounded-full h-14 px-10 transition-all duration-300 focus:outline-none focus:ring focus:ring-indigo-600"
              />
              <Button type="submit">Login</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
