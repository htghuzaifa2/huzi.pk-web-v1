
import { Metadata } from 'next';
import products from '@/data/products.json';
import SaleClient from './sale-client';

// Force dynamic rendering so that the randomization happens on every request
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Flash Sale | Double the Deals, Half the Price!',
    description: 'Exclusive Flash Sales: You May see 1 product twice dont miss out buy it fast it may be removed or delete because we dont add sale on our crunt products from now own if we want to add sale we add te product again with disocunted price so dont miss out any sale bookmark webiste now...',
};

export default function SalePage() {
    // 1. Shuffle algorithm (Fisher-Yates) to randomize the products array
    const shuffledProducts = [...products];
    for (let i = shuffledProducts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledProducts[i], shuffledProducts[j]] = [shuffledProducts[j], shuffledProducts[i]];
    }

    // 2. Select a subset of products (e.g., first 16)
    const baseSelection = shuffledProducts.slice(0, 16);

    // 3. Create "duplicates" to mimic the "see 1 product twice" chaos
    const duplicates = [];
    const usedIndices = new Set<number>();

    // Pick 6 unique indices from the baseSelection to duplicate (increased chaos)
    while (duplicates.length < 6 && baseSelection.length > 0) {
        const randomIndex = Math.floor(Math.random() * baseSelection.length);
        if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            const original = baseSelection[randomIndex];
            // Random discount between 20% and 50%
            const discountFactor = 0.5 + Math.random() * 0.3;
            duplicates.push({
                ...original,
                id: 99000 + original.id + Math.floor(Math.random() * 10000),
                price: Math.floor(original.price * discountFactor),
                name: `[⚡FLASH] ${original.name}`
            });
        }
        if (usedIndices.size === baseSelection.length) break;
    }

    // 4. Combine and shuffle again
    const finalSaleList = [...baseSelection, ...duplicates];
    for (let i = finalSaleList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [finalSaleList[i], finalSaleList[j]] = [finalSaleList[j], finalSaleList[i]];
    }

    return <SaleClient products={finalSaleList} />;
}
