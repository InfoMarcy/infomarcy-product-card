import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product1 } from '../data/products';

describe('Pruebas en ProductImage', () => {
  test('debe de mostrar el componente correctamente con imagen personalizad', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://image.jpg" className="custom-class" />
    );
    // console.log(wrapper.toJSON());
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar el componente la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
