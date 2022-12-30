import { Text } from "../Text";
import { Modal } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Container, OkButton } from "./styles";
import { CheckCircle } from "../Icons/CheckCircle";

interface OrderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({
  visible,
  onOk,
}: OrderConfirmedModalProps) {
  return (
    <>
      <Modal visible={visible} animationType="slide">
        <StatusBar style="light" backgroundColor="#d73035" />
        <Container>
          <CheckCircle />
          <Text size={20} weight="600" color="#FFF" style={{ marginTop: 12 }}>
            Pedido Confirmado
          </Text>
          <Text opacity={0.9} color="#FFF" style={{ marginTop: 4 }}>
            O pedido já entrou na fila de espera
          </Text>

          <OkButton onPress={onOk}>
            <Text color="#d73035" weight="600">
              OK
            </Text>
          </OkButton>
        </Container>
      </Modal>
    </>
  );
}
