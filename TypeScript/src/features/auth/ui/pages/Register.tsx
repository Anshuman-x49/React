import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles, faUser, faEnvelope, faLock, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useRegisterForm } from "../../hooks/useAuth";
import AuthSubmitButton from "../components/AuthSubmitButton";
import SocialButton from "../components/SocialButton";

const Register = () => {
    const {
        register,
        handleSubmit,
        errors,
        passwordStrength,
        getStrengthText,
        onSubmit,
    } = useRegisterForm();

    return (
        <div className="h-screen overflow-hidden bg-[#141218] font-['Inter'] text-[#e6e0e9]">
            {/* Header */}
            <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-4">
                <div className="text-xl font-bold tracking-tight">
                    Team Sync
                </div>
            </header>

            {/* Main */}
            <main className="flex h-screen w-full overflow-hidden">
                {/* Left Side */}
                <section className="relative hidden h-full w-[40%] flex-col justify-end overflow-hidden border-r border-[#494551]/20 bg-linear-to-br from-[#0f172a] to-[#1e1b4b] p-10 md:flex lg:p-12">
                    {/* Background image */}
                    <div className="absolute inset-0">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKFssbCNBW8f-0tJgLllgAqAWDBNzNAy3bF5hZHj6AqDD0XL_akzAHMKZFk5xWYQCr3oSIZzV4OS7NZLkSQR6c-ww1c2h5EV8j_DX_4vZ9IeWDEVRbo697BVSHU-H4hr95r0PaC86EEhuuzAtjPVfxhuXT1cV2QpxAMeB_h_yELwhUs3PDszkwE2osVYRL8EbHGlrvBMAAw19qBCzcVr8KGwWB55RmaRlIKT-_tIv2KO6pLY79Dq6eYB0hTHWbcC2VvDIkov6jF2Av"
                            alt="Neural network visualization"
                            className="h-full w-full object-cover opacity-40 mix-blend-luminosity"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-[#141218] via-transparent to-transparent" />
                    </div>

                    {/* Left Content */}
                    <div className="relative z-10 space-y-3">
                        <div className="flex items-center gap-2 text-[#cfbcff]">
                            <FontAwesomeIcon icon={faWandMagicSparkles} className="text-sm text-[#cfbcff]" />

                            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                                Next-Gen Intelligence
                            </span>
                        </div>

                        <h1 className="max-w-md text-2xl font-bold leading-tight tracking-tight lg:text-3xl">
                            Accelerate your team's intelligence.
                        </h1>

                        <p className="max-w-sm text-sm leading-5 text-[#cbc4d2]">
                            Connect your enterprise data to our specialized AI models and
                            unlock unparalleled strategic insights in seconds.
                        </p>

                        {/* Stats */}
                        <div className="flex gap-8 pt-4 opacity-60">
                            <div className="flex flex-col">
                                <span className="text-lg font-bold">99.9%</span>
                                <span className="text-xs text-[#cbc4d2]">
                                    Uptime SLA
                                </span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-lg font-bold">ISO</span>
                                <span className="text-xs text-[#cbc4d2]">
                                    27001 Certified
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Right Side */}
                <section className="flex h-full w-full items-center justify-center bg-[#141218] px-6 py-8 md:w-[60%] md:px-12 lg:px-16 overflow-y-auto md:overflow-hidden">
                    <div className="w-full max-w-110">
                        {/* Heading */}
                        <div className="mb-5 space-y-1">
                            <h2 className="text-2xl font-bold tracking-tight">
                                Create your account
                            </h2>

                            <p className="text-xs text-[#cbc4d2]">
                                Experience the future of collaborative data intelligence.
                            </p>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-4"
                        >
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-[#cbc4d2]"
                                >
                                    Full Name
                                </label>

                                <div className="relative">
                                    <FontAwesomeIcon icon={faUser} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-[#948e9c]" />

                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter your full name"
                                        {...register("name", {
                                            required: "Full name is required",
                                            minLength: {
                                                value: 2,
                                                message: "Name must contain at least 2 characters",
                                            },
                                        })}
                                        className={`w-full rounded-lg border bg-[#1d1b20] py-2.5 pl-10 pr-4 text-sm text-[#e6e0e9] outline-none transition placeholder:text-[#948e9c] focus:border-transparent focus:ring-2 focus:ring-[#cfbcff] ${errors.name
                                            ? "border-red-400"
                                            : "border-[#494551]"
                                            }`}
                                    />
                                </div>

                                {errors.name && (
                                    <p className="mt-1 text-xs text-[#ffb4ab]">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-[#cbc4d2]"
                                >
                                    Email Address
                                </label>

                                <div className="relative">
                                    <FontAwesomeIcon icon={faEnvelope} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-[#948e9c]" />

                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="name@company.com"
                                        {...register("email", {
                                            required: "Email address is required",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Enter a valid email address",
                                            },
                                        })}
                                        className={`w-full rounded-lg border bg-[#1d1b20] py-2.5 pl-10 pr-4 text-sm text-[#e6e0e9] outline-none transition placeholder:text-[#948e9c] focus:border-transparent focus:ring-2 focus:ring-[#cfbcff] ${errors.email
                                            ? "border-red-400"
                                            : "border-[#494551]"
                                            }`}
                                    />
                                </div>

                                {errors.email && (
                                    <p className="mt-1 text-xs text-[#ffb4ab]">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-[#cbc4d2]"
                                >
                                    Password
                                </label>

                                <div className="relative">
                                    <FontAwesomeIcon icon={faLock} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-[#948e9c]" />

                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="••••••••"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 8,
                                                message: "Password must be at least 8 characters",
                                            },
                                        })}
                                        className={`w-full rounded-lg border bg-[#1d1b20] py-2.5 pl-10 pr-4 text-sm text-[#e6e0e9] outline-none transition placeholder:text-[#948e9c] focus:border-transparent focus:ring-2 focus:ring-[#cfbcff] ${errors.password
                                            ? "border-red-400"
                                            : "border-[#494551]"
                                            }`}
                                    />
                                </div>

                                {errors.password && (
                                    <p className="mt-1 text-xs text-[#ffb4ab]">
                                        {errors.password.message}
                                    </p>
                                )}

                                {/* Password Strength */}
                                <div className="flex flex-col gap-1 pt-1.5">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4].map((item) => (
                                            <div
                                                key={item}
                                                className={`h-1 flex-1 rounded-full ${item <= passwordStrength
                                                    ? "bg-[#cfbcff]"
                                                    : "bg-[#494551]/40"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    <span className="text-[11px] text-[#cfbcff]">
                                        {getStrengthText()}
                                    </span>
                                </div>
                            </div>

                            {/* Terms */}
                            <div className="flex items-start gap-2.5 py-0.5">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    {...register("terms", {
                                        required: "You must accept the terms",
                                    })}
                                    className="mt-0.5 h-4 w-4 rounded border-[#494551] bg-[#1d1b20] text-[#cfbcff] focus:ring-[#cfbcff]"
                                />

                                <label
                                    htmlFor="terms"
                                    className="text-xs leading-relaxed text-[#cbc4d2]"
                                >
                                    I agree to the{" "}
                                    <a
                                        href="#"
                                        className="text-[#cfbcff] hover:underline"
                                    >
                                        Terms of Service
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        href="#"
                                        className="text-[#cfbcff] hover:underline"
                                    >
                                        Privacy Policy
                                    </a>
                                    .
                                </label>
                            </div>

                            {errors.terms && (
                                <p className="-mt-2 text-xs text-[#ffb4ab]">
                                    {errors.terms.message}
                                </p>
                            )}

                            {/* Submit */}
                            <AuthSubmitButton label="Create Account" />
                        </form>

                        {/* Divider */}
                        <div className="flex items-center gap-4 py-3">
                            <div className="h-px flex-1 bg-[#494551]/30" />

                            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#948e9c]">
                                Or continue with
                            </span>

                            <div className="h-px flex-1 bg-[#494551]/30" />
                        </div>

                        {/* SSO */}
                        <div className="grid grid-cols-2 gap-4">
                            <SocialButton label="Google" icon={faGoogle} />
                            <SocialButton label="SSO" icon={faShieldHalved} />
                        </div>

                        {/* Login */}
                        <div className="pt-4 text-center">
                            <p className="text-sm text-[#cbc4d2]">
                                Already have an account?{" "}
                                <Link
                                    to="/auth/login"
                                    className="ml-1 font-bold text-[#cfbcff] hover:underline"
                                >
                                    Log In
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Register;