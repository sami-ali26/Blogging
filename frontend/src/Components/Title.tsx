import type { ChangeEvent } from "react"


export const Title = ({onChange}: {onChange: (e: ChangeEvent<HTMLInputElement>) => void}) => {

    return <div className="w-vw flex justify-center">
    <div className="mb-6 w-md ">
    <label  className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Default input</label>
    <input type="text" 
    onChange={onChange} 
    placeholder='Title'
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg text-xl  fon-semiblod focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
</div>
</div>
}