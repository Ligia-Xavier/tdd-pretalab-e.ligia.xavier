const soma = require('./soma')

describe('Soma', () => {
  it('deverá somar dois números inteiros', () => {
expect(soma(12,4)).toBe(16)
  })
})