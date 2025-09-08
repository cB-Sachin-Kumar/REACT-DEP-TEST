import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser, clearError } from "../../store/slice/authSlice";
import { useLoading } from "../../context/LoadingContext";
import bgimage from "../../assets/images/bgimage2.png";
import logo from "../../assets/images/logoimage.png";
import Swal from "sweetalert2";

const LoginContainer = () => {
  // Simulated states for demo (replace with actual Redux/context in real app)
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const { isLoading, showLoading, hideLoading } = useLoading();

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    mobileNumber: "",
    aadharNumber: "",
    ip: "51415522",
  });

  useEffect(() => {
    if (loading) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [loading, showLoading, hideLoading]);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let next = value;
    setFormData({
      ...formData,
      [name]: next,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let payload = {
      userName: formData.userName,
      password: formData.password,
      ip: formData.ip,
    };

    const loginPromise = dispatch(loginUser(payload)).unwrap();
    loginPromise.catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message || "Invalid credentials",
      });
    });
    if (error) {
      Swal.fire({
        icon: "error",
        title: "something went wrong",
        text: error,
      });
    }

    try {
      await loginPromise;
      // Optional: navigate after success
      // navigate('/dashboard');
    } catch (err) {
      // We already showed a toast in error case; no need to do anything else here
    }
  };

  return (
    <>
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center justify-center py-12 px-6 sm:px-6 lg:px-8">
          <div className="w-full max-w-md">
            {/* <div className="flex items-center justify-center mb-8">
              <a
                href="#"
                className="flex items-center text-2xl font-semibold text-gray-900"
              >
                <img className="w-84 h-14 mr-2" src={logo} alt="logo" />
                शिक्षा विभाग ,बिहार सरकार
              </a>
            </div> */}

            <div className="w-full bg-white rounded-lg shadow-2xl p-8">
              <img className="w-64 h-16 ml-14 " src={logo} alt="logo" />
              {/* शिक्षा विभाग ,बिहार सरकार */}

              <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-6 text-center">
                Sign in to your account
              </h1>
              <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="userName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Username:
                  </label>
                  <input
                    type="userName"
                    name="userName"
                    id="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 text-center">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:underline"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginContainer;
