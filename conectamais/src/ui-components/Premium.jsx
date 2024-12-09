/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Premium(props) {
  const { bancoImagens, overrides, ...rest } = props;
  return (
    <View
      width="1519px"
      height="1017px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Premium")}
      {...rest}
    >
      <Image
        width="1519px"
        height="899px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="118px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Fundo Novo")}
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
          {...getOverrideProps(overrides, "Frame 321")}
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
            {...getOverrideProps(overrides, "Vector38512526")}
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
            {...getOverrideProps(overrides, "Vector38512527")}
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
            {...getOverrideProps(overrides, "Vector38512528")}
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
            {...getOverrideProps(overrides, "Vector38512529")}
          ></Icon>
        </Flex>
      </Flex>
      <Image
        width="104px"
        height="103px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="104px"
        left="1569px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "AvatarPerfil 1")}
      ></Image>
      <View
        padding="0px 0px 0px 0px"
        width="1037px"
        height="165px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="226px"
        left="253px"
        {...getOverrideProps(overrides, "Group 447")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="1037px"
          height="154px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Group 85")}
        >
          <Icon
            width="1037px"
            height="154px"
            viewBox={{ minX: 0, minY: 0, width: 1037, height: 154 }}
            paths={[
              {
                d: "M0 30C0 13.4315 13.4315 0 30 0L1007 0C1023.57 0 1037 13.4315 1037 30L1037 124C1037 140.569 1023.57 154 1007 154L30 154C13.4314 154 0 140.569 0 124L0 30Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Rectangle 165")}
          ></Icon>
        </View>
        <Text
          fontFamily="Poppins"
          fontSize="34px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="51px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="893px"
          height="139.01px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="25.99px"
          left="73px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Muitos usuários do Conecta+ escolhem o Premium para impulsionar suas  carreiras profissionais. "
          {...getOverrideProps(
            overrides,
            "Muitos usu\u00E1rios do Conecta+ escolhem o Premium para impulsionar suas carreiras profissionais."
          )}
        ></Text>
      </View>
      <Icon
        width="331px"
        height="538.4px"
        viewBox={{ minX: 0, minY: 0, width: 331, height: 538.3954467773438 }}
        paths={[
          {
            d: "M305.897 538.395L25.1028 538.395C18.4474 538.387 12.0668 535.271 7.36072 529.732C2.65466 524.192 0.00751494 516.682 0 508.849L0 29.5466C0.00751494 21.7131 2.65466 14.2029 7.36072 8.66376C12.0668 3.12462 18.4474 0.00884527 25.1028 0L305.897 0C312.553 0.00883978 318.933 3.12462 323.639 8.66376C328.345 14.2029 330.992 21.7131 331 29.5466L331 508.849C330.992 516.682 328.345 524.193 323.639 529.732C318.933 535.271 312.553 538.387 305.897 538.395Z",
            fill: "rgba(1,1,1,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="41.1%"
        bottom="5.96%"
        left="40.22%"
        right="37.99%"
        {...getOverrideProps(overrides, "Vector38512547")}
      ></Icon>
      <Icon
        width="297px"
        height="501.39px"
        viewBox={{ minX: 0, minY: 0, width: 297, height: 501.39227294921875 }}
        paths={[
          {
            d: "M289.269 501.392L7.73146 501.392C5.68167 501.389 3.71652 500.428 2.2671 498.718C0.817676 497.008 0.00233962 494.69 0 492.271L0 9.1208C0.00233962 6.70266 0.817676 4.38435 2.2671 2.67446C3.71652 0.96458 5.68167 0.00276005 7.73146 0L289.269 0C291.318 0.00276279 293.284 0.96458 294.733 2.67446C296.182 4.38435 296.998 6.70266 297 9.1208L297 492.271C296.998 494.69 296.182 497.008 294.733 498.718C293.284 500.428 291.318 501.389 289.269 501.392Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="42.92%"
        bottom="7.78%"
        left="41.34%"
        right="39.1%"
        {...getOverrideProps(overrides, "Vector38512548")}
      ></Icon>
      <Icon
        width="4px"
        height="4.63px"
        viewBox={{ minX: 0, minY: 0, width: 4, height: 4.62539005279541 }}
        paths={[
          {
            d: "M2.00001 4.62539C3.10458 4.62539 4 3.58996 4 2.3127C4 1.03543 3.10458 0 2.00001 0C0.895445 0 0 1.03543 0 2.3127C0 3.58996 0.895445 4.62539 2.00001 4.62539Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="41.74%"
        bottom="57.81%"
        left="50.89%"
        right="48.85%"
        {...getOverrideProps(overrides, "Vector38512549")}
      ></Icon>
      <Icon
        width="3px"
        height="4.63px"
        viewBox={{ minX: 0, minY: 0, width: 3, height: 4.62539005279541 }}
        paths={[
          {
            d: "M1.5 4.62539C2.32843 4.62539 3 3.58996 3 2.3127C3 1.03543 2.32843 0 1.5 0C0.671573 0 0 1.03543 0 2.3127C0 3.58996 0.671573 4.62539 1.5 4.62539Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="53.74%"
        bottom="45.8%"
        left="50.63%"
        right="49.18%"
        {...getOverrideProps(overrides, "Vector38512550")}
      ></Icon>
      <Icon
        width="3px"
        height="4.63px"
        viewBox={{ minX: 0, minY: 0, width: 3, height: 4.62539005279541 }}
        paths={[
          {
            d: "M1.5 4.62539C2.32843 4.62539 3 3.58996 3 2.3127C3 1.03543 2.32843 0 1.5 0C0.671573 0 0 1.03543 0 2.3127C0 3.58996 0.671573 4.62539 1.5 4.62539Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="55.66%"
        bottom="43.89%"
        left="50.63%"
        right="49.18%"
        {...getOverrideProps(overrides, "Vector38512551")}
      ></Icon>
      <Icon
        width="4px"
        height="3.7px"
        viewBox={{ minX: 0, minY: 0, width: 4, height: 3.7003118991851807 }}
        paths={[
          {
            d: "M2 3.70031C3.10457 3.70031 4 2.87197 4 1.85016C4 0.828343 3.10457 0 2 0C0.89543 0 0 0.828343 0 1.85016C0 2.87197 0.89543 3.70031 2 3.70031Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="54.47%"
        bottom="45.16%"
        left="51.42%"
        right="48.32%"
        {...getOverrideProps(overrides, "Vector38512552")}
      ></Icon>
      <Icon
        width="24px"
        height="99.91px"
        viewBox={{ minX: 0, minY: 0, width: 24, height: 99.9084243774414 }}
        paths={[
          {
            d: "M13.6556 98.695C14.8804 97.9647 15.9568 96.9215 16.8087 95.639C17.6607 94.3564 18.2676 92.8655 18.5866 91.2715C18.9057 89.6775 18.9291 88.0191 18.6554 86.413C18.3816 84.807 17.8173 83.2923 17.0021 81.9758L24 0L8.87686 0L3.31547 80.0452C1.56037 81.8326 0.413447 84.3292 0.0920597 87.0621C-0.229327 89.7949 0.297138 92.5741 1.57169 94.8729C2.84624 97.1717 4.78033 98.8305 7.00746 99.535C9.23459 100.239 11.6 99.9405 13.6556 98.695Z",
            fill: "rgba(159,97,106,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="69.85%"
        bottom="20.33%"
        left="32.65%"
        right="65.77%"
        {...getOverrideProps(overrides, "Vector38512553")}
      ></Icon>
      <Icon
        width="43px"
        height="50.88px"
        viewBox={{ minX: 0, minY: 0, width: 43, height: 50.87929153442383 }}
        paths={[
          {
            d: "M21.5 50.8793C33.3741 50.8793 43 39.4896 43 25.4396C43 11.3897 33.3741 0 21.5 0C9.62587 0 0 11.3897 0 25.4396C0 39.4896 9.62587 50.8793 21.5 50.8793Z",
            fill: "rgba(159,97,106,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="60.48%"
        bottom="34.52%"
        left="33.11%"
        right="64.06%"
        {...getOverrideProps(overrides, "Vector38512554")}
      ></Icon>
      <Icon
        width="56px"
        height="85.11px"
        viewBox={{ minX: 0, minY: 0, width: 56, height: 85.107177734375 }}
        paths={[
          {
            d: "M19.7566 85.1072C18.8948 85.1069 18.057 84.7718 17.3715 84.1534C16.6861 83.5351 16.191 82.6676 15.9621 81.684C14.2374 74.2651 9.75001 61.7217 2.62502 44.4002C1.01733 40.4847 0.12707 36.211 0.0126348 31.8595C-0.101801 27.508 0.562177 23.177 1.96101 19.1506C3.35984 15.1243 5.46192 11.4936 8.12934 8.4967C10.7968 5.49981 13.9692 3.20445 17.4387 1.76123C20.7265 0.386838 24.2137 -0.192893 27.6941 0.0563027C31.1745 0.305499 34.5773 1.37858 37.7013 3.21206C40.8252 5.04553 43.6069 7.60214 45.8816 10.7307C48.1563 13.8592 49.8779 17.4961 50.9445 21.4261C56.4671 41.9245 56.2005 63.8822 55.8295 72.3701C55.7834 73.3924 55.4555 74.3687 54.8961 75.1493C54.3366 75.9299 53.5764 76.4718 52.732 76.6921L20.6025 84.9987C20.3247 85.071 20.041 85.1074 19.7566 85.1072Z",
            fill: "rgba(211,152,74,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="66.21%"
        bottom="25.42%"
        left="33.51%"
        right="62.8%"
        {...getOverrideProps(overrides, "Vector38512555")}
      ></Icon>
      <Icon
        width="16px"
        height="49.95px"
        viewBox={{ minX: 0, minY: 0, width: 16, height: 49.9542121887207 }}
        paths={[
          {
            d: "M0.00176757 49.9542L10.843 49.9542L16 0L0 0L0.00176757 49.9542Z",
            fill: "rgba(159,97,106,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="93.5%"
        bottom="1.59%"
        left="36.87%"
        right="62.08%"
        {...getOverrideProps(overrides, "Vector38512556")}
      ></Icon>
      <Icon
        width="34px"
        height="49.03px"
        viewBox={{ minX: 0, minY: 0, width: 34, height: 49.029136657714844 }}
        paths={[
          {
            d: "M0 42.912L9.45344 49.0291L34 9.02709L20.0473 0L0 42.912Z",
            fill: "rgba(159,97,106,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="92.49%"
        bottom="2.68%"
        left="29.76%"
        right="68.01%"
        {...getOverrideProps(overrides, "Vector38512557")}
      ></Icon>
      <Icon
        width="33px"
        height="34.23px"
        viewBox={{ minX: 0, minY: 0, width: 33, height: 34.22789001464844 }}
        paths={[
          {
            d: "M31.0817 34.2279L0 14.4544L6.86753 0L25.8509 12.0773C29.0564 14.1219 31.4301 17.5544 32.4512 21.6217C33.4724 25.689 33.0576 30.0588 31.2978 33.7726L31.0817 34.2279Z",
            fill: "rgba(47,46,65,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="96.13%"
        bottom="0.5%"
        left="29.23%"
        right="68.6%"
        {...getOverrideProps(overrides, "Vector38512558")}
      ></Icon>
      <Icon
        width="122px"
        height="231.27px"
        viewBox={{ minX: 0, minY: 0, width: 122, height: 231.26951599121094 }}
        paths={[
          {
            d: "M97.5793 231.27C96.6166 231.269 95.687 230.855 94.9641 230.105C94.2411 229.355 93.7742 228.321 93.6504 227.195L80.1386 104.416C80.0789 103.873 79.8752 103.366 79.5565 102.968C79.2379 102.569 78.8207 102.3 78.3644 102.198C77.9081 102.096 77.4362 102.166 77.016 102.399C76.5957 102.632 76.2487 103.016 76.0245 103.496L19.7128 223.97C19.2481 224.953 18.4995 225.708 17.6032 226.096C16.7068 226.484 15.7221 226.479 14.8282 226.084L2.55388 220.569C2.06019 220.347 1.60905 220.012 1.22695 219.581C0.844863 219.151 0.539533 218.635 0.328881 218.064C0.118228 217.493 0.0064994 216.877 0.000275237 216.254C-0.00594892 215.632 0.0934484 215.013 0.292627 214.436L39.3011 101.438C39.3999 101.151 39.4669 100.85 39.5003 100.543C44.7839 52.3207 58.2268 27.7982 62.2209 21.4311C62.5126 20.9631 62.7046 20.4193 62.7807 19.8454C62.8567 19.2716 62.8146 18.6846 62.6579 18.1339L62.1088 16.1916C61.8895 15.4206 61.8445 14.5955 61.9783 13.7978C62.1122 13.0001 62.4202 12.2574 62.872 11.643C77.2642 -7.68757 102.349 2.86062 102.601 2.96921L102.727 3.02401L102.805 3.15086C130.933 48.6388 120.533 196.383 118.163 225.538C118.075 226.633 117.66 227.657 116.994 228.427C116.327 229.197 115.451 229.664 114.52 229.746L97.8872 231.256C97.7839 231.266 97.6813 231.27 97.5793 231.27Z",
            fill: "rgba(47,46,65,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="72.94%"
        bottom="4.32%"
        left="30.41%"
        right="61.55%"
        {...getOverrideProps(overrides, "Vector38512559")}
      ></Icon>
      <Icon
        width="74px"
        height="59.2px"
        viewBox={{ minX: 0, minY: 0, width: 74, height: 59.20499038696289 }}
        paths={[
          {
            d: "M56.0667 8.41249C55.9605 8.97287 55.8912 9.54241 55.8596 10.1158L18.674 35.8536L9.63555 29.6108L0 44.7451L15.1057 57.6623C16.326 58.7059 17.7955 59.2463 19.2937 59.2025C20.7918 59.1587 22.2377 58.5331 23.4142 57.4195L61.7589 21.1259C63.4894 21.8945 65.3739 22.0127 67.1618 21.4649C68.9496 20.9171 70.5561 19.7292 71.7675 18.0592C72.9789 16.3893 73.7379 14.3164 73.9434 12.1163C74.149 9.91626 73.7914 7.69321 72.9182 5.74292C72.045 3.79263 70.6976 2.20752 69.0552 1.1984C67.4128 0.189293 65.5532 -0.195982 63.7239 0.0938184C61.8945 0.383619 60.182 1.33478 58.8142 2.82075C57.4464 4.30673 56.4881 6.25712 56.0667 8.41249Z",
            fill: "rgba(159,97,106,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="65.02%"
        bottom="29.15%"
        left="36.34%"
        right="58.79%"
        {...getOverrideProps(overrides, "Vector38512560")}
      ></Icon>
      <Icon
        width="37px"
        height="40.7px"
        viewBox={{ minX: 0, minY: 0, width: 37, height: 40.703433990478516 }}
        paths={[
          {
            d: "M36.1774 20.6388L23.9925 38.9241C23.6458 39.4443 23.2063 39.872 22.704 40.1779C22.2017 40.4837 21.6483 40.6607 21.0816 40.6966C20.5149 40.7325 19.9482 40.6266 19.4201 40.3861C18.8919 40.1456 18.4147 39.7761 18.021 39.3028L4.22678 22.7174C1.93491 20.6497 0.44525 17.6135 0.0847809 14.2753C-0.275689 10.9372 0.522494 7.56983 2.30412 4.91239C4.08575 2.25494 6.70525 0.524554 9.58763 0.101071C12.47 -0.322413 15.3797 0.5956 17.6781 2.6536L34.9791 13.8548C35.4744 14.1757 35.9042 14.6164 36.2391 15.1469C36.574 15.6774 36.8062 16.2853 36.9199 16.9291C37.0336 17.5729 37.0262 18.2375 36.898 18.8777C36.7699 19.5179 36.5241 20.1185 36.1774 20.6388Z",
            fill: "rgba(211,152,74,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="66.66%"
        bottom="29.34%"
        left="35.09%"
        right="62.48%"
        {...getOverrideProps(overrides, "Vector38512561")}
      ></Icon>
      <Icon
        width="29px"
        height="43.48px"
        viewBox={{ minX: 0, minY: 0, width: 29, height: 43.478668212890625 }}
        paths={[
          {
            d: "M23.4245 43.4039L3.32533 39.1884C2.75345 39.0685 2.21054 38.8068 1.73359 38.4211C1.25664 38.0355 0.856862 37.535 0.561458 36.9537C0.266055 36.3724 0.0819759 35.7241 0.0217663 35.0527C-0.0384432 34.3813 0.0266141 33.7027 0.212533 33.0632L6.7283 10.6553C7.27302 7.26 8.95467 4.25418 11.4046 2.29695C13.8544 0.339716 16.8726 -0.40916 19.7971 0.214505C22.7217 0.838169 25.3139 2.78349 27.0055 5.62389C28.6971 8.46429 29.3498 11.9679 28.8207 15.3665L28.185 38.93C28.1666 39.6047 28.0232 40.2668 27.7647 40.8713C27.5061 41.4759 27.1385 42.0085 26.6867 42.4331C26.2349 42.8577 25.7097 43.1642 25.1467 43.3317C24.5838 43.4992 23.9964 43.5239 23.4245 43.4039Z",
            fill: "rgba(211,152,74,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="67.66%"
        bottom="28.06%"
        left="32.85%"
        right="65.24%"
        {...getOverrideProps(overrides, "Vector38512562")}
      ></Icon>
      <Icon
        width="101px"
        height="129.51px"
        viewBox={{ minX: 0, minY: 0, width: 101, height: 129.51092529296875 }}
        paths={[
          {
            d: "M78.2985 31.4809C83.8905 35.969 91.2329 40.5826 96.9442 35.8031C100.694 32.6648 101.876 26.8534 100.355 21.7535C97.6204 12.5824 90.1066 8.54489 82.9216 5.45004C73.5812 1.42679 63.4107 -1.77401 53.7682 1.10728C44.1257 3.98858 35.6038 14.9367 37.3445 26.4258C38.7443 35.6651 46.1762 43.3529 45.1211 52.6549C44.0593 62.0167 35.0814 66.9445 27.1553 68.6177C19.2292 70.2909 10.3597 70.8284 4.66356 77.5048C-2.60294 86.0217 -0.788358 101.245 6.04912 110.237C12.8866 119.229 23.2047 123.305 33.203 126.076C46.4501 129.747 60.7778 131.677 73.3592 125.584C85.9407 119.491 95.7313 103.089 92.0867 87.7095C90.5472 81.213 86.9206 75.7227 83.4158 70.3777C79.9109 65.0326 76.3619 59.4433 75.0249 52.8855C73.9108 47.4207 74.7354 41.0758 77.8257 36.9765C78.3878 36.259 78.7415 35.3511 78.8361 34.3831C78.9307 33.4152 78.7613 32.4369 78.3522 31.5889L78.2985 31.4809Z",
            fill: "rgba(47,46,65,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="59.29%"
        bottom="27.97%"
        left="29.62%"
        right="63.73%"
        {...getOverrideProps(overrides, "Vector38512563")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="297.98px"
        height="500.9px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="42.95%"
        bottom="7.8%"
        left="41.29%"
        right="39.09%"
        {...getOverrideProps(overrides, "Group 89")}
      >
        <View
          width="297.98px"
          height="500.9px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "Rectangle 172")}
        ></View>
      </View>
      <Flex
        gap="24px"
        direction="column"
        width="299px"
        height="500.47px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="43.01%"
        bottom="7.78%"
        left="41.21%"
        right="39.1%"
        boxShadow="0px 2px 4px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.05000000074505806)"
        borderRadius="8px"
        padding="32px 32px 32px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 390")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 429")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="600"
            color="rgba(255,255,255,1)"
            lineHeight="30px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="400px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="ConectaPlus"
            {...getOverrideProps(overrides, "ConectaPlus")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="32px"
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="400px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="R$49,99/M"
            {...getOverrideProps(overrides, "R$49,99/M")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="600"
            color="rgba(92,102,112,1)"
            lineHeight="25px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="400px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Plano Mensal"
            {...getOverrideProps(overrides, "Plano Mensal")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 138")}
        >
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            borderRadius="8px"
            padding="8px 8px 8px 8px"
            backgroundColor="rgba(233,249,252,1)"
            {...getOverrideProps(overrides, "Frame 43038512572")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "CheckIcon 138512573")}
            >
              <Icon
                width="16.3px"
                height="12.03px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 16.30000114440918,
                  height: 12.02500057220459,
                }}
                paths={[
                  {
                    d: "M5.7 12.025L0 6.325L1.425 4.9L5.7 9.175L14.875 0L16.3 1.425L5.7 12.025Z",
                    fill: "rgba(117,251,76,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="24.9%"
                bottom="25%"
                left="16.04%"
                right="16.04%"
                {...getOverrideProps(overrides, "Vector38512574")}
              ></Icon>
            </View>
          </Flex>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Maior recomendação em processos seletivos   "
            {...getOverrideProps(
              overrides,
              "Maior recomenda\u00E7\u00E3o em processos seletivos"
            )}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 139")}
        >
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            borderRadius="8px"
            padding="8px 8px 8px 8px"
            backgroundColor="rgba(233,249,252,1)"
            {...getOverrideProps(overrides, "Frame 431")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "CheckIcon 138512578")}
            >
              <Icon
                width="16.3px"
                height="12.03px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 16.30000114440918,
                  height: 12.02500057220459,
                }}
                paths={[
                  {
                    d: "M5.7 12.025L0 6.325L1.425 4.9L5.7 9.175L14.875 0L16.3 1.425L5.7 12.025Z",
                    fill: "rgba(117,251,76,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="24.9%"
                bottom="25%"
                left="16.04%"
                right="16.04%"
                {...getOverrideProps(overrides, "Vector38512579")}
              ></Icon>
            </View>
          </Flex>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Recomendações  de novas competencias"
            {...getOverrideProps(
              overrides,
              "Recomenda\u00E7\u00F5es de novas competencias"
            )}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 137")}
        >
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            borderRadius="8px"
            padding="8px 8px 8px 8px"
            backgroundColor="rgba(233,249,252,1)"
            {...getOverrideProps(overrides, "Frame 43038512582")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "CheckIcon 138512583")}
            >
              <Icon
                width="16.3px"
                height="12.03px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 16.30000114440918,
                  height: 12.02500057220459,
                }}
                paths={[
                  {
                    d: "M5.7 12.025L0 6.325L1.425 4.9L5.7 9.175L14.875 0L16.3 1.425L5.7 12.025Z",
                    fill: "rgba(117,251,76,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="24.9%"
                bottom="25%"
                left="16.04%"
                right="16.04%"
                {...getOverrideProps(overrides, "Vector38512584")}
              ></Icon>
            </View>
          </Flex>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Recomendações de vagas mais aprofundadas"
            {...getOverrideProps(
              overrides,
              "Recomenda\u00E7\u00F5es de vagas mais aprofundadas"
            )}
          ></Text>
        </Flex>
      </Flex>
      <Icon
        width="35px"
        height="15.73px"
        viewBox={{ minX: 0, minY: 0, width: 35, height: 15.726325988769531 }}
        paths={[
          {
            d: "M0.000648466 15.7263L0 0.000966624L21.3764 1.01018e-08C24.9894 -0.000147001 28.4545 1.6043 31.0095 4.46038C33.5644 7.31646 34.9998 11.1902 35 15.2295L35 15.7244L0.000648466 15.7263Z",
            fill: "rgba(47,46,65,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="98.41%"
        bottom="0.05%"
        left="36.73%"
        right="60.96%"
        {...getOverrideProps(overrides, "Vector38512587")}
      ></Icon>
    </View>
  );
}
