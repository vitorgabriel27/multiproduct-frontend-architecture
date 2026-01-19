import { ReactNode } from 'react';

import FinanceLayout from '../../../../products/finance/app/layout';
import OperationsLayout from '../../../products/operations/app/layout';

type ProductName = 'finance' | 'operations';

interface ProductProps {
    product: ProductName;
    children: ReactNode;
}

export function ProductResolver({ product, children }: ProductProps) {
    switch (product) {
        case 'finance':
            return <FinanceLayout>{children}</FinanceLayout>;
        case 'operations':
            return <OperationsLayout>{children}</OperationsLayout>;
        default:
            return <div>Product not found</div>;
    }
}
