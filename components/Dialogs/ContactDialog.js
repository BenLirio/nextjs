import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions
} from '@material-ui/core'
import hours from '../../js/about/hours'
import DialogContext from './dialog-context'
import { useContext } from 'react'

const ContactDialog = () => {
  const [open, setOpen] = useContext(DialogContext)
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Contact</DialogTitle>
      <DialogContent>
        <DialogContentText>At your convenience call</DialogContentText>
        <DialogContentText variant="h6" color="textPrimary">
          Phone: (616) 123 4567
        </DialogContentText>
        <DialogContentText>
          {hours.map(({ hours, name }) => {
            return (
              <>
                {name}: {hours}
                <br />
              </>
            )
          })}
        </DialogContentText>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="default">
            Close
          </Button>
          <Button color="secondary">Send</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

export default ContactDialog
