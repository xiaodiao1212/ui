import { render, cleanup, waitFor, screen } from '@testing-library/react'
import { App } from '../src'
describe('App test', () => {
  beforeEach(() => {})

  afterEach(cleanup)
  it('renders without crashing', async () => {
    render(<App data-testid="app" />)
    const element = await waitFor(() => screen.getByTestId('app'))
    expect(element).toBeInTheDocument()
  })
})
