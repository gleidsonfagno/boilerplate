import React from 'react'
import * as S from './styles'
const Main = ({
  title = 'React avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React avançado escrito ao lado "
    />
    <S.Title>{title} </S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tla com código"
    />
  </S.Wrapper>
)

export default Main
