import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate =0;

const HomePage = async () =>{

    const products = await getProducts({ isFeatured:true})
    const billboard = await getBillboards("6db1e119-58e0-4762-8c4d-2d7344134340");
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