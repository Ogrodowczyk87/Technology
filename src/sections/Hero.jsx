import { statistic } from '../constants'
const Hero = () => {
    return (
        <section
            id="home"
            className=" max-container   flex xl:flex-row flex-grid min-h-screen flex-col justify-center"
        >
            <div className="">
                {/* wysokosc tymaczasowa na sztywno */}
                <div className="flex text-white ">
                    <h1 className="text-[70px] font-bold">Advancing knowledge through research.
                    </h1>
                    <p className="mt-5 text-[18px] font-normal">Welcome to our research laboratory center, where groundbreaking research meets practical applications. We bring together
                        diverse expertise to tackle global issues.</p>
                </div>
                <div className="flex">
                    <img
                        src="https://assets.website-files.com/646ca10376bc6bc61fd43cb7/646dfffe47fecb8709431b92_Virus-image-01.webp" loading="eager" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 248.859375px, (max-width: 991px) 298.640625px, (max-width: 1279px) 447.953125px, 657px" srcset="https://assets.website-files.com/646ca10376bc6bc61fd43cb7/646dfffe47fecb8709431b92_Virus-image-01-p-500.webp 500w, https://assets.website-files.com/646ca10376bc6bc61fd43cb7/646dfffe47fecb8709431b92_Virus-image-01.webp 660w"

                    />
                    <div className="text-white text-[30px] clex" >
                        {/* dorobic ikonki i statystyki trzeba zrobic tablice w constants */}
                        <div className="flex">
                            {statistic.map((stat) => (
                                <div key={stat.label}>
                                    <p>{stat.value}</p>
                                    <p>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;
