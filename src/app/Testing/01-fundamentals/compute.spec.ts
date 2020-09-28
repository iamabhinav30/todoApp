// describe() //suitee

// it() //spec or test

import { compute } from './compute'

describe('compute', () => {
  it('should return zero if input is nevative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  })

  it('should increment the input if it is positive', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  })

})
