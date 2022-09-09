import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";
import {products} from "../data/products";

const product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <br/>
            <ProductCard
                product={product}
                key={product.id}
                initialValues={{
                   count: 3,
                   maxCount: 10
                }}
            >
                {
                    ({reset, count, handleCounter, maxCount, isMaxCountReached}) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons />
                        </>
                    )
                }
            </ProductCard>
        </div>
    )
}
