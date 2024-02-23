import { render } from '@testing-library/react'
import CharacterDetail from '@/app/character/[id]/page' 

test('renders characterdetail unchanged', () => {
  const { container } = render(<CharacterDetail/>)
  expect(container).toMatchSnapshot()
})