import './App.css'
import React from 'react'
import BookingPage from './pages/Booking/booking'
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Form from './component/form'
import HomePage from './pages/Home/home'
import BookedCard from './ui-component/booked-card/booked-card'
import Dialog from '@mui/material/Dialog';
import { AppContext } from './app-context/app-context'
import { getDetails } from './utli/localStorageWorkers';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const appContext = React.useContext(AppContext)
  const { openSuccessSnackbar, setOpenSuccessSnackbar, dialogBox, setFilledForm } = appContext
  const initProcesses = () => {
      // 1 . check if user details is still stored, then update status
      const response = getDetails()
      if (response){
        setFilledForm(true)
      }
  }
  React.useLayoutEffect(initProcesses)
  return (
    <React.Fragment>
        <Snackbar
          open={openSuccessSnackbar.open}
          autoHideDuration={6000}
          onClose={(_) => setOpenSuccessSnackbar({ open: false })}
        >
          <Alert
            onClose={(_) => setOpenSuccessSnackbar({ open: false })}
            severity="success"
            sx={{ width: "100%" }}
          >
            {openSuccessSnackbar.msg}
          </Alert>
        </Snackbar>
        <Dialog
         sx={{width: "100%"}}
         open={dialogBox.open} onClose={_ => appContext.setDialogBox({open: false})}>
           { dialogBox.children }
        </Dialog>
          <div className="App">
          <HomePage />
    </div>
    </React.Fragment>
  )
}

export default App
