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
  View,
} from "@aws-amplify/ui-react";
export default function MeuPerfil(props) {
  const { bancoImagens, overrides, ...rest } = props;
  return (
    <View
      width="1728px"
      height="1980px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MeuPerfil")}
      {...rest}
    >
      <View
        width="1728px"
        height="1037.83px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="57.39px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,0.2)"
        {...getOverrideProps(overrides, "Rectangle 27")}
      ></View>
      <View
        width="1728px"
        height="1980px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(22,70,89,1)"
        {...getOverrideProps(overrides, "Rectangle 26")}
      ></View>
      <Image
        width="1728px"
        height="1680px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="300px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="unset"
        src={bancoImagens?.Background2}
        {...getOverrideProps(overrides, "Noise & Texture")}
      ></Image>
      <View
        padding="0px 0px 0px 0px"
        width="497px"
        height="1607px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="375px"
        left="32px"
        {...getOverrideProps(overrides, "Group 408")}
      >
        <View
          width="449px"
          height="566px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(207,209,208,1)"
          {...getOverrideProps(overrides, "Rectangle 122")}
        ></View>
        <Image
          width="240px"
          height="237.69px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="45px"
          left="93px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={bancoImagens?.PerfilAvatar}
          {...getOverrideProps(overrides, "AvatarPerfil 141002006")}
        ></Image>
        <Icon
          width="50px"
          height="50px"
          viewBox={{ minX: 0, minY: 0, width: 50, height: 50 }}
          paths={[
            {
              d: "M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z",
              fill: "rgba(22,70,89,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="209px"
          left="288px"
          {...getOverrideProps(overrides, "Ellipse 105")}
        ></Icon>
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="220px"
          left="299px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1"
          )}
        >
          <Icon
            width="18px"
            height="18px"
            viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
            paths={[
              {
                d: "M2 16L3.425 16L13.2 6.225L11.775 4.8L2 14.575L2 16ZM0 18L0 13.75L13.2 0.575C13.4 0.391667 13.6208 0.25 13.8625 0.15C14.1042 0.05 14.3583 0 14.625 0C14.8917 0 15.15 0.05 15.4 0.15C15.65 0.25 15.8667 0.4 16.05 0.6L17.425 2C17.625 2.18333 17.7708 2.4 17.8625 2.65C17.9542 2.9 18 3.15 18 3.4C18 3.66667 17.9542 3.92083 17.8625 4.1625C17.7708 4.40417 17.625 4.625 17.425 4.825L4.25 18L0 18ZM12.475 5.525L11.775 4.8L13.2 6.225L12.475 5.525Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.5%"
            bottom="12.5%"
            left="12.5%"
            right="12.5%"
            {...getOverrideProps(overrides, "Vector39882924")}
          ></Icon>
        </View>
        <Text
          fontFamily="Montserrat"
          fontSize="24px"
          fontWeight="600"
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
          top="313px"
          left="71px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="João Pedro Borges"
          {...getOverrideProps(overrides, "Jo\u00E3o Pedro Borges39882925")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="449px"
          height="79px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="754px"
          left="0px"
          {...getOverrideProps(overrides, "Group 404")}
        >
          <View
            width="449px"
            height="79px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(207,209,208,1)"
            {...getOverrideProps(overrides, "Rectangle 12339882927")}
          ></View>
          <Text
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="19.503999710083008px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="110px"
            height="28px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="29px"
            left="39px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Status"
            {...getOverrideProps(overrides, "Status")}
          ></Text>
          <SelectField
            width="227px"
            placeholder="Ativo"
            position="absolute"
            top="19px"
            left="161px"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "SelectField")}
          ></SelectField>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="449px"
          height="367px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="837px"
          left="0px"
          {...getOverrideProps(overrides, "Group 407")}
        >
          <View
            width="449px"
            height="367px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(207,209,208,1)"
            {...getOverrideProps(overrides, "Rectangle 125")}
          ></View>
          <Text
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="19.503999710083008px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="295px"
            height="54px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="27px"
            left="39px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Acompanhe o preenchimento de seu currículo aqui! "
            {...getOverrideProps(
              overrides,
              "Acompanhe o preenchimento de seu curr\u00EDculo aqui!"
            )}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="19.503999710083008px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="102px"
            height="26px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="190px"
            left="39px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Currículo"
            {...getOverrideProps(overrides, "Curr\u00EDculo")}
          ></Text>
          <View
            width="47px"
            height="41px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="26px"
            left="367px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Smiling")}
          ></View>
          <Text
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="19.503999710083008px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="347px"
            height="53px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="97px"
            left="39px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Você está quase lá, falta pouco para o seu currículo ficar pronto!"
            {...getOverrideProps(
              overrides,
              "Voc\u00EA est\u00E1 quase l\u00E1, falta pouco para o seu curr\u00EDculo ficar pronto!"
            )}
          ></Text>
          <View
            width="319px"
            height="10px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="152px"
            left="39px"
            border="1px SOLID rgba(0,0,0,0.5)"
            borderRadius="50px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(207,209,208,1)"
            {...getOverrideProps(overrides, "Rectangle 127")}
          ></View>
          <View
            width="214px"
            height="10px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="152px"
            left="39px"
            borderRadius="50px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(234,191,63,1)"
            {...getOverrideProps(overrides, "Rectangle 142")}
          ></View>
          <Text
            fontFamily="Montserrat"
            fontSize="10px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="12.1899995803833px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="55px"
            height="25px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="150px"
            left="376px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="60%"
            {...getOverrideProps(overrides, "60%")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="449px"
          height="398px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="1209px"
          left="0px"
          {...getOverrideProps(overrides, "Group 406")}
        >
          <View
            width="449px"
            height="398px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(207,209,208,1)"
            {...getOverrideProps(overrides, "Rectangle 126")}
          ></View>
          <Text
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="19.503999710083008px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="296px"
            height="31px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="24px"
            left="90px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Escolaridade / Formação"
            {...getOverrideProps(
              overrides,
              "Escolaridade / Forma\u00E7\u00E3o"
            )}
          ></Text>
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
            width="201px"
            height="18px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="157px"
            left="39px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Curso:"
            {...getOverrideProps(overrides, "Curso:")}
          ></Text>
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
            width="201px"
            height="18px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="245px"
            left="39px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Período do Curso:"
            {...getOverrideProps(overrides, "Per\u00EDodo do Curso:")}
          ></Text>
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
            width="201px"
            height="18px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="314px"
            left="39px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Ano / Semestre:"
            {...getOverrideProps(overrides, "Ano / Semestre:")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="15px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="18.28499984741211px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="263px"
            height="18px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="115px"
            left="35px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Fatec Ferraz de Vasconcelos"
            {...getOverrideProps(overrides, "Fatec Ferraz de Vasconcelos")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="15px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="18.28499984741211px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="347px"
            height="18px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="182px"
            left="39px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="ADS - Análise e Desenvolvimento de Sistemas"
            {...getOverrideProps(
              overrides,
              "ADS - An\u00E1lise e Desenvolvimento de Sistemas"
            )}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="15px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="18.28499984741211px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="347px"
            height="18px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="270px"
            left="39px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Vespertino"
            {...getOverrideProps(overrides, "Vespertino")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="15px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="18.28499984741211px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="347px"
            height="18px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="341px"
            left="39px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="2° Semestre"
            {...getOverrideProps(overrides, "2\u00B0 Semestre")}
          ></Text>
          <View
            width="28px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="24px"
            left="47px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(
              overrides,
              "book_2_24dp_000000_FILL0_wght400_GRAD0_opsz24 1"
            )}
          >
            <Icon
              width="18.67px"
              height="23.33px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 18.66666603088379,
                height: 23.33333396911621,
              }}
              paths={[
                {
                  d: "M4.08333 23.3333C2.95556 23.3333 1.99306 22.9347 1.19583 22.1375C0.398611 21.3403 0 20.3778 0 19.25L0 4.08333C0 2.95556 0.398611 1.99306 1.19583 1.19583C1.99306 0.398611 2.95556 0 4.08333 0L18.6667 0L18.6667 17.5C18.1806 17.5 17.7674 17.6701 17.4271 18.0104C17.0868 18.3507 16.9167 18.7639 16.9167 19.25C16.9167 19.7361 17.0868 20.1493 17.4271 20.4896C17.7674 20.8299 18.1806 21 18.6667 21L18.6667 23.3333L4.08333 23.3333ZM2.33333 15.5458C2.60556 15.4097 2.8875 15.3125 3.17917 15.2542C3.47083 15.1958 3.77222 15.1667 4.08333 15.1667L4.66667 15.1667L4.66667 2.33333L4.08333 2.33333C3.59722 2.33333 3.18403 2.50347 2.84375 2.84375C2.50347 3.18403 2.33333 3.59722 2.33333 4.08333L2.33333 15.5458ZM7 15.1667L16.3333 15.1667L16.3333 2.33333L7 2.33333L7 15.1667ZM4.08333 21L14.9625 21C14.8458 20.7278 14.7535 20.4507 14.6854 20.1688C14.6174 19.8868 14.5833 19.5806 14.5833 19.25C14.5833 18.9389 14.6125 18.6375 14.6708 18.3458C14.7292 18.0542 14.8264 17.7722 14.9625 17.5L4.08333 17.5C3.57778 17.5 3.15972 17.6701 2.82917 18.0104C2.49861 18.3507 2.33333 18.7639 2.33333 19.25C2.33333 19.7556 2.49861 20.1736 2.82917 20.5042C3.15972 20.8347 3.57778 21 4.08333 21Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="8.33%"
              bottom="8.33%"
              left="16.67%"
              right="16.67%"
              {...getOverrideProps(overrides, "Vector39882953")}
            ></Icon>
          </View>
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
            width="202px"
            height="18px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="89px"
            left="35px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Instituição de Ensino:"
            {...getOverrideProps(overrides, "Institui\u00E7\u00E3o de Ensino:")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="449px"
          height="177px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="572px"
          left="0px"
          {...getOverrideProps(overrides, "Group 405")}
        >
          <View
            width="449px"
            height="177px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(207,209,208,1)"
            {...getOverrideProps(overrides, "Rectangle 12339882956")}
          ></View>
        </View>
        <Text
          fontFamily="Montserrat"
          fontSize="15px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="18.28499984741211px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="232px"
          height="24px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="428px"
          left="51px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Telefone: (11) 91234-6789"
          {...getOverrideProps(overrides, "Telefone: (11) 91234-6789")}
        ></Text>
        <Text
          fontFamily="Montserrat"
          fontSize="15px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="18.28499984741211px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="334px"
          height="25px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="469px"
          left="51px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="E-mail: joaoborges.2010@gmail.com"
          {...getOverrideProps(overrides, "E-mail: joaoborges.2010@gmail.com")}
        ></Text>
        <Text
          fontFamily="Montserrat"
          fontSize="15px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="18.28499984741211px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="446px"
          height="25px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="513px"
          left="51px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Nível da Condição: Nível 2"
          {...getOverrideProps(
            overrides,
            "N\u00EDvel da Condi\u00E7\u00E3o: N\u00EDvel 2"
          )}
        ></Text>
        <Text
          fontFamily="Montserrat"
          fontSize="16px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="19.503999710083008px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="296px"
          height="31px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="373px"
          left="31px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Informações do Usuário"
          {...getOverrideProps(
            overrides,
            "Informa\u00E7\u00F5es do Usu\u00E1rio"
          )}
        ></Text>
        <Text
          fontFamily="Montserrat"
          fontSize="16px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="19.503999710083008px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="296px"
          height="31px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="595px"
          left="75px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sobre Mim:"
          {...getOverrideProps(overrides, "Sobre Mim:")}
        ></Text>
        <Icon
          width="402px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 402, height: 1 }}
          paths={[
            {
              d: "M0 0L402 0L402 -1L0 -1L0 0Z",
              stroke: "rgba(58,58,58,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="352px"
          left="14px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          {...getOverrideProps(overrides, "Line 52")}
        ></Icon>
        <View
          width="35px"
          height="35px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="310px"
          left="16px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Male User")}
        ></View>
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="373px"
          left="5px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "person_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1"
          )}
        ></View>
        <View
          width="35px"
          height="35px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="587px"
          left="34px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ProfileIconBlack 141121464")}
        >
          <Icon
            width="23.33px"
            height="23.33px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 23.33333396911621,
              height: 23.333332061767578,
            }}
            paths={[
              {
                d: "M11.6667 11.6667C10.0625 11.6667 8.68924 11.0955 7.54688 9.95312C6.40451 8.81076 5.83333 7.4375 5.83333 5.83333C5.83333 4.22917 6.40451 2.8559 7.54688 1.71354C8.68924 0.571181 10.0625 0 11.6667 0C13.2708 0 14.6441 0.571181 15.7865 1.71354C16.9288 2.8559 17.5 4.22917 17.5 5.83333C17.5 7.4375 16.9288 8.81076 15.7865 9.95312C14.6441 11.0955 13.2708 11.6667 11.6667 11.6667ZM0 23.3333L0 19.25C0 18.4236 0.212674 17.6641 0.638021 16.9714C1.06337 16.2786 1.62847 15.75 2.33333 15.3854C3.84028 14.6319 5.37153 14.0668 6.92708 13.6901C8.48264 13.3134 10.0625 13.125 11.6667 13.125C13.2708 13.125 14.8507 13.3134 16.4063 13.6901C17.9618 14.0668 19.4931 14.6319 21 15.3854C21.7049 15.75 22.27 16.2786 22.6953 16.9714C23.1207 17.6641 23.3333 18.4236 23.3333 19.25L23.3333 23.3333L0 23.3333ZM2.91667 20.4167L20.4167 20.4167L20.4167 19.25C20.4167 18.9826 20.3498 18.7396 20.2161 18.5208C20.0825 18.3021 19.9063 18.1319 19.6875 18.0104C18.375 17.3542 17.0503 16.862 15.7135 16.5339C14.3767 16.2057 13.0278 16.0417 11.6667 16.0417C10.3056 16.0417 8.9566 16.2057 7.61979 16.5339C6.28299 16.862 4.95833 17.3542 3.64583 18.0104C3.42708 18.1319 3.25087 18.3021 3.11719 18.5208C2.98351 18.7396 2.91667 18.9826 2.91667 19.25L2.91667 20.4167ZM11.6667 8.75C12.4688 8.75 13.1554 8.46441 13.7266 7.89323C14.2977 7.32205 14.5833 6.63542 14.5833 5.83333C14.5833 5.03125 14.2977 4.34462 13.7266 3.77344C13.1554 3.20226 12.4688 2.91667 11.6667 2.91667C10.8646 2.91667 10.178 3.20226 9.60677 3.77344C9.03559 4.34462 8.75 5.03125 8.75 5.83333C8.75 6.63542 9.03559 7.32205 9.60677 7.89323C10.178 8.46441 10.8646 8.75 11.6667 8.75Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="17.14%"
            bottom="16.19%"
            left="0%"
            right="33.33%"
            {...getOverrideProps(overrides, "Vector41121465")}
          ></Icon>
        </View>
        <Text
          fontFamily="Montserrat"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="17.06599998474121px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="429px"
          height="101px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="635px"
          left="19px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sou João, desenvolvedor front-end apaixonado por tecnologia e sempre em busca de aprender. &#xA;Gosto de resolver problemas e criar interfaces funcionais e bonitas. Busco oportunidades em empresas inclusivas onde eu possa crescer e fazer a diferença com meu trabalho. "
          {...getOverrideProps(
            overrides,
            "Sou Jo\u00E3o, desenvolvedor front-end apaixonado por tecnologia e sempre em busca de aprender. Gosto de resolver problemas e criar interfaces funcionais e bonitas. Busco oportunidades em empresas inclusivas onde eu possa crescer e fazer a diferen\u00E7a com meu trabalho."
          )}
        ></Text>
      </View>
      <View
        width="35px"
        height="35px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="34.6%"
        bottom="63.64%"
        left="3.76%"
        right="94.21%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ProfileIconBlack 141121461")}
      >
        <Icon
          width="23.33px"
          height="23.33px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 23.33333396911621,
            height: 23.333332061767578,
          }}
          paths={[
            {
              d: "M11.6667 11.6667C10.0625 11.6667 8.68924 11.0955 7.54688 9.95312C6.40451 8.81076 5.83333 7.4375 5.83333 5.83333C5.83333 4.22917 6.40451 2.8559 7.54688 1.71354C8.68924 0.571181 10.0625 0 11.6667 0C13.2708 0 14.6441 0.571181 15.7865 1.71354C16.9288 2.8559 17.5 4.22917 17.5 5.83333C17.5 7.4375 16.9288 8.81076 15.7865 9.95312C14.6441 11.0955 13.2708 11.6667 11.6667 11.6667ZM0 23.3333L0 19.25C0 18.4236 0.212674 17.6641 0.638021 16.9714C1.06337 16.2786 1.62847 15.75 2.33333 15.3854C3.84028 14.6319 5.37153 14.0668 6.92708 13.6901C8.48264 13.3134 10.0625 13.125 11.6667 13.125C13.2708 13.125 14.8507 13.3134 16.4063 13.6901C17.9618 14.0668 19.4931 14.6319 21 15.3854C21.7049 15.75 22.27 16.2786 22.6953 16.9714C23.1207 17.6641 23.3333 18.4236 23.3333 19.25L23.3333 23.3333L0 23.3333ZM2.91667 20.4167L20.4167 20.4167L20.4167 19.25C20.4167 18.9826 20.3498 18.7396 20.2161 18.5208C20.0825 18.3021 19.9063 18.1319 19.6875 18.0104C18.375 17.3542 17.0503 16.862 15.7135 16.5339C14.3767 16.2057 13.0278 16.0417 11.6667 16.0417C10.3056 16.0417 8.9566 16.2057 7.61979 16.5339C6.28299 16.862 4.95833 17.3542 3.64583 18.0104C3.42708 18.1319 3.25087 18.3021 3.11719 18.5208C2.98351 18.7396 2.91667 18.9826 2.91667 19.25L2.91667 20.4167ZM11.6667 8.75C12.4688 8.75 13.1554 8.46441 13.7266 7.89323C14.2977 7.32205 14.5833 6.63542 14.5833 5.83333C14.5833 5.03125 14.2977 4.34462 13.7266 3.77344C13.1554 3.20226 12.4688 2.91667 11.6667 2.91667C10.8646 2.91667 10.178 3.20226 9.60677 3.77344C9.03559 4.34462 8.75 5.03125 8.75 5.83333C8.75 6.63542 9.03559 7.32205 9.60677 7.89323C10.178 8.46441 10.8646 8.75 11.6667 8.75Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="17.14%"
          bottom="16.19%"
          left="0%"
          right="33.33%"
          {...getOverrideProps(overrides, "Vector41121462")}
        ></Icon>
      </View>
      <View
        width="1728px"
        height="300px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,0.45)"
        {...getOverrideProps(overrides, "Rectangle 19")}
      ></View>
      <Image
        width="571px"
        height="285px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="15px"
        left="608px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={bancoImagens?.LogoBrancaConecta}
        {...getOverrideProps(overrides, "logo_branca_conecta 1")}
      ></Image>
      <Text
        fontFamily="Montserrat"
        fontSize="40px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="48.7599983215332px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="59.81px"
        height="22.96px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1560.35px"
        left="1196.17px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="+ 4"
        {...getOverrideProps(overrides, "+ 439882978")}
      ></Text>
      <Icon
        width="641.11px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 641.1144409179688, height: 1 }}
        paths={[
          {
            d: "M0 0L641.114 0L641.114 -1L0 -1L0 0Z",
            stroke: "rgba(0,0,0,0.5)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1700.48px"
        left="695.24px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Line 28")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="1202.7px"
        height="1587.83px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="375px"
        left="498.11px"
        {...getOverrideProps(overrides, "Group 95")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="1202.7px"
          height="1587.83px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Group 94")}
        >
          <View
            width="1202.7px"
            height="506px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(207,209,208,1)"
            {...getOverrideProps(overrides, "Rectangle 130")}
          ></View>
          <View
            width="1202.7px"
            height="1074.17px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="513.65px"
            left="0px"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(207,209,208,1)"
            {...getOverrideProps(overrides, "Rectangle 131")}
          ></View>
          <Button
            width="551px"
            height="53px"
            position="absolute"
            top="31px"
            left="22.89px"
            backgroundColor="rgba(234,191,63,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Vagas que estou participando "
            {...getOverrideProps(overrides, "Button39882984")}
          ></Button>
          <Button
            width="551px"
            height="53px"
            position="absolute"
            border="5px SOLID rgba(234,191,63,1)"
            padding="3px 11px 3px 11px"
            top="27px"
            left="611.89px"
            backgroundColor="rgba(207,209,208,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Consultar todas as vagas"
            {...getOverrideProps(overrides, "Button39882985")}
          ></Button>
          <Text
            fontFamily="Montserrat"
            fontSize="30px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="36.56999969482422px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="684.7px"
            height="22.96px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="558.3px"
            left="64.49px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Suas Publicações"
            {...getOverrideProps(overrides, "Suas Publica\u00E7\u00F5es")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="29px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="35.35099792480469px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="991.93px"
            height="91.83px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="239.13px"
            left="101.22px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Poxaaa, que pena  :(  &#xA;No momento você não está participando de nenhuma vaga, busque vagas na aba “Vagas de emprego”"
            {...getOverrideProps(
              overrides,
              "Poxaaa, que pena :( No momento voc\u00EA n\u00E3o est\u00E1 participando de nenhuma vaga, busque vagas na aba \u201CVagas de emprego\u201D"
            )}
          ></Text>
          <View
            width="1031.22px"
            height="679.13px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="731.74px"
            left="108.36px"
            border="1px SOLID rgba(0,0,0,0.4)"
            borderRadius="10px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,0.6)"
            {...getOverrideProps(overrides, "Rectangle 134")}
          ></View>
          <View
            width="1031.22px"
            height="146.35px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1429.04px"
            left="108.36px"
            border="1px SOLID rgba(0,0,0,0.4)"
            borderRadius="10px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,0.6)"
            {...getOverrideProps(overrides, "Rectangle 138")}
          ></View>
          <Text
            fontFamily="Montserrat"
            fontSize="30px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="36.56999969482422px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="14.29px"
            height="38.26px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1502.7px"
            left="314.37px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="."
            {...getOverrideProps(overrides, ".39882990")}
          ></Text>
          <Button
            width="333px"
            height="65px"
            position="absolute"
            borderRadius="30px"
            top="636.91px"
            left="101.22px"
            backgroundColor="rgba(22,73,86,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Publicações"
            {...getOverrideProps(overrides, "Button39882991")}
          ></Button>
          <Button
            width="333px"
            height="65px"
            position="absolute"
            border="2px SOLID rgba(0,0,0,1)"
            borderRadius="30px"
            padding="6px 14px 6px 14px"
            top="636px"
            left="806.89px"
            backgroundColor="rgba(207,209,208,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Destaques"
            {...getOverrideProps(overrides, "Button39882992")}
          ></Button>
          <Text
            fontFamily="Montserrat"
            fontSize="28px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="34.13199996948242px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="367.95px"
            height="38.26px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="779.56px"
            left="310.8px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="João Pedro Borges"
            {...getOverrideProps(overrides, "Jo\u00E3o Pedro Borges39882993")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="28px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="34.13199996948242px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="367.95px"
            height="38.26px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1476.87px"
            left="310.8px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="João Pedro Borges"
            {...getOverrideProps(overrides, "Jo\u00E3o Pedro Borges39882994")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="36px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="43.88399887084961px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="38.11px"
            height="31.57px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="744.17px"
            left="1049.09px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="..."
            {...getOverrideProps(overrides, "...39882995")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="36px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="43.88399887084961px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="38.11px"
            height="31.57px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1441.48px"
            left="1049.09px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="..."
            {...getOverrideProps(overrides, "...39882996")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="20px"
            fontWeight="300"
            color="rgba(0,0,0,1)"
            lineHeight="24.3799991607666px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="67.88px"
            height="25.83px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="817.83px"
            left="340.57px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Você"
            {...getOverrideProps(overrides, "Voc\u00EA39882997")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="20px"
            fontWeight="300"
            color="rgba(0,0,0,1)"
            lineHeight="24.3799991607666px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="67.88px"
            height="25.83px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1515.13px"
            left="340.57px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Você"
            {...getOverrideProps(overrides, "Voc\u00EA39882998")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="30px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="36.56999969482422px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="14.29px"
            height="38.26px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="805.39px"
            left="311.99px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="."
            {...getOverrideProps(overrides, ".39882999")}
          ></Text>
          <Image
            width="119px"
            height="117.86px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="753px"
            left="156.89px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.PerfilAvatar}
            {...getOverrideProps(overrides, "AvatarPerfil 141042416")}
          ></Image>
          <Image
            width="119px"
            height="117.86px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1450px"
            left="156.89px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.PerfilAvatar}
            {...getOverrideProps(overrides, "AvatarPerfil 3")}
          ></Image>
          <Text
            fontFamily="Montserrat"
            fontSize="25px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="30.475000381469727px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="883.57px"
            height="107.13px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="881.91px"
            left="151.23px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Boa tarde amigos!&#xA;Hoje tive a incrível oportunidade de visitar a sede da CityCorp, e posso dizer que essa experiência foi ...mais"
            {...getOverrideProps(
              overrides,
              "Boa tarde amigos! Hoje tive a incr\u00EDvel oportunidade de visitar a sede da CityCorp, e posso dizer que essa experi\u00EAncia foi ...mais"
            )}
          ></Text>
          <Image
            width="239.35px"
            height="285.04px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="997.65px"
            left="157.18px"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.Post1}
            {...getOverrideProps(overrides, "image39883005")}
          ></Image>
          <Image
            width="281.03px"
            height="141.57px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="997.65px"
            left="403.68px"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.Post2}
            {...getOverrideProps(overrides, "image39883006")}
          ></Image>
          <Image
            width="281.03px"
            height="141.57px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="997.65px"
            left="693.04px"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.Post3}
            {...getOverrideProps(overrides, "image39883007")}
          ></Image>
          <Image
            width="281.03px"
            height="136.78px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1145.91px"
            left="403.68px"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.Post4}
            {...getOverrideProps(overrides, "image39883008")}
          ></Image>
          <Image
            width="281.03px"
            height="136.78px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1145.91px"
            left="693.04px"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.Post5}
            {...getOverrideProps(overrides, "image39883009")}
          ></Image>
          <Text
            fontFamily="Montserrat"
            fontSize="40px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="48.7599983215332px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="83.04px"
            height="24px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1200px"
            left="795.37px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="+ 4"
            {...getOverrideProps(overrides, "+ 439883010")}
          ></Text>
          <View
            padding="0px 0px 0px 0px"
            width="826.23px"
            height="50px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1331px"
            left="166.89px"
            {...getOverrideProps(overrides, "Group 65")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="826.23px"
              height="50px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="0px"
              {...getOverrideProps(overrides, "Group 66")}
            >
              <Text
                fontFamily="Montserrat"
                fontSize="24px"
                fontWeight="600"
                color="rgba(0,0,0,1)"
                lineHeight="29.256000518798828px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="78px"
                height="25px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="12px"
                left="66px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Gostei"
                {...getOverrideProps(overrides, "Gostei")}
              ></Text>
              <Text
                fontFamily="Montserrat"
                fontSize="24px"
                fontWeight="600"
                color="rgba(0,0,0,1)"
                lineHeight="29.256000518798828px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="183.38px"
                height="38.26px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="11.3px"
                left="318.95px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Comentar"
                {...getOverrideProps(overrides, "Comentar")}
              ></Text>
              <Text
                fontFamily="Montserrat"
                fontSize="24px"
                fontWeight="600"
                color="rgba(0,0,0,1)"
                lineHeight="29.256000518798828px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="216.72px"
                height="38.26px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="10.35px"
                left="609.5px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Compartilhar"
                {...getOverrideProps(overrides, "Compartilhar")}
              ></Text>
              <View
                width="50px"
                height="50px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "LikeIconBlack 1")}
              >
                <Icon
                  width="43.75px"
                  height="41.67px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 43.75,
                    height: 41.66666793823242,
                  }}
                  paths={[
                    {
                      d: "M33.3333 41.6667L10.4167 41.6667L10.4167 14.5833L25 0L27.6042 2.60417C27.8472 2.84722 28.0469 3.17708 28.2031 3.59375C28.3594 4.01042 28.4375 4.40972 28.4375 4.79167L28.4375 5.52083L26.1458 14.5833L39.5833 14.5833C40.6944 14.5833 41.6667 15 42.5 15.8333C43.3333 16.6667 43.75 17.6389 43.75 18.75L43.75 22.9167C43.75 23.1597 43.7153 23.4201 43.6458 23.6979C43.5764 23.9757 43.5069 24.2361 43.4375 24.4792L37.1875 39.1667C36.875 39.8611 36.3542 40.4514 35.625 40.9375C34.8958 41.4236 34.1319 41.6667 33.3333 41.6667ZM14.5833 37.5L33.3333 37.5L39.5833 22.9167L39.5833 18.75L20.8333 18.75L23.6458 7.29167L14.5833 16.3542L14.5833 37.5ZM10.4167 14.5833L10.4167 18.75L4.16667 18.75L4.16667 37.5L10.4167 37.5L10.4167 41.6667L0 41.6667L0 14.5833L10.4167 14.5833Z",
                      fill: "rgba(0,0,0,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="4.17%"
                  bottom="12.5%"
                  left="8.33%"
                  right="4.17%"
                  {...getOverrideProps(overrides, "Vector41211347")}
                ></Icon>
              </View>
              <View
                width="50px"
                height="50px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="0px"
                left="544px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "SendIconBlack 1")}
              >
                <Icon
                  width="39.58px"
                  height="33.33px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 39.58333206176758,
                    height: 33.33333206176758,
                  }}
                  paths={[
                    {
                      d: "M0 33.3333L0 0L39.5833 16.6667L0 33.3333ZM4.16667 27.0833L28.8542 16.6667L4.16667 6.25L4.16667 13.5417L16.6667 16.6667L4.16667 19.7917L4.16667 27.0833Z",
                      fill: "rgba(0,0,0,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="16.67%"
                  bottom="16.67%"
                  left="12.5%"
                  right="8.33%"
                  {...getOverrideProps(overrides, "Vector41211342")}
                ></Icon>
              </View>
            </View>
          </View>
          <Text
            fontFamily="Montserrat"
            fontSize="15px"
            fontWeight="300"
            color="rgba(0,0,0,1)"
            lineHeight="18.28499984741211px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="126.22px"
            height="22.96px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="803.48px"
            left="1038.37px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="4 min"
            {...getOverrideProps(overrides, "4 min")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="15px"
            fontWeight="300"
            color="rgba(0,0,0,1)"
            lineHeight="18.28499984741211px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="126.22px"
            height="22.96px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1496px"
            left="1051.46px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="5 d"
            {...getOverrideProps(overrides, "5 d")}
          ></Text>
        </View>
      </View>
      <Text
        fontFamily="Montserrat"
        fontSize="24px"
        fontWeight="600"
        color="rgba(211,152,74,1)"
        lineHeight="29.256000518798828px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="233px"
        height="34px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="213px"
        left="1299px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="João Pedro Borges"
        {...getOverrideProps(overrides, "Jo\u00E3o Pedro Borges39883025")}
      ></Text>
      <View
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="800px"
        left="51px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "PhoneBlackIcon 1")}
      >
        <Icon
          width="18px"
          height="18px"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
          paths={[
            {
              d: "M16.95 18C14.8667 18 12.8083 17.5458 10.775 16.6375C8.74167 15.7292 6.89167 14.4417 5.225 12.775C3.55833 11.1083 2.27083 9.25833 1.3625 7.225C0.454167 5.19167 0 3.13333 0 1.05C0 0.75 0.1 0.5 0.3 0.3C0.5 0.1 0.75 0 1.05 0L5.1 0C5.33333 0 5.54167 0.0791667 5.725 0.2375C5.90833 0.395833 6.01667 0.583333 6.05 0.8L6.7 4.3C6.73333 4.56667 6.725 4.79167 6.675 4.975C6.625 5.15833 6.53333 5.31667 6.4 5.45L3.975 7.9C4.30833 8.51667 4.70417 9.1125 5.1625 9.6875C5.62083 10.2625 6.125 10.8167 6.675 11.35C7.19167 11.8667 7.73333 12.3458 8.3 12.7875C8.86667 13.2292 9.46667 13.6333 10.1 14L12.45 11.65C12.6 11.5 12.7958 11.3875 13.0375 11.3125C13.2792 11.2375 13.5167 11.2167 13.75 11.25L17.2 11.95C17.4333 12.0167 17.625 12.1375 17.775 12.3125C17.925 12.4875 18 12.6833 18 12.9L18 16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18ZM3.025 6L4.675 4.35L4.25 2L2.025 2C2.10833 2.68333 2.225 3.35833 2.375 4.025C2.525 4.69167 2.74167 5.35 3.025 6ZM11.975 14.95C12.625 15.2333 13.2875 15.4583 13.9625 15.625C14.6375 15.7917 15.3167 15.9 16 15.95L16 13.75L13.65 13.275L11.975 14.95Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="12.5%"
          bottom="12.5%"
          left="12.5%"
          right="12.5%"
          {...getOverrideProps(overrides, "Vector41121447")}
        ></Icon>
      </View>
      <View
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="844px"
        left="51px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MailBlackIcon 1")}
      >
        <Icon
          width="20px"
          height="16px"
          viewBox={{ minX: 0, minY: 0, width: 20, height: 16 }}
          paths={[
            {
              d: "M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14L0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0L18 0C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2L20 14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16L2 16ZM10 9L2 4L2 14L18 14L18 4L10 9ZM10 7L18 2L2 2L10 7ZM2 4L2 2L2 14L2 4Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="16.67%"
          bottom="16.67%"
          left="8.33%"
          right="8.33%"
          {...getOverrideProps(overrides, "Vector41121452")}
        ></Icon>
      </View>
      <View
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="888px"
        left="51px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "PuzzleBlackIcon 1")}
      >
        <Icon
          width="19.5px"
          height="19.5px"
          viewBox={{ minX: 0, minY: 0, width: 19.5, height: 19.5 }}
          paths={[
            {
              d: "M5.8 19.5L2 19.5C1.45 19.5 0.979167 19.3042 0.5875 18.9125C0.195833 18.5208 0 18.05 0 17.5L0 13.7C0.8 13.7 1.5 13.4458 2.1 12.9375C2.7 12.4292 3 11.7833 3 11C3 10.2167 2.7 9.57083 2.1 9.0625C1.5 8.55417 0.8 8.3 0 8.3L0 4.5C0 3.95 0.195833 3.47917 0.5875 3.0875C0.979167 2.69583 1.45 2.5 2 2.5L6 2.5C6 1.8 6.24167 1.20833 6.725 0.725C7.20833 0.241667 7.8 0 8.5 0C9.2 0 9.79167 0.241667 10.275 0.725C10.7583 1.20833 11 1.8 11 2.5L15 2.5C15.55 2.5 16.0208 2.69583 16.4125 3.0875C16.8042 3.47917 17 3.95 17 4.5L17 8.5C17.7 8.5 18.2917 8.74167 18.775 9.225C19.2583 9.70833 19.5 10.3 19.5 11C19.5 11.7 19.2583 12.2917 18.775 12.775C18.2917 13.2583 17.7 13.5 17 13.5L17 17.5C17 18.05 16.8042 18.5208 16.4125 18.9125C16.0208 19.3042 15.55 19.5 15 19.5L11.2 19.5C11.2 18.6667 10.9375 17.9583 10.4125 17.375C9.8875 16.7917 9.25 16.5 8.5 16.5C7.75 16.5 7.1125 16.7917 6.5875 17.375C6.0625 17.9583 5.8 18.6667 5.8 19.5ZM2 17.5L4.125 17.5C4.525 16.4 5.16667 15.625 6.05 15.175C6.93333 14.725 7.75 14.5 8.5 14.5C9.25 14.5 10.0667 14.725 10.95 15.175C11.8333 15.625 12.475 16.4 12.875 17.5L15 17.5L15 11.5L17 11.5C17.1333 11.5 17.25 11.45 17.35 11.35C17.45 11.25 17.5 11.1333 17.5 11C17.5 10.8667 17.45 10.75 17.35 10.65C17.25 10.55 17.1333 10.5 17 10.5L15 10.5L15 4.5L9 4.5L9 2.5C9 2.36667 8.95 2.25 8.85 2.15C8.75 2.05 8.63333 2 8.5 2C8.36667 2 8.25 2.05 8.15 2.15C8.05 2.25 8 2.36667 8 2.5L8 4.5L2 4.5L2 6.7C2.9 7.03333 3.625 7.59167 4.175 8.375C4.725 9.15833 5 10.0333 5 11C5 11.95 4.725 12.8167 4.175 13.6C3.625 14.3833 2.9 14.95 2 15.3L2 17.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="6.25%"
          bottom="12.5%"
          left="12.5%"
          right="6.25%"
          {...getOverrideProps(overrides, "Vector41121457")}
        ></Icon>
      </View>
      <View
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="1458px"
        left="89px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "forward_to_inbox_24dp_4B77D1_FILL0_wght400_GRAD0_opsz24 1"
        )}
      ></View>
      <View
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="1505px"
        left="-213px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "attach_email_24dp_4B77D1_FILL0_wght400_GRAD0_opsz24 1"
        )}
      >
        <Icon
          width="22px"
          height="20px"
          viewBox={{ minX: 0, minY: 0, width: 22, height: 20 }}
          paths={[
            {
              d: "M10 9L2 4L2 14L12 14L12 16L2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14L0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0L18 0C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2L20 7L18 7L18 4L10 9ZM10 7L18 2L2 2L10 7ZM18 20C16.9 20 15.9583 19.6083 15.175 18.825C14.3917 18.0417 14 17.1 14 16L14 11.5C14 10.8 14.2417 10.2083 14.725 9.725C15.2083 9.24167 15.8 9 16.5 9C17.2 9 17.7917 9.24167 18.275 9.725C18.7583 10.2083 19 10.8 19 11.5L19 16L17 16L17 11.5C17 11.3667 16.95 11.25 16.85 11.15C16.75 11.05 16.6333 11 16.5 11C16.3667 11 16.25 11.05 16.15 11.15C16.05 11.25 16 11.3667 16 11.5L16 16C16 16.55 16.1958 17.0208 16.5875 17.4125C16.9792 17.8042 17.45 18 18 18C18.55 18 19.0208 17.8042 19.4125 17.4125C19.8042 17.0208 20 16.55 20 16L20 12L22 12L22 16C22 17.1 21.6083 18.0417 20.825 18.825C20.0417 19.6083 19.1 20 18 20ZM2 4L2 2L2 14L2 4Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="8.33%"
          bottom="8.33%"
          left="4.17%"
          right="4.17%"
          {...getOverrideProps(overrides, "Vector39883035")}
        ></Icon>
      </View>
      <Image
        width="104px"
        height="103px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="176px"
        left="1572px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={bancoImagens?.PerfilAvatar}
        {...getOverrideProps(overrides, "AvatarPerfil 14043871")}
      ></Image>
      <View
        width="1729px"
        height="61px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="299.5px"
        left="-0.5px"
        border="1px SOLID rgba(239,204,139,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(212,180,120,1)"
        {...getOverrideProps(overrides, "Rectangle 20")}
      ></View>
      <Button
        width="107px"
        height="36px"
        position="absolute"
        borderRadius="10px"
        top="312px"
        left="810px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        backgroundColor="rgba(0,0,0,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Vagas"
        {...getOverrideProps(overrides, "Button41021096")}
      ></Button>
      <Button
        width="107px"
        height="36px"
        position="absolute"
        borderRadius="10px"
        top="312px"
        left="595px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        backgroundColor="rgba(0,0,0,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Perfil"
        {...getOverrideProps(overrides, "Button41021097")}
      ></Button>
      <Button
        width="107px"
        height="36px"
        position="absolute"
        borderRadius="10px"
        top="312px"
        left="1025px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        backgroundColor="rgba(0,0,0,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Plus"
        {...getOverrideProps(overrides, "Button41021098")}
      ></Button>
      <View
        padding="0px 0px 0px 0px"
        width="401px"
        height="76px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="209px"
        left="72px"
        {...getOverrideProps(overrides, "Group 431")}
      >
        <Icon
          width="47px"
          height="45px"
          viewBox={{ minX: 0, minY: 0, width: 47, height: 45 }}
          paths={[
            {
              d: "M0 18.0673C0 14.3267 0.871458 10.8946 2.61437 7.7712C4.35729 4.64776 6.6975 2.05736 9.635 0L12.3962 3.59102C10.0462 5.23691 8.17604 7.31297 6.78562 9.8192C5.39521 12.3254 4.7 15.0748 4.7 18.0673L0 18.0673ZM42.3 18.0673C42.3 15.0748 41.6048 12.3254 40.2144 9.8192C38.824 7.31297 36.9537 5.23691 34.6037 3.59102L37.365 0C40.3025 2.05736 42.6427 4.64776 44.3856 7.7712C46.1285 10.8946 47 14.3267 47 18.0673L42.3 18.0673ZM4.7 38.2668L4.7 33.7781L9.4 33.7781L9.4 18.0673C9.4 14.9626 10.3792 12.2039 12.3375 9.79115C14.2958 7.37843 16.8417 5.79801 19.975 5.04988L19.975 3.4788C19.975 2.54364 20.3177 1.74875 21.0031 1.09414C21.6885 0.439526 22.5208 0.112219 23.5 0.112219C24.4792 0.112219 25.3115 0.439526 25.9969 1.09414C26.6823 1.74875 27.025 2.54364 27.025 3.4788L27.025 5.04988C30.1583 5.79801 32.7042 7.37843 34.6625 9.79115C36.6208 12.2039 37.6 14.9626 37.6 18.0673L37.6 33.7781L42.3 33.7781L42.3 38.2668L4.7 38.2668ZM23.5 45C22.2075 45 21.101 44.5605 20.1806 43.6814C19.2602 42.8024 18.8 41.7456 18.8 40.5112L28.2 40.5112C28.2 41.7456 27.7398 42.8024 26.8194 43.6814C25.899 44.5605 24.7925 45 23.5 45ZM14.1 33.7781L32.9 33.7781L32.9 18.0673C32.9 15.5985 31.9796 13.485 30.1388 11.7269C28.2979 9.96883 26.085 9.08978 23.5 9.08978C20.915 9.08978 18.7021 9.96883 16.8612 11.7269C15.0204 13.485 14.1 15.5985 14.1 18.0673L14.1 33.7781Z",
              fill: "rgba(242,242,242,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="2.63%"
          bottom="38.16%"
          left="43.14%"
          right="45.14%"
          {...getOverrideProps(overrides, "Vector39882969")}
        ></Icon>
        <Icon
          width="36px"
          height="42px"
          viewBox={{ minX: 0, minY: 0, width: 36, height: 42 }}
          paths={[
            {
              d: "M18 8.4C16.9 8.4 15.9583 7.98875 15.175 7.16625C14.3917 6.34375 14 5.355 14 4.2C14 3.045 14.3917 2.05625 15.175 1.23375C15.9583 0.41125 16.9 0 18 0C19.1 0 20.0417 0.41125 20.825 1.23375C21.6083 2.05625 22 3.045 22 4.2C22 5.355 21.6083 6.34375 20.825 7.16625C20.0417 7.98875 19.1 8.4 18 8.4ZM12 42L12 14.7L0 14.7L0 10.5L36 10.5L36 14.7L24 14.7L24 42L20 42L20 29.4L16 29.4L16 42L12 42Z",
              fill: "rgba(242,242,242,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="3.95%"
          bottom="40.79%"
          left="25.19%"
          right="65.84%"
          {...getOverrideProps(overrides, "Vector39882972")}
        ></Icon>
        <Icon
          width="40px"
          height="40px"
          viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
          paths={[
            {
              d: "M19.9 32C20.6 32 21.1917 31.7583 21.675 31.275C22.1583 30.7917 22.4 30.2 22.4 29.5C22.4 28.8 22.1583 28.2083 21.675 27.725C21.1917 27.2417 20.6 27 19.9 27C19.2 27 18.6083 27.2417 18.125 27.725C17.6417 28.2083 17.4 28.8 17.4 29.5C17.4 30.2 17.6417 30.7917 18.125 31.275C18.6083 31.7583 19.2 32 19.9 32ZM18.1 24.3L21.8 24.3C21.8 23.2 21.925 22.3333 22.175 21.7C22.425 21.0667 23.1333 20.2 24.3 19.1C25.1667 18.2333 25.85 17.4083 26.35 16.625C26.85 15.8417 27.1 14.9 27.1 13.8C27.1 11.9333 26.4167 10.5 25.05 9.5C23.6833 8.5 22.0667 8 20.2 8C18.3 8 16.7583 8.5 15.575 9.5C14.3917 10.5 13.5667 11.7 13.1 13.1L16.4 14.4C16.5667 13.8 16.9417 13.15 17.525 12.45C18.1083 11.75 19 11.4 20.2 11.4C21.2667 11.4 22.0667 11.6917 22.6 12.275C23.1333 12.8583 23.4 13.5 23.4 14.2C23.4 14.8667 23.2 15.4917 22.8 16.075C22.4 16.6583 21.9 17.2 21.3 17.7C19.8333 19 18.9333 19.9833 18.6 20.65C18.2667 21.3167 18.1 22.5333 18.1 24.3ZM20 40C17.2333 40 14.6333 39.475 12.2 38.425C9.76667 37.375 7.65 35.95 5.85 34.15C4.05 32.35 2.625 30.2333 1.575 27.8C0.525 25.3667 0 22.7667 0 20C0 17.2333 0.525 14.6333 1.575 12.2C2.625 9.76667 4.05 7.65 5.85 5.85C7.65 4.05 9.76667 2.625 12.2 1.575C14.6333 0.525 17.2333 0 20 0C22.7667 0 25.3667 0.525 27.8 1.575C30.2333 2.625 32.35 4.05 34.15 5.85C35.95 7.65 37.375 9.76667 38.425 12.2C39.475 14.6333 40 17.2333 40 20C40 22.7667 39.475 25.3667 38.425 27.8C37.375 30.2333 35.95 32.35 34.15 34.15C32.35 35.95 30.2333 37.375 27.8 38.425C25.3667 39.475 22.7667 40 20 40ZM20 36C24.4667 36 28.25 34.45 31.35 31.35C34.45 28.25 36 24.4667 36 20C36 15.5333 34.45 11.75 31.35 8.65C28.25 5.55 24.4667 4 20 4C15.5333 4 11.75 5.55 8.65 8.65C5.55 11.75 4 15.5333 4 20C4 24.4667 5.55 28.25 8.65 31.35C11.75 34.45 15.5333 36 20 36Z",
              fill: "rgba(242,242,242,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="4px"
          left="261px"
          {...getOverrideProps(overrides, "Vector39882976")}
        ></Icon>
        <Text
          fontFamily="Alegreya Sans SC"
          fontSize="20px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="62px"
          height="64px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="12px"
          left="339px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Ajuda"
          {...getOverrideProps(overrides, "Ajuda")}
        ></Text>
        <Icon
          width="50px"
          height="50px"
          viewBox={{ minX: 0, minY: 0, width: 50, height: 50 }}
          paths={[
            {
              d: "M18.1592 50L17.1642 42C16.6252 41.7917 16.1173 41.5417 15.6405 41.25C15.1638 40.9583 14.6973 40.6458 14.2413 40.3125L6.8408 43.4375L0 31.5625L6.40547 26.6875C6.36401 26.3958 6.34328 26.1146 6.34328 25.8438L6.34328 24.1563C6.34328 23.8854 6.36401 23.6042 6.40547 23.3125L0 18.4375L6.8408 6.5625L14.2413 9.6875C14.6973 9.35417 15.1741 9.04167 15.6716 8.75C16.1692 8.45833 16.6667 8.20833 17.1642 8L18.1592 0L31.8408 0L32.8358 8C33.3748 8.20833 33.8827 8.45833 34.3595 8.75C34.8362 9.04167 35.3027 9.35417 35.7587 9.6875L43.1592 6.5625L50 18.4375L43.5945 23.3125C43.636 23.6042 43.6567 23.8854 43.6567 24.1563L43.6567 25.8438C43.6567 26.1146 43.6153 26.3958 43.5323 26.6875L49.9378 31.5625L43.097 43.4375L35.7587 40.3125C35.3027 40.6458 34.8259 40.9583 34.3284 41.25C33.8308 41.5417 33.3333 41.7917 32.8358 42L31.8408 50L18.1592 50ZM22.5124 45L27.4254 45L28.296 38.375C29.5813 38.0417 30.7732 37.5521 31.8719 36.9063C32.9706 36.2604 33.976 35.4792 34.8881 34.5625L41.0448 37.125L43.4701 32.875L38.1219 28.8125C38.3292 28.2292 38.4743 27.6146 38.5572 26.9688C38.6401 26.3229 38.6816 25.6667 38.6816 25C38.6816 24.3333 38.6401 23.6771 38.5572 23.0313C38.4743 22.3854 38.3292 21.7708 38.1219 21.1875L43.4701 17.125L41.0448 12.875L34.8881 15.5C33.976 14.5417 32.9706 13.7396 31.8719 13.0938C30.7732 12.4479 29.5813 11.9583 28.296 11.625L27.4876 5L22.5746 5L21.704 11.625C20.4187 11.9583 19.2268 12.4479 18.1281 13.0938C17.0294 13.7396 16.024 14.5208 15.1119 15.4375L8.95522 12.875L6.52985 17.125L11.8781 21.125C11.6708 21.75 11.5257 22.375 11.4428 23C11.3599 23.625 11.3184 24.2917 11.3184 25C11.3184 25.6667 11.3599 26.3125 11.4428 26.9375C11.5257 27.5625 11.6708 28.1875 11.8781 28.8125L6.52985 32.875L8.95522 37.125L15.1119 34.5C16.024 35.4583 17.0294 36.2604 18.1281 36.9063C19.2268 37.5521 20.4187 38.0417 21.704 38.375L22.5124 45ZM25.1244 33.75C27.529 33.75 29.5813 32.8958 31.2811 31.1875C32.9809 29.4792 33.8308 27.4167 33.8308 25C33.8308 22.5833 32.9809 20.5208 31.2811 18.8125C29.5813 17.1042 27.529 16.25 25.1244 16.25C22.6783 16.25 20.6157 17.1042 18.9366 18.8125C17.2575 20.5208 16.4179 22.5833 16.4179 25C16.4179 27.4167 17.2575 29.4792 18.9366 31.1875C20.6157 32.8958 22.6783 33.75 25.1244 33.75Z",
              fill: "rgba(232,234,237,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="34.21%"
          left="0%"
          right="87.53%"
          {...getOverrideProps(overrides, "Vector41002233")}
        ></Icon>
      </View>
      <View
        width="50px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="1706px"
        left="912px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ChatIconBlack 1")}
      >
        <Icon
          width="41.67px"
          height="41.67px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 41.66666793823242,
            height: 41.66666793823242,
          }}
          paths={[
            {
              d: "M8.33333 25L25 25L25 20.8333L8.33333 20.8333L8.33333 25ZM8.33333 18.75L33.3333 18.75L33.3333 14.5833L8.33333 14.5833L8.33333 18.75ZM8.33333 12.5L33.3333 12.5L33.3333 8.33333L8.33333 8.33333L8.33333 12.5ZM0 41.6667L0 4.16667C0 3.02083 0.407986 2.03993 1.22396 1.22396C2.03993 0.407986 3.02083 0 4.16667 0L37.5 0C38.6458 0 39.6267 0.407986 40.4427 1.22396C41.2587 2.03993 41.6667 3.02083 41.6667 4.16667L41.6667 29.1667C41.6667 30.3125 41.2587 31.2934 40.4427 32.1094C39.6267 32.9254 38.6458 33.3333 37.5 33.3333L8.33333 33.3333L0 41.6667ZM6.5625 29.1667L37.5 29.1667L37.5 4.16667L4.16667 4.16667L4.16667 31.5104L6.5625 29.1667Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="8.33%"
          bottom="8.33%"
          left="8.33%"
          right="8.33%"
          {...getOverrideProps(overrides, "Vector41211350")}
        ></Icon>
      </View>
      <Button
        width="366px"
        height="41px"
        position="absolute"
        border="1px SOLID rgba(0,0,0,1)"
        top="1433px"
        left="72px"
        backgroundColor="rgba(207,209,208,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Carregar Currículo"
        {...getOverrideProps(overrides, "Button41231372")}
      ></Button>
      <Button
        width="366px"
        height="41px"
        position="absolute"
        border="1px SOLID rgba(0,0,0,1)"
        top="1490px"
        left="72px"
        backgroundColor="rgba(207,209,208,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Modelos de Currículos"
        {...getOverrideProps(overrides, "Button41231373")}
      ></Button>
      <Icon
        width="21px"
        height="19px"
        viewBox={{ minX: 0, minY: 0, width: 21, height: 19 }}
        paths={[
          {
            d: "M10 9L2 4L2 14L11 14L11 16L2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14L0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0L18 0C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2L20 9L18 9L18 4L10 9ZM10 7L18 2L2 2L10 7ZM17 19L15.6 17.6L17.175 16L13 16L13 14L17.175 14L15.575 12.4L17 11L21 15L17 19ZM2 4L2 15L2 9L2 9.075L2 2L2 4Z",
            fill: "rgba(8,8,8,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="73.03%"
        bottom="26.01%"
        left="5.56%"
        right="93.23%"
        {...getOverrideProps(overrides, "Vector39883033")}
      ></Icon>
      <Icon
        width="22px"
        height="20px"
        viewBox={{ minX: 0, minY: 0, width: 22, height: 20 }}
        paths={[
          {
            d: "M10 9L2 4L2 14L12 14L12 16L2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14L0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0L18 0C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2L20 7L18 7L18 4L10 9ZM10 7L18 2L2 2L10 7ZM18 20C16.9 20 15.9583 19.6083 15.175 18.825C14.3917 18.0417 14 17.1 14 16L14 11.5C14 10.8 14.2417 10.2083 14.725 9.725C15.2083 9.24167 15.8 9 16.5 9C17.2 9 17.7917 9.24167 18.275 9.725C18.7583 10.2083 19 10.8 19 11.5L19 16L17 16L17 11.5C17 11.3667 16.95 11.25 16.85 11.15C16.75 11.05 16.6333 11 16.5 11C16.3667 11 16.25 11.05 16.15 11.15C16.05 11.25 16 11.3667 16 11.5L16 16C16 16.55 16.1958 17.0208 16.5875 17.4125C16.9792 17.8042 17.45 18 18 18C18.55 18 19.0208 17.8042 19.4125 17.4125C19.8042 17.0208 20 16.55 20 16L20 12L22 12L22 16C22 17.1 21.6083 18.0417 20.825 18.825C20.0417 19.6083 19.1 20 18 20ZM2 4L2 2L2 14L2 4Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="75.81%"
        bottom="23.18%"
        left="5.56%"
        right="93.17%"
        {...getOverrideProps(overrides, "Vector41231381")}
      ></Icon>
    </View>
  );
}
