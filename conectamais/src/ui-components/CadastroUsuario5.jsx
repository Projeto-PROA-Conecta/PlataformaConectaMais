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
  SelectField,
  Text,
  TextAreaField,
  View,
} from "@aws-amplify/ui-react";
export default function CadastroUsuario5(props) {
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
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CadastroUsuario5")}
      {...rest}
    >
      <View
        width="1519px"
        height="1115px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="2px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Cadastro")}
      >
        <Text
          fontFamily="Montserrat"
          fontSize="48px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="58.512001037597656px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="797.57px"
          height="68.61px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="550px"
          left="92px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Últimas perguntas"
          {...getOverrideProps(overrides, "\u00DAltimas perguntas")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="525.08px"
          height="662.87px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="263.13px"
          left="787.23px"
          {...getOverrideProps(overrides, "Group 476")}
        >
          <View
            width="525.08px"
            height="662.87px"
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
          <Icon
            width="14.44px"
            height="14.73px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 14.435802459716797,
              height: 14.731194496154785,
            }}
            paths={[
              {
                d: "M14.4358 7.3656C14.4358 11.4335 11.2042 14.7312 7.2179 14.7312C3.23156 14.7312 0 11.4335 0 7.3656C0 3.29769 3.23156 0 7.2179 0C11.2042 0 14.4358 3.29769 14.4358 7.3656Z",
                fill: "rgba(217,217,217,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="79.13px"
            left="255.22px"
            {...getOverrideProps(overrides, "Ellipse 109")}
          ></Icon>
          <Icon
            width="14.44px"
            height="14.73px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 14.435802459716797,
              height: 14.731194496154785,
            }}
            paths={[
              {
                d: "M14.4358 7.3656C14.4358 11.4335 11.2042 14.7312 7.2179 14.7312C3.23156 14.7312 0 11.4335 0 7.3656C0 3.29769 3.23156 0 7.2179 0C11.2042 0 14.4358 3.29769 14.4358 7.3656Z",
                fill: "rgba(217,217,217,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="78.8px"
            left="214.8px"
            {...getOverrideProps(overrides, "Ellipse 108")}
          ></Icon>
          <Icon
            width="14.44px"
            height="14.73px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 14.435802459716797,
              height: 14.731194496154785,
            }}
            paths={[
              {
                d: "M14.4358 7.3656C14.4358 11.4335 11.2042 14.7312 7.2179 14.7312C3.23156 14.7312 0 11.4335 0 7.3656C0 3.29769 3.23156 0 7.2179 0C11.2042 0 14.4358 3.29769 14.4358 7.3656Z",
                fill: "rgba(253,157,72,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="78.8px"
            left="295.64px"
            {...getOverrideProps(overrides, "Ellipse 110")}
          ></Icon>
          <SelectField
            width="464.26px"
            height="54.01px"
            label="10.Faz parte de algum outro grupo de diversidade?"
            placeholder="Sim"
            position="absolute"
            top="272.77px"
            left="37.53px"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField40341860")}
          ></SelectField>
          <TextAreaField
            width="464.26px"
            height="120.3px"
            label="11.Há algo mais que gostaria de compartilhar para que possamos entender melhor suas necessidades?"
            placeholder="Compartilhe aqui...."
            position="absolute"
            top="412.98px"
            left="37.53px"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextAreaField")}
          ></TextAreaField>
          <Button
            width="176.12px"
            height="36.21px"
            position="absolute"
            borderRadius="10px"
            top="596.26px"
            left="306.3px"
            backgroundColor="rgba(253,157,72,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Enviar"
            {...getOverrideProps(overrides, "Button40341863")}
          ></Button>
          <Button
            width="176.12px"
            height="36.21px"
            position="absolute"
            border="1px SOLID rgba(0,0,0,1)"
            borderRadius="10px"
            top="596.26px"
            left="56.9px"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Voltar"
            {...getOverrideProps(overrides, "Button40341864")}
          ></Button>
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
            width="362.76px"
            height="54.93px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="15.75px"
            left="88.28px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Questionário"
            {...getOverrideProps(overrides, "Question\u00E1rio")}
          ></Text>
          <SelectField
            width="464.26px"
            height="54.01px"
            label="9.Sente-se confortável em um ambiente que valoriza a diversidade e inclusão?"
            placeholder="Sim"
            position="absolute"
            top="140.27px"
            left="37.53px"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField40341865")}
          ></SelectField>
        </View>
        <Image
          width="20.41%"
          height="13.45%"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="31.21%"
          bottom="55.34%"
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
    </View>
  );
}
