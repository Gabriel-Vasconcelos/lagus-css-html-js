export const TitleComponent = ( {children} ) => {
    return (
        <div className="mt-16 flex justify-center items-center">
            <h1 className="text-center font-bold text-[32px]/[38px] w-[283px]">
                {children}
            </h1>
        </div>
    )
}