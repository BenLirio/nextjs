import React, { useState } from 'react'
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Collapse,
  Grid
} from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const faq = [
  {
    question: 'Am I able to get a discount?',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, deserunt?'
  },
  {
    question: 'How do I find my coverage?',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, deserunt?'
  },
  {
    question: 'How do I transfer dentist?',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, deserunt?'
  },
  {
    question: 'What is the most reasonable plan?',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, deserunt?'
  },
  {
    question: 'What paper work is needed?',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, deserunt?'
  },
  {
    question: 'Can I put payment on credit?',
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
    <Grid item xs={12}>
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
            </div>
          )
        })}
      </List>
    </Grid>
  )
}

export default Faq
