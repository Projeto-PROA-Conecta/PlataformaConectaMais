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
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function EsqueceuSenhaEmail(props) {
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
      {...getOverrideProps(overrides, "EsqueceuSenhaEmail")}
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
        {...getOverrideProps(overrides, "Esqueceu a Senha")}
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
      </View>
      <Text
        fontFamily="Montserrat"
        fontSize="50px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="60.95000076293945px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="490px"
        height="75px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="256px"
        left="calc(50% - 245px - -11px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Esqueceu a senha"
        {...getOverrideProps(overrides, "Esqueceu a senha")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="839px"
        height="483.25px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="396.25px"
        left="444px"
        {...getOverrideProps(overrides, "Group 9")}
      >
        <View
          width="837.62px"
          height="483.25px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="12px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 1")}
        ></View>
        <Flex
          width="244px"
          height="24px"
          {...getOverrideProps(overrides, "Button Group")}
        ></Flex>
        <View
          width="839px"
          height="64.89px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(25,20,20,1)"
          {...getOverrideProps(overrides, "Rectangle 14")}
        ></View>
        <Text
          fontFamily="Alegreya SC"
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="21.775999069213867px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="67.84px"
          height="33.14px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="13.81px"
          left="173.06px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Email"
          {...getOverrideProps(overrides, "Email")}
        ></Text>
        <Text
          fontFamily="Montserrat"
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="19.503999710083008px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="105.22px"
          height="33.14px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="16.81px"
          left="581.49px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Telefone"
          {...getOverrideProps(overrides, "Telefone")}
        ></Text>
      </View>
      <Button
        width="244px"
        height="40px"
        position="absolute"
        borderRadius="10px"
        top="810px"
        left="903px"
        backgroundColor="rgba(0,0,0,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Enviar"
        {...getOverrideProps(overrides, "Button39884796")}
      ></Button>
      <Button
        width="246px"
        height="42px"
        position="absolute"
        borderRadius="11px"
        top="809px"
        left="587px"
        backgroundColor="rgba(242,242,242,1)"
        size="small"
        isDisabled={false}
        variation="default"
        children="Voltar"
        {...getOverrideProps(overrides, "Button39884797")}
      ></Button>
      <Image
        width="152.55px"
        height="158.09px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="468px"
        left="787.92px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={bancoImagens?.ChavesSenha}
        {...getOverrideProps(
          overrides,
          "6c7044335d43831eaf92e9862f42656b-security-key-removebg-preview 1"
        )}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="463.18px"
        height="23px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="647.65px"
        left="627.05px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Insira seu e-mail para redefinir sua senha."
        {...getOverrideProps(
          overrides,
          "Insira seu e-mail para redefinir sua senha."
        )}
      ></Text>
      <TextField
        width="437px"
        height="unset"
        label="Email"
        placeholder="Digite seu email"
        position="absolute"
        top="692px"
        left="645px"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
    </View>
  );
}
