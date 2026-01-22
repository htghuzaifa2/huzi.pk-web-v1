
import { Metadata } from 'next';
import products from '@/data/products.json';
import SaleClient from './sale-client';

// Removed 'force-dynamic' to be compatible with output: export
// export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Flash Sale | Double the Deals, Half the Price!',
    description: 'Exclusive Flash Sales: You May see 1 product twice dont miss out buy it fast it may be removed or deleted...',
};

export default function SalePage() {
    // Provide a stable initial list for static generation (e.g., first 12 items)
    // This avoids hydration mismatch on first visual paint, 
    // and then the client useEffect will takes over to "glitch"/shuffle the list.
    const initialProducts = products.slice(0, 16);

    return <SaleClient initialProducts={initialProducts} allProducts={products} />;
}
