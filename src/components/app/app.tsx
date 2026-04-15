import SvgStar from '@/assets/icons/star.svg?react'
import classes from './app.module.css'
import { Accordion, Panel } from '@/components/accordion/accordion'

export function App() {
  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <h1 className={classes.heading}>
          <SvgStar aria-hidden="true" focusable="false" className={classes.star} />
          FAQs
        </h1>
        <Accordion>
          <Panel summary="What is Frontend Mentor, and how will it help me?" open>
            Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills
            with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.
          </Panel>
          <Panel summary="Is Frontend Mentor free?">
            Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access
            to a range of projects suitable for all skill levels.
          </Panel>
          <Panel summary="Can I use Frontend Mentor projects in my portfolio?">
            Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase
            your skills to potential employers!
          </Panel>
          <Panel summary="How can I get help if I'm stuck on a challenge?">
            The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you
            can ask questions and seek support from other community members.
          </Panel>
        </Accordion>
      </main>
    </div>
  )
}
