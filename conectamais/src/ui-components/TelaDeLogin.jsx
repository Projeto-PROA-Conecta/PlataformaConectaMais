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
          padding="0px 0px 0px 0px"
          width="0px"
          height="0px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="100%"
          left="0%"
          right="100%"
          {...getOverrideProps(overrides, "Group40291488")}
        ></View>
        <Image
          width="100%"
          height="93.85%"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="6.15%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          objectFit="unset"
          {...getOverrideProps(overrides, "Rectangle")}
        ></Image>
        <View
          width="638px"
          height="731px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="170px"
          left="716px"
          borderRadius="12px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 2")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="464px"
          height="306.57px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="37.42%"
          bottom="33.1%"
          left="52.73%"
          right="16.72%"
          {...getOverrideProps(overrides, "Group 3")}
        >
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
            top="77.14%"
            bottom="18.3%"
            left="81.47%"
            right="10.13%"
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
            top="0%"
            bottom="77.83%"
            left="4.96%"
            right="4.09%"
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
            top="61.35%"
            bottom="35.31%"
            left="83.84%"
            right="0%"
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
            top="94.53%"
            bottom="0%"
            left="0%"
            right="49.57%"
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
            top="26.73%"
            bottom="49.59%"
            left="4.96%"
            right="3.88%"
            label="Label"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            hideShowPassword={false}
            {...getOverrideProps(overrides, "PasswordField")}
          ></PasswordField>
          <Image
            width="9.05%"
            height="12.45%"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="69.42%"
            bottom="18.13%"
            left="4.96%"
            right="85.99%"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.GoogleLogo}
            {...getOverrideProps(overrides, "GoogleLogo")}
          ></Image>
          <Image
            width="9.27%"
            height="12.45%"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="68.76%"
            bottom="18.78%"
            left="19.83%"
            right="70.91%"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.FacebookLogo}
            {...getOverrideProps(overrides, "FacebookLogo 1")}
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
        <Image
          width="269px"
          height="118px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="227px"
          left="900px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(
            overrides,
            "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview"
          )}
        ></Image>
        <Text
          fontFamily="Montserrat"
          fontSize="34px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="41.44599914550781px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 20.5px - -53.5px)"
          left="80px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Obrigado por nos escolher "
          {...getOverrideProps(overrides, "Obrigado por nos escolher")}
        ></Text>
        <Text
          fontFamily="Montserrat"
          fontSize="44px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="53.6359977722168px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="501px"
          left="184px"
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
            width="12px"
            height="14px"
            viewBox={{ minX: 0, minY: 0, width: 12, height: 14 }}
            paths={[
              {
                d: "M0 0L12 0L12 3.4679C12 9.28072 6.62298 14 7.0749e-06 14L0 0Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="30.65%"
            bottom="61.83%"
            left="83.73%"
            right="9.04%"
            transformOrigin="top left"
            transform="rotate(-180deg)"
            {...getOverrideProps(overrides, "Vector40291506")}
          ></Icon>
          <Icon
            width="12px"
            height="10px"
            viewBox={{ minX: 0, minY: 0, width: 12, height: 10 }}
            paths={[
              {
                d: "M9.95218 1.39477L12 10L0 8.13843L4.89003 0L9.95218 1.39477Z",
                fill: "rgba(160,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="26.34%"
            bottom="68.28%"
            left="75.9%"
            right="16.87%"
            {...getOverrideProps(overrides, "Vector40291507")}
          ></Icon>
          <Icon
            width="12px"
            height="10px"
            viewBox={{ minX: 0, minY: 0, width: 12, height: 10 }}
            paths={[
              {
                d: "M9.95218 1.39477L12 10L0 8.13843L4.89003 0L9.95218 1.39477Z",
                fill: "rgba(0,0,0,0.1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="26.34%"
            bottom="68.28%"
            left="75.9%"
            right="16.87%"
            {...getOverrideProps(overrides, "Vector40291508")}
          ></Icon>
          <Icon
            width="12px"
            height="16px"
            viewBox={{ minX: 0, minY: 0, width: 12, height: 16 }}
            paths={[
              {
                d: "M12 0L0 0L0 16L12 16L12 0Z",
                fill: "rgba(160,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="45.16%"
            bottom="46.24%"
            left="81.93%"
            right="10.84%"
            transformOrigin="top left"
            transform="rotate(-180deg)"
            {...getOverrideProps(overrides, "Vector40291509")}
          ></Icon>
          <Icon
            width="14px"
            height="39px"
            viewBox={{ minX: 0, minY: 0, width: 14, height: 39 }}
            paths={[
              {
                d: "M14 0L11.4333 12.4378C11.4333 12.4378 13.0667 21.0811 8.16667 29.9351L4.9 39L0 38.3676C0 38.3676 3.03333 31.6216 3.03333 28.6703C3.03333 25.7189 3.73333 14.3351 3.73333 14.3351L3.38333 1.34537L14 0Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="51.61%"
            bottom="27.42%"
            left="78.31%"
            right="13.25%"
            {...getOverrideProps(overrides, "Vector40291510")}
          ></Icon>
          <Icon
            width="7px"
            height="9px"
            viewBox={{ minX: 0, minY: 0, width: 7, height: 9 }}
            paths={[
              {
                d: "M1.16894 0.612599C1.16894 0.612599 6.16087 -1.2044 6.57686 1.42015L6.36887 2.63149C6.36887 2.63149 8.24084 8.08248 5.53688 8.48626C2.83291 8.89003 0.336949 9.4957 0.128952 8.28437C-0.0790455 7.07304 -0.0757688 5.56096 0.442585 4.5C0.960941 3.43904 1.16894 0.612599 1.16894 0.612599Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="72.04%"
            bottom="23.12%"
            left="77.11%"
            right="18.67%"
            {...getOverrideProps(overrides, "Vector40291511")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="16.23px"
            height="48.42px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="50.82%"
            bottom="23.15%"
            left="72.06%"
            right="18.16%"
            {...getOverrideProps(overrides, "Group40291512")}
          >
            <Icon
              width="14.42px"
              height="40.07px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 14.422691345214844,
                height: 40.072418212890625,
              }}
              paths={[
                {
                  d: "M4.28821 0L2.8761 12.4987C2.8761 12.4987 -1.50503 20.3321 0.547228 29.9959L0.907114 39.4533L5.98422 40.0724C5.98422 40.0724 5.11709 32.8841 6.05816 30.0702C6.99922 27.2563 9.93255 16.2281 9.93255 16.2281L14.4227 3.93055L4.28821 0Z",
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
              left="11.16%"
              right="0%"
              {...getOverrideProps(overrides, "Vector40291513")}
            ></Icon>
            <Icon
              width="8.56px"
              height="10.03px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.558684349060059,
                height: 10.034445762634277,
              }}
              paths={[
                {
                  d: "M8.55868 1.66055C8.55868 1.66055 3.59172 -1.54504 2.25354 0.951487L2.08239 2.21564C2.08239 2.21564 -1.82199 7.11871 1.0617 8.27722C3.9454 9.43573 6.52971 10.737 7.16519 9.58926C7.80067 8.4415 8.30046 6.93521 8.07512 5.73393C7.84979 4.53265 8.55868 1.66055 8.55868 1.66055Z",
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
            width="24px"
            height="23px"
            viewBox={{ minX: 0, minY: 0, width: 24, height: 23 }}
            paths={[
              {
                d: "M19.1901 0C24.7968 4.62074 25.2127 11.9318 21.9316 20.6325C21.9316 20.6325 11.4426 26.9485 3.81419 18.9482L0 2.73696L19.1901 0Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="41.4%"
            bottom="46.24%"
            left="73.49%"
            right="12.05%"
            {...getOverrideProps(overrides, "Vector40291515")}
          ></Icon>
          <Icon
            width="17px"
            height="30px"
            viewBox={{ minX: 0, minY: 0, width: 17, height: 30 }}
            paths={[
              {
                d: "M4.94034 0.41958L10.8519 1.25874L10.379 14.4755L17 26.2238L8.4873 30C8.4873 30 1.86631 18.8811 0.683987 11.958C-0.498333 5.03497 0.211059 0 0.211059 0L4.94034 0.41958Z",
                fill: "rgba(234,191,63,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="29.03%"
            bottom="54.84%"
            left="76.51%"
            right="13.25%"
            {...getOverrideProps(overrides, "Vector40291516")}
          ></Icon>
          <Icon
            width="12px"
            height="30px"
            viewBox={{ minX: 0, minY: 0, width: 12, height: 30 }}
            paths={[
              {
                d: "M6.97499 0.41958L0.962067 1.25874L1.4431 14.4755L0 26.6434L3.36724 30C3.36724 30 10.1017 18.8811 11.3043 11.958C12.5069 5.03497 11.7853 0 11.7853 0L6.97499 0.41958Z",
                fill: "rgba(234,191,63,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="29.03%"
            bottom="54.84%"
            left="72.29%"
            right="20.48%"
            {...getOverrideProps(overrides, "Vector40291517")}
          ></Icon>
          <Icon
            width="8px"
            height="25px"
            viewBox={{ minX: 0, minY: 0, width: 8, height: 25 }}
            paths={[
              {
                d: "M0.332006 0.392098L1.71048 0.077551C1.71048 0.077551 6.5978 -0.446694 7.3497 1.23089C8.10159 2.90847 7.85096 12.7643 7.85096 12.7643C7.85096 12.7643 9.14422 24.8607 4.11153 24.9986C-0.921157 25.1365 0.081374 15.071 0.081374 15.071L0.332006 0.392098Z",
                fill: "rgba(234,191,63,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="29.57%"
            bottom="56.99%"
            left="80.12%"
            right="15.06%"
            {...getOverrideProps(overrides, "Vector40291518")}
          ></Icon>
          <Icon
            width="12px"
            height="11px"
            viewBox={{ minX: 0, minY: 0, width: 12, height: 11 }}
            paths={[
              {
                d: "M6 11C9.31371 11 12 8.53756 12 5.5C12 2.46243 9.31371 0 6 0C2.68629 0 0 2.46243 0 5.5C0 8.53756 2.68629 11 6 11Z",
                fill: "rgba(160,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="22.58%"
            bottom="71.51%"
            left="77.11%"
            right="15.66%"
            {...getOverrideProps(overrides, "Vector40291519")}
          ></Icon>
          <Icon
            width="8px"
            height="25px"
            viewBox={{ minX: 0, minY: 0, width: 8, height: 25 }}
            paths={[
              {
                d: "M7.668 0.392098L6.28952 0.077551C6.28952 0.077551 1.4022 -0.446694 0.650303 1.23089C-0.101592 2.90847 0.14904 12.7643 0.14904 12.7643C0.14904 12.7643 -1.14423 24.8607 3.88846 24.9986C8.92115 25.1365 7.91863 15.071 7.91863 15.071L7.668 0.392098Z",
                fill: "rgba(234,191,63,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="29.57%"
            bottom="56.99%"
            left="71.69%"
            right="23.49%"
            {...getOverrideProps(overrides, "Vector40291520")}
          ></Icon>
          <Icon
            width="11px"
            height="24px"
            viewBox={{ minX: 0, minY: 0, width: 11, height: 24 }}
            paths={[
              {
                d: "M9.35038 0.0422705C8.00671 -0.245388 6.48336 0.965575 5.94744 2.74777C5.72179 3.45722 5.70076 4.20194 5.88611 4.91964L5.30875 6.9455L5.26628 6.94362L0.712117 16.0002C-0.346781 18.1059 -0.234895 20.5234 1.1157 22.5068C1.91915 23.6866 2.97382 24.4798 4.21219 23.6701C6.26704 22.3266 7.60922 14.6339 8.22203 10.215L9.63898 5.72315C10.2077 5.16675 10.6103 4.50349 10.8129 3.78888C11.3489 2.00737 10.694 0.329943 9.35038 0.0422705Z",
                fill: "rgba(160,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="29.57%"
            bottom="57.53%"
            left="72.89%"
            right="20.48%"
            {...getOverrideProps(overrides, "Vector40291521")}
          ></Icon>
          <Icon
            width="23px"
            height="19px"
            viewBox={{ minX: 0, minY: 0, width: 23, height: 19 }}
            paths={[
              {
                d: "M0.230977 11.9028C0.550756 11.0672 1.18201 10.3357 1.46445 9.49018C1.83946 8.3676 2.63787 10.858 2.71577 9.69199C2.86382 7.47577 6.79973 1.77492 9.04668 0.679863C11.2936 -0.415199 12.5842 -0.0850308 14.8733 0.943405C14.8733 0.943405 15.9846 1.00414 17.368 1.59109C18.7513 2.17804 19.9966 3.11806 20.5347 4.36066C20.9612 5.3456 20.9139 6.42725 21.0565 7.47101C21.4534 10.3789 23.3502 13.1444 22.9431 16.0512C22.8161 16.9581 22.415 17.896 21.5521 18.4294C20.6893 18.9628 19.2953 18.9048 18.7273 18.1327C18.5335 17.8692 18.4515 17.5566 18.2854 17.2795C18.1193 17.0024 17.8192 16.744 17.4566 16.7527C16.9116 16.7656 16.6342 17.3941 16.8491 17.8247C17.064 18.2553 17.5691 18.5152 18.0432 18.7465C16.9139 19.1831 15.513 19.0471 14.5255 18.4051C13.538 17.763 13.0047 16.6415 13.1864 15.5889C13.4425 14.1055 15.9571 14.4125 16.2533 12.9346C16.469 11.8588 17.2263 10.0587 17.02 8.98148C16.8137 7.90429 15.8231 9.20856 16.8667 8.58616C15.7185 9.06183 13.2626 5.80774 12.0606 5.44327C10.8586 5.07879 9.83948 4.28958 9.29292 3.30001C8.01803 4.88822 6.89659 4.45692 6.44001 6.34605C5.98343 8.23517 6.40559 12.5271 8.28561 13.5818C7.53323 14.0229 6.93345 14.6538 6.58043 15.3754C6.38043 15.7841 6.25077 16.2314 5.91883 16.5709C5.28486 17.2193 4.11425 17.2588 3.18121 16.9861C2.02427 16.6481 1.03509 15.9056 0.489681 14.9658C-0.0557274 14.0261 -0.150794 12.9004 0.230977 11.9028Z",
                fill: "rgba(47,46,65,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="21.51%"
            bottom="68.28%"
            left="73.49%"
            right="12.65%"
            {...getOverrideProps(overrides, "Vector40291522")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="75px"
            height="124px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="10.75%"
            bottom="22.58%"
            left="26.51%"
            right="28.31%"
            {...getOverrideProps(overrides, "Group40291523")}
          >
            <Icon
              width="59px"
              height="124px"
              viewBox={{ minX: 0, minY: 0, width: 59, height: 124 }}
              paths={[
                {
                  d: "M50.4122 0L8.5878 0C3.84489 0 0 3.75179 0 8.37986L0 115.62C0 120.248 3.84488 124 8.58778 124L50.4122 124C55.1551 124 59 120.248 59 115.62L59 8.37986C59 3.75179 55.1551 0 50.4122 0Z",
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
              left="21.33%"
              right="0%"
              {...getOverrideProps(overrides, "Vector40291524")}
            ></Icon>
            <Icon
              width="59px"
              height="124px"
              viewBox={{ minX: 0, minY: 0, width: 59, height: 124 }}
              paths={[
                {
                  d: "M50.269 124L8.73097 124C3.91673 124 0 120.164 0 115.449L0 8.55094C2.8701e-15 3.83597 3.91673 0 8.73097 0L50.269 0C55.0833 0 59 3.83597 59 8.55094L59 115.449C59 120.164 55.0833 124 50.269 124ZM8.73097 0.395602C4.13941 0.395602 0.403931 4.05406 0.403931 8.55094L0.403931 115.449C0.403931 119.946 4.13941 123.604 8.73097 123.604L50.269 123.604C54.8606 123.604 58.5961 119.946 58.5961 115.449L58.5961 8.55094C58.5961 4.05405 54.8606 0.395602 50.269 0.395602L8.73097 0.395602Z",
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
              left="21.33%"
              right="0%"
              {...getOverrideProps(overrides, "Vector40291525")}
            ></Icon>
            <Icon
              width="2px"
              height="6px"
              viewBox={{ minX: 0, minY: 0, width: 2, height: 6 }}
              paths={[
                {
                  d: "M0.999999 0C0.448486 0 0 0.269091 0 0.599999L0 5.4C0 5.73091 0.448486 6 0.999999 6C1.55151 6 2 5.73091 2 5.4L2 0.599999C2 0.269091 1.55151 0 0.999999 0Z",
                  fill: "rgba(63,61,86,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="15.32%"
              bottom="79.84%"
              left="16%"
              right="81.33%"
              {...getOverrideProps(overrides, "Vector40291526")}
            ></Icon>
            <Icon
              width="19px"
              height="4px"
              viewBox={{ minX: 0, minY: 0, width: 19, height: 4 }}
              paths={[
                {
                  d: "M17.7333 4L1.26667 4C0.568237 4 0 3.10278 0 2C0 0.897216 0.568237 0 1.26667 0L17.7333 0C18.4318 0 19 0.897216 19 2C19 3.10278 18.4318 4 17.7333 4Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="11.29%"
              bottom="85.48%"
              left="68%"
              right="6.67%"
              {...getOverrideProps(overrides, "Vector40291527")}
            ></Icon>
            <Icon
              width="17px"
              height="1px"
              viewBox={{ minX: 0, minY: 0, width: 17, height: 1 }}
              paths={[
                {
                  d: "M16.288 1L0.712191 1C0.319513 1 0 0.77566 0 0.499949C0 0.224238 0.319514 0 0.712191 0L16.288 0C16.6806 0 17 0.224239 17 0.499949C17 0.77566 16.6806 1 16.288 1Z",
                  fill: "rgba(234,191,63,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.97%"
              bottom="78.23%"
              left="49.33%"
              right="28%"
              {...getOverrideProps(overrides, "Vector40291528")}
            ></Icon>
            <Icon
              width="27px"
              height="26px"
              viewBox={{ minX: 0, minY: 0, width: 27, height: 26 }}
              paths={[
                {
                  d: "M13.5 26C20.9558 26 27 20.1797 27 13C27 5.8203 20.9558 0 13.5 0C6.04416 0 0 5.8203 0 13C0 20.1797 6.04416 26 13.5 26Z",
                  fill: "rgba(234,191,63,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="4.03%"
              bottom="75%"
              left="0%"
              right="64%"
              {...getOverrideProps(overrides, "Vector40291529")}
            ></Icon>
            <Icon
              width="11px"
              height="12px"
              viewBox={{ minX: 0, minY: 0, width: 11, height: 12 }}
              paths={[
                {
                  d: "M9.8553 0.307506C8.08209 3.57272 6.30887 6.83796 4.53566 10.1032C3.40553 8.08388 2.28156 6.06101 1.14865 4.04329C0.757391 3.34644 -0.306856 3.97322 0.0853918 4.6718C1.39869 7.0108 2.69838 9.35757 4.01167 11.6966C4.23622 12.0965 4.8527 12.1058 5.07494 11.6966C7.02282 8.10971 8.97069 4.52286 10.9186 0.936014C11.3003 0.233174 10.2373 -0.395881 9.8553 0.307506Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="8.87%"
              bottom="81.45%"
              left="10.67%"
              right="74.67%"
              {...getOverrideProps(overrides, "Vector40291530")}
            ></Icon>
            <Icon
              width="10px"
              height="1px"
              viewBox={{ minX: 0, minY: 0, width: 10, height: 1 }}
              paths={[
                {
                  d: "M9.93328 0L0.0667148 0C0.0298694 0 0 0.023298 0 0.0520374L0 0.947963C0 0.976702 0.0298694 1 0.0667148 1L9.93328 1C9.97013 1 10 0.976702 10 0.947963L10 0.0520374C10 0.023298 9.97013 0 9.93328 0Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="2.42%"
              bottom="96.77%"
              left="28%"
              right="58.67%"
              {...getOverrideProps(overrides, "Vector40291531")}
            ></Icon>
            <Icon
              width="2px"
              height="2px"
              viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
              paths={[
                {
                  d: "M0.999997 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 0.999997 0C0.447712 0 0 0.447715 0 1C0 1.55228 0.447712 2 0.999997 2Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="1.61%"
              bottom="96.77%"
              left="81.33%"
              right="16%"
              {...getOverrideProps(overrides, "Vector40291532")}
            ></Icon>
            <Icon
              width="3px"
              height="2px"
              viewBox={{ minX: 0, minY: 0, width: 3, height: 2 }}
              paths={[
                {
                  d: "M1.5 2C2.32842 2 3 1.55228 3 1C3 0.447715 2.32842 0 1.5 0C0.671568 0 0 0.447715 0 1C0 1.55228 0.671568 2 1.5 2Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="1.61%"
              bottom="96.77%"
              left="84%"
              right="12%"
              {...getOverrideProps(overrides, "Vector40291533")}
            ></Icon>
            <Icon
              width="2px"
              height="2px"
              viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
              paths={[
                {
                  d: "M0.999997 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 0.999997 0C0.447712 0 0 0.447715 0 1C0 1.55228 0.447712 2 0.999997 2Z",
                  fill: "rgba(230,230,230,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="1.61%"
              bottom="96.77%"
              left="88%"
              right="9.33%"
              {...getOverrideProps(overrides, "Vector40291534")}
            ></Icon>
            <Icon
              width="42px"
              height="0px"
              viewBox={{ minX: 0, minY: 0, width: 42, height: 1 }}
              paths={[
                {
                  d: "M0 0C0 0 0.107715 0 0.241848 0L41.7582 0C41.8923 0 42 0 42 0C42 0 41.8923 0 41.7582 0L0.241848 0C0.107715 0 0 0 0 0Z",
                  fill: "rgba(63,61,86,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="25%"
              bottom="75%"
              left="33.33%"
              right="10.67%"
              {...getOverrideProps(overrides, "Vector40291535")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              width="34.86px"
              height="27.1px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="36.77%"
              bottom="41.37%"
              left="37.38%"
              right="16.13%"
              {...getOverrideProps(overrides, "Group40291536")}
            >
              <Icon
                width="26.27px"
                height="1.45px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 26.27202606201172,
                  height: 1.4534024000167847,
                }}
                paths={[
                  {
                    d: "M25.5293 1.4534L0.742852 1.4534C0.333268 1.4534 0 1.12734 0 0.726624C0 0.325907 0.33327 0 0.742852 0L25.5293 0C25.9389 0 26.272 0.325908 26.272 0.726627C26.272 1.12735 25.9389 1.4534 25.5293 1.4534Z",
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
                width="26.27px"
                height="1.45px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 26.27202606201172,
                  height: 1.4533993005752563,
                }}
                paths={[
                  {
                    d: "M25.5293 1.4534L0.742852 1.4534C0.333268 1.4534 0 1.12734 0 0.726627C0 0.32591 0.33327 0 0.742852 0L25.5293 0C25.9389 0 26.272 0.325908 26.272 0.726627C26.272 1.12735 25.9389 1.4534 25.5293 1.4534Z",
                    fill: "rgba(234,191,63,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="48.02%"
                bottom="46.62%"
                left="24.65%"
                right="0%"
                {...getOverrideProps(overrides, "Vector40291538")}
              ></Icon>
              <Icon
                width="26.27px"
                height="1.45px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 26.27202606201172,
                  height: 1.4533993005752563,
                }}
                paths={[
                  {
                    d: "M25.5293 1.4534L0.742852 1.4534C0.333268 1.4534 0 1.12734 0 0.726627C0 0.32591 0.33327 0 0.742852 0L25.5293 0C25.9389 0 26.272 0.325908 26.272 0.726627C26.272 1.12735 25.9389 1.4534 25.5293 1.4534Z",
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
                width="3.64px"
                height="3.56px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 3.6391823291778564,
                  height: 3.560421943664551,
                }}
                paths={[
                  {
                    d: "M1.81959 3.56042C2.82452 3.56042 3.63918 2.76339 3.63918 1.78021C3.63918 0.797028 2.82452 0 1.81959 0C0.814659 0 0 0.797028 0 1.78021C0 2.76339 0.814659 3.56042 1.81959 3.56042Z",
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
                width="3.13px"
                height="6.13px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 3.1337404251098633,
                  height: 6.131837368011475,
                }}
                paths={[
                  {
                    d: "M0 6.13184L0 5.73623C1.50497 5.73623 2.72939 4.53832 2.72939 3.06592C2.72939 1.59352 1.50497 0.395602 0 0.395602L0 0C1.72798 0 3.13374 1.37534 3.13374 3.06592C3.13374 4.7565 1.72798 6.13184 0 6.13184Z",
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
                width="3.64px"
                height="3.56px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 3.6391823291778564,
                  height: 3.560421943664551,
                }}
                paths={[
                  {
                    d: "M1.81959 3.56042C2.82452 3.56042 3.63918 2.76339 3.63918 1.78021C3.63918 0.797028 2.82452 0 1.81959 0C0.814659 0 0 0.797028 0 1.78021C0 2.76339 0.814659 3.56042 1.81959 3.56042Z",
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
                width="3.13px"
                height="6.13px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 3.1337404251098633,
                  height: 6.131837368011475,
                }}
                paths={[
                  {
                    d: "M0 6.13184L0 5.73623C1.50497 5.73623 2.72939 4.53842 2.72939 3.06592C2.72939 1.59352 1.50497 0.395602 0 0.395602L0 0C1.72798 0 3.13374 1.37534 3.13374 3.06592C3.13374 4.7565 1.72798 6.13184 0 6.13184Z",
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
                width="3.64px"
                height="3.56px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 3.6391823291778564,
                  height: 3.560421943664551,
                }}
                paths={[
                  {
                    d: "M1.81959 3.56042C2.82452 3.56042 3.63918 2.76339 3.63918 1.78021C3.63918 0.797028 2.82452 0 1.81959 0C0.814659 0 0 0.797028 0 1.78021C0 2.76339 0.814659 3.56042 1.81959 3.56042Z",
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
                width="3.13px"
                height="6.13px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 3.1337404251098633,
                  height: 6.131837368011475,
                }}
                paths={[
                  {
                    d: "M0 6.13184L0 5.73623C1.50497 5.73623 2.72939 4.53842 2.72939 3.06592C2.72939 1.59342 1.50497 0.395602 0 0.395602L0 0C1.72798 0 3.13374 1.37534 3.13374 3.06592C3.13374 4.7565 1.72798 6.13184 0 6.13184Z",
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
