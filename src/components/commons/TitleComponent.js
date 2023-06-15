export const TitleComponent = ( {children} ) => {
    return (
        <div className="mt-16 lg:mt-24 flex justify-center items-center">
            <h1 className="text-center font-bold text-[32px]/[38px] lg:text-5xl w-[283px] lg:w-fit">
                {children}
            </h1>
        </div>
    )
}