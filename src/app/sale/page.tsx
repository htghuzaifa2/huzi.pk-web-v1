
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import products from '@/data/products.json';
import { Product } from '@/lib/types'; // Assuming types are here, or I will infer
import ProductCard from '@/components/product-card';

// Temporarily define Product type if not easily importable, but better to use component
// Actually I see product-card.tsx exists, I should reuse it.
// I'll read product-card.tsx first to see its props.

export const metadata: Metadata = {
    title: 'Flash Sale | Double the Deals, Half the Price!',
    description: 'Exclusive Flash Sales: You May see 1 product twice dont miss out buy it fast it may be removed or delete because we dont add sale on our crunt products from now own if we want to add sale we add te product again with disocunted price so dont miss out any sale bookmark webiste now...',
};

export default function SalePage() {
    // Logic to "duplicate" products to simulating the "see 1 product twice" idea or just showing all
    // For now, let's just show a selection of products as "Sale" items. 
    // The user said: "You May see 1 product twice... if we want to add sale we add te product again with disocunted price"
    // So I will just map the existing products for now, maybe shuffle or duplicate some to give that "chaotic sale" feel?
    // Or just list them all. Let's list the first 12 products.

    const saleProducts = products.slice(0, 12);

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 sm:py-32">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="container relative z-10 text-center">
                    <Badge variant="secondary" className="mb-4 text-lg px-4 py-1 animate-pulse">
                        ⚠️ FLASH SALE ALERT
                    </Badge>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                        DOUBLE THE DEALS <br />
                        <span className="text-secondary-foreground bg-yellow-400 px-2 rotate-1 inline-block transform origin-bottom-left text-black">
                            HALF THE PRICE!
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl sm:text-2xl opacity-90 mb-8 font-light">
                        You may see 1 product twice! Don't miss out, buy it fast.
                        It may be removed or deleted at any moment.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" variant="secondary" className="font-bold text-lg h-12 px-8" asChild>
                            <Link href="#deals">Shop Now</Link>
                        </Button>
                    </div>
                    <p className="mt-6 text-sm opacity-75 max-w-lg mx-auto">
                        *We don't add sale on our current products from now on. If we want to add a sale, we add the product again with a discounted price. So don't miss out — bookmark now!
                    </p>
                </div>
            </section>

            {/* Sale Grid */}
            <section id="deals" className="py-16 container">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-bold">Hot Deals 🔥</h2>
                    <div className="text-sm text-muted-foreground">Limited Time Offers</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {saleProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                    {/* Duplicating a few for the "see twice" effect */}
                    {saleProducts.slice(0, 4).map((product) => (
                        <ProductCard key={`dup-${product.id}`} product={{ ...product, id: 9999 + product.id, price: Math.floor(product.price * 0.8), name: `[SALE] ${product.name}` }} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="mb-6 text-muted-foreground">Don't see what you're looking for?</p>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/all-products">View All Products</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
