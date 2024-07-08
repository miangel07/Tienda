// src/components/Input.jsx
import React from "react";

const Input = ({ register, name, errors, type, placeholder, ...props }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, {
          required: {
            value: true,
            message: ` ${name} es obligatorio`,
          },
        })}
        className={
          "w-full mt-2 h-9 border-solid rounded-lg border-2 outline-none   pl-3 border-gray-300 "
        }
      />
      {errors[name] && <p className="text-danger-500">{errors[name].message}</p>}
    </div>
  );
};

export default Input;
