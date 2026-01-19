import { ReactNode } from 'react';

// Importa os shells dos produtos
import { FinanceShell } from '@multiproduct/finance';
import { OperationsShell } from '@multiproduct/operations';

type ProductName = 'finance' | 'operations';

interface ProductProps {
    product: ProductName;
    children: ReactNode;
}

export function ProductResolver({ product, children }: ProductProps) {
    switch (product) {
        case 'finance':
            return <FinanceShell>{children}</FinanceShell>;
        case 'operations':
            return <OperationsShell>{children}</OperationsShell>;
        default:
            return <div>Product not found</div>;
    }
}
