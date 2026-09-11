import { Head, useForm } from '@inertiajs/react';

const INPUT_CLASS =
    'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({ email: '', password: '' });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.login.attempt'));
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
            <Head title="Connexion Administrateur — Access Technologies Solution (ACS)" />

            <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-md">
                <div className="mb-8 flex flex-col items-center text-center">
                    <img src="/img/logo/logo-acs.png" alt="ACS Group" className="mb-4 h-14 w-auto" />
                    <h1 className="text-2xl font-bold text-slate-900">Back-Office ACS Group</h1>
                    <p className="mt-1 text-sm text-slate-600">Connectez-vous pour administrer le site</p>
                </div>

                <form onSubmit={submit} className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-600">
                            Adresse email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className={INPUT_CLASS}
                            autoComplete="username"
                            required
                        />
                        {errors.email && <p className="mt-1.5 text-sm font-medium text-red-600">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-600">
                            Mot de passe
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className={INPUT_CLASS}
                            autoComplete="current-password"
                            required
                        />
                        {errors.password && <p className="mt-1.5 text-sm font-medium text-red-600">{errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="mt-2 w-full rounded-lg bg-red-600 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {processing ? 'Connexion...' : 'Se connecter'}
                    </button>
                </form>
            </div>
        </div>
    );
}
