function Card({ children }) {
    return (
        <div
            className="
                w-full
                max-w-md
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900
                p-8
                shadow-xl
            "
        >
            {children}
        </div>
    );
}

export default Card;