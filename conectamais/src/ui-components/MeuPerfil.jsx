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
      width="1519px"
      height="1882px"
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
        height="1882px"
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
      <View
        padding="0px 0px 0px 0px"
        width="1519px"
        height="1725px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="157px"
        left="0px"
        {...getOverrideProps(overrides, "Group 394")}
      >
        <View
          width="1519px"
          height="1725px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "back gorund")}
        >
          <Icon
            width="1822.8px"
            height="2070px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 1822.800048828125,
              height: 2070,
            }}
            paths={[
              {
                d: "M1822.8 0L0 0L0 2070L1822.8 2070L1822.8 0Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="-10%"
            bottom="-10%"
            left="-10%"
            right="-10%"
            {...getOverrideProps(overrides, "Vector42343652")}
          ></Icon>
          <Icon
            width="1822.8px"
            height="2070px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 1822.800048828125,
              height: 2070,
            }}
            paths={[
              {
                d: "M1822.8 0L0 0L0 2070L1822.8 2070L1822.8 0Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="-10%"
            bottom="-10%"
            left="-10%"
            right="-10%"
            {...getOverrideProps(overrides, "Vector42343653")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="1519px"
            height="1725px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Group")}
          >
            <Image
              width="100%"
              height="100%"
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
              objectFit="unset"
              {...getOverrideProps(overrides, "Rectangle")}
            ></Image>
          </View>
        </View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="497px"
        height="1588px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="196px"
        left="35px"
        {...getOverrideProps(overrides, "Group 408")}
      >
        <View
          width="449px"
          height="559.31px"
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
          height="234.88px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="44.47px"
          left="93px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={bancoImagens?.PerfilAvatar}
          {...getOverrideProps(overrides, "AvatarPerfil 141002006")}
        ></Image>
        <Icon
          width="50px"
          height="49.41px"
          viewBox={{ minX: 0, minY: 0, width: 50, height: 49.408836364746094 }}
          paths={[
            {
              d: "M50 24.7044C50 38.3483 38.8071 49.4088 25 49.4088C11.1929 49.4088 0 38.3483 0 24.7044C0 11.0605 11.1929 0 25 0C38.8071 0 50 11.0605 50 24.7044Z",
              fill: "rgba(22,70,89,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="206.53px"
          left="288px"
          {...getOverrideProps(overrides, "Ellipse 105")}
        ></Icon>
        <View
          width="24px"
          height="23.72px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="217.4px"
          left="299px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1"
          )}
        >
          <Icon
            width="18px"
            height="17.79px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 18,
              height: 17.787181854248047,
            }}
            paths={[
              {
                d: "M2 15.8108L3.425 15.8108L13.2 6.1514L11.775 4.74325L2 14.4027L2 15.8108ZM0 17.7872L0 13.5874L13.2 0.568202C13.4 0.387036 13.6208 0.247044 13.8625 0.148227C14.1042 0.0494088 14.3583 0 14.625 0C14.8917 0 15.15 0.0494088 15.4 0.148227C15.65 0.247044 15.8667 0.395271 16.05 0.592906L17.425 1.97635C17.625 2.15752 17.7708 2.37162 17.8625 2.61867C17.9542 2.86571 18 3.11276 18 3.3598C18 3.62331 17.9542 3.87448 17.8625 4.11329C17.7708 4.3521 17.625 4.57032 17.425 4.76795L4.25 17.7872L0 17.7872ZM12.475 5.45968L11.775 4.74325L13.2 6.1514L12.475 5.45968Z",
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
          width="233px"
          height="28.66px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="309.3px"
          left="71px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="João Pedro Borges"
          {...getOverrideProps(overrides, "Jo\u00E3o Pedro Borges39882925")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="449px"
          height="78.07px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="745.09px"
          left="0px"
          {...getOverrideProps(overrides, "Group 404")}
        >
          <View
            width="449px"
            height="78.07px"
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
            height="27.67px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="28.66px"
            left="39px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Status"
            {...getOverrideProps(overrides, "Status")}
          ></Text>
          <SelectField
            width="227px"
            height="45.46px"
            placeholder="Ativo"
            position="absolute"
            top="18.78px"
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
          height="362.66px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="827.1px"
          left="0px"
          {...getOverrideProps(overrides, "Group 407")}
        >
          <View
            width="449px"
            height="362.66px"
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
            height="53.36px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="26.68px"
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
            height="25.69px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="187.75px"
            left="39px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Currículo"
            {...getOverrideProps(overrides, "Curr\u00EDculo")}
          ></Text>
          <View
            width="47px"
            height="40.52px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="25.69px"
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
            height="52.37px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="95.85px"
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
            height="9.88px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="150.2px"
            left="39px"
            border="1px SOLID rgba(0,0,0,0.5)"
            borderRadius="50px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(207,209,208,1)"
            {...getOverrideProps(overrides, "Rectangle 127")}
          ></View>
          <View
            width="214px"
            height="9.88px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="150.2px"
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
            height="24.7px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="148.23px"
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
          height="393.29px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="1194.71px"
          left="0px"
          {...getOverrideProps(overrides, "Group 406")}
        >
          <View
            width="449px"
            height="393.29px"
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
            height="30.63px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="23.72px"
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
            height="17.79px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="155.14px"
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
            height="17.79px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="242.1px"
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
            height="17.79px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="310.29px"
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
            height="17.79px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="113.64px"
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
            height="17.79px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="179.85px"
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
            height="17.79px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="266.81px"
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
            height="17.79px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="336.97px"
            left="39px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="2° Semestre"
            {...getOverrideProps(overrides, "2\u00B0 Semestre")}
          ></Text>
          <View
            width="28px"
            height="27.67px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="23.72px"
            left="47px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(
              overrides,
              "book_2_24dp_000000_FILL0_wght400_GRAD0_opsz24 1"
            )}
          >
            <Icon
              width="18.67px"
              height="23.06px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 18.66666603088379,
                height: 23.057458877563477,
              }}
              paths={[
                {
                  d: "M4.08333 23.0575C2.95556 23.0575 1.99306 22.6636 1.19583 21.8758C0.398611 21.088 0 20.1368 0 19.0224L0 4.03506C0 2.92061 0.398611 1.96949 1.19583 1.18169C1.99306 0.393898 2.95556 0 4.08333 0L18.6667 0L18.6667 17.2931C18.1806 17.2931 17.7674 17.4612 17.4271 17.7975C17.0868 18.1337 16.9167 18.542 16.9167 19.0224C16.9167 19.5028 17.0868 19.9111 17.4271 20.2473C17.7674 20.5836 18.1806 20.7517 18.6667 20.7517L18.6667 23.0575L4.08333 23.0575ZM2.33333 15.362C2.60556 15.2275 2.8875 15.1315 3.17917 15.0738C3.47083 15.0162 3.77222 14.9873 4.08333 14.9873L4.66667 14.9873L4.66667 2.30575L4.08333 2.30575C3.59722 2.30575 3.18403 2.47387 2.84375 2.81013C2.50347 3.14638 2.33333 3.55469 2.33333 4.03506L2.33333 15.362ZM7 14.9873L16.3333 14.9873L16.3333 2.30575L7 2.30575L7 14.9873ZM4.08333 20.7517L14.9625 20.7517C14.8458 20.4827 14.7535 20.2089 14.6854 19.9303C14.6174 19.6517 14.5833 19.3491 14.5833 19.0224C14.5833 18.715 14.6125 18.4171 14.6708 18.1289C14.7292 17.8407 14.8264 17.5621 14.9625 17.2931L4.08333 17.2931C3.57778 17.2931 3.15972 17.4612 2.82917 17.7975C2.49861 18.1337 2.33333 18.542 2.33333 19.0224C2.33333 19.522 2.49861 19.9351 2.82917 20.2617C3.15972 20.5884 3.57778 20.7517 4.08333 20.7517Z",
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
            height="17.79px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="87.95px"
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
          height="174.91px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="565.24px"
          left="0px"
          {...getOverrideProps(overrides, "Group 405")}
        >
          <View
            width="449px"
            height="174.91px"
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
          height="23.72px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="422.94px"
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
          height="24.7px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="463.46px"
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
          height="24.7px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="506.93px"
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
          height="30.63px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="368.59px"
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
          height="30.63px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="587.96px"
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
          top="347.84px"
          left="14px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          {...getOverrideProps(overrides, "Line 52")}
        ></Icon>
        <View
          width="35px"
          height="34.59px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="306.33px"
          left="16px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Male User")}
        ></View>
        <View
          width="24px"
          height="23.72px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="547.59px"
          left="2px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "person_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1"
          )}
        ></View>
        <View
          width="35px"
          height="34.59px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="580.06px"
          left="34px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ProfileIconBlack 141121464")}
        >
          <Icon
            width="23.33px"
            height="23.06px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 23.33333396911621,
              height: 23.05745506286621,
            }}
            paths={[
              {
                d: "M11.6667 11.5287C10.0625 11.5287 8.68924 10.9643 7.54688 9.83545C6.40451 8.70659 5.83333 7.34956 5.83333 5.76436C5.83333 4.17916 6.40451 2.82214 7.54688 1.69328C8.68924 0.564427 10.0625 0 11.6667 0C13.2708 0 14.6441 0.564427 15.7865 1.69328C16.9288 2.82214 17.5 4.17916 17.5 5.76436C17.5 7.34956 16.9288 8.70659 15.7865 9.83545C14.6441 10.9643 13.2708 11.5287 11.6667 11.5287ZM0 23.0575L0 19.0224C0 18.2058 0.212674 17.4552 0.638021 16.7707C1.06337 16.0862 1.62847 15.5638 2.33333 15.2035C3.84028 14.4589 5.37153 13.9005 6.92708 13.5282C8.48264 13.156 10.0625 12.9698 11.6667 12.9698C13.2708 12.9698 14.8507 13.156 16.4063 13.5282C17.9618 13.9005 19.4931 14.4589 21 15.2035C21.7049 15.5638 22.27 16.0862 22.6953 16.7707C23.1207 17.4552 23.3333 18.2058 23.3333 19.0224L23.3333 23.0575L0 23.0575ZM2.91667 20.1753L20.4167 20.1753L20.4167 19.0224C20.4167 18.7582 20.3498 18.518 20.2161 18.3019C20.0825 18.0857 19.9063 17.9176 19.6875 17.7975C18.375 17.149 17.0503 16.6626 15.7135 16.3384C14.3767 16.0141 13.0278 15.852 11.6667 15.852C10.3056 15.852 8.9566 16.0141 7.61979 16.3384C6.28299 16.6626 4.95833 17.149 3.64583 17.7975C3.42708 17.9176 3.25087 18.0857 3.11719 18.3019C2.98351 18.518 2.91667 18.7582 2.91667 19.0224L2.91667 20.1753ZM11.6667 8.64655C12.4688 8.64655 13.1554 8.36433 13.7266 7.7999C14.2977 7.23548 14.5833 6.55696 14.5833 5.76436C14.5833 4.97176 14.2977 4.29325 13.7266 3.72882C13.1554 3.1644 12.4688 2.88218 11.6667 2.88218C10.8646 2.88218 10.178 3.1644 9.60677 3.72882C9.03559 4.29325 8.75 4.97176 8.75 5.76436C8.75 6.55696 9.03559 7.23548 9.60677 7.7999C10.178 8.36433 10.8646 8.64655 11.6667 8.64655Z",
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
          height="99.81px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="627.49px"
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
        width="30.77px"
        height="33.27px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="25.56%"
        bottom="72.68%"
        left="3.96%"
        right="94.02%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ProfileIconBlack 141121461")}
      >
        <Icon
          width="20.51px"
          height="22.18px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 20.511188507080078,
            height: 22.178449630737305,
          }}
          paths={[
            {
              d: "M10.2556 11.0892C8.84545 11.0892 7.63828 10.5463 6.63409 9.46049C5.62989 8.37467 5.1278 7.06938 5.1278 5.54461C5.1278 4.01984 5.62989 2.71455 6.63409 1.62873C7.63828 0.54291 8.84545 0 10.2556 0C11.6657 0 12.8729 0.54291 13.8771 1.62873C14.8813 2.71455 15.3834 4.01984 15.3834 5.54461C15.3834 7.06938 14.8813 8.37467 13.8771 9.46049C12.8729 10.5463 11.6657 11.0892 10.2556 11.0892ZM0 22.1784L0 18.2972C0 17.5117 0.186951 16.7898 0.560853 16.1314C0.934755 15.4729 1.43151 14.9705 2.05112 14.6239C3.3758 13.9077 4.72185 13.3706 6.08926 13.0125C7.45667 12.6544 8.84545 12.4754 10.2556 12.4754C11.6657 12.4754 13.0545 12.6544 14.4219 13.0125C15.7893 13.3706 17.1354 13.9077 18.4601 14.6239C19.0797 14.9705 19.5764 15.4729 19.9503 16.1314C20.3242 16.7898 20.5112 17.5117 20.5112 18.2972L20.5112 22.1784L0 22.1784ZM2.5639 19.4061L17.9473 19.4061L17.9473 18.2972C17.9473 18.0431 17.8885 17.8121 17.771 17.6041C17.6535 17.3962 17.4986 17.2345 17.3063 17.119C16.1526 16.4952 14.9881 16.0274 13.813 15.7155C12.6379 15.4036 11.4521 15.2477 10.2556 15.2477C9.05911 15.2477 7.87331 15.4036 6.69818 15.7155C5.52306 16.0274 4.35863 16.4952 3.20487 17.119C3.01258 17.2345 2.85768 17.3962 2.74017 17.6041C2.62265 17.8121 2.5639 18.0431 2.5639 18.2972L2.5639 19.4061ZM10.2556 8.31692C10.9607 8.31692 11.5643 8.04546 12.0663 7.50255C12.5684 6.95964 12.8195 6.307 12.8195 5.54461C12.8195 4.78223 12.5684 4.12958 12.0663 3.58667C11.5643 3.04376 10.9607 2.77231 10.2556 2.77231C9.55052 2.77231 8.94694 3.04376 8.44484 3.58667C7.94274 4.12958 7.6917 4.78223 7.6917 5.54461C7.6917 6.307 7.94274 6.95964 8.44484 7.50255C8.94694 8.04546 9.55052 8.31692 10.2556 8.31692Z",
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
        top="1381.35px"
        left="1199.17px"
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
        top="1521.48px"
        left="698.24px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Line 28")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="982.89px"
        height="1587.83px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="196px"
        left="501.11px"
        {...getOverrideProps(overrides, "Group 95")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="982.89px"
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
            width="982.89px"
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
            width="982.89px"
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
            width="450.3px"
            height="53px"
            position="absolute"
            top="31px"
            left="18.71px"
            backgroundColor="rgba(234,191,63,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Vagas que estou participando "
            {...getOverrideProps(overrides, "Button39882984")}
          ></Button>
          <Button
            width="450.3px"
            height="53px"
            position="absolute"
            border="5px SOLID rgba(234,191,63,1)"
            padding="3px 11px 3px 11px"
            top="27px"
            left="500.07px"
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
            width="559.57px"
            height="22.96px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="558.3px"
            left="52.71px"
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
            width="810.64px"
            height="91.83px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="239.13px"
            left="82.72px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Poxaaa, que pena  :(  &#xA;No momento você não está participando de nenhuma vaga, busque vagas na aba “Vagas de emprego”"
            {...getOverrideProps(
              overrides,
              "Poxaaa, que pena :( No momento voc\u00EA n\u00E3o est\u00E1 participando de nenhuma vaga, busque vagas na aba \u201CVagas de emprego\u201D"
            )}
          ></Text>
          <View
            width="842.76px"
            height="679.13px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="731.74px"
            left="88.56px"
            border="1px SOLID rgba(0,0,0,0.4)"
            borderRadius="10px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,0.6)"
            {...getOverrideProps(overrides, "Rectangle 134")}
          ></View>
          <View
            width="842.76px"
            height="146.35px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1429.04px"
            left="88.56px"
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
            width="11.68px"
            height="38.26px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1502.7px"
            left="256.92px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="."
            {...getOverrideProps(overrides, ".39882990")}
          ></Text>
          <Button
            width="272.14px"
            height="65px"
            position="absolute"
            borderRadius="30px"
            top="636.91px"
            left="82.72px"
            backgroundColor="rgba(22,73,86,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Publicações"
            {...getOverrideProps(overrides, "Button39882991")}
          ></Button>
          <Button
            width="272.14px"
            height="65px"
            position="absolute"
            border="2px SOLID rgba(0,0,0,1)"
            borderRadius="30px"
            padding="6px 14px 6px 14px"
            top="636px"
            left="659.43px"
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
            width="300.71px"
            height="38.26px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="779.56px"
            left="254px"
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
            width="300.71px"
            height="38.26px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1476.87px"
            left="254px"
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
            width="31.14px"
            height="31.57px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="744.17px"
            left="857.36px"
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
            width="31.14px"
            height="31.57px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1441.48px"
            left="857.36px"
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
            width="55.47px"
            height="25.83px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="817.83px"
            left="278.32px"
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
            width="55.47px"
            height="25.83px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1515.13px"
            left="278.32px"
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
            width="11.68px"
            height="38.26px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="805.39px"
            left="254.97px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="."
            {...getOverrideProps(overrides, ".39882999")}
          ></Text>
          <Image
            width="97.25px"
            height="117.86px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="753px"
            left="128.22px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.PerfilAvatar}
            {...getOverrideProps(overrides, "AvatarPerfil 141042416")}
          ></Image>
          <Image
            width="97.25px"
            height="117.86px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1450px"
            left="128.22px"
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
            width="722.09px"
            height="107.13px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="881.91px"
            left="123.59px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Boa tarde amigos!&#xA;Hoje tive a incrível oportunidade de visitar a sede da CityCorp, e posso dizer que essa experiência foi ...mais"
            {...getOverrideProps(
              overrides,
              "Boa tarde amigos! Hoje tive a incr\u00EDvel oportunidade de visitar a sede da CityCorp, e posso dizer que essa experi\u00EAncia foi ...mais"
            )}
          ></Text>
          <Image
            width="195.61px"
            height="285.04px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="997.65px"
            left="128.46px"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.Post1}
            {...getOverrideProps(overrides, "image39883005")}
          ></Image>
          <Image
            width="229.67px"
            height="141.57px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="997.65px"
            left="329.9px"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.Post2}
            {...getOverrideProps(overrides, "image39883006")}
          ></Image>
          <Image
            width="229.67px"
            height="141.57px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="997.65px"
            left="566.38px"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.Post3}
            {...getOverrideProps(overrides, "image39883007")}
          ></Image>
          <Image
            width="229.67px"
            height="136.78px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1145.91px"
            left="329.9px"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={bancoImagens?.Post4}
            {...getOverrideProps(overrides, "image39883008")}
          ></Image>
          <Image
            width="229.67px"
            height="136.78px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1145.91px"
            left="566.38px"
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
            width="67.86px"
            height="24px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1200px"
            left="650.01px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="+ 4"
            {...getOverrideProps(overrides, "+ 439883010")}
          ></Text>
          <View
            padding="0px 0px 0px 0px"
            width="675.23px"
            height="50px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1331px"
            left="136.39px"
            {...getOverrideProps(overrides, "Group 65")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="675.23px"
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
                width="79px"
                height="25px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="12px"
                left="53.5px"
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
                width="149.87px"
                height="38.26px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="11.3px"
                left="260.66px"
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
                width="177.12px"
                height="38.26px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="10.35px"
                left="498.11px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Compartilhar"
                {...getOverrideProps(overrides, "Compartilhar")}
              ></Text>
              <View
                width="40.86px"
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
                  width="35.75px"
                  height="41.67px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 35.754310607910156,
                    height: 41.66666793823242,
                  }}
                  paths={[
                    {
                      d: "M27.2414 41.6667L8.51293 41.6667L8.51293 14.5833L20.431 0L22.5593 2.60417C22.7579 2.84722 22.9211 3.17708 23.0488 3.59375C23.1765 4.01042 23.2403 4.40972 23.2403 4.79167L23.2403 5.52083L21.3675 14.5833L32.3491 14.5833C33.2572 14.5833 34.0517 15 34.7328 15.8333C35.4138 16.6667 35.7543 17.6389 35.7543 18.75L35.7543 22.9167C35.7543 23.1597 35.7259 23.4201 35.6692 23.6979C35.6124 23.9757 35.5557 24.2361 35.4989 24.4792L30.3912 39.1667C30.1358 39.8611 29.7101 40.4514 29.1142 40.9375C28.5183 41.4236 27.894 41.6667 27.2414 41.6667ZM11.9181 37.5L27.2414 37.5L32.3491 22.9167L32.3491 18.75L17.0259 18.75L19.3244 7.29167L11.9181 16.3542L11.9181 37.5ZM8.51293 14.5833L8.51293 18.75L3.40517 18.75L3.40517 37.5L8.51293 37.5L8.51293 41.6667L0 41.6667L0 14.5833L8.51293 14.5833Z",
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
                width="40.86px"
                height="50px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="0px"
                left="444.58px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "SendIconBlack 1")}
              >
                <Icon
                  width="32.35px"
                  height="33.33px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 32.34913635253906,
                    height: 33.33333206176758,
                  }}
                  paths={[
                    {
                      d: "M0 33.3333L0 0L32.3491 16.6667L0 33.3333ZM3.40517 27.0833L23.5808 16.6667L3.40517 6.25L3.40517 13.5417L13.6207 16.6667L3.40517 19.7917L3.40517 27.0833Z",
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
            width="103.16px"
            height="22.96px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="803.48px"
            left="848.6px"
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
            width="103.16px"
            height="22.96px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1496px"
            left="859.3px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="5 d"
            {...getOverrideProps(overrides, "5 d")}
          ></Text>
        </View>
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
        top="621px"
        left="54px"
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
        top="665px"
        left="54px"
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
        top="709px"
        left="54px"
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
        top="1279px"
        left="92px"
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
        width="50px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="1531px"
        left="827px"
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
        top="1254px"
        left="75px"
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
        top="1311px"
        left="75px"
        backgroundColor="rgba(207,209,208,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Modelos de Currículos"
        {...getOverrideProps(overrides, "Button41231373")}
      ></Button>
      <Icon
        width="18.46px"
        height="18.06px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 18.46006965637207,
          height: 18.059595108032227,
        }}
        paths={[
          {
            d: "M8.79051 8.55455L1.7581 3.80202L1.7581 13.3071L9.66956 13.3071L9.66956 15.2081L1.7581 15.2081C1.27462 15.2081 0.860737 15.0219 0.516442 14.6497C0.172147 14.2774 0 13.8298 0 13.3071L0 1.90101C0 1.37823 0.172147 0.930703 0.516442 0.558422C0.860737 0.186141 1.27462 0 1.7581 0L15.8229 0C16.3064 0 16.7203 0.186141 17.0646 0.558422C17.4089 0.930703 17.581 1.37823 17.581 1.90101L17.581 8.55455L15.8229 8.55455L15.8229 3.80202L8.79051 8.55455ZM8.79051 6.65353L15.8229 1.90101L1.7581 1.90101L8.79051 6.65353ZM14.9439 18.0596L13.7132 16.7289L15.0977 15.2081L11.4277 15.2081L11.4277 13.3071L15.0977 13.3071L13.6912 11.7863L14.9439 10.4556L18.4601 14.2576L14.9439 18.0596ZM1.7581 3.80202L1.7581 14.2576L1.7581 8.55455L1.7581 8.62583L1.7581 1.90101L1.7581 3.80202Z",
            fill: "rgba(8,8,8,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="67.39%"
        bottom="31.65%"
        left="5.75%"
        right="93.03%"
        {...getOverrideProps(overrides, "Vector39883033")}
      ></Icon>
      <Icon
        width="19.34px"
        height="19.01px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 19.339120864868164,
          height: 19.010101318359375,
        }}
        paths={[
          {
            d: "M8.79051 8.55455L1.7581 3.80202L1.7581 13.3071L10.5486 13.3071L10.5486 15.2081L1.7581 15.2081C1.27462 15.2081 0.860737 15.0219 0.516442 14.6497C0.172147 14.2774 0 13.8298 0 13.3071L0 1.90101C0 1.37823 0.172147 0.930703 0.516442 0.558422C0.860737 0.186141 1.27462 0 1.7581 0L15.8229 0C16.3064 0 16.7203 0.186141 17.0646 0.558422C17.4089 0.930703 17.581 1.37823 17.581 1.90101L17.581 6.65354L15.8229 6.65354L15.8229 3.80202L8.79051 8.55455ZM8.79051 6.65354L15.8229 1.90101L1.7581 1.90101L8.79051 6.65354ZM15.8229 19.0101C14.856 19.0101 14.0282 18.6378 13.3396 17.8933C12.651 17.1487 12.3067 16.2536 12.3067 15.2081L12.3067 10.9308C12.3067 10.2655 12.5192 9.70307 12.944 9.24366C13.3689 8.78425 13.889 8.55455 14.5043 8.55455C15.1197 8.55455 15.6398 8.78425 16.0647 9.24366C16.4895 9.70307 16.702 10.2655 16.702 10.9308L16.702 15.2081L14.9439 15.2081L14.9439 10.9308C14.9439 10.8041 14.8999 10.6932 14.812 10.5981C14.7241 10.5031 14.6215 10.4556 14.5043 10.4556C14.3871 10.4556 14.2846 10.5031 14.1967 10.5981C14.1088 10.6932 14.0648 10.8041 14.0648 10.9308L14.0648 15.2081C14.0648 15.7309 14.237 16.1784 14.5813 16.5507C14.9256 16.923 15.3394 17.1091 15.8229 17.1091C16.3064 17.1091 16.7203 16.923 17.0646 16.5507C17.4089 16.1784 17.581 15.7309 17.581 15.2081L17.581 11.4061L19.3391 11.4061L19.3391 15.2081C19.3391 16.2536 18.9948 17.1487 18.3062 17.8933C17.6176 18.6378 16.7899 19.0101 15.8229 19.0101ZM1.7581 3.80202L1.7581 1.90101L1.7581 13.3071L1.7581 3.80202Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="70.46%"
        bottom="28.53%"
        left="5.73%"
        right="93%"
        {...getOverrideProps(overrides, "Vector41231381")}
      ></Icon>
    </View>
  );
}
