const Calculadora = require('./calculadora')

describe('Calculadora', () => {
  it('Deverá retornar a soma de dois números', () => {
    const calculadora = new Calculadora()
    
    expect (calculadora.soma(12,4)).toEqual(16)
    
  })

  it('Deverá retornar a subtração de dois números', () => {
    const calculadora = new Calculadora()
    
    expect (calculadora.subtracao(12,4)).toEqual(8)
    
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    const calculadora = new Calculadora()
    
    expect (calculadora.multiplicacao(12,4)).toEqual(48)
  })

  it('Deverá retornar a divisao entre dois números', () => {
    const calculadora = new Calculadora()
    
    expect (calculadora.divisao(12,4)).toEqual(3)
  })
})