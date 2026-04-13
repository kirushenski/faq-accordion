import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import type { ReactElement } from 'react'

const customRender = (ui: ReactElement, options: Omit<RenderOptions, 'wrapper'> = {}) =>
  render(ui, {
    wrapper: ({ children }) => <>{children}</>,
    ...options,
  })

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'

export { customRender as render }
