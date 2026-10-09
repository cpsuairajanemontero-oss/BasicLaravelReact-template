import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <>
            <Head title="Dashboard" />
            <div className="min-h-screen bg-gray-100">
                {/* Top Bar */}
                <div className="bg-white shadow px-8 py-4 flex justify-between items-center">
                    <h1 className="font-bold text-[#1a5c4a]">CPSU - Dashboard</h1>
                    <div className="flex gap-3 items-center">
                        <span className="text-sm text-gray-600">{auth.user.name}</span>
                        <Link href="/" className="text-sm text-gray-500 hover:text-black">Home</Link>
                        <Link href="/logout" method="post" as="button" className="bg-black text-white px-4 py-2 rounded-full text-sm">Logout</Link>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-5xl mx-auto p-8 space-y-6">
                    <div className="bg-[#1a5c4a] rounded-2xl p-8 text-white">
                        <h1 className="text-3xl font-bold">Welcome, {auth.user.name}! 🎉</h1>
                        <p className="text-white/80 mt-2">Email: {auth.user.email}</p>
                        <p className="text-white/60 text-sm mt-1">You are now logged in! Registration works!</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl p-6 shadow">
                            <p className="text-xs text-gray-400 font-bold">STATUS</p>
                            <p className="text-xl font-bold mt-2">Regular Student</p>
                            <p className="text-green-600 text-sm">Active</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow">
                            <p className="text-xs text-gray-400 font-bold">GPA</p>
                            <p className="text-xl font-bold mt-2">1.75</p>
                            <p className="text-green-600 text-sm">Very Good</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow">
                            <p className="text-xs text-gray-400 font-bold">ENROLLED</p>
                            <p className="text-xl font-bold mt-2">5 Subjects</p>
                            <p className="text-green-600 text-sm">This Sem</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow">
                        <h3 className="font-bold mb-3">✅ Register is Working!</h3>
                        <p className="text-sm text-gray-600">Kung nakikita mo to, ibig sabihin SUCCESS na yung Register Now mo sa baba! Connected na lahat!</p>
                        <Link href="/" className="inline-block mt-4 bg-[#f7b500] text-black font-bold px-6 py-2 rounded-full">Back to Home</Link>
                    </div>
                </div>
            </div>
        </>
    );
}