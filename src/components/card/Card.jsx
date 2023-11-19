import React from 'react';

const Card = (props) => {
    const { title, subtitle, description, description2, srcSet, srcSet2 } = props;

    return (
        <>
            <div className="flex w-full flex-col space-y-20 md:space-y-44 mb-10 mt-10">
                <div className="grid w-full grid-cols-1 items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:grid-flow-col">
                    <div className="h-full space-y-3 text-base col-end-[-1]">
                        <p className="text-sm font-semibold uppercase text-lime-500">{title}</p>
                        <h4 className="text-3xl font-semibold sm:text-4xl text-slate-600">{subtitle}</h4>
                        <p className="text-lg text-slate-600">{description}</p>
                        <p className="text-lg text-slate-600">{description2}</p>
                    </div>
                    <div className="relative flex items-center justify-center rounded-2xl">
                        <div className="img-effect-right mx-auto w-full max-w-xl rounded-xl hover:scale-105">
                            <div className="relative">
                                <div>
                                    <img
                                        alt="create-img"
                                        srcSet={srcSet}
                                        src={srcSet}
                                        width="500"
                                        height="500"
                                        decoding="async"
                                        data-nimg="1"
                                        className="absolute top-8 sm:top-5 z-10 shadow-md hover:top-7 left-0 sm:left-10 w-full max-w-full rounded-2xl object-contain shadow-lg hover:transition-all hover:duration-500"
                                        loading="lazy"
                                        style={{ color: 'transparent' }}
                                    />
                                </div>
                                <div>
                                    <img
                                        alt="create-img"
                                        srcSet={srcSet2}
                                        src={srcSet2}
                                        width="500"
                                        height="500"
                                        decoding="async"
                                        data-nimg="1"
                                        className="relative mx-auto hover:z-50 w-full max-w-full rounded-2xl object-contain shadow-lg hover:transition-all hover:duration-500"
                                        loading="lazy"
                                        style={{ color: 'transparent' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;