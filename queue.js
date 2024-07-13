class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  size(){
    return this.elements.length;
  }

  enqueue(element) {
   return this.elements.push(element); 
}

peek() {
  if (this.elements.length === 0) {
    return undefined; // Caso a fila esteja vazia
  }
  return this.elements[0]; // Retorna primeiro item
}

dequeue() {
  if (this.elements.length === 0) {
    return undefined; // Caso a fila esteja vazia
  }
  return this.elements.shift(); // Remove e retorna primeiro item
}
}

module.exports = Queue;

