import React from 'react'
import { DataSchema } from '../api/queryManager/query-manager'
import { FormSchema } from '../component/form'

type IProps = {
    children: React.ReactNode
}
type IState = {
    filledForm: boolean,
    setFilledForm: React.Dispatch<React.SetStateAction<boolean>>,
    dialogBox: IDialogBox,
    setDialogBox: React.Dispatch<React.SetStateAction<IDialogBox>>,
    openSuccessSnackbar: ISnackBar,
    setOpenSuccessSnackbar: React.Dispatch<React.SetStateAction<ISnackBar>>
    bookingDetails: IBookingDetails[]
    setBookingDetails: React.Dispatch<React.SetStateAction<IBookingDetails[]>>
}
type IDialogBox = {
    open: boolean
    children?: React.ReactNode
}
type ISnackBar = {
    open: boolean,
    msg?: string,
}
type IBookingDetails = {
    userDetails: FormSchema,
    bookedItemDetails: DataSchema,
    appointmentDate: string
}
export const AppContext = React.createContext({} as IState)
export function AppContextProvider ({ children }: IProps){
    const [filledForm, setFilledForm] = React.useState(false);
    const [dialogBox, setDialogBox] = React.useState<IDialogBox>({} as IDialogBox);
    const [openSuccessSnackbar, setOpenSuccessSnackbar] = React.useState({} as ISnackBar)
    const [bookingDetails, setBookingDetails] = React.useState([] as IBookingDetails[])

    return(
        <AppContext.Provider value={{filledForm, setFilledForm, dialogBox, setDialogBox, openSuccessSnackbar, setOpenSuccessSnackbar, bookingDetails, setBookingDetails}}>
            { children }
        </AppContext.Provider>
    )
}