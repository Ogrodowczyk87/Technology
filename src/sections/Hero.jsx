
const Hero = () => {
    return (
        <section
            id="home"
            className="w-full max-container flex xl:flex-row flex-grid min-h-screen"
        >
            <div >
                {/* wysokosc tymaczasowa na sztywno */}
                <div className="flex text-white ">
                    <h1 className="text-[70px] font-bold">Advancing knowledge through research.
                    </h1>
                    <p className="mt-5 text-[18px] font-normal">Welcome to our research laboratory center, where groundbreaking research meets practical applications. We bring together
                        diverse expertise to tackle global issues.</p>
                </div>
                <div className="flex">
                    <img
                        src="https://assets.website-files.com/646ca10376bc6bc61fd43cb7/646dfffe47fecb8709431b92_Virus-image-01.webp" loading="eager" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 248.859375px, (max-width: 991px) 298.640625px, (max-width: 1279px) 447.953125px, 657px" srcset="https://assets.website-files.com/646ca10376bc6bc61fd43cb7/646dfffe47fecb8709431b92_Virus-image-01-p-500.webp 500w, https://assets.website-files.com/646ca10376bc6bc61fd43cb7/646dfffe47fecb8709431b92_Virus-image-01.webp 660w" class="virus-image"

                    />
                    <div className="text-white text-[30px] clex" >
                        {/* dorobic ikonki i statystyki trzeba zrobic tablice w constants */}
                        <p>a</p>
                        <p>b</p>
                        <p>c</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;
