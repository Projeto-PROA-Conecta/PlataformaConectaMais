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
export default function MeuPerfil(props) {
  const { bancoImagens, overrides, ...rest } = props;
  return (
    <View
      width="1519px"
      height="1882px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "MeuPerfil")}
      {...rest}
    >
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
          {...getOverrideProps(overrides, "Frame 3214387826")}
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
            {...getOverrideProps(overrides, "Vector4387827")}
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
            {...getOverrideProps(overrides, "Vector4387828")}
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
            {...getOverrideProps(overrides, "Vector4387829")}
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
            {...getOverrideProps(overrides, "Vector4387830")}
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
          {...getOverrideProps(overrides, "Frame 3214387833")}
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
            {...getOverrideProps(overrides, "Button4387834")}
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
            {...getOverrideProps(overrides, "Button4387835")}
          ></Button>
        </Flex>
      </Flex>
      <Image
        width="1514px"
        height="1702px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="180px"
        left="1px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Fundo Novo")}
      ></Image>
      <View
        padding="0px 0px 0px 0px"
        width="523.86px"
        height="1336.9px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="351.57px"
        left="43.76px"
        {...getOverrideProps(overrides, "Group 408")}
      >
        <View
          width="368px"
          height="459px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="114.86px"
          border="1px SOLID rgba(0,0,0,1)"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 122")}
        ></View>
        <Image
          width="196px"
          height="192px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="37px"
          left="190.86px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={bancoImagens?.PerfilAvatar}
          {...getOverrideProps(overrides, "AvatarPerfil 141002006")}
        ></Image>
        <Icon
          width="41px"
          height="40px"
          viewBox={{ minX: 0, minY: 0, width: 41, height: 40 }}
          paths={[
            {
              d: "M41 20C41 31.0457 31.8218 40 20.5 40C9.17816 40 0 31.0457 0 20C0 8.9543 9.17816 0 20.5 0C31.8218 0 41 8.9543 41 20Z",
              fill: "rgba(22,70,89,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="170px"
          left="350.86px"
          {...getOverrideProps(overrides, "Ellipse 105")}
        ></Icon>
        <View
          width="21px"
          height="19px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="179.47px"
          left="360.24px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1"
          )}
        >
          <Icon
            width="15.75px"
            height="14.25px"
            viewBox={{ minX: 0, minY: 0, width: 15.75, height: 14.25 }}
            paths={[
              {
                d: "M1.75 12.6667L2.99688 12.6667L11.55 4.92812L10.3031 3.8L1.75 11.5385L1.75 12.6667ZM0 14.25L0 10.8854L11.55 0.455208C11.725 0.310069 11.9182 0.197917 12.1297 0.11875C12.3411 0.0395833 12.5635 0 12.7969 0C13.0302 0 13.2562 0.0395833 13.475 0.11875C13.6937 0.197917 13.8833 0.316667 14.0437 0.475L15.2469 1.58333C15.4219 1.72847 15.5495 1.9 15.6297 2.09792C15.7099 2.29583 15.75 2.49375 15.75 2.69167C15.75 2.90278 15.7099 3.10399 15.6297 3.29531C15.5495 3.48663 15.4219 3.66146 15.2469 3.81979L3.71875 14.25L0 14.25ZM10.9156 4.37396L10.3031 3.8L11.55 4.92812L10.9156 4.37396Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.5%"
            bottom="12.5%"
            left="12.5%"
            right="12.5%"
            {...getOverrideProps(overrides, "Vector39882924")}
          ></Icon>
        </View>
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
          width="262.1px"
          height="24px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="254px"
          left="172.86px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="João Pedro Borges"
          {...getOverrideProps(overrides, "Jo\u00E3o Pedro Borges39882925")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="367.97px"
          height="63.98px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="636.11px"
          left="114.86px"
          {...getOverrideProps(overrides, "Group 404")}
        >
          <View
            width="367.97px"
            height="63.98px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            border="1px SOLID rgba(0,0,0,1)"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle 12339882927")}
          ></View>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="90.15px"
            height="22.68px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="23.49px"
            left="31.96px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Status"
            {...getOverrideProps(overrides, "Status")}
          ></Text>
          <SelectField
            width="186.03px"
            height="37.25px"
            placeholder="Ativo"
            position="absolute"
            top="15.39px"
            left="131.95px"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "SelectField")}
          ></SelectField>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="368.86px"
          height="297.93px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="705.82px"
          left="114.86px"
          {...getOverrideProps(overrides, "Group 407")}
        >
          <View
            width="368.86px"
            height="297.93px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            border="1px SOLID rgba(0,0,0,1)"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle 125")}
          ></View>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="242.34px"
            height="43.84px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="13.61px"
            left="36.38px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Acompanhe o preenchimento de seu currículo aqui! "
            {...getOverrideProps(
              overrides,
              "Acompanhe o preenchimento de seu curr\u00EDculo aqui!"
            )}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="19.503999710083008px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="83.79px"
            height="21.11px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="154.24px"
            left="32.04px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Currículo"
            {...getOverrideProps(overrides, "Curr\u00EDculo")}
          ></Text>
          <View
            width="38.61px"
            height="33.28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="21.11px"
            left="301.49px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Smiling")}
          ></View>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="285.06px"
            height="43.03px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="78.74px"
            left="32.04px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Você está quase lá, falta pouco para o seu currículo ficar pronto!"
            {...getOverrideProps(
              overrides,
              "Voc\u00EA est\u00E1 quase l\u00E1, falta pouco para o seu curr\u00EDculo ficar pronto!"
            )}
          ></Text>
          <View
            width="262.06px"
            height="8.12px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="123.39px"
            left="32.04px"
            border="1px SOLID rgba(0,0,0,0.5)"
            borderRadius="50px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle 127")}
          ></View>
          <View
            width="175.8px"
            height="8.12px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="123.39px"
            left="32.04px"
            borderRadius="50px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(234,191,63,1)"
            {...getOverrideProps(overrides, "Rectangle 142")}
          ></View>
          <Text
            fontFamily="Montserrat"
            fontSize="10px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="12.1899995803833px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="45.18px"
            height="20.29px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="121.77px"
            left="308.89px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="60%"
            {...getOverrideProps(overrides, "60%")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="368.86px"
          height="323.09px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="1013.81px"
          left="114.86px"
          {...getOverrideProps(overrides, "Group 406")}
        >
          <View
            width="368.86px"
            height="323.09px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            border="1px SOLID rgba(0,0,0,1)"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle 126")}
          ></View>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="243.17px"
            height="25.17px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="19.48px"
            left="73.94px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Escolaridade / Formação"
            {...getOverrideProps(
              overrides,
              "Escolaridade / Forma\u00E7\u00E3o"
            )}
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
            width="165.12px"
            height="14.61px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="127.45px"
            left="32.04px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Curso:"
            {...getOverrideProps(overrides, "Curso:")}
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
            width="165.12px"
            height="14.61px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="198.89px"
            left="32.04px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Período do Curso:"
            {...getOverrideProps(overrides, "Per\u00EDodo do Curso:")}
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
            width="165.12px"
            height="14.61px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="254.9px"
            left="32.04px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Ano / Semestre:"
            {...getOverrideProps(overrides, "Ano / Semestre:")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="15px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="22.5px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="216.06px"
            height="14.61px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="93.36px"
            left="28.75px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Fatec Ferraz de Vasconcelos"
            {...getOverrideProps(overrides, "Fatec Ferraz de Vasconcelos")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="15px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="22.5px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="285.06px"
            height="14.61px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="147.75px"
            left="32.04px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="ADS - Análise e Desenvolvimento de Sistemas"
            {...getOverrideProps(
              overrides,
              "ADS - An\u00E1lise e Desenvolvimento de Sistemas"
            )}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="15px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="18.28499984741211px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="285.06px"
            height="14.61px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="219.18px"
            left="32.04px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Vespertino"
            {...getOverrideProps(overrides, "Vespertino")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="15px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="18.28499984741211px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="285.06px"
            height="14.61px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="276.82px"
            left="32.04px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="2° Semestre"
            {...getOverrideProps(overrides, "2\u00B0 Semestre")}
          ></Text>
          <View
            width="23px"
            height="22.73px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="19.48px"
            left="38.61px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(
              overrides,
              "book_2_24dp_000000_FILL0_wght400_GRAD0_opsz24 1"
            )}
          >
            <Icon
              width="15.33px"
              height="18.94px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 15.334806442260742,
                height: 18.941875457763672,
              }}
              paths={[
                {
                  d: "M3.35449 18.9419C2.42801 18.9419 1.63731 18.6183 0.982386 17.9711C0.327462 17.3239 0 16.5426 0 15.627L0 3.31483C0 2.3993 0.327462 1.61795 0.982386 0.970771C1.63731 0.32359 2.42801 0 3.35449 0L15.3348 0L15.3348 14.2064C14.9355 14.2064 14.596 14.3445 14.3165 14.6208C14.0369 14.897 13.8972 15.2324 13.8972 15.627C13.8972 16.0217 14.0369 16.3571 14.3165 16.6333C14.596 16.9096 14.9355 17.0477 15.3348 17.0477L15.3348 18.9419L3.35449 18.9419ZM1.91685 12.62C2.14048 12.5095 2.3721 12.4306 2.61171 12.3833C2.85132 12.3359 3.09891 12.3122 3.35449 12.3122L3.8337 12.3122L3.8337 1.89419L3.35449 1.89419C2.95515 1.89419 2.6157 2.03231 2.33616 2.30854C2.05662 2.58478 1.91685 2.92021 1.91685 3.31483L1.91685 12.62ZM5.75055 12.3122L13.418 12.3122L13.418 1.89419L5.75055 1.89419L5.75055 12.3122ZM3.35449 17.0477L12.2918 17.0477C12.196 16.8267 12.1201 16.6018 12.0642 16.3729C12.0083 16.144 11.9803 15.8954 11.9803 15.627C11.9803 15.3745 12.0043 15.1298 12.0522 14.893C12.1001 14.6563 12.18 14.4274 12.2918 14.2064L3.35449 14.2064C2.93917 14.2064 2.59574 14.3445 2.32418 14.6208C2.05263 14.897 1.91685 15.2324 1.91685 15.627C1.91685 16.0375 2.05263 16.3768 2.32418 16.6452C2.59574 16.9135 2.93917 17.0477 3.35449 17.0477Z",
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
              left="16.67%"
              right="16.67%"
              {...getOverrideProps(overrides, "Vector39882953")}
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
            width="165.94px"
            height="14.61px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="72.25px"
            left="28.75px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Instituição de Ensino:"
            {...getOverrideProps(overrides, "Institui\u00E7\u00E3o de Ensino:")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="368.86px"
          height="143.69px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="461.7px"
          left="114.86px"
          {...getOverrideProps(overrides, "Group 405")}
        >
          <View
            width="368.86px"
            height="143.69px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            border="1px SOLID rgba(0,0,0,1)"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle 12339882956")}
          ></View>
        </View>
        <Text
          fontFamily="Montserrat"
          fontSize="15px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="18.28499984741211px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="190px"
          height="20px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="346.4px"
          left="167.8px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Telefone: (11) 91234-6789"
          {...getOverrideProps(overrides, "Telefone: (11) 91234-6789")}
        ></Text>
        <Text
          fontFamily="Montserrat"
          fontSize="15px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="18.28499984741211px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="307.41px"
          height="20px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="384.9px"
          left="160.86px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="E-mail: joaoborges.2010@gmail.com"
          {...getOverrideProps(overrides, "E-mail: joaoborges.2010@gmail.com")}
        ></Text>
        <Text
          fontFamily="Montserrat"
          fontSize="15px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="18.28499984741211px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="366px"
          height="20px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="426.9px"
          left="157.86px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Nível da Condição: Nível 2"
          {...getOverrideProps(
            overrides,
            "N\u00EDvel da Condi\u00E7\u00E3o: N\u00EDvel 2"
          )}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="16px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="243px"
          height="25px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="304.33px"
          left="171px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Informações do Usuário"
          {...getOverrideProps(
            overrides,
            "Informa\u00E7\u00F5es do Usu\u00E1rio"
          )}
        ></Text>
        <Text
          fontFamily="Montserrat"
          fontSize="16px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="19.503999710083008px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="242px"
          height="26px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="476.43px"
          left="178.24px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sobre Mim:"
          {...getOverrideProps(overrides, "Sobre Mim:")}
        ></Text>
        <Icon
          width="361px"
          height="0px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 361,
            height: 0.0004882807852482074,
          }}
          paths={[
            {
              d: "M0 0L361 0L361 -1L0 -1L0 0Z",
              stroke: "rgba(58,58,58,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="337.43px"
          left="117.24px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          {...getOverrideProps(overrides, "Line 52")}
        ></Icon>
        <View
          width="35px"
          height="34.59px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="212.34px"
          left="14px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Male User")}
        ></View>
        <View
          width="24px"
          height="23.72px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="453.49px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "person_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1"
          )}
        ></View>
        <View
          width="29px"
          height="28px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="469.43px"
          left="143.24px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ProfileIconBlack 141121464")}
        >
          <Icon
            width="19.33px"
            height="18.67px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 19.33333396911621,
              height: 18.66666603088379,
            }}
            paths={[
              {
                d: "M9.66667 9.33333C8.3375 9.33333 7.19965 8.87639 6.25313 7.9625C5.3066 7.04861 4.83333 5.95 4.83333 4.66667C4.83333 3.38333 5.3066 2.28472 6.25313 1.37083C7.19965 0.456944 8.3375 0 9.66667 0C10.9958 0 12.1337 0.456944 13.0802 1.37083C14.0267 2.28472 14.5 3.38333 14.5 4.66667C14.5 5.95 14.0267 7.04861 13.0802 7.9625C12.1337 8.87639 10.9958 9.33333 9.66667 9.33333ZM0 18.6667L0 15.4C0 14.7389 0.176215 14.1312 0.528646 13.5771C0.881076 13.0229 1.34931 12.6 1.93333 12.3083C3.18194 11.7056 4.45069 11.2535 5.73958 10.9521C7.02847 10.6507 8.3375 10.5 9.66667 10.5C10.9958 10.5 12.3049 10.6507 13.5938 10.9521C14.8826 11.2535 16.1514 11.7056 17.4 12.3083C17.984 12.6 18.4523 13.0229 18.8047 13.5771C19.1571 14.1312 19.3333 14.7389 19.3333 15.4L19.3333 18.6667L0 18.6667ZM2.41667 16.3333L16.9167 16.3333L16.9167 15.4C16.9167 15.1861 16.8613 14.9917 16.7505 14.8167C16.6398 14.6417 16.4937 14.5056 16.3125 14.4083C15.225 13.8833 14.1274 13.4896 13.0198 13.2271C11.9122 12.9646 10.7944 12.8333 9.66667 12.8333C8.53889 12.8333 7.42118 12.9646 6.31354 13.2271C5.2059 13.4896 4.10833 13.8833 3.02083 14.4083C2.83958 14.5056 2.69358 14.6417 2.58281 14.8167C2.47205 14.9917 2.41667 15.1861 2.41667 15.4L2.41667 16.3333ZM9.66667 7C10.3313 7 10.9002 6.77153 11.3734 6.31458C11.8467 5.85764 12.0833 5.30833 12.0833 4.66667C12.0833 4.025 11.8467 3.47569 11.3734 3.01875C10.9002 2.56181 10.3313 2.33333 9.66667 2.33333C9.00208 2.33333 8.43316 2.56181 7.9599 3.01875C7.48663 3.47569 7.25 4.025 7.25 4.66667C7.25 5.30833 7.48663 5.85764 7.9599 6.31458C8.43316 6.77153 9.00208 7 9.66667 7Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="17.14%"
            bottom="16.19%"
            left="0%"
            right="33.33%"
            {...getOverrideProps(overrides, "Vector41121465")}
          ></Icon>
        </View>
        <Text
          fontFamily="Poppins"
          fontSize="10px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="15px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="336px"
          height="68px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="503.43px"
          left="133.24px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sou João, desenvolvedor front-end, apaixonado por tecnologia e sempre em busca de aprender. &#xA;Gosto de resolver problemas e criar interfaces funcionais e bonitas. Busco oportunidades em empresas inclusivas onde eu possa crescer e fazer a diferença com meu trabalho e conhecimentos. "
          {...getOverrideProps(
            overrides,
            "Sou Jo\u00E3o, desenvolvedor front-end, apaixonado por tecnologia e sempre em busca de aprender. Gosto de resolver problemas e criar interfaces funcionais e bonitas. Busco oportunidades em empresas inclusivas onde eu possa crescer e fazer a diferen\u00E7a com meu trabalho e conhecimentos."
          )}
        ></Text>
      </View>
      <View
        width="26px"
        height="27px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="31.75%"
        bottom="66.81%"
        left="11.76%"
        right="86.53%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ProfileIconBlack 141121461")}
      >
        <Icon
          width="17.33px"
          height="18px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 17.33333396911621,
            height: 17.999998092651367,
          }}
          paths={[
            {
              d: "M8.66667 9C7.475 9 6.45486 8.55937 5.60625 7.67812C4.75764 6.79687 4.33333 5.7375 4.33333 4.5C4.33333 3.2625 4.75764 2.20312 5.60625 1.32187C6.45486 0.440625 7.475 0 8.66667 0C9.85833 0 10.8785 0.440625 11.7271 1.32187C12.5757 2.20312 13 3.2625 13 4.5C13 5.7375 12.5757 6.79687 11.7271 7.67812C10.8785 8.55937 9.85833 9 8.66667 9ZM0 18L0 14.85C0 14.2125 0.157986 13.6266 0.473958 13.0922C0.789931 12.5578 1.20972 12.15 1.73333 11.8687C2.85278 11.2875 3.99028 10.8516 5.14583 10.5609C6.30139 10.2703 7.475 10.125 8.66667 10.125C9.85833 10.125 11.0319 10.2703 12.1875 10.5609C13.3431 10.8516 14.4806 11.2875 15.6 11.8687C16.1236 12.15 16.5434 12.5578 16.8594 13.0922C17.1753 13.6266 17.3333 14.2125 17.3333 14.85L17.3333 18L0 18ZM2.16667 15.75L15.1667 15.75L15.1667 14.85C15.1667 14.6437 15.117 14.4562 15.0177 14.2875C14.9184 14.1187 14.7875 13.9875 14.625 13.8937C13.65 13.3875 12.666 13.0078 11.6729 12.7547C10.6799 12.5016 9.67778 12.375 8.66667 12.375C7.65556 12.375 6.65347 12.5016 5.66042 12.7547C4.66736 13.0078 3.68333 13.3875 2.70833 13.8937C2.54583 13.9875 2.41493 14.1187 2.31562 14.2875C2.21632 14.4562 2.16667 14.6437 2.16667 14.85L2.16667 15.75ZM8.66667 6.75C9.2625 6.75 9.77257 6.52969 10.1969 6.08906C10.6212 5.64844 10.8333 5.11875 10.8333 4.5C10.8333 3.88125 10.6212 3.35156 10.1969 2.91094C9.77257 2.47031 9.2625 2.25 8.66667 2.25C8.07083 2.25 7.56076 2.47031 7.13646 2.91094C6.71215 3.35156 6.5 3.88125 6.5 4.5C6.5 5.11875 6.71215 5.64844 7.13646 6.08906C7.56076 6.52969 8.07083 6.75 8.66667 6.75Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="17.14%"
          bottom="16.19%"
          left="0%"
          right="33.33%"
          {...getOverrideProps(overrides, "Vector41121462")}
        ></Icon>
      </View>
      <Text
        fontFamily="Montserrat"
        fontSize="40px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="48.7599983215332px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="59.81px"
        height="22.96px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1381.35px"
        left="1199.17px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="+ 4"
        {...getOverrideProps(overrides, "+ 439882978")}
      ></Text>
      <Icon
        width="641.11px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 641.1144409179688, height: 1 }}
        paths={[
          {
            d: "M0 0L641.114 0L641.114 -1L0 -1L0 0Z",
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
        top="1521.48px"
        left="698.24px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Line 28")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="805.51px"
        height="1301.27px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="352.07px"
        left="540.6px"
        {...getOverrideProps(overrides, "Group 95")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="805.51px"
          height="1301.27px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Group 94")}
        >
          <View
            width="805.51px"
            height="414.68px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            border="1px SOLID rgba(0,0,0,1)"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle 130")}
          ></View>
          <View
            width="805.51px"
            height="880.32px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="420.95px"
            left="0px"
            border="1px SOLID rgba(0,0,0,1)"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle 131")}
          ></View>
          <Button
            width="382px"
            height="41px"
            position="absolute"
            top="24.93px"
            left="15.4px"
            backgroundColor="rgba(234,191,63,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Vagas que estou participando "
            {...getOverrideProps(overrides, "Button39882984")}
          ></Button>
          <Button
            width="369.03px"
            height="43.44px"
            position="absolute"
            border="5px SOLID rgba(234,191,63,1)"
            padding="3px 11px 3px 11px"
            top="22.13px"
            left="409.82px"
            backgroundColor="rgba(242,255,248,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Consultar todas as vagas"
            {...getOverrideProps(overrides, "Button39882985")}
          ></Button>
          <Text
            fontFamily="Poppins"
            fontSize="30px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="45px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="458.58px"
            height="18.81px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="457.55px"
            left="43.2px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Suas Publicações"
            {...getOverrideProps(overrides, "Suas Publica\u00E7\u00F5es")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="29px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="43.5px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="665px"
            height="43px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="195.93px"
            left="67.4px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Poxaaa, que pena  :( "
            {...getOverrideProps(overrides, "Poxaaa, que pena :(")}
          ></Text>
          <View
            width="690.67px"
            height="556.57px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="599.68px"
            left="72.57px"
            border="1px SOLID rgba(0,0,0,0.4)"
            borderRadius="10px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,0.6)"
            {...getOverrideProps(overrides, "Rectangle 134")}
          ></View>
          <View
            width="690.67px"
            height="119.94px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1171.14px"
            left="72.57px"
            border="1px SOLID rgba(0,0,0,0.4)"
            borderRadius="10px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,0.6)"
            {...getOverrideProps(overrides, "Rectangle 138")}
          ></View>
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
            width="9.57px"
            height="31.36px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1231.5px"
            left="210.55px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="."
            {...getOverrideProps(overrides, ".39882990")}
          ></Text>
          <Button
            width="223.03px"
            height="53.27px"
            position="absolute"
            borderRadius="30px"
            top="521.97px"
            left="67.79px"
            backgroundColor="rgba(22,73,86,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Publicações"
            {...getOverrideProps(overrides, "Button39882991")}
          ></Button>
          <Button
            width="223.03px"
            height="53.27px"
            position="absolute"
            border="2px SOLID rgba(0,0,0,1)"
            borderRadius="30px"
            padding="6px 14px 6px 14px"
            top="521.22px"
            left="540.42px"
            backgroundColor="rgba(255,255,255,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Destaques"
            {...getOverrideProps(overrides, "Button39882992")}
          ></Button>
          <Text
            fontFamily="Montserrat"
            fontSize="28px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="34.13199996948242px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="246.44px"
            height="31.36px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="628.93px"
            left="209.39px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="João Pedro Borges"
            {...getOverrideProps(overrides, "Jo\u00E3o Pedro Borges39882993")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="28px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="34.13199996948242px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="327.87px"
            height="31.36px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1210.34px"
            left="208.16px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="João Pedro Borges"
            {...getOverrideProps(overrides, "Jo\u00E3o Pedro Borges39882994")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="36px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="43.88399887084961px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="44px"
            height="13px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="614.93px"
            left="701.39px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="..."
            {...getOverrideProps(overrides, "...39882995")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="36px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="43.88399887084961px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="52.55px"
            height="25.87px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1181.33px"
            left="702.63px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="..."
            {...getOverrideProps(overrides, "...39882996")}
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
            width="66px"
            height="40px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="693.93px"
            left="229.39px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Você"
            {...getOverrideProps(overrides, "Voc\u00EA39882997")}
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
            width="83.8px"
            height="21.17px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1241.69px"
            left="228.09px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Você"
            {...getOverrideProps(overrides, "Voc\u00EA39882998")}
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
            width="9.57px"
            height="31.36px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="680.93px"
            left="199.39px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="."
            {...getOverrideProps(overrides, ".39882999")}
          ></Text>
          <Image
            width="79.7px"
            height="96.59px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="617.11px"
            left="105.08px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.PerfilAvatar}
            {...getOverrideProps(overrides, "AvatarPerfil 141042416")}
          ></Image>
          <Image
            width="79.7px"
            height="96.59px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1188.32px"
            left="105.08px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.PerfilAvatar}
            {...getOverrideProps(overrides, "AvatarPerfil 3")}
          ></Image>
          <Text
            fontFamily="Montserrat"
            fontSize="25px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="30.475000381469727px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="591.77px"
            height="87.8px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="722.75px"
            left="101.29px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Boa tarde amigos!&#xA;Hoje tive a incrível oportunidade de visitar a sede da CityCorp, e posso dizer que essa experiência foi ...mais"
            {...getOverrideProps(
              overrides,
              "Boa tarde amigos! Hoje tive a incr\u00EDvel oportunidade de visitar a sede da CityCorp, e posso dizer que essa experi\u00EAncia foi ...mais"
            )}
          ></Text>
          <Image
            width="160.3px"
            height="233.6px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="856.93px"
            left="99.39px"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.Post1}
            {...getOverrideProps(overrides, "image39883005")}
          ></Image>
          <Image
            width="188.22px"
            height="116.02px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="852.93px"
            left="270.39px"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.Post2}
            {...getOverrideProps(overrides, "image39883006")}
          ></Image>
          <Image
            width="188px"
            height="109px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="852.93px"
            left="469.39px"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.Post3}
            {...getOverrideProps(overrides, "image39883007")}
          ></Image>
          <Image
            width="188.22px"
            height="112.1px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="977.93px"
            left="270.39px"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.Post4}
            {...getOverrideProps(overrides, "image39883008")}
          ></Image>
          <Image
            width="188.22px"
            height="112.1px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="979.93px"
            left="469.39px"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.Post5}
            {...getOverrideProps(overrides, "image39883009")}
          ></Image>
          <Text
            fontFamily="Montserrat"
            fontSize="40px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="48.7599983215332px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="115.27px"
            height="19.67px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="996.93px"
            left="523.39px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="+ 4"
            {...getOverrideProps(overrides, "+ 439883010")}
          ></Text>
          <View
            padding="0px 0px 0px 0px"
            width="655.28px"
            height="33.13px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1111.2px"
            left="90.39px"
            {...getOverrideProps(overrides, "Group 65")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="655.28px"
              height="33.13px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="0px"
              {...getOverrideProps(overrides, "Group 66")}
            >
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
                width="78.18px"
                height="20.49px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="2.74px"
                left="41px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Gostei"
                {...getOverrideProps(overrides, "Gostei")}
              ></Text>
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
                width="148.31px"
                height="31.36px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="0px"
                left="245.95px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Comentar"
                {...getOverrideProps(overrides, "Comentar")}
              ></Text>
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
                width="175.28px"
                height="31.36px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="0.74px"
                left="480px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Compartilhar"
                {...getOverrideProps(overrides, "Compartilhar")}
              ></Text>
              <View
                width="30px"
                height="30.4px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="0.74px"
                left="0px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "LikeIconBlack 1")}
              >
                <Icon
                  width="26.25px"
                  height="25.33px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 26.25,
                    height: 25.33294105529785,
                  }}
                  paths={[
                    {
                      d: "M20 25.3329L6.25 25.3329L6.25 8.86653L15 0L16.5625 1.58331C16.7083 1.73108 16.8281 1.93164 16.9219 2.18497C17.0156 2.4383 17.0625 2.68107 17.0625 2.91329L17.0625 3.35661L15.6875 8.86653L23.75 8.86653C24.4167 8.86653 25 9.11986 25.5 9.62652C26 10.1332 26.25 10.7243 26.25 11.3998L26.25 13.9331C26.25 14.0809 26.2292 14.2392 26.1875 14.4081C26.1458 14.577 26.1042 14.7353 26.0625 14.8831L22.3125 23.813C22.125 24.2352 21.8125 24.5941 21.375 24.8896C20.9375 25.1852 20.4792 25.3329 20 25.3329ZM8.75 22.7996L20 22.7996L23.75 13.9331L23.75 11.3998L12.5 11.3998L14.1875 4.43326L8.75 9.94318L8.75 22.7996ZM6.25 8.86653L6.25 11.3998L2.5 11.3998L2.5 22.7996L6.25 22.7996L6.25 25.3329L0 25.3329L0 8.86653L6.25 8.86653Z",
                      fill: "rgba(0,0,0,1)",
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
                  right="4.17%"
                  {...getOverrideProps(overrides, "Vector41211347")}
                ></Icon>
              </View>
              <View
                width="30px"
                height="30.4px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="2.74px"
                left="446px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "SendIconBlack 1")}
              >
                <Icon
                  width="23.75px"
                  height="20.27px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 23.75,
                    height: 20.2663516998291,
                  }}
                  paths={[
                    {
                      d: "M0 20.2664L0 0L23.75 10.1332L0 20.2664ZM2.5 16.4664L17.3125 10.1332L2.5 3.79994L2.5 8.23321L10 10.1332L2.5 12.0331L2.5 16.4664Z",
                      fill: "rgba(0,0,0,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="16.67%"
                  bottom="16.67%"
                  left="12.5%"
                  right="8.33%"
                  {...getOverrideProps(overrides, "Vector41211342")}
                ></Icon>
              </View>
            </View>
          </View>
          <Text
            fontFamily="Montserrat"
            fontSize="15px"
            fontWeight="300"
            color="rgba(0,0,0,1)"
            lineHeight="18.28499984741211px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="84.54px"
            height="18.81px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="658.47px"
            left="695.46px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="4 min"
            {...getOverrideProps(overrides, "4 min")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="15px"
            fontWeight="300"
            color="rgba(0,0,0,1)"
            lineHeight="18.28499984741211px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="84.54px"
            height="18.81px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1226.02px"
            left="704.22px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="5 d"
            {...getOverrideProps(overrides, "5 d")}
          ></Text>
        </View>
      </View>
      <Icon
        width="26px"
        height="26px"
        viewBox={{ minX: 0, minY: 0, width: 26, height: 26 }}
        paths={[
          {
            d: "M5.2 15.6L15.6 15.6L15.6 13L5.2 13L5.2 15.6ZM5.2 11.7L20.8 11.7L20.8 9.1L5.2 9.1L5.2 11.7ZM5.2 7.8L20.8 7.8L20.8 5.2L5.2 5.2L5.2 7.8ZM0 26L0 2.6C0 1.885 0.254583 1.27292 0.76375 0.76375C1.27292 0.254583 1.885 0 2.6 0L23.4 0C24.115 0 24.7271 0.254583 25.2362 0.76375C25.7454 1.27292 26 1.885 26 2.6L26 18.2C26 18.915 25.7454 19.5271 25.2362 20.0362C24.7271 20.5454 24.115 20.8 23.4 20.8L5.2 20.8L0 26ZM4.095 18.2L23.4 18.2L23.4 2.6L2.6 2.6L2.6 19.6625L4.095 18.2Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="78%"
        bottom="20.62%"
        left="55.3%"
        right="42.99%"
        {...getOverrideProps(overrides, "Vector41211350")}
      ></Icon>
      <View
        width="21px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="700.48px"
        left="173.62px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "PhoneBlackIcon 1")}
      >
        <Icon
          width="15.75px"
          height="15px"
          viewBox={{ minX: 0, minY: 0, width: 15.75, height: 15 }}
          paths={[
            {
              d: "M14.8313 15C13.0083 15 11.2073 14.6215 9.42812 13.8646C7.64896 13.1076 6.03021 12.0347 4.57188 10.6458C3.11354 9.25694 1.98698 7.71528 1.19219 6.02083C0.397396 4.32639 0 2.61111 0 0.875C0 0.625 0.0875 0.416667 0.2625 0.25C0.4375 0.0833333 0.65625 0 0.91875 0L4.4625 0C4.66667 0 4.84896 0.0659722 5.00938 0.197917C5.16979 0.329861 5.26458 0.486111 5.29375 0.666667L5.8625 3.58333C5.89167 3.80556 5.88438 3.99306 5.84062 4.14583C5.79688 4.29861 5.71667 4.43056 5.6 4.54167L3.47812 6.58333C3.76979 7.09722 4.11615 7.59375 4.51719 8.07292C4.91823 8.55208 5.35938 9.01389 5.84062 9.45833C6.29271 9.88889 6.76667 10.2882 7.2625 10.6562C7.75833 11.0243 8.28333 11.3611 8.8375 11.6667L10.8938 9.70833C11.025 9.58333 11.1964 9.48958 11.4078 9.42708C11.6193 9.36458 11.8271 9.34722 12.0312 9.375L15.05 9.95833C15.2542 10.0139 15.4219 10.1146 15.5531 10.2604C15.6844 10.4062 15.75 10.5694 15.75 10.75L15.75 14.125C15.75 14.375 15.6625 14.5833 15.4875 14.75C15.3125 14.9167 15.0938 15 14.8313 15ZM2.64687 5L4.09062 3.625L3.71875 1.66667L1.77188 1.66667C1.84479 2.23611 1.94687 2.79861 2.07812 3.35417C2.20937 3.90972 2.39896 4.45833 2.64687 5ZM10.4781 12.4583C11.0469 12.6944 11.6266 12.8819 12.2172 13.0208C12.8078 13.1597 13.4021 13.25 14 13.2917L14 11.4583L11.9437 11.0625L10.4781 12.4583Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="25%"
          left="12.5%"
          right="12.5%"
          {...getOverrideProps(overrides, "Vector41121447")}
        ></Icon>
      </View>
      <View
        width="21px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="736.48px"
        left="173.62px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MailBlackIcon 1")}
      >
        <Icon
          width="17.5px"
          height="13.33px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 17.5,
            height: 13.333333015441895,
          }}
          paths={[
            {
              d: "M1.75 13.3333C1.26875 13.3333 0.856771 13.1701 0.514062 12.8437C0.171354 12.5174 0 12.125 0 11.6667L0 1.66667C0 1.20833 0.171354 0.815972 0.514062 0.489583C0.856771 0.163194 1.26875 0 1.75 0L15.75 0C16.2312 0 16.6432 0.163194 16.9859 0.489583C17.3286 0.815972 17.5 1.20833 17.5 1.66667L17.5 11.6667C17.5 12.125 17.3286 12.5174 16.9859 12.8437C16.6432 13.1701 16.2312 13.3333 15.75 13.3333L1.75 13.3333ZM8.75 7.5L1.75 3.33333L1.75 11.6667L15.75 11.6667L15.75 3.33333L8.75 7.5ZM8.75 5.83333L15.75 1.66667L1.75 1.66667L8.75 5.83333ZM1.75 3.33333L1.75 1.66667L1.75 11.6667L1.75 3.33333Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="16.67%"
          bottom="16.67%"
          left="8.33%"
          right="8.33%"
          {...getOverrideProps(overrides, "Vector41121452")}
        ></Icon>
      </View>
      <View
        width="21px"
        height="19px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="773.48px"
        left="173.62px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "PuzzleBlackIcon 1")}
      >
        <Icon
          width="17.06px"
          height="15.44px"
          viewBox={{ minX: 0, minY: 0, width: 17.0625, height: 15.4375 }}
          paths={[
            {
              d: "M5.075 15.4375L1.75 15.4375C1.26875 15.4375 0.856771 15.2825 0.514062 14.9724C0.171354 14.6623 0 14.2896 0 13.8542L0 10.8458C0.7 10.8458 1.3125 10.6446 1.8375 10.2422C2.3625 9.83976 2.625 9.32847 2.625 8.70833C2.625 8.08819 2.3625 7.57691 1.8375 7.17448C1.3125 6.77205 0.7 6.57083 0 6.57083L0 3.5625C0 3.12708 0.171354 2.75434 0.514062 2.44427C0.856771 2.1342 1.26875 1.97917 1.75 1.97917L5.25 1.97917C5.25 1.425 5.46146 0.956597 5.88438 0.573958C6.30729 0.191319 6.825 0 7.4375 0C8.05 0 8.56771 0.191319 8.99062 0.573958C9.41354 0.956597 9.625 1.425 9.625 1.97917L13.125 1.97917C13.6062 1.97917 14.0182 2.1342 14.3609 2.44427C14.7036 2.75434 14.875 3.12708 14.875 3.5625L14.875 6.72917C15.4875 6.72917 16.0052 6.92049 16.4281 7.30312C16.851 7.68576 17.0625 8.15417 17.0625 8.70833C17.0625 9.2625 16.851 9.7309 16.4281 10.1135C16.0052 10.4962 15.4875 10.6875 14.875 10.6875L14.875 13.8542C14.875 14.2896 14.7036 14.6623 14.3609 14.9724C14.0182 15.2825 13.6062 15.4375 13.125 15.4375L9.8 15.4375C9.8 14.7778 9.57031 14.217 9.11094 13.7552C8.65156 13.2934 8.09375 13.0625 7.4375 13.0625C6.78125 13.0625 6.22344 13.2934 5.76406 13.7552C5.30469 14.217 5.075 14.7778 5.075 15.4375ZM1.75 13.8542L3.60938 13.8542C3.95937 12.9833 4.52083 12.3698 5.29375 12.0135C6.06667 11.6573 6.78125 11.4792 7.4375 11.4792C8.09375 11.4792 8.80833 11.6573 9.58125 12.0135C10.3542 12.3698 10.9156 12.9833 11.2656 13.8542L13.125 13.8542L13.125 9.10417L14.875 9.10417C14.9917 9.10417 15.0938 9.06458 15.1812 8.98542C15.2688 8.90625 15.3125 8.81389 15.3125 8.70833C15.3125 8.60278 15.2688 8.51042 15.1812 8.43125C15.0938 8.35208 14.9917 8.3125 14.875 8.3125L13.125 8.3125L13.125 3.5625L7.875 3.5625L7.875 1.97917C7.875 1.87361 7.83125 1.78125 7.74375 1.70208C7.65625 1.62292 7.55417 1.58333 7.4375 1.58333C7.32083 1.58333 7.21875 1.62292 7.13125 1.70208C7.04375 1.78125 7 1.87361 7 1.97917L7 3.5625L1.75 3.5625L1.75 5.30417C2.5375 5.56806 3.17188 6.01007 3.65313 6.63021C4.13438 7.25035 4.375 7.94306 4.375 8.70833C4.375 9.46042 4.13438 10.1465 3.65313 10.7667C3.17188 11.3868 2.5375 11.8354 1.75 12.1125L1.75 13.8542Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="6.25%"
          bottom="12.5%"
          left="12.5%"
          right="6.25%"
          {...getOverrideProps(overrides, "Vector41121457")}
        ></Icon>
      </View>
      <View
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="1279px"
        left="92px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "forward_to_inbox_24dp_4B77D1_FILL0_wght400_GRAD0_opsz24 1"
        )}
      ></View>
      <View
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="1505px"
        left="-213px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "attach_email_24dp_4B77D1_FILL0_wght400_GRAD0_opsz24 1"
        )}
      >
        <Icon
          width="22px"
          height="20px"
          viewBox={{ minX: 0, minY: 0, width: 22, height: 20 }}
          paths={[
            {
              d: "M10 9L2 4L2 14L12 14L12 16L2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14L0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0L18 0C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2L20 7L18 7L18 4L10 9ZM10 7L18 2L2 2L10 7ZM18 20C16.9 20 15.9583 19.6083 15.175 18.825C14.3917 18.0417 14 17.1 14 16L14 11.5C14 10.8 14.2417 10.2083 14.725 9.725C15.2083 9.24167 15.8 9 16.5 9C17.2 9 17.7917 9.24167 18.275 9.725C18.7583 10.2083 19 10.8 19 11.5L19 16L17 16L17 11.5C17 11.3667 16.95 11.25 16.85 11.15C16.75 11.05 16.6333 11 16.5 11C16.3667 11 16.25 11.05 16.15 11.15C16.05 11.25 16 11.3667 16 11.5L16 16C16 16.55 16.1958 17.0208 16.5875 17.4125C16.9792 17.8042 17.45 18 18 18C18.55 18 19.0208 17.8042 19.4125 17.4125C19.8042 17.0208 20 16.55 20 16L20 12L22 12L22 16C22 17.1 21.6083 18.0417 20.825 18.825C20.0417 19.6083 19.1 20 18 20ZM2 4L2 2L2 14L2 4Z",
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
          left="4.17%"
          right="4.17%"
          {...getOverrideProps(overrides, "Vector39883035")}
        ></Icon>
      </View>
      <Image
        width="104px"
        height="103px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="176px"
        left="1572px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={bancoImagens?.PerfilAvatar}
        {...getOverrideProps(overrides, "AvatarPerfil 14043871")}
      ></Image>
      <Button
        width="299px"
        height="34px"
        position="absolute"
        border="1px SOLID rgba(0,0,0,1)"
        top="1247.48px"
        left="191.62px"
        backgroundColor="rgba(255,255,255,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Carregar Currículo"
        {...getOverrideProps(overrides, "Button41231372")}
      ></Button>
      <Button
        width="299px"
        height="33px"
        position="absolute"
        border="1px SOLID rgba(0,0,0,1)"
        top="1295.48px"
        left="191.62px"
        backgroundColor="rgba(255,255,255,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Modelos de Currículos"
        {...getOverrideProps(overrides, "Button41231373")}
      ></Button>
      <Icon
        width="15px"
        height="14px"
        viewBox={{ minX: 0, minY: 0, width: 15, height: 14 }}
        paths={[
          {
            d: "M7.14286 6.63158L1.42857 2.94737L1.42857 10.3158L7.85714 10.3158L7.85714 11.7895L1.42857 11.7895C1.03571 11.7895 0.699405 11.6452 0.419643 11.3566C0.139881 11.068 0 10.7211 0 10.3158L0 1.47368C0 1.06842 0.139881 0.721491 0.419643 0.432895C0.699405 0.144298 1.03571 0 1.42857 0L12.8571 0C13.25 0 13.5863 0.144298 13.8661 0.432895C14.1458 0.721491 14.2857 1.06842 14.2857 1.47368L14.2857 6.63158L12.8571 6.63158L12.8571 2.94737L7.14286 6.63158ZM7.14286 5.15789L12.8571 1.47368L1.42857 1.47368L7.14286 5.15789ZM12.1429 14L11.1429 12.9684L12.2679 11.7895L9.28571 11.7895L9.28571 10.3158L12.2679 10.3158L11.125 9.13684L12.1429 8.10526L15 11.0526L12.1429 14ZM1.42857 2.94737L1.42857 11.0526L1.42857 6.63158L1.42857 6.68684L1.42857 1.47368L1.42857 2.94737Z",
            fill: "rgba(8,8,8,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="66.98%"
        bottom="32.28%"
        left="13.27%"
        right="85.74%"
        {...getOverrideProps(overrides, "Vector39883033")}
      ></Icon>
      <Icon
        width="15px"
        height="17px"
        viewBox={{ minX: 0, minY: 0, width: 15, height: 17 }}
        paths={[
          {
            d: "M6.81818 7.65L1.36364 3.4L1.36364 11.9L8.18182 11.9L8.18182 13.6L1.36364 13.6C0.988636 13.6 0.667614 13.4335 0.400568 13.1006C0.133523 12.7677 0 12.3675 0 11.9L0 1.7C0 1.2325 0.133523 0.832292 0.400568 0.499375C0.667614 0.166458 0.988636 0 1.36364 0L12.2727 0C12.6477 0 12.9688 0.166458 13.2358 0.499375C13.5028 0.832292 13.6364 1.2325 13.6364 1.7L13.6364 5.95L12.2727 5.95L12.2727 3.4L6.81818 7.65ZM6.81818 5.95L12.2727 1.7L1.36364 1.7L6.81818 5.95ZM12.2727 17C11.5227 17 10.8807 16.6671 10.3466 16.0012C9.8125 15.3354 9.54545 14.535 9.54545 13.6L9.54545 9.775C9.54545 9.18 9.71023 8.67708 10.0398 8.26625C10.3693 7.85542 10.7727 7.65 11.25 7.65C11.7273 7.65 12.1307 7.85542 12.4602 8.26625C12.7898 8.67708 12.9545 9.18 12.9545 9.775L12.9545 13.6L11.5909 13.6L11.5909 9.775C11.5909 9.66167 11.5568 9.5625 11.4886 9.4775C11.4205 9.3925 11.3409 9.35 11.25 9.35C11.1591 9.35 11.0795 9.3925 11.0114 9.4775C10.9432 9.5625 10.9091 9.66167 10.9091 9.775L10.9091 13.6C10.9091 14.0675 11.0426 14.4677 11.3097 14.8006C11.5767 15.1335 11.8977 15.3 12.2727 15.3C12.6477 15.3 12.9688 15.1335 13.2358 14.8006C13.5028 14.4677 13.6364 14.0675 13.6364 13.6L13.6364 10.2L15 10.2L15 13.6C15 14.535 14.733 15.3354 14.1989 16.0012C13.6648 16.6671 13.0227 17 12.2727 17ZM1.36364 3.4L1.36364 1.7L1.36364 11.9L1.36364 3.4Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="69.42%"
        bottom="29.68%"
        left="13.27%"
        right="85.74%"
        {...getOverrideProps(overrides, "Vector41231381")}
      ></Icon>
      <Flex
        gap="40px"
        direction="row"
        width="1519px"
        height="62px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="6.27%"
        bottom="90.44%"
        left="-0.26%"
        right="0.26%"
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
          {...getOverrideProps(overrides, "Frame 3214387845")}
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
            {...getOverrideProps(overrides, "Button4387846")}
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
            {...getOverrideProps(overrides, "Button4387847")}
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
            {...getOverrideProps(overrides, "Button4387848")}
          ></Button>
        </Flex>
      </Flex>
    </View>
  );
}
