function Logo() {
    return (
        <div className="flex flex-col items-center gap-4">

            <div className="
                h-16
                w-16
                rounded-2xl
                bg-orange-500
                flex
                items-center
                justify-center
                shadow-lg
            ">

                <span className="text-3xl font-black text-white">
                    CP
                </span>

            </div>

            <div className="text-center">

                <h1 className="text-3xl font-bold">
                    CareerPilot AI
                </h1>

                <p className="mt-1 text-sm text-gray-400">
                    Your AI Copilot for Landing Your Dream Job
                </p>

            </div>

        </div>
    );
}

export default Logo;