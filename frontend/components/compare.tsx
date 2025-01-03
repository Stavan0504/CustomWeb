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
import { compare } from "../app/types/compareTypes"

export default function Compare({ data }: compare) {

    return (
        <div className="px-4 sm:px-36 bg-white py-8 sm:py-32 overflow-x-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-center rounded-lg py-8 sm:py-20 px-4 sm:px-20" style={{ backgroundColor: '#da3654' }}>
                <div className="w-full">
                    <h1 className="text-xl sm:text-2xl text-white mb-4 sm:mb-9">{data.title}</h1>
                    <b className='text-white font-semibold'>
                        <PortableText value={data.description} components={customComponents} />
                    </b>
                </div>
            </div>
            <div className="w-full bg-blue-100">
                {data.content.map((compare: any, index: any) => (
                    <div key={index} className="flex flex-col sm:flex-row justify-between items-center rounded-lg py-6 sm:py-12 px-4 sm:px-20 mb-8 bg-blue-100">
                        <div className="w-full sm:w-1/3">
                            <h1 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#da3654' }}>
                                {compare.details}
                            </h1>
                            <div className='text-black'>
                                <PortableText value={compare.text} components={customComponents} />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row w-full sm:w-2/3 justify-between items-center mt-6 sm:mt-0 space-y-6 sm:space-y-0 sm:space-x-6">
                            <Select >
                                <SelectTrigger
                                    className="bg-white text-sky-950 w-full sm:w-56 h-12 shadow-2xl"
                                    aria-label={`Select ${compare.products[0]}`}
                                >
                                    <SelectValue
                                        placeholder={`${compare.products[0]}`}
                                        aria-label={`${compare.products[0]}`}
                                    />
                                </SelectTrigger>

                                <SelectContent className="bg-white text-sky-950">
                                    {compare.products.map((product: any, index: any) => (
                                        <SelectItem key={index} value={product}>{product}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            
                            <h1 className='text-3xl sm:text-4xl text-black'>VS</h1>
                            <Select>
                                <SelectTrigger
                                    className="bg-white text-sky-950 w-full sm:w-56 h-12 shadow-2xl"
                                    aria-label={`Select ${compare.products[0]}`}
                                >
                                    <SelectValue
                                        placeholder={`${compare.products[0]}`}
                                        aria-label={`${compare.products[0]}`}
                                    />
                                </SelectTrigger>
                                <SelectContent className="bg-white text-sky-950">
                                    {compare.products.map((product: any, index: any) => (
                                        <SelectItem key={index} value={product}>{product}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            
                            <Button className="h-12 sm:w-32 w-full  bg-sky-950 text-white hover:bg-red-600" aria-label='Compare'>
                                Compare
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
