import { Children, cloneElement, isValidElement, useId, type ReactNode } from 'react'
import { clsx } from 'clsx'
import classes from './accordion.module.css'
import SvgMinus from '@/assets/icons/minus.svg?react'
import SvgPlus from '@/assets/icons/plus.svg?react'

interface AccordionProps {
  children: ReactNode
}

interface PanelProps {
  open?: boolean
  name?: string
  summary: ReactNode
  children: ReactNode
}

export function Panel({ open, name, summary, children }: PanelProps) {
  return (
    <details name={name} open={open}>
      <Summary>{summary}</Summary>
      {children}
    </details>
  )
}

export function Summary({ children }: AccordionProps) {
  return (
    <summary>
      {children}
      <SvgMinus className={clsx(classes.icon, classes.minus)} />
      <SvgPlus className={clsx(classes.icon, classes.plus)} />
    </summary>
  )
}

export function Accordion({ children }: AccordionProps) {
  const name = useId()

  return (
    <div className={classes.root}>
      {Children.map(children, (child) => (isValidElement(child) ? cloneElement(child, { name } as PanelProps) : child))}
    </div>
  )
}
