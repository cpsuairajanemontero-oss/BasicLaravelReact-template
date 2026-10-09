import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <>
            <Head title="Register - CPSU" />
            <div className="min-h-screen flex">
                {/* Left - Green */}
                <div className="hidden md:flex w-1/2 bg-[#1a5c4a] text-white flex-col justify-center items-center p-12">
                    <img src="/logo.png" alt="CPSU" className="w-32 h-32 mb-6" onError={(e) => e.target.style.display='none'} />
                    <h1 className="text-3xl font-bold text-center">Central Philippines<br/>State University</h1>
                    <p className="mt-4 text-white/70 text-center">Inspiring students through quality education since 1946.</p>
                </div>

                {/* Right - Form */}
                <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-10 md:px-16 py-10">
                    <div className="max-w-md w-full mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
                        <p className="text-gray-500 mt-2 mb-8">Join CPSU today</p>

                        <form onSubmit={submit} className="space-y-5">
                            <div>
                                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a5c4a] focus:border-transparent outline-none"
                                    placeholder="Juan Dela Cruz"
                                    required
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-gray-700">Email</label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a5c4a] focus:border-transparent outline-none"
                                    placeholder="student@cpsu.edu.ph"
                                    required
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-gray-700">Password</label>
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a5c4a] focus:border-transparent outline-none"
                                    placeholder="••••••••"
                                    required
                                />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-gray-700">Confirm Password</label>
                                <input
                                    type="password"
                                    value={data.password_confirmation}
                                    onChange={e => setData('password_confirmation', e.target.value)}
                                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a5c4a] focus:border-transparent outline-none"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            <button
                                disabled={processing}
                                className="w-full bg-[#1a5c4a] hover:bg-[#144a3b] text-white font-bold py-3 rounded-lg transition"
                            >
                                Register Now
                            </button>
                        </form>

                        <p className="text-center text-sm text-gray-600 mt-6">
                            Already have an account? <Link href={route('login')} className="text-[#1a5c4a] font-bold hover:underline">Login</Link>
                        </p>
                        <p className="text-center mt-4">
                            <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">← Back to Home</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}