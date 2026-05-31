import { TopNavBar } from "@/components/shared/TopNavBar";
import { Footer } from "@/components/shared/Footer";
import { ProductDetailClient } from "./ProductDetailClient";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params;
  
  // In a real app, fetch from NestJS using resolvedParams.slug
  const mockProduct = {
    slug: resolvedParams.slug,
    name: "Freeman Seating System",
    brand: "MINOTTI",
    price: "$8,500",
    description: "The Freeman seating system encapsulates the elegance of Italian design. Combining soft curves with structural rigidity, it provides unparalleled comfort while serving as the visual anchor of any modern living space. Crafted with premium fabrics and high-density foam for lasting durability.",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540574163026-643ea20d592e?auto=format&fit=crop&w=1200&q=80"
    ],
    dimensions: "W: 240cm x D: 105cm x H: 85cm",
    materials: "Premium Italian Leather, Walnut Base, High-density polyurethane foam.",
    delivery: "Ships within 4-6 weeks. White glove delivery available."
  };

  return (
    <>
      <TopNavBar />
      <main className="min-h-screen bg-surface">
        <ProductDetailClient product={mockProduct} />
      </main>
      <Footer />
    </>
  );
}
