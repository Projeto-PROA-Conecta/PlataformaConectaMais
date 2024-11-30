/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Home1(props) {
  const { bancoImagens, overrides, ...rest } = props;
  return (
    <View
      width="1728px"
      height="2128px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Home1")}
      {...rest}
    >
      <View
        width="1728px"
        height="224px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(22,70,89,1)"
        {...getOverrideProps(overrides, "Rectangle 26")}
      ></View>
      <View
        width="1730px"
        height="800px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="223px"
        left="-1px"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-90deg, rgba(25,86,110,1), rgba(242,206,174,1))"
        {...getOverrideProps(overrides, "foto 1")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="1728px"
        height="234.09px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-5.51px"
        left="0px"
        {...getOverrideProps(overrides, "Group 68")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="1728px"
          height="234.09px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Group 381")}
        >
          <Button
            width="199px"
            height="40px"
            position="absolute"
            border="1px SOLID rgba(242,206,174,1)"
            borderRadius="10px"
            top="131.51px"
            left="1454px"
            backgroundColor="rgba(0,0,0,0.1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Cadastrar-se"
            {...getOverrideProps(overrides, "Button39883872")}
          ></Button>
          <View
            width="1728px"
            height="229.51px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(0,0,0,0.45)"
            {...getOverrideProps(overrides, "Rectangle 19")}
          ></View>
          <Image
            width="531px"
            height="232.58px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1.51px"
            left="598px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.LogoBrancaConecta}
            {...getOverrideProps(overrides, "logo_branca_conecta 1")}
          ></Image>
          <Button
            width="199px"
            height="40px"
            position="absolute"
            borderRadius="10px"
            top="131.51px"
            left="1225px"
            backgroundColor="rgba(211,152,74,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Entrar"
            {...getOverrideProps(overrides, "Button39883876")}
          ></Button>
          <Icon
            width="47px"
            height="45px"
            viewBox={{ minX: 0, minY: 0, width: 47, height: 45 }}
            paths={[
              {
                d: "M23.3825 36C24.205 36 24.9002 35.7281 25.4681 35.1844C26.036 34.6406 26.32 33.975 26.32 33.1875C26.32 32.4 26.036 31.7344 25.4681 31.1906C24.9002 30.6469 24.205 30.375 23.3825 30.375C22.56 30.375 21.8648 30.6469 21.2969 31.1906C20.729 31.7344 20.445 32.4 20.445 33.1875C20.445 33.975 20.729 34.6406 21.2969 35.1844C21.8648 35.7281 22.56 36 23.3825 36ZM21.2675 27.3375L25.615 27.3375C25.615 26.1 25.7619 25.125 26.0556 24.4125C26.3494 23.7 27.1817 22.725 28.5525 21.4875C29.5708 20.5125 30.3738 19.5844 30.9613 18.7031C31.5487 17.8219 31.8425 16.7625 31.8425 15.525C31.8425 13.425 31.0396 11.8125 29.4338 10.6875C27.8279 9.5625 25.9283 9 23.735 9C21.5025 9 19.691 9.5625 18.3006 10.6875C16.9102 11.8125 15.9408 13.1625 15.3925 14.7375L19.27 16.2C19.4658 15.525 19.9065 14.7937 20.5919 14.0062C21.2773 13.2187 22.325 12.825 23.735 12.825C24.9883 12.825 25.9283 13.1531 26.555 13.8094C27.1817 14.4656 27.495 15.1875 27.495 15.975C27.495 16.725 27.26 17.4281 26.79 18.0844C26.32 18.7406 25.7325 19.35 25.0275 19.9125C23.3042 21.375 22.2467 22.4812 21.855 23.2312C21.4633 23.9812 21.2675 25.35 21.2675 27.3375ZM23.5 45C20.2492 45 17.1942 44.4094 14.335 43.2281C11.4758 42.0469 8.98875 40.4438 6.87375 38.4188C4.75875 36.3937 3.08437 34.0125 1.85063 31.275C0.616875 28.5375 0 25.6125 0 22.5C0 19.3875 0.616875 16.4625 1.85063 13.725C3.08437 10.9875 4.75875 8.60625 6.87375 6.58125C8.98875 4.55625 11.4758 2.95312 14.335 1.77187C17.1942 0.590625 20.2492 0 23.5 0C26.7508 0 29.8058 0.590625 32.665 1.77187C35.5242 2.95312 38.0112 4.55625 40.1263 6.58125C42.2413 8.60625 43.9156 10.9875 45.1494 13.725C46.3831 16.4625 47 19.3875 47 22.5C47 25.6125 46.3831 28.5375 45.1494 31.275C43.9156 34.0125 42.2413 36.3937 40.1263 38.4188C38.0112 40.4438 35.5242 42.0469 32.665 43.2281C29.8058 44.4094 26.7508 45 23.5 45ZM23.5 40.5C28.7483 40.5 33.1937 38.7562 36.8363 35.2687C40.4788 31.7812 42.3 27.525 42.3 22.5C42.3 17.475 40.4788 13.2188 36.8363 9.73125C33.1937 6.24375 28.7483 4.5 23.5 4.5C18.2517 4.5 13.8062 6.24375 10.1637 9.73125C6.52125 13.2188 4.7 17.475 4.7 22.5C4.7 27.525 6.52125 31.7812 10.1637 35.2687C13.8062 38.7562 18.2517 40.5 23.5 40.5Z",
                fill: "rgba(242,242,242,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="137.51px"
            left="362px"
            {...getOverrideProps(overrides, "Vector39883877")}
          ></Icon>
          <Text
            fontFamily="Montserrat"
            fontSize="20px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24.3799991607666px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="68px"
            height="25px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="147.51px"
            left="427px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Ajuda"
            {...getOverrideProps(overrides, "Ajuda")}
          ></Text>
        </View>
      </View>
      <Text
        fontFamily="Montserrat"
        fontSize="64px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="78.01599884033203px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="1058px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="434px"
        left="89px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Conecte-se com oportunidades que valorizam suas habilidades"
        {...getOverrideProps(
          overrides,
          "Conecte-se com oportunidades que valorizam suas habilidades"
        )}
      ></Text>
      <View
        width="1636px"
        height="120px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="695px"
        left="36px"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 184")}
      ></View>
      <Flex
        gap="10px"
        direction="row"
        width="355px"
        height="76px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="719px"
        left="1005px"
        borderRadius="4px"
        padding="8px 16px 8px 16px"
        {...getOverrideProps(overrides, "Input")}
      >
        <Text
          fontFamily="Montserrat"
          fontSize="32px"
          fontWeight="300"
          color="rgba(0,0,0,0.66)"
          lineHeight="39.007999420166016px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
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
          children="Todas categorias"
          {...getOverrideProps(overrides, "placeholder")}
        ></Text>
        <View
          width="46px"
          height="38px"
          {...getOverrideProps(overrides, "\uD83D\uDD12Icon")}
        ></View>
      </Flex>
      <Button
        width="213px"
        height="73px"
        position="absolute"
        borderRadius="10px"
        top="719px"
        left="1432px"
        backgroundColor="rgba(22,70,89,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Buscar"
        {...getOverrideProps(overrides, "Button39883884")}
      ></Button>
      <Icon
        width="120.4px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1, height: 120.39884185791016 }}
        paths={[
          {
            d: "M0 0L120.399 0L120.399 -1L0 -1L0 0Z",
            stroke: "rgba(58,58,58,0.5)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="695px"
        left="487.75px"
        transformOrigin="top left"
        transform="rotate(90deg)"
        {...getOverrideProps(overrides, "Line 47")}
      ></Icon>
      <Icon
        width="120.4px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1, height: 120.39884185791016 }}
        paths={[
          {
            d: "M0 0L120.399 0L120.399 -1L0 -1L0 0Z",
            stroke: "rgba(58,58,58,0.5)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="695px"
        left="914px"
        transformOrigin="top left"
        transform="rotate(90deg)"
        {...getOverrideProps(overrides, "Line 48")}
      ></Icon>
      <Text
        fontFamily="Montserrat"
        fontSize="32px"
        fontWeight="300"
        color="rgba(0,0,0,0.66)"
        lineHeight="39.007999420166016px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="735px"
        left="154px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Cargo | Habilidade"
        {...getOverrideProps(overrides, "Cargo | Habilidade")}
      ></Text>
      <Text
        fontFamily="Montserrat"
        fontSize="32px"
        fontWeight="300"
        color="rgba(0,0,0,0.66)"
        lineHeight="39.007999420166016px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="735px"
        left="604px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Cidade | Estado"
        {...getOverrideProps(overrides, "Cidade | Estado")}
      ></Text>
      <Text
        fontFamily="Montserrat"
        fontSize="200px"
        fontWeight="700"
        color="rgba(211,152,74,0.69)"
        lineHeight="243.8000030517578px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="120px"
        height="177px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="840px"
        left="1643px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="+"
        {...getOverrideProps(overrides, "+39883889")}
      ></Text>
      <Text
        fontFamily="Montserrat"
        fontSize="200px"
        fontWeight="700"
        color="rgba(211,152,74,0.5)"
        lineHeight="243.8000030517578px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="823.35px"
        left="90.39px"
        transformOrigin="top left"
        transform="rotate(-7.1deg)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="+"
        {...getOverrideProps(overrides, "+39883890")}
      ></Text>
      <Text
        fontFamily="Montserrat"
        fontSize="200px"
        fontWeight="700"
        color="rgba(211,152,74,0.5)"
        lineHeight="243.8000030517578px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="216.83px"
        left="1303px"
        transformOrigin="top left"
        transform="rotate(-7.1deg)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="+"
        {...getOverrideProps(overrides, "+39883891")}
      ></Text>
      <Text
        fontFamily="Montserrat"
        fontSize="200px"
        fontWeight="700"
        color="rgba(211,152,74,0.5)"
        lineHeight="243.8000030517578px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="120px"
        height="71.04px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="239.37px"
        left="-64px"
        transformOrigin="top left"
        transform="rotate(-15.65deg)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="+"
        {...getOverrideProps(overrides, "+39883892")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="412px"
        height="343px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1136px"
        left="1228px"
        {...getOverrideProps(overrides, "Group 400")}
      >
        <View
          width="412px"
          height="343px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "undraw_website_5bo8 1")}
        >
          <Icon
            width="401.76px"
            height="1.67px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 401.76116943359375,
              height: 1.6674646139144897,
            }}
            paths={[
              {
                d: "M0 0.833732C0 1.29614 0.357486 1.66746 0.802659 1.66746L400.958 1.66746C401.404 1.66746 401.761 1.29614 401.761 0.833732C401.761 0.371327 401.404 0 400.958 0L0.802659 0C0.357486 0 0 0.371327 0 0.833732Z",
                fill: "rgba(47,46,67,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="99.51%"
            bottom="0%"
            left="2.49%"
            right="0%"
            {...getOverrideProps(overrides, "Vector39883895")}
          ></Icon>
          <Icon
            width="98.64px"
            height="79.82px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 98.64305877685547,
              height: 79.82476806640625,
            }}
            paths={[
              {
                d: "M63.1821 0C62.0833 6.91781 56.2878 12.212 49.3215 12.212C42.3552 12.212 36.5597 6.91781 35.461 0L0 0L0 79.8248L98.6431 79.8248L98.6431 2.1381e-05L63.1821 0Z",
                fill: "rgba(182,179,197,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="75.77%"
            bottom="0.96%"
            left="37.51%"
            right="38.54%"
            {...getOverrideProps(overrides, "Vector39883896")}
          ></Icon>
          <Icon
            width="9.75px"
            height="1.79px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 9.749608039855957,
              height: 1.787112832069397,
            }}
            paths={[
              {
                d: "M9.74961 0L0 0L0 1.78711L9.74961 1.78711L9.74961 0Z",
                fill: "rgba(182,179,197,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="98.96%"
            bottom="0.52%"
            left="37.93%"
            right="59.7%"
            {...getOverrideProps(overrides, "Vector39883897")}
          ></Icon>
          <Icon
            width="9.75px"
            height="1.79px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 9.749608039855957,
              height: 1.787112832069397,
            }}
            paths={[
              {
                d: "M9.74961 0L0 0L0 1.78711L9.74961 1.78711L9.74961 0Z",
                fill: "rgba(182,179,197,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="99.04%"
            bottom="0.44%"
            left="58.88%"
            right="38.75%"
            {...getOverrideProps(overrides, "Vector39883898")}
          ></Icon>
          <Icon
            width="407.76px"
            height="246.62px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 407.76287841796875,
              height: 246.62274169921875,
            }}
            paths={[
              {
                d: "M402.263 246.623L5.49927 246.623C2.46694 246.623 0 244.06 0 240.911L0 5.71215C0 2.56259 2.46694 0 5.49927 0L402.263 0C405.296 0 407.763 2.56259 407.763 5.71215L407.763 240.911C407.763 244.06 405.296 246.623 402.263 246.623Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="4.48%"
            bottom="23.62%"
            left="0%"
            right="1.03%"
            {...getOverrideProps(overrides, "Vector39883899")}
          ></Icon>
          <Icon
            width="388.26px"
            height="227.56px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 388.263671875,
              height: 227.5601348876953,
            }}
            paths={[
              {
                d: "M388.264 0L0 0L0 227.56L388.264 227.56L388.264 0Z",
                fill: "rgba(22,70,89,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="6.28%"
            bottom="27.38%"
            left="2.34%"
            right="3.42%"
            {...getOverrideProps(overrides, "Vector39883900")}
          ></Icon>
          <Icon
            width="27.86px"
            height="6.94px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 27.862947463989258,
              height: 6.935668468475342,
            }}
            paths={[
              {
                d: "M24.5244 6.93567L3.33859 6.93567C1.49771 6.93567 0 5.38016 0 3.46783C0 1.55551 1.49771 0 3.33859 0L24.5244 0C26.3652 0 27.8629 1.55551 27.8629 3.46783C27.8629 5.38016 26.3652 6.93567 24.5244 6.93567Z",
                fill: "rgba(209,209,210,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="30.88%"
            bottom="67.09%"
            left="79.53%"
            right="13.71%"
            {...getOverrideProps(overrides, "Vector39883901")}
          ></Icon>
          <Icon
            width="16.56px"
            height="6.94px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 16.56386375427246,
              height: 6.935668468475342,
            }}
            paths={[
              {
                d: "M13.2253 6.93567L3.33859 6.93567C1.49771 6.93567 0 5.38016 0 3.46783C0 1.55551 1.49771 0 3.33859 0L13.2253 0C15.0662 0 16.5639 1.55551 16.5639 3.46783C16.5639 5.38016 15.0662 6.93567 13.2253 6.93567Z",
                fill: "rgba(209,209,210,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="30.88%"
            bottom="67.09%"
            left="88.18%"
            right="7.8%"
            {...getOverrideProps(overrides, "Vector39883902")}
          ></Icon>
          <Icon
            width="19.25px"
            height="19.7px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 19.251914978027344,
              height: 19.702007293701172,
            }}
            paths={[
              {
                d: "M19.2519 9.53744L9.93237 19.702L0 10.1645L9.31958 0L19.2519 9.53744Z",
                fill: "rgba(237,157,160,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="85.47%"
            bottom="8.79%"
            left="86.57%"
            right="8.76%"
            {...getOverrideProps(overrides, "Vector39883903")}
          ></Icon>
          <Icon
            width="38.02px"
            height="43.97px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 38.0233039855957,
              height: 43.9747200012207,
            }}
            paths={[
              {
                d: "M35.8088 15.7437L15.9987 37.35C14.3055 39.1967 12.1907 40.6558 9.88292 41.5694L4.35989 43.7561C3.21796 44.2082 1.90308 43.9463 1.01018 43.0889C-0.0369784 42.0834 -0.301974 40.4725 0.36569 39.1715L5.67819 28.8204L11.3472 7.82869L11.4088 7.86814C12.951 8.85458 15.2901 10.3347 15.4568 10.3974C18.3925 10.5054 20.494 9.73844 21.7037 8.11853C23.8137 5.29298 22.4751 0.782252 22.4613 0.736985L22.4508 0.702369L22.4775 0.678572C23.0926 0.133081 23.7405 -0.0851991 24.4031 0.0297856C25.81 0.273957 26.8164 1.91545 26.9636 2.16798C28.2838 2.1102 32.3373 5.40769 32.6635 5.67491C34.6535 5.66938 36.1124 6.15952 36.9994 7.13195C37.775 7.98208 38.1126 9.18883 38.0032 10.7187C37.8716 12.5592 37.0923 14.3438 35.8088 15.7437Z",
                fill: "rgba(9,8,20,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="86.69%"
            bottom="0.49%"
            left="84.36%"
            right="6.41%"
            {...getOverrideProps(overrides, "Vector39883904")}
          ></Icon>
          <Image
            width="69.9%"
            height="30.32%"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="24.2%"
            bottom="45.48%"
            left="2.43%"
            right="27.67%"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.LogoBrancaConecta}
            {...getOverrideProps(overrides, "logo_branca_conecta 3")}
          ></Image>
          <Icon
            width="13.62px"
            height="13.94px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 13.620036125183105,
              height: 13.938471794128418,
            }}
            paths={[
              {
                d: "M13.62 0L0 0L0 13.9385L13.62 13.9385L13.62 0Z",
                fill: "rgba(237,157,160,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="91.66%"
            bottom="4.28%"
            left="85.33%"
            right="11.37%"
            {...getOverrideProps(overrides, "Vector39883906")}
          ></Icon>
          <Icon
            width="50.26px"
            height="23.67px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 50.2557373046875,
              height: 23.67142105102539,
            }}
            paths={[
              {
                d: "M43.2969 23.6714L14.3454 23.6714C11.8709 23.6714 9.38413 23.0915 7.15396 21.9944L1.81664 19.3689C0.713077 18.826 0 17.6655 0 16.4125C0 14.943 0.966551 13.6429 2.35049 13.251L13.3617 10.1329L32.1991 0L32.2131 0.0729949C32.5654 1.89887 33.1113 4.65733 33.1807 4.82463C35.1125 7.08937 37.0969 8.13299 39.079 7.92734C42.5362 7.56866 44.8345 3.48312 44.8573 3.44188L44.8748 3.41034L44.9101 3.41402C45.7197 3.49976 46.3185 3.8339 46.69 4.40717C47.4787 5.62418 46.9976 7.4984 46.9184 7.7811C47.8629 8.72682 48.2868 14.0082 48.3195 14.4345C49.6852 15.9159 50.3342 17.34 50.2482 18.6674C50.173 19.8279 49.5442 20.9056 48.3792 21.8707C46.9776 23.0319 45.1726 23.6714 43.2969 23.6714Z",
                fill: "rgba(9,8,20,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="92.52%"
            bottom="0.58%"
            left="77.56%"
            right="10.24%"
            {...getOverrideProps(overrides, "Vector39883907")}
          ></Icon>
          <Icon
            width="64.35px"
            height="163.85px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 64.3499755859375,
              height: 163.85205078125,
            }}
            paths={[
              {
                d: "M64.35 0L16.0875 0.0244171L0 104.269L48.2625 163.852L64.35 148.956L26.2089 104.269L64.35 0Z",
                fill: "rgba(9,8,20,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="40.48%"
            bottom="11.75%"
            left="73.41%"
            right="10.97%"
            {...getOverrideProps(overrides, "Vector39883908")}
          ></Icon>
          <Icon
            width="28.53px"
            height="179.21px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 28.525983810424805,
              height: 179.20655822753906,
            }}
            paths={[
              {
                d: "M0 15.3667L28.526 0L28.526 178.748L12.4385 179.207L0 15.3667Z",
                fill: "rgba(9,8,20,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="40.48%"
            bottom="7.27%"
            left="82.1%"
            right="10.97%"
            {...getOverrideProps(overrides, "Vector39883909")}
          ></Icon>
          <Icon
            width="14.64px"
            height="32.72px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 14.639443397521973,
              height: 32.7230339050293,
            }}
            paths={[
              {
                d: "M12.0426 16.4778L12.3824 0.206103L3.23595 0L2.89611 16.2717C1.18961 17.9172 0.0631077 20.474 0.00256424 23.3728C-0.10338 28.4449 3.08674 32.6305 7.12791 32.7215C11.1691 32.8126 14.531 28.7747 14.6369 23.7026C14.6974 20.8038 13.6787 18.1986 12.0426 16.4778Z",
                fill: "rgba(237,157,160,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="47.86%"
            bottom="42.6%"
            left="72.24%"
            right="24.2%"
            {...getOverrideProps(overrides, "Vector39883910")}
          ></Icon>
          <Icon
            width="18.3px"
            height="21.74px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 18.297422409057617,
              height: 21.740074157714844,
            }}
            paths={[
              {
                d: "M8.97567 21.7401C8.97567 21.7401 22.105 21.7106 17.2003 8.57005C12.2955 -4.57051 3.16265 1.31323 3.16265 1.31323C3.16265 1.31323 -0.685631 3.42465 0.107747 8.13545",
                fill: "rgba(9,8,20,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="93.66%"
            left="83.52%"
            right="12.04%"
            {...getOverrideProps(overrides, "Vector39883911")}
          ></Icon>
          <Icon
            width="35.12px"
            height="58.96px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 35.12493133544922,
              height: 58.95714569091797,
            }}
            paths={[
              {
                d: "M35.1249 18.2423C35.1249 8.16732 27.2619 0 17.5625 0C7.86312 0 0 8.16731 0 18.2423C0 26.4131 5.17197 33.3284 12.3007 35.6508L15.6959 58.9571L33.0039 43.9755C33.0039 43.9755 29.2648 39.0286 27.2596 33.4506C31.9989 30.1836 35.1249 24.5932 35.1249 18.2423Z",
                fill: "rgba(237,157,160,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="2.86%"
            bottom="79.95%"
            left="77.49%"
            right="13.99%"
            {...getOverrideProps(overrides, "Vector39883912")}
          ></Icon>
          <Icon
            width="36px"
            height="37.89px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 36.003082275390625,
              height: 37.89195251464844,
            }}
            paths={[
              {
                d: "M23.7837 37.8919C23.7837 37.8919 26.116 28.6042 22.3025 24.3336C18.4977 20.0727 18.0062 26.7024 18.0062 26.7024L15.2608 26.0825C15.2608 26.0825 15.7383 19.6352 10.3668 18.5193L13.8284 10.8321C13.8284 10.8321 0.575503 13.505 0.210219 12.1717C-2.66399 1.6809 24.7557 -7.2807 32.3302 8.72434C44.111 33.6175 23.7837 37.8919 23.7837 37.8919Z",
                fill: "rgba(9,8,20,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1.62%"
            bottom="87.33%"
            left="78.03%"
            right="13.24%"
            {...getOverrideProps(overrides, "Vector39883913")}
          ></Icon>
          <Icon
            width="31.42px"
            height="118.97px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 31.41767692565918,
              height: 118.97237396240234,
            }}
            paths={[
              {
                d: "M31.4177 0C18.6674 2.58789 9.09692 13.6151 7.93643 27.0555L0 118.972L13.9272 118.972L31.4177 0Z",
                fill: "rgba(234,191,63,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="17.41%"
            bottom="47.91%"
            left="72.41%"
            right="19.97%"
            {...getOverrideProps(overrides, "Vector39883914")}
          ></Icon>
          <Icon
            width="65.06px"
            height="109.21px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 65.06182098388672,
              height: 109.20790100097656,
            }}
            paths={[
              {
                d: "M2.169 83.255L0 109.208L58.8772 91.2207L51.7031 72.4626L65.0618 40.5996L37.7922 0L16.0225 1.54177L7.61144 12.848",
                fill: "rgba(234,191,63,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="14.49%"
            bottom="53.68%"
            left="76.31%"
            right="7.9%"
            {...getOverrideProps(overrides, "Vector39883915")}
          ></Icon>
          <Icon
            width="23.49px"
            height="31.23px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 23.49078941345215,
              height: 31.234601974487305,
            }}
            paths={[
              {
                d: "M15.2788 18.8416L23.4908 4.98032L15.6993 0L7.48727 13.8613C5.21407 14.385 2.99781 15.9996 1.53485 18.469C-1.02496 22.7897 -0.30933 28.0761 3.13317 30.2766C6.57568 32.4771 11.4415 30.7582 14.0013 26.4375C15.4642 23.9681 15.853 21.1854 15.2788 18.8416Z",
                fill: "rgba(237,157,160,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="40.45%"
            bottom="50.44%"
            left="84.78%"
            right="9.52%"
            {...getOverrideProps(overrides, "Vector39883916")}
          ></Icon>
          <Icon
            width="37.6px"
            height="112.24px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 37.6022834777832,
              height: 112.23902893066406,
            }}
            paths={[
              {
                d: "M0 0.204563L4.74746 0L12.864 6.3716C22.4816 8.0752 25.2708 8.55284 28.2176 15.1517C29.4559 17.9246 30.2767 20.8786 30.7357 23.8978L37.6023 69.0698L20.3429 112.239L8.9058 98.8771L21.1322 65.1263L19.1011 57.0531",
                fill: "rgba(234,191,63,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="14.58%"
            bottom="52.7%"
            left="84.4%"
            right="6.47%"
            {...getOverrideProps(overrides, "Vector39883917")}
          ></Icon>
        </View>
      </View>
      <Text
        fontFamily="Montserrat"
        fontSize="64px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="78.01599884033203px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1104px"
        left="70px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Sobre nós"
        {...getOverrideProps(overrides, "Sobre n\u00F3s")}
      ></Text>
      <Text
        fontFamily="Montserrat"
        fontSize="40px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="48.7599983215332px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="1024px"
        height="292px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1221px"
        left="70px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Sabemos que pessoas com TEA possuem certas limitações, como a necessidade de interfaces mais simples e menos sobrecarregadas de informação.&#xA;Assim, criamos a Conecta+, uma plataforma que conecta empregadores e candidatos com TEA, promovendo a inclusão no mercado de trabalho. &#xA;"
        {...getOverrideProps(
          overrides,
          "Sabemos que pessoas com TEA possuem certas limita\u00E7\u00F5es, como a necessidade de interfaces mais simples e menos sobrecarregadas de informa\u00E7\u00E3o. Assim, criamos a Conecta+, uma plataforma que conecta empregadores e candidatos com TEA, promovendo a inclus\u00E3o no mercado de trabalho."
        )}
      ></Text>
      <Text
        fontFamily="Montserrat"
        fontSize="48px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="58.512001037597656px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="729px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1628px"
        left="70px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Categorias de vagas:"
        {...getOverrideProps(overrides, "Categorias de vagas:")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="1473.91px"
        height="257.11px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1768.95px"
        left="88.99px"
        {...getOverrideProps(overrides, "Group 427")}
      >
        <View
          width="385.5px"
          height="257px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0.11px"
          left="0px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          borderRadius="27px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(38,25,13,1)"
          {...getOverrideProps(overrides, "Rectangle 9439883922")}
        ></View>
        <View
          width="385.5px"
          height="257px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0.07px"
          left="566.69px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          borderRadius="27px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,0.8)"
          {...getOverrideProps(overrides, "Rectangle 96")}
        ></View>
        <View
          width="385.5px"
          height="257px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0.03px"
          left="1088.4px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          borderRadius="27px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(38,25,13,1)"
          {...getOverrideProps(overrides, "Rectangle 9439883924")}
        ></View>
        <View
          width="385.5px"
          height="257px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0.08px"
          left="566.01px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          borderRadius="27px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(38,25,13,1)"
          {...getOverrideProps(overrides, "image39883925")}
        ></View>
        <View
          width="385.5px"
          height="257px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0.11px"
          left="0px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="27px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "image39883926")}
        ></View>
        <Text
          fontFamily="Montserrat"
          fontSize="36px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="43.88399887084961px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="156.06px"
          left="calc(50% - 58.5px - -21.55px)"
          transformOrigin="top left"
          transform="rotate(0deg)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Saúde"
          {...getOverrideProps(overrides, "Sa\u00FAde")}
        ></Text>
        <Text
          fontFamily="Montserrat"
          fontSize="36px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="43.88399887084961px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="156.07px"
          left="92.01px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Tecnologia"
          {...getOverrideProps(overrides, "Tecnologia")}
        ></Text>
        <Text
          fontFamily="Montserrat"
          fontSize="36px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="43.88399887084961px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="133px"
          height="56.54px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="150.06px"
          left="1214.01px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Design"
          {...getOverrideProps(overrides, "Design")}
        ></Text>
        <Icon
          width="60.17px"
          height="47.25px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 60.16999816894531,
            height: 47.25,
          }}
          paths={[
            {
              d: "M15.0425 47.25L15.0425 35.4375L0 35.4375L0 11.8125L15.0425 11.8125L15.0425 0L45.1275 0L45.1275 11.8125L60.17 11.8125L60.17 35.4375L45.1275 35.4375L45.1275 47.25L15.0425 47.25ZM6.017 21.2625L21.0595 21.2625C21.5609 21.2625 22.0373 21.3609 22.4885 21.5578C22.9398 21.7547 23.2908 22.0106 23.5415 22.3256L26.174 25.3969L30.2354 15.8287C30.436 15.3562 30.7995 14.9625 31.326 14.6475C31.8525 14.3325 32.4417 14.175 33.0935 14.175C33.5949 14.175 34.0713 14.2734 34.5225 14.4703C34.9738 14.6672 35.3248 14.9231 35.5755 15.2381L40.69 21.2625L54.153 21.2625L54.153 16.5375L39.1105 16.5375L39.1105 4.725L21.0595 4.725L21.0595 16.5375L6.017 16.5375L6.017 21.2625ZM21.0595 42.525L39.1105 42.525L39.1105 30.7125L54.153 30.7125L54.153 25.9875L39.1105 25.9875C38.6091 25.9875 38.1327 25.8891 37.6815 25.6922C37.2302 25.4953 36.8541 25.2394 36.5533 24.9244L33.9961 21.8531L29.9346 31.4212C29.734 31.8937 29.3579 32.2875 28.8064 32.6025C28.2548 32.9175 27.6531 33.075 27.0013 33.075C26.4999 33.075 26.0235 32.9766 25.5723 32.7797C25.121 32.5828 24.77 32.3269 24.5193 32.0119L19.4048 25.9875L6.017 25.9875L6.017 30.7125L21.0595 30.7125L21.0595 42.525Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="72.05px"
          left="729.01px"
          {...getOverrideProps(overrides, "Vector39883930")}
        ></Icon>
        <Icon
          width="60.17px"
          height="47.25px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 60.16666793823242,
            height: 47.25,
          }}
          paths={[
            {
              d: "M3.16667 47.25L3.16667 36.0938L44.8875 1.575C45.5208 1.05 46.2333 0.65625 47.025 0.39375C47.8167 0.13125 48.6083 0 49.4 0C50.2444 0 51.0493 0.13125 51.8146 0.39375C52.5799 0.65625 53.2528 1.05 53.8333 1.575L58.2667 5.25C58.9 5.73125 59.375 6.28906 59.6917 6.92344C60.0083 7.55781 60.1667 8.225 60.1667 8.925C60.1667 9.58125 60.0083 10.2375 59.6917 10.8938C59.375 11.55 58.9 12.1406 58.2667 12.6656L16.625 47.25L3.16667 47.25ZM9.5 42L13.9333 42L45.0458 16.275L42.8292 14.3719L40.5333 12.5344L9.5 38.325L9.5 42ZM42.8292 14.3719L40.5333 12.5344L45.0458 16.275L42.8292 14.3719ZM34.8333 47.25C38.7389 47.25 42.3542 46.4406 45.6792 44.8219C49.0042 43.2031 50.6667 40.95 50.6667 38.0625C50.6667 36.4875 50.1653 35.1313 49.1625 33.9938C48.1597 32.8563 46.8139 31.8719 45.125 31.0406L40.4542 34.9125C41.6681 35.35 42.6181 35.8313 43.3042 36.3563C43.9903 36.8813 44.3333 37.45 44.3333 38.0625C44.3333 39.0688 43.3701 39.9766 41.4438 40.7859C39.5174 41.5953 37.3139 42 34.8333 42C33.9361 42 33.184 42.2516 32.5771 42.7547C31.9701 43.2578 31.6667 43.8813 31.6667 44.625C31.6667 45.3688 31.9701 45.9922 32.5771 46.4953C33.184 46.9984 33.9361 47.25 34.8333 47.25ZM4.9875 27.1688L9.7375 23.2313C8.68195 22.8813 7.8507 22.5203 7.24375 22.1484C6.63681 21.7766 6.33333 21.3938 6.33333 21C6.33333 20.475 6.80833 19.95 7.75833 19.425C8.70833 18.9 10.7139 18.0906 13.775 16.9969C18.4194 15.3344 21.5069 13.825 23.0375 12.4688C24.5681 11.1125 25.3333 9.58125 25.3333 7.875C25.3333 5.46875 24.1722 3.55469 21.85 2.13281C19.5278 0.710938 16.4667 0 12.6667 0C10.2917 0 8.16736 0.35 6.29375 1.05C4.42014 1.75 2.98194 2.60313 1.97917 3.60938C1.39861 4.17813 1.16111 4.8125 1.26667 5.5125C1.37222 6.2125 1.76806 6.78125 2.45417 7.21875C3.14028 7.7 3.90556 7.89688 4.75 7.80938C5.59445 7.72188 6.30694 7.4375 6.8875 6.95625C7.62639 6.34375 8.44444 5.90625 9.34167 5.64375C10.2389 5.38125 11.3472 5.25 12.6667 5.25C14.8306 5.25 16.4271 5.5125 17.4563 6.0375C18.4854 6.5625 19 7.175 19 7.875C19 8.4875 18.5382 9.04531 17.6146 9.54844C16.691 10.0516 14.5667 10.9375 11.2417 12.2063C7.01945 13.7375 4.09028 15.1266 2.45417 16.3734C0.818056 17.6203 0 19.1625 0 21C0 22.4 0.448611 23.5922 1.34583 24.5766C2.24306 25.5609 3.45694 26.425 4.9875 27.1688Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="28.03%"
          bottom="53.6%"
          left="84.88%"
          right="11.04%"
          {...getOverrideProps(overrides, "Vector39883931")}
        ></Icon>
        <Icon
          width="60.17px"
          height="47.25px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 60.16999816894531,
            height: 47.25,
          }}
          paths={[
            {
              d: "M33.4278 47.25L33.4278 42L40.1133 42L40.1133 47.25L33.4278 47.25ZM26.7422 42L26.7422 28.875L33.4278 28.875L33.4278 42L26.7422 42ZM53.4844 34.125L53.4844 23.625L60.17 23.625L60.17 34.125L53.4844 34.125ZM46.7989 23.625L46.7989 18.375L53.4844 18.375L53.4844 23.625L46.7989 23.625ZM6.68556 28.875L6.68556 23.625L13.3711 23.625L13.3711 28.875L6.68556 28.875ZM0 23.625L0 18.375L6.68556 18.375L6.68556 23.625L0 23.625ZM30.085 5.25L30.085 0L36.7706 0L36.7706 5.25L30.085 5.25ZM5.01417 11.8125L15.0425 11.8125L15.0425 3.9375L5.01417 3.9375L5.01417 11.8125ZM0 15.75L0 0L20.0567 0L20.0567 15.75L0 15.75ZM5.01417 43.3125L15.0425 43.3125L15.0425 35.4375L5.01417 35.4375L5.01417 43.3125ZM0 47.25L0 31.5L20.0567 31.5L20.0567 47.25L0 47.25ZM45.1275 11.8125L55.1558 11.8125L55.1558 3.9375L45.1275 3.9375L45.1275 11.8125ZM40.1133 15.75L40.1133 0L60.17 0L60.17 15.75L40.1133 15.75ZM46.7989 47.25L46.7989 39.375L40.1133 39.375L40.1133 34.125L53.4844 34.125L53.4844 42L60.17 42L60.17 47.25L46.7989 47.25ZM33.4278 28.875L33.4278 23.625L46.7989 23.625L46.7989 28.875L33.4278 28.875ZM20.0567 28.875L20.0567 23.625L13.3711 23.625L13.3711 18.375L33.4278 18.375L33.4278 23.625L26.7422 23.625L26.7422 28.875L20.0567 28.875ZM23.3994 15.75L23.3994 5.25L30.085 5.25L30.085 10.5L36.7706 10.5L36.7706 15.75L23.3994 15.75ZM7.52125 9.84375L7.52125 5.90625L12.5354 5.90625L12.5354 9.84375L7.52125 9.84375ZM7.52125 41.3438L7.52125 37.4062L12.5354 37.4062L12.5354 41.3438L7.52125 41.3438ZM47.6346 9.84375L47.6346 5.90625L52.6487 5.90625L52.6487 9.84375L47.6346 9.84375Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="72.05px"
          left="163.01px"
          {...getOverrideProps(overrides, "Vector39883932")}
        ></Icon>
      </View>
      <Icon
        width="36px"
        height="42px"
        viewBox={{ minX: 0, minY: 0, width: 36, height: 42 }}
        paths={[
          {
            d: "M18 8.4C16.9 8.4 15.9583 7.98875 15.175 7.16625C14.3917 6.34375 14 5.355 14 4.2C14 3.045 14.3917 2.05625 15.175 1.23375C15.9583 0.41125 16.9 0 18 0C19.1 0 20.0417 0.41125 20.825 1.23375C21.6083 2.05625 22 3.045 22 4.2C22 5.355 21.6083 6.34375 20.825 7.16625C20.0417 7.98875 19.1 8.4 18 8.4ZM12 42L12 14.7L0 14.7L0 10.5L36 10.5L36 14.7L24 14.7L24 42L20 42L20 29.4L16 29.4L16 42L12 42Z",
            fill: "rgba(242,242,242,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="6.2%"
        bottom="91.82%"
        left="11.63%"
        right="86.28%"
        {...getOverrideProps(overrides, "Vector39883933")}
      ></Icon>
      <Icon
        width="47px"
        height="45px"
        viewBox={{ minX: 0, minY: 0, width: 47, height: 45 }}
        paths={[
          {
            d: "M0 18.0673C0 14.3267 0.871458 10.8946 2.61437 7.7712C4.35729 4.64776 6.6975 2.05736 9.635 0L12.3962 3.59102C10.0462 5.23691 8.17604 7.31297 6.78562 9.8192C5.39521 12.3254 4.7 15.0748 4.7 18.0673L0 18.0673ZM42.3 18.0673C42.3 15.0748 41.6048 12.3254 40.2144 9.8192C38.824 7.31297 36.9537 5.23691 34.6037 3.59102L37.365 0C40.3025 2.05736 42.6427 4.64776 44.3856 7.7712C46.1285 10.8946 47 14.3267 47 18.0673L42.3 18.0673ZM4.7 38.2668L4.7 33.7781L9.4 33.7781L9.4 18.0673C9.4 14.9626 10.3792 12.2039 12.3375 9.79115C14.2958 7.37843 16.8417 5.79801 19.975 5.04988L19.975 3.4788C19.975 2.54364 20.3177 1.74875 21.0031 1.09414C21.6885 0.439526 22.5208 0.112219 23.5 0.112219C24.4792 0.112219 25.3115 0.439526 25.9969 1.09414C26.6823 1.74875 27.025 2.54364 27.025 3.4788L27.025 5.04988C30.1583 5.79801 32.7042 7.37843 34.6625 9.79115C36.6208 12.2039 37.6 14.9626 37.6 18.0673L37.6 33.7781L42.3 33.7781L42.3 38.2668L4.7 38.2668ZM23.5 45C22.2075 45 21.101 44.5605 20.1806 43.6814C19.2602 42.8024 18.8 41.7456 18.8 40.5112L28.2 40.5112C28.2 41.7456 27.7398 42.8024 26.8194 43.6814C25.899 44.5605 24.7925 45 23.5 45ZM14.1 33.7781L32.9 33.7781L32.9 18.0673C32.9 15.5985 31.9796 13.485 30.1388 11.7269C28.2979 9.96883 26.085 9.08978 23.5 9.08978C20.915 9.08978 18.7021 9.96883 16.8612 11.7269C15.0204 13.485 14.1 15.5985 14.1 18.0673L14.1 33.7781Z",
            fill: "rgba(242,242,242,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="6.2%"
        bottom="91.68%"
        left="16.03%"
        right="81.25%"
        {...getOverrideProps(overrides, "Vector39883934")}
      ></Icon>
      <View
        width="50px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="730px"
        left="71px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SearchIcon 1")}
      >
        <Icon
          width="37.5px"
          height="37.5px"
          viewBox={{ minX: 0, minY: 0, width: 37.5, height: 37.5 }}
          paths={[
            {
              d: "M34.5833 37.5L21.4583 24.375C20.4167 25.2083 19.2188 25.8681 17.8646 26.3542C16.5104 26.8403 15.0694 27.0833 13.5417 27.0833C9.75694 27.0833 6.55382 25.7726 3.93229 23.151C1.31076 20.5295 0 17.3264 0 13.5417C0 9.75694 1.31076 6.55382 3.93229 3.93229C6.55382 1.31076 9.75694 0 13.5417 0C17.3264 0 20.5295 1.31076 23.151 3.93229C25.7726 6.55382 27.0833 9.75694 27.0833 13.5417C27.0833 15.0694 26.8403 16.5104 26.3542 17.8646C25.8681 19.2188 25.2083 20.4167 24.375 21.4583L37.5 34.5833L34.5833 37.5ZM13.5417 22.9167C16.1458 22.9167 18.3594 22.0052 20.1823 20.1823C22.0052 18.3594 22.9167 16.1458 22.9167 13.5417C22.9167 10.9375 22.0052 8.72396 20.1823 6.90104C18.3594 5.07812 16.1458 4.16667 13.5417 4.16667C10.9375 4.16667 8.72396 5.07812 6.90104 6.90104C5.07812 8.72396 4.16667 10.9375 4.16667 13.5417C4.16667 16.1458 5.07812 18.3594 6.90104 20.1823C8.72396 22.0052 10.9375 22.9167 13.5417 22.9167Z",
              fill: "rgba(22,70,89,1)",
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
          {...getOverrideProps(overrides, "Vector39883937")}
        ></Icon>
      </View>
      <Icon
        width="46px"
        height="46px"
        viewBox={{ minX: 0, minY: 0, width: 46, height: 46 }}
        paths={[
          {
            d: "M23 23C24.5812 23 25.9349 22.5496 27.0609 21.6488C28.187 20.7479 28.75 19.665 28.75 18.4C28.75 17.135 28.187 16.0521 27.0609 15.1512C25.9349 14.2504 24.5812 13.8 23 13.8C21.4187 13.8 20.0651 14.2504 18.9391 15.1512C17.813 16.0521 17.25 17.135 17.25 18.4C17.25 19.665 17.813 20.7479 18.9391 21.6488C20.0651 22.5496 21.4187 23 23 23ZM23 39.905C28.8458 35.6117 33.1823 31.7113 36.0094 28.2038C38.8365 24.6963 40.25 21.5817 40.25 18.86C40.25 14.6817 38.5849 11.2604 35.2547 8.59625C31.9245 5.93208 27.8396 4.6 23 4.6C18.1604 4.6 14.0755 5.93208 10.7453 8.59625C7.4151 11.2604 5.75 14.6817 5.75 18.86C5.75 21.5817 7.16354 24.6963 9.99062 28.2038C12.8177 31.7113 17.1542 35.6117 23 39.905ZM23 46C15.2854 40.7483 9.52344 35.8704 5.71406 31.3663C1.90469 26.8621 0 22.6933 0 18.86C0 13.11 2.31198 8.52917 6.93594 5.1175C11.5599 1.70583 16.9146 0 23 0C29.0854 0 34.4401 1.70583 39.0641 5.1175C43.688 8.52917 46 13.11 46 18.86C46 22.6933 44.0953 26.8621 40.2859 31.3663C36.4766 35.8704 30.7146 40.7483 23 46Z",
            fill: "rgba(22,70,89,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="34.4%"
        bottom="63.44%"
        left="30.27%"
        right="67.07%"
        {...getOverrideProps(overrides, "Vector39883938")}
      ></Icon>
      <Icon
        width="46px"
        height="46px"
        viewBox={{ minX: 0, minY: 0, width: 46, height: 46 }}
        paths={[
          {
            d: "M12.7778 35.7778C13.5019 35.7778 14.1088 35.5329 14.5986 35.0431C15.0884 34.5532 15.3333 33.9463 15.3333 33.2222C15.3333 32.4981 15.0884 31.8912 14.5986 31.4014C14.1088 30.9116 13.5019 30.6667 12.7778 30.6667C12.0537 30.6667 11.4468 30.9116 10.9569 31.4014C10.4671 31.8912 10.2222 32.4981 10.2222 33.2222C10.2222 33.9463 10.4671 34.5532 10.9569 35.0431C11.4468 35.5329 12.0537 35.7778 12.7778 35.7778ZM12.7778 25.5556C13.5019 25.5556 14.1088 25.3106 14.5986 24.8208C15.0884 24.331 15.3333 23.7241 15.3333 23C15.3333 22.2759 15.0884 21.669 14.5986 21.1792C14.1088 20.6894 13.5019 20.4444 12.7778 20.4444C12.0537 20.4444 11.4468 20.6894 10.9569 21.1792C10.4671 21.669 10.2222 22.2759 10.2222 23C10.2222 23.7241 10.4671 24.331 10.9569 24.8208C11.4468 25.3106 12.0537 25.5556 12.7778 25.5556ZM12.7778 15.3333C13.5019 15.3333 14.1088 15.0884 14.5986 14.5986C15.0884 14.1088 15.3333 13.5019 15.3333 12.7778C15.3333 12.0537 15.0884 11.4468 14.5986 10.9569C14.1088 10.4671 13.5019 10.2222 12.7778 10.2222C12.0537 10.2222 11.4468 10.4671 10.9569 10.9569C10.4671 11.4468 10.2222 12.0537 10.2222 12.7778C10.2222 13.5019 10.4671 14.1088 10.9569 14.5986C11.4468 15.0884 12.0537 15.3333 12.7778 15.3333ZM20.4444 35.7778L35.7778 35.7778L35.7778 30.6667L20.4444 30.6667L20.4444 35.7778ZM20.4444 25.5556L35.7778 25.5556L35.7778 20.4444L20.4444 20.4444L20.4444 25.5556ZM20.4444 15.3333L35.7778 15.3333L35.7778 10.2222L20.4444 10.2222L20.4444 15.3333ZM5.11111 46C3.70556 46 2.50232 45.4995 1.50139 44.4986C0.500463 43.4977 0 42.2944 0 40.8889L0 5.11111C0 3.70556 0.500463 2.50232 1.50139 1.50139C2.50232 0.500463 3.70556 0 5.11111 0L40.8889 0C42.2944 0 43.4977 0.500463 44.4986 1.50139C45.4995 2.50232 46 3.70556 46 5.11111L46 40.8889C46 42.2944 45.4995 43.4977 44.4986 44.4986C43.4977 45.4995 42.2944 46 40.8889 46L5.11111 46ZM5.11111 40.8889L40.8889 40.8889L40.8889 5.11111L5.11111 5.11111L5.11111 40.8889Z",
            fill: "rgba(22,70,89,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="34.54%"
        bottom="63.3%"
        left="54.98%"
        right="42.36%"
        {...getOverrideProps(overrides, "Vector39883939")}
      ></Icon>
      <View
        width="74px"
        height="86px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="1854px"
        left="1597px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ArrowRightIcon 139883940")}
      >
        <Icon
          width="22.82px"
          height="43px"
          viewBox={{ minX: 0, minY: 0, width: 22.816667556762695, height: 43 }}
          paths={[
            {
              d: "M14.1833 21.5L0 5.01667L4.31667 0L22.8167 21.5L4.31667 43L0 37.9833L14.1833 21.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="25%"
          bottom="25%"
          left="33.33%"
          right="35.83%"
          {...getOverrideProps(overrides, "Vector39883941")}
        ></Icon>
      </View>
      <View
        width="74px"
        height="86px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="1940px"
        left="70px"
        transformOrigin="top left"
        transform="rotate(180deg)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ArrowRightIcon 139883942")}
      >
        <Icon
          width="22.82px"
          height="43px"
          viewBox={{ minX: 0, minY: 0, width: 22.816667556762695, height: 43 }}
          paths={[
            {
              d: "M14.1833 21.5L0 5.01667L4.31667 0L22.8167 21.5L4.31667 43L0 37.9833L14.1833 21.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="25%"
          bottom="25%"
          left="33.33%"
          right="35.83%"
          {...getOverrideProps(overrides, "Vector39883943")}
        ></Icon>
      </View>
      <View
        width="1729px"
        height="61px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="220.5px"
        left="-2.5px"
        border="1px SOLID rgba(239,204,139,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(212,180,120,1)"
        {...getOverrideProps(overrides, "Rectangle 20")}
      ></View>
      <Button
        width="107px"
        height="36px"
        position="absolute"
        borderRadius="10px"
        top="233px"
        left="808px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        backgroundColor="rgba(0,0,0,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Vagas"
        {...getOverrideProps(overrides, "Button40932135")}
      ></Button>
      <Button
        width="107px"
        height="36px"
        position="absolute"
        borderRadius="10px"
        top="233px"
        left="593px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        backgroundColor="rgba(0,0,0,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Perfil"
        {...getOverrideProps(overrides, "Button40932136")}
      ></Button>
      <Button
        width="107px"
        height="36px"
        position="absolute"
        borderRadius="10px"
        top="233px"
        left="1023px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        backgroundColor="rgba(0,0,0,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Plus"
        {...getOverrideProps(overrides, "Button40932137")}
      ></Button>
      <Icon
        width="56.95px"
        height="42.5px"
        viewBox={{ minX: 0, minY: 0, width: 56.95000076293945, height: 42.5 }}
        paths={[
          {
            d: "M20.6833 42.5L19.55 35.7C18.9361 35.5229 18.3576 35.3104 17.8146 35.0625C17.2715 34.8146 16.7403 34.549 16.2208 34.2656L7.79167 36.9219L0 26.8281L7.29583 22.6844C7.24861 22.4365 7.225 22.1974 7.225 21.9672L7.225 20.5328C7.225 20.3026 7.24861 20.0635 7.29583 19.8156L0 15.6719L7.79167 5.57812L16.2208 8.23438C16.7403 7.95104 17.2833 7.68542 17.85 7.4375C18.4167 7.18958 18.9833 6.97708 19.55 6.8L20.6833 0L36.2667 0L37.4 6.8C38.0139 6.97708 38.5924 7.18958 39.1354 7.4375C39.6785 7.68542 40.2097 7.95104 40.7292 8.23438L49.1583 5.57812L56.95 15.6719L49.6542 19.8156C49.7014 20.0635 49.725 20.3026 49.725 20.5328L49.725 21.9672C49.725 22.1974 49.6778 22.4365 49.5833 22.6844L56.8792 26.8281L49.0875 36.9219L40.7292 34.2656C40.2097 34.549 39.6667 34.8146 39.1 35.0625C38.5333 35.3104 37.9667 35.5229 37.4 35.7L36.2667 42.5L20.6833 42.5ZM25.6417 38.25L31.2375 38.25L32.2292 32.6188C33.6931 32.3354 35.0507 31.9193 36.3021 31.3703C37.5535 30.8214 38.6986 30.1573 39.7375 29.3781L46.75 31.5563L49.5125 27.9438L43.4208 24.4906C43.6569 23.9948 43.8222 23.4724 43.9167 22.9234C44.0111 22.3745 44.0583 21.8167 44.0583 21.25C44.0583 20.6833 44.0111 20.1255 43.9167 19.5766C43.8222 19.0276 43.6569 18.5052 43.4208 18.0094L49.5125 14.5563L46.75 10.9438L39.7375 13.175C38.6986 12.3604 37.5535 11.6786 36.3021 11.1297C35.0507 10.5807 33.6931 10.1646 32.2292 9.88125L31.3083 4.25L25.7125 4.25L24.7208 9.88125C23.2569 10.1646 21.8993 10.5807 20.6479 11.1297C19.3965 11.6786 18.2514 12.3427 17.2125 13.1219L10.2 10.9438L7.4375 14.5563L13.5292 17.9563C13.2931 18.4875 13.1278 19.0188 13.0333 19.55C12.9389 20.0813 12.8917 20.6479 12.8917 21.25C12.8917 21.8167 12.9389 22.3656 13.0333 22.8969C13.1278 23.4281 13.2931 23.9594 13.5292 24.4906L7.4375 27.9438L10.2 31.5563L17.2125 29.325C18.2514 30.1396 19.3965 30.8214 20.6479 31.3703C21.8993 31.9193 23.2569 32.3354 24.7208 32.6188L25.6417 38.25ZM28.6167 28.6875C31.3556 28.6875 33.6931 27.9615 35.6292 26.5094C37.5653 25.0573 38.5333 23.3042 38.5333 21.25C38.5333 19.1958 37.5653 17.4427 35.6292 15.9906C33.6931 14.5385 31.3556 13.8125 28.6167 13.8125C25.8306 13.8125 23.4813 14.5385 21.5688 15.9906C19.6562 17.4427 18.7 19.1958 18.7 21.25C18.7 23.3042 19.6562 25.0573 21.5688 26.5094C23.4813 27.9615 25.8306 28.6875 28.6167 28.6875Z",
            fill: "rgba(232,234,237,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="6.2%"
        bottom="91.8%"
        left="6.02%"
        right="90.69%"
        {...getOverrideProps(overrides, "Vector40892265")}
      ></Icon>
    </View>
  );
}
