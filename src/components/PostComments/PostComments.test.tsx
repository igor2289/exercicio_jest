import { fireEvent, render, screen } from '@testing-library/react'
import PostComment from '.'

describe('Teste para o componente PostComment', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComment />)
    expect(screen.getByText('Comentar')).toBeInTheDocument()
  })
  test('Devem ser inseridos 2 comentários', () => {
    render(<PostComment />)

    const botao = screen.getByTestId('btn-comentar')
    fireEvent.click(botao)
    fireEvent.click(botao)

    const comentarios = screen.getAllByTestId('comentario')
    expect(comentarios).toHaveLength(2)
  })
})
