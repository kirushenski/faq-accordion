import SvgMinus from '@/assets/icons/minus.svg?react'
import SvgPlus from '@/assets/icons/plus.svg?react'
import SvgStar from '@/assets/icons/star.svg?react'
import classes from './app.module.css'

// TODO build Accordion component
// TODO add height animation
// TODO mobile styles
// FIXME borders
// FIXME content padding
// FIXME plusminus content overlap

export function App() {
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <h1 className={classes.heading}>
          <SvgStar className={classes.star} /> FAQs
        </h1>
        <div className={classes.accordion}>
          <details name="faq" open>
            <summary>
              What is Frontend Mentor, and how will it help me?
              <SvgMinus className={classes.minus} />
              <SvgPlus className={classes.plus} />
            </summary>
            Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills
            with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.
          </details>
          <details name="faq">
            <summary>
              Is Frontend Mentor free?
              <SvgMinus className={classes.minus} />
              <SvgPlus className={classes.plus} />
            </summary>
            Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access
            to a range of projects suitable for all skill levels.
          </details>
          <details name="faq">
            <summary>
              Can I use Frontend Mentor projects in my portfolio?
              <SvgMinus className={classes.minus} />
              <SvgPlus className={classes.plus} />
            </summary>
            Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase
            your skills to potential employers!
          </details>
          <details name="faq">
            <summary>
              How can I get help if I'm stuck on a Frontend Mentor challenge?
              <SvgMinus className={classes.minus} />
              <SvgPlus className={classes.plus} />
            </summary>
            The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you
            can ask questions and seek support from other community members.
          </details>
        </div>
      </div>
    </div>
  )
}
