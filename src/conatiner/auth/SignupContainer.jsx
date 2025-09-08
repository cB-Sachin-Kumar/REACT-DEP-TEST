import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signupUser, clearError } from "../../store/slice/authSlice";
import { useLoading } from "../../context/LoadingContext";
import { useDistricts } from "../../hooks/useDistrict";
import Swal from "sweetalert2";

const SignupContainer = () => {
  const dispatch = useDispatch();
  const { districts } = useDistricts();
  const { loading, error } = useSelector((state) => state.auth);
  const { showLoading, hideLoading } = useLoading();

  const [formData, setFormData] = useState({
    mobileNo: "",
    adharNo: "",
    name: "",
    districtId: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData, //..formData part is the spread operator.It copies the current formData object so you don’t lose the other fields when updating one field.
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Confirm Registration",
      html: `
      <div style="text-align:center">
        <p><strong>Full Name:</strong> ${formData.name || "-"}</p>
        <p><strong>Mobile:</strong> ${formData.mobileNo || "-"}</p>
        <p><strong>Aadhaar:</strong> ${formData.adharNo || "-"}</p>
      </div>
    `,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, register",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#6b21a8",
      reverseButtons: true,
      focusCancel: true,
    });
    // (!) = NOT operator in JavaScript.
    // It flips the value:
    // true → false
    // false → true
    // So
    // If user did NOT confirm (isConfirmed = false),
    // then !result.isConfirmed = true → code runs return; (exit function).
    // If user confirmed → condition is false, so it continues to API call.
    if (!result.isConfirmed) return;
    try {
      const res = await dispatch(signupUser(formData)).unwrap();
      //unwrap() → returns actual response or throws error (instead of storing in Redux only).
      if (res?.status === "success") {
        await Swal.fire({
          icon: "success",
          title: "Registartion Successful!",
          html: `Please note your Registration No: <b>${res?.data?.registrationNo}</b> for future reference.`,
        });
      }
      // The ?. is optional chaining (safe way to access properties).
      // If res is null or undefined, it won’t crash.
    } catch (err) {
      const msg =
        err?.message ||
        err?.data?.message ||
        err?.response?.data?.message ||
        "Something went wrong";
      await Swal.fire({ icon: "error", title: "Signup failed", text: msg });
    }
  };

  return (
    <>
     
    </>
  );
};

export default SignupContainer;
