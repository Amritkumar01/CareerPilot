import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  leftIcon,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-medium text-white">
          {label}
          {required && <span className="text-orange-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
            {leftIcon}
          </div>
        )}

        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full
            h-14
            rounded-xl
            border
            border-zinc-700
            bg-zinc-900
            text-white
            placeholder:text-zinc-500
            ${leftIcon ? "pl-12" : "pl-4"}
            ${isPassword ? "pr-12" : "pr-4"}
            outline-none
            transition-all
            duration-300
            focus:border-orange-500
            focus:ring-2
            focus:ring-orange-500/20
          `}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-orange-500 transition"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;