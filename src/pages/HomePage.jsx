/**
 * ORDEM DAS SEÇÕES NA PÁGINA
 * --------------------------
 * Para mudar a ordem ou remover uma seção, edite a lista abaixo.
 */
import ComoFunciona from '@/components/sections/ComoFunciona'
import Depoimentos from '@/components/sections/Depoimentos'
import Experiencia from '@/components/sections/Experiencia'
import Faq from '@/components/sections/Faq'
import Hero from '@/components/sections/Hero'
import Estrutura from '@/components/sections/Estrutura'
import LinhasCredito from '@/components/sections/LinhasCredito'
import Parceiros from '@/components/sections/Parceiros'
import SimulacaoForm from '@/components/sections/SimulacaoForm'
import Sobre from '@/components/sections/Sobre'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Parceiros />
      <LinhasCredito />
      <Estrutura />
      <Sobre />
      <ComoFunciona />
      <Experiencia />
      <Depoimentos />
      <Faq />
      <SimulacaoForm />
    </>
  )
}
