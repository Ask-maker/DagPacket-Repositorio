import { ArrowRight, Package, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
    const scrollToForm = () => {
        const form = document.getElementById('contact-form');
        form?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-100 dark:bg-orange-900/20 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse delay-700"></div>

            <div className="container mx-auto px-6 pt-20 pb-32 md:py-32 relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Logística Inteligente para tu Negocio
                    </div>

                    {/* H1 Title */}
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
                        Simplifica tus envíos <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-200">
                            en un solo click
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl leading-relaxed font-light">
                        Centraliza tu logística, compara tarifas de las mejores paqueterías y
                        <span className="text-slate-900 dark:text-white font-medium"> ahorra hasta un 40% </span>
                        en cada envío nacional e internacional.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <button
                            onClick={scrollToForm}
                            className="w-full sm:w-auto bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:-translate-y-1 shadow-xl shadow-slate-900/20 dark:shadow-white/10 flex items-center justify-center gap-2"
                        >
                            Comenzar Ahora
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto px-10 py-4 rounded-full font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                        >
                            Ver Servicios
                        </button>
                    </div>

                    {/* Features Snippet */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl border-t border-slate-100 dark:border-slate-800 pt-12">
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-2xl text-blue-600 dark:text-blue-400">
                                <Zap className="w-6 h-6" />
                            </div>
                            <span className="font-semibold text-slate-900 dark:text-white">Cotización Inmediata</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-3 bg-orange-50 dark:bg-slate-800 rounded-2xl text-orange-600 dark:text-orange-400">
                                <Package className="w-6 h-6" />
                            </div>
                            <span className="font-semibold text-slate-900 dark:text-white">Recolección Gratuita</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-3 bg-green-50 dark:bg-slate-800 rounded-2xl text-green-600 dark:text-green-400">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <span className="font-semibold text-slate-900 dark:text-white">Envíos Asegurados</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
