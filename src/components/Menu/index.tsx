import { Text } from "../Text";
import { useState } from "react";
import { FlatList } from "react-native";
import { Product } from "../../types/Product";
import { ProductModal } from "../ProductModal";
import { products } from "../../mocks/products";
import { PlusCircle } from "../Icons/PlusCircle";
import { formatCurrency } from "../../utils/formatCurrency";
import {
  Image,
  ProductContainer,
  ProductDetails,
  Separator,
  AddToCartButton,
} from "./styles";

interface MenuProps {
  onAddToCart: (product: Product) => void;
}

export function Menu({ onAddToCart }: MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />

      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={(products) => products._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
            <Image
              source={{
                uri: product.uri,
              }}
            />

            <ProductDetails>
              <Text weight="600">{product.name}</Text>

              <Text size={14} color="#666" style={{ marginVertical: 8 }}>
                {product.description}
              </Text>

              <Text weight="600" size={14}>
                {formatCurrency(product.price)}
              </Text>
            </ProductDetails>

            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      />
    </>
  );
}
