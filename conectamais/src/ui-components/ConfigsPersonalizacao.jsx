/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Button,
  Flex,
  Icon,
  Image,
  SelectField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function ConfigsPersonalizacao(props) {
  const { bancoImagens, overrides, ...rest } = props;
  return (
    <View
      width="1519px"
      height="1117px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundImage="linear-gradient(-90deg, rgba(22,70,89,1), rgba(18,135,181,1))"
      {...getOverrideProps(overrides, "ConfigsPersonalizacao")}
      {...rest}
    >
      <Image
        width="100%"
        height="83.89%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="16.11%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        objectFit="unset"
        {...getOverrideProps(overrides, "BackDaHome")}
      ></Image>
      <Flex
        gap="40px"
        direction="row"
        width="1519px"
        height="118px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(15,45,57,1)"
        {...getOverrideProps(overrides, "NavBarHeaderConecta")}
      >
        <Flex
          gap="40px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 3214376835")}
        >
          <Icon
            width="20px"
            height="20px"
            viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
            paths={[
              {
                d: "M7.26368 20L6.86567 16.8C6.65008 16.7167 6.44693 16.6167 6.25622 16.5C6.06551 16.3833 5.87894 16.2583 5.69652 16.125L2.73632 17.375L0 12.625L2.56219 10.675C2.54561 10.5583 2.53731 10.4458 2.53731 10.3375L2.53731 9.6625C2.53731 9.55417 2.54561 9.44167 2.56219 9.325L0 7.375L2.73632 2.625L5.69652 3.875C5.87894 3.74167 6.06965 3.61667 6.26866 3.5C6.46766 3.38333 6.66667 3.28333 6.86567 3.2L7.26368 0L12.7363 0L13.1343 3.2C13.3499 3.28333 13.5531 3.38333 13.7438 3.5C13.9345 3.61667 14.1211 3.74167 14.3035 3.875L17.2637 2.625L20 7.375L17.4378 9.325C17.4544 9.44167 17.4627 9.55417 17.4627 9.6625L17.4627 10.3375C17.4627 10.4458 17.4461 10.5583 17.4129 10.675L19.9751 12.625L17.2388 17.375L14.3035 16.125C14.1211 16.2583 13.9303 16.3833 13.7313 16.5C13.5323 16.6167 13.3333 16.7167 13.1343 16.8L12.7363 20L7.26368 20ZM9.00497 18L10.9701 18L11.3184 15.35C11.8325 15.2167 12.3093 15.0208 12.7488 14.7625C13.1882 14.5042 13.5904 14.1917 13.9552 13.825L16.4179 14.85L17.3881 13.15L15.2488 11.525C15.3317 11.2917 15.3897 11.0458 15.4229 10.7875C15.4561 10.5292 15.4726 10.2667 15.4726 10C15.4726 9.73333 15.4561 9.47083 15.4229 9.2125C15.3897 8.95417 15.3317 8.70833 15.2488 8.475L17.3881 6.85L16.4179 5.15L13.9552 6.2C13.5904 5.81667 13.1882 5.49583 12.7488 5.2375C12.3093 4.97917 11.8325 4.78333 11.3184 4.65L10.995 2L9.02985 2L8.68159 4.65C8.1675 4.78333 7.69071 4.97917 7.25124 5.2375C6.81177 5.49583 6.40962 5.80833 6.04478 6.175L3.58209 5.15L2.61194 6.85L4.75124 8.45C4.66832 8.7 4.61028 8.95 4.57711 9.2C4.54395 9.45 4.52736 9.71667 4.52736 10C4.52736 10.2667 4.54395 10.525 4.57711 10.775C4.61028 11.025 4.66832 11.275 4.75124 11.525L2.61194 13.15L3.58209 14.85L6.04478 13.8C6.40962 14.1833 6.81177 14.5042 7.25124 14.7625C7.69071 15.0208 8.1675 15.2167 8.68159 15.35L9.00497 18ZM10.0498 13.5C11.0116 13.5 11.8325 13.1583 12.5124 12.475C13.1924 11.7917 13.5323 10.9667 13.5323 10C13.5323 9.03333 13.1924 8.20833 12.5124 7.525C11.8325 6.84167 11.0116 6.5 10.0498 6.5C9.07131 6.5 8.24627 6.84167 7.57463 7.525C6.90298 8.20833 6.56716 9.03333 6.56716 10C6.56716 10.9667 6.90298 11.7917 7.57463 12.475C8.24627 13.1583 9.07131 13.5 10.0498 13.5Z",
                fill: "rgba(232,234,237,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector4376836")}
          ></Icon>
          <Icon
            width="20px"
            height="20px"
            viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
            paths={[
              {
                d: "M10 4C9.38889 4 8.86574 3.80417 8.43056 3.4125C7.99537 3.02083 7.77778 2.55 7.77778 2C7.77778 1.45 7.99537 0.979167 8.43056 0.5875C8.86574 0.195833 9.38889 0 10 0C10.6111 0 11.1343 0.195833 11.5694 0.5875C12.0046 0.979167 12.2222 1.45 12.2222 2C12.2222 2.55 12.0046 3.02083 11.5694 3.4125C11.1343 3.80417 10.6111 4 10 4ZM6.66667 20L6.66667 7L0 7L0 5L20 5L20 7L13.3333 7L13.3333 20L11.1111 20L11.1111 14L8.88889 14L8.88889 20L6.66667 20Z",
                fill: "rgba(242,242,242,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector4376837")}
          ></Icon>
          <Icon
            width="20px"
            height="20px"
            viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
            paths={[
              {
                d: "M0 8.02993C0 6.36741 0.370833 4.84206 1.1125 3.45387C1.85417 2.06567 2.85 0.914381 4.1 0L5.275 1.59601C4.275 2.32751 3.47917 3.25021 2.8875 4.36409C2.29583 5.47797 2 6.69992 2 8.02993L0 8.02993ZM18 8.02993C18 6.69992 17.7042 5.47797 17.1125 4.36409C16.5208 3.25021 15.725 2.32751 14.725 1.59601L15.9 0C17.15 0.914381 18.1458 2.06567 18.8875 3.45387C19.6292 4.84206 20 6.36741 20 8.02993L18 8.02993ZM2 17.0075L2 15.0125L4 15.0125L4 8.02993C4 6.65004 4.41667 5.42394 5.25 4.35162C6.08333 3.2793 7.16667 2.57689 8.5 2.24439L8.5 1.54613C8.5 1.13051 8.64583 0.777224 8.9375 0.486284C9.22917 0.195345 9.58333 0.0498753 10 0.0498753C10.4167 0.0498753 10.7708 0.195345 11.0625 0.486284C11.3542 0.777224 11.5 1.13051 11.5 1.54613L11.5 2.24439C12.8333 2.57689 13.9167 3.2793 14.75 4.35162C15.5833 5.42394 16 6.65004 16 8.02993L16 15.0125L18 15.0125L18 17.0075L2 17.0075ZM10 20C9.45 20 8.97917 19.8047 8.5875 19.414C8.19583 19.0233 8 18.5536 8 18.005L12 18.005C12 18.5536 11.8042 19.0233 11.4125 19.414C11.0208 19.8047 10.55 20 10 20ZM6 15.0125L14 15.0125L14 8.02993C14 6.93267 13.6083 5.99335 12.825 5.21197C12.0417 4.43059 11.1 4.0399 10 4.0399C8.9 4.0399 7.95833 4.43059 7.175 5.21197C6.39167 5.99335 6 6.93267 6 8.02993L6 15.0125Z",
                fill: "rgba(242,242,242,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector4376838")}
          ></Icon>
          <Icon
            width="20px"
            height="20px"
            viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
            paths={[
              {
                d: "M9.95 16C10.3 16 10.5958 15.8792 10.8375 15.6375C11.0792 15.3958 11.2 15.1 11.2 14.75C11.2 14.4 11.0792 14.1042 10.8375 13.8625C10.5958 13.6208 10.3 13.5 9.95 13.5C9.6 13.5 9.30417 13.6208 9.0625 13.8625C8.82083 14.1042 8.7 14.4 8.7 14.75C8.7 15.1 8.82083 15.3958 9.0625 15.6375C9.30417 15.8792 9.6 16 9.95 16ZM9.05 12.15L10.9 12.15C10.9 11.6 10.9625 11.1667 11.0875 10.85C11.2125 10.5333 11.5667 10.1 12.15 9.55C12.5833 9.11667 12.925 8.70417 13.175 8.3125C13.425 7.92083 13.55 7.45 13.55 6.9C13.55 5.96667 13.2083 5.25 12.525 4.75C11.8417 4.25 11.0333 4 10.1 4C9.15 4 8.37917 4.25 7.7875 4.75C7.19583 5.25 6.78333 5.85 6.55 6.55L8.2 7.2C8.28333 6.9 8.47083 6.575 8.7625 6.225C9.05417 5.875 9.5 5.7 10.1 5.7C10.6333 5.7 11.0333 5.84583 11.3 6.1375C11.5667 6.42917 11.7 6.75 11.7 7.1C11.7 7.43333 11.6 7.74583 11.4 8.0375C11.2 8.32917 10.95 8.6 10.65 8.85C9.91667 9.5 9.46667 9.99167 9.3 10.325C9.13333 10.6583 9.05 11.2667 9.05 12.15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z",
                fill: "rgba(242,242,242,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector4376839")}
          ></Icon>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="271px"
          height="38px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 17px 0px"
          {...getOverrideProps(overrides, "Frame 322")}
        >
          <Image
            width="unset"
            height="37px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "logo_branca_conecta 2")}
          ></Image>
        </Flex>
        <Flex
          gap="32px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 3214376842")}
        >
          <Button
            width="165px"
            height="30px"
            shrink="0"
            backgroundColor="rgba(211,152,74,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Entrar"
            {...getOverrideProps(overrides, "Button4376843")}
          ></Button>
          <Button
            width="165px"
            height="30px"
            border="1px SOLID rgba(242,206,174,1)"
            shrink="0"
            backgroundColor="rgba(0,0,0,0.1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Cadastrar-se"
            {...getOverrideProps(overrides, "Button4376844")}
          ></Button>
        </Flex>
      </Flex>
      <SelectField
        width="433px"
        height="100px"
        label="Fonte"
        placeholder="Montserrat"
        position="absolute"
        top="716px"
        left="834px"
        size="large"
        isDisabled={true}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField40981704")}
      ></SelectField>
      <Text
        fontFamily="Montserrat"
        fontSize="48px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="58.512001037597656px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="439px"
        height="117px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="360px"
        left="808px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Personalizando sua experiência"
        {...getOverrideProps(overrides, "Personalizando sua experi\u00EAncia")}
      ></Text>
      <SelectField
        width="432px"
        height="101px"
        label="Cor de fundo"
        placeholder="Cor padrão: #164659"
        position="absolute"
        top="569px"
        left="833.5px"
        size="large"
        isDisabled={true}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField40981746")}
      ></SelectField>
      <Flex
        gap="40px"
        direction="row"
        width="1519px"
        height="62px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="118px"
        left="0px"
        boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(239,204,139,1)"
        {...getOverrideProps(overrides, "NavBarMenu")}
      >
        <Flex
          gap="32px"
          direction="row"
          width="274px"
          height="36px"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 3214329877")}
        >
          <Button
            width="70px"
            height="28px"
            shrink="0"
            backgroundColor="rgba(0,0,0,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Perfil"
            {...getOverrideProps(overrides, "Button4329878")}
          ></Button>
          <Button
            width="70px"
            height="28px"
            shrink="0"
            backgroundColor="rgba(0,0,0,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Vagas"
            {...getOverrideProps(overrides, "Button4329879")}
          ></Button>
          <Button
            width="70px"
            height="28px"
            shrink="0"
            backgroundColor="rgba(0,0,0,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Plus"
            {...getOverrideProps(overrides, "Button4329880")}
          ></Button>
        </Flex>
      </Flex>
      <View
        padding="0px 0px 0px 0px"
        width="435.53px"
        height="588.03px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="355px"
        left="32px"
        {...getOverrideProps(overrides, "Group 451")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="435.53px"
          height="588.03px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Group 383")}
        >
          <View
            width="435.53px"
            height="588.03px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="7px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle 103")}
          ></View>
          <Text
            fontFamily="Montserrat"
            fontSize="30px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="36.56999969482422px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="332.09px"
            height="37.17px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="57px"
            left="88px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Acesso e Segurança"
            {...getOverrideProps(overrides, "Acesso e Seguran\u00E7a")}
          ></Text>
          <Icon
            width="435.53px"
            height="0px"
            viewBox={{ minX: 0, minY: 0, width: 435.53411865234375, height: 1 }}
            paths={[
              {
                d: "M0 0L435.534 0L435.534 -3L0 -3L0 0Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 3,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="139.14px"
            left="0px"
            transformOrigin="top left"
            transform="rotate(0deg)"
            {...getOverrideProps(overrides, "Line 10")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="222.55px"
            height="36.96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="194px"
            left="88px"
            {...getOverrideProps(overrides, "Group 55")}
          >
            <Text
              fontFamily="Montserrat"
              fontSize="30px"
              fontWeight="600"
              color="rgba(0,0,0,1)"
              lineHeight="36.56999969482422px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="222.55px"
              height="36.96px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Acessibilidade"
              {...getOverrideProps(overrides, "Acessibilidade")}
            ></Text>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="158.56px"
            height="36.96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="338px"
            left="88px"
            {...getOverrideProps(overrides, "Group 56")}
          >
            <Text
              fontFamily="Montserrat"
              fontSize="30px"
              fontWeight="600"
              color="rgba(0,0,0,1)"
              lineHeight="36.56999969482422px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="158.56px"
              height="36.96px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Aparência"
              {...getOverrideProps(overrides, "Apar\u00EAncia")}
            ></Text>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="332.09px"
            height="36.96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="496px"
            left="88px"
            {...getOverrideProps(overrides, "Group 57")}
          >
            <Text
              fontFamily="Montserrat"
              fontSize="30px"
              fontWeight="600"
              color="rgba(0,0,0,1)"
              lineHeight="36.56999969482422px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="332.09px"
              height="36.96px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Notificação"
              {...getOverrideProps(overrides, "Notifica\u00E7\u00E3o")}
            ></Text>
          </View>
          <Icon
            width="435.53px"
            height="0px"
            viewBox={{ minX: 0, minY: 0, width: 435.53411865234375, height: 1 }}
            paths={[
              {
                d: "M0 0L435.534 0L435.534 -3L0 -3L0 0Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 3,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="276.38px"
            left="0px"
            transformOrigin="top left"
            transform="rotate(0deg)"
            {...getOverrideProps(overrides, "Line 11")}
          ></Icon>
          <Icon
            width="435.53px"
            height="0px"
            viewBox={{ minX: 0, minY: 0, width: 435.53411865234375, height: 1 }}
            paths={[
              {
                d: "M0 0L435.534 0L435.534 -3L0 -3L0 0Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 3,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="428.87px"
            left="0px"
            transformOrigin="top left"
            transform="rotate(0deg)"
            {...getOverrideProps(overrides, "Line 12")}
          ></Icon>
          <Icon
            width="32.67px"
            height="40.03px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 32.66505813598633,
              height: 40.02775192260742,
            }}
            paths={[
              {
                d: "M16.3325 8.00555C15.3344 8.00555 14.48 7.61361 13.7692 6.82974C13.0585 6.04586 12.7031 5.10354 12.7031 4.00278C12.7031 2.90201 13.0585 1.95969 13.7692 1.17582C14.48 0.391938 15.3344 0 16.3325 0C17.3306 0 18.1851 0.391938 18.8958 1.17582C19.6066 1.95969 19.962 2.90201 19.962 4.00278C19.962 5.10354 19.6066 6.04586 18.8958 6.82974C18.1851 7.61361 17.3306 8.00555 16.3325 8.00555ZM10.8884 40.0278L10.8884 14.0097L0 14.0097L0 10.0069L32.6651 10.0069L32.6651 14.0097L21.7767 14.0097L21.7767 40.0278L18.1473 40.0278L18.1473 28.0194L14.5178 28.0194L14.5178 40.0278L10.8884 40.0278Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="188px"
            left="23px"
            {...getOverrideProps(overrides, "Vector4376866")}
          ></Icon>
        </View>
        <View
          width="49px"
          height="42.89px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="57px"
          left="19px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "no_encryption_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1"
          )}
        >
          <View
            width="51px"
            height="66px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="-28px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(
              overrides,
              "lock_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1"
            )}
          >
            <Icon
              width="27.2px"
              height="34.65px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 27.200000762939453,
                height: 34.64999771118164,
              }}
              paths={[
                {
                  d: "M3.4 34.65C2.465 34.65 1.66458 34.3269 0.99875 33.6806C0.332917 33.0344 0 32.2575 0 31.35L0 14.85C0 13.9425 0.332917 13.1656 0.99875 12.5194C1.66458 11.8731 2.465 11.55 3.4 11.55L5.1 11.55L5.1 8.25C5.1 5.9675 5.92875 4.02187 7.58625 2.41312C9.24375 0.804375 11.2483 0 13.6 0C15.9517 0 17.9562 0.804375 19.6138 2.41312C21.2712 4.02187 22.1 5.9675 22.1 8.25L22.1 11.55L23.8 11.55C24.735 11.55 25.5354 11.8731 26.2013 12.5194C26.8671 13.1656 27.2 13.9425 27.2 14.85L27.2 31.35C27.2 32.2575 26.8671 33.0344 26.2013 33.6806C25.5354 34.3269 24.735 34.65 23.8 34.65L3.4 34.65ZM3.4 31.35L23.8 31.35L23.8 14.85L3.4 14.85L3.4 31.35ZM13.6 26.4C14.535 26.4 15.3354 26.0769 16.0012 25.4306C16.6671 24.7844 17 24.0075 17 23.1C17 22.1925 16.6671 21.4156 16.0012 20.7694C15.3354 20.1231 14.535 19.8 13.6 19.8C12.665 19.8 11.8646 20.1231 11.1988 20.7694C10.5329 21.4156 10.2 22.1925 10.2 23.1C10.2 24.0075 10.5329 24.7844 11.1988 25.4306C11.8646 26.0769 12.665 26.4 13.6 26.4ZM8.5 11.55L18.7 11.55L18.7 8.25C18.7 6.875 18.2042 5.70625 17.2125 4.74375C16.2208 3.78125 15.0167 3.3 13.6 3.3C12.1833 3.3 10.9792 3.78125 9.9875 4.74375C8.99583 5.70625 8.5 6.875 8.5 8.25L8.5 11.55Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="44.02%"
              bottom="3.48%"
              left="13.33%"
              right="33.33%"
              {...getOverrideProps(overrides, "Vector4376869")}
            ></Icon>
          </View>
        </View>
        <View
          width="42.65px"
          height="45.75px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="333px"
          left="22px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "palette_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 2"
          )}
        >
          <Icon
            width="35.54px"
            height="38.12px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 35.538368225097656,
              height: 38.12166976928711,
            }}
            paths={[
              {
                d: "M17.7692 38.1217C15.3407 38.1217 13.0455 37.6213 10.8836 36.6206C8.72171 35.6199 6.83373 34.2539 5.2197 32.5225C3.60566 30.7912 2.33221 28.766 1.39932 26.4469C0.466441 24.1278 0 21.6658 0 19.0608C0 16.4241 0.481249 13.9462 1.44375 11.6271C2.40624 9.30804 3.70932 7.29077 5.35297 5.57529C6.99662 3.85982 8.91421 2.50173 11.1057 1.50104C13.2973 0.500347 15.6369 0 18.1246 0C20.4938 0 22.7297 0.436811 24.8324 1.31043C26.9351 2.18405 28.7787 3.39124 30.3631 4.93199C31.9475 6.47274 33.2062 8.29941 34.139 10.412C35.0719 12.5246 35.5384 14.8039 35.5384 17.2501C35.5384 20.9034 34.5018 23.7069 32.4288 25.6607C30.3557 27.6144 27.8384 28.5913 24.8769 28.5913L21.5896 28.5913C21.323 28.5913 21.1379 28.6707 21.0343 28.8295C20.9306 28.9884 20.8788 29.1631 20.8788 29.3537C20.8788 29.7349 21.1009 30.2829 21.5451 30.9977C21.9894 31.7125 22.2115 32.5305 22.2115 33.4518C22.2115 35.0402 21.8043 36.2156 20.9898 36.978C20.1754 37.7405 19.1019 38.1217 17.7692 38.1217ZM7.99613 20.9669C8.76613 20.9669 9.40286 20.6969 9.90632 20.1568C10.4098 19.6168 10.6615 18.9338 10.6615 18.1078C10.6615 17.2818 10.4098 16.5988 9.90632 16.0588C9.40286 15.5187 8.76613 15.2487 7.99613 15.2487C7.22614 15.2487 6.58941 15.5187 6.08595 16.0588C5.58249 16.5988 5.33076 17.2818 5.33076 18.1078C5.33076 18.9338 5.58249 19.6168 6.08595 20.1568C6.58941 20.6969 7.22614 20.9669 7.99613 20.9669ZM13.3269 13.3426C14.0969 13.3426 14.7336 13.0726 15.2371 12.5325C15.7405 11.9924 15.9923 11.3094 15.9923 10.4835C15.9923 9.65749 15.7405 8.97448 15.2371 8.43442C14.7336 7.89436 14.0969 7.62433 13.3269 7.62433C12.5569 7.62433 11.9202 7.89436 11.4167 8.43442C10.9132 8.97448 10.6615 9.65749 10.6615 10.4835C10.6615 11.3094 10.9132 11.9924 11.4167 12.5325C11.9202 13.0726 12.5569 13.3426 13.3269 13.3426ZM22.2115 13.3426C22.9815 13.3426 23.6182 13.0726 24.1217 12.5325C24.6251 11.9924 24.8769 11.3094 24.8769 10.4835C24.8769 9.65749 24.6251 8.97448 24.1217 8.43442C23.6182 7.89436 22.9815 7.62433 22.2115 7.62433C21.4415 7.62433 20.8048 7.89436 20.3013 8.43442C19.7978 8.97448 19.5461 9.65749 19.5461 10.4835C19.5461 11.3094 19.7978 11.9924 20.3013 12.5325C20.8048 13.0726 21.4415 13.3426 22.2115 13.3426ZM27.5422 20.9669C28.3122 20.9669 28.949 20.6969 29.4524 20.1568C29.9559 19.6168 30.2076 18.9338 30.2076 18.1078C30.2076 17.2818 29.9559 16.5988 29.4524 16.0588C28.949 15.5187 28.3122 15.2487 27.5422 15.2487C26.7722 15.2487 26.1355 15.5187 25.632 16.0588C25.1286 16.5988 24.8769 17.2818 24.8769 18.1078C24.8769 18.9338 25.1286 19.6168 25.632 20.1568C26.1355 20.6969 26.7722 20.9669 27.5422 20.9669ZM17.7692 34.3095C18.0357 34.3095 18.2504 34.2301 18.4133 34.0712C18.5762 33.9124 18.6576 33.7059 18.6576 33.4518C18.6576 33.007 18.4355 32.4828 17.9913 31.8792C17.5471 31.2757 17.325 30.3703 17.325 29.1631C17.325 27.8288 17.7544 26.7646 18.6132 25.9704C19.4721 25.1762 20.5234 24.7791 21.7673 24.7791L24.8769 24.7791C26.8315 24.7791 28.5047 24.1676 29.8967 22.9445C31.2886 21.7214 31.9845 19.8233 31.9845 17.2501C31.9845 13.4061 30.6148 10.2055 27.8754 7.64816C25.136 5.09083 21.8857 3.81217 18.1246 3.81217C14.0969 3.81217 10.6615 5.28938 7.81844 8.24381C4.97537 11.1982 3.55384 14.8039 3.55384 19.0608C3.55384 23.286 4.93835 26.8837 7.70738 29.854C10.4764 32.8243 13.8303 34.3095 17.7692 34.3095Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8.33%"
            bottom="8.33%"
            left="8.33%"
            right="8.33%"
            {...getOverrideProps(overrides, "Vector4376871")}
          ></Icon>
        </View>
        <View
          width="43.55px"
          height="49.56px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="489px"
          left="21px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "notifications_off_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 2"
          )}
        >
          <Icon
            width="35.93px"
            height="42.54px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 35.93156433105469,
              height: 42.53742980957031,
            }}
            paths={[
              {
                d: "M4.71829 35.1037L4.71829 30.9739L8.34774 30.9739L8.34774 16.5194C8.34774 15.3837 8.47628 14.2652 8.73337 13.1639C8.99045 12.0626 9.37608 11.0129 9.89025 10.0149L12.6123 13.1123C12.4006 13.6629 12.2418 14.2222 12.136 14.79C12.0301 15.3579 11.9772 15.9343 11.9772 16.5194L11.9772 30.9739L23.2285 30.9739L0 4.54283L2.54062 1.65194L35.9316 39.6465L33.3909 42.5374L26.7672 35.1037L4.71829 35.1037ZM30.1244 27.1537L26.495 23.0239L26.495 16.5194C26.495 14.248 25.7842 12.3035 24.3627 10.686C22.9412 9.06846 21.2323 8.2597 19.2361 8.2597C18.4497 8.2597 17.6936 8.39736 16.9677 8.67268C16.2418 8.948 15.5764 9.36099 14.9715 9.91163L12.3401 6.91749C12.945 6.36685 13.5953 5.88503 14.291 5.47205C14.9866 5.05906 15.7276 4.74932 16.514 4.54283L16.514 3.09739C16.514 2.237 16.7786 1.50567 17.3079 0.903404C17.8372 0.301135 18.48 0 19.2361 0C19.9922 0 20.6349 0.301135 21.1642 0.903404C21.6935 1.50567 21.9582 2.237 21.9582 3.09739L21.9582 4.54283C24.3778 5.23114 26.3438 6.68519 27.856 8.90498C29.3683 11.1248 30.1244 13.6629 30.1244 16.5194L30.1244 27.1537ZM19.2361 41.2985C18.238 41.2985 17.3836 40.8941 16.6728 40.0853C15.962 39.2766 15.6066 38.3043 15.6066 37.1686L22.8655 37.1686C22.8655 38.3043 22.5102 39.2766 21.7994 40.0853C21.0886 40.8941 20.2342 41.2985 19.2361 41.2985Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8.33%"
            bottom="5.83%"
            left="5.83%"
            right="11.67%"
            {...getOverrideProps(overrides, "Vector4376873")}
          ></Icon>
        </View>
      </View>
    </View>
  );
}
