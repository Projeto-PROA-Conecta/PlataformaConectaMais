/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Image, Text, TextField, View } from "@aws-amplify/ui-react";
export default function VerificacaoEtapas(props) {
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
      {...getOverrideProps(overrides, "VerificacaoEtapas")}
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
        {...getOverrideProps(overrides, "Login")}
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
          top="calc(50% - 30.5px - -46px)"
          left="205px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="de duas etapas"
          {...getOverrideProps(overrides, "de duas etapas")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="800px"
          height="1024px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="45px"
          left="785px"
          {...getOverrideProps(overrides, "Group 3")}
        >
          <View
            width="800px"
            height="1024px"
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
          <Button
            width="550px"
            height="62px"
            position="absolute"
            borderRadius="10px"
            top="665px"
            left="130px"
            backgroundColor="rgba(0,0,0,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Enviar"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
          <Image
            width="418px"
            height="144px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="145px"
            left="191px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.LogoPretaConecta}
            {...getOverrideProps(
              overrides,
              "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview"
            )}
          ></Image>
        </View>
        <Text
          fontFamily="Montserrat"
          fontSize="96px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="117.02400207519531px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="414px"
          left="121px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Verificação"
          {...getOverrideProps(overrides, "Verifica\u00E7\u00E3o")}
        ></Text>
        <TextField
          width="211px"
          placeholder="Insira seu código"
          position="absolute"
          top="586px"
          left="1079px"
          size="large"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "TextField")}
        ></TextField>
      </View>
      <Text
        fontFamily="Montserrat"
        fontSize="32px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="39.007999420166016px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="660px"
        height="112px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="432px"
        left="867px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Insira o código exibido no seu aplicativo de autenticação"
        {...getOverrideProps(
          overrides,
          "Insira o c\u00F3digo exibido no seu aplicativo de autentica\u00E7\u00E3o"
        )}
      ></Text>
    </View>
  );
}
