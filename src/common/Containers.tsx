import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../assets/Colors';

export const SafeArea = styled(SafeAreaView)`
  background-color: ${Colors.darkGray};
  width: 100%;
  min-height: 100%;
  align-items: center;
  flex: 1;
`;

export const StartContainer = styled.View`
  top: 40%;
`;

export const HeadingContainer = styled.View`
  padding-vertical: 31px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const CenteredRow = styled(Row)`
  justify-content: center;
`;
