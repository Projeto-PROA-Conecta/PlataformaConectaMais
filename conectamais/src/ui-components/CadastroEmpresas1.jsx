/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  CheckboxField,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function CadastroEmpresas1(props) {
  const { bancoImagens, overrides, ...rest } = props;
  return (
    <View
      width="1726px"
      height="1117px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CadastroEmpresas1")}
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
        left="-2px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(22,70,89,1)"
        {...getOverrideProps(overrides, "Cadastro")}
      >
        <Image
          width="1728px"
          height="1115px"
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
          src={bancoImagens?.ImagemDeFundo}
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
          width="682px"
          height="1024px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="33px"
          left="774px"
          {...getOverrideProps(overrides, "Group 4")}
        >
          <View
            width="682px"
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
          <TextField
            width="460px"
            placeholder="Telefone"
            position="absolute"
            top="587px"
            left="90px"
            borderRadius="10px"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "TextField40271492")}
          ></TextField>
          <TextField
            width="460px"
            placeholder="Cargo"
            position="absolute"
            top="314px"
            left="90px"
            borderRadius="10px"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "TextField40271468")}
          ></TextField>
          <TextField
            width="460px"
            placeholder="Nome da Empresa"
            position="absolute"
            top="132px"
            left="90px"
            borderRadius="10px"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "TextField40271450")}
          ></TextField>
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
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="759.29px"
            left="399.3px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Pronto"
            {...getOverrideProps(overrides, "Pronto")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="24px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
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
            top="43px"
            left="194px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Cadastre sua Empresa"
            {...getOverrideProps(overrides, "Cadastre sua Empresa")}
          ></Text>
          <TextField
            width="460px"
            placeholder="Email"
            position="absolute"
            top="496px"
            left="90px"
            borderRadius="10px"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "TextField40271484")}
          ></TextField>
          <TextField
            width="460px"
            placeholder="Nome Completo do Contato"
            position="absolute"
            top="223px"
            left="90px"
            borderRadius="10px"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "TextField40271458")}
          ></TextField>
          <TextField
            width="460px"
            placeholder="Quantidade de Funcionários"
            position="absolute"
            top="674px"
            left="90px"
            borderRadius="10px"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "TextField40271510")}
          ></TextField>
          <TextField
            width="460px"
            placeholder="CNPJ"
            position="absolute"
            top="405px"
            left="90px"
            borderRadius="10px"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "TextField40271476")}
          ></TextField>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="400px"
          height="50px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="932px"
          left="897px"
          {...getOverrideProps(overrides, "Group 13")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="400px"
            height="50px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Group 44")}
          >
            <View
              width="127.55px"
              height="50px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="272.45px"
              borderRadius="10px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(0,0,0,1)"
              {...getOverrideProps(overrides, "Rectangle 1239884679")}
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
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="17px"
              left="296px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Cadastrar-se"
              {...getOverrideProps(overrides, "Cadastrar-se")}
            ></Text>
            <View
              width="127.55px"
              height="50px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="0px"
              border="2px SOLID rgba(62,62,62,1)"
              borderRadius="10px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 1239884681")}
            ></View>
            <Text
              fontFamily="Montserrat"
              fontSize="12px"
              fontWeight="700"
              color="rgba(62,62,62,1)"
              lineHeight="14.628000259399414px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="17px"
              left="44px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Voltar"
              {...getOverrideProps(overrides, "Voltar")}
            ></Text>
          </View>
        </View>
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
          width="648px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="415px"
          left="110px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Conecte-se aos melhores talentos neurodiversos e fortaleça sua marca empregadora."
          {...getOverrideProps(
            overrides,
            "Conecte-se aos melhores talentos neurodiversos e fortale\u00E7a sua marca empregadora."
          )}
        ></Text>
        <Image
          width="554px"
          height="191px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="153px"
          left="111px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={bancoImagens?.LogoAzulConecta}
          {...getOverrideProps(overrides, "image-removebg-preview (4) 2")}
        ></Image>
        <CheckboxField
          width="605px"
          height="32px"
          label="Li e aceito as Condições Legais e a Política de Privacidade."
          position="absolute"
          top="833px"
          left="812px"
          size="large"
          defaultChecked={false}
          isDisabled={false}
          labelPosition="end"
          {...getOverrideProps(overrides, "CheckboxField")}
        ></CheckboxField>
      </View>
    </View>
  );
}
