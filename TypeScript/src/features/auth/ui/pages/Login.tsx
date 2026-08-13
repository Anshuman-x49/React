import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles, faEnvelope, faLock, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useLoginForm } from "../../hooks/useAuth";
import AuthSubmitButton from "../components/AuthSubmitButton";
import SocialButton from "../components/SocialButton";

const Login = () => {
    const { register, handleSubmit, errors, onSubmit } = useLoginForm();

    return (
        <div className="h-screen overflow-hidden bg-[#141218] font-['Inter'] text-[#e6e0e9] flex items-center justify-center">
            {/* Background AI Glow */}
            <div className="pointer-events-none fixed inset-0 z-0">
                <div className="absolute -right-32 -top-32 h-125 w-125 rounded-full bg-[#cfbcff]/5 blur-[120px]" />

                <div className="absolute -bottom-32 -left-32 h-100 w-100 rounded-full bg-[#cdc0e9]/5 blur-[100px]" />
            </div>

            {/* Main */}
            <main className="relative z-10 flex w-full items-center justify-center px-4">
                <div className="w-full max-w-110">

                    {/* Login Card */}
                    <div className="overflow-hidden rounded-xl border border-[#494551]/30 bg-[#1d1b20] p-8 shadow-2xl md:p-10">

                        {/* Brand */}
                        <div className="mb-8 text-center">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#6750a4]">
                                <FontAwesomeIcon icon={faWandMagicSparkles} className="text-xl text-[#cfbcff]" />
                            </div>

                            <h1 className="text-2xl font-semibold tracking-tight">
                                Team Sync
                            </h1>

                            <p className="mt-1 text-sm text-[#cbc4d2]">
                                Sign in to your workspace
                            </p>
                        </div>

                        {/* Social Login */}
                        <div className="mb-8 grid grid-cols-2 gap-4">
                            <SocialButton label="GOOGLE" icon={faGoogle} />
                            <SocialButton label="GITHUB" icon={faGithub} />
                        </div>

                        {/* Divider */}
                        <div className="relative mb-8 flex items-center">
                            <div className="flex-1 border-t border-[#494551]/30" />

                            <span className="px-3 text-xs text-[#cbc4d2]">
                                or continue with email
                            </span>

                            <div className="flex-1 border-t border-[#494551]/30" />
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 ml-1 block text-[11px] font-semibold uppercase tracking-wider text-[#cbc4d2]"
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
                                                message: "Please enter a valid email address",
                                            },
                                        })}
                                        className={`w-full rounded-lg border bg-[#0f0d13] py-3 pl-10 pr-4 text-sm text-[#e6e0e9] outline-none transition placeholder:text-[#948e9c]/50 focus:border-[#cfbcff] focus:ring-2 focus:ring-[#cfbcff]/30 ${errors.email
                                            ? "border-[#ffb4ab]"
                                            : "border-[#494551]/50"
                                            }`}
                                    />
                                </div>

                                {errors.email && (
                                    <p className="mt-1.5 text-xs text-[#ffb4ab]">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <div className="mb-2 flex items-center justify-between px-1">
                                    <label
                                        htmlFor="password"
                                        className="text-[11px] font-semibold uppercase tracking-wider text-[#cbc4d2]"
                                    >
                                        Password
                                    </label>

                                    <a
                                        href="#"
                                        className="text-xs text-[#cfbcff] transition hover:underline"
                                    >
                                        Forgot password?
                                    </a>
                                </div>

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
                                        className={`w-full rounded-lg border bg-[#0f0d13] py-3 pl-10 pr-4 text-sm text-[#e6e0e9] outline-none transition placeholder:text-[#948e9c]/50 focus:border-[#cfbcff] focus:ring-2 focus:ring-[#cfbcff]/30 ${errors.password
                                            ? "border-[#ffb4ab]"
                                            : "border-[#494551]/50"
                                            }`}
                                    />
                                </div>

                                {errors.password && (
                                    <p className="mt-1.5 text-xs text-[#ffb4ab]">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center gap-2 px-1">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    {...register("remember")}
                                    className="h-4 w-4 rounded border-[#494551]/50 bg-[#0f0d13] text-[#cfbcff] focus:ring-[#cfbcff]/30"
                                />

                                <label
                                    htmlFor="remember"
                                    className="cursor-pointer select-none text-xs text-[#cbc4d2]"
                                >
                                    Stay signed in
                                </label>
                            </div>

                            {/* Sign In */}
                            <AuthSubmitButton label="Sign In" icon={faArrowRight} />
                        </form>

                        {/* Sign Up */}
                        <div className="mt-8 border-t border-[#494551]/30 pt-6 text-center">
                            <p className="text-xs text-[#cbc4d2]">
                                Don't have an account?

                                <Link
                                    to="/auth/register"
                                    className="ml-1 font-bold text-[#cfbcff] hover:underline"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;