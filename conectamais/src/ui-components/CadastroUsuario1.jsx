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
      width="1728px"
      height="1117px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CadastroUsuario1")}
      {...rest}
    >
      <View
        width="1728px"
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
        backgroundColor="rgba(22,70,89,1)"
        {...getOverrideProps(overrides, "Cadastro")}
      >
        <Image
          width="1728px"
          height="1117px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          objectFit="unset"
          {...getOverrideProps(overrides, "Noise & Texture")}
        ></Image>
        <Image
          width="1728px"
          height="1117px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={bancoImagens?.Background2}
          {...getOverrideProps(
            overrides,
            "DALL\u00B7E 2024-11-02 01.57.03 - A softer abstract background with a pattern of faceted polygons in calming colors such as soft blues, greens, purples, and muted yellows. The shapes s 1"
          )}
        ></Image>
        <View
          width="100px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="659px"
          left="1058px"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Rectangle 7")}
        ></View>
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
        <View
          padding="0px 0px 0px 0px"
          width="544px"
          height="110px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="calc(50% - 55px - 10.5px)"
          left="83px"
          {...getOverrideProps(overrides, "Group 6")}
        >
          <Text
            fontFamily="Montserrat"
            fontSize="90px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="109.70999908447266px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Bem-vindo!"
            {...getOverrideProps(overrides, "Bem-vindo!")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="778px"
          height="901px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="104px"
          left="792px"
          {...getOverrideProps(overrides, "Group 4")}
        >
          <View
            width="778px"
            height="901px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
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
            width="36.28px"
            height="14.57px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="653.41px"
            left="414.9px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Pronto"
            {...getOverrideProps(overrides, "Pronto")}
          ></Text>
          <PasswordField
            width="266.74px"
            height="92.08px"
            label="Senha"
            placeholder="Crie uma senha"
            position="absolute"
            top="556px"
            left="387px"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            hideShowPassword={false}
            {...getOverrideProps(overrides, "PasswordField")}
          ></PasswordField>
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
            width="171.84px"
            height="25.82px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="102px"
            left="301px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Crie sua conta "
            {...getOverrideProps(overrides, "Crie sua conta")}
          ></Text>
          <TextField
            width="185.52px"
            height="75.73px"
            label="CPF"
            placeholder="Insira seu CPF"
            position="absolute"
            top="558px"
            left="117px"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField40191512")}
          ></TextField>
        </View>
        <Icon
          width="17px"
          height="17px"
          viewBox={{ minX: 0, minY: 0, width: 17, height: 17 }}
          paths={[
            {
              d: "M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5Z",
              fill: "rgba(22,70,89,0.9)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="167px"
          left="1158px"
          {...getOverrideProps(overrides, "Ellipse 10039885530")}
        ></Icon>
        <Icon
          width="17px"
          height="17px"
          viewBox={{ minX: 0, minY: 0, width: 17, height: 17 }}
          paths={[
            {
              d: "M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5Z",
              fill: "rgba(216,216,216,0.9)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="167px"
          left="1186px"
          {...getOverrideProps(overrides, "Ellipse 10039885531")}
        ></Icon>
        <Text
          fontFamily="Montserrat"
          fontSize="50px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="60.95000076293945px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="635px"
          left="58px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Que bom que você quer"
          {...getOverrideProps(overrides, "Que bom que voc\u00EA quer")}
        ></Text>
        <Text
          fontFamily="Montserrat"
          fontSize="50px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="60.95000076293945px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="709px"
          left="154px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children=" Se juntar a nós "
          {...getOverrideProps(overrides, "Se juntar a n\u00F3s")}
        ></Text>
        <Image
          width="554.04px"
          height="165px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="222px"
          left="79px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={bancoImagens?.LogoAzulConecta}
          {...getOverrideProps(overrides, "image-removebg-preview (4) 4")}
        ></Image>
        <TextField
          width="543px"
          height="unset"
          label="Nome completo"
          placeholder="Insira seu nome completo"
          position="absolute"
          top="343px"
          left="909px"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField40191407")}
        ></TextField>
        <TextField
          width="543px"
          height="unset"
          label="Email"
          placeholder="Insira seu email"
          position="absolute"
          top="499px"
          left="909px"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField40191415")}
        ></TextField>
      </View>
      <Button
        width="167px"
        height="55px"
        position="absolute"
        borderRadius="10px"
        top="904px"
        left="1291px"
        backgroundColor="rgba(0,0,0,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Proxima"
        {...getOverrideProps(overrides, "Button39885537")}
      ></Button>
      <Button
        width="167px"
        height="55px"
        position="absolute"
        border="1px SOLID rgba(0,0,0,1)"
        borderRadius="10px"
        top="904px"
        left="926px"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Voltar"
        {...getOverrideProps(overrides, "Button39885538")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 12px - -373.5px)"
        left="1335px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Continuar"
        {...getOverrideProps(overrides, "label")}
      ></Text>
    </View>
  );
}
