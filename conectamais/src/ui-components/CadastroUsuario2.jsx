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
  CheckboxField,
  Icon,
  Image,
  PhoneNumberField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function CadastroUsuario2(props) {
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
      {...getOverrideProps(overrides, "CadastroUsuario2")}
      {...rest}
    >
      <View
        width="1519px"
        height="1117px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Cadastro")}
      >
        <View
          width="1519px"
          height="1117px"
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
          {...getOverrideProps(overrides, "Rectangle")}
        ></View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="1183.45px"
        height="847.86px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="147px"
        left="167px"
        {...getOverrideProps(overrides, "Group 457")}
      >
        <Text
          fontFamily="Poppins"
          fontSize="44px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="66px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="384px"
          height="117px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="374px"
          left="117px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Já estamos&#xA;quase lá"
          {...getOverrideProps(overrides, "J\u00E1 estamos quase l\u00E1")}
        ></Text>
        <View
          width="423.64px"
          height="139.66px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="165.45px"
          left="0px"
          padding="0px 0px 0px 0px"
          src={bancoImagens?.LogoAzulConecta}
          {...getOverrideProps(overrides, "image-removebg-preview (4) 4")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="672.44px"
          height="846.26px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="511.01px"
          transformOrigin="top left"
          transform="rotate(0.14deg)"
          {...getOverrideProps(overrides, "Group 470")}
        >
          <Icon
            width="672.44px"
            height="842.83px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 674.4487534020664,
              height: 844.4354007705206,
            }}
            paths={[
              {
                d: "M0 12C0 5.3726 5.37258 0 12 0L660.44 0C667.068 0 672.44 5.37258 672.44 12L672.44 830.834C672.44 837.461 667.068 842.834 660.44 842.834L12 842.834C5.37258 842.834 0 837.461 0 830.834L0 12Z",
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
            transformOrigin="top left"
            transform="rotate(0deg)"
            {...getOverrideProps(overrides, "Rectangle 1")}
          ></Icon>
          <PhoneNumberField
            width="332.59px"
            height="56.03px"
            label="Telefone"
            placeholder="Insira seu número"
            position="absolute"
            top="241.43px"
            left="calc(50% - 166.3px - 0.03px)"
            transformOrigin="top left"
            transform="rotate(0deg)"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "PhoneNumberField")}
          ></PhoneNumberField>
          <TextField
            width="332.59px"
            height="84.44px"
            label="Endereço"
            placeholder="CEP"
            position="absolute"
            top="134.11px"
            left="calc(50% - 166.3px - 0.29px)"
            transformOrigin="top left"
            transform="rotate(0deg)"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField")}
          ></TextField>
          <Text
            fontFamily="Poppins"
            fontSize="20px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="151.29px"
            height="24.46px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="77.37px"
            left="calc(50% - 75.65px - 1.07px)"
            transformOrigin="top left"
            transform="rotate(0deg)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Crie sua conta "
            {...getOverrideProps(overrides, "Crie sua conta")}
          ></Text>
          <CheckboxField
            width="388.53px"
            height="37.88px"
            label="Autorizo a Conecta+ a enviar comunicações sobre produtos, serviços."
            position="absolute"
            top="432.35px"
            left="146.44px"
            transformOrigin="top left"
            transform="rotate(0deg)"
            size="large"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, "CheckboxField40211601")}
          ></CheckboxField>
          <CheckboxField
            width="420.61px"
            height="25.11px"
            label="Li e aceito as Condições Legais e a Política de Privacidade.  "
            position="absolute"
            top="391.42px"
            left="114.31px"
            transformOrigin="top left"
            transform="rotate(0deg)"
            size="large"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, "CheckboxField40211592")}
          ></CheckboxField>
          <View
            padding="0px 0px 0px 0px"
            width="298.94px"
            height="229.7px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="616.56px"
            left="187.01px"
            transformOrigin="top left"
            transform="rotate(0deg)"
            {...getOverrideProps(overrides, "Group 459")}
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
              width="38.69px"
              height="11.37px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="28.68px"
              left="131.64px"
              transformOrigin="top left"
              transform="rotate(0deg)"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Pronto"
              {...getOverrideProps(overrides, "Pronto")}
            ></Text>
            <View
              padding="0px 0px 0px 0px"
              width="37.56px"
              height="33.83px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="4.64%"
              bottom="80.63%"
              left="50.41%"
              right="37.03%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Group39885793")}
            >
              <Icon
                width="37.56px"
                height="33.83px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 37.641909665762796,
                  height: 33.9197875458749,
                }}
                paths={[
                  {
                    d: "M23.8752 33.8303C23.8206 33.8303 23.766 33.8284 23.7112 33.8251C20.0972 33.6016 7.73112 31.918 0.345791 19.6278C-0.199759 18.7206 -0.0920302 17.5663 0.614131 16.7562C6.78169 11.9286 11.5995 6.7037 14.4432 0.898079C14.9568 0.309093 15.7274 -0.0128661 16.5074 0.000393916C17.3082 0.0186234 18.0461 0.38153 18.5322 0.996086C22.0384 5.43054 28.9608 13.2806 35.926 16.0328C36.7089 16.3424 37.2756 16.9707 37.481 17.7576C37.6849 18.5379 37.4963 19.3423 36.9637 19.9644L25.8853 32.9118C25.3872 33.4941 24.6453 33.8303 23.8752 33.8303Z",
                    fill: "rgba(230,230,230,1)",
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
                transformOrigin="top left"
                transform="rotate(0deg)"
                {...getOverrideProps(overrides, "Vector39885794")}
              ></Icon>
              <Icon
                width="32.8px"
                height="29.25px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 32.86928538918437,
                  height: 29.331218544867625,
                }}
                paths={[
                  {
                    d: "M0.192836 15.6461C0.00418226 15.863 -0.030254 16.1721 0.10724 16.4164C6.78837 28.2573 18.7331 29.1862 21.0597 29.252C21.2838 29.2643 21.4938 29.1673 21.636 29.0011L32.635 16.147C32.7907 15.9647 32.8387 15.7323 32.7671 15.5078C32.6948 15.2825 32.5172 15.1144 32.2796 15.0481C24.8094 12.9469 16.9715 3.21438 14.7473 0.281277C14.6172 0.109881 14.4162 0.00714151 14.1963 3.88042e-05C13.9703 -0.00208958 13.7644 0.0833711 13.6205 0.248134C10.4379 6.22058 5.98181 11.3661 0.192836 15.6461Z",
                    fill: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="5.58%"
                bottom="7.95%"
                left="7.2%"
                right="5.48%"
                transformOrigin="top left"
                transform="rotate(0deg)"
                {...getOverrideProps(overrides, "Vector39885795")}
              ></Icon>
              <Icon
                width="11.48px"
                height="11.25px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 11.502882418477384,
                  height: 11.274899260969505,
                }}
                paths={[
                  {
                    d: "M1.28727 11.0301L11.2574 1.24597C11.9389 0.577159 10.8712 -0.452158 10.1888 0.217499L0.218686 10.0016C-0.462853 10.6704 0.604881 11.6997 1.28727 11.0301Z",
                    fill: "rgba(230,230,230,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="27.43%"
                bottom="39.32%"
                left="19.03%"
                right="50.41%"
                transformOrigin="top left"
                transform="rotate(0deg)"
                {...getOverrideProps(overrides, "Vector39885796")}
              ></Icon>
              <Icon
                width="8.53px"
                height="9.41px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 8.552203768958861,
                  height: 9.42785964818404,
                }}
                paths={[
                  {
                    d: "M1.3103 9.21372C4.06192 6.84001 6.45307 4.09156 8.41105 1.07574C8.9279 0.279662 7.62096 -0.451281 7.10617 0.341637C5.21323 3.2573 2.9016 5.89067 0.241716 8.18525C-0.484015 8.81132 0.587622 9.83715 1.3103 9.21372Z",
                    fill: "rgba(230,230,230,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="40.94%"
                bottom="31.25%"
                left="35%"
                right="42.29%"
                transformOrigin="top left"
                transform="rotate(0deg)"
                {...getOverrideProps(overrides, "Vector39885797")}
              ></Icon>
              <Icon
                width="7.68px"
                height="10.2px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 7.700164434878388,
                  height: 10.22034541994617,
                }}
                paths={[
                  {
                    d: "M1.27129 9.9705C3.77656 7.2995 5.90909 4.3185 7.58801 1.10293C8.02355 0.268752 6.72036 -0.468582 6.28313 0.368825C4.661 3.47564 2.62376 6.36082 0.202703 8.94202C-0.447548 9.63529 0.617913 10.6671 1.27129 9.9705Z",
                    fill: "rgba(230,230,230,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="48.47%"
                bottom="21.37%"
                left="49.54%"
                right="30.02%"
                transformOrigin="top left"
                transform="rotate(0deg)"
                {...getOverrideProps(overrides, "Vector39885798")}
              ></Icon>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="37.56px"
              height="33.83px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="6.33%"
              bottom="78.94%"
              left="53.44%"
              right="33.99%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Group39885799")}
            >
              <Icon
                width="37.56px"
                height="33.83px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 37.641909665762796,
                  height: 33.9197875458749,
                }}
                paths={[
                  {
                    d: "M23.8752 33.8303C23.8206 33.8303 23.766 33.8284 23.7112 33.8251C20.0972 33.6016 7.73112 31.918 0.345791 19.6278C-0.199759 18.7206 -0.0920302 17.5663 0.614131 16.7562C6.47363 11.8649 10.8852 6.51624 14.4432 0.898079C14.9568 0.309093 15.7274 -0.0128661 16.5074 0.000393916C17.3082 0.0186234 18.0461 0.38153 18.5322 0.996086C22.0384 5.43054 28.9608 13.2806 35.926 16.0328C36.7089 16.3424 37.2756 16.9707 37.481 17.7576C37.6849 18.5379 37.4963 19.3423 36.9637 19.9644L25.8853 32.9118C25.3872 33.4941 24.6453 33.8303 23.8752 33.8303Z",
                    fill: "rgba(230,230,230,1)",
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
                transformOrigin="top left"
                transform="rotate(0deg)"
                {...getOverrideProps(overrides, "Vector39885800")}
              ></Icon>
              <Icon
                width="32.8px"
                height="29.25px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 32.86928538918437,
                  height: 29.331218544867625,
                }}
                paths={[
                  {
                    d: "M0.192836 15.6461C0.00418226 15.863 -0.030254 16.1721 0.10724 16.4164C6.78837 28.2573 18.7331 29.1862 21.0597 29.252C21.2838 29.2643 21.4938 29.1673 21.636 29.0011L32.635 16.147C32.7907 15.9647 32.8387 15.7323 32.7671 15.5078C32.6948 15.2825 32.5172 15.1144 32.2796 15.0481C24.8094 12.9469 16.9715 3.21438 14.7473 0.281277C14.6172 0.109881 14.4162 0.00714151 14.1963 3.88042e-05C13.9703 -0.00208958 13.7644 0.0833711 13.6205 0.248134C9.80794 6.34543 5.51919 11.7503 0.192836 15.6461Z",
                    fill: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="5.58%"
                bottom="7.95%"
                left="7.2%"
                right="5.48%"
                transformOrigin="top left"
                transform="rotate(0deg)"
                {...getOverrideProps(overrides, "Vector39885801")}
              ></Icon>
              <Icon
                width="11.48px"
                height="11.25px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 11.502882418477384,
                  height: 11.274899260969505,
                }}
                paths={[
                  {
                    d: "M1.28727 11.0301L11.2574 1.24597C11.9389 0.577159 10.8712 -0.452158 10.1888 0.217499L0.218686 10.0016C-0.462853 10.6704 0.604881 11.6997 1.28727 11.0301Z",
                    fill: "rgba(230,230,230,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="27.43%"
                bottom="39.32%"
                left="19.04%"
                right="50.4%"
                transformOrigin="top left"
                transform="rotate(0deg)"
                {...getOverrideProps(overrides, "Vector39885802")}
              ></Icon>
              <Icon
                width="8.53px"
                height="9.41px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 8.552203768958861,
                  height: 9.42785964818404,
                }}
                paths={[
                  {
                    d: "M1.3103 9.21372C4.06192 6.84001 6.45307 4.09156 8.41105 1.07574C8.9279 0.279662 7.62095 -0.451281 7.10617 0.341637C5.21323 3.2573 2.9016 5.89067 0.241716 8.18525C-0.484015 8.81132 0.587622 9.83715 1.3103 9.21372Z",
                    fill: "rgba(230,230,230,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="40.94%"
                bottom="31.25%"
                left="35%"
                right="42.29%"
                transformOrigin="top left"
                transform="rotate(0deg)"
                {...getOverrideProps(overrides, "Vector39885803")}
              ></Icon>
              <Icon
                width="7.68px"
                height="10.2px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 7.700166342227021,
                  height: 10.220345424495918,
                }}
                paths={[
                  {
                    d: "M1.27128 9.9705C3.77655 7.2995 5.90909 4.3185 7.58801 1.10293C8.02355 0.268752 6.72035 -0.468582 6.28313 0.368825C4.661 3.47564 2.62376 6.36082 0.202704 8.94202C-0.447548 9.63529 0.617906 10.6671 1.27128 9.9705Z",
                    fill: "rgba(230,230,230,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="48.47%"
                bottom="21.37%"
                left="49.54%"
                right="30.02%"
                transformOrigin="top left"
                transform="rotate(0deg)"
                {...getOverrideProps(overrides, "Vector39885804")}
              ></Icon>
            </View>
            <Icon
              width="8.82px"
              height="22.18px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.869719316469855,
                height: 22.198869786726846,
              }}
              paths={[
                {
                  d: "M8.81564 22.1779L2.8418 22.1773L0 0L8.81684 0.000591829L8.81564 22.1779Z",
                  fill: "rgba(255,182,182,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="87.46%"
              bottom="2.88%"
              left="77.82%"
              right="19.23%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Vector39885806")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              width="21.93px"
              height="31.56px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="83.95%"
              bottom="2.31%"
              left="92.67%"
              right="0%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Group39885808")}
            >
              <Icon
                width="19.58px"
                height="21.9px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 19.634738146523887,
                  height: 21.948582148593232,
                }}
                paths={[
                  {
                    d: "M19.5825 18.8897L14.4941 21.9019L0 4.44592L7.50992 0L19.5825 18.8897Z",
                    fill: "rgba(255,182,182,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="30.6%"
                left="0%"
                right="10.68%"
                transformOrigin="top left"
                transform="rotate(0deg)"
                {...getOverrideProps(overrides, "Vector39885809")}
              ></Icon>
              <Icon
                width="19.85px"
                height="15.83px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 19.885908975360508,
                  height: 15.877682882145109,
                }}
                paths={[
                  {
                    d: "M0.000124799 13.3736C0.00584219 13.7242 0.452042 14.6025 0.642922 14.9012C1.22965 15.8191 2.47846 16.1055 3.43225 15.5408L19.1896 6.21087C19.8402 5.82564 20.0432 5.00566 19.6429 4.37942L19.2393 3.74801C19.2393 3.74801 18.8059 1.38877 15.706 0C15.706 0 14.882 3.01248 10.068 1.90863L8.20955 0.896606L4.70987 9.14188L1.45047 11.6477C0.737372 12.1959 -0.0142014 12.4953 0.000124799 13.3736Z",
                    fill: "rgba(47,46,65,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="49.84%"
                bottom="0%"
                left="9.47%"
                right="0%"
                transformOrigin="top left"
                transform="rotate(0deg)"
                {...getOverrideProps(overrides, "Vector39885810")}
              ></Icon>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="40.4px"
              height="83.4px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="17.58%"
              bottom="46.12%"
              left="75.51%"
              right="10.98%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Group39885811")}
            >
              <Icon
                width="10.65px"
                height="21.04px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 10.704853449256916,
                  height: 21.067551350366557,
                }}
                paths={[
                  {
                    d: "M3.59531 16.6238C3.29961 15.3823 3.32215 14.1772 3.59947 13.1786L0 1.52931L5.86053 0L8.88083 11.9817C9.58114 12.7588 10.146 13.8307 10.4417 15.0722C11.1173 17.9083 10.1323 20.5548 8.24165 20.9832C6.35105 21.4117 4.27084 19.4599 3.59531 16.6238Z",
                    fill: "rgba(255,182,182,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="74.77%"
                bottom="0%"
                left="73.63%"
                right="0%"
                transformOrigin="top left"
                transform="rotate(0deg)"
                {...getOverrideProps(overrides, "Vector39885812")}
              ></Icon>
              <Icon
                width="37.85px"
                height="71.22px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 38.02477586574969,
                  height: 71.30761489568249,
                }}
                paths={[
                  {
                    d: "M1.53728e-05 1.33347C1.53728e-05 1.33347 9.4447 -2.62313 14.7183 3.09447C19.5183 8.29865 29.2626 23.9588 28.262 25.4824L37.855 69.1093L30.7443 71.2175L11.882 21.0367L1.53728e-05 1.33347Z",
                    fill: "rgba(211,152,74,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="14.61%"
                left="0%"
                right="6.3%"
                transformOrigin="top left"
                transform="rotate(0deg)"
                {...getOverrideProps(overrides, "Vector39885813")}
              ></Icon>
            </View>
            <Icon
              width="29.2px"
              height="105.85px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 29.449723657526192,
                height: 105.91602058060789,
              }}
              paths={[
                {
                  d: "M0 0.466738L4.86622 55.1082L16.6263 105.847L29.1973 104.676L23.1145 49.2537L26.8377 0L0 0.466738Z",
                  fill: "rgba(47,46,65,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="46.1%"
              bottom="7.82%"
              left="72.03%"
              right="18.21%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Vector39885814")}
            ></Icon>
            <Icon
              width="75.51px"
              height="98.61px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 75.74766169217764,
                height: 98.78888801250014,
              }}
              paths={[
                {
                  d: "M1.53728e-05 12.2365L30.3093 58.6762L64.8921 98.609L75.5126 92.0306L43.7505 45.4328C38.8893 24.9069 33.5059 5.90638 23.6401 0L1.53728e-05 12.2365Z",
                  fill: "rgba(47,46,65,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="46.14%"
              bottom="10.94%"
              left="72.36%"
              right="2.38%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Vector39885815")}
            ></Icon>
            <Icon
              width="39.73px"
              height="90.78px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 39.94906591401377,
                height: 90.86972397827367,
              }}
              paths={[
                {
                  d: "M6.08934 90.7752C4.66767 90.7752 3.29076 90.2932 2.16867 89.3775C0.662385 88.1479 -0.122229 86.3557 0.0155119 84.4599L2.65961 60.0448L1.6497 33.3839L1.65609 33.355L4.79509 18.867C4.82608 18.4066 4.92644 17.9192 5.08828 17.4511L9.72471 4.03462C10.5585 1.62138 12.8937 0 15.5364 0L19.6361 0C21.6889 0 23.5941 0.981255 24.7325 2.62512L28.3216 7.8067C28.5602 8.1509 28.7614 8.52044 28.9198 8.90513L36.8433 28.1521C37.0946 28.7631 37.2378 29.4058 37.2683 30.0623L39.7265 83.4782C39.8086 85.2515 39.0673 86.9487 37.6933 88.1342C36.3277 89.3131 34.5056 89.8344 32.6988 89.566C22.352 88.0281 13.2966 89.2857 7.52136 90.6118C7.04419 90.7212 6.56405 90.7752 6.08934 90.7752Z",
                  fill: "rgba(211,152,74,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="12.04%"
              bottom="48.44%"
              left="70.91%"
              right="15.79%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Vector39885816")}
            ></Icon>
            <Icon
              width="48.14px"
              height="48.59px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 48.2548677901068,
                height: 48.706556626194015,
              }}
              paths={[
                {
                  d: "M6.89381 37.4684L0 32.3946C0 32.3946 3.24415 4.68355 11.76 4.68355C20.2759 4.68355 24.7366 0 24.7366 0C24.7366 0 55.1505 40.9811 46.6346 45.6646C38.1187 50.3482 26.3587 48.0064 26.3587 48.0064L22.2166 12.9977C21.7077 11.1471 19.0614 10.9467 18.258 12.6979L6.89381 37.4684Z",
                  fill: "rgba(63,61,86,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="12.15%"
              bottom="66.7%"
              left="70.26%"
              right="13.64%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Vector39885817")}
            ></Icon>
            <Icon
              width="23.56px"
              height="22.71px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 26.317420736551867,
                height: 25.305006233928907,
              }}
              paths={[
                {
                  d: "M11.78 22.7057C18.2859 22.7057 23.56 17.6229 23.56 11.3529C23.56 5.08285 18.2859 0 11.78 0C5.27408 0 0 5.08285 0 11.3529C0 17.6229 5.27408 22.7057 11.78 22.7057Z",
                  fill: "rgba(255,182,182,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="2.25%"
              bottom="87.86%"
              left="72%"
              right="20.12%"
              transformOrigin="top left"
              transform="rotate(-6.93deg)"
              {...getOverrideProps(overrides, "Vector39885818")}
            ></Icon>
            <Icon
              width="28.44px"
              height="23.46px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 31.258253384774434,
                height: 26.628747498883968,
              }}
              paths={[
                {
                  d: "M24.3966 22.0992C23.334 22.4816 21.7048 23.0761 20.6422 23.4584C19.6512 21.5545 20.8654 20.5665 20.9914 18.4399C21.0335 17.7302 21.1397 17.0198 21.0787 16.3114C21.0177 15.603 20.7651 14.8758 20.2106 14.407C19.3624 13.69 17.9498 13.8066 17.1286 14.5524C16.3075 15.2981 16.0734 16.5304 16.409 17.5685C13.1791 16.2229 11.0923 12.6927 11.5385 9.32886C10.5738 8.96445 9.58507 8.59511 8.54941 8.56722C7.51374 8.53934 6.40413 8.92023 5.85222 9.76529C5.46523 10.3578 5.38798 11.11 4.95369 11.6713C4.24802 12.5833 2.72296 12.654 1.78583 11.9622C0.848695 11.2704 0.490144 10.0132 0.690015 8.89195C0.889885 7.77072 -0.564359 5.48258 0.249712 4.65872C0.805053 4.09671 3.56137 4.89305 4.18093 4.39726C4.74616 3.94495 5.31355 3.49113 5.93658 3.11589C6.72742 2.63958 7.6032 2.29464 8.51383 2.10082C9.3752 1.91748 10.2605 1.86932 11.1413 1.82175C12.0355 1.77345 13.2724 0.0575541 14.1666 0.0092562C16.7992 -0.132935 19.152 1.39913 21.6778 2.12854C24.2036 2.85795 25.7926 4.95253 27.1908 7.10709C29.1823 10.1761 28.5054 13.5388 27.134 16.4733C26.795 17.1987 27.9325 17.961 27.7641 18.7398C27.6076 19.4637 26.9038 19.988 26.7393 20.7103C26.5986 21.3279 25.7669 20.6124 25.5685 21.2151C25.3973 21.7352 24.8927 22.1024 24.3533 22.2684C23.814 22.4344 23.2365 22.431 22.6704 22.4261",
                  fill: "rgba(47,46,65,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="1.49%"
              bottom="88.29%"
              left="70.81%"
              right="19.68%"
              transformOrigin="top left"
              transform="rotate(-6.93deg)"
              {...getOverrideProps(overrides, "Vector39885819")}
            ></Icon>
            <Icon
              width="7px"
              height="9.66px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 7.0231588567985455,
                height: 9.67491275333714,
              }}
              paths={[
                {
                  d: "M3.34385 0L3.75933 0.291139L4.8067 1.02504C7.95564 3.23157 7.66287 7.83762 4.25794 9.65824L0 3.11234",
                  fill: "rgba(63,61,86,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="12.02%"
              bottom="83.77%"
              left="77.52%"
              right="20.14%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Vector39885820")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              width="66.07px"
              height="32.7px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="14.81%"
              bottom="70.96%"
              left="56.54%"
              right="21.36%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Group39885821")}
            >
              <Icon
                width="19.54px"
                height="14.15px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 19.57532119564712,
                  height: 14.192388915007086,
                }}
                paths={[
                  {
                    d: "M6.61686 1.18664C7.67989 1.8618 8.49632 2.71207 8.9929 3.57949L19.5416 9.39568L16.5193 14.1458L6.14404 7.73443C5.12012 7.63612 3.9868 7.24802 2.92378 6.57285C0.495317 5.03044 -0.646584 2.57434 0.373227 1.08698C1.39304 -0.400388 4.18841 -0.355761 6.61686 1.18664Z",
                    fill: "rgba(255,182,182,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="18.11%"
                bottom="38.64%"
                left="0%"
                right="70.42%"
                transformOrigin="top left"
                transform="rotate(0deg)"
                {...getOverrideProps(overrides, "Vector39885822")}
              ></Icon>
              <Icon
                width="54.83px"
                height="32.7px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 54.90738493527897,
                  height: 32.834745007302445,
                }}
                paths={[
                  {
                    d: "M45.0141 0.97697C51.7409 -2.99365 58.5009 6.09928 52.5198 11.0535L52.4994 11.0704L28.6008 32.704L0 19.1107L2.82807 11.7712L24.9867 20.2194L41.6088 3.61127C42.7658 2.49626 43.9043 1.63209 45.0141 0.97697Z",
                    fill: "rgba(211,152,74,1)",
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
                left="17.01%"
                right="0%"
                transformOrigin="top left"
                transform="rotate(0deg)"
                {...getOverrideProps(overrides, "Vector39885823")}
              ></Icon>
            </View>
            <Icon
              width="12.56px"
              height="11.83px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 12.584574867796618,
                height: 11.860336605176599,
              }}
              paths={[
                {
                  d: "M6.27819 11.8304C9.74554 11.8304 12.5564 9.18209 12.5564 5.91521C12.5564 2.64833 9.74554 0 6.27819 0C2.81085 0 0 2.64833 0 5.91521C0 9.18209 2.81085 11.8304 6.27819 11.8304Z",
                  fill: "rgba(211,152,74,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="6.33%"
              bottom="88.52%"
              left="56.86%"
              right="38.94%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Vector39885824")}
            ></Icon>
            <Icon
              width="12.35px"
              height="24.66px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 19.552632424645708,
                height: 26.72270832630511,
              }}
              paths={[
                {
                  d: "M0 0.00125393C2.06597 -0.0472847 3.94892 1.31952 4.90216 3.02699C5.8554 4.73445 6.02834 6.72532 5.98041 8.64922C5.93249 10.5731 5.6827 12.5 5.86475 14.417C6.25206 18.495 8.70329 22.3618 12.3505 24.6479C10.9759 24.7472 9.62678 24.1542 8.58824 23.3098C7.5497 22.4653 6.77233 21.3834 6.00762 20.3151C5.3605 19.4111 4.7098 18.501 4.24523 17.5044C3.56462 16.0443 3.30596 14.449 3.06134 12.8737C2.45906 8.99518 1.90371 5.11032 1.3954 1.22014",
                  fill: "rgba(47,46,65,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="7.38%"
              bottom="81.89%"
              left="17.77%"
              right="78.09%"
              transformOrigin="top left"
              transform="rotate(15.26deg)"
              {...getOverrideProps(overrides, "Vector39885826")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              width="26px"
              height="28.72px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="85.98%"
              bottom="1.52%"
              left="3.31%"
              right="88%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Group39885827")}
            >
              <Icon
                width="10.36px"
                height="24.86px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 10.41507252305746,
                  height: 24.880172408601993,
                }}
                paths={[
                  {
                    d: "M0.00140995 24.8555L7.01799 24.8549L10.3558 0L0 0.000667448L0.00140995 24.8555Z",
                    fill: "rgba(255,182,182,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="13.45%"
                left="6.24%"
                right="53.92%"
                transformOrigin="top left"
                transform="rotate(0deg)"
                {...getOverrideProps(overrides, "Vector39885828")}
              ></Icon>
              <Icon
                width="26px"
                height="11.28px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 26.02342496550409,
                  height: 11.340714047739766,
                }}
                paths={[
                  {
                    d: "M25.6629 7.27019C25.8813 7.6081 25.9966 8.69872 25.9966 9.09168C25.9966 10.2995 24.9304 11.2787 23.6152 11.2787L1.88564 11.2787C0.988401 11.2787 0.261005 10.6108 0.261005 9.78672L0.261005 8.95589C0.261005 8.95589 -0.813939 6.45885 1.39917 3.38112C1.39917 3.38112 4.14976 5.79103 8.25986 2.01645L9.47189 0L18.2453 5.89265L23.1083 6.44238C24.1722 6.56263 25.1156 6.42373 25.6629 7.27019Z",
                    fill: "rgba(47,46,65,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="60.73%"
                bottom="0%"
                left="0%"
                right="0%"
                transformOrigin="top left"
                transform="rotate(0deg)"
                {...getOverrideProps(overrides, "Vector39885829")}
              ></Icon>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="29.42px"
              height="35.15px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="84.74%"
              bottom="-0.04%"
              left="13.69%"
              right="76.47%"
              transformOrigin="top left"
              transform="rotate(-3.75deg)"
              {...getOverrideProps(overrides, "Group39885830")}
            >
              <Icon
                width="16.52px"
                height="25.6px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 22.73579365920159,
                  height: 28.82171905581299,
                }}
                paths={[
                  {
                    d: "M0 24.0922L6.86515 25.5991L16.5219 2.2243L6.38965 0L0 24.0922Z",
                    fill: "rgba(255,182,182,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="8.76%"
                bottom="18.42%"
                left="0%"
                right="43.84%"
                transformOrigin="top left"
                transform="rotate(-10.74deg)"
                {...getOverrideProps(overrides, "Vector39885831")}
              ></Icon>
              <Icon
                width="25.5px"
                height="13.96px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 28.111516429911717,
                  height: 19.218985017625982,
                }}
                paths={[
                  {
                    d: "M25.4516 10.4681C25.578 10.8405 25.4109 11.9165 25.3103 12.2953C25.0008 13.4597 23.7107 14.1758 22.4286 13.8948L1.24728 9.25173C0.372674 9.06001 -0.165256 8.26064 0.04585 7.46627L0.258699 6.66536C0.258699 6.66536 -0.149424 4.02851 2.79631 1.53445C2.79631 1.53445 4.86014 4.44535 9.83353 1.68487L11.5316 0L18.5741 7.55522L23.1736 9.12426C24.1798 9.46752 25.135 9.53516 25.4516 10.4681Z",
                    fill: "rgba(47,46,65,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="60.85%"
                bottom="-0.55%"
                left="6.54%"
                right="6.79%"
                transformOrigin="top left"
                transform="rotate(-9.16deg)"
                {...getOverrideProps(overrides, "Vector39885832")}
              ></Icon>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="47.68px"
              height="46.5px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="35.78%"
              bottom="43.98%"
              left="14.71%"
              right="69.34%"
              transformOrigin="top left"
              transform="rotate(-84.38deg)"
              {...getOverrideProps(overrides, "Group39885833")}
            >
              <Icon
                width="22.66px"
                height="21.22px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 23.318126039215713,
                  height: 24.449259668157538,
                }}
                paths={[
                  {
                    d: "M14.539 19.0752C13.3432 18.0103 12.4656 16.737 11.975 15.4819L0 6.12678L4.22064 0L15.9136 10.1495C17.1334 10.4176 18.449 11.0977 19.6448 12.1626C22.3766 14.5955 23.4481 18.1152 22.0382 20.0241C20.6282 21.933 17.2707 21.5081 14.539 19.0752Z",
                    fill: "rgba(255,182,182,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="54.37%"
                bottom="0%"
                left="52.47%"
                right="0%"
                transformOrigin="top left"
                transform="rotate(-0.22deg)"
                {...getOverrideProps(overrides, "Vector39885834")}
              ></Icon>
              <Icon
                width="37.12px"
                height="40.21px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 43.62519184359553,
                  height: 40.53595339875483,
                }}
                paths={[
                  {
                    d: "M37.1168 30.5358L36.5577 31.7914L33.6586 38.2898L32.8012 40.2076L24.3677 31.8914L17.5863 25.2067L1.64589 9.49173C0.540265 8.40177 0 6.92201 0 5.44917C0 3.68659 0.772693 1.9378 2.26465 0.875415C3.1881 0.216591 4.28429 -0.0834943 5.38049 0.020001C7.96866 0.264886 13.1826 0.789184 18.7139 1.51353L20.6173 7.56359L19.6845 12.9997L17.1466 12.1753L19.4583 14.3035L37.1168 30.5358Z",
                    fill: "rgba(211,152,74,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0.3%"
                bottom="13.23%"
                left="0.37%"
                right="21.78%"
                transformOrigin="top left"
                transform="rotate(-0.22deg)"
                {...getOverrideProps(overrides, "Vector39885835")}
              ></Icon>
            </View>
            <Icon
              width="33.5px"
              height="25.53px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 33.56578360986896,
                height: 25.612399501363143,
              }}
              paths={[
                {
                  d: "M1.45355e-05 5.36478C1.34449 5.37209 4.16428 22.098 2.06175 24.6149C0.336961 26.6796 31.9465 24.6149 31.9465 24.6149C28.9749 24.0599 30.3118 6.19086 33.505 5.36478L14.4323 0L1.45355e-05 5.36478Z",
                  fill: "rgba(255,182,182,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="32.41%"
              bottom="56.47%"
              left="8.33%"
              right="80.46%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Vector39885836")}
            ></Icon>
            <Icon
              width="60.14px"
              height="105.25px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 60.38854450974759,
                height: 105.39330460062729,
              }}
              paths={[
                {
                  d: "M44.6313 6.67448e-06L16.5295 6.67448e-06C16.5295 6.67448e-06 4.81078 17.0886 4.81078 50.2241L0 103.556L12.0269 104.187L31.4053 31.8919L42.0548 67.3849L34.7063 105.25L46.3517 105.25L60.1376 62.5531L57.3857 40.1256C57.3857 40.1256 54.5153 9.30645 44.6313 6.67448e-06Z",
                  fill: "rgba(47,46,65,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="42.15%"
              bottom="12.03%"
              left="3.62%"
              right="76.27%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Vector39885837")}
            ></Icon>
            <Icon
              width="42.61px"
              height="44.87px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 42.71666605913924,
                height: 44.97628616570728,
              }}
              paths={[
                {
                  d: "M42.6097 23.6682L41.5892 28.6417L41.3417 29.8345L39.2937 39.8099L36.5161 43.5625C36.5161 43.5625 16.7397 37.9321 7.4618 44.8748L0 22.7215L7.90342 6.94267L14.0887 3.78691L15.1196 0L28.2221 0L30.2392 3.78691L36.0808 6.31151L40.5273 18.133L42.6097 23.6682Z",
                  fill: "rgba(211,152,74,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="17.85%"
              bottom="62.61%"
              left="6.49%"
              right="79.26%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Vector39885838")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              width="46.61px"
              height="47.38px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="16.76%"
              bottom="62.61%"
              left="4.55%"
              right="79.86%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Group39885839")}
            >
              <Icon
                width="21.26px"
                height="22.66px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 21.312678257003427,
                  height: 22.714848408909347,
                }}
                paths={[
                  {
                    d: "M19.0821 8.16133C18.0113 9.35414 16.736 10.226 15.482 10.7094L6.0631 22.6642L0 18.3818L10.2073 6.71591C10.4849 5.49322 11.1736 4.17721 12.2443 2.9844C14.6905 0.259429 18.2042 -0.790671 20.0924 0.6389C21.9806 2.06848 21.5282 5.43637 19.0821 8.16133Z",
                    fill: "rgba(255,182,182,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="52.17%"
                left="54.39%"
                right="0%"
                transformOrigin="top left"
                transform="rotate(0deg)"
                {...getOverrideProps(overrides, "Vector39885840")}
              ></Icon>
              <Icon
                width="40.3px"
                height="39.97px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 40.39349750220572,
                  height: 40.0704793423929,
                }}
                paths={[
                  {
                    d: "M19.0478 2.23836C19.0478 2.23836 9.07301 -2.79795 5.83444 2.23836C3.07126 6.53539 0.669563 28.2472 0.0240146 34.5288C-0.0892972 35.6313 0.200531 36.7337 0.847961 37.6681C2.76532 40.4351 7.02123 40.7737 9.42816 38.3507L40.2983 7.27467L30.7013 2.8679L14.2493 18.6064L19.0478 2.23836Z",
                    fill: "rgba(211,152,74,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="15.64%"
                bottom="0%"
                left="0%"
                right="13.55%"
                transformOrigin="top left"
                transform="rotate(0deg)"
                {...getOverrideProps(overrides, "Vector39885841")}
              ></Icon>
            </View>
            <Icon
              width="24.92px"
              height="23.21px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 31.226575842301827,
                height: 28.683781834497495,
              }}
              paths={[
                {
                  d: "M12.4625 23.2098C19.3453 23.2098 24.925 18.0141 24.925 11.6049C24.925 5.1957 19.3453 0 12.4625 0C5.57965 0 0 5.1957 0 11.6049C0 18.0141 5.57965 23.2098 12.4625 23.2098Z",
                  fill: "rgba(255,182,182,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="5.47%"
              bottom="84.42%"
              left="11.34%"
              right="80.32%"
              transformOrigin="top left"
              transform="rotate(15.26deg)"
              {...getOverrideProps(overrides, "Vector39885842")}
            ></Icon>
            <Icon
              width="46.35px"
              height="49.25px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 59.95450429800985,
                height: 59.1245668873903,
              }}
              paths={[
                {
                  d: "M43.1808 10.6312C41.2376 11.8528 39.9945 13.9 39.6786 16.9508C38.458 16.0482 38.2772 14.4064 38.7416 12.3058C37.8927 14.456 31.0037 25.399 30.5493 28.8585C30.2606 31.062 31.2072 33.2831 32.6601 35.0415C34.0184 36.6809 35.7884 37.9677 37.601 39.1753C34.1935 38.0162 31.3539 35.4646 30.005 32.3268C28.0552 27.7964 29.2147 22.7548 30.7481 18.0085C30.3884 18.6387 29.8725 19.7889 29.2762 20.2384C28.5095 20.8157 27.6009 20.635 26.9856 21.3534C26.2379 22.226 26.0959 23.4467 26.3278 24.544C26.5644 25.6414 27.1323 26.6462 27.6908 27.6333C19.7892 26.2499 17.44 17.8408 21.051 12.1119C18.7413 15.9724 18.2397 23.7464 21.1787 27.2103C22.8256 29.1537 25.2109 30.6698 26.0344 33.0231C26.6117 34.6757 26.2947 36.5178 25.4996 38.0911C24.7045 39.6644 23.4598 41.0042 22.1441 42.2381C21.6046 42.7449 21.0509 43.2341 20.4735 43.7101C19.8355 43.105 18.7527 43.3912 18.5171 44.2103C18.3861 44.6654 18.1795 45.1345 17.9179 45.6139C15.5797 46.1081 12.4222 45.4221 11.9405 48.4828C11.812 49.2991 10.2273 48.9368 9.34701 49.069C9.5841 48.4544 8.81829 47.9105 8.25837 48.3036C7.52671 48.8173 6.74759 49.1184 5.93001 49.2453C3.84766 49.1395 1.80788 48.6459 0 47.6852C5.76438 44.3403 10.8216 45.3055 13.0743 39.3384C13.4272 38.405 13.5408 36.458 13.5345 34.2678C13.5203 29.3021 12.2661 24.4277 10.1063 19.8875C9.84278 19.3336 9.64201 18.7984 9.55524 18.3302C8.92579 14.95 9.90545 10.305 11.4956 8.11917C13.0858 5.9377 15.8355 4.52745 18.6704 4.45695C20.0854 4.41727 20.9278 4.99459 22.1772 4.37322C23.5119 3.70776 23.8242 4.58033 24.7281 3.45214C26.342 1.43814 29.0917 0.398099 31.7893 0.309955C34.4869 0.22181 35.9966 -0.479091 38.4481 0.57419C39.9957 1.23965 41.7781 4.96752 43.4837 4.99022C47.0145 5.03724 47.6918 7.79516 43.1808 10.6312Z",
                  fill: "rgba(47,46,65,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0.86%"
              bottom="77.7%"
              left="5.07%"
              right="79.43%"
              transformOrigin="top left"
              transform="rotate(15.26deg)"
              {...getOverrideProps(overrides, "Vector39885843")}
            ></Icon>
            <Icon
              width="0.4px"
              height="0.26px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 0.3959227842860855,
                height: 0.259034301318934,
              }}
              paths={[
                {
                  d: "M0.395308 0.258092C0.261958 0.170604 0.13335 0.0874925 0 0C0.104772 0.0393808 0.209574 0.0743788 0.314345 0.104976L0.395308 0.258092Z",
                  fill: "rgba(47,46,65,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="21.41%"
              bottom="78.48%"
              left="14.56%"
              right="85.31%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Vector39885844")}
            ></Icon>
            <Icon
              width="32.84px"
              height="41px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 32.93439510366443,
                height: 41.078437179858156,
              }}
              paths={[]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="40.44%"
              bottom="41.71%"
              left="24.99%"
              right="64.02%"
              transformOrigin="top left"
              transform="rotate(0deg)"
              {...getOverrideProps(overrides, "Vector39885845")}
            ></Icon>
            <Icon
              width="3.57px"
              height="8.29px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 6.016208587752772,
                height: 8.831571060411534,
              }}
              paths={[
                {
                  d: "M0.904012 8.29131L0 8.0305C0.134942 5.07714 0.992345 2.3884 2.66975 0L3.57376 0.260806L0.904012 8.29131Z",
                  fill: "rgba(211,152,74,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="2.33%"
              bottom="94.06%"
              left="12.6%"
              right="86.2%"
              transformOrigin="top left"
              transform="rotate(15.26deg)"
              {...getOverrideProps(overrides, "Vector39885846")}
            ></Icon>
            <Icon
              width="7.71px"
              height="5.85px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 9.247850503794325,
                height: 7.612055484124994,
              }}
              paths={[
                {
                  d: "M7.70967 5.15775L7.12884 5.85355L0 0.695799L0.580823 0C3.72794 1.03462 6.02468 2.82451 7.70967 5.15775Z",
                  fill: "rgba(211,152,74,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="2.43%"
              bottom="95.03%"
              left="10.19%"
              right="87.23%"
              transformOrigin="top left"
              transform="rotate(15.26deg)"
              {...getOverrideProps(overrides, "Vector39885847")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              width="26.57px"
              height="32.41px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="26.87%"
              bottom="59.02%"
              left="28.75%"
              right="62.36%"
              transformOrigin="top left"
              transform="rotate(-130.9deg)"
              {...getOverrideProps(overrides, "Group39885848")}
            >
              <Icon
                width="26.54px"
                height="32.39px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 43.50166224397253,
                  height: 39.177237234938275,
                }}
                paths={[
                  {
                    d: "M16.8717 32.3909C16.8331 32.3909 16.7945 32.3891 16.7558 32.3859C14.2019 32.172 5.46327 30.5599 0.244355 18.7927C-0.141164 17.9241 -0.0650308 16.819 0.433985 16.0433L10.2065 0.85987C10.5694 0.295943 11.1139 -0.0123187 11.6651 0.000377155C12.231 0.017831 12.9574 0.236641 13.0959 0.953707C14.2217 6.78061 19.0704 14.347 25.3875 15.3507C25.9812 15.445 26.3412 16.2487 26.4863 17.0021C26.6304 17.7492 26.4971 18.5194 26.1208 19.115L18.2921 31.5115C17.9401 32.069 17.4159 32.3909 16.8717 32.3909Z",
                    fill: "rgba(230,230,230,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0.06%"
                left="0%"
                right="0.08%"
                transformOrigin="top left"
                transform="rotate(0.04deg)"
                {...getOverrideProps(overrides, "Vector39885849")}
              ></Icon>
              <Icon
                width="23.18px"
                height="28.01px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 37.76469154970982,
                  height: 34.04915830776554,
                }}
                paths={[
                  {
                    d: "M0.136263 14.9809C0.00294467 15.1885 -0.02138 15.4845 0.0757849 15.7184C4.79722 27.0558 13.2384 27.9453 14.8825 28.0083C15.0409 28.0201 15.1893 27.9271 15.2898 27.768L23.0626 15.4605C23.1726 15.2859 23.2065 15.0634 23.1559 14.8485C23.1048 14.6327 22.986 14.419 22.8114 14.4083C16.0918 13.9972 10.6945 4.52124 10.4216 0.269317C10.4086 0.06679 10.1877 0.00683787 10.0323 3.71548e-05C9.87254 -0.00200074 9.72705 0.0798254 9.62536 0.237583L0.136263 14.9809Z",
                    fill: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="5.58%"
                bottom="7.99%"
                left="7.22%"
                right="5.53%"
                transformOrigin="top left"
                transform="rotate(0.04deg)"
                {...getOverrideProps(overrides, "Vector39885850")}
              ></Icon>
              <Icon
                width="8.11px"
                height="10.77px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 13.99295935768896,
                  height: 12.480032890624443,
                }}
                paths={[
                  {
                    d: "M0.909421 10.5581L7.95307 1.19265C8.43457 0.552461 7.68024 -0.432809 7.19815 0.208191L0.154497 9.57359C-0.326994 10.2138 0.427332 11.1991 0.909421 10.5581Z",
                    fill: "rgba(230,230,230,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="27.47%"
                bottom="39.31%"
                left="18.95%"
                right="50.53%"
                transformOrigin="top left"
                transform="rotate(0.04deg)"
                {...getOverrideProps(overrides, "Vector39885851")}
              ></Icon>
              <Icon
                width="6.02px"
                height="9px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 11.207330043958791,
                  height: 9.862491358674106,
                }}
                paths={[
                  {
                    d: "M0.925369 8.81632C2.86862 6.54497 4.55731 3.91509 5.94007 1.02934C6.30508 0.267604 5.38209 -0.431818 5.01853 0.326901C3.6817 3.11681 2.04917 5.6366 0.170706 7.83222C-0.341822 8.43129 0.415001 9.41286 0.925369 8.81632Z",
                    fill: "rgba(230,230,230,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="40.92%"
                bottom="31.3%"
                left="34.99%"
                right="42.33%"
                transformOrigin="top left"
                transform="rotate(0.04deg)"
                {...getOverrideProps(overrides, "Vector39885852")}
              ></Icon>
              <Icon
                width="5.42px"
                height="9.76px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 11.42257579966099,
                  height: 9.847197581410455,
                }}
                paths={[
                  {
                    d: "M0.897308 9.53529C2.66561 6.98089 4.17082 4.13 5.35585 1.05479C5.66327 0.257021 4.74344 -0.448129 4.43482 0.352726C3.28987 3.32393 1.85193 6.08317 0.143073 8.55172C-0.315894 9.21473 0.436147 10.2015 0.897308 9.53529Z",
                    fill: "rgba(230,230,230,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="48.4%"
                bottom="21.5%"
                left="49.61%"
                right="30%"
                transformOrigin="top left"
                transform="rotate(0.04deg)"
                {...getOverrideProps(overrides, "Vector39885853")}
              ></Icon>
            </View>
          </View>
          <Icon
            width="10.69px"
            height="11.84px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 10.721618284347642,
              height: 11.863027764483377,
            }}
            paths={[
              {
                d: "M10.6934 5.91878C10.6934 9.18763 8.29961 11.8376 5.3467 11.8376C2.3938 11.8376 0 9.18763 0 5.91878C0 2.64993 2.3938 0 5.3467 0C8.29961 0 10.6934 2.64993 10.6934 5.91878Z",
                fill: "rgba(242,242,242,0.9)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="22.96px"
            left="323.04px"
            transformOrigin="top left"
            transform="rotate(0deg)"
            {...getOverrideProps(overrides, "Ellipse 10039885854")}
          ></Icon>
          <Icon
            width="10.69px"
            height="11.84px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 10.721618284347642,
              height: 11.863027764483377,
            }}
            paths={[
              {
                d: "M10.6934 5.91878C10.6934 9.18763 8.29961 11.8376 5.3467 11.8376C2.3938 11.8376 0 9.18763 0 5.91878C0 2.64993 2.3938 0 5.3467 0C8.29961 0 10.6934 2.64993 10.6934 5.91878Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="22.95px"
            left="344.43px"
            transformOrigin="top left"
            transform="rotate(0deg)"
            {...getOverrideProps(overrides, "Ellipse 10039885855")}
          ></Icon>
          <Button
            width="119.05px"
            height="43.4px"
            position="absolute"
            borderRadius="10px"
            top="507.43px"
            left="373.4px"
            transformOrigin="top left"
            transform="rotate(0deg)"
            backgroundColor="rgba(0,0,0,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Cadastrar-se"
            {...getOverrideProps(overrides, "Button39885858")}
          ></Button>
          <Button
            width="119.05px"
            height="43.4px"
            position="absolute"
            border="1px SOLID rgba(0,0,0,1)"
            borderRadius="10px"
            top="506.5px"
            left="171.52px"
            transformOrigin="top left"
            transform="rotate(0deg)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Voltar"
            {...getOverrideProps(overrides, "Button39885859")}
          ></Button>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="77.25px"
            height="18.94px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="calc(50% - 9.47px - -103.36px)"
            left="398.93px"
            transformOrigin="top left"
            transform="rotate(0deg)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Continuar"
            {...getOverrideProps(overrides, "label")}
          ></Text>
        </View>
      </View>
      <Image
        width="20.41%"
        height="13.43%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="28.47%"
        bottom="58.1%"
        left="22.12%"
        right="57.47%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(
          overrides,
          "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview"
        )}
      ></Image>
    </View>
  );
}
