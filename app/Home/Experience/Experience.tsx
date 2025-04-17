import Heading from "../Helper/Heading";


const Experience = () => {
    return (
        <div id="experience" className="mt-12 mb-12 px-4 md:px-16 lg:px-40">
            <Heading heading="Experience" />
            <div className="flex flex-col justify-center">
                <ol className="relative border-s border-white pt-14 pb-10">
                    {/* Experience 1 */}
                    <li className="mb-10" >
                        <span className="absolute  flex items-center justify-center w-2.5 h-2.5 mt-3 bg-[#FF8660] rounded-full -start-1.5 ring-8 ring-[#FF866033]"></span>
                        <div className="ms-5 lg:ms-6">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <p className="text-lg md:text-xl font-bold text-white">
                                    Software Engineer at "Alferix"
                                </p>
                                <p className="text-sm font-bold bg-[#1DAB45]/10 text-[#1DAB45] px-3 py-1 rounded-[6px] w-fit">
                                    Full Time
                                </p>
                                <p className="text-sm text-[#d2dae4] md:ml-auto">
                                    Mar 2025 - Present
                                </p>
                            </div>
                            <p className="text-[#bec3ca] text-sm mt-4 md:mt-5 pl-0 md:pl-10">
                                Crafted FXDX v2's UX/UI with innovative features, targeting a 60% user satisfaction boost. Executed Landing Page v2 for FXDX Exchange, increasing user engagement by 30% and conversion rates by 20%. Created impactful marketing materials, achieving a 20% increase in engagement and expanding audience reach by 15%.
                            </p>
                        </div>
                    </li>

                    {/* Experience 2 */}
                    <li>
                        <span className="absolute flex items-center justify-center w-2.5 h-2.5 mt-3 bg-[#FF8660] rounded-full -start-1.5 ring-8 ring-[#FF866033]"></span>
                        <div className="ms-5 lg:ms-6">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <p className="text-lg md:text-xl font-bold text-white">
                                    Software Engineer-L2 at "RND Softech Pvt"
                                </p>
                                <p className="text-sm font-bold bg-[#1DAB45]/10 text-[#1DAB45] px-3 py-1 rounded-[6px] w-fit">
                                    Full Time
                                </p>
                                <p className="text-sm text-[#d2dae4] md:ml-auto">
                                    May 2022 - Mar 2025
                                </p>
                            </div>
                            <p className="text-[#bec3ca] text-sm mt-4 md:mt-5 pl-0 md:pl-10">
                                Crafted FXDX v2's UX/UI with innovative features, targeting a 60% user satisfaction boost. Executed Landing Page v2 for FXDX Exchange, increasing user engagement by 30% and conversion rates by 20%. Created impactful marketing materials, achieving a 20% increase in engagement and expanding audience reach by 15%.
                            </p>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Experience;
