/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { useNavigate } from "react-router-dom";
import { Button, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Home1(props) {
  const { overrides, ...rest } = props;
  const navigate = useNavigate(); // Inicializa o hook de navegação
  return (
    <View
      width="1519px"
      height="2473px"
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
        width="1533px"
        height="224px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-3px"
        left="-14px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(22,70,89,1)"
        {...getOverrideProps(overrides, "Rectangle 26")}
      ></View>
      <View
        width="1519px"
        height="220px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,0.45)"
        {...getOverrideProps(overrides, "Rectangle 19")}
      ></View>
      <View
        width="1521px"
        height="637px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="220px"
        left="-1px"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-90deg, rgba(25,86,110,1), rgba(242,206,174,1))"
        {...getOverrideProps(overrides, "foto 1")}
      ></View>
      <Image
        width="554px"
        height="132px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="43px"
        left="calc(50% - 277px - -0.5px)"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "logo_branca_conecta 1")}
      ></Image>
      <View
        padding="0px 0px 0px 0px"
        width="451.19px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="139px"
        left="1030.53px"
        {...getOverrideProps(overrides, "Group 438")}
      >
        <Button
          width="207.83px"
          height="40px"
          position="absolute"
          border="1px SOLID rgba(242,206,174,1)"
          borderRadius="10px"
          top="0px"
          left="243.36px"
          backgroundColor="rgba(0,0,0,0.1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Cadastrar-se"
          {...getOverrideProps(overrides, "Button39883872")}
        ></Button>
        <Button
          width="207.83px"
          height="40px"
          position="absolute"
          borderRadius="10px"
          top="0px"
          left="0px"
          backgroundColor="rgba(211,152,74,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Entrar"
          onClick={() => navigate("/TelaDeLogin")} // Navega para TelaDeLogin
          {...getOverrideProps(overrides, "Button39883876")}
        ></Button>
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
        top="400px"
        left="89px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Conecte-se com oportunidades que valorizam suas habilidades"
        {...getOverrideProps(
          overrides,
          "Conecte-se com oportunidades que valorizam suas habilidades"
        )}
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
        width="125.84px"
        height="244.19px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="216.83px"
        left="1367.4px"
        transformOrigin="top left"
        transform="rotate(-6.77deg)"
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
        top="1053px"
        left="971px"
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
            top="99.22%"
            bottom="0.29%"
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
            top="75.48%"
            bottom="1.25%"
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
            top="98.66%"
            bottom="0.82%"
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
            top="98.75%"
            bottom="0.73%"
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
            top="4.18%"
            bottom="23.91%"
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
            top="5.98%"
            bottom="27.67%"
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
            top="23.91%"
            bottom="45.77%"
            left="2.43%"
            right="27.67%"
            padding="0px 0px 0px 0px"
            objectFit="cover"
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
        top="931px"
        left="70px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Sobre nós"
        {...getOverrideProps(overrides, "Sobre n\u00F3s")}
      ></Text>
      <Text
        fontFamily="Montserrat"
        fontSize="26px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="31.694000244140625px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="825px"
        height="391px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1052px"
        left="60px"
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
        top="1482px"
        left="70px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Categorias de vagas:"
        {...getOverrideProps(overrides, "Categorias de vagas:")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="1348px"
        height="122.39px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="640px"
        left="36px"
        {...getOverrideProps(overrides, "Group 434")}
      >
        <View
          width="1348px"
          height="120px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="2px"
          left="0px"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 184")}
        ></View>
        <Flex
          gap="10px"
          direction="row"
          width="292.51px"
          height="76px"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="29px"
          left="798.42px"
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
          width="175.5px"
          height="73px"
          position="absolute"
          borderRadius="10px"
          top="26px"
          left="1150.25px"
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
          top="2px"
          left="372.22px"
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
          top="0px"
          left="723.44px"
          transformOrigin="top left"
          transform="rotate(90deg)"
          {...getOverrideProps(overrides, "Line 48")}
        ></Icon>
        <Text
          fontFamily="Montserrat"
          fontSize="24px"
          fontWeight="300"
          color="rgba(0,0,0,0.66)"
          lineHeight="29.256000518798828px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="49px"
          left="86px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Cargo | Habilidade"
          {...getOverrideProps(overrides, "Cargo | Habilidade")}
        ></Text>
        <Text
          fontFamily="Montserrat"
          fontSize="24px"
          fontWeight="300"
          color="rgba(0,0,0,0.66)"
          lineHeight="29.256000518798828px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="196.34px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="49px"
          left="465px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Cidade | Estado"
          {...getOverrideProps(overrides, "Cidade | Estado")}
        ></Text>
        <View
          width="41.2px"
          height="50px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="37px"
          left="28.84px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "SearchIcon 1")}
        >
          <Icon
            width="30.9px"
            height="37.5px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 30.89853286743164,
              height: 37.5,
            }}
            paths={[
              {
                d: "M28.4953 37.5L17.6808 24.375C16.8225 25.2083 15.8355 25.8681 14.7197 26.3542C13.6039 26.8403 12.4166 27.0833 11.1578 27.0833C8.03934 27.0833 5.40009 25.7726 3.24005 23.151C1.08002 20.5295 0 17.3264 0 13.5417C0 9.75694 1.08002 6.55382 3.24005 3.93229C5.40009 1.31076 8.03934 0 11.1578 0C14.2763 0 16.9155 1.31076 19.0756 3.93229C21.2356 6.55382 22.3156 9.75694 22.3156 13.5417C22.3156 15.0694 22.1153 16.5104 21.7148 17.8646C21.3143 19.2188 20.7707 20.4167 20.084 21.4583L30.8985 34.5833L28.4953 37.5ZM11.1578 22.9167C13.3035 22.9167 15.1274 22.0052 16.6294 20.1823C18.1314 18.3594 18.8824 16.1458 18.8824 13.5417C18.8824 10.9375 18.1314 8.72396 16.6294 6.90104C15.1274 5.07812 13.3035 4.16667 11.1578 4.16667C9.01207 4.16667 7.1882 5.07812 5.68619 6.90104C4.18418 8.72396 3.43317 10.9375 3.43317 13.5417C3.43317 16.1458 4.18418 18.3594 5.68619 20.1823C7.1882 22.0052 9.01207 22.9167 11.1578 22.9167Z",
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
        top="1778px"
        left="72px"
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
        width="1522px"
        height="44px"
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
        top="222px"
        left="655px"
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
        top="222px"
        left="440px"
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
        top="224px"
        left="870px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        backgroundColor="rgba(0,0,0,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Plus"
        {...getOverrideProps(overrides, "Button40932137")}
      ></Button>
      <View
        width="74px"
        height="86px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="1692px"
        left="1408px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ArrowRightIcon 3")}
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
          {...getOverrideProps(overrides, "Vector42151351")}
        ></Icon>
      </View>
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
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1961px"
        left="70px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Suas ultimas vagas"
        {...getOverrideProps(overrides, "Suas ultimas vagas")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="670px"
        height="282.92px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="2092px"
        left="70px"
        {...getOverrideProps(overrides, "Group 401")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="670px"
          height="282.92px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Group 399")}
        >
          <Icon
            width="670px"
            height="282.92px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 670,
              height: 282.9156188964844,
            }}
            paths={[
              {
                d: "M4.41321 14.7532C4.54795 6.56623 11.2231 0 19.4112 0L650.15 0C658.328 0 664.999 6.55148 665.147 14.7286L669.724 267.644C669.875 276.033 663.117 282.916 654.726 282.916L321.5 282.916L15.2489 282.916C6.86808 282.916 0.113014 276.048 0.250921 267.669L4.41321 14.7532Z",
                fill: "rgba(207,209,208,1)",
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
            {...getOverrideProps(overrides, "Rectangle 152")}
          ></Icon>
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
            width="122.47px"
            height="15.17px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="84.73px"
            left="248.74px"
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
            width="144.56px"
            height="18.21px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="126.93px"
            left="18.83px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="São Paulo - SP"
            {...getOverrideProps(overrides, "S\u00E3o Paulo - SP")}
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
            width="116.45px"
            height="18.21px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="158.04px"
            left="18.83px"
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
            width="75.29px"
            height="18.21px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="187.62px"
            left="59.99px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Híbrido"
            {...getOverrideProps(overrides, "H\u00EDbrido")}
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
            width="338.3px"
            height="28.07px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="38.92px"
            left="20.34px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="ANALISTA DE DADOS"
            {...getOverrideProps(overrides, "ANALISTA DE DADOS")}
          ></Text>
          <Image
            width="140.54px"
            height="91.04px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="39.37px"
            left="498.42px"
            borderRadius="20px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
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
            width="32.12px"
            height="18.21px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="85.2px"
            left="18.83px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="4,5"
            {...getOverrideProps(overrides, "4,5")}
          ></Text>
          <View
            width="33px"
            height="33px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="79.92px"
            left="51px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(
              overrides,
              "star_24dp_000000_FILL0_wght400_GRAD0_opsz24 1"
            )}
          >
            <Icon
              width="27.5px"
              height="26.13px"
              viewBox={{ minX: 0, minY: 0, width: 27.5, height: 26.125 }}
              paths={[
                {
                  d: "M9.41875 20.3844L13.75 17.7719L18.0813 20.4188L16.9469 15.4688L20.7625 12.1687L15.7438 11.7219L13.75 7.04688L11.7563 11.6875L6.7375 12.1344L10.5531 15.4688L9.41875 20.3844ZM5.25938 26.125L7.49375 16.4656L0 9.96875L9.9 9.10938L13.75 0L17.6 9.10938L27.5 9.96875L20.0063 16.4656L22.2406 26.125L13.75 21.0031L5.25938 26.125Z",
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
              {...getOverrideProps(overrides, "Vector42091947")}
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
            width="165.64px"
            height="18.21px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="84.59px"
            left="92.47px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="REKTR TEC"
            {...getOverrideProps(overrides, "REKTR TEC")}
          ></Text>
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="84.92px"
            left="207px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(
              overrides,
              "new_releases_24dp_4B77D1_FILL0_wght400_GRAD0_opsz24 1"
            )}
          >
            <Icon
              width="22px"
              height="21px"
              viewBox={{ minX: 0, minY: 0, width: 22, height: 21 }}
              paths={[
                {
                  d: "M7.6 21L5.7 17.8L2.1 17L2.45 13.3L0 10.5L2.45 7.7L2.1 4L5.7 3.2L7.6 0L11 1.45L14.4 0L16.3 3.2L19.9 4L19.55 7.7L22 10.5L19.55 13.3L19.9 17L16.3 17.8L14.4 21L11 19.55L7.6 21ZM8.45 18.45L11 17.35L13.6 18.45L15 16.05L17.75 15.4L17.5 12.6L19.35 10.5L17.5 8.35L17.75 5.55L15 4.95L13.55 2.55L11 3.65L8.4 2.55L7 4.95L4.25 5.55L4.5 8.35L2.65 10.5L4.5 12.6L4.25 15.45L7 16.05L8.45 18.45ZM9.95 14.05L15.6 8.4L14.2 6.95L9.95 11.2L7.8 9.1L6.4 10.5L9.95 14.05Z",
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
              {...getOverrideProps(overrides, "Vector42091950")}
            ></Icon>
          </View>
          <Icon
            width="18px"
            height="18px"
            viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
            paths={[
              {
                d: "M0 18L0 4L4 4L4 0L14 0L14 8L18 8L18 18L10 18L10 14L8 14L8 18L0 18ZM2 16L4 16L4 14L2 14L2 16ZM2 12L4 12L4 10L2 10L2 12ZM2 8L4 8L4 6L2 6L2 8ZM6 12L8 12L8 10L6 10L6 12ZM6 8L8 8L8 6L6 6L6 8ZM6 4L8 4L8 2L6 2L6 4ZM10 12L12 12L12 10L10 10L10 12ZM10 8L12 8L12 6L10 6L10 8ZM10 4L12 4L12 2L10 2L10 4ZM14 16L16 16L16 14L14 14L14 16ZM14 12L16 12L16 10L14 10L14 12Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="188.92px"
            left="26px"
            {...getOverrideProps(overrides, "Vector42091951")}
          ></Icon>
        </View>
      </View>
      <View
        width="444px"
        height="283px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="2077px"
        left="964px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "undraw_undraw_undraw_undraw_undraw_undraw_undraw_undraw_users_per_minute_1e4q_t22j_-1-_0ngf_-1-_27dv_30ul_legv_-1-_il1l_-2-_0jip 1"
        )}
      >
        <Icon
          width="309.85px"
          height="214.43px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 309.8487243652344,
            height: 214.42933654785156,
          }}
          paths={[
            {
              d: "M301.808 214.429L8.04097 214.429C3.60503 214.429 0 210.167 0 204.923L0 9.5063C0 4.26198 3.60503 0 8.04097 0L301.808 0C306.244 0 309.849 4.26198 309.849 9.5063L309.849 204.923C309.849 210.167 306.244 214.429 301.808 214.429ZM8.04097 6.18799C6.49035 6.18799 5.23415 7.67311 5.23415 9.5063L5.23415 204.923C5.23415 206.756 6.49035 208.241 8.04097 208.241L301.808 208.241C303.358 208.241 304.615 206.756 304.615 204.923L304.615 9.5063C304.615 7.67311 303.358 6.18799 301.808 6.18799L8.04097 6.18799Z",
              fill: "rgba(213,213,214,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="23.82%"
          bottom="0.41%"
          left="21.61%"
          right="8.6%"
          {...getOverrideProps(overrides, "Vector42091953")}
        ></Icon>
        <Icon
          width="14.17px"
          height="42.6px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.171467781066895,
            height: 42.60430145263672,
          }}
          paths={[
            {
              d: "M14.1715 0L0 0L0 42.6043L14.1715 42.6043L14.1715 0Z",
              fill: "rgba(234,191,63,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="57.63%"
          bottom="27.32%"
          left="36.81%"
          right="60%"
          {...getOverrideProps(overrides, "Vector42091954")}
        ></Icon>
        <Icon
          width="14.17px"
          height="46.7px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.171467781066895,
            height: 46.69611740112305,
          }}
          paths={[
            {
              d: "M14.1715 0L0 0L0 46.6961L14.1715 46.6961L14.1715 0Z",
              fill: "rgba(234,191,63,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="56.18%"
          bottom="27.32%"
          left="41.98%"
          right="54.83%"
          {...getOverrideProps(overrides, "Vector42091955")}
        ></Icon>
        <Icon
          width="14.17px"
          height="30.72px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.171467781066895,
            height: 30.71563148498535,
          }}
          paths={[
            {
              d: "M14.1715 0L0 0L0 30.7156L14.1715 30.7156L14.1715 0Z",
              fill: "rgba(234,191,63,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="61.83%"
          bottom="27.32%"
          left="47.15%"
          right="49.66%"
          {...getOverrideProps(overrides, "Vector42091956")}
        ></Icon>
        <Icon
          width="14.17px"
          height="40.2px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.171467781066895,
            height: 40.1987190246582,
          }}
          paths={[
            {
              d: "M14.1715 0L0 0L0 40.1987L14.1715 40.1987L14.1715 0Z",
              fill: "rgba(234,191,63,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="58.48%"
          bottom="27.32%"
          left="52.32%"
          right="44.48%"
          {...getOverrideProps(overrides, "Vector42091957")}
        ></Icon>
        <Icon
          width="14.17px"
          height="32.07px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.171467781066895,
            height: 32.06926345825195,
          }}
          paths={[
            {
              d: "M14.1715 0L0 0L0 32.0693L14.1715 32.0693L14.1715 0Z",
              fill: "rgba(234,191,63,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="61.35%"
          bottom="27.32%"
          left="57.5%"
          right="39.31%"
          {...getOverrideProps(overrides, "Vector42091958")}
        ></Icon>
        <Icon
          width="14.17px"
          height="56.01px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.171467781066895,
            height: 56.00904083251953,
          }}
          paths={[
            {
              d: "M14.1715 0L0 0L0 56.009L14.1715 56.009L14.1715 0Z",
              fill: "rgba(234,191,63,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="52.89%"
          bottom="27.32%"
          left="62.67%"
          right="34.14%"
          {...getOverrideProps(overrides, "Vector42091959")}
        ></Icon>
        <Icon
          width="14.17px"
          height="46.7px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.171467781066895,
            height: 46.69611740112305,
          }}
          paths={[
            {
              d: "M14.1715 0L0 0L0 46.6961L14.1715 46.6961L14.1715 0Z",
              fill: "rgba(234,191,63,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="56.18%"
          bottom="27.32%"
          left="67.84%"
          right="28.97%"
          {...getOverrideProps(overrides, "Vector42091960")}
        ></Icon>
        <Icon
          width="14.17px"
          height="54.81px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.171467781066895,
            height: 54.81011199951172,
          }}
          paths={[
            {
              d: "M14.1715 0L0 0L0 54.8101L14.1715 54.8101L14.1715 0Z",
              fill: "rgba(234,191,63,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="53.32%"
          bottom="27.32%"
          left="73.01%"
          right="23.8%"
          {...getOverrideProps(overrides, "Vector42091961")}
        ></Icon>
        <Icon
          width="108.01px"
          height="4.04px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 108.00672149658203,
            height: 4.037664413452148,
          }}
          paths={[
            {
              d: "M1.70764 0L106.299 0C107.241 0 108.007 0.904994 108.007 2.01883C108.007 3.13267 107.241 4.03766 106.299 4.03766L1.70764 4.03766C0.765495 4.03766 0 3.13267 0 2.01883C0 0.904994 0.765495 0 1.70764 0Z",
              fill: "rgba(213,213,214,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="33.39%"
          bottom="65.18%"
          left="25.67%"
          right="50%"
          {...getOverrideProps(overrides, "Vector42091962")}
        ></Icon>
        <Icon
          width="444px"
          height="2.32px"
          viewBox={{ minX: 0, minY: 0, width: 444, height: 2.3204963207244873 }}
          paths={[
            {
              d: "M444 1.16025C444 1.80225 443.562 2.3205 443.019 2.3205L0.981403 2.3205C0.43836 2.3205 0 1.80225 0 1.16025C0 0.518244 0.43836 0 0.981403 0L443.019 0C443.562 0 444 0.518244 444 1.16025Z",
              fill: "rgba(46,46,65,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="99.18%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Vector42091963")}
        ></Icon>
        <Icon
          width="12.86px"
          height="21.88px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 12.856390953063965,
            height: 21.882282257080078,
          }}
          paths={[
            {
              d: "M0 16.8855L12.8564 21.8823L12.8564 0L1.19077 0L0 16.8855Z",
              fill: "rgba(243,163,166,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="10.62%"
          bottom="81.65%"
          left="19.7%"
          right="77.4%"
          {...getOverrideProps(overrides, "Vector42091964")}
        ></Icon>
        <Icon
          width="25.62px"
          height="30.29px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 25.621173858642578,
            height: 30.290212631225586,
          }}
          paths={[
            {
              d: "M12.8106 30.2902C19.8857 30.2902 25.6212 23.5095 25.6212 15.1451C25.6212 6.78069 19.8857 0 12.8106 0C5.7355 0 0 6.78069 0 15.1451C0 23.5095 5.7355 30.2902 12.8106 30.2902Z",
              fill: "rgba(243,163,166,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="2.06%"
          bottom="87.24%"
          left="19.35%"
          right="74.88%"
          {...getOverrideProps(overrides, "Vector42091965")}
        ></Icon>
        <Icon
          width="27.22px"
          height="33.46px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 27.219919204711914,
            height: 33.45587921142578,
          }}
          paths={[
            {
              d: "M13.165 22.1473L14.9315 24.6844L18.1243 18.0787C18.1243 18.0787 22.2004 18.3262 22.2004 14.7527C22.2004 11.1791 25.9429 11.0786 25.9429 11.0786C25.9429 11.0786 31.2359 0.149023 20.2703 3.02644C20.2703 3.02644 12.6612 -3.13835 8.87952 2.12918C8.87952 2.12918 -2.72067 9.03652 0.596471 21.0644L6.11195 33.4559L7.36161 30.6481C7.36161 30.6481 6.60266 18.8677 13.165 22.1473Z",
              fill: "rgba(47,46,67,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="88.18%"
          left="18.54%"
          right="75.33%"
          {...getOverrideProps(overrides, "Vector42091966")}
        ></Icon>
        <Icon
          width="10.35px"
          height="17.36px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 10.350529670715332,
            height: 17.357290267944336,
          }}
          paths={[
            {
              d: "M10.3505 0L0 0L0 17.3573L10.3505 17.3573L10.3505 0Z",
              fill: "rgba(243,163,166,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="89.83%"
          bottom="4.03%"
          left="18.91%"
          right="78.76%"
          {...getOverrideProps(overrides, "Vector42091967")}
        ></Icon>
        <Icon
          width="32.53px"
          height="19.81px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 32.528202056884766,
            height: 19.809316635131836,
          }}
          paths={[
            {
              d: "M11.2104 19.2447C9.43732 19.438 0.585059 20.258 0.140156 17.8601C-0.265491 15.6556 0.329898 13.3506 0.414953 13.0412C1.2655 3.03213 1.57955 2.91611 1.76929 2.84649C2.07025 2.74594 2.95351 3.23325 4.37982 4.32388L4.47142 4.39349L4.49105 4.51725C4.51722 4.67195 5.15186 8.34606 8.14841 7.78914C10.2028 7.40239 10.8702 6.86868 11.0861 6.60569C10.9094 6.51287 10.6935 6.35045 10.543 6.06425C10.3206 5.6543 10.2813 5.1283 10.4253 4.50177C10.8113 2.83875 11.9693 0.379027 12.0151 0.278472L12.146 0L23.9098 9.38254L31.1721 11.8345C31.7217 12.0202 32.1601 12.4843 32.3825 13.1031C32.69 13.9694 32.5003 14.9749 31.9115 15.6015C30.5898 17.0015 27.9728 19.4071 25.2183 19.701C24.4855 19.7784 23.5172 19.8093 22.4311 19.8093C17.8839 19.8093 11.2562 19.2524 11.2038 19.2447L11.2104 19.2447Z",
              fill: "rgba(47,46,67,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="92.68%"
          bottom="0.32%"
          left="18.45%"
          right="74.22%"
          {...getOverrideProps(overrides, "Vector42091968")}
        ></Icon>
        <Icon
          width="16.32px"
          height="11.16px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 17.33374155597994,
            height: 21.174027041880436,
          }}
          paths={[
            {
              d: "M16.3232 0L0 0L0 11.1554L16.3232 11.1554L16.3232 0Z",
              fill: "rgba(243,163,166,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="85.35%"
          bottom="10.71%"
          left="11.86%"
          right="84.47%"
          transformOrigin="top left"
          transform="rotate(-55.02deg)"
          {...getOverrideProps(overrides, "Vector42091969")}
        ></Icon>
        <Icon
          width="27.58px"
          height="32.58px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 27.578449249267578,
            height: 32.575862884521484,
          }}
          paths={[
            {
              d: "M7.87086 19.7629C6.40529 18.5717 -0.86363 12.5384 0.0850598 10.3571C0.96178 8.35376 2.66288 7.03108 2.89841 6.85318C8.9504 -0.216604 9.25791 -0.0696282 9.4411 0.0231917C9.72898 0.170156 10.1412 1.21439 10.658 3.12493L10.6908 3.24095L10.6384 3.34923C10.573 3.48846 9.08126 6.79904 11.6918 8.62449C13.4845 9.87756 14.2892 9.96264 14.5902 9.92397C14.5051 9.72286 14.4266 9.42892 14.4593 9.09632C14.5051 8.61675 14.7603 8.17587 15.2183 7.80459C16.4156 6.81451 18.627 5.79349 18.7252 5.74708L18.9738 5.63106L22.9779 21.7276L27.2503 29.0913C27.5709 29.6482 27.6625 30.3366 27.4989 30.9863C27.2699 31.8836 26.583 32.5179 25.7847 32.5566C24.0117 32.6416 20.7011 32.5179 18.4177 30.6692C17.8157 30.1819 17.0502 29.478 16.2128 28.6581C12.7124 25.2315 7.90357 19.8093 7.86432 19.7629L7.87086 19.7629Z",
              fill: "rgba(47,46,67,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="83.53%"
          bottom="4.96%"
          left="10.48%"
          right="83.31%"
          {...getOverrideProps(overrides, "Vector42091970")}
        ></Icon>
        <Icon
          width="35.51px"
          height="138.73px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 35.50717544555664,
            height: 138.7347412109375,
          }}
          paths={[
            {
              d: "M35.5006 0L0 0L7.89049 138.735L19.7262 138.735L35.5072 0L35.5006 0Z",
              fill: "rgba(47,46,67,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="42.52%"
          bottom="8.45%"
          left="17.1%"
          right="74.91%"
          {...getOverrideProps(overrides, "Vector42091971")}
        ></Icon>
        <Icon
          width="54.13px"
          height="121.77px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 54.12767028808594,
            height: 121.77191925048828,
          }}
          paths={[
            {
              d: "M46.898 7.64217L54.1277 0L50.5096 76.3056L10.0823 121.772L0 111.925L23.5602 75.7874L46.898 7.64217Z",
              fill: "rgba(47,46,67,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="42.52%"
          bottom="14.45%"
          left="12.9%"
          right="74.91%"
          {...getOverrideProps(overrides, "Vector42091972")}
        ></Icon>
        <Icon
          width="38.73px"
          height="84.98px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 38.734920501708984,
            height: 84.98432159423828,
          }}
          paths={[
            {
              d: "M31.5052 3.36472L13.9708 0L8.52732 11.2544C1.60516 25.5641 -1.21474 42.1325 0.479815 58.492L3.23429 84.9843L38.7349 84.9843L31.5052 3.37246L31.5052 3.36472Z",
              fill: "rgba(234,191,63,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="12.5%"
          bottom="57.47%"
          left="16.37%"
          right="74.91%"
          {...getOverrideProps(overrides, "Vector42091973")}
        ></Icon>
        <Icon
          width="11.58px"
          height="31.57px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 11.58037281036377,
            height: 31.565534591674805,
          }}
          paths={[
            {
              d: "M11.3843 22.7796C12.1105 27.057 10.7562 30.9632 8.3681 31.5046C5.97348 32.0383 3.448 29.0062 2.72176 24.721C2.41425 23.0116 2.4666 21.248 2.87878 19.5695L0 1.38457L7.5241 0L9.55887 18.0767C10.4879 19.4612 11.116 21.0701 11.3843 22.7873L11.3843 22.7796Z",
              fill: "rgba(243,163,166,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="43.3%"
          bottom="45.54%"
          left="17.69%"
          right="79.7%"
          {...getOverrideProps(
            overrides,
            "uuid-b665f492-9b4b-4e5e-8d83-e9db200bf715-44-44-44-72-164-43-39-119"
          )}
        ></Icon>
        <Icon
          width="25.51px"
          height="93.14px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 25.50643539428711,
            height: 93.14472198486328,
          }}
          paths={[
            {
              d: "M11.0506 93.1447L0 52.7836L0 52.7217L4.17424 11.1616C4.81542 4.79569 9.38222 0 14.7996 0C18.1167 0 21.1918 1.77131 23.2331 4.8653C25.2744 7.9593 25.9876 11.9119 25.1828 15.7252L17.8092 50.5868L19.5692 90.1513L11.0441 93.1447L11.0506 93.1447Z",
              fill: "rgba(234,191,63,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="16.7%"
          bottom="50.39%"
          left="15.71%"
          right="78.55%"
          {...getOverrideProps(overrides, "Vector42091975")}
        ></Icon>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="1210.1px"
        height="258.05px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1628px"
        left="155px"
        {...getOverrideProps(overrides, "Group 436")}
      >
        <View
          width="330.08px"
          height="257px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="1.05px"
          left="0px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          borderRadius="27px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(38,25,13,1)"
          {...getOverrideProps(overrides, "Rectangle 9439883922")}
        ></View>
        <Icon
          width="330.08px"
          height="257px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 330.0961682075722,
            height: 257.0283483179883,
          }}
          paths={[
            {
              d: "M0 27C0 12.0883 12.0883 0 27 0L303.08 0C317.992 0 330.08 12.0883 330.08 27L330.08 230C330.08 244.912 317.992 257 303.08 257L27 257C12.0883 257 0 244.912 0 230L0 27Z",
              fill: "rgba(38,25,13,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0.03px"
          left="440.01px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          {...getOverrideProps(overrides, "image")}
        ></Icon>
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
          top="169.01px"
          left="calc(50% - 58.5px - -9.46px)"
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
          top="179.02px"
          left="63.78px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Tecnologia"
          {...getOverrideProps(overrides, "Tecnologia")}
        ></Text>
        <Icon
          width="51.52px"
          height="47.25px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 51.51937484741211,
            height: 47.25,
          }}
          paths={[
            {
              d: "M12.8798 47.25L12.8798 35.4375L0 35.4375L0 11.8125L12.8798 11.8125L12.8798 0L38.6395 0L38.6395 11.8125L51.5194 11.8125L51.5194 35.4375L38.6395 35.4375L38.6395 47.25L12.8798 47.25ZM5.15194 21.2625L18.0318 21.2625C18.4611 21.2625 18.869 21.3609 19.2554 21.5578C19.6418 21.7547 19.9423 22.0106 20.157 22.3256L22.4109 25.3969L25.8885 15.8287C26.0602 15.3562 26.3715 14.9625 26.8223 14.6475C27.2731 14.3325 27.7775 14.175 28.3357 14.175C28.765 14.175 29.1728 14.2734 29.5592 14.4703C29.9456 14.6672 30.2462 14.9231 30.4608 15.2381L34.84 21.2625L46.3674 21.2625L46.3674 16.5375L33.4876 16.5375L33.4876 4.725L18.0318 4.725L18.0318 16.5375L5.15194 16.5375L5.15194 21.2625ZM18.0318 42.525L33.4876 42.525L33.4876 30.7125L46.3674 30.7125L46.3674 25.9875L33.4876 25.9875C33.0583 25.9875 32.6504 25.8891 32.264 25.6922C31.8776 25.4953 31.5556 25.2394 31.298 24.9244L29.1084 21.8531L25.6309 31.4212C25.4592 31.8937 25.1372 32.2875 24.6649 32.6025C24.1926 32.9175 23.6774 33.075 23.1193 33.075C22.69 33.075 22.2821 32.9766 21.8957 32.7797C21.5093 32.5828 21.2088 32.3269 20.9941 32.0119L16.615 25.9875L5.15194 25.9875L5.15194 30.7125L18.0318 30.7125L18.0318 42.525Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="71.99px"
          left="581.2px"
          {...getOverrideProps(overrides, "Vector39883930")}
        ></Icon>
        <View
          width="330.08px"
          height="257px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0.98px"
          left="880px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          borderRadius="27px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(38,25,13,1)"
          {...getOverrideProps(overrides, "Rectangle 9439883924")}
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
          top="172.01px"
          left="987.01px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Design"
          {...getOverrideProps(overrides, "Design")}
        ></Text>
        <Icon
          width="51.52px"
          height="47.25px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 51.51937484741211,
            height: 47.25,
          }}
          paths={[
            {
              d: "M28.6219 47.25L28.6219 42L34.3463 42L34.3463 47.25L28.6219 47.25ZM22.8975 42L22.8975 28.875L28.6219 28.875L28.6219 42L22.8975 42ZM45.795 34.125L45.795 23.625L51.5194 23.625L51.5194 34.125L45.795 34.125ZM40.0706 23.625L40.0706 18.375L45.795 18.375L45.795 23.625L40.0706 23.625ZM5.72437 28.875L5.72437 23.625L11.4487 23.625L11.4487 28.875L5.72437 28.875ZM0 23.625L0 18.375L5.72437 18.375L5.72437 23.625L0 23.625ZM25.7597 5.25L25.7597 0L31.4841 0L31.4841 5.25L25.7597 5.25ZM4.29328 11.8125L12.8798 11.8125L12.8798 3.9375L4.29328 3.9375L4.29328 11.8125ZM0 15.75L0 0L17.1731 0L17.1731 15.75L0 15.75ZM4.29328 43.3125L12.8798 43.3125L12.8798 35.4375L4.29328 35.4375L4.29328 43.3125ZM0 47.25L0 31.5L17.1731 31.5L17.1731 47.25L0 47.25ZM38.6395 11.8125L47.2261 11.8125L47.2261 3.9375L38.6395 3.9375L38.6395 11.8125ZM34.3463 15.75L34.3463 0L51.5194 0L51.5194 15.75L34.3463 15.75ZM40.0706 47.25L40.0706 39.375L34.3463 39.375L34.3463 34.125L45.795 34.125L45.795 42L51.5194 42L51.5194 47.25L40.0706 47.25ZM28.6219 28.875L28.6219 23.625L40.0706 23.625L40.0706 28.875L28.6219 28.875ZM17.1731 28.875L17.1731 23.625L11.4487 23.625L11.4487 18.375L28.6219 18.375L28.6219 23.625L22.8975 23.625L22.8975 28.875L17.1731 28.875ZM20.0353 15.75L20.0353 5.25L25.7597 5.25L25.7597 10.5L31.4841 10.5L31.4841 15.75L20.0353 15.75ZM6.43992 9.84375L6.43992 5.90625L10.7332 5.90625L10.7332 9.84375L6.43992 9.84375ZM6.43992 41.3438L6.43992 37.4062L10.7332 37.4062L10.7332 41.3438L6.43992 41.3438ZM40.7862 9.84375L40.7862 5.90625L45.0794 5.90625L45.0794 9.84375L40.7862 9.84375Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="73px"
          left="139.57px"
          {...getOverrideProps(overrides, "Vector39883932")}
        ></Icon>
        <Icon
          width="45.29px"
          height="43.54px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 45.285648345947266,
            height: 43.54194259643555,
          }}
          paths={[
            {
              d: "M2.38346 43.5419L2.38346 33.2612L33.7855 1.4514C34.2622 0.967599 34.7984 0.604749 35.3943 0.36285C35.9902 0.12095 36.586 0 37.1819 0C37.8175 0 38.4233 0.12095 38.9993 0.36285C39.5753 0.604749 40.0818 0.967599 40.5187 1.4514L43.8556 4.83799C44.3323 5.28148 44.6898 5.79551 44.9281 6.3801C45.1665 6.9647 45.2856 7.57952 45.2856 8.22459C45.2856 8.82934 45.1665 9.43409 44.9281 10.0388C44.6898 10.6436 44.3323 11.1879 43.8556 11.6717L12.5131 43.5419L2.38346 43.5419ZM7.15037 38.704L10.4872 38.704L33.9047 14.9978L32.2362 13.244L30.5082 11.5507L7.15037 35.3174L7.15037 38.704ZM32.2362 13.244L30.5082 11.5507L33.9047 14.9978L32.2362 13.244ZM26.218 43.5419C29.1576 43.5419 31.8787 42.7961 34.3813 41.3044C36.884 39.8127 38.1353 37.7364 38.1353 35.0755C38.1353 33.6241 37.7579 32.3742 37.0031 31.326C36.2484 30.2778 35.2354 29.3707 33.9642 28.6046L30.4486 32.1727C31.3623 32.5758 32.0773 33.0193 32.5938 33.5031C33.1102 33.9869 33.3684 34.511 33.3684 35.0755C33.3684 36.0027 32.6434 36.8393 31.1935 37.5852C29.7435 38.331 28.085 38.704 26.218 38.704C25.5427 38.704 24.9766 38.9358 24.5198 39.3994C24.063 39.8631 23.8346 40.4376 23.8346 41.1229C23.8346 41.8083 24.063 42.3828 24.5198 42.8465C24.9766 43.3101 25.5427 43.5419 26.218 43.5419ZM3.75394 25.0366L7.32913 21.4081C6.53464 21.0856 5.90898 20.753 5.45215 20.4103C4.99533 20.0676 4.76691 19.7148 4.76691 19.352C4.76691 18.8682 5.12443 18.3844 5.83947 17.9006C6.5545 17.4168 8.06402 16.6709 10.368 15.663C13.8638 14.131 16.1876 12.7401 17.3396 11.4902C18.4916 10.2404 19.0676 8.82934 19.0676 7.25699C19.0676 5.03958 18.1937 3.27573 16.4458 1.96544C14.698 0.655145 12.394 0 9.53382 0C7.74623 0 6.14733 0.322533 4.73712 0.967599C3.32691 1.61266 2.24442 2.39884 1.48966 3.32612C1.05269 3.85024 0.873934 4.43483 0.953382 5.07989C1.03283 5.72496 1.33076 6.24908 1.84718 6.65224C2.36359 7.09572 2.93959 7.27715 3.57518 7.19652C4.21077 7.11588 4.74705 6.85382 5.18402 6.41034C5.74015 5.84591 6.35588 5.44274 7.03119 5.20084C7.70651 4.95894 8.54071 4.83799 9.53382 4.83799C11.1625 4.83799 12.3642 5.07989 13.1388 5.56369C13.9134 6.04749 14.3007 6.61192 14.3007 7.25699C14.3007 7.82142 13.9531 8.33546 13.258 8.7991C12.5628 9.26274 10.9639 10.0792 8.46127 11.2483C5.28333 12.6594 3.07863 13.9395 1.84718 15.0885C0.615726 16.2375 0 17.6587 0 19.352C0 20.6421 0.337656 21.7407 1.01297 22.6479C1.68828 23.555 2.60194 24.3512 3.75394 25.0366Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="29.06%"
          bottom="54.06%"
          left="85.12%"
          right="11.14%"
          {...getOverrideProps(overrides, "Vector39883931")}
        ></Icon>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="389.01px"
        height="45px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="136px"
        left="36px"
        {...getOverrideProps(overrides, "Group 437")}
      >
        <Icon
          width="49.09px"
          height="45px"
          viewBox={{ minX: 0, minY: 0, width: 49.08586502075195, height: 45 }}
          paths={[
            {
              d: "M24.4202 36C25.2792 36 26.0053 35.7281 26.5984 35.1844C27.1915 34.6406 27.4881 33.975 27.4881 33.1875C27.4881 32.4 27.1915 31.7344 26.5984 31.1906C26.0053 30.6469 25.2792 30.375 24.4202 30.375C23.5612 30.375 22.8352 30.6469 22.242 31.1906C21.6489 31.7344 21.3524 32.4 21.3524 33.1875C21.3524 33.975 21.6489 34.6406 22.242 35.1844C22.8352 35.7281 23.5612 36 24.4202 36ZM22.2114 27.3375L26.7518 27.3375C26.7518 26.1 26.9052 25.125 27.212 24.4125C27.5188 23.7 28.388 22.725 29.8197 21.4875C30.8832 20.5125 31.7217 19.5844 32.3353 18.7031C32.9489 17.8219 33.2557 16.7625 33.2557 15.525C33.2557 13.425 32.4171 11.8125 30.74 10.6875C29.0629 9.5625 27.079 9 24.7884 9C22.4568 9 20.5649 9.5625 19.1128 10.6875C17.6607 11.8125 16.6483 13.1625 16.0756 14.7375L20.1252 16.2C20.3297 15.525 20.7899 14.7937 21.5057 14.0062C22.2216 13.2187 23.3158 12.825 24.7884 12.825C26.0973 12.825 27.079 13.1531 27.7335 13.8094C28.388 14.4656 28.7152 15.1875 28.7152 15.975C28.7152 16.725 28.4698 17.4281 27.9789 18.0844C27.4881 18.7406 26.8745 19.35 26.1382 19.9125C24.3384 21.375 23.234 22.4812 22.8249 23.2312C22.4159 23.9812 22.2114 25.35 22.2114 27.3375ZM24.5429 45C21.1478 45 17.9572 44.4094 14.9712 43.2281C11.9851 42.0469 9.38767 40.4438 7.17881 38.4188C4.96994 36.3937 3.22126 34.0125 1.93276 31.275C0.644252 28.5375 0 25.6125 0 22.5C0 19.3875 0.644252 16.4625 1.93276 13.725C3.22126 10.9875 4.96994 8.60625 7.17881 6.58125C9.38767 4.55625 11.9851 2.95312 14.9712 1.77187C17.9572 0.590625 21.1478 0 24.5429 0C27.938 0 31.1286 0.590625 34.1147 1.77187C37.1007 2.95312 39.6982 4.55625 41.9071 6.58125C44.1159 8.60625 45.8646 10.9875 47.1531 13.725C48.4416 16.4625 49.0859 19.3875 49.0859 22.5C49.0859 25.6125 48.4416 28.5375 47.1531 31.275C45.8646 34.0125 44.1159 36.3937 41.9071 38.4188C39.6982 40.4438 37.1007 42.0469 34.1147 43.2281C31.1286 44.4094 27.938 45 24.5429 45ZM24.5429 40.5C30.0242 40.5 34.6669 38.7562 38.471 35.2687C42.2752 31.7812 44.1773 27.525 44.1773 22.5C44.1773 17.475 42.2752 13.2188 38.471 9.73125C34.6669 6.24375 30.0242 4.5 24.5429 4.5C19.0617 4.5 14.419 6.24375 10.6148 9.73125C6.81066 13.2188 4.90859 17.475 4.90859 22.5C4.90859 27.525 6.81066 31.7812 10.6148 35.2687C14.419 38.7562 19.0617 40.5 24.5429 40.5Z",
              fill: "rgba(242,242,242,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="244.86px"
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
          width="71.02px"
          height="25px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="10px"
          left="317.99px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Ajuda"
          {...getOverrideProps(overrides, "Ajuda")}
        ></Text>
        <Icon
          width="32.7px"
          height="38.7px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 32.7006950378418,
            height: 38.703948974609375,
          }}
          paths={[
            {
              d: "M16.3503 7.74079C15.3512 7.74079 14.4958 7.36181 13.7843 6.60386C13.0727 5.84591 12.7169 4.93475 12.7169 3.87039C12.7169 2.80604 13.0727 1.89488 13.7843 1.13693C14.4958 0.378976 15.3512 0 16.3503 0C17.3495 0 18.2049 0.378976 18.9164 1.13693C19.628 1.89488 19.9838 2.80604 19.9838 3.87039C19.9838 4.93475 19.628 5.84591 18.9164 6.60386C18.2049 7.36181 17.3495 7.74079 16.3503 7.74079ZM10.9002 38.7039L10.9002 13.5464L0 13.5464L0 9.67599L32.7007 9.67599L32.7007 13.5464L21.8005 13.5464L21.8005 38.7039L18.1671 38.7039L18.1671 27.0928L14.5336 27.0928L14.5336 38.7039L10.9002 38.7039Z",
              fill: "rgba(242,242,242,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="3.69%"
          bottom="10.3%"
          left="21.38%"
          right="70.22%"
          {...getOverrideProps(overrides, "Vector39883933")}
        ></Icon>
        <Icon
          width="41.32px"
          height="41.47px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 41.315391540527344,
            height: 41.46851348876953,
          }}
          paths={[
            {
              d: "M0 16.6495C0 13.2024 0.766056 10.0397 2.29817 7.16133C3.83028 4.28301 5.88744 1.8959 8.46966 0L10.8969 3.30921C8.83117 4.82593 7.18716 6.73906 5.96491 9.04862C4.74266 11.3582 4.13154 13.8918 4.13154 16.6495L0 16.6495ZM37.1839 16.6495C37.1839 13.8918 36.5727 11.3582 35.3505 9.04862C34.1282 6.73906 32.4842 4.82593 30.4185 3.30921L32.8457 0C35.428 1.8959 37.4851 4.28301 39.0172 7.16133C40.5493 10.0397 41.3154 13.2024 41.3154 16.6495L37.1839 16.6495ZM4.13154 35.2637L4.13154 31.1272L8.26308 31.1272L8.26308 16.6495C8.26308 13.7884 9.12382 11.2461 10.8453 9.02276C12.5668 6.79939 14.8047 5.34299 17.559 4.65357L17.559 3.2058C17.559 2.34402 17.8603 1.61152 18.4628 1.00827C19.0653 0.405033 19.797 0.103413 20.6577 0.103413C21.5184 0.103413 22.2501 0.405033 22.8526 1.00827C23.4551 1.61152 23.7564 2.34402 23.7564 3.2058L23.7564 4.65357C26.5107 5.34299 28.7486 6.79939 30.4701 9.02276C32.1916 11.2461 33.0523 13.7884 33.0523 16.6495L33.0523 31.1272L37.1839 31.1272L37.1839 35.2637L4.13154 35.2637ZM20.6577 41.4685C19.5215 41.4685 18.5489 41.0635 17.7398 40.2534C16.9307 39.4433 16.5262 38.4695 16.5262 37.332L24.7892 37.332C24.7892 38.4695 24.3847 39.4433 23.5756 40.2534C22.7665 41.0635 21.7939 41.4685 20.6577 41.4685ZM12.3946 31.1272L28.9208 31.1272L28.9208 16.6495C28.9208 14.3744 28.1117 12.4268 26.4935 10.8066C24.8753 9.1865 22.93 8.37643 20.6577 8.37643C18.3853 8.37643 16.4401 9.1865 14.8219 10.8066C13.2037 12.4268 12.3946 14.3744 12.3946 16.6495L12.3946 31.1272Z",
              fill: "rgba(242,242,242,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="3.69%"
          bottom="4.16%"
          left="40.45%"
          right="48.93%"
          {...getOverrideProps(overrides, "Vector39883934")}
        ></Icon>
        <Icon
          width="50.06px"
          height="39.16px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 50.061954498291016,
            height: 39.164710998535156,
          }}
          paths={[
            {
              d: "M18.1817 39.1647L17.1854 32.8984C16.6458 32.7352 16.1373 32.5393 15.6599 32.3109C15.1826 32.0824 14.7156 31.8376 14.2589 31.5765L6.84927 34.0243L0 24.7227L6.41341 20.9042C6.3719 20.6757 6.35114 20.4554 6.35114 20.2433L6.35114 18.9215C6.35114 18.7093 6.3719 18.489 6.41341 18.2605L0 14.442L6.84927 5.14037L14.2589 7.58816C14.7156 7.32706 15.1929 7.08229 15.6911 6.85382C16.1892 6.62536 16.6873 6.42954 17.1854 6.26635L18.1817 0L31.8802 0L32.8765 6.26635C33.4161 6.42954 33.9247 6.62536 34.402 6.85382C34.8794 7.08229 35.3464 7.32706 35.803 7.58816L43.2127 5.14037L50.062 14.442L43.6485 18.2605C43.6901 18.489 43.7108 18.7093 43.7108 18.9215L43.7108 20.2433C43.7108 20.4554 43.6693 20.6757 43.5863 20.9042L49.9997 24.7227L43.1504 34.0243L35.803 31.5765C35.3464 31.8376 34.869 32.0824 34.3709 32.3109C33.8728 32.5393 33.3746 32.7352 32.8765 32.8984L31.8802 39.1647L18.1817 39.1647ZM22.5403 35.2482L27.4594 35.2482L28.3311 30.0589C29.6179 29.7978 30.8113 29.4143 31.9114 28.9085C33.0114 28.4026 34.0181 27.7906 34.9313 27.0726L41.0956 29.0798L43.524 25.7508L38.1691 22.5687C38.3767 22.1117 38.522 21.6303 38.605 21.1245C38.688 20.6186 38.7295 20.1046 38.7295 19.5824C38.7295 19.0602 38.688 18.5461 38.605 18.0402C38.522 17.5344 38.3767 17.053 38.1691 16.596L43.524 13.4139L41.0956 10.0849L34.9313 12.1411C34.0181 11.3904 33.0114 10.7621 31.9114 10.2563C30.8113 9.75038 29.6179 9.36689 28.3311 9.1058L27.5216 3.91647L22.6026 3.91647L21.7309 9.1058C20.444 9.36689 19.2506 9.75038 18.1506 10.2563C17.0505 10.7621 16.0439 11.3741 15.1307 12.0921L8.96632 10.0849L6.53794 13.4139L11.8928 16.5471C11.6853 17.0366 11.54 17.5262 11.457 18.0158C11.3739 18.5053 11.3324 19.0275 11.3324 19.5824C11.3324 20.1046 11.3739 20.6104 11.457 21.1C11.54 21.5895 11.6853 22.0791 11.8928 22.5687L6.53794 25.7508L8.96632 29.0798L15.1307 27.0237C16.0439 27.7743 17.0505 28.4026 18.1506 28.9085C19.2506 29.4143 20.444 29.7978 21.7309 30.0589L22.5403 35.2482ZM25.1555 26.4362C27.5631 26.4362 29.6179 25.7671 31.3199 24.429C33.0218 23.0909 33.8728 21.4753 33.8728 19.5824C33.8728 17.6894 33.0218 16.0739 31.3199 14.7357C29.6179 13.3976 27.5631 12.7285 25.1555 12.7285C22.7064 12.7285 20.6412 13.3976 18.96 14.7357C17.2788 16.0739 16.4383 17.6894 16.4383 19.5824C16.4383 21.4753 17.2788 23.0909 18.96 24.429C20.6412 25.7671 22.7064 26.4362 25.1555 26.4362Z",
              fill: "rgba(232,234,237,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="3.69%"
          bottom="9.28%"
          left="0%"
          right="87.13%"
          {...getOverrideProps(overrides, "Vector40892265")}
        ></Icon>
      </View>
      <Icon
        width="33.32px"
        height="42.39px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 33.317962646484375,
          height: 42.390037536621094,
        }}
        paths={[
          {
            d: "M9.25499 32.97C9.77944 32.97 10.2191 32.7443 10.5738 32.293C10.9286 31.8416 11.106 31.2823 11.106 30.615C11.106 29.9478 10.9286 29.3885 10.5738 28.9371C10.2191 28.4857 9.77944 28.26 9.25499 28.26C8.73054 28.26 8.29093 28.4857 7.93615 28.9371C7.58138 29.3885 7.40399 29.9478 7.40399 30.615C7.40399 31.2823 7.58138 31.8416 7.93615 32.293C8.29093 32.7443 8.73054 32.97 9.25499 32.97ZM9.25499 23.55C9.77944 23.55 10.2191 23.3243 10.5738 22.873C10.9286 22.4216 11.106 21.8623 11.106 21.195C11.106 20.5278 10.9286 19.9685 10.5738 19.5171C10.2191 19.0657 9.77944 18.84 9.25499 18.84C8.73054 18.84 8.29093 19.0657 7.93615 19.5171C7.58138 19.9685 7.40399 20.5278 7.40399 21.195C7.40399 21.8623 7.58138 22.4216 7.93615 22.873C8.29093 23.3243 8.73054 23.55 9.25499 23.55ZM9.25499 14.13C9.77944 14.13 10.2191 13.9043 10.5738 13.4529C10.9286 13.0016 11.106 12.4423 11.106 11.775C11.106 11.1078 10.9286 10.5484 10.5738 10.0971C10.2191 9.6457 9.77944 9.42001 9.25499 9.42001C8.73054 9.42001 8.29093 9.6457 7.93615 10.0971C7.58138 10.5484 7.40399 11.1078 7.40399 11.775C7.40399 12.4423 7.58138 13.0016 7.93615 13.4529C8.29093 13.9043 8.73054 14.13 9.25499 14.13ZM14.808 32.97L25.914 32.97L25.914 28.26L14.808 28.26L14.808 32.97ZM14.808 23.55L25.914 23.55L25.914 18.84L14.808 18.84L14.808 23.55ZM14.808 14.13L25.914 14.13L25.914 9.42001L14.808 9.42001L14.808 14.13ZM3.702 42.39C2.68395 42.39 1.81244 41.9288 1.08746 41.0065C0.362487 40.0841 0 38.9753 0 37.68L0 4.71C0 3.41475 0.362487 2.30594 1.08746 1.38356C1.81244 0.461188 2.68395 0 3.702 0L29.616 0C30.634 0 31.5055 0.461188 32.2305 1.38356C32.9555 2.30594 33.318 3.41475 33.318 4.71L33.318 37.68C33.318 38.9753 32.9555 40.0841 32.2305 41.0065C31.5055 41.9288 30.634 42.39 29.616 42.39L3.702 42.39ZM3.702 37.68L29.616 37.68L29.616 4.71L3.702 4.71L3.702 37.68Z",
            fill: "rgba(22,70,89,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="27.58%"
        bottom="70.71%"
        left="51.35%"
        right="46.46%"
        {...getOverrideProps(overrides, "Vector39883939")}
      ></Icon>
      <Icon
        width="33.32px"
        height="42.39px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 33.317962646484375,
          height: 42.390037536621094,
        }}
        paths={[
          {
            d: "M16.659 21.195C17.8043 21.195 18.7847 20.7799 19.6003 19.9498C20.4159 19.1197 20.8237 18.1217 20.8237 16.956C20.8237 15.7903 20.4159 14.7924 19.6003 13.9622C18.7847 13.1321 17.8043 12.717 16.659 12.717C15.5137 12.717 14.5332 13.1321 13.7176 13.9622C12.902 14.7924 12.4942 15.7903 12.4942 16.956C12.4942 18.1217 12.902 19.1197 13.7176 19.9498C14.5332 20.7799 15.5137 21.195 16.659 21.195ZM16.659 36.7734C20.8931 32.817 24.034 29.2226 26.0817 25.9904C28.1294 22.7582 29.1532 19.888 29.1532 17.3799C29.1532 13.5295 27.9472 10.3767 25.5351 7.92164C23.123 5.46655 20.1643 4.239 16.659 4.239C13.1537 4.239 10.1949 5.46655 7.78287 7.92164C5.37079 10.3767 4.16475 13.5295 4.16475 17.3799C4.16475 19.888 5.18858 22.7582 7.23624 25.9904C9.28391 29.2226 12.4248 32.817 16.659 36.7734ZM16.659 42.39C11.0713 37.5505 6.89786 33.0554 4.13872 28.9047C1.37957 24.754 0 20.9124 0 17.3799C0 12.0812 1.67457 7.85982 5.02372 4.71589C8.37287 1.57196 12.2513 0 16.659 0C21.0667 0 24.9451 1.57196 28.2942 4.71589C31.6434 7.85982 33.318 12.0812 33.318 17.3799C33.318 20.9124 31.9384 24.754 29.1792 28.9047C26.4201 33.0554 22.2467 37.5505 16.659 42.39Z",
            fill: "rgba(22,70,89,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="27.62%"
        bottom="70.67%"
        left="28.97%"
        right="68.84%"
        {...getOverrideProps(overrides, "Vector39883938")}
      ></Icon>
    </View>
  );
}
