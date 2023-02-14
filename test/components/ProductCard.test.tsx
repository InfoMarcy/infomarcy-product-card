import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';


describe('Pruebas en ProductImage', () => {
  test('debe de mostrar el componente correctamente con el producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <h1>Hola Mundo</h1>}</ProductCard>
    );
    // console.log(wrapper.toJSON());
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de incrementar el contador', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}></button>
          </>
        )}
      </ProductCard>
    );
    let tree = wrapper.toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();

    act(() => {
        (tree as any).children[2].props.onClick();
    })

   
    tree = wrapper.toJSON();
    expect((tree as any).children[1].children[0]).toBe("1");
  });
});
