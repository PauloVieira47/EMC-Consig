import { useState } from 'react'

import { site, whatsappLink } from '@/config/site'

import { orgaoOpcoes, simulacaoSection, vinculoOpcoes } from '@/constants/simulacaoForm'

import { maskCPF, validarCPF } from '@/lib/cpf'

import { maskPhone, validPhoneBR } from '@/lib/phone'

import { useScrollRevealStagger } from '@/hooks/useScrollRevealStagger'

import Reveal from '@/components/ui/Reveal'



export default function SimulacaoForm() {

  const sectionRef = useScrollRevealStagger()

  const { kicker, title, titleAccent, subtitle } = simulacaoSection

  const [form, setForm] = useState({

    nome: '',

    whatsapp: '',

    cpf: '',

    vinculo: '',

    orgao: '',

  })

  const [aceite, setAceite] = useState(false)

  const [validated, setValidated] = useState(false)



  const update = (field) => (e) => {

    let value = e.target.value

    if (field === 'cpf') value = maskCPF(value)

    if (field === 'whatsapp') value = maskPhone(value)

    setForm((prev) => ({ ...prev, [field]: value }))

  }



  const handleSubmit = (e) => {

    e.preventDefault()

    setValidated(true)



    const cpfOk = validarCPF(form.cpf)

    const phoneOk = validPhoneBR(form.whatsapp)

    const nomeOk = form.nome.trim().length >= 3

    const selectsOk = form.vinculo && form.orgao

    const aceiteOk = aceite



    if (!cpfOk || !phoneOk || !nomeOk || !selectsOk || !aceiteOk) {

      return

    }



    const orgaoLabel = orgaoOpcoes.find((o) => o.value === form.orgao)?.label ?? form.orgao



    const msg = [

      `*Solicitação de simulação* — Site ${site.brand.name}`,

      '',

      `Nome: ${form.nome.trim()}`,

      `WhatsApp: ${form.whatsapp.trim()}`,

      `CPF: ${form.cpf.trim()}`,

      `Vínculo: ${form.vinculo}`,

      `Convênio: ${orgaoLabel}`,

      '',

      '_Enviado pelo formulário do site._',

    ].join('\n')



    window.open(whatsappLink(msg), '_blank', 'noopener,noreferrer')



    setForm({

      nome: '',

      whatsapp: '',

      cpf: '',

      vinculo: '',

      orgao: '',

    })

    setAceite(false)

    setValidated(false)

  }



  const fieldInvalid = (ok) => validated && !ok



  return (

    <section

      ref={sectionRef}

      className="nn-sim-section"

      id="solicitar-simulacao"

      aria-labelledby="nn-sim-titulo"

    >

      <img

        className="nn-como-funciona__grid"

        src="/img/saas-app/grid.png"

        alt=""

        width="1920"

        height="1080"

        decoding="async"

      />

      <div className="container position-relative">

        <Reveal as="header" index={0} className="text-center nn-story-head nn-sim-section__top">

          <p className="nn-story-kicker">{kicker}</p>

          <h2 id="nn-sim-titulo">

            {title} <span>{titleAccent}</span>

          </h2>

          <p className="nn-story-sub mb-0">{subtitle}</p>

        </Reveal>



        <Reveal as="div" index={1} className="nn-sim-form-wrap">

          <form

            className={`nn-sim-form needs-validation${validated ? ' was-validated' : ''}`}

            noValidate

            autoComplete="on"

            onSubmit={handleSubmit}

          >

            <div className="row g-3">

              <div className="col-12">

                <div className="nn-sim-form__field">

                  <label className="nn-sim-form__label" htmlFor="nn-sim-nome">

                    Nome

                  </label>

                  <input

                    type="text"

                    className={`form-control nn-sim-form__control${fieldInvalid(form.nome.trim().length >= 3) ? ' is-invalid' : ''}`}

                    id="nn-sim-nome"

                    name="nome"

                    required

                    minLength={3}

                    maxLength={120}

                    placeholder="Seu nome completo"

                    autoComplete="name"

                    value={form.nome}

                    onChange={update('nome')}

                  />

                  <div className="invalid-feedback">Informe seu nome (mínimo 3 caracteres).</div>

                </div>

              </div>



              <div className="col-12 col-sm-6">

                <div className="nn-sim-form__field">

                  <label className="nn-sim-form__label" htmlFor="nn-sim-whatsapp">

                    WhatsApp

                  </label>

                  <input

                    type="tel"

                    className={`form-control nn-sim-form__control${fieldInvalid(validPhoneBR(form.whatsapp)) ? ' is-invalid' : ''}`}

                    id="nn-sim-whatsapp"

                    name="whatsapp"

                    required

                    inputMode="numeric"

                    maxLength={16}

                    placeholder="(88) 99999-9999"

                    autoComplete="tel"

                    value={form.whatsapp}

                    onChange={update('whatsapp')}

                  />

                  <div className="invalid-feedback">Informe um celular válido com DDD.</div>

                </div>

              </div>



              <div className="col-12 col-sm-6">

                <div className="nn-sim-form__field">

                  <label className="nn-sim-form__label" htmlFor="nn-sim-cpf">

                    CPF

                  </label>

                  <input

                    type="text"

                    className={`form-control nn-sim-form__control${fieldInvalid(validarCPF(form.cpf)) ? ' is-invalid' : ''}`}

                    id="nn-sim-cpf"

                    name="cpf"

                    required

                    inputMode="numeric"

                    maxLength={14}

                    placeholder="000.000.000-00"

                    autoComplete="off"

                    value={form.cpf}

                    onChange={update('cpf')}

                  />

                  <div className="invalid-feedback">CPF inválido.</div>

                </div>

              </div>



              <div className="col-12 col-sm-6">

                <div className="nn-sim-form__field">

                  <label className="nn-sim-form__label" htmlFor="nn-sim-vinculo">

                    Vínculo

                  </label>

                  <select

                    className={`form-control nn-sim-form__control${fieldInvalid(Boolean(form.vinculo)) ? ' is-invalid' : ''}`}

                    id="nn-sim-vinculo"

                    name="vinculo"

                    required

                    value={form.vinculo}

                    onChange={update('vinculo')}

                  >

                    <option value="">Selecione</option>

                    {vinculoOpcoes.map((opt) => (

                      <option key={opt} value={opt}>

                        {opt}

                      </option>

                    ))}

                  </select>

                  <div className="invalid-feedback">Selecione seu vínculo.</div>

                </div>

              </div>



              <div className="col-12 col-sm-6">

                <div className="nn-sim-form__field">

                  <label className="nn-sim-form__label" htmlFor="nn-sim-orgao">

                    Convênio

                  </label>

                  <select

                    className={`form-control nn-sim-form__control${fieldInvalid(Boolean(form.orgao)) ? ' is-invalid' : ''}`}

                    id="nn-sim-orgao"

                    name="orgao"

                    required

                    value={form.orgao}

                    onChange={update('orgao')}

                  >

                    <option value="">Selecione</option>

                    {orgaoOpcoes.map((opt) => (

                      <option key={opt.value} value={opt.value}>

                        {opt.label}

                      </option>

                    ))}

                  </select>

                  <div className="invalid-feedback">Selecione o convênio.</div>

                </div>

              </div>

            </div>



            <div className={`nn-sim-form__accept${fieldInvalid(aceite) ? ' nn-sim-form__accept--invalid' : ''}`}>

              <label className="nn-sim-form__accept-label">

                <input

                  type="checkbox"

                  className="nn-sim-form__accept-input"

                  checked={aceite}

                  onChange={(e) => setAceite(e.target.checked)}

                />

                <span className="nn-sim-form__accept-box" aria-hidden="true" />

                <span className="nn-sim-form__accept-text">

                  Li e aceito a{' '}

                  <a href="#/privacidade">Política de Privacidade</a> e os{' '}

                  <a href="#/termos">Termos de Uso</a>.

                </span>

              </label>

              {fieldInvalid(aceite) && (

                <p className="nn-sim-form__accept-error">Marque o aceite para continuar.</p>

              )}

            </div>



            <button type="submit" className="theme-btn theme-btn-lg w-100 nn-sim-form__submit">

              Solicitar simulação <i className="arrow_right-up" aria-hidden="true" />

            </button>

          </form>

        </Reveal>

      </div>

    </section>

  )

}


