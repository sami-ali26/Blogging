
    
export const SingleSkeleton = () => {
    return <div role="status" className=" p-4 rounded-sm animate-pulse md:p-6 dark:border-gray-700">
    <div className="flex justify-center">
    <div className="grid grid-cols-12 w-screen px-6 pt-15 max-w-screen-xl ">
    <div className="col-span-9">
        <div className="text-4xl font-extrabold">
        <div className="h-5.5 bg-gray-200 rounded-full 0 w-48 mb-4"></div>
        </div>
        <div className="text-slate-500 pt-2">
        <div className="h-2.5 bg-gray-200 rounded-full 0 w-32 mb-2"></div>
        </div>
        <div className="pt-4">
        <div className="h-6 bg-gray-200 rounded-full  mb-2.5"></div>
        <div className="h-6 bg-gray-200 rounded-full  mb-2.5"></div>
        <div className="h-6 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
    </div>
    <div className="cols-span-3 ">
        <div className="text-slate-600 text-lg">
        <div className="h-4 bg-gray-200 rounded-full 0 w-20 mb-2"></div>
        </div>
        <div className="flex">
            <div className="pr-2 flex-col justify-center">
            <svg className="w-10 h-10 me-3 text-gray-200 700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
            </div>
            <div>
                <div className="text-xl font-bold">
                <div className="h-2.5 bg-gray-200 rounded-full 0 w-32 mb-2"></div>
                </div>
                <div className="w-48 h-4 bg-gray-200 rounded-full "></div>
            </div>
        </div>
    </div>
    
 
</div>
</div>
</div>
}
