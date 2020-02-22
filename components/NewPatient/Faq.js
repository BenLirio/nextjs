import React, { useState } from 'react'
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Collapse
} from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const faq = [
  {
    question: 'Question 1',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, deserunt?'
  },
  {
    question: 'Question 2',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, deserunt?'
  },
  {
    question: 'Question 3',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, deserunt?'
  },
  {
    question: 'Question 4',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, deserunt?'
  },
  {
    question: 'Question 5',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, deserunt?'
  },
  {
    question: 'Question 6',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, deserunt?'
  }
]

const Faq = () => {
  const [open, setOpen] = useState(faq.map(_ => false))
  const toggle = id => {
    setOpen(prev => {
      prev[id] = !prev[id]
      return [...prev]
    })
  }
  return (
    <>
      <Typography variant="h3">FAQ</Typography>
      <List>
        {faq.map(({ question, answer }, id) => {
          return (
            <div key={id}>
              <ListItem button onClick={() => toggle(id)}>
                <ListItemIcon>
                  {open[id] ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="h6">{question}</Typography>}
                />
              </ListItem>
              <Collapse in={open[id]} unmountOnExit>
                <ListItem>
                  <ListItemText primary={answer} />
                </ListItem>
              </Collapse>
              <Divider />
            </div>
          )
        })}
      </List>
    </>
  )
}

export default Faq
