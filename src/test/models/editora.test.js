import { describe, expect } from '@jest/globals';
import Editora from '../../models/editora.js';

describe('Testando o modelo Editora', () => {
  const objEditora = {
    nome: 'CDC',
    cidade: 'São Paulo',
    email: 'c@c.com',
  };

  it('Deve instanciar uma nova editora', () => {
    const editora = new Editora(objEditora);

    expect(editora).toEqual(
      expect.objectContaining(objEditora),
    );
  });
});
