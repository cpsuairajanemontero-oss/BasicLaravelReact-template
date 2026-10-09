import { Link, useForm } from '@inertiajs/react';

export default function Welcome({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onSuccess: () => reset(),
        });
    };

    const scrollToRegister = (e) => {
        e.preventDefault();
        document.getElementById('register-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white scroll-smooth">
            {/* Header */}
            <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="CPSU" className="w-12 h-12" onError={(e) => e.target.style.display='none'} />
                    <div>
                        <p className="text-xs font-bold text-gray-700 leading-none">CENTRAL PHILIPPINES</p>
                        <p className="text-xs font-bold text-gray-700 leading-none">STATE UNIVERSITY</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    {auth.user? (
                        <Link href={route('dashboard')} className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold">Dashboard</Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-gray-700 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100">Login</Link>
                            <button onClick={scrollToRegister} className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold">Register</button>
                        </>
                    )}
                </div>
            </header>

            {/* Hero */}
            <section className="bg-[#1a5c4a] text-white text-center py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 flex justify-center items-center pointer-events-none">
                    <img src="/logo.png" className="w-[500px] h-[500px]" alt="" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-5xl font-bold mb-2">Central Philippines</h1>
                    <h1 className="text-5xl font-bold mb-6">State University</h1>
                    <p className="text-white/80 mb-2">Inspiring students through quality education, innovation, leadership and service</p>
                    <p className="text-white/80 mb-10">since 1946.</p>
                    <div className="flex gap-4 justify-center">
                        <button onClick={scrollToRegister} className="bg-[#f7b500] hover:bg-[#e5a800] text-black font-bold px-8 py-3 rounded-full">Register Now</button>
                        <a href="#why" className="border border-white/50 hover:bg-white/10 text-white px-8 py-3 rounded-full font-bold">Learn More</a>
                    </div>
                </div>
            </section>

            {/* Why Choose */}
            <section id="why" className="py-16 px-8 bg-gray-50">
                <h2 className="text-center text-3xl font-semibold text-gray-800 mb-12">Why Choose CPSU?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <div className="bg-white rounded-2xl p-8 text-center shadow-sm border-t-4 border-[#1a5c4a]">
                        <h3 className="font-bold text-gray-800 mb-2">Quality Education</h3>
                        <p className="text-sm text-gray-500">Accredited programs</p>
                    </div>
                    <div className="bg-white rounded-2xl p-8 text-center shadow-sm border-t-4 border-[#1a5c4a]">
                        <h3 className="font-bold text-gray-800 mb-2">Affordable</h3>
                        <p className="text-sm text-gray-500">Free tuition for qualified</p>
                    </div>
                    <div className="bg-white rounded-2xl p-8 text-center shadow-sm border-t-4 border-[#1a5c4a]">
                        <h3 className="font-bold text-gray-800 mb-2">Innovation</h3>
                        <p className="text-sm text-gray-500">Modern facilities</p>
                    </div>
                </div>
            </section>

            {/* REGISTER SECTION - Ito yung pop-up sa baba! */}
            <section id="register-section" className="py-20 px-6 bg-white border-t">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl border">
                    {/* Left Green */}
                    <div className="bg-[#1a5c4a] text-white p-10 flex flex-col justify-center">
                        <img src="/logo.png" alt="CPSU" className="w-24 h-24 mb-6" onError={(e) => e.target.style.display='none'} />
                        <h2 className="text-4xl font-bold mb-4">Join CPSU Today!</h2>
                        <p className="text-white/80 mb-6">Create your student account in less than 1 minute. Be part of Central Philippines State University.</p>
                        <ul className="space-y-2 text-white/70 text-sm">
                            <li>✓ Free Tuition for qualified students</li>
                            <li>✓ Quality Education Since 1946</li>
                            <li>✓ Secure & Fast Registration</li>
                        </ul>
                    </div>

                    {/* Right Form - Parang Pop-up */}
                    <div className="bg-white p-10">
                        <h3 className="text-2xl font-bold text-gray-800">Create Account</h3>
                        <p className="text-gray-500 text-sm mb-6">Fill up the form to register</p>

                        <form onSubmit={submit} className="space-y-4">
                            <div>
                                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                                <input type="text" value={data.name} onChange={e => setData('name', e.target.value)}
                                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#1a5c4a]"
                                    placeholder="Juan Dela Cruz" required />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-700">Email</label>
                                <input type="email" value={data.email} onChange={e => setData('email', e.target.value)}
                                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#1a5c4a]"
                                    placeholder="student@cpsu.edu.ph" required />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-700">Password</label>
                                <input type="password" value={data.password} onChange={e => setData('password', e.target.value)}
                                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#1a5c4a]"
                                    placeholder="••••••••" required />
                                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-700">Confirm Password</label>
                                <input type="password" value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)}
                                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#1a5c4a]"
                                    placeholder="••••••••" required />
                            </div>

                            <button disabled={processing} className="w-full bg-[#1a5c4a] hover:bg-[#144a3b] text-white font-bold py-3 rounded-lg transition mt-2">
                                {processing? 'Creating Account...' : 'Register Now'}
                            </button>
                        </form>

                        <p className="text-center text-sm text-gray-600 mt-4">
                            Already have account? <Link href={route('login')} className="text-[#1a5c4a] font-bold">Login</Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}