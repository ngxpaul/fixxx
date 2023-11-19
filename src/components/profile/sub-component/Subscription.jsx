import React from 'react'

const Subscription = () => {
    return (
        <div className="m-auto my-8 w-full max-w-3xl bg-white rounded-xl bg-primary-light p-4 dark:bg-secondary-dark sm:p-8">
            <h3 className="mb-3 text-xl font-medium text-primary-dark dark:text-primary-light">Subscription</h3>
            <div className="">
                <p className="text-base sm:text-lg">You are currently on the<span className="font-medium text-primary text-lime-500"> Free </span>plan. </p>
                <div className="pt-4 text-primary-dark dark:text-primary-light"></div>
                <div className="flex items-center justify-between pt-6">
                    <span className="hidden text-muted-dark dark:text-muted-light sm:block text-stone-500	">Manage your subscription on Stripe</span>
                    <button
                        type="button"
                        className="border border-lime-400 select-none relative inline-flex font-medium min-w-[100px] items-center justify-center overflow-hidden transition-all sm:hover:opacity-80 rounded-full h-[46px] sm:h-[40px] px-6 w-full sm:w-fit"
                    >
                        <div className="relative flex w-full items-center justify-center space-x-2">
                            <span className="inline-flex whitespace-nowrap text-lime-500">Choose a plan 🚀</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Subscription