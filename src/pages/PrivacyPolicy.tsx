import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <div className="container mx-auto max-w-4xl px-6 py-16">
                <Link to="/" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 mb-8 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    Volver al inicio
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-8">Aviso de Privacidad</h1>

                <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        Última actualización: Enero 2026
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">1. Identidad del Responsable</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Dagpacket Bethel, con domicilio en C. Hacienda La Calera 3869-local 4, El Bethel, 44720 Guadalajara, Jalisco, México,
                            es responsable del tratamiento de sus datos personales.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">2. Datos Personales que Recabamos</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Recabamos los siguientes datos personales:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                            <li>Nombre completo</li>
                            <li>Nombre de empresa o negocio</li>
                            <li>Correo electrónico</li>
                            <li>Número de teléfono / WhatsApp</li>
                            <li>Información sobre sus necesidades de envío</li>
                            <li>Presupuesto estimado de envíos</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">3. Finalidades del Tratamiento</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Sus datos personales serán utilizados para:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                            <li>Proporcionar cotizaciones personalizadas de servicios de paquetería</li>
                            <li>Comunicarnos con usted para dar seguimiento a su solicitud</li>
                            <li>Enviar información sobre promociones y servicios (con su consentimiento)</li>
                            <li>Mejorar nuestros servicios y experiencia de usuario</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">4. Derechos ARCO</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales.
                            Para ejercer estos derechos, puede contactarnos a través de:
                        </p>
                        <p className="text-slate-600 dark:text-slate-400">
                            <strong>Correo electrónico:</strong> contacto@dagpacketbethel.com
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">5. Cambios al Aviso de Privacidad</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Nos reservamos el derecho de modificar este aviso de privacidad en cualquier momento.
                            Las modificaciones serán publicadas en esta página.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">6. Contacto</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Si tiene preguntas sobre este aviso de privacidad, puede contactarnos en:
                        </p>
                        <ul className="list-none text-slate-600 dark:text-slate-400 space-y-2">
                            <li><strong>Email:</strong> contacto@dagpacketbethel.com</li>
                            <li><strong>Teléfono:</strong> 33 1867 1472</li>
                            <li><strong>Dirección:</strong> C. Hacienda La Calera 3869-local 4, El Bethel, 44720 Guadalajara, Jal.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
