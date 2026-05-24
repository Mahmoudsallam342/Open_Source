import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as YUP from "yup";
import { countercontext } from "../../../context/Context";
export default function Register() {
  let navigate = useNavigate();
  let [apiErrors, setApiErrors] = useState("");
  let [spinner, setSpinner] = useState(false);
  let { setToken } = useContext(countercontext);
  //* axios post values to api
  async function handleRegister(values) {
    try {
      setSpinner(true);
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values,
      );
      if (data.message == "success") {
        setToken(data.token);
        localStorage.setItem("userToken", data.token);
        navigate("/login");

        console.log(data);
      }
    } catch (error) {
      setApiErrors(error?.response?.data?.message);
    } finally {
      setSpinner(false);
    }
  }

  let validationSchema = YUP.object().shape({
    name: YUP.string()
      .min(3, "name must be at least 3 char")
      .max(25, "name must be less than 25")
      .required("name is required"),
    email: YUP.string().email("email is unvalid").required("email is required"),
    password: YUP.string().required("password is required"),
    rePassword: YUP.string()
      .oneOf([YUP.ref("password")], "rePassword doesnot match password")
      .required("rePassword is required"),
    phone: YUP.string()
      .matches(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/, "invalid phone num")
      .required("phone is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    // validate: customValidation,
    validationSchema,
    onSubmit: handleRegister,
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 mt-8">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up brooooo</h2>

        {apiErrors ? (
          <div className="alert alert-error p-2 text-red-500">{apiErrors}</div>
        ) : null}
        {spinner ? (
          <div role="status">
            <svg
              aria-hidden="true"
              class="w-8 h-8 text-neutral-tertiary animate-spin fill-brand"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        ) : null}

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="userName" className="block mb-2 font-medium">
              User Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder=" ur name ya sahby"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />

            {formik.errors.userName && formik.touched.userName ? (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.userName}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="email ya ngm"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />

            {formik.errors.email && formik.touched.email ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter ur password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />

            {formik.errors.password && formik.touched.password ? (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="rePassword" className="block mb-2 font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              id="rePassword"
              name="rePassword"
              placeholder="Confirm password"
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />

            {formik.errors.rePassword && formik.touched.rePassword ? (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.rePassword}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 font-medium">
              Phone
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />

            {formik.errors.phone && formik.touched.phone ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold"
          >
            Register
          </button>
          <p className="text-center text-gray-600 mt-4">
            have already an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
