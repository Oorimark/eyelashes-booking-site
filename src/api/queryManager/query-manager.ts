import React from 'react'
import { sampleData } from './sampleData'

export type DataSchema = {
    id: string,
    img_url: string,
    category: string,
    name: string,
    price: string,
    rating: string,
    duration: string,
    description: string
    requirements: Array<string>
}
export class QueryManager{
    queryData(number: number): Array<DataSchema>{
        return (
            sampleData.slice(0, number)
        )
    }
    queryOneData(id: string): DataSchema{
        const data: DataSchema = sampleData.filter(data => data.id === id)[0]
        return (data)
    }
}