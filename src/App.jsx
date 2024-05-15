import { 
  Container, 
  Imagem, 
  Produto, 
  InfoContainer, 
  Titulo, 
  Paragrafo,
  Botao,
  Preco
 } from '../src/App/Styles/App'
import ImagemPerfume from '../public/image-product-desktop.jpg'

const App = () => {
  return(
    <Container>
      <Imagem src={ImagemPerfume} />
      <InfoContainer>
        <Produto>PERFUME</Produto>
        <Titulo>Gabrielle Essence Eau de Parfum</Titulo>
        <Paragrafo>A floral, solar and voluptuos interpretation composed by oliver Polge, Perfumer-Creator for the house of CHANEL </Paragrafo>
        <Preco>$149.99 $169.99</Preco>
        <Botao>Add to Cart</Botao>
      </InfoContainer>
    </Container>
  )
}

export default App