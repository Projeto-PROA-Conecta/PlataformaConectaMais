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
  Flex,
  Image,
  PasswordField,
  PhoneNumberField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function CadastroEmpresas(props) {
  const { bancoImagens, overrides, ...rest } = props;
  return (
    <View
      width="1519px"
      height="1118.47px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CadastroEmpresas")}
      {...rest}
    >
      <Image
        width="100%"
        height="99.87%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0.13%"
        left="-0.26%"
        right="0.26%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Fundo Novo")}
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
        left="1056px"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle 7")}
      ></View>
      <Text
        fontFamily="Poppins"
        fontSize="34px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="75px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="591px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="470px"
        left="193px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Conecte-se aos melhores talentos neurodiversos e fortaleça sua marca empregadora."
        {...getOverrideProps(
          overrides,
          "Conecte-se aos melhores talentos neurodiversos e fortale\u00E7a sua marca empregadora."
        )}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="743px"
        height="855.68px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="172.7px"
        left="696px"
        {...getOverrideProps(overrides, "Group 475")}
      >
        <View
          width="591.17px"
          height="855.68px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="76px"
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
          width="37.27px"
          height="12.53px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="634.48px"
          left="422.12px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Pronto"
          {...getOverrideProps(overrides, "Pronto")}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="36px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="285.19px"
          height="24.23px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="35.93px"
          left="232.16px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Cadastre sua Empresa"
          {...getOverrideProps(overrides, "Cadastre sua Empresa")}
        ></Text>
        <Flex
          width="398.74px"
          height="38.44px"
          {...getOverrideProps(overrides, "TextField38512053")}
        ></Flex>
        <TextField
          width="416px"
          height="72px"
          label="Nome completo"
          placeholder="Nome da Empresa"
          position="absolute"
          top="116.3px"
          left="164px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField38572442")}
        ></TextField>
        <TextField
          width="416px"
          height="72px"
          label="Nome completo"
          placeholder="Nome da Completo do Contato"
          position="absolute"
          top="205.3px"
          left="164px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField38572462")}
        ></TextField>
        <TextField
          width="416px"
          height="72px"
          label="Nome completo"
          placeholder="Cargo"
          position="absolute"
          top="294.3px"
          left="164px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField38572586")}
        ></TextField>
        <TextField
          width="416px"
          height="72px"
          label="Nome completo"
          placeholder="Email"
          position="absolute"
          top="440.3px"
          left="164px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField38572628")}
        ></TextField>
        <PasswordField
          width="416px"
          height="unset"
          label="CPF"
          placeholder="CNPJ"
          position="absolute"
          top="383.3px"
          left="164px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          hideShowPassword={true}
          {...getOverrideProps(overrides, "PasswordField38572443")}
        ></PasswordField>
        <PasswordField
          width="416px"
          height="unset"
          label="CPF"
          placeholder="Quantidade de Funcionários"
          position="absolute"
          top="607.3px"
          left="164px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          hideShowPassword={true}
          {...getOverrideProps(overrides, "PasswordField38572599")}
        ></PasswordField>
        <CheckboxField
          width="743px"
          height="unset"
          label="Li e aceito as Condições Legais e a Política de Privacidade."
          position="absolute"
          top="693.3px"
          left="0px"
          size="large"
          defaultChecked={false}
          isDisabled={false}
          labelPosition="end"
          {...getOverrideProps(overrides, "CheckboxField")}
        ></CheckboxField>
        <Button
          width="102px"
          height="unset"
          position="absolute"
          top="769.3px"
          left="170px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Voltar"
          {...getOverrideProps(overrides, "Button38572644")}
        ></Button>
        <Button
          width="122px"
          height="unset"
          position="absolute"
          top="770.3px"
          left="458px"
          backgroundColor="rgba(0,0,0,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Cadastrar-se"
          {...getOverrideProps(overrides, "Button38572645")}
        ></Button>
      </View>
      <View
        width="310px"
        height="150px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="24.32%"
        bottom="62.27%"
        left="21.99%"
        right="57.6%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview38512063"
        )}
      ></View>
      <Image
        width="20.41%"
        height="13.41%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="28.43%"
        bottom="58.16%"
        left="22.12%"
        right="57.47%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(
          overrides,
          "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview38512064"
        )}
      ></Image>
      <PhoneNumberField
        width="416px"
        height="unset"
        label="Telefone"
        placeholder="Telefone"
        position="absolute"
        top="704px"
        left="860px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "PhoneNumberField")}
      ></PhoneNumberField>
    </View>
  );
}
