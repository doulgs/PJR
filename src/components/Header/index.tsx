import { Text } from "../Text";
import { TouchableOpacity } from "react-native";
import { Container, Content, OrderHeader, Table } from "./styles";

interface HeaderProps {
  selectedtable: string;
  onCancelOrder: () => void;
}

export function Header({ selectedtable, onCancelOrder }: HeaderProps) {
  return (
    <Container>
      {!selectedtable && (
        <>
          <Text size={14} opacity={0.9}>
            Bem Vindo
          </Text>
          <Text size={24} weight="700">
            DELIVERY
            <Text>APP</Text>
          </Text>
        </>
      )}

      {selectedtable && (
        <>
          <Content>
            <OrderHeader>
              <Text size={24} weight="600">
                Pedido
              </Text>
              <TouchableOpacity onPress={onCancelOrder}>
                <Text size={14} weight="600" color="#d73035">
                  cancelar pedido
                </Text>
              </TouchableOpacity>
            </OrderHeader>

            <Table>
              <Text color="#666">Mesa {selectedtable}</Text>
            </Table>
          </Content>
        </>
      )}
    </Container>
  );
}
