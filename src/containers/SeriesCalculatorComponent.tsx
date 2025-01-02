import { useEffect } from 'react';
import { SeriesCalculator } from '../services/SeriesCalculator';

type SeriesCalculatorComponentProps = {
  n: number;
  onResult: (result: string) => void;
};

export const SeriesCalculatorComponent: React.FC<SeriesCalculatorComponentProps> = ({ n, onResult }) => {

    useEffect(() => {
        try{
            const result = SeriesCalculator.getTerm(n);
            onResult('El término de la serie es: ' + result);
        }catch(error){
            if (error instanceof Error) {
                onResult(error.message);
            } 
        }
       
    }, [n, onResult]);

  return null;
};
