'use client'
import React, { useState } from "react";
import { PortableText } from '@portabletext/react';
import slugify from 'slugify'
import { customComponents } from './customComponents';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { compare } from "../app/types/compareTypes";
import Link from "next/link";

export default function Compare({ data }: compare) {

    const [selections, setSelections] = useState(
        data.content.map(() => ({ data1: '', data2: '' }))
    );
    const [disabled,setDisabled] = useState(false)
    const handleSelectChange = (index: number, value: string, type: 'data1' | 'data2') => {
        setSelections(prevSelections => {
            const newSelections = [...prevSelections];
            newSelections[index] = {
                ...newSelections[index],
                [type]: value
            };
            return newSelections;
        });
    };
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
                {data.content.map((compare: any, index: number) => (
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
                            <Select onValueChange={(value) => handleSelectChange(index, value, 'data1')}>
                                <SelectTrigger className="bg-white text-sky-950 w-full p-4 sm:w-56 h-12 shadow-2xl" aria-label={`Select ${compare.products[0].name}`}>
                                    <SelectValue placeholder="Choose First Product" aria-label={compare.products[0].name} />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    {compare.products.map((product: any, productIndex: any) => (
                                        <SelectItem key={productIndex} className="p-2 hover:bg-black hover:text-white transition-all duration-500" value={product.name}>{product.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <h1 className='text-3xl sm:text-4xl'>VS</h1>

                            <Select onValueChange={(value) => handleSelectChange(index, value, 'data2')}>
                                <SelectTrigger className="bg-white text-sky-950 w-full p-4 sm:w-56 h-12 shadow-2xl" aria-label={`Select ${compare.products[0].name}`}>
                                    <SelectValue placeholder="Choose Second Product" aria-label={compare.products[0].name} />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    {compare.products.map((product: any, productIndex: any) => (
                                        <SelectItem key={productIndex} className="p-2 hover:bg-black hover:text-white transition-all duration-500"  value={product.name}>{product.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                                        

                            <Link href={selections[index].data1 !== selections[index].data2 ? `/Comparision/${slugify(selections[index].data1,{lower:true,strict:true})}Vs${slugify(selections[index].data2,{lower:true,strict:true})}` : '#'}>
                                <Button
                                    aria-label="Compare"
                                    disabled={!(selections[index].data1 && selections[index].data2) || selections[index].data1 === selections[index].data2}
                                    className={`h-12 sm:w-32 w-full bg-sky-950 text-white hover:bg-red-600`}
                                    
                                >
                                    Compare
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
