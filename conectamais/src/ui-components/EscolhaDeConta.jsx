/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function EscolhaDeConta(props) {
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
      {...getOverrideProps(overrides, "EscolhaDeConta")}
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
          src={bancoImagens?.ImagemDeFundo}
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
          fontSize="36px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="43.88399887084961px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 22px - -65.5px)"
          left="153px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Qual seu tipo de conta?"
          {...getOverrideProps(overrides, "Qual seu tipo de conta?")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="800px"
          height="883px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="138px"
          left="823px"
          {...getOverrideProps(overrides, "Group 3")}
        >
          <View
            width="800px"
            height="883px"
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
          <Image
            width="275px"
            height="140px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="121px"
            left="262px"
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
          top="455px"
          left="123px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Bem-vindo!"
          {...getOverrideProps(overrides, "Bem-vindo!")}
        ></Text>
        <Button
          width="620px"
          height="120px"
          position="absolute"
          borderRadius="10px"
          top="426px"
          left="911px"
          backgroundColor="rgba(22,70,89,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Pessoal"
          {...getOverrideProps(overrides, "Button39885475")}
        ></Button>
        <Button
          width="620px"
          height="120px"
          position="absolute"
          borderRadius="10px"
          top="590px"
          left="911px"
          backgroundColor="rgba(38,25,13,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Empresa"
          {...getOverrideProps(overrides, "Button39885476")}
        ></Button>
        <Text
          fontFamily="Montserrat"
          fontSize="26px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="31.694000244140625px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="757px"
          left="1185px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Voltar"
          {...getOverrideProps(overrides, "Voltar")}
        ></Text>
        <Icon
          width="71.39px"
          height="8.63px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 71.39097595214844,
            height: 8.62678050994873,
          }}
          paths={[
            {
              d: "M67.1835 0L4.20746 0C1.88375 0 0 1.93117 0 4.31338L0 4.31341C0 6.69562 1.88375 8.62678 4.20746 8.62678L67.1835 8.62678C69.5072 8.62678 71.391 6.69562 71.391 4.31338C71.391 1.93117 69.5072 0 67.1835 0Z",
              fill: "rgba(202,202,203,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="75.94%"
          bottom="23.28%"
          left="54.33%"
          right="41.54%"
          {...getOverrideProps(overrides, "Vector39885478")}
        ></Icon>
        <Icon
          width="26.87px"
          height="8.63px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 26.873409271240234,
            height: 8.626773834228516,
          }}
          paths={[
            {
              d: "M4.20747 0L22.6659 0C24.9897 0 26.8734 1.93117 26.8734 4.31339C26.8734 6.6956 24.9897 8.62677 22.6659 8.62677L4.20747 8.62677C1.88376 8.62677 0 6.6956 0 4.31339C0 1.93117 1.88375 0 4.20747 0Z",
              fill: "rgba(202,202,203,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="77.94%"
          bottom="21.29%"
          left="54.33%"
          right="44.12%"
          {...getOverrideProps(overrides, "Vector39885479")}
        ></Icon>
        <Icon
          width="6.98px"
          height="7.03px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 9.673191442530879,
            height: 9.916699075491124,
          }}
          paths={[
            {
              d: "M6.9796 0L0 0L0 7.03111L6.9796 7.03111L6.9796 0Z",
              fill: "rgba(232,152,155,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="88.23%"
          bottom="11.14%"
          left="50.69%"
          right="48.9%"
          transformOrigin="top left"
          transform="rotate(-142.92deg)"
          {...getOverrideProps(overrides, "Vector39885480")}
        ></Icon>
        <Icon
          width="21.81px"
          height="20.09px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 21.812164306640625,
            height: 20.085426330566406,
          }}
          paths={[
            {
              d: "M0.109698 6.69435C-0.0823396 5.93912 -0.0220381 5.30345 0.289005 4.80497C0.644759 4.23479 1.32951 3.85207 2.3241 3.66735C2.46305 3.5029 4.19174 1.47093 4.8564 1.37545C4.90729 1.23521 5.26258 0.318996 5.94342 0.0642626C6.26414 -0.055718 6.60737 -0.00753505 6.96359 0.207489L6.9791 0.21688L6.97695 0.2352C6.97414 0.259143 6.71052 2.64245 8.01827 3.85757C8.76803 4.55421 9.88668 4.73997 11.3434 4.40936C11.4211 4.36229 12.4566 3.40125 13.1384 2.76234L13.1656 2.73678L17.8826 12.707L21.4659 17.3862C21.9162 17.9743 21.9285 18.8054 21.4957 19.4072C21.1267 19.9204 20.4934 20.1753 19.8824 20.0567L16.9271 19.4828C15.6922 19.2431 14.5048 18.7122 13.4932 17.9476L1.65713 9.00214C0.890284 8.42257 0.340721 7.60299 0.109698 6.69435Z",
              fill: "rgba(9,8,20,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="87.57%"
          bottom="10.63%"
          left="50.12%"
          right="48.62%"
          {...getOverrideProps(overrides, "Vector39885481")}
        ></Icon>
        <Icon
          width="6.92px"
          height="7.09px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 6.917788982391357,
            height: 7.091933250427246,
          }}
          paths={[
            {
              d: "M6.91779 0L0 0L0 7.09193L6.91779 7.09193L6.91779 0Z",
              fill: "rgba(232,152,155,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="89.31%"
          bottom="10.06%"
          left="54.43%"
          right="45.17%"
          transformOrigin="top left"
          transform="rotate(-180deg)"
          {...getOverrideProps(overrides, "Vector39885482")}
        ></Icon>
        <Icon
          width="25.53px"
          height="12.04px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 25.525503158569336,
            height: 12.044088363647461,
          }}
          paths={[
            {
              d: "M0.953126 11.1279C0.361411 10.6368 0.0420077 10.0885 0.00383578 9.49802C-0.0398486 8.82266 0.289778 8.09805 0.983415 7.34432C1.00006 7.12742 1.21535 4.44025 1.69508 3.95906C1.65486 3.81522 1.4105 2.86161 1.81107 2.24239C1.99977 1.95071 2.30393 1.7807 2.71512 1.73707L2.73303 1.7352L2.74191 1.75125C2.75351 1.77223 3.92084 3.85096 5.67681 4.03347C6.68353 4.13809 7.69146 3.6071 8.67263 2.45479C8.7079 2.36966 8.98513 0.966151 9.16407 0.0371397L9.17123 0L18.739 5.15565L24.3317 6.74214C25.0346 6.94155 25.5255 7.60302 25.5255 8.35071C25.5255 8.98826 25.1633 9.57871 24.6028 9.85492L21.8919 11.1908C20.7592 11.749 19.4961 12.0441 18.2393 12.0441L3.53449 12.0441C2.58178 12.0441 1.66502 11.7187 0.953126 11.1279Z",
              fill: "rgba(9,8,20,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="88.81%"
          bottom="10.12%"
          left="53.89%"
          right="44.63%"
          {...getOverrideProps(overrides, "Vector39885483")}
        ></Icon>
        <Icon
          width="72.04px"
          height="113.47px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 72.04478454589844,
            height: 113.474853515625,
          }}
          paths={[
            {
              d: "M27.8386 0L60.9932 0L72.0448 113.475L60.9932 113.475L43.9565 40.6611L38.8902 61.205L10.9891 106.083L0 95.1126L23.6953 56.7374L27.8386 0Z",
              fill: "rgba(9,8,20,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="78.59%"
          bottom="11.25%"
          left="50.38%"
          right="45.45%"
          {...getOverrideProps(overrides, "Vector39885484")}
        ></Icon>
        <Icon
          width="22.49px"
          height="37.26px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 22.492656707763672,
            height: 37.26198959350586,
          }}
          paths={[
            {
              d: "M0 11.5295C0 5.16189 5.03518 0 11.2462 0C17.4575 0 22.4927 5.16189 22.4927 11.5295C22.4927 16.6936 19.1806 21.0642 14.6157 22.532L12.4416 37.262L1.35826 27.7933C1.35826 27.7933 3.75256 24.6668 5.03669 21.1414C2.00184 19.0766 0 15.5433 0 11.5295Z",
              fill: "rgba(232,152,155,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="71.83%"
          bottom="24.83%"
          left="52.57%"
          right="46.13%"
          {...getOverrideProps(overrides, "Vector39885485")}
        ></Icon>
        <Icon
          width="24.96px"
          height="24.87px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 24.961462020874023,
            height: 24.870262145996094,
          }}
          paths={[
            {
              d: "M7.81863 24.8703C7.81863 24.8703 5.67425 13.7477 8.77358 15.0716C11.8729 16.3954 11.0436 18.6335 11.0436 18.6335L14.0138 14.1323L14.0138 8.96906L15.9508 6.71843L24.2157 10.293C24.2157 10.293 28.6064 -2.94601 16.08 1.29046C16.08 1.29046 5.36147 -3.21079 2.26214 4.6002C-5.08578 22.1959 7.81863 24.8703 7.81863 24.8703Z",
              fill: "rgba(9,8,20,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="71.53%"
          bottom="26.24%"
          left="52.43%"
          right="46.13%"
          {...getOverrideProps(overrides, "Vector39885486")}
        ></Icon>
        <Icon
          width="34.62px"
          height="51.43px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 34.61585998535156,
            height: 51.42610168457031,
          }}
          paths={[
            {
              d: "M0.973357 51.285L30.3647 51.4186C32.8117 51.5452 34.8297 50.0544 34.5977 48.2916L29.028 5.98109L19.0683 0.629532C16.9671 -0.499486 14.3923 -0.0818322 12.7337 1.65705L6.83157 7.84497C5.2835 9.46801 4.28882 11.3322 3.92865 13.2855L1.17318 41.2969C0.992095 42.279 1.14742 43.2781 1.62557 44.2068L2.70654 46.3063C3.85235 48.5318 -2.30742 51.1152 0.973357 51.285Z",
              fill: "rgba(234,191,63,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="74.07%"
          bottom="21.33%"
          left="51.94%"
          right="46.05%"
          {...getOverrideProps(overrides, "Vector39885487")}
        ></Icon>
        <Icon
          width="20.72px"
          height="17.15px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 20.718551635742188,
            height: 17.145071029663086,
          }}
          paths={[
            {
              d: "M9.10658 11.5945L0 5.45087L3.499 0L12.6056 6.14365C14.1869 5.78311 16.0417 6.11837 17.664 7.21285C20.5027 9.12791 21.5506 12.6327 20.0046 15.0411C18.4587 17.4494 14.9043 17.8493 12.0656 15.9343C10.4433 14.8398 9.40922 13.226 9.10658 11.5945Z",
              fill: "rgba(232,152,155,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="78.07%"
          bottom="20.39%"
          left="53.53%"
          right="45.27%"
          {...getOverrideProps(overrides, "Vector39885488")}
        ></Icon>
        <Icon
          width="29.94px"
          height="46px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 29.937557220458984,
            height: 45.996864318847656,
          }}
          paths={[
            {
              d: "M0 10.8563L2.85901 34.0959L21.4972 45.9969L29.9376 37.4996L11.7869 27.4181L14.5143 0",
              fill: "rgba(234,191,63,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="74.93%"
          bottom="20.95%"
          left="52.47%"
          right="45.8%"
          {...getOverrideProps(overrides, "Vector39885489")}
        ></Icon>
        <Icon
          width="42.98px"
          height="35.5px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 42.98141860961914,
            height: 35.49647903442383,
          }}
          paths={[
            {
              d: "M2.2657 0.401901C4.47314 -0.719967 7.33457 0.587317 8.65686 3.32184C9.41256 4.88464 9.49948 6.5739 9.02535 7.94526L9.05543 8.00748L17.731 23.8408L33.256 15.4729C36.1665 13.6348 39.6726 13.1396 41.6996 15.9615C44.2113 19.4581 42.8867 24.4417 38.992 26.1487L18.734 35.0278C15.856 36.2892 12.5256 34.9168 11.2998 31.9643L4.02914 10.4844C2.67741 10.0409 1.41863 8.94722 0.662931 7.38442C-0.659387 4.64992 0.0582516 1.52377 2.2657 0.401901Z",
              fill: "rgba(155,97,106,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="74.17%"
          bottom="22.65%"
          left="86.64%"
          right="10.87%"
          {...getOverrideProps(overrides, "Vector39885490")}
        ></Icon>
        <Icon
          width="24.79px"
          height="22.59px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 24.786069869995117,
            height: 22.59414291381836,
          }}
          paths={[
            {
              d: "M17.889 0L0 9.12559L6.77846 22.5941L24.7861 11.6871",
              fill: "rgba(202,202,203,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="75.13%"
          bottom="22.84%"
          left="87.9%"
          right="10.67%"
          {...getOverrideProps(overrides, "Vector39885491")}
        ></Icon>
        <Icon
          width="6.71px"
          height="9.06px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 6.708267688751221,
            height: 9.064221382141113,
          }}
          paths={[
            {
              d: "M6.70827 0L0 0L0 9.06422L6.70827 9.06422L6.70827 0Z",
              fill: "rgba(155,97,106,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="88.35%"
          bottom="10.84%"
          left="87.41%"
          right="12.2%"
          {...getOverrideProps(overrides, "Vector39885492")}
        ></Icon>
        <Icon
          width="24.75px"
          height="11.68px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 24.752466201782227,
            height: 11.679322242736816,
          }}
          paths={[
            {
              d: "M21.325 11.6793L7.06555 11.6793C5.84678 11.6793 4.62197 11.3932 3.52354 10.8519L0.894754 9.55645C0.351218 9.28861 0 8.71604 0 8.0978C0 7.37275 0.476073 6.73132 1.1577 6.53795L6.58102 4.9995L15.859 0L15.8659 0.0360158C16.0394 0.93689 16.3083 2.29788 16.3425 2.38044C17.2939 3.49784 18.2713 4.01275 19.2476 3.91129C20.9503 3.73432 22.0823 1.71856 22.0936 1.69821L22.1022 1.68265L22.1196 1.68446C22.5183 1.72677 22.8132 1.89162 22.9962 2.17447C23.3847 2.77493 23.1477 3.69966 23.1087 3.83915C23.5739 4.30577 23.7827 6.91157 23.7988 7.12189C24.4714 7.8528 24.7911 8.55546 24.7487 9.21037C24.7117 9.78294 24.402 10.3147 23.8282 10.7909C23.1379 11.3638 22.2489 11.6793 21.325 11.6793Z",
              fill: "rgba(9,8,20,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="88.68%"
          bottom="10.28%"
          left="86.5%"
          right="12.07%"
          {...getOverrideProps(overrides, "Vector39885493")}
        ></Icon>
        <Icon
          width="6.72px"
          height="9.05px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 8.910975717397378,
            height: 10.624397399969894,
          }}
          paths={[
            {
              d: "M6.7216 0L0 0L0 9.04704L6.7216 9.04704L6.7216 0Z",
              fill: "rgba(155,97,106,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="88.15%"
          bottom="11.04%"
          left="89.99%"
          right="9.62%"
          transformOrigin="top left"
          transform="rotate(-16.61deg)"
          {...getOverrideProps(overrides, "Vector39885494")}
        ></Icon>
        <Icon
          width="24.17px"
          height="14.27px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 24.16912078857422,
            height: 14.267983436584473,
          }}
          paths={[
            {
              d: "M21.5145 9.85211L7.82261 13.9355C6.65235 14.2845 5.39836 14.3605 4.19616 14.1553L1.31904 13.6642C0.724161 13.5626 0.230924 13.1134 0.0624732 12.5198C-0.13508 11.8236 0.147236 11.0714 0.749046 10.6905L5.53732 7.66028L13.0838 0.202934L13.1002 0.23554C13.5123 1.05087 14.1413 2.2807 14.1966 2.35018C15.4147 3.15065 16.4934 3.36517 17.4032 2.9882C18.99 2.33065 19.5277 0.0709662 19.5329 0.0482059L19.5369 0.0307974L19.5541 0.027563C19.9485 -0.0459967 20.2766 0.0278521 20.5294 0.247042C21.066 0.712368 21.0904 1.66814 21.091 1.81324C21.6648 2.12807 22.5752 4.57036 22.6481 4.76768C23.4931 5.27688 23.9914 5.86004 24.1292 6.50101C24.2497 7.06139 24.0972 7.66064 23.676 8.28219C23.1692 9.03002 22.4016 9.58756 21.5145 9.85211Z",
              fill: "rgba(9,8,20,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="88.44%"
          bottom="10.28%"
          left="89.29%"
          right="9.31%"
          {...getOverrideProps(overrides, "Vector39885495")}
        ></Icon>
        <Icon
          width="21.81px"
          height="36.13px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 21.81157112121582,
            height: 36.13348388671875,
          }}
          paths={[
            {
              d: "M21.8116 11.1803C21.8116 5.0056 16.9289 0 10.9058 0C4.88273 0 0 5.0056 0 11.1803C0 16.188 3.21173 20.4262 7.63845 21.8496L9.74672 36.1335L20.4944 26.9516C20.4944 26.9516 18.1726 23.9197 16.9274 20.5011C19.8704 18.4989 21.8116 15.0726 21.8116 11.1803Z",
              fill: "rgba(155,97,106,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="72.77%"
          bottom="24%"
          left="87.99%"
          right="10.75%"
          {...getOverrideProps(overrides, "Vector39885496")}
        ></Icon>
        <Icon
          width="61.1px"
          height="153.56px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 61.103450775146484,
            height: 153.55661010742188,
          }}
          paths={[
            {
              d: "M44.2396 42.733L45.8137 20.1382C45.9503 18.1787 45.7088 16.2108 45.1028 14.3473L40.4377 0L26.696 4.52487L20.8978 18.1241L17.7397 24.0594C16.3021 26.7614 16.7728 30.1115 18.8956 32.2878L20.8978 34.3404L18.1064 44.8332L18.4001 44.8225L18.0047 44.8744C18.0047 44.8744 -0.650107 102.416 0.0175008 151.352L23.9649 151.352L25.3865 94.5454L29.5464 153.557L61.1035 151.694L44.2396 42.733Z",
              fill: "rgba(202,202,203,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="74.88%"
          bottom="11.37%"
          left="86.94%"
          right="9.52%"
          {...getOverrideProps(overrides, "Vector39885497")}
        ></Icon>
        <Icon
          width="27.56px"
          height="32.02px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 27.563995361328125,
            height: 32.02194595336914,
          }}
          paths={[
            {
              d: "M27.4401 27.6692C27.4401 27.6692 26.9308 31.6302 22.2125 31.7596C15.8318 31.9345 12.6414 32.0219 12.6414 32.0219C12.6414 32.0219 20.7323 11.8361 17.4054 14.1102C14.0786 16.3843 5.20697 6.85062 5.20697 6.85062L2.58926 11.8837C2.58926 11.8837 -3.66464 9.56203 3.26631 3.87683C3.26631 3.87683 11.5359 -2.67754 20.3151 1.25837C29.0943 5.19428 27.4401 27.6692 27.4401 27.6692Z",
              fill: "rgba(9,8,20,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="72.61%"
          bottom="24.53%"
          left="87.87%"
          right="10.54%"
          {...getOverrideProps(overrides, "Vector39885498")}
        ></Icon>
        <Icon
          width="37.64px"
          height="35.38px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 37.64456558227539,
            height: 35.38191223144531,
          }}
          paths={[
            {
              d: "M0.00501298 31.0907C-0.122136 28.5682 2.18499 26.3957 5.15817 26.2382C6.85736 26.1482 8.40403 26.7376 9.4432 27.7285L9.51085 27.725L27.131 25.8542L25.809 7.92383C25.32 4.45539 26.2699 0.960178 29.6013 0.174423C33.7292 -0.799213 37.6639 2.42703 37.6445 6.76935L37.5434 29.3555C37.529 32.5643 34.9773 35.1522 31.8474 35.1322L9.7309 33.4377C8.79688 34.5332 7.31772 35.2829 5.61853 35.3729C2.64537 35.5304 0.132162 33.6131 0.00501298 31.0907Z",
              fill: "rgba(155,97,106,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="76.32%"
          bottom="20.51%"
          left="87.22%"
          right="10.6%"
          {...getOverrideProps(overrides, "Vector39885499")}
        ></Icon>
        <Icon
          width="15.81px"
          height="22.3px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 15.810440063476562,
            height: 22.300382614135742,
          }}
          paths={[
            {
              d: "M0 1.84492L1.06089 22.3004L15.8104 21.2748L13.2021 0",
              fill: "rgba(202,202,203,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="76.16%"
          bottom="21.85%"
          left="88.61%"
          right="10.47%"
          {...getOverrideProps(overrides, "Vector39885500")}
        ></Icon>
        <Icon
          width="92.84px"
          height="8.63px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 92.83540344238281,
            height: 8.626782417297363,
          }}
          paths={[
            {
              d: "M88.6279 0L4.20747 0C1.88375 0 0 1.93117 0 4.31339L0 4.3134C0 6.69561 1.88375 8.62678 4.20747 8.62678L88.6279 8.62678C90.9517 8.62678 92.8354 6.69561 92.8354 4.31339C92.8354 1.93117 90.9517 0 88.6279 0Z",
              fill: "rgba(234,191,63,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="73.7%"
          bottom="25.53%"
          left="82.12%"
          right="12.51%"
          {...getOverrideProps(overrides, "Vector39885501")}
        ></Icon>
        <Icon
          width="74.65px"
          height="8.63px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 74.64834594726562,
            height: 8.62678050994873,
          }}
          paths={[
            {
              d: "M70.4409 0L4.20746 0C1.88374 0 0 1.93117 0 4.31338L0 4.31341C0 6.69562 1.88374 8.62678 4.20746 8.62678L70.4409 8.62678C72.7646 8.62678 74.6483 6.69562 74.6483 4.31338C74.6483 1.93117 72.7646 0 70.4409 0Z",
              fill: "rgba(234,191,63,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="76.84%"
          bottom="22.39%"
          left="83.17%"
          right="12.51%"
          {...getOverrideProps(overrides, "Vector39885502")}
        ></Icon>
        <Icon
          width="20.9px"
          height="8.63px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 20.90154266357422,
            height: 8.626773834228516,
          }}
          paths={[
            {
              d: "M4.20746 0L16.6941 0C19.0178 0 20.9015 1.93117 20.9015 4.31339C20.9015 6.6956 19.0178 8.62677 16.6941 8.62677L4.20746 8.62677C1.88374 8.62677 0 6.6956 0 4.31339C0 1.93118 1.88374 0 4.20746 0Z",
              fill: "rgba(234,191,63,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="78.88%"
          bottom="20.35%"
          left="86.28%"
          right="12.51%"
          {...getOverrideProps(overrides, "Vector39885503")}
        ></Icon>
        <Icon
          width="68.68px"
          height="8.63px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 68.67647552490234,
            height: 8.62678337097168,
          }}
          paths={[
            {
              d: "M64.469 0L4.20746 0C1.88374 0 0 1.93117 0 4.31339L0 4.3134C0 6.69561 1.88374 8.62678 4.20746 8.62678L64.469 8.62678C66.7927 8.62678 68.6765 6.69561 68.6765 4.31339C68.6765 1.93117 66.7927 0 64.469 0Z",
              fill: "rgba(234,191,63,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="74.8%"
          bottom="24.43%"
          left="83.52%"
          right="12.51%"
          {...getOverrideProps(overrides, "Vector39885504")}
        ></Icon>
        <Icon
          width="40px"
          height="40px"
          viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
          paths={[
            {
              d: "M20 20C17.25 20 14.8958 19.0208 12.9375 17.0625C10.9792 15.1042 10 12.75 10 10C10 7.25 10.9792 4.89583 12.9375 2.9375C14.8958 0.979167 17.25 0 20 0C22.75 0 25.1042 0.979167 27.0625 2.9375C29.0208 4.89583 30 7.25 30 10C30 12.75 29.0208 15.1042 27.0625 17.0625C25.1042 19.0208 22.75 20 20 20ZM0 40L0 33C0 31.5833 0.364583 30.2812 1.09375 29.0938C1.82292 27.9062 2.79167 27 4 26.375C6.58333 25.0833 9.20833 24.1146 11.875 23.4688C14.5417 22.8229 17.25 22.5 20 22.5C22.75 22.5 25.4583 22.8229 28.125 23.4688C30.7917 24.1146 33.4167 25.0833 36 26.375C37.2083 27 38.1771 27.9062 38.9062 29.0938C39.6354 30.2812 40 31.5833 40 33L40 40L0 40ZM5 35L35 35L35 33C35 32.5417 34.8854 32.125 34.6562 31.75C34.4271 31.375 34.125 31.0833 33.75 30.875C31.5 29.75 29.2292 28.9062 26.9375 28.3438C24.6458 27.7812 22.3333 27.5 20 27.5C17.6667 27.5 15.3542 27.7812 13.0625 28.3438C10.7708 28.9062 8.5 29.75 6.25 30.875C5.875 31.0833 5.57292 31.375 5.34375 31.75C5.11458 32.125 5 32.5417 5 33L5 35ZM20 15C21.375 15 22.5521 14.5104 23.5312 13.5312C24.5104 12.5521 25 11.375 25 10C25 8.625 24.5104 7.44792 23.5312 6.46875C22.5521 5.48958 21.375 5 20 5C18.625 5 17.4479 5.48958 16.4688 6.46875C15.4896 7.44792 15 8.625 15 10C15 11.375 15.4896 12.5521 16.4688 13.5312C17.4479 14.5104 18.625 15 20 15Z",
              fill: "rgba(232,234,237,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="466px"
          left="959px"
          {...getOverrideProps(overrides, "Vector3997663")}
        ></Icon>
        <Icon
          width="40px"
          height="40px"
          viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
          paths={[
            {
              d: "M20 20C17.25 20 14.8958 19.0208 12.9375 17.0625C10.9792 15.1042 10 12.75 10 10C10 7.25 10.9792 4.89583 12.9375 2.9375C14.8958 0.979167 17.25 0 20 0C22.75 0 25.1042 0.979167 27.0625 2.9375C29.0208 4.89583 30 7.25 30 10C30 12.75 29.0208 15.1042 27.0625 17.0625C25.1042 19.0208 22.75 20 20 20ZM0 40L0 33C0 31.5833 0.364583 30.2812 1.09375 29.0938C1.82292 27.9062 2.79167 27 4 26.375C6.58333 25.0833 9.20833 24.1146 11.875 23.4688C14.5417 22.8229 17.25 22.5 20 22.5C22.75 22.5 25.4583 22.8229 28.125 23.4688C30.7917 24.1146 33.4167 25.0833 36 26.375C37.2083 27 38.1771 27.9062 38.9062 29.0938C39.6354 30.2812 40 31.5833 40 33L40 40L0 40ZM5 35L35 35L35 33C35 32.5417 34.8854 32.125 34.6562 31.75C34.4271 31.375 34.125 31.0833 33.75 30.875C31.5 29.75 29.2292 28.9062 26.9375 28.3438C24.6458 27.7812 22.3333 27.5 20 27.5C17.6667 27.5 15.3542 27.7812 13.0625 28.3438C10.7708 28.9062 8.5 29.75 6.25 30.875C5.875 31.0833 5.57292 31.375 5.34375 31.75C5.11458 32.125 5 32.5417 5 33L5 35ZM20 15C21.375 15 22.5521 14.5104 23.5312 13.5312C24.5104 12.5521 25 11.375 25 10C25 8.625 24.5104 7.44792 23.5312 6.46875C22.5521 5.48958 21.375 5 20 5C18.625 5 17.4479 5.48958 16.4688 6.46875C15.4896 7.44792 15 8.625 15 10C15 11.375 15.4896 12.5521 16.4688 13.5312C17.4479 14.5104 18.625 15 20 15Z",
              fill: "rgba(232,234,237,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="466px"
          left="1442px"
          {...getOverrideProps(overrides, "Vector3997659")}
        ></Icon>
        <Icon
          width="40px"
          height="40px"
          viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
          paths={[
            {
              d: "M0 40L0 8.88889L8.88889 8.88889L8.88889 0L31.1111 0L31.1111 17.7778L40 17.7778L40 40L22.2222 40L22.2222 31.1111L17.7778 31.1111L17.7778 40L0 40ZM4.44444 35.5556L8.88889 35.5556L8.88889 31.1111L4.44444 31.1111L4.44444 35.5556ZM4.44444 26.6667L8.88889 26.6667L8.88889 22.2222L4.44444 22.2222L4.44444 26.6667ZM4.44444 17.7778L8.88889 17.7778L8.88889 13.3333L4.44444 13.3333L4.44444 17.7778ZM13.3333 26.6667L17.7778 26.6667L17.7778 22.2222L13.3333 22.2222L13.3333 26.6667ZM13.3333 17.7778L17.7778 17.7778L17.7778 13.3333L13.3333 13.3333L13.3333 17.7778ZM13.3333 8.88889L17.7778 8.88889L17.7778 4.44444L13.3333 4.44444L13.3333 8.88889ZM22.2222 26.6667L26.6667 26.6667L26.6667 22.2222L22.2222 22.2222L22.2222 26.6667ZM22.2222 17.7778L26.6667 17.7778L26.6667 13.3333L22.2222 13.3333L22.2222 17.7778ZM22.2222 8.88889L26.6667 8.88889L26.6667 4.44444L22.2222 4.44444L22.2222 8.88889ZM31.1111 35.5556L35.5556 35.5556L35.5556 31.1111L31.1111 31.1111L31.1111 35.5556ZM31.1111 26.6667L35.5556 26.6667L35.5556 22.2222L31.1111 22.2222L31.1111 26.6667Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="630px"
          left="1442px"
          {...getOverrideProps(overrides, "Vector3997655")}
        ></Icon>
        <Icon
          width="40px"
          height="40px"
          viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
          paths={[
            {
              d: "M0 40L0 8.88889L8.88889 8.88889L8.88889 0L31.1111 0L31.1111 17.7778L40 17.7778L40 40L22.2222 40L22.2222 31.1111L17.7778 31.1111L17.7778 40L0 40ZM4.44444 35.5556L8.88889 35.5556L8.88889 31.1111L4.44444 31.1111L4.44444 35.5556ZM4.44444 26.6667L8.88889 26.6667L8.88889 22.2222L4.44444 22.2222L4.44444 26.6667ZM4.44444 17.7778L8.88889 17.7778L8.88889 13.3333L4.44444 13.3333L4.44444 17.7778ZM13.3333 26.6667L17.7778 26.6667L17.7778 22.2222L13.3333 22.2222L13.3333 26.6667ZM13.3333 17.7778L17.7778 17.7778L17.7778 13.3333L13.3333 13.3333L13.3333 17.7778ZM13.3333 8.88889L17.7778 8.88889L17.7778 4.44444L13.3333 4.44444L13.3333 8.88889ZM22.2222 26.6667L26.6667 26.6667L26.6667 22.2222L22.2222 22.2222L22.2222 26.6667ZM22.2222 17.7778L26.6667 17.7778L26.6667 13.3333L22.2222 13.3333L22.2222 17.7778ZM22.2222 8.88889L26.6667 8.88889L26.6667 4.44444L22.2222 4.44444L22.2222 8.88889ZM31.1111 35.5556L35.5556 35.5556L35.5556 31.1111L31.1111 31.1111L31.1111 35.5556ZM31.1111 26.6667L35.5556 26.6667L35.5556 22.2222L31.1111 22.2222L31.1111 26.6667Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="630px"
          left="959px"
          {...getOverrideProps(overrides, "Vector3997657")}
        ></Icon>
        <Icon
          width="135px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 135.0037078857422, height: 1 }}
          paths={[
            {
              d: "M0 0L135.004 0L135.004 -1L0 -1L0 0Z",
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
          top="796.5px"
          left="1155px"
          {...getOverrideProps(overrides, "Line 53")}
        ></Icon>
      </View>
    </View>
  );
}
