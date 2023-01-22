import React from 'react'

type IProps = {
    children: React.ReactNode
}
type IState = {
    filledForm: boolean,
    setFilledForm: React.Dispatch<React.SetStateAction<boolean>>
}
export const AppContext = React.createContext({} as IState)
export function AppContextProvider ({ children }: IProps){
    const [filledForm, setFilledForm] = React.useState(false);
    return(
        <AppContext.Provider value={{filledForm, setFilledForm}}>
            { children }
        </AppContext.Provider>
    )
}