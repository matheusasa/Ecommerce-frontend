import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate =0;

const HomePage = async () =>{

    const products = await getProducts({ isFeatured:true})
    const billboard = await getBillboards("d3339a36-d42b-4fba-99e5-2995f6a4bc30");
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Lancamento de produtos" items={products}/>
            </div>
            </div>
        </Container>
    )
}

export default HomePage;
