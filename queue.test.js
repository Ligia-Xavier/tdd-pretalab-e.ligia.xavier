const Queue = require('./queue.js')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue()

    expect(queue.size()).toEqual(0)
    queue.enqueue('item 1')
    queue.enqueue('item 2')
    queue.enqueue('item 3')

    expect(queue.size()).toEqual(3)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue()
    
    queue.enqueue('item 1')
    expect(queue.elements).toEqual(['item 1'])
    expect(queue.size()).toEqual(1)
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue()
    
    queue.enqueue('item 1')
    queue.enqueue('item 2')

    const itemEscolhido = queue.peek()

    expect(itemEscolhido).toEqual('item 1')
    expect(queue.elements).toEqual(['item 1','item 2'])
    expect(queue.size()).toEqual(2)
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue()
    
    queue.enqueue('item 1')
    queue.enqueue('item 2')


    const itemRemovido = queue.dequeue()

    expect(itemRemovido).toEqual('item 1')
    expect(queue.elements).toEqual(['item 2'])
    expect(queue.size()).toEqual(1)
  })

  it('Deve retornar undefined quando a fila estiver vazia', () => {
    const queue = new Queue()

    expect(queue.dequeue()).toBeUndefined()
    expect(queue.peek()).toBeUndefined()
    expect(queue.size()).toEqual(0)
  })
})