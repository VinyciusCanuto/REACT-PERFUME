import styled from 'styled-components'

const cores = {
    Darkcyan: 'hsl(158, 36%, 37%)',
    Cream: 'hsl(30, 38%, 92%)',
    Verydarkblue: 'hsl(212, 21%, 14%)',
    Darkgrayishblue: 'hsl(228, 12%, 48%)',
    White: 'hsl(0, 0%, 100%)',
}

export const Container = styled.section`
    width: 600px;
    height: 450px;
    background-color: ${cores.White};
    border-radius: 10px;
    display: flex;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`

export const Imagem = styled.img`
    width: 50%;
    border-radius: 10px 0 0 10px;
`
export const Produto = styled.p`
    font-size: 12px;
    color: ${cores.Darkgrayishblue};
    letter-spacing: 4px;
    font-family: "Montserrat", sans-serif;
`
export const InfoContainer = styled.div`
    margin-left: 15px;
`
export const Titulo = styled.h1`
    font-size: 40px;
    color: ${cores.Verydarkblue};
    font-weight: 700;
    font-family: "Fraunces", serif;
`

export const Paragrafo = styled.p`
    font-size: 16px;
    color: ${cores.Darkgrayishblue};
    font-family: "Montserrat", sans-serif;
`
export const Botao = styled.button`
    font-size: 20px;
    color: white;
    background-color: ${cores.Darkcyan};
    height: 40px;
    width: 250px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    color: ${cores.White};

    &:hover{
        filter: brightness(0.8);
    }
`

export const Preco = styled.p`
    
`