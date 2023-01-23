import { FormSchema } from "../component/form"

const storeKey: string = "$LdFormDetails"
export function getDetails(){
    const data = localStorage.getItem(storeKey)
    if (data){
        return (JSON.parse(data))
    }
    else{ return null }
}
export function storeDetails(item: FormSchema){
    try{
        localStorage.setItem(storeKey, JSON.stringify(item))
        return (1)
    }
    catch(_){ return (0) }
}