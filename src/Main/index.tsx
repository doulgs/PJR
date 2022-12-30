import { useState } from "react";
import { Menu } from "../components/Menu";
import { Cart } from "../components/Cart";
import { Product } from "../types/Product";
import { CartItem } from "../types/CartItem";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { TableModal } from "../components/TableModal";
import { Categories } from "../components/Categories";

import {
  Container,
  CategoriesContainer,
  ManuContainer,
  Footer,
  FooterContainer,
} from "./styles";

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedtable, setSelectedtable] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function handleSaveTable(table: string) {
    setSelectedtable(table);
  }

  function handleResetOrder() {
    setSelectedtable("");
    setCartItems([]);
  }

  function handleAddToCart(product: Product) {
    if (!selectedtable) {
      setIsTableModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItems) => cartItems.product._id === product._id
      );
      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const newCarItem = [...prevState];
      const item = newCarItem[itemIndex];

      newCarItem[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCarItem;
    });
  }

  function handleDecrementCartItem(product: Product) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItems) => cartItems.product._id === product._id
      );
      const item = prevState[itemIndex];
      const newCarItem = [...prevState];

      if (item.quantity === 1) {
        newCarItem.splice(itemIndex, 1);

        return newCarItem;
      }

      newCarItem[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCarItem;
    });
  }

  return (
    <>
      <Container>
        <Header
          selectedtable={selectedtable}
          onCancelOrder={handleResetOrder}
        />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <ManuContainer>
          <Menu onAddToCart={handleAddToCart} />
        </ManuContainer>
      </Container>

      <FooterContainer>
        <Footer>
          {!selectedtable && (
            <Button onPress={() => setIsTableModalVisible(true)}>
              Novo Pedido
            </Button>
          )}

          {selectedtable && (
            <Cart
              cartItems={cartItems}
              onAdd={handleAddToCart}
              onDecrement={handleDecrementCartItem}
              onConfirmOrder={handleResetOrder}
            />
          )}
        </Footer>
      </FooterContainer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
}
