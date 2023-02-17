import { colorExpenses } from '../../components/Statistics/Statistics';

export const handleColor = (name) => {    
    for (const item of colorExpenses) {
        if (name === item.name) {
            const color = item.color;
            console.log('color>>>>>', color);
            return color;
        }
    }    
}