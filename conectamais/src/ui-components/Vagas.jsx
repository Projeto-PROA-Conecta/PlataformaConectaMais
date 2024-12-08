/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Vagas(props) {
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
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Vagas")}
      {...rest}
    >
      <View
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="626px"
        left="707px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "share_windows_24dp_4B77D1_FILL0_wght400_GRAD0_opsz24 139885911"
        )}
      ></View>
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
          {...getOverrideProps(overrides, "Frame 3214387771")}
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
            {...getOverrideProps(overrides, "Vector4387772")}
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
            {...getOverrideProps(overrides, "Vector4387773")}
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
            {...getOverrideProps(overrides, "Vector4387774")}
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
            {...getOverrideProps(overrides, "Vector4387775")}
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
          {...getOverrideProps(overrides, "Frame 3214387778")}
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
            {...getOverrideProps(overrides, "Button4387779")}
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
            {...getOverrideProps(overrides, "Button4387780")}
          ></Button>
        </Flex>
      </Flex>
      <View
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="690px"
        left="644px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "share_windows_24dp_4B77D1_FILL0_wght400_GRAD0_opsz24 139886005"
        )}
      ></View>
      <Image
        width="104px"
        height="103px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="100px"
        left="1601px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={bancoImagens?.PerfilAvatar}
        {...getOverrideProps(overrides, "AvatarPerfil 1")}
      ></Image>
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
          {...getOverrideProps(overrides, "Frame 3214387790")}
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
            {...getOverrideProps(overrides, "Button4387791")}
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
            {...getOverrideProps(overrides, "Button4387792")}
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
            {...getOverrideProps(overrides, "Button4387793")}
          ></Button>
        </Flex>
      </Flex>
      <View
        padding="0px 0px 0px 0px"
        width="1519px"
        height="939px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="180px"
        left="0px"
        {...getOverrideProps(overrides, "Group 440")}
      >
        <View
          width="1519px"
          height="939px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "back gorund")}
        >
          <Image
            width="1519px"
            height="939px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="-4px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "Fundo Novo")}
          ></Image>
          <View
            width="730px"
            height="699.09px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="10.43%"
            bottom="15.12%"
            left="3.42%"
            right="48.52%"
            border="1px SOLID rgba(0,0,0,1)"
            borderRadius="15px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle 152")}
          ></View>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="300"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="128px"
            height="20.63px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="25.46%"
            bottom="72.34%"
            left="7.37%"
            right="84.2%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="1.783 avaliações"
            {...getOverrideProps(overrides, "1.783 avalia\u00E7\u00F5es")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="151px"
            height="23.88px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="28.54%"
            bottom="68.92%"
            left="7.24%"
            right="82.82%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="São Paulo - SP"
            {...getOverrideProps(overrides, "S\u00E3o Paulo - SP39885920")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24.3799991607666px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="121px"
            height="24.97px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="32.59%"
            bottom="64.75%"
            left="7.24%"
            right="84.79%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="R$ 5.200,00"
            {...getOverrideProps(overrides, "R$ 5.200,00")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24.3799991607666px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="78px"
            height="23.88px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="36.56%"
            bottom="60.9%"
            left="10.34%"
            right="84.53%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Híbrido"
            {...getOverrideProps(overrides, "H\u00EDbrido39885922")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="20px"
            fontWeight="300"
            color="rgba(0,0,0,1)"
            lineHeight="24.3799991607666px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="47.99px"
            height="28.72px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="14.27%"
            bottom="82.67%"
            left="46.62%"
            right="50.22%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Hoje"
            {...getOverrideProps(overrides, "Hoje")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="34px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="51px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="352px"
            height="37.99px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="14.75%"
            bottom="81.2%"
            left="7.37%"
            right="69.45%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="ANALISTA DE DADOS"
            {...getOverrideProps(overrides, "ANALISTA DE DADOS")}
          ></Text>
          <Image
            width="9.61%"
            height="12.95%"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="19.33%"
            bottom="67.72%"
            left="40.16%"
            right="50.23%"
            border="1px SOLID rgba(0,0,0,1)"
            borderRadius="20px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.EmpresaExemplo}
            {...getOverrideProps(overrides, "image 7")}
          ></Image>
          <Text
            fontFamily="Montserrat"
            fontSize="20px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="24.3799991607666px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="34px"
            height="24.97px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="21.88%"
            bottom="75.46%"
            left="7.24%"
            right="90.52%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="4,5"
            {...getOverrideProps(overrides, "4,5")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="20px"
            fontWeight="700"
            color="rgba(0,148,255,1)"
            lineHeight="24.3799991607666px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="172px"
            height="24.97px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="21.94%"
            bottom="75.4%"
            left="10.2%"
            right="78.47%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="REKTR TEC"
            {...getOverrideProps(overrides, "REKTR TEC")}
          ></Text>
          <Button
            width="302px"
            height="66.22px"
            position="absolute"
            borderRadius="20px"
            top="43.61%"
            bottom="49.34%"
            left="5.6%"
            right="74.52%"
            backgroundColor="rgba(22,73,86,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Quero me candidatar"
            {...getOverrideProps(overrides, "Button39885929")}
          ></Button>
          <Icon
            width="730px"
            height="0px"
            viewBox={{ minX: 0, minY: 0, width: 730, height: 1 }}
            paths={[
              {
                d: "M0 0L730 0L730 -1L0 -1L0 0Z",
                stroke: "rgba(0,0,0,0.5)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="56.67%"
            bottom="43.33%"
            left="3.42%"
            right="48.52%"
            transformOrigin="top left"
            transform="rotate(0deg)"
            {...getOverrideProps(overrides, "Line 33")}
          ></Icon>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="67px"
            height="18.45px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="53.21%"
            bottom="44.83%"
            left="6.06%"
            right="89.53%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Vaga"
            {...getOverrideProps(overrides, "Vaga")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="90px"
            height="18.45px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="53.21%"
            bottom="44.83%"
            left="12.57%"
            right="81.5%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Empresa"
            {...getOverrideProps(overrides, "Empresa")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="13px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="19.5px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="707px"
            height="239px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="58.15%"
            bottom="16.4%"
            left="4.41%"
            right="49.05%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="-Descrição: Uma empresa busca um Analista de Dados para integrar sua equipe de tecnologia e inovação. O profissional será responsável por coletar, organizar e analisar grandes volumes de dados, fornecendo insights valiosos para a tomada de decisões estratégicas. Entre as principais responsabilidades estão a criação de relatórios, identificação de padrões e tendências, e o desenvolvimento de soluções para otimizar processos internos. O Analista de Dados trabalhará em colaboração com diferentes departamentos, como marketing, vendas e operações, para garantir que as decisões baseadas em dados sejam precisas e eficazes.&#xA;&#xA;&#xA;-Requisitos:&#xA;Graduação em Ciência de Dados, Engenharia, Estatística, TI ou áreas relacionadas;&#xA;Experiência em análise de dados e utilização de ferramentas como Excel, SQL, Python, R ou Power BI;"
            {...getOverrideProps(
              overrides,
              "-Descri\u00E7\u00E3o: Uma empresa busca um Analista de Dados para integrar sua equipe de tecnologia e inova\u00E7\u00E3o. O profissional ser\u00E1 respons\u00E1vel por coletar, organizar e analisar grandes volumes de dados, fornecendo insights valiosos para a tomada de decis\u00F5es estrat\u00E9gicas. Entre as principais responsabilidades est\u00E3o a cria\u00E7\u00E3o de relat\u00F3rios, identifica\u00E7\u00E3o de padr\u00F5es e tend\u00EAncias, e o desenvolvimento de solu\u00E7\u00F5es para otimizar processos internos. O Analista de Dados trabalhar\u00E1 em colabora\u00E7\u00E3o com diferentes departamentos, como marketing, vendas e opera\u00E7\u00F5es, para garantir que as decis\u00F5es baseadas em dados sejam precisas e eficazes. -Requisitos: Gradua\u00E7\u00E3o em Ci\u00EAncia de Dados, Engenharia, Estat\u00EDstica, TI ou \u00E1reas relacionadas; Experi\u00EAncia em an\u00E1lise de dados e utiliza\u00E7\u00E3o de ferramentas como Excel, SQL, Python, R ou Power BI;"
            )}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="113px"
            height="18.45px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="53.21%"
            bottom="44.83%"
            left="20.61%"
            right="71.96%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Valorações"
            {...getOverrideProps(overrides, "Valora\u00E7\u00F5es")}
          ></Text>
          <View
            width="91px"
            height="7.6px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="55.86%"
            bottom="43.33%"
            left="5.27%"
            right="88.74%"
            borderRadius="2px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(22,70,89,1)"
            {...getOverrideProps(overrides, "Rectangle 157")}
          ></View>
          <View
            width="33px"
            height="30.4px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="21.3%"
            bottom="75.46%"
            left="9.81%"
            right="88.02%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(
              overrides,
              "star_24dp_000000_FILL0_wght400_GRAD0_opsz24 139885997"
            )}
          ></View>
          <Icon
            width="27.5px"
            height="24.06px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 27.5,
              height: 24.063005447387695,
            }}
            paths={[
              {
                d: "M9.41875 18.7755L13.75 16.3692L18.0813 18.8071L16.9469 14.2478L20.7625 11.2083L15.7438 10.7967L13.75 6.49068L11.7563 10.765L6.7375 11.1766L10.5531 14.2478L9.41875 18.7755ZM5.25938 24.063L7.49375 15.166L0 9.18194L9.9 8.39039L13.75 0L17.6 8.39039L27.5 9.18194L20.0063 15.166L22.2406 24.063L13.75 19.3454L5.25938 24.063Z",
                fill: "rgba(255,255,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="21.83%"
            bottom="75.61%"
            left="18.5%"
            right="79.69%"
            {...getOverrideProps(overrides, "Vector39885998")}
          ></Icon>
          <View
            width="24px"
            height="22.8px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="25.35%"
            bottom="72.23%"
            left="16.26%"
            right="82.16%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(
              overrides,
              "new_releases_24dp_4B77D1_FILL0_wght400_GRAD0_opsz24 139885999"
            )}
          >
            <Icon
              width="22px"
              height="19.95px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 22,
                height: 19.94696807861328,
              }}
              paths={[
                {
                  d: "M7.6 19.947L5.7 16.9074L2.1 16.1475L2.45 12.6331L0 9.97348L2.45 7.31389L2.1 3.79942L5.7 3.03954L7.6 0L11 1.37729L14.4 0L16.3 3.03954L19.9 3.79942L19.55 7.31389L22 9.97348L19.55 12.6331L19.9 16.1475L16.3 16.9074L14.4 19.947L11 18.5697L7.6 19.947ZM8.45 17.5248L11 16.48L13.6 17.5248L15 15.2452L17.75 14.6278L17.5 11.9682L19.35 9.97348L17.5 7.93129L17.75 5.2717L15 4.70179L13.55 2.42213L11 3.46697L8.4 2.42213L7 4.70179L4.25 5.2717L4.5 7.93129L2.65 9.97348L4.5 11.9682L4.25 14.6753L7 15.2452L8.45 17.5248ZM9.95 13.3455L15.6 7.97879L14.2 6.6015L9.95 10.6384L7.8 8.64369L6.4 9.97348L9.95 13.3455Z",
                  fill: "rgba(75,119,209,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="6.25%"
              bottom="6.25%"
              left="4.17%"
              right="4.17%"
              {...getOverrideProps(overrides, "Vector39886000")}
            ></Icon>
          </View>
          <View
            width="32px"
            height="29.31px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="35.98%"
            bottom="60.9%"
            left="7.37%"
            right="90.52%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(
              overrides,
              "source_environment_24dp_4B77D1_FILL0_wght400_GRAD0_opsz24 1"
            )}
          >
            <Icon
              width="26.67px"
              height="24.42px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 26.66666603088379,
                height: 24.424854278564453,
              }}
              paths={[
                {
                  d: "M0 24.4249L0 4.57966L6.66667 0L13.3333 4.57966L13.3333 7.32746L26.6667 7.32746L26.6667 24.4249L0 24.4249ZM2.66667 21.9824L5.33333 21.9824L5.33333 19.5399L2.66667 19.5399L2.66667 21.9824ZM2.66667 17.0974L5.33333 17.0974L5.33333 14.6549L2.66667 14.6549L2.66667 17.0974ZM2.66667 12.2124L5.33333 12.2124L5.33333 9.76994L2.66667 9.76994L2.66667 12.2124ZM2.66667 7.32746L5.33333 7.32746L5.33333 4.88497L2.66667 4.88497L2.66667 7.32746ZM8 7.32746L10.6667 7.32746L10.6667 4.88497L8 4.88497L8 7.32746ZM8 21.9824L24 21.9824L24 9.76994L8 9.76994L8 21.9824ZM16 14.6549L16 12.2124L21.3333 12.2124L21.3333 14.6549L16 14.6549ZM16 19.5399L16 17.0974L21.3333 17.0974L21.3333 19.5399L16 19.5399ZM10.6667 14.6549L10.6667 12.2124L13.3333 12.2124L13.3333 14.6549L10.6667 14.6549ZM10.6667 19.5399L10.6667 17.0974L13.3333 17.0974L13.3333 19.5399L10.6667 19.5399Z",
                  fill: "rgba(75,119,209,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="4.17%"
              bottom="12.5%"
              left="8.33%"
              right="8.33%"
              {...getOverrideProps(overrides, "Vector39886002")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="65px"
            height="50.79px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="44.42%"
            bottom="50.17%"
            left="29.89%"
            right="65.83%"
            {...getOverrideProps(overrides, "Group 439")}
          >
            <Icon
              width="65px"
              height="50.79px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 65,
                height: 50.7862548828125,
              }}
              paths={[
                {
                  d: "M63 25.3931C63 37.8814 49.8323 48.7863 32.5 48.7863L32.5 52.7863C51.0662 52.7863 67 40.9533 67 25.3931L63 25.3931ZM32.5 48.7863C15.1677 48.7863 2 37.8814 2 25.3931L-2 25.3931C-2 40.9533 13.9338 52.7863 32.5 52.7863L32.5 48.7863ZM2 25.3931C2 12.9049 15.1677 2 32.5 2L32.5 -2C13.9338 -2 -2 9.83292 -2 25.3931L2 25.3931ZM32.5 2C49.8323 2 63 12.9049 63 25.3931L67 25.3931C67 9.83292 51.0662 -2 32.5 -2L32.5 2Z",
                  stroke: "rgba(22,70,89,1)",
                  fillRule: "nonzero",
                  strokeWidth: 2,
                },
                {
                  d: "M65 25.3931C65 39.4174 50.4493 50.7863 32.5 50.7863C14.5507 50.7863 0 39.4174 0 25.3931C0 11.3689 14.5507 0 32.5 0C50.4493 0 65 11.3689 65 25.3931Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Ellipse 106")}
            ></Icon>
            <Icon
              width="22.86px"
              height="23.08px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 22.855323791503906,
                height: 23.08466148376465,
              }}
              paths={[
                {
                  d: "M5.07896 15.3898L5.07896 7.69489C5.07896 6.98952 5.32762 6.38569 5.82493 5.88338C6.32225 5.38108 6.92008 5.12992 7.61844 5.12992L17.9668 5.12992L14.6972 1.82754L16.5066 0L22.8553 6.41241L16.5066 12.8248L14.6972 11.0293L17.9668 7.69489L7.61844 7.69489L7.61844 15.3898L5.07896 15.3898ZM2.53948 23.0847C1.84112 23.0847 1.24329 22.8335 0.745972 22.3312C0.248657 21.8289 0 21.2251 0 20.5197L0 1.28248L2.53948 1.28248L2.53948 20.5197L17.7764 20.5197L17.7764 15.3898L20.3158 15.3898L20.3158 20.5197C20.3158 21.2251 20.0672 21.8289 19.5699 22.3312C19.0726 22.8335 18.4747 23.0847 17.7764 23.0847L2.53948 23.0847Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="26.59%"
              bottom="27.96%"
              left="32.65%"
              right="32.19%"
              {...getOverrideProps(overrides, "Vector39886006")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="628px"
            height="565.05px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="15.76%"
            bottom="24.06%"
            left="53.72%"
            right="4.94%"
            {...getOverrideProps(overrides, "Group 474")}
          >
            <Text
              fontFamily="Poppins"
              fontSize="34px"
              fontWeight="600"
              color="rgba(0,0,0,1)"
              lineHeight="51px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="491px"
              height="30px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0%"
              bottom="94.69%"
              left="0%"
              right="21.82%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Outras vagas semelhantes"
              {...getOverrideProps(overrides, "Outras vagas semelhantes")}
            ></Text>
            <View
              width="628px"
              height="142.85px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="10.52%"
              bottom="64.2%"
              left="0%"
              right="0%"
              border="1px SOLID rgba(0,0,0,1)"
              borderRadius="15px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 15339885939")}
            ></View>
            <Text
              fontFamily="Montserrat"
              fontSize="24px"
              fontWeight="600"
              color="rgba(0,0,0,1)"
              lineHeight="29.256000518798828px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="228.17px"
              height="23.01px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="14.52%"
              bottom="81.41%"
              left="6%"
              right="57.67%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="DESIGN GRÁFICO"
              {...getOverrideProps(overrides, "DESIGN GR\u00C1FICO")}
            ></Text>
            <Text
              fontFamily="Montserrat"
              fontSize="20px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="24.3799991607666px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="28.26px"
              height="19.05px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="21.51%"
              bottom="75.12%"
              left="6.53%"
              right="88.97%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="4,1"
              {...getOverrideProps(overrides, "4,1")}
            ></Text>
            <Text
              fontFamily="Montserrat"
              fontSize="20px"
              fontWeight="700"
              color="rgba(0,148,255,1)"
              lineHeight="24.3799991607666px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="172.7px"
              height="19.05px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="21.4%"
              bottom="75.23%"
              left="19.5%"
              right="53%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="New Berg"
              {...getOverrideProps(overrides, "New Berg")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="15px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="22.5px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="113.04px"
              height="14.29px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="28.11%"
              bottom="69.37%"
              left="6%"
              right="76%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="São Paulo - SP"
              {...getOverrideProps(overrides, "S\u00E3o Paulo - SP39885947")}
            ></Text>
            <Text
              fontFamily="Montserrat"
              fontSize="15px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="18.28499984741211px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="51.29px"
              height="14.29px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="14.66%"
              bottom="82.81%"
              left="85.17%"
              right="6.67%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="09 out"
              {...getOverrideProps(overrides, "09 out")}
            ></Text>
            <Text
              fontFamily="Montserrat"
              fontSize="15px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="18.28499984741211px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="63.85px"
              height="14.29px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="28.11%"
              bottom="69.37%"
              left="34.67%"
              right="55.17%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Remoto"
              {...getOverrideProps(overrides, "Remoto")}
            ></Text>
            <Icon
              width="20.93px"
              height="15.87px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 20.933332443237305,
                height: 15.872237205505371,
              }}
              paths={[
                {
                  d: "M0 15.8722L0 14.1087L20.9333 14.1087L20.9333 15.8722L0 15.8722ZM2.85455 13.2269C2.33121 13.2269 1.88321 13.0542 1.51053 12.7088C1.13785 12.3634 0.951515 11.9483 0.951515 11.4633L0.951515 1.76358C0.951515 1.2786 1.13785 0.86342 1.51053 0.518052C1.88321 0.172684 2.33121 0 2.85455 0L18.0788 0C18.6021 0 19.0501 0.172684 19.4228 0.518052C19.7955 0.86342 19.9818 1.2786 19.9818 1.76358L19.9818 11.4633C19.9818 11.9483 19.7955 12.3634 19.4228 12.7088C19.0501 13.0542 18.6021 13.2269 18.0788 13.2269L2.85455 13.2269ZM2.85455 11.4633L18.0788 11.4633L18.0788 1.76358L2.85455 1.76358L2.85455 11.4633Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27.97%"
              bottom="69.22%"
              left="30.17%"
              right="66.5%"
              {...getOverrideProps(overrides, "Vector40711098")}
            ></Icon>
            <Icon
              width="20.63px"
              height="0px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 1,
                height: 20.633907318115234,
              }}
              paths={[
                {
                  d: "M0 0L20.6339 0L20.6339 -1L0 -1L0 0Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27.69%"
              bottom="72.31%"
              left="27%"
              right="69.71%"
              transformOrigin="top left"
              transform="rotate(90deg)"
              {...getOverrideProps(overrides, "Line 35")}
            ></Icon>
            <Button
              width="196.77px"
              height="40.47px"
              position="absolute"
              borderRadius="20px"
              top="21.73%"
              bottom="71.1%"
              left="66.24%"
              right="2.42%"
              backgroundColor="rgba(22,73,86,1)"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Saiba mais"
              {...getOverrideProps(overrides, "Button39885953")}
            ></Button>
            <View
              width="628px"
              height="142.85px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="42.62%"
              bottom="32.1%"
              left="0%"
              right="0%"
              border="1px SOLID rgba(0,0,0,1)"
              borderRadius="15px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 15339885954")}
            ></View>
            <Text
              fontFamily="Poppins"
              fontSize="24px"
              fontWeight="600"
              color="rgba(0,0,0,1)"
              lineHeight="36px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="404.01px"
              height="23.01px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="46.54%"
              bottom="49.38%"
              left="6%"
              right="29.67%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="SEGURANÇA DA INFORMAÇÃO"
              {...getOverrideProps(
                overrides,
                "SEGURAN\u00C7A DA INFORMA\u00C7\u00C3O"
              )}
            ></Text>
            <Text
              fontFamily="Montserrat"
              fontSize="20px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="24.3799991607666px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="34.54px"
              height="19.05px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="53.58%"
              bottom="43.05%"
              left="6%"
              right="88.5%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="4,9"
              {...getOverrideProps(overrides, "4,9")}
            ></Text>
            <Text
              fontFamily="Montserrat"
              fontSize="20px"
              fontWeight="700"
              color="rgba(0,148,255,1)"
              lineHeight="24.3799991607666px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="97px"
              height="26.49px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="53.22%"
              bottom="42.09%"
              left="19.5%"
              right="65.05%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="City Corp"
              {...getOverrideProps(overrides, "City Corp")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="15px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="22.5px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="113.04px"
              height="14.29px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="60.13%"
              bottom="37.34%"
              left="6%"
              right="76%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="São Paulo - SP"
              {...getOverrideProps(overrides, "S\u00E3o Paulo - SP39885962")}
            ></Text>
            <Text
              fontFamily="Montserrat"
              fontSize="15px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="18.28499984741211px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="43.96px"
              height="14.29px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="46.68%"
              bottom="50.79%"
              left="85.17%"
              right="7.83%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="01 set"
              {...getOverrideProps(overrides, "01 set")}
            ></Text>
            <Text
              fontFamily="Montserrat"
              fontSize="15px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="18.28499984741211px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="58.61px"
              height="14.29px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="60.13%"
              bottom="37.34%"
              left="34.67%"
              right="56%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Híbrido"
              {...getOverrideProps(overrides, "H\u00EDbrido39885964")}
            ></Text>
            <Icon
              width="20.93px"
              height="15.87px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 20.933332443237305,
                height: 15.872237205505371,
              }}
              paths={[
                {
                  d: "M0 15.8722L0 2.97604L5.23333 0L10.4667 2.97604L10.4667 4.76167L20.9333 4.76167L20.9333 15.8722L0 15.8722ZM2.09333 14.285L4.18667 14.285L4.18667 12.6978L2.09333 12.6978L2.09333 14.285ZM2.09333 11.1106L4.18667 11.1106L4.18667 9.52334L2.09333 9.52334L2.09333 11.1106ZM2.09333 7.93612L4.18667 7.93612L4.18667 6.3489L2.09333 6.3489L2.09333 7.93612ZM2.09333 4.76167L4.18667 4.76167L4.18667 3.17445L2.09333 3.17445L2.09333 4.76167ZM6.28 4.76167L8.37333 4.76167L8.37333 3.17445L6.28 3.17445L6.28 4.76167ZM6.28 14.285L18.84 14.285L18.84 6.3489L6.28 6.3489L6.28 14.285ZM12.56 9.52334L12.56 7.93612L16.7467 7.93612L16.7467 9.52334L12.56 9.52334ZM12.56 12.6978L12.56 11.1106L16.7467 11.1106L16.7467 12.6978L12.56 12.6978ZM8.37333 9.52334L8.37333 7.93612L10.4667 7.93612L10.4667 9.52334L8.37333 9.52334ZM8.37333 12.6978L8.37333 11.1106L10.4667 11.1106L10.4667 12.6978L8.37333 12.6978Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="59.99%"
              bottom="37.2%"
              left="30.17%"
              right="66.5%"
              {...getOverrideProps(overrides, "Vector40711092")}
            ></Icon>
            <Button
              width="196.77px"
              height="40.47px"
              position="absolute"
              borderRadius="20px"
              top="55.16%"
              bottom="37.68%"
              left="66.24%"
              right="2.42%"
              backgroundColor="rgba(22,73,86,1)"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Saiba mais"
              {...getOverrideProps(overrides, "Button39885968")}
            ></Button>
            <View
              width="628px"
              height="142.85px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="74.72%"
              bottom="0%"
              left="0%"
              right="0%"
              border="1px SOLID rgba(0,0,0,1)"
              borderRadius="15px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 15339885970")}
            ></View>
            <Text
              fontFamily="Montserrat"
              fontSize="24px"
              fontWeight="600"
              color="rgba(0,0,0,1)"
              lineHeight="29.256000518798828px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="319.23px"
              height="23.01px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="78.71%"
              bottom="17.22%"
              left="6%"
              right="43.17%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="ENGENHEIRO DE REDES"
              {...getOverrideProps(overrides, "ENGENHEIRO DE REDES")}
            ></Text>
            <Text
              fontFamily="Montserrat"
              fontSize="20px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="24.3799991607666px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="35.59px"
              height="19.05px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="85.72%"
              bottom="10.91%"
              left="5.89%"
              right="88.44%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="4,4"
              {...getOverrideProps(overrides, "4,4")}
            ></Text>
            <View
              width="34.54px"
              height="26.19px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="85.71%"
              bottom="9.65%"
              left="12.83%"
              right="81.67%"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "star_24dp_000000_FILL0_wght400_GRAD0_opsz24 139885973"
              )}
            >
              <Icon
                width="28.78px"
                height="20.73px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 28.783334732055664,
                  height: 20.73310661315918,
                }}
                paths={[
                  {
                    d: "M9.85829 16.1773L14.3917 14.104L18.925 16.2046L17.7377 12.2762L21.7314 9.65726L16.4785 9.30262L14.3917 5.59248L12.3049 9.27534L7.05192 9.62998L11.0456 12.2762L9.85829 16.1773ZM5.50481 20.7331L7.84346 13.0673L0 7.91132L10.362 7.22931L14.3917 0L18.4213 7.22931L28.7833 7.91132L20.9399 13.0673L23.2785 20.7331L14.3917 16.6683L5.50481 20.7331Z",
                    fill: "rgba(255,255,0,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0.01%"
                bottom="20.83%"
                left="9.86%"
                right="6.8%"
                {...getOverrideProps(overrides, "Vector39885974")}
              ></Icon>
            </View>
            <Text
              fontFamily="Poppins"
              fontSize="20px"
              fontWeight="700"
              color="rgba(0,148,255,1)"
              lineHeight="30px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="172.7px"
              height="19.05px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="85.39%"
              bottom="11.24%"
              left="19.5%"
              right="53%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Aurora Tech"
              {...getOverrideProps(overrides, "Aurora Tech")}
            ></Text>
            <View
              width="25.12px"
              height="19.05px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="86.5%"
              bottom="10.12%"
              left="40.91%"
              right="55.09%"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "new_releases_24dp_4B77D1_FILL0_wght400_GRAD0_opsz24 139885976"
              )}
            >
              <Icon
                width="23.03px"
                height="16.67px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 23.02666664123535,
                  height: 16.665847778320312,
                }}
                paths={[
                  {
                    d: "M7.95467 16.6658L5.966 14.1263L2.198 13.4914L2.56433 10.555L0 8.33292L2.56433 6.11081L2.198 3.17445L5.966 2.53956L7.95467 0L11.5133 1.15074L15.072 0L17.0607 2.53956L20.8287 3.17445L20.4623 6.11081L23.0267 8.33292L20.4623 10.555L20.8287 13.4914L17.0607 14.1263L15.072 16.6658L11.5133 15.5151L7.95467 16.6658ZM8.84433 14.6421L11.5133 13.7692L14.2347 14.6421L15.7 12.7375L18.5783 12.2216L18.3167 9.99951L20.253 8.33292L18.3167 6.62666L18.5783 4.40455L15.7 3.92838L14.1823 2.02371L11.5133 2.89668L8.792 2.02371L7.32667 3.92838L4.44833 4.40455L4.71 6.62666L2.77367 8.33292L4.71 9.99951L4.44833 12.2613L7.32667 12.7375L8.84433 14.6421ZM10.4143 11.1502L16.328 6.66634L14.8627 5.5156L10.4143 8.88845L8.164 7.22187L6.69867 8.33292L10.4143 11.1502Z",
                    fill: "rgba(75,119,209,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="6.25%"
                bottom="6.25%"
                left="4.17%"
                right="4.17%"
                {...getOverrideProps(overrides, "Vector39885977")}
              ></Icon>
            </View>
            <Text
              fontFamily="Poppins"
              fontSize="15px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="22.5px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="113.04px"
              height="14.29px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="91.71%"
              bottom="5.77%"
              left="6%"
              right="76%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="São Paulo - SP"
              {...getOverrideProps(overrides, "S\u00E3o Paulo - SP39885979")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="15px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="22.5px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="53.38px"
              height="14.29px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="78.85%"
              bottom="18.63%"
              left="85.17%"
              right="6.33%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="26 ago"
              {...getOverrideProps(overrides, "26 ago")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="15px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="22.5px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="81.64px"
              height="14.29px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="91.71%"
              bottom="5.77%"
              left="34.67%"
              right="52.33%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Presencial"
              {...getOverrideProps(overrides, "Presencial")}
            ></Text>
            <Button
              width="196.77px"
              height="40.47px"
              position="absolute"
              borderRadius="20px"
              top="87.32%"
              bottom="5.51%"
              left="66.74%"
              right="1.92%"
              backgroundColor="rgba(22,73,86,1)"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Saiba mais"
              {...getOverrideProps(overrides, "Button39885983")}
            ></Button>
            <Icon
              width="21px"
              height="14.03px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 21,
                height: 14.029882431030273,
              }}
              paths={[
                {
                  d: "M0 14.0299L0 3.11775L4.66667 3.11775L4.66667 0L16.3333 0L16.3333 6.2355L21 6.2355L21 14.0299L11.6667 14.0299L11.6667 10.9121L9.33333 10.9121L9.33333 14.0299L0 14.0299ZM2.33333 12.471L4.66667 12.471L4.66667 10.9121L2.33333 10.9121L2.33333 12.471ZM2.33333 9.35325L4.66667 9.35325L4.66667 7.79438L2.33333 7.79438L2.33333 9.35325ZM2.33333 6.2355L4.66667 6.2355L4.66667 4.67663L2.33333 4.67663L2.33333 6.2355ZM7 9.35325L9.33333 9.35325L9.33333 7.79438L7 7.79438L7 9.35325ZM7 6.2355L9.33333 6.2355L9.33333 4.67663L7 4.67663L7 6.2355ZM7 3.11775L9.33333 3.11775L9.33333 1.55888L7 1.55888L7 3.11775ZM11.6667 9.35325L14 9.35325L14 7.79438L11.6667 7.79438L11.6667 9.35325ZM11.6667 6.2355L14 6.2355L14 4.67663L11.6667 4.67663L11.6667 6.2355ZM11.6667 3.11775L14 3.11775L14 1.55888L11.6667 1.55888L11.6667 3.11775ZM16.3333 12.471L18.6667 12.471L18.6667 10.9121L16.3333 10.9121L16.3333 12.471ZM16.3333 9.35325L18.6667 9.35325L18.6667 7.79438L16.3333 7.79438L16.3333 9.35325Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="91.74%"
              bottom="5.77%"
              left="30.1%"
              right="66.56%"
              {...getOverrideProps(overrides, "Vector40711090")}
            ></Icon>
          </View>
          <View
            width="34.54px"
            height="26.19px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="47.82%"
            bottom="49.39%"
            left="58.46%"
            right="39.27%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(
              overrides,
              "star_24dp_000000_FILL0_wght400_GRAD0_opsz24 14386765"
            )}
          >
            <Icon
              width="28.78px"
              height="20.73px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 28.783334732055664,
                height: 20.73310661315918,
              }}
              paths={[
                {
                  d: "M9.85829 16.1773L14.3917 14.104L18.925 16.2046L17.7377 12.2762L21.7314 9.65726L16.4785 9.30262L14.3917 5.59248L12.3049 9.27534L7.05192 9.62998L11.0456 12.2762L9.85829 16.1773ZM5.50481 20.7331L7.84346 13.0673L0 7.91132L10.362 7.22931L14.3917 0L18.4213 7.22931L28.7833 7.91132L20.9399 13.0673L23.2785 20.7331L14.3917 16.6683L5.50481 20.7331Z",
                  fill: "rgba(255,255,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="8.33%"
              bottom="12.5%"
              left="8.33%"
              right="8.33%"
              {...getOverrideProps(overrides, "Vector4386766")}
            ></Icon>
          </View>
          <Icon
            width="28.78px"
            height="20.73px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 28.783334732055664,
              height: 20.733108520507812,
            }}
            paths={[
              {
                d: "M9.85829 16.1773L14.3917 14.104L18.925 16.2046L17.7377 12.2762L21.7314 9.65726L16.4785 9.30262L14.3917 5.59248L12.3049 9.27534L7.05192 9.62998L11.0456 12.2762L9.85829 16.1773ZM5.50481 20.7331L7.84346 13.0673L0 7.91132L10.362 7.22931L14.3917 0L18.4213 7.22931L28.7833 7.91132L20.9399 13.0673L23.2785 20.7331L14.3917 16.6683L5.50481 20.7331Z",
                fill: "rgba(255,255,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="28.65%"
            bottom="69.14%"
            left="58.46%"
            right="39.65%"
            {...getOverrideProps(overrides, "Vector4386768")}
          ></Icon>
        </View>
      </View>
    </View>
  );
}
