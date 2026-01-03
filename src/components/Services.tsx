import { Truck, Globe, ScanLine } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <ScanLine className="w-10 h-10 text-orange-500 mb-6 group-hover:scale-110 transition-transform" />,
            title: "Comparador Inteligente",
            description: "Cotiza en tiempo real entre todas las paqueterías y elige la opción que más te convenga (precio vs. rapidez)."
        },
        {
            icon: <Truck className="w-10 h-10 text-orange-500 mb-6 group-hover:scale-110 transition-transform" />,
            title: "Recolección a Domicilio",
            description: "Gestionamos la logística desde la puerta de tu negocio."
        },
        {
            icon: <Globe className="w-10 h-10 text-orange-500 mb-6 group-hover:scale-110 transition-transform" />,
            title: "Atención Personalizada",
            description: "No eres un número más. Tienes soporte dedicado para resolver incidencias."
        },
        {
            icon: <Truck className="w-10 h-10 text-orange-500 mb-6 group-hover:scale-110 transition-transform" />,
            title: "Facturación Simplificada",
            description: "Un solo proveedor, una sola factura para todos tus envíos."
        }
    ];

    return (
        <section id="services" className="py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300">
            <div className="container mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Más que una guía de envío, somos tu socio comercial</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-gray-100 dark:border-slate-700 hover:border-gray-200 dark:hover:border-slate-600 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            {service.icon}
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
