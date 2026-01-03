import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface FormData {
    name: string;
    company: string;
    phone: string;
    email: string;
    needs: string;
    budget: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        company: '',
        phone: '',
        email: '',
        needs: '',
        budget: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('idle');

        try {
            const response = await fetch('https://n8n.enviox.mx/webhook-test/a340271a-ad8d-42de-a525-8d2780930c10', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    company: '',
                    phone: '',
                    email: '',
                    needs: '',
                    budget: ''
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact-form" className="py-24 bg-white dark:bg-slate-900 px-4 border-t border-gray-100 dark:border-slate-800 transition-colors duration-300">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Cotiza tu solución logística personalizada</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">Déjanos tus datos y un asesor experto analizará tu volumen para ofrecerte las mejores tarifas.</p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/20 border border-slate-100 dark:border-slate-700">
                    {status === 'success' ? (
                        <div className="text-center py-10">
                            <div className="w-20 h-20 bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">¡Mensaje Enviado!</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">Gracias por tu interés. Nos pondremos en contacto contigo a la brevedad posible.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                            >
                                Enviar otra solicitud
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Nombre Completo</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-900 dark:text-white placeholder:text-slate-400"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Nombre de tu Empresa / Negocio</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        required
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-900 dark:text-white placeholder:text-slate-400"
                                        placeholder="Nombre de tu negocio"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-900 dark:text-white placeholder:text-slate-400"
                                        placeholder="nombre@empresa.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Teléfono / WhatsApp</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-900 dark:text-white placeholder:text-slate-400"
                                        placeholder="55 1234 5678"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="needs" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Cuéntanos tu necesidad específica</label>
                                <textarea
                                    id="needs"
                                    name="needs"
                                    rows={4}
                                    value={formData.needs}
                                    onChange={handleChange}
                                    className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"
                                    placeholder="Ejemplo: Necesito envíos día siguiente para productos perecederos, o busco reducir costos en envíos pesados..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Presupuesto Mensual de Envíos</label>
                                <div className="space-y-3">
                                    {[
                                        "$5,000 - $10,000 MXN",
                                        "$11,000 - $30,000 MXN",
                                        "$40,000 - $90,000 MXN",
                                        "Más de $100,000 MXN"
                                    ].map((option) => (
                                        <label key={option} className="flex items-center p-4 border border-slate-200 dark:border-slate-600 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                                            <input
                                                type="radio"
                                                name="budget"
                                                value={option}
                                                checked={formData.budget === option}
                                                onChange={handleChange}
                                                className="w-5 h-5 text-orange-500 border-gray-300 focus:ring-orange-500"
                                            />
                                            <span className="ml-3 text-slate-700 dark:text-slate-300 font-medium">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {status === 'error' && (
                                <div className="p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-xl text-sm border border-red-100 dark:border-red-800">
                                    Hubo un error al enviar el formulario. Por favor intenta de nuevo.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-lg transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    "Solicitar Cotización Gratuita"
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
