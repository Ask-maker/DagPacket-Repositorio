import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <div className="container mx-auto max-w-4xl px-6 py-16">
                <Link to="/" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 mb-8 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    Volver al inicio
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-8">Términos y Condiciones</h1>

                <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        Última actualización: Enero 2026
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">1. Aceptación de los Términos</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Al acceder y utilizar los servicios de Dagpacket Bethel, usted acepta estar sujeto a estos
                            términos y condiciones. Si no está de acuerdo con alguna parte de estos términos,
                            no podrá utilizar nuestros servicios.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">2. Descripción del Servicio</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Dagpacket Bethel es una plataforma de intermediación logística que permite a empresas y
                            particulares acceder a tarifas preferenciales de múltiples paqueterías nacionales e internacionales.
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                            <li>Cotización y comparación de tarifas de envío</li>
                            <li>Gestión de guías de envío</li>
                            <li>Recolección a domicilio</li>
                            <li>Seguimiento de paquetes</li>
                            <li>Facturación centralizada</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">3. Responsabilidades del Cliente</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            El cliente se compromete a:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                            <li>Proporcionar información veraz y actualizada</li>
                            <li>Empacar correctamente sus envíos según las especificaciones de cada paquetería</li>
                            <li>No enviar mercancía prohibida o restringida</li>
                            <li>Cumplir con las regulaciones aduanales para envíos internacionales</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">4. Tarifas y Pagos</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Las tarifas mostradas son preferenciales y pueden variar según el volumen de envíos,
                            dimensiones y peso real o volumétrico de los paquetes. Los pagos deberán realizarse
                            según las condiciones acordadas con su asesor comercial.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">5. Limitación de Responsabilidad</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Dagpacket Bethel actúa como intermediario entre el cliente y las paqueterías.
                            La responsabilidad por pérdida, daño o retraso de envíos está sujeta a las políticas
                            de cada paquetería y a la contratación de seguros adicionales.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">6. Reclamaciones</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Las reclamaciones por pérdida o daño deben reportarse dentro de las 24 horas
                            posteriores a la entrega o dentro de los 10 días hábiles siguientes a la fecha
                            estimada de entrega en caso de extravío.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">7. Modificaciones</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Nos reservamos el derecho de modificar estos términos en cualquier momento.
                            Las modificaciones entrarán en vigor inmediatamente después de su publicación en esta página.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">8. Contacto</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Para cualquier consulta sobre estos términos y condiciones:
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

export default Terms;
