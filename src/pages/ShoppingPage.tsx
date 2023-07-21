import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

import { products } from "../data/products";


const product = products[0];

export const ShoppingPage = () => {


  return (
    <div >
      <h2 >Shopping Store</h2>
      <hr />

        <ProductCard
          key={product.id}
          product={product}
          initialValues={{
            count: 5,
            // maxCount: 9
          }}
        >
          {
            ( {reset, count, maxCount, increaseBy, isMaxCountReached }) => (
              <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
              </>
            )
          }
        </ProductCard>

        {/* <ProductCard
          product={product1}
          className={'bg-dark text-white'}
        >
          <ProductCard.Image className={'custom-image'} style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
          <ProductCard.Title className={"text-white text-bold"} />
          <ProductCard.Buttons className="custom-buttons"
            style={{
              display: 'flex',
              justifyContent: 'end'
            }} />
        </ProductCard> */}

        {/* <ProductCard
          product={product}
          className={'bg-dark text-white'}>
          <ProductImage className={'custom-image'} style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
          <ProductTitle className={"text-white text-bold"} title="Amadeus Coffee" />
          <ProductButtons className="custom-buttons"
            style={{
              display: 'flex',
              justifyContent: 'end'
            }} />
        </ProductCard> */}

        {/* <ProductCard
          product={product}
          style={{ backgroundColor: '#70D1F8' }}
        >
          <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
          <ProductTitle title="Amadeus Coffee 1" style={{
            fontWeight: 'bold'
          }} />
          <ProductButtons style={{
            display: 'flex',
            justifyContent: 'end'
          }} />
        </ProductCard> */}

    </div>
  )
}
