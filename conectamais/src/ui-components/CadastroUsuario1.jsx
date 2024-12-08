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
export default function CadastroUsuario1(props) {
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
      {...getOverrideProps(overrides, "CadastroUsuario1")}
      {...rest}
    >
      <Image
        width="1519px"
        height="1117px"
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
      <View
        padding="0px 0px 0px 0px"
        width="1070.41px"
        height="671.92px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="19.96%"
        bottom="19.88%"
        left="17.58%"
        right="11.95%"
        {...getOverrideProps(overrides, "Group 456")}
      >
        <View
          width="82.12px"
          height="33.6px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="56.75%"
          bottom="38.25%"
          left="60.72%"
          right="31.61%"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Rectangle 7")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="446.18px"
          height="58.17px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="44.05%"
          bottom="47.29%"
          left="calc(50% - 223.09px - 312.11px)"
          {...getOverrideProps(overrides, "Group 6")}
        >
          <Text
            fontFamily="Montserrat"
            fontSize="44px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="53.6359977722168px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="446.18px"
            height="58.17px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Bem-vindo!"
            {...getOverrideProps(overrides, "Bem-vindo!")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="567.3px"
          height="671.92px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="47%"
          right="0%"
          {...getOverrideProps(overrides, "Group 4")}
        >
          <View
            width="567.3px"
            height="671.92px"
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
            width="26.46px"
            height="10.86px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="72.52%"
            bottom="25.86%"
            left="53.33%"
            right="42.01%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Pronto"
            {...getOverrideProps(overrides, "Pronto")}
          ></Text>
          <PasswordField
            width="262px"
            height="111px"
            label="Senha"
            placeholder="Crie uma senha"
            position="absolute"
            top="66.97%"
            bottom="16.51%"
            left="15.14%"
            right="38.68%"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            hideShowPassword={false}
            {...getOverrideProps(overrides, "PasswordField")}
          ></PasswordField>
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
            width="169px"
            height="19px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="11.31%"
            bottom="85.86%"
            left="35.06%"
            right="35.15%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Crie sua conta "
            {...getOverrideProps(overrides, "Crie sua conta")}
          ></Text>
          <TextField
            width="212px"
            height="56px"
            label="CPF"
            placeholder="Insira seu CPF"
            position="absolute"
            top="54.17%"
            bottom="37.49%"
            left="15.14%"
            right="47.49%"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField40191512")}
          ></TextField>
        </View>
        <Icon
          width="13.96px"
          height="14.28px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 13.960917472839355,
            height: 14.278229713439941,
          }}
          paths={[
            {
              d: "M13.9609 7.13911C13.9609 11.0819 10.8357 14.2782 6.98046 14.2782C3.12526 14.2782 0 11.0819 0 7.13911C0 3.19629 3.12526 0 6.98046 0C10.8357 0 13.9609 3.19629 13.9609 7.13911Z",
              fill: "rgba(255,255,255,0.9)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="4.13%"
          bottom="93.75%"
          left="71.92%"
          right="26.78%"
          {...getOverrideProps(overrides, "Ellipse 10039885530")}
        ></Icon>
        <Icon
          width="13.96px"
          height="14.28px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 13.960917472839355,
            height: 14.278229713439941,
          }}
          paths={[
            {
              d: "M13.9609 7.13911C13.9609 11.0819 10.8357 14.2782 6.98046 14.2782C3.12526 14.2782 0 11.0819 0 7.13911C0 3.19629 3.12526 0 6.98046 0C10.8357 0 13.9609 3.19629 13.9609 7.13911Z",
              fill: "rgba(216,216,216,0.9)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="4.13%"
          bottom="93.75%"
          left="74.07%"
          right="24.63%"
          {...getOverrideProps(overrides, "Ellipse 10039885531")}
        ></Icon>
        <Text
          fontFamily="Montserrat"
          fontSize="34px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="41.44599914550781px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="506.16px"
          height="37.81px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="58.94%"
          bottom="35.44%"
          left="0.65%"
          right="52.06%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Que bom que você quer"
          {...getOverrideProps(overrides, "Que bom que voc\u00EA quer")}
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
          width="448.18px"
          height="36.96px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="68.76%"
          bottom="25.74%"
          left="7.89%"
          right="50.25%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children=" Se juntar a nós "
          {...getOverrideProps(overrides, "Se juntar a n\u00F3s")}
        ></Text>
        <TextField
          width="395.83px"
          height="65.51px"
          label="Nome completo"
          placeholder="Insira seu nome completo"
          position="absolute"
          top="21.88%"
          bottom="68.37%"
          left="55.03%"
          right="7.99%"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField40191407")}
        ></TextField>
        <TextField
          width="395.83px"
          height="65.51px"
          label="Email"
          placeholder="Insira seu email"
          position="absolute"
          top="38.4%"
          bottom="51.85%"
          left="55.03%"
          right="7.99%"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField40191415")}
        ></TextField>
        <Button
          width="122.36px"
          height="41.15px"
          position="absolute"
          borderRadius="10px"
          top="88.7%"
          bottom="5.17%"
          left="80.62%"
          right="7.94%"
          backgroundColor="rgba(0,0,0,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Proxima"
          {...getOverrideProps(overrides, "Button39885537")}
        ></Button>
        <Button
          width="121.54px"
          height="41.15px"
          position="absolute"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="10px"
          top="88.75%"
          bottom="5.12%"
          left="56.12%"
          right="32.53%"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Voltar"
          {...getOverrideProps(overrides, "Button39885538")}
        ></Button>
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
