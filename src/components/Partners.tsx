

const Partners = () => {
    const partners = [
        { name: "DHL", url: "/partners/dhl.png" },
        { name: "FedEx", url: "/partners/fedex.png" },
        { name: "Estafeta", url: "/partners/estafeta.png" },
        { name: "Redpack", url: "/partners/redpack.png" },
        { name: "Paquetexpress", url: "/partners/paquetexpress.png" },
        { name: "99Minutos", url: "/partners/99minutos.png" }
    ];

    return (
        <section className="py-24 bg-slate-900 dark:bg-white border-b border-slate-800 dark:border-gray-100 overflow-hidden transition-colors duration-300">
            <div className="container mx-auto max-w-6xl px-6 mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-slate-900 mb-4 tracking-tight">Trabajamos con las mejores paqueterías del mundo</h2>
                <p className="text-slate-400 dark:text-slate-600 text-lg">Tu envío en las mejores manos con nuestra red de aliados certificados.</p>
            </div>

            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-16 [&_img]:max-w-none animate-infinite-scroll">
                    {partners.map((partner, index) => {
                        let sizeClass = "h-[69px] w-auto";
                        if (partner.name === 'DHL') sizeClass = "h-[97px] w-auto";
                        if (partner.name === 'Estafeta') sizeClass = "h-[130px] w-auto";
                        if (partner.name === 'Paquetexpress' || partner.name === 'Redpack') sizeClass += " pr-12";

                        return (
                            <li key={index} className="mx-8">
                                <img
                                    src={partner.url}
                                    alt={partner.name}
                                    className={`object-contain grayscale opacity-60 dark:opacity-80 invert dark:invert-0 ${sizeClass}`}
                                />
                            </li>
                        );
                    })}
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-16 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    {partners.map((partner, index) => {
                        let sizeClass = "h-[69px] w-auto";
                        if (partner.name === 'DHL') sizeClass = "h-[97px] w-auto";
                        if (partner.name === 'Estafeta') sizeClass = "h-[130px] w-auto";
                        if (partner.name === 'Paquetexpress' || partner.name === 'Redpack') sizeClass += " pr-12";

                        return (
                            <li key={index} className="mx-8">
                                <img
                                    src={partner.url}
                                    alt={partner.name}
                                    className={`object-contain grayscale opacity-60 dark:opacity-80 invert dark:invert-0 ${sizeClass}`}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Partners;
