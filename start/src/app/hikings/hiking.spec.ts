import { Hiking } from './hiking';

describe('Hiking', () => {
  it('should create an instance', () => {
    expect(new Hiking('title', '2 rue des abricotiers, 63000 Clermont-Ferrand', 'description courte', 230, 420)).toBeTruthy();
  });
});
