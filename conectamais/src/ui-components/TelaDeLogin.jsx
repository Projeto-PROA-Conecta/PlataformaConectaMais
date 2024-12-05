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
  Icon,
  Image,
  PasswordField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function TelaDeLogin(props) {
  const { bancoImagens, overrides, ...rest } = props;
  return (
    <View
      width="1519px"
      height="1040px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "TelaDeLogin")}
      {...rest}
    >
      <View
        width="1519px"
        height="1040px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-45deg, rgba(22,70,89,1), rgba(18,135,181,1))"
        {...getOverrideProps(overrides, "Login")}
      >
        <View
          width="1519px"
          height="1040px"
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
          <Icon
            width="1822.8px"
            height="1248px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 1822.800048828125,
              height: 1248,
            }}
            paths={[
              {
                d: "M1822.8 0L0 0L0 1248L1822.8 1248L1822.8 0Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="-10%"
            bottom="-10%"
            left="-10%"
            right="-10%"
            {...getOverrideProps(overrides, "Vector40291486")}
          ></Icon>
          <Icon
            width="1822.8px"
            height="1248px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 1822.800048828125,
              height: 1248,
            }}
            paths={[
              {
                d: "M1822.8 0L0 0L0 1248L1822.8 1248L1822.8 0Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="-10%"
            bottom="-10%"
            left="-10%"
            right="-10%"
            {...getOverrideProps(overrides, "Vector40291487")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="1519px"
            height="1040px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Group40291488")}
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
              src={bancoImagens?.Background2}
              {...getOverrideProps(overrides, "Rectangle")}
            ></Image>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="677px"
            height="786.75px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.18%"
            bottom="12.18%"
            left="45.89%"
            right="9.55%"
            {...getOverrideProps(overrides, "Group 3")}
          >
            <View
              width="677px"
              height="786.75px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              borderRadius="12px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 1")}
            ></View>
            <Text
              fontFamily="Montserrat"
              fontSize="12px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="14.628000259399414px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="39px"
              height="13.97px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="63.43%"
              bottom="34.79%"
              left="71.2%"
              right="23.04%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Entrar"
              {...getOverrideProps(overrides, "Entrar")}
            ></Text>
            <TextField
              width="422px"
              height="67.97px"
              label="Email"
              placeholder="nome@exemplo.com"
              position="absolute"
              top="33.37%"
              bottom="57.99%"
              left="18.76%"
              right="18.91%"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField")}
            ></TextField>
            <Text
              fontFamily="Montserrat"
              fontSize="9px"
              fontWeight="600"
              color="rgba(0,0,0,1)"
              lineHeight="10.970999717712402px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="75px"
              height="10.24px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="57.28%"
              bottom="41.42%"
              left="72.82%"
              right="16.1%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Esqueci a senha"
              {...getOverrideProps(overrides, "Esqueci a senha")}
            ></Text>
            <View
              padding="0px 0px 0px 0px"
              width="234px"
              height="16.76px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="70.21%"
              bottom="27.66%"
              left="15.36%"
              right="50.07%"
              {...getOverrideProps(overrides, "Group 1")}
            >
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
                width="114px"
                height="16.76px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="51.28%"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Novo por aqui?"
                {...getOverrideProps(overrides, "Novo por aqui?")}
              ></Text>
              <Text
                fontFamily="Montserrat"
                fontSize="15px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
                lineHeight="18.28499984741211px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="89px"
                height="16.76px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="61.97%"
                right="0%"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Inscreva-se"
                {...getOverrideProps(overrides, "Inscreva-se")}
              ></Text>
            </View>
            <PasswordField
              width="423px"
              height="72.62px"
              placeholder="Insira sua senha"
              position="absolute"
              top="43.79%"
              bottom="46.98%"
              left="18.76%"
              right="18.76%"
              label="Label"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              hideShowPassword={false}
              {...getOverrideProps(overrides, "PasswordField")}
            ></PasswordField>
            <Image
              width="6.2%"
              height="4.85%"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="60.42%"
              bottom="34.73%"
              left="18.76%"
              right="75.04%"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              src={bancoImagens?.GoogleLogo}
              {...getOverrideProps(overrides, "image 27")}
            ></Image>
            <Image
              width="6.35%"
              height="4.85%"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="60.17%"
              bottom="34.98%"
              left="28.95%"
              right="64.7%"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              src={bancoImagens?.FacebookLogo}
              {...getOverrideProps(overrides, "FacebookLogo 1")}
            ></Image>
            <Image
              width="52.14%"
              height="21.54%"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="7.57%"
              bottom="70.89%"
              left="23.93%"
              right="23.93%"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              src={bancoImagens?.LogoPretaConecta}
              {...getOverrideProps(
                overrides,
                "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview"
              )}
            ></Image>
          </View>
          <Button
            width="109px"
            height="38.17px"
            position="absolute"
            borderRadius="10px"
            top="59%"
            bottom="37.33%"
            left="77.22%"
            right="15.6%"
            backgroundColor="rgba(0,0,0,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Entrar"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </View>
        <View
          width="630px"
          height="815px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="-3092px"
          left="-26px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "Rectangle 2")}
        ></View>
        <Text
          fontFamily="Montserrat"
          fontSize="36px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="43.88399887084961px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 22px - -55px)"
          left="80px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Obrigado por nos escolher "
          {...getOverrideProps(overrides, "Obrigado por nos escolher")}
        ></Text>
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
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="488px"
          left="137px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Bem-vindo!"
          {...getOverrideProps(overrides, "Bem-vindo!")}
        ></Text>
        <View
          width="166px"
          height="186px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="708px"
          left="1173px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "undraw_reminder_re_fe15 1")}
        >
          <Icon
            width="16.38px"
            height="20.39px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 16.376941680908203,
              height: 20.392261505126953,
            }}
            paths={[
              {
                d: "M0 0L16.3769 0L16.3769 5.05131C16.3769 13.5182 9.03868 20.3923 9.65544e-06 20.3923L0 0Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="34.55%"
            bottom="54.48%"
            left="87.43%"
            right="2.7%"
            transformOrigin="top left"
            transform="rotate(-180deg)"
            {...getOverrideProps(overrides, "Vector40291506")}
          ></Icon>
          <Icon
            width="16.5px"
            height="13.79px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 16.500272750854492,
              height: 13.786750793457031,
            }}
            paths={[
              {
                d: "M13.6845 1.92294L16.5003 13.7868L0 11.2202L6.7239 0L13.6845 1.92294Z",
                fill: "rgba(160,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="28.45%"
            bottom="64.14%"
            left="77%"
            right="13.06%"
            {...getOverrideProps(overrides, "Vector40291507")}
          ></Icon>
          <Icon
            width="16.5px"
            height="13.79px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 16.500272750854492,
              height: 13.786750793457031,
            }}
            paths={[
              {
                d: "M13.6845 1.92294L16.5003 13.7868L0 11.2202L6.7239 0L13.6845 1.92294Z",
                fill: "rgba(0,0,0,0.1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="28.45%"
            bottom="64.14%"
            left="77%"
            right="13.06%"
            {...getOverrideProps(overrides, "Vector40291508")}
          ></Icon>
          <Icon
            width="15.82px"
            height="21.93px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 15.819465637207031,
              height: 21.9317569732666,
            }}
            paths={[
              {
                d: "M15.8195 0L0 0L0 21.9318L15.8195 21.9318L15.8195 0Z",
                fill: "rgba(160,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="54.9%"
            bottom="33.31%"
            left="85.25%"
            right="5.22%"
            transformOrigin="top left"
            transform="rotate(-180deg)"
            {...getOverrideProps(overrides, "Vector40291509")}
          ></Icon>
          <Icon
            width="18.98px"
            height="54.83px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 18.983360290527344,
              height: 54.82939147949219,
            }}
            paths={[
              {
                d: "M18.9834 0L15.5031 17.4861C15.5031 17.4861 17.7178 29.6375 11.0736 42.0853L6.64418 54.8294L0 53.9403C0 53.9403 4.11306 44.4563 4.11306 40.307C4.11306 36.1578 5.06223 20.1535 5.06223 20.1535L4.58765 1.89144L18.9834 0Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="64.54%"
            bottom="5.98%"
            left="80.01%"
            right="8.56%"
            {...getOverrideProps(overrides, "Vector40291510")}
          ></Icon>
          <Icon
            width="10.65px"
            height="13.21px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 10.64786434173584,
              height: 13.212113380432129,
            }}
            paths={[
              {
                d: "M1.7781 0.899303C1.7781 0.899303 9.37144 -1.76807 10.0042 2.0848L9.68783 3.86305C9.68783 3.86305 12.5353 11.8652 8.42227 12.4579C4.30921 13.0507 0.512541 13.9398 0.196151 12.1616C-0.120238 10.3833 -0.115254 8.16356 0.673227 6.60606C1.46171 5.04856 1.7781 0.899303 1.7781 0.899303Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="92.9%"
            bottom="0%"
            left="78.36%"
            right="15.22%"
            {...getOverrideProps(overrides, "Vector40291511")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="21.25px"
            height="68.58px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="63.08%"
            bottom="0.05%"
            left="72.2%"
            right="15%"
            {...getOverrideProps(overrides, "Group40291512")}
          >
            <Icon
              width="18.88px"
              height="56.76px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 18.879587173461914,
                height: 56.75776290893555,
              }}
              paths={[
                {
                  d: "M5.61335 0L3.76487 17.703C3.76487 17.703 -1.97011 28.798 0.716332 42.4856L1.18743 55.8809L7.83346 56.7578C7.83346 56.7578 6.69837 46.5764 7.93025 42.5908C9.16212 38.6053 13.0019 22.9851 13.0019 22.9851L18.8796 5.56714L5.61335 0Z",
                  fill: "rgba(47,46,65,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="17.24%"
              left="11.15%"
              right="0%"
              {...getOverrideProps(overrides, "Vector40291513")}
            ></Icon>
            <Icon
              width="11.2px"
              height="14.21px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 11.203485488891602,
                height: 14.212586402893066,
              }}
              paths={[
                {
                  d: "M11.2035 2.35197C11.2035 2.35197 4.70163 -2.18836 2.94993 1.34767L2.72589 3.13818C2.72589 3.13818 -2.38503 10.0828 1.38979 11.7237C5.1646 13.3646 8.54752 15.2077 9.37937 13.582C10.2112 11.9564 10.8655 9.82289 10.5705 8.12142C10.2755 6.41995 11.2035 2.35197 11.2035 2.35197Z",
                  fill: "rgba(47,46,65,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="79.28%"
              bottom="0%"
              left="0%"
              right="47.28%"
              {...getOverrideProps(overrides, "Vector40291514")}
            ></Icon>
          </View>
          <Icon
            width="31.85px"
            height="32.38px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 31.853069305419922,
              height: 32.37759017944336,
            }}
            paths={[
              {
                d: "M25.4693 0C32.9106 6.50471 33.4626 16.7966 29.1078 29.0448C29.1078 29.0448 15.1867 37.936 5.06223 26.6738L0 3.85288L25.4693 0Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="49.48%"
            bottom="33.11%"
            left="73.81%"
            right="7%"
            {...getOverrideProps(overrides, "Vector40291515")}
          ></Icon>
          <Icon
            width="22.75px"
            height="42.38px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 22.74604034423828,
              height: 42.38163757324219,
            }}
            paths={[
              {
                d: "M6.61018 0.59275L14.5199 1.77825L13.8871 20.4499L22.746 37.0469L11.356 42.3816C11.356 42.3816 2.49712 26.6738 0.915176 16.8934C-0.666771 7.113 0.282397 0 0.282397 0L6.61018 0.59275Z",
                fill: "rgba(234,191,63,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="32.11%"
            bottom="45.1%"
            left="77.64%"
            right="8.65%"
            {...getOverrideProps(overrides, "Vector40291516")}
          ></Icon>
          <Icon
            width="15.79px"
            height="42.38px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 15.785475730895996,
              height: 42.38163757324219,
            }}
            paths={[
              {
                d: "M9.17529 0.59275L1.26556 1.77825L1.89834 20.4499L0 37.6396L4.42945 42.3816C4.42945 42.3816 13.2884 26.6738 14.8703 16.8934C16.4522 7.113 15.5031 0 15.5031 0L9.17529 0.59275Z",
                fill: "rgba(234,191,63,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="32.43%"
            bottom="44.78%"
            left="72.48%"
            right="18.01%"
            {...getOverrideProps(overrides, "Vector40291517")}
          ></Icon>
          <Icon
            width="10.1px"
            height="35.33px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 10.098932266235352,
              height: 35.33355712890625,
            }}
            paths={[
              {
                d: "M0.419113 0.554169L2.15925 0.109606C2.15925 0.109606 8.32885 -0.631332 9.27801 1.73967C10.2272 4.11067 9.91079 18.0403 9.91079 18.0403C9.91079 18.0403 11.5434 35.1367 5.19026 35.3316C-1.16284 35.5264 0.102724 21.3004 0.102724 21.3004L0.419113 0.554169Z",
                fill: "rgba(234,191,63,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="32.69%"
            bottom="48.31%"
            left="83.47%"
            right="10.45%"
            {...getOverrideProps(overrides, "Vector40291518")}
          ></Icon>
          <Icon
            width="16.38px"
            height="15.34px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 16.376941680908203,
              height: 15.34096908569336,
            }}
            paths={[
              {
                d: "M8.18847 15.341C12.7108 15.341 16.3769 11.9068 16.3769 7.67048C16.3769 3.43419 12.7108 0 8.18847 0C3.6661 0 0 3.43419 0 7.67048C0 11.9068 3.6661 15.341 8.18847 15.341Z",
                fill: "rgba(160,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="22.99%"
            bottom="68.77%"
            left="78.65%"
            right="11.48%"
            {...getOverrideProps(overrides, "Vector40291519")}
          ></Icon>
          <Icon
            width="10.1px"
            height="35.33px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 10.098933219909668,
              height: 35.33355712890625,
            }}
            paths={[
              {
                d: "M9.67982 0.554169L7.93968 0.109606C7.93968 0.109606 1.77009 -0.631332 0.820921 1.73967C-0.128247 4.11067 0.188143 18.0403 0.188143 18.0403C0.188143 18.0403 -1.44443 35.1367 4.90867 35.3316C11.2618 35.5264 9.99621 21.3004 9.99621 21.3004L9.67982 0.554169Z",
                fill: "rgba(234,191,63,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="33.01%"
            bottom="47.99%"
            left="71.6%"
            right="22.31%"
            {...getOverrideProps(overrides, "Vector40291520")}
          ></Icon>
          <Icon
            width="14.38px"
            height="34.83px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 14.380871772766113,
              height: 34.83151626586914,
            }}
            paths={[
              {
                d: "M12.2242 0.0613477C10.4676 -0.356135 8.47603 1.40135 7.7754 3.98788C7.48039 5.01751 7.45289 6.09833 7.69522 7.13994L6.94041 10.0801L6.88488 10.0774L0.930987 23.2213C-0.453365 26.2774 -0.307091 29.7859 1.45862 32.6644C2.509 34.3767 3.88783 35.5279 5.50681 34.3528C8.19323 32.4029 9.94793 21.2384 10.7491 14.8251L12.6015 8.30609C13.3451 7.49857 13.8714 6.53597 14.1362 5.49885C14.837 2.91332 13.9809 0.478851 12.2242 0.0613477Z",
                fill: "rgba(160,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="32.75%"
            bottom="48.52%"
            left="73.37%"
            right="17.97%"
            {...getOverrideProps(overrides, "Vector40291521")}
          ></Icon>
          <Icon
            width="29.96px"
            height="26.98px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 29.95783233642578,
              height: 26.97556495666504,
            }}
            paths={[
              {
                d: "M0.300851 16.8992C0.717368 15.7128 1.53959 14.6742 1.90747 13.4738C2.39593 11.88 3.43587 15.4158 3.53732 13.7604C3.73017 10.6138 8.85674 2.51997 11.7834 0.965247C14.7101 -0.589486 16.3911 -0.120724 19.3727 1.33942C19.3727 1.33942 20.8201 1.42564 22.622 2.25897C24.4239 3.0923 26.0458 4.42691 26.7467 6.19112C27.3022 7.58951 27.2407 9.1252 27.4263 10.6071C27.9434 14.7356 30.414 18.662 29.8837 22.789C29.7183 24.0766 29.1958 25.4081 28.0719 26.1654C26.948 26.9228 25.1323 26.8404 24.3926 25.7442C24.1401 25.3701 24.0334 24.9263 23.817 24.5328C23.6007 24.1394 23.2098 23.7726 22.7375 23.7849C22.0277 23.8033 21.6663 24.6955 21.9463 25.3069C22.2262 25.9182 22.884 26.2873 23.5016 26.6156C22.0306 27.2355 20.206 27.0425 18.9197 26.1309C17.6334 25.2194 16.9388 23.6271 17.1755 22.1325C17.509 20.0265 20.7844 20.4624 21.1702 18.3642C21.4511 16.8367 22.4375 14.281 22.1688 12.7516C21.9001 11.2222 20.6098 13.074 21.9691 12.1903C20.4736 12.8657 17.2747 8.24564 15.7091 7.72817C14.1435 7.21069 12.8161 6.0902 12.1042 4.68524C10.4436 6.94013 8.98291 6.32779 8.38821 9.0099C7.7935 11.692 8.34337 17.7855 10.7921 19.2829C9.81214 19.9093 9.03091 20.805 8.5711 21.8294C8.3106 22.4098 8.14172 23.0448 7.70936 23.5268C6.88361 24.4474 5.35887 24.5034 4.14357 24.1163C2.63665 23.6364 1.34822 22.5822 0.637816 21.248C-0.0725857 19.9138 -0.196412 18.3155 0.300851 16.8992Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="21.36%"
            bottom="64.14%"
            left="73.96%"
            right="8%"
            {...getOverrideProps(overrides, "Vector40291522")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="117.01px"
            height="185.8px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0.11%"
            left="9.79%"
            right="19.72%"
            {...getOverrideProps(overrides, "Group40291523")}
          >
            <Icon
              width="91.79px"
              height="185.2px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 91.79363250732422,
                height: 185.20262145996094,
              }}
              paths={[
                {
                  d: "M78.4325 0L13.3611 0C5.98197 0 0 5.60356 0 12.5159L0 172.687C0 179.599 5.98196 185.203 13.3611 185.203L78.4325 185.203C85.8117 185.203 91.7936 179.599 91.7936 172.687L91.7936 12.5159C91.7936 5.60356 85.8117 0 78.4325 0Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0.16%"
              bottom="0.16%"
              left="21.28%"
              right="0.27%"
              {...getOverrideProps(overrides, "Vector40291524")}
            ></Icon>
            <Icon
              width="92.43px"
              height="185.8px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 92.42647552490234,
                height: 185.79518127441406,
              }}
              paths={[
                {
                  d: "M78.749 185.795L13.6775 185.795C6.13576 185.795 0 180.048 0 172.983L0 12.8123C4.49616e-15 5.74762 6.13576 0 13.6775 0L78.749 0C86.2907 0 92.4265 5.74762 92.4265 12.8123L92.4265 172.983C92.4265 180.048 86.2907 185.795 78.749 185.795ZM13.6775 0.59275C6.48459 0.59275 0.632779 6.07439 0.632779 12.8123L0.632779 172.983C0.632779 179.721 6.48459 185.202 13.6775 185.202L78.749 185.202C85.9419 185.202 91.7937 179.721 91.7937 172.983L91.7937 12.8123C91.7937 6.07438 85.9419 0.59275 78.749 0.59275L13.6775 0.59275Z",
                  fill: "rgba(63,61,86,1)",
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
              left="21.01%"
              right="0%"
              {...getOverrideProps(overrides, "Vector40291525")}
            ></Icon>
            <Icon
              width="2.07px"
              height="9.7px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 2.0716679096221924,
                height: 9.703096389770508,
              }}
              paths={[
                {
                  d: "M1.03583 0C0.464557 0 0 0.43517 0 0.970308L0 8.73279C0 9.26793 0.464557 9.7031 1.03583 9.7031C1.60711 9.7031 2.07167 9.26793 2.07167 8.73279L2.07167 0.970308C2.07167 0.43517 1.60711 0 1.03583 0Z",
                  fill: "rgba(63,61,86,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="15.08%"
              bottom="79.69%"
              left="15.8%"
              right="82.43%"
              {...getOverrideProps(overrides, "Vector40291526")}
            ></Icon>
            <Icon
              width="30.18px"
              height="3.77px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 30.179109573364258,
                height: 3.7693400382995605,
              }}
              paths={[
                {
                  d: "M28.1672 3.76934L2.01194 3.76934C0.902573 3.76934 0 2.92386 0 1.88467C0 0.845478 0.902573 0 2.01194 0L28.1672 0C29.2765 0 30.1791 0.845478 30.1791 1.88467C30.1791 2.92386 29.2765 3.76934 28.1672 3.76934Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="11.92%"
              bottom="86.05%"
              left="68.27%"
              right="5.94%"
              {...getOverrideProps(overrides, "Vector40291527")}
            ></Icon>
            <Icon
              width="27.75px"
              height="2.18px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 27.74888801574707,
                height: 2.1777029037475586,
              }}
              paths={[
                {
                  d: "M26.5866 2.1777L1.1625 2.1777C0.521536 2.1777 0 1.68916 0 1.08874C0 0.488323 0.52154 0 1.1625 0L26.5866 0C27.2276 0 27.7489 0.488326 27.7489 1.08874C27.7489 1.68916 27.2276 2.1777 26.5866 2.1777Z",
                  fill: "rgba(234,191,63,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.76%"
              bottom="78.07%"
              left="48.65%"
              right="27.64%"
              {...getOverrideProps(overrides, "Vector40291528")}
            ></Icon>
            <Icon
              width="41.07px"
              height="37.66px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 41.06669616699219,
                height: 37.658348083496094,
              }}
              paths={[
                {
                  d: "M20.5334 37.6583C31.8736 37.6583 41.0667 29.2282 41.0667 18.8292C41.0667 8.43011 31.8736 0 20.5334 0C9.1931 0 0 8.43011 0 18.8292C0 29.2282 9.1931 37.6583 20.5334 37.6583Z",
                  fill: "rgba(234,191,63,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="4.55%"
              bottom="75.18%"
              left="0%"
              right="64.9%"
              {...getOverrideProps(overrides, "Vector40291529")}
            ></Icon>
            <Icon
              width="16.96px"
              height="17.14px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 16.9578914642334,
                height: 17.136159896850586,
              }}
              paths={[
                {
                  d: "M15.1932 0.439122C12.4596 5.10189 9.72592 9.7647 6.99229 14.4275C5.25005 11.5439 3.51732 8.65521 1.77079 5.77388C1.16761 4.77877 -0.473057 5.6738 0.131642 6.67139C2.15625 10.0115 4.15989 13.3627 6.1845 16.7029C6.53067 17.2739 7.48105 17.2872 7.82366 16.7029C10.8266 11.5808 13.8295 6.4587 16.8324 1.33664C17.4208 0.332975 15.7821 -0.565323 15.1932 0.439122Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="9.34%"
              bottom="81.44%"
              left="10.52%"
              right="74.99%"
              {...getOverrideProps(overrides, "Vector40291530")}
            ></Icon>
            <Icon
              width="14.71px"
              height="1.77px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 14.711495399475098,
                height: 1.766777753829956,
              }}
              paths={[
                {
                  d: "M14.6133 0L0.0981475 0C0.0439423 0 0 0.0411623 0 0.0919386L0 1.67484C0 1.72562 0.0439423 1.76678 0.0981475 1.76678L14.6133 1.76678C14.6676 1.76678 14.7115 1.72562 14.7115 1.67484L14.7115 0.0919386C14.7115 0.0411623 14.6676 0 14.6133 0Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="2.34%"
              bottom="96.71%"
              left="28.17%"
              right="59.26%"
              {...getOverrideProps(overrides, "Vector40291531")}
            ></Icon>
            <Icon
              width="3.02px"
              height="2.83px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 3.0177392959594727,
                height: 2.826843023300171,
              }}
              paths={[
                {
                  d: "M1.50886 2.82684C2.34219 2.82684 3.01774 2.19403 3.01774 1.41342C3.01774 0.63281 2.34219 0 1.50886 0C0.675539 0 0 0.63281 0 1.41342C0 2.19403 0.675539 2.82684 1.50886 2.82684Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="1.77%"
              bottom="96.71%"
              left="81.15%"
              right="16.27%"
              {...getOverrideProps(overrides, "Vector40291532")}
            ></Icon>
            <Icon
              width="3.02px"
              height="2.83px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 3.0177392959594727,
                height: 2.826843023300171,
              }}
              paths={[
                {
                  d: "M1.50886 2.82684C2.34219 2.82684 3.01774 2.19403 3.01774 1.41342C3.01774 0.63281 2.34219 0 1.50886 0C0.675539 0 0 0.63281 0 1.41342C0 2.19403 0.675539 2.82684 1.50886 2.82684Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="1.77%"
              bottom="96.71%"
              left="84.7%"
              right="12.72%"
              {...getOverrideProps(overrides, "Vector40291533")}
            ></Icon>
            <Icon
              width="3.02px"
              height="2.83px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 3.0177392959594727,
                height: 2.826843023300171,
              }}
              paths={[
                {
                  d: "M1.50886 2.82684C2.34219 2.82684 3.01774 2.19403 3.01774 1.41342C3.01774 0.63281 2.34219 0 1.50886 0C0.675539 0 0 0.63281 0 1.41342C0 2.19403 0.675539 2.82684 1.50886 2.82684Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="1.77%"
              bottom="96.71%"
              left="88.25%"
              right="9.17%"
              {...getOverrideProps(overrides, "Vector40291534")}
            ></Icon>
            <Icon
              width="65.39px"
              height="0.71px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 65.38819885253906,
                height: 0.7053740620613098,
              }}
              paths={[
                {
                  d: "M0 0.352687C0 0.548303 0.167697 0.705374 0.376523 0.705374L65.0117 0.705374C65.2205 0.705374 65.3882 0.548303 65.3882 0.352687C65.3882 0.157088 65.2205 0 65.0117 0L0.376523 0C0.167697 0 0 0.157088 0 0.352687Z",
                  fill: "rgba(63,61,86,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="24.88%"
              bottom="74.74%"
              left="32.57%"
              right="11.55%"
              {...getOverrideProps(overrides, "Vector40291535")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              width="54.56px"
              height="40.6px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="36.77%"
              bottom="41.37%"
              left="37.19%"
              right="16.18%"
              {...getOverrideProps(overrides, "Group40291536")}
            >
              <Icon
                width="41.11px"
                height="2.18px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 41.11346435546875,
                  height: 2.1777029037475586,
                }}
                paths={[
                  {
                    d: "M39.9512 2.1777L1.1625 2.1777C0.521536 2.1777 0 1.68915 0 1.08874C0 0.488322 0.52154 0 1.1625 0L39.9512 0C40.5922 0 41.1135 0.488323 41.1135 1.08874C41.1135 1.68916 40.5922 2.1777 39.9512 2.1777Z",
                    fill: "rgba(234,191,63,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="9.33%"
                bottom="85.31%"
                left="24.65%"
                right="0%"
                {...getOverrideProps(overrides, "Vector40291537")}
              ></Icon>
              <Icon
                width="41.11px"
                height="2.18px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 41.11346435546875,
                  height: 2.1776983737945557,
                }}
                paths={[
                  {
                    d: "M39.9512 2.1777L1.1625 2.1777C0.521536 2.1777 0 1.68915 0 1.08874C0 0.488326 0.52154 0 1.1625 0L39.9512 0C40.5922 0 41.1135 0.488323 41.1135 1.08874C41.1135 1.68916 40.5922 2.1777 39.9512 2.1777Z",
                    fill: "rgba(234,191,63,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="48.01%"
                bottom="46.62%"
                left="24.65%"
                right="0%"
                {...getOverrideProps(overrides, "Vector40291538")}
              ></Icon>
              <Icon
                width="41.11px"
                height="2.18px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 41.11346435546875,
                  height: 2.1776983737945557,
                }}
                paths={[
                  {
                    d: "M39.9512 2.1777L1.1625 2.1777C0.521536 2.1777 0 1.68915 0 1.08874C0 0.488326 0.52154 0 1.1625 0L39.9512 0C40.5922 0 41.1135 0.488323 41.1135 1.08874C41.1135 1.68916 40.5922 2.1777 39.9512 2.1777Z",
                    fill: "rgba(234,191,63,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="86.7%"
                bottom="7.94%"
                left="24.65%"
                right="0%"
                {...getOverrideProps(overrides, "Vector40291539")}
              ></Icon>
              <Icon
                width="5.7px"
                height="5.33px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 5.695007801055908,
                  height: 5.334751605987549,
                }}
                paths={[
                  {
                    d: "M2.8475 5.33475C4.42014 5.33475 5.69501 4.14053 5.69501 2.66738C5.69501 1.19422 4.42014 0 2.8475 0C1.27487 0 0 1.19422 0 2.66738C0 4.14053 1.27487 5.33475 2.8475 5.33475Z",
                    fill: "rgba(234,191,63,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="5.11%"
                bottom="81.75%"
                left="0%"
                right="89.56%"
                {...getOverrideProps(overrides, "Vector40291540")}
              ></Icon>
              <Icon
                width="4.9px"
                height="9.19px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 4.904034614562988,
                  height: 9.187627792358398,
                }}
                paths={[
                  {
                    d: "M0 9.18763L0 8.59488C2.35515 8.59488 4.27126 6.79999 4.27126 4.59381C4.27126 2.38764 2.35515 0.59275 0 0.59275L0 0C2.70414 0 4.90403 2.06073 4.90403 4.59381C4.90403 7.1269 2.70414 9.18763 0 9.18763Z",
                    fill: "rgba(63,61,86,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="77.37%"
                left="4.64%"
                right="86.37%"
                {...getOverrideProps(overrides, "Vector40291541")}
              ></Icon>
              <Icon
                width="5.7px"
                height="5.33px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 5.695007801055908,
                  height: 5.334751605987549,
                }}
                paths={[
                  {
                    d: "M2.8475 5.33475C4.42014 5.33475 5.69501 4.14053 5.69501 2.66738C5.69501 1.19422 4.42014 0 2.8475 0C1.27487 0 0 1.19422 0 2.66738C0 4.14053 1.27487 5.33475 2.8475 5.33475Z",
                    fill: "rgba(234,191,63,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="43.8%"
                bottom="43.07%"
                left="0%"
                right="89.56%"
                {...getOverrideProps(overrides, "Vector40291542")}
              ></Icon>
              <Icon
                width="4.9px"
                height="9.19px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 4.904034614562988,
                  height: 9.187627792358398,
                }}
                paths={[
                  {
                    d: "M0 9.18763L0 8.59488C2.35515 8.59488 4.27126 6.80013 4.27126 4.59381C4.27126 2.38764 2.35515 0.59275 0 0.59275L0 0C2.70414 0 4.90403 2.06073 4.90403 4.59381C4.90403 7.1269 2.70414 9.18763 0 9.18763Z",
                    fill: "rgba(63,61,86,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="38.69%"
                bottom="38.69%"
                left="4.64%"
                right="86.37%"
                {...getOverrideProps(overrides, "Vector40291543")}
              ></Icon>
              <Icon
                width="5.7px"
                height="5.33px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 5.695007801055908,
                  height: 5.334751605987549,
                }}
                paths={[
                  {
                    d: "M2.8475 5.33475C4.42014 5.33475 5.69501 4.14053 5.69501 2.66738C5.69501 1.19422 4.42014 0 2.8475 0C1.27487 0 0 1.19422 0 2.66738C0 4.14053 1.27487 5.33475 2.8475 5.33475Z",
                    fill: "rgba(234,191,63,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="82.48%"
                bottom="4.38%"
                left="0%"
                right="89.56%"
                {...getOverrideProps(overrides, "Vector40291544")}
              ></Icon>
              <Icon
                width="4.9px"
                height="9.19px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 4.904034614562988,
                  height: 9.187627792358398,
                }}
                paths={[
                  {
                    d: "M0 9.18763L0 8.59488C2.35515 8.59488 4.27126 6.80013 4.27126 4.59381C4.27126 2.3875 2.35515 0.59275 0 0.59275L0 0C2.70414 0 4.90403 2.06073 4.90403 4.59381C4.90403 7.1269 2.70414 9.18763 0 9.18763Z",
                    fill: "rgba(63,61,86,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="77.37%"
                bottom="0%"
                left="4.64%"
                right="86.37%"
                {...getOverrideProps(overrides, "Vector40291545")}
              ></Icon>
            </View>
          </View>
          <Icon
            width="14.38px"
            height="34.83px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 14.380861282348633,
              height: 34.83151626586914,
            }}
            paths={[
              {
                d: "M2.15663 0.0613477C3.91327 -0.356135 5.90483 1.40135 6.60546 3.98788C6.90048 5.01751 6.92797 6.09833 6.68564 7.13994L7.44046 10.0801L7.49599 10.0774L13.4499 23.2213C14.8342 26.2774 14.688 29.7859 12.9222 32.6644C11.8719 34.3767 10.493 35.5279 8.87405 34.3528C6.18763 32.4029 4.43294 21.2384 3.63178 14.8251L1.77933 8.30609C1.03576 7.49857 0.509518 6.53597 0.244637 5.49885C-0.456133 2.91332 0.399998 0.478851 2.15663 0.0613477Z",
                fill: "rgba(160,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="32.43%"
            bottom="48.84%"
            left="79.12%"
            right="12.22%"
            {...getOverrideProps(overrides, "Vector40291546")}
          ></Icon>
          <Icon
            width="13.8px"
            height="29.14px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 13.796363830566406,
              height: 29.14399528503418,
            }}
            paths={[
              {
                d: "M6.66117 0L0 4.43552L3.33059 24.0834L7.50779 29.144L12.3736 27.5676L13.7964 18.2796L12.1221 9.2973L6.66117 0Z",
                fill: "rgba(234,191,63,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="36.34%"
            bottom="47.99%"
            left="80.48%"
            right="11.21%"
            {...getOverrideProps(overrides, "Vector40291547")}
          ></Icon>
        </View>
      </View>
    </View>
  );
}
