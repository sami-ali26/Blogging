import type { SignupInput } from "@samiali/meduim-common";
import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../hooks";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [inputes, setInputes] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  async function sendRequest() {
    try {
      const response = await axios.post(
        `${API_URL}/api/v1/user/${type == "signup" ? "signup" : "signin"}`,
        inputes
      );
      const jwt = response.data.token;
      localStorage.setItem("token", `Bearer ${jwt}`);
      navigate("/blogs");
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className="h-screen flex justify-center flex-col ">
      <div className="flex justify-center">
        <div className="px-50 py-10 m-5">
          <div className="text-3xl font-bold text-center ">
            {type == "signup" ? "Create an accout" : "Sign In"}
          </div>
          <div className="text-slate-700 pb-2 mb-5 text-center">
            {type == "signup"
              ? "Already have an accout?"
              : "Don't have an accout?"}
            <Link
              to={type == "signup" ? "/signin" : "/signup"}
              className="pl-2 underline"
            >
              {type == "signup" ? "Login" : "Create"}
            </Link>
          </div>
          <div className="mt-5 w-sm flex justify-center flex-col gap-2">
            <div>
              {type == "signup" ? (
                <LabelInput
                  label={"Name"}
                  placeholder={"Sami ali..."}
                  onChange={(e) => {
                    setInputes({
                      ...inputes,
                      name: e.target.value,
                    });
                  }}
                />
              ) : null}
              <LabelInput
                label={"Username"}
                placeholder={"sami@example.com"}
                onChange={(e) => {
                  setInputes({
                    ...inputes,
                    email: e.target.value,
                  });
                }}
              />
              <LabelInput
                label={"Password"}
                placeholder={"123@3421"}
                type={"Password"}
                onChange={(e) => {
                  setInputes({
                    ...inputes,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <button
              onClick={sendRequest}
              type="button"
              className="text-white mt-4 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {type == "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
interface LabeledInput {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
function LabelInput({ label, placeholder, onChange, type }: LabeledInput) {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-black mt-4">
        {label}
      </label>
      <input
        type={type}
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
}
