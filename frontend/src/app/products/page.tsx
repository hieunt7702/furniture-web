import { TopNavBar } from "@/components/shared/TopNavBar";
import { Footer } from "@/components/shared/Footer";
import { ProductsClient } from "./ProductsClient";
import { PartnershipSection } from "@/components/home/PartnershipSection";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await searchParams;
  const initialBrand = typeof resolvedParams.brand === "string" ? resolvedParams.brand : "All";

  return (
    <>
      <TopNavBar />
      <main className="min-h-screen pt-24 pb-section-gap flex flex-col gap-12">
        <PartnershipSection />
        <ProductsClient initialBrand={initialBrand} />
      </main>
      <Footer />
    </>
  );
}
