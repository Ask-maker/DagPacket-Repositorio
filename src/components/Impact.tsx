import { Building2, Globe2, TrendingDown } from 'lucide-react';

const Impact = () => {
    const stats = [
        {
            icon: <Building2 className="w-8 h-8 text-orange-500 dark:text-orange-400 mb-2" />,
            value: "+500",
            label: "Pymes atendidas",
            description: "Desde startups hasta empresas consolidadas."
        },
        {
            icon: <Globe2 className="w-8 h-8 text-orange-500 dark:text-orange-400 mb-2" />,
            value: "Cobertura Total",
            label: "Mundial",
            description: "Envíos a todo México y más de 220 países."
        },
        {
            icon: <TrendingDown className="w-8 h-8 text-orange-500 dark:text-orange-400 mb-2" />,
            value: "40%",
            label: "Ahorro Real",
            description: "Nuestros clientes reducen sus costos operativos."
        }
    ];

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
            <div className="container mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">El motor logístico de cientos de empresas en México</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Entendemos los retos de emprender y escalar un negocio. Por eso, hemos diseñado una solución que se adapta a tu volumen de ventas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 text-center hover:shadow-md transition-shadow">
                            <div className="flex justify-center mb-4">{stat.icon}</div>
                            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                            <div className="text-xl font-semibold text-orange-500 dark:text-orange-400 mb-2">{stat.label}</div>
                            <p className="text-slate-500 dark:text-slate-400">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;
