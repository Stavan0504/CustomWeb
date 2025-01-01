import { PortableText } from '@portabletext/react'
import { customComponents } from './customComponents'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { compare } from "../types/compareTypes"

export default function Compare({ data }:compare) {
    
    return (
        <div className="px-36 bg-white py-32 overflow-x-hidden">
            <div className="flex justify-between items-center rounded-lg py-20 px-20" style={{ backgroundColor: '#da3654' }}>
                <div className="w-full">
                    <h1 className="text-xl text-white mb-9">{data.title}</h1>
                    <b className='text-white font-semibold'><PortableText value={data.description} components={customComponents} /></b>
                </div>
            </div>
            <div className="w-full bg-blue-100">
                {data.content.map((compare: any, index: any) => (
                    <div key={index} className="flex justify-between items-center rounded-lg py-12 px-20 mb-8 bg-blue-100">
                        <div className="w-1/3">
                            <h1 className="text-xl font-bold mb-4" style={{ color: '#da3654' }}>
                                {compare.details}
                            </h1>
                            <div className='text-black'>
                                <PortableText value={compare.text} components={customComponents} />
                            </div>
                        </div>
                        <div className="flex w-2/3 justify-between items-center  ml-8 space-x-6">
                            <Select>
                                <SelectTrigger className="bg-white text-red-500 w-56 h-12 shadow-2xl">
                                    <SelectValue placeholder={`${compare.products[0]}`} />
                                </SelectTrigger>
                                <SelectContent className="bg-white text-red-500">
                                    {compare.products.map((product: any, index: any) => (
                                        <SelectItem key={index} value={product}>{product}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            {/* VS Label */}
                            <h1 className='text-3xl text-black'>VS</h1>

                            {/* Second Select Dropdown */}
                            <Select>
                                <SelectTrigger className="bg-white text-red-500 shadow-2xl w-56 h-12">
                                    <SelectValue className="bg-white text-red-500" placeholder={`${compare.products[1]}`} />
                                </SelectTrigger>
                                <SelectContent className="bg-white text-red-500">
                                    {compare.products.map((product: any, index: any) => (
                                        <SelectItem key={index} value={product}>{product}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            {/* Compare Button */}
                            <Button className="h-12 w-32 bg-red-500 text-white hover:bg-red-600">Compare</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
