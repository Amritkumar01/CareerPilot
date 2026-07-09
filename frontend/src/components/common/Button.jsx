function Button({
  children,
  type = "button",
  variant = "primary",
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
}) {
  const base =
    "h-14 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center";

  const variants = {
    primary:
      "bg-orange-500 text-white hover:bg-orange-600 active:scale-[0.98]",

    secondary:
      "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${base}
        ${variants[variant]}
        ${fullWidth ? "w-full" : "px-6"}
        ${(disabled || loading) ? "opacity-60 cursor-not-allowed" : ""}
      `}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}

export default Button;