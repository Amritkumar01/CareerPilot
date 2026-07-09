function Button({
    children,
    type = "button",
    variant = "primary",
    fullWidth = false,
    disabled = false,
    loading = false,
    onClick,
}) {

    const baseStyle =
        "flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition-all duration-300";

    const variants = {
        primary:
            "bg-orange-500 hover:bg-orange-600 text-white",

        secondary:
            "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",

        danger:
            "bg-red-500 hover:bg-red-600 text-white",
    };

    return (
        <button
            type={type}
            disabled={disabled || loading}
            onClick={onClick}
            className={`
                ${baseStyle}
                ${variants[variant]}
                ${fullWidth ? "w-full" : ""}
                ${(disabled || loading) ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
            `}
        >
            {loading ? "Please wait..." : children}
        </button>
    );
}

export default Button;