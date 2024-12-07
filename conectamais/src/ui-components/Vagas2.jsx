/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Vagas2(props) {
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
      {...getOverrideProps(overrides, "Vagas2")}
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
        height="937px"
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
          height="937px"
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
          <View
            padding="0px 0px 0px 0px"
            width="1519px"
            height="937px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Group")}
          >
            <Image
              width="100%"
              height="100%"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              padding="0px 0px 0px 0px"
              objectFit="unset"
              {...getOverrideProps(overrides, "Rectangle")}
            ></Image>
          </View>
          <View
            width="730px"
            height="697.6px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="10.43%"
            bottom="15.12%"
            left="3.42%"
            right="48.52%"
            borderRadius="15px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle 152")}
          ></View>
          <Text
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="300"
            color="rgba(0,0,0,1)"
            lineHeight="19.503999710083008px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="128px"
            height="20.58px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="21.99%"
            bottom="75.81%"
            left="20.93%"
            right="70.64%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="1.783 avaliações"
            {...getOverrideProps(overrides, "1.783 avalia\u00E7\u00F5es")}
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
            width="151px"
            height="23.83px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="27.89%"
            bottom="69.57%"
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
            height="24.91px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="32.28%"
            bottom="65.06%"
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
            height="23.83px"
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
            height="28.66px"
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
            fontFamily="Montserrat"
            fontSize="30px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="36.56999969482422px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="352px"
            height="37.91px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="15.29%"
            bottom="80.67%"
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
            height="24.91px"
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
            height="24.91px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="21.88%"
            bottom="75.46%"
            left="12.31%"
            right="76.37%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="REKTR TEC"
            {...getOverrideProps(overrides, "REKTR TEC")}
          ></Text>
          <Button
            width="302px"
            height="66.08px"
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
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="19.503999710083008px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="67px"
            height="18.42px"
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
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="19.503999710083008px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="90px"
            height="18.42px"
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
            fontFamily="Montserrat"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="17.06599998474121px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="715px"
            height="238.31px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="58.18%"
            bottom="16.39%"
            left="4.41%"
            right="48.52%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="-Descrição: Uma empresa busca um Analista de Dados para integrar sua equipe de tecnologia e inovação. O profissional será responsável por coletar, organizar e analisar grandes volumes de dados, fornecendo insights valiosos para a tomada de decisões estratégicas. Entre as principais responsabilidades estão a criação de relatórios, identificação de padrões e tendências, e o desenvolvimento de soluções para otimizar processos internos. O Analista de Dados trabalhará em colaboração com diferentes departamentos, como marketing, vendas e operações, para garantir que as decisões baseadas em dados sejam precisas e eficazes.&#xA;&#xA;&#xA;-Requisitos:&#xA;Graduação em Ciência de Dados, Engenharia, Estatística, TI ou áreas relacionadas;&#xA;Experiência em análise de dados e utilização de ferramentas como Excel, SQL, Python, R ou Power BI;"
            {...getOverrideProps(
              overrides,
              "-Descri\u00E7\u00E3o: Uma empresa busca um Analista de Dados para integrar sua equipe de tecnologia e inova\u00E7\u00E3o. O profissional ser\u00E1 respons\u00E1vel por coletar, organizar e analisar grandes volumes de dados, fornecendo insights valiosos para a tomada de decis\u00F5es estrat\u00E9gicas. Entre as principais responsabilidades est\u00E3o a cria\u00E7\u00E3o de relat\u00F3rios, identifica\u00E7\u00E3o de padr\u00F5es e tend\u00EAncias, e o desenvolvimento de solu\u00E7\u00F5es para otimizar processos internos. O Analista de Dados trabalhar\u00E1 em colabora\u00E7\u00E3o com diferentes departamentos, como marketing, vendas e opera\u00E7\u00F5es, para garantir que as decis\u00F5es baseadas em dados sejam precisas e eficazes. -Requisitos: Gradua\u00E7\u00E3o em Ci\u00EAncia de Dados, Engenharia, Estat\u00EDstica, TI ou \u00E1reas relacionadas; Experi\u00EAncia em an\u00E1lise de dados e utiliza\u00E7\u00E3o de ferramentas como Excel, SQL, Python, R ou Power BI;"
            )}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="19.503999710083008px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="113px"
            height="18.42px"
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
            height="7.58px"
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
            height="30.33px"
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
          >
            <Icon
              width="27.5px"
              height="24.01px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 27.5,
                height: 24.01175308227539,
              }}
              paths={[
                {
                  d: "M9.41875 18.7355L13.75 16.3343L18.0813 18.7671L16.9469 14.2175L20.7625 11.1844L15.7438 10.7737L13.75 6.47685L11.7563 10.7421L6.7375 11.1528L10.5531 14.2175L9.41875 18.7355ZM5.25938 24.0118L7.49375 15.1337L0 9.16238L9.9 8.37252L13.75 0L17.6 8.37252L27.5 9.16238L20.0063 15.1337L22.2406 24.0118L13.75 19.3042L5.25938 24.0118Z",
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
              {...getOverrideProps(overrides, "Vector39885998")}
            ></Icon>
          </View>
          <View
            width="24px"
            height="22.75px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="21.88%"
            bottom="75.7%"
            left="29.82%"
            right="68.6%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(
              overrides,
              "new_releases_24dp_4B77D1_FILL0_wght400_GRAD0_opsz24 139885999"
            )}
          >
            <Icon
              width="22px"
              height="19.9px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 22,
                height: 19.904481887817383,
              }}
              paths={[
                {
                  d: "M7.6 19.9045L5.7 16.8714L2.1 16.1132L2.45 12.6062L0 9.95224L2.45 7.29831L2.1 3.79133L5.7 3.03306L7.6 0L11 1.37436L14.4 0L16.3 3.03306L19.9 3.79133L19.55 7.29831L22 9.95224L19.55 12.6062L19.9 16.1132L16.3 16.8714L14.4 19.9045L11 18.5301L7.6 19.9045ZM8.45 17.4875L11 16.4449L13.6 17.4875L15 15.2127L17.75 14.5966L17.5 11.9427L19.35 9.95224L17.5 7.9144L17.75 5.26047L15 4.69177L13.55 2.41697L11 3.45959L8.4 2.41697L7 4.69177L4.25 5.26047L4.5 7.9144L2.65 9.95224L4.5 11.9427L4.25 14.644L7 15.2127L8.45 17.4875ZM9.95 13.317L15.6 7.96179L14.2 6.58744L9.95 10.6157L7.8 8.62528L6.4 9.95224L9.95 13.317Z",
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
            height="29.25px"
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
              height="24.37px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 26.66666603088379,
                height: 24.372831344604492,
              }}
              paths={[
                {
                  d: "M0 24.3728L0 4.56991L6.66667 0L13.3333 4.56991L13.3333 7.31185L26.6667 7.31185L26.6667 24.3728L0 24.3728ZM2.66667 21.9355L5.33333 21.9355L5.33333 19.4983L2.66667 19.4983L2.66667 21.9355ZM2.66667 17.061L5.33333 17.061L5.33333 14.6237L2.66667 14.6237L2.66667 17.061ZM2.66667 12.1864L5.33333 12.1864L5.33333 9.74913L2.66667 9.74913L2.66667 12.1864ZM2.66667 7.31185L5.33333 7.31185L5.33333 4.87457L2.66667 4.87457L2.66667 7.31185ZM8 7.31185L10.6667 7.31185L10.6667 4.87457L8 4.87457L8 7.31185ZM8 21.9355L24 21.9355L24 9.74913L8 9.74913L8 21.9355ZM16 14.6237L16 12.1864L21.3333 12.1864L21.3333 14.6237L16 14.6237ZM16 19.4983L16 17.061L21.3333 17.061L21.3333 19.4983L16 19.4983ZM10.6667 14.6237L10.6667 12.1864L13.3333 12.1864L13.3333 14.6237L10.6667 14.6237ZM10.6667 19.4983L10.6667 17.061L13.3333 17.061L13.3333 19.4983L10.6667 19.4983Z",
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
            height="50.68px"
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
              height="50.68px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 65,
                height: 50.67808532714844,
              }}
              paths={[
                {
                  d: "M63 25.339C63 37.794 49.8366 48.6781 32.5 48.6781L32.5 52.6781C51.0619 52.6781 67 40.8728 67 25.339L63 25.339ZM32.5 48.6781C15.1634 48.6781 2 37.794 2 25.339L-2 25.339C-2 40.8728 13.9381 52.6781 32.5 52.6781L32.5 48.6781ZM2 25.339C2 12.884 15.1634 2 32.5 2L32.5 -2C13.9381 -2 -2 9.80531 -2 25.339L2 25.339ZM32.5 2C49.8366 2 63 12.884 63 25.339L67 25.339C67 9.80531 51.0619 -2 32.5 -2L32.5 2Z",
                  stroke: "rgba(22,70,89,1)",
                  fillRule: "nonzero",
                  strokeWidth: 2,
                },
                {
                  d: "M65 25.339C65 39.3334 50.4493 50.6781 32.5 50.6781C14.5507 50.6781 0 39.3334 0 25.339C0 11.3447 14.5507 0 32.5 0C50.4493 0 65 11.3447 65 25.339Z",
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
              height="23.04px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 22.855323791503906,
                height: 23.035491943359375,
              }}
              paths={[
                {
                  d: "M5.07896 15.357L5.07896 7.6785C5.07896 6.97464 5.32762 6.37209 5.82493 5.87085C6.32225 5.36962 6.92008 5.119 7.61844 5.119L17.9668 5.119L14.6972 1.82364L16.5066 0L22.8553 6.39875L16.5066 12.7975L14.6972 11.0058L17.9668 7.6785L7.61844 7.6785L7.61844 15.357L5.07896 15.357ZM2.53948 23.0355C1.84112 23.0355 1.24329 22.7849 0.745972 22.2836C0.248657 21.7824 0 21.1799 0 20.476L0 1.27975L2.53948 1.27975L2.53948 20.476L17.7764 20.476L17.7764 15.357L20.3158 15.357L20.3158 20.476C20.3158 21.1799 20.0672 21.7824 19.5699 22.2836C19.0726 22.7849 18.4747 23.0355 17.7764 23.0355L2.53948 23.0355Z",
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
            height="563.85px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="15.26%"
            bottom="24.56%"
            left="56.88%"
            right="1.78%"
            {...getOverrideProps(overrides, "Group 474")}
          >
            <Text
              fontFamily="Montserrat"
              fontSize="30px"
              fontWeight="600"
              color="rgba(255,255,255,1)"
              lineHeight="36.56999969482422px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="428.09px"
              height="29.3px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0%"
              bottom="94.8%"
              left="0%"
              right="31.83%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Outras vagas semelhantes"
              {...getOverrideProps(overrides, "Outras vagas semelhantes")}
            ></Text>
            <View
              width="628px"
              height="142.55px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="10.53%"
              bottom="64.19%"
              left="0%"
              right="0%"
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
              height="22.97px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="14.47%"
              bottom="81.46%"
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
              height="19.01px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="21.46%"
              bottom="75.17%"
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
              height="19.01px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="21.34%"
              bottom="75.29%"
              left="19.5%"
              right="53%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="New Berg"
              {...getOverrideProps(overrides, "New Berg")}
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
              width="113.04px"
              height="14.25px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="28.05%"
              bottom="69.42%"
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
              height="14.25px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="14.61%"
              bottom="82.87%"
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
              height="14.25px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="28.05%"
              bottom="69.42%"
              left="34.67%"
              right="55.17%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Remoto"
              {...getOverrideProps(overrides, "Remoto")}
            ></Text>
            <Icon
              width="20.93px"
              height="15.84px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 20.933332443237305,
                height: 15.838430404663086,
              }}
              paths={[
                {
                  d: "M0 15.8384L0 14.0786L20.9333 14.0786L20.9333 15.8384L0 15.8384ZM2.85455 13.1987C2.33121 13.1987 1.88321 13.0264 1.51053 12.6817C1.13785 12.3371 0.951515 11.9228 0.951515 11.4389L0.951515 1.75983C0.951515 1.27587 1.13785 0.861581 1.51053 0.516949C1.88321 0.172316 2.33121 0 2.85455 0L18.0788 0C18.6021 0 19.0501 0.172316 19.4228 0.516949C19.7955 0.861581 19.9818 1.27587 19.9818 1.75983L19.9818 11.4389C19.9818 11.9228 19.7955 12.3371 19.4228 12.6817C19.0501 13.0264 18.6021 13.1987 18.0788 13.1987L2.85455 13.1987ZM2.85455 11.4389L18.0788 11.4389L18.0788 1.75983L2.85455 1.75983L2.85455 11.4389Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27.91%"
              bottom="69.28%"
              left="30.17%"
              right="66.5%"
              {...getOverrideProps(overrides, "Vector40711098")}
            ></Icon>
            <Icon
              width="20.59px"
              height="0px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 1,
                height: 20.58995819091797,
              }}
              paths={[
                {
                  d: "M0 0L20.59 0L20.59 -1L0 -1L0 0Z",
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
              top="27.63%"
              bottom="72.37%"
              left="27%"
              right="69.72%"
              transformOrigin="top left"
              transform="rotate(90deg)"
              {...getOverrideProps(overrides, "Line 35")}
            ></Icon>
            <Button
              width="196.77px"
              height="40.39px"
              position="absolute"
              borderRadius="20px"
              top="21.68%"
              bottom="71.16%"
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
              height="142.55px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="42.56%"
              bottom="32.16%"
              left="0%"
              right="0%"
              borderRadius="15px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 15339885954")}
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
              width="404.01px"
              height="22.97px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="46.49%"
              bottom="49.44%"
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
              height="19.01px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="53.53%"
              bottom="43.1%"
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
              height="26.43px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="53.17%"
              bottom="42.14%"
              left="19.5%"
              right="65.05%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="City Corp"
              {...getOverrideProps(overrides, "City Corp")}
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
              width="113.04px"
              height="14.25px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="60.08%"
              bottom="37.4%"
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
              height="14.25px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="46.63%"
              bottom="50.84%"
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
              height="14.25px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="60.08%"
              bottom="37.4%"
              left="34.67%"
              right="56%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Híbrido"
              {...getOverrideProps(overrides, "H\u00EDbrido39885964")}
            ></Text>
            <Icon
              width="20.93px"
              height="15.84px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 20.933332443237305,
                height: 15.838430404663086,
              }}
              paths={[
                {
                  d: "M0 15.8384L0 2.96971L5.23333 0L10.4667 2.96971L10.4667 4.75153L20.9333 4.75153L20.9333 15.8384L0 15.8384ZM2.09333 14.2546L4.18667 14.2546L4.18667 12.6707L2.09333 12.6707L2.09333 14.2546ZM2.09333 11.0869L4.18667 11.0869L4.18667 9.50306L2.09333 9.50306L2.09333 11.0869ZM2.09333 7.91922L4.18667 7.91922L4.18667 6.33537L2.09333 6.33537L2.09333 7.91922ZM2.09333 4.75153L4.18667 4.75153L4.18667 3.16769L2.09333 3.16769L2.09333 4.75153ZM6.28 4.75153L8.37333 4.75153L8.37333 3.16769L6.28 3.16769L6.28 4.75153ZM6.28 14.2546L18.84 14.2546L18.84 6.33537L6.28 6.33537L6.28 14.2546ZM12.56 9.50306L12.56 7.91922L16.7467 7.91922L16.7467 9.50306L12.56 9.50306ZM12.56 12.6707L12.56 11.0869L16.7467 11.0869L16.7467 12.6707L12.56 12.6707ZM8.37333 9.50306L8.37333 7.91922L10.4667 7.91922L10.4667 9.50306L8.37333 9.50306ZM8.37333 12.6707L8.37333 11.0869L10.4667 11.0869L10.4667 12.6707L8.37333 12.6707Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="59.93%"
              bottom="37.26%"
              left="30.17%"
              right="66.5%"
              {...getOverrideProps(overrides, "Vector40711092")}
            ></Icon>
            <Button
              width="196.77px"
              height="40.39px"
              position="absolute"
              borderRadius="20px"
              top="55.11%"
              bottom="37.73%"
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
              height="142.55px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="74.72%"
              bottom="0%"
              left="0%"
              right="0%"
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
              height="22.97px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="78.65%"
              bottom="17.28%"
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
              height="19.01px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="85.66%"
              bottom="10.97%"
              left="5.89%"
              right="88.44%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="4,4"
              {...getOverrideProps(overrides, "4,4")}
            ></Text>
            <View
              width="34.54px"
              height="26.13px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="85.66%"
              bottom="9.7%"
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
                height="20.69px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 28.783334732055664,
                  height: 20.688947677612305,
                }}
                paths={[
                  {
                    d: "M9.85829 16.1428L14.3917 14.0739L18.925 16.17L17.7377 12.25L21.7314 9.63669L16.4785 9.2828L14.3917 5.58057L12.3049 9.25558L7.05192 9.60947L11.0456 12.25L9.85829 16.1428ZM5.50481 20.6889L7.84346 13.0395L0 7.89447L10.362 7.21391L14.3917 0L18.4213 7.21391L28.7833 7.89447L20.9399 13.0395L23.2785 20.6889L14.3917 16.6328L5.50481 20.6889Z",
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
              height="19.01px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="85.33%"
              bottom="11.3%"
              left="19.5%"
              right="53%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Aurora Tech"
              {...getOverrideProps(overrides, "Aurora Tech")}
            ></Text>
            <View
              width="25.12px"
              height="19.01px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="86.45%"
              bottom="10.18%"
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
                height="16.63px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 23.02666664123535,
                  height: 16.630352020263672,
                }}
                paths={[
                  {
                    d: "M7.95467 16.6304L5.966 14.0962L2.198 13.4627L2.56433 10.5326L0 8.31518L2.56433 6.0978L2.198 3.16769L5.966 2.53415L7.95467 0L11.5133 1.14829L15.072 0L17.0607 2.53415L20.8287 3.16769L20.4623 6.0978L23.0267 8.31518L20.4623 10.5326L20.8287 13.4627L17.0607 14.0962L15.072 16.6304L11.5133 15.4821L7.95467 16.6304ZM8.84433 14.611L11.5133 13.7398L14.2347 14.611L15.7 12.7103L18.5783 12.1956L18.3167 9.97821L20.253 8.31518L18.3167 6.61255L18.5783 4.39516L15.7 3.92001L14.1823 2.0194L11.5133 2.89051L8.792 2.0194L7.32667 3.92001L4.44833 4.39516L4.71 6.61255L2.77367 8.31518L4.71 9.97821L4.44833 12.2352L7.32667 12.7103L8.84433 14.611ZM10.4143 11.1265L16.328 6.65214L14.8627 5.50385L10.4143 8.86952L8.164 7.20649L6.69867 8.31518L10.4143 11.1265Z",
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
              fontFamily="Montserrat"
              fontSize="15px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="18.28499984741211px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="113.04px"
              height="14.25px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="91.65%"
              bottom="5.82%"
              left="6%"
              right="76%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="São Paulo - SP"
              {...getOverrideProps(overrides, "S\u00E3o Paulo - SP39885979")}
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
              width="53.38px"
              height="14.25px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="78.79%"
              bottom="18.68%"
              left="85.17%"
              right="6.33%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="26 ago"
              {...getOverrideProps(overrides, "26 ago")}
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
              width="81.64px"
              height="14.25px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="91.65%"
              bottom="5.82%"
              left="34.67%"
              right="52.33%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Presencial"
              {...getOverrideProps(overrides, "Presencial")}
            ></Text>
            <Button
              width="196.77px"
              height="40.39px"
              position="absolute"
              borderRadius="20px"
              top="87.27%"
              bottom="5.57%"
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
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 21, height: 14 }}
              paths={[
                {
                  d: "M0 14L0 3.11111L4.66667 3.11111L4.66667 0L16.3333 0L16.3333 6.22222L21 6.22222L21 14L11.6667 14L11.6667 10.8889L9.33333 10.8889L9.33333 14L0 14ZM2.33333 12.4444L4.66667 12.4444L4.66667 10.8889L2.33333 10.8889L2.33333 12.4444ZM2.33333 9.33333L4.66667 9.33333L4.66667 7.77778L2.33333 7.77778L2.33333 9.33333ZM2.33333 6.22222L4.66667 6.22222L4.66667 4.66667L2.33333 4.66667L2.33333 6.22222ZM7 9.33333L9.33333 9.33333L9.33333 7.77778L7 7.77778L7 9.33333ZM7 6.22222L9.33333 6.22222L9.33333 4.66667L7 4.66667L7 6.22222ZM7 3.11111L9.33333 3.11111L9.33333 1.55556L7 1.55556L7 3.11111ZM11.6667 9.33333L14 9.33333L14 7.77778L11.6667 7.77778L11.6667 9.33333ZM11.6667 6.22222L14 6.22222L14 4.66667L11.6667 4.66667L11.6667 6.22222ZM11.6667 3.11111L14 3.11111L14 1.55556L11.6667 1.55556L11.6667 3.11111ZM16.3333 12.4444L18.6667 12.4444L18.6667 10.8889L16.3333 10.8889L16.3333 12.4444ZM16.3333 9.33333L18.6667 9.33333L18.6667 7.77778L16.3333 7.77778L16.3333 9.33333Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="91.69%"
              bottom="5.83%"
              left="30.1%"
              right="66.56%"
              {...getOverrideProps(overrides, "Vector40711090")}
            ></Icon>
          </View>
          <View
            width="34.54px"
            height="26.13px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="49.63%"
            bottom="47.58%"
            left="62.54%"
            right="35.18%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(
              overrides,
              "star_24dp_000000_FILL0_wght400_GRAD0_opsz24 14386765"
            )}
          >
            <Icon
              width="28.78px"
              height="20.69px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 28.783334732055664,
                height: 20.688947677612305,
              }}
              paths={[
                {
                  d: "M9.85829 16.1428L14.3917 14.0739L18.925 16.17L17.7377 12.25L21.7314 9.63669L16.4785 9.2828L14.3917 5.58057L12.3049 9.25558L7.05192 9.60947L11.0456 12.25L9.85829 16.1428ZM5.50481 20.6889L7.84346 13.0395L0 7.89447L10.362 7.21391L14.3917 0L18.4213 7.21391L28.7833 7.89447L20.9399 13.0395L23.2785 20.6889L14.3917 16.6328L5.50481 20.6889Z",
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
            height="20.69px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 28.783334732055664,
              height: 20.688947677612305,
            }}
            paths={[
              {
                d: "M9.85829 16.1428L14.3917 14.0739L18.925 16.17L17.7377 12.25L21.7314 9.63669L16.4785 9.2828L14.3917 5.58057L12.3049 9.25558L7.05192 9.60947L11.0456 12.25L9.85829 16.1428ZM5.50481 20.6889L7.84346 13.0395L0 7.89447L10.362 7.21391L14.3917 0L18.4213 7.21391L28.7833 7.89447L20.9399 13.0395L23.2785 20.6889L14.3917 16.6328L5.50481 20.6889Z",
                fill: "rgba(255,255,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="30.52%"
            bottom="67.27%"
            left="62.74%"
            right="35.37%"
            {...getOverrideProps(overrides, "Vector4386768")}
          ></Icon>
        </View>
      </View>
    </View>
  );
}
