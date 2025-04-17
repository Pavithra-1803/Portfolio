import Heading from "../Helper/Heading";


const Education = () => {
    return (
        <div id="education"  className="mt-12 mb-12 px-4 md:px-16 lg:px-40">
            <Heading heading="Education" />
            <div className="flex flex-col justify-center">
                <ol className="relative border-s border-white pt-14 pb-10">
                    {/* Experience 1 */}
                    <li className="mb-10 relative" >
                        <span className="absolute  flex items-center justify-center w-2.5 h-2.5 mt-3 bg-[#FF8660] rounded-full -start-1.5 ring-8 ring-[#FF866033]"></span>
                        <div className="ms-5 lg:ms-6">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                            <img
                                    loading="lazy"
                                    width={32}
                                    height={32}
                                    decoding="async"
                                    className="w-8 h-8"
                                    src="/images/NGP.png"
                                    alt="Education Icon"
                                />

                                <p className="text-lg md:text-xl font-bold text-white">
                                    B.Sc Computer Science
                                </p>
                                <p className="text-sm font-bold bg-[#1DAB45]/10 text-[#1DAB45] px-3 py-1 rounded-[6px] w-fit">
                                    Grade:76 %
                                </p>
                                <p className="text-sm text-[#d2dae4] md:ml-auto">
                                    June 2018 - Apr 2021
                                </p>
                            </div>

                            <p className="text-[#bec3ca] text-sm mt-4 md:mt-5 pl-0 md:pl-10">
                                Dr.NGP Arts and Science Colledge
                            </p>
                        </div>
                    </li>

                    {/* Experience 2 */}
                    <li>
                        <span className="absolute flex items-center justify-center w-2.5 h-2.5 mt-3 bg-[#FF8660] rounded-full -start-1.5 ring-8 ring-[#FF866033]"></span>
                        <div className="ms-5 lg:ms-6">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                            <img
                                    loading="lazy"
                                    width={32}
                                    height={32}
                                    decoding="async"
                                    className="w-8 h-8"
                                    src="/images/ST.png"
                                    alt="Education Icon"
                                />
                                <p className="text-lg md:text-xl font-bold text-white">
                                    Higher Scecondary School
                                </p>
                                <p className="text-sm font-bold bg-[#1DAB45]/10 text-[#1DAB45] px-3 py-1 rounded-[6px] w-fit">
                                    Grade: 83%
                                </p>
                                <p className="text-sm text-[#d2dae4] md:ml-auto">
                                    Jun 2017 - Mar 2018
                                </p>
                            </div>
                            <p className="text-[#bec3ca] text-sm mt-4 md:mt-5 pl-0 md:pl-10">
                                ST.Thomas Highr Secondary School                            </p>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Education;
