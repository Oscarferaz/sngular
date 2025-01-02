import { SeriesCalculator } from "../services/SeriesCalculator";
import { describe, test, expect } from "@jest/globals";

describe('SeriesCalculator', () => {
    test('calculates the correct term for n = 0', () => {
        expect(() => SeriesCalculator.getTerm(0)).toThrow(new Error("El valor de n deber ser mayor a 0"));
    });

    test('calculates the correct term for n = 1', () => {
        expect(() => SeriesCalculator.getTerm(1)).toThrow(new Error("Fibonacci(n-2) es menor a 0"));
    });
    
    test('calculates the correct term for n = 3', () => {
        expect(SeriesCalculator.getTerm(3)).toBeCloseTo(39, 5);
    });

    test('calculates the correct term for n = 4', () => {
        expect(SeriesCalculator.getTerm(4)).toBeCloseTo(102, 5);
    });

    test('calculates the correct term for n = 5', () => {
        expect(SeriesCalculator.getTerm(5)).toBeCloseTo(95, 5);
    });

    test('calculates the correct term for n = 6', () => {
        expect(SeriesCalculator.getTerm(6)).toBeCloseTo(115, 5);
    });

    test('calculates the correct term for n = 7', () => {
        expect(SeriesCalculator.getTerm(7)).toBeCloseTo(121.8, 5);
    });

    test('calculates the correct term for n = 8', () => {
        expect(SeriesCalculator.getTerm(8)).toBeCloseTo(108.5, 5);
    });

    test('calculates the correct term for n = 9', () => {
        expect(SeriesCalculator.getTerm(9)).toBeCloseTo(102.46153846153847, 5);
    });
});
