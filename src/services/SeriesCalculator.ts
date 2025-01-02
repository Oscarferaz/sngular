export class SeriesCalculator {
    /**
     * Calcula el término n de la serie
     * @param n El número natural
     * @returns El término n de la serie
     */
    static getTerm(n: number): number {
      if (n === 0  || !Number.isInteger(n)) {
        throw new Error("El valor de n deber ser mayor a 0");
      }
  
      const prime = this.getNthPrime(n + 3);  
      const triangular = this.getTriangularNumber(n - 1);
      const fibonacci = this.getFibonacciNumber(n - 2);
     
  
      if (fibonacci === 0) {
        throw new Error("División por cero: Fibonacci(n-2) es igual a 0");
      }
  
      return (prime * triangular) / fibonacci;
    }
  
    /**
     * Calcula el n-ésimo número primo
     * @param n El índice del número primo a obtener
     * @returns El n-ésimo número primo
     */
    private static getNthPrime(n: number): number {
      const primes: number[] = [];
      let candidate = 2;
  
      while (primes.length < n) {
        if (this.isPrime(candidate)) {
          primes.push(candidate);
        }
        candidate++;
      }

      return primes[n - 1];
    }
  
    /**
     * Verifica si un número es primo
     * @param num El número a verificar
     * @returns Verdadero si es primo, falso en caso contrario
     */
    private static isPrime(num: number): boolean {
      if (num < 2) return false;
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    /**
     * Calcula el número triangular para un índice dado
     * @param n El índice del número triangular
     * @returns El número triangular
     */
    private static getTriangularNumber(n: number): number {
      return (n * (n + 1)) / 2;
    }
  
    /**
     * Calcula el n-ésimo número de Fibonacci
     * @param n El índice del número de Fibonacci
     * @returns El número de Fibonacci
     */
    private static getFibonacciNumber(n: number): number {
      if (n < 0)  throw new Error("Fibonacci(n-2) es menor a 0");
      if (n === 0) return 0;
      if (n === 1) return 1;
  
      let a = 0;
      let b = 1;
  
      for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
      }

      return b;
    }
  }
  