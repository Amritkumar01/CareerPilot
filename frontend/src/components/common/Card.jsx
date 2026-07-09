function Card({ children }) {
  return (
    <div
      className="
        w-full
        max-w-md
        rounded-3xl
        border
        border-zinc-800
        bg-[#171717]/90
        p-10
        shadow-2xl
        backdrop-blur-xl
      "
    >
      {children}
    </div>
  );
}

export default Card;