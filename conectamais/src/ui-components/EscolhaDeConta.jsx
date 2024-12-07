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
      width="1519px"
      height="1033px"
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
        width="1519px"
        height="1033px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Login")}
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
          objectFit="cover"
          {...getOverrideProps(overrides, "Fundo Novo")}
        ></Image>
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
          width="442px"
          height="39px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 19.5px - -8px)"
          left="238px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Qual seu tipo de conta?"
          {...getOverrideProps(overrides, "Qual seu tipo de conta?")}
        ></Text>
        <Text
          fontFamily="Montserrat"
          fontSize="44px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="53.6359977722168px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="270px"
          height="62px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="449px"
          left="324px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Bem-vindo!"
          {...getOverrideProps(overrides, "Bem-vindo!")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="638px"
          height="731px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="140px"
          left="729px"
          {...getOverrideProps(overrides, "Group 441")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="638px"
            height="731px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Group 3")}
          >
            <View
              width="638px"
              height="731px"
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
              width="309px"
              height="147px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="66px"
              left="164px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              src={bancoImagens?.LogoPretaConecta}
              {...getOverrideProps(
                overrides,
                "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview"
              )}
            ></Image>
          </View>
          <Button
            width="372px"
            height="80px"
            position="absolute"
            borderRadius="10px"
            top="267px"
            left="133px"
            backgroundColor="rgba(211,152,74,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Pessoal"
            {...getOverrideProps(overrides, "Button39885475")}
          ></Button>
          <Button
            width="372px"
            height="80px"
            position="absolute"
            borderRadius="10px"
            top="407px"
            left="133px"
            backgroundColor="rgba(38,25,13,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Empresa"
            {...getOverrideProps(overrides, "Button39885476")}
          ></Button>
          <Button
            width="176.12px"
            height="36.21px"
            position="absolute"
            border="1px SOLID rgba(0,0,0,1)"
            borderRadius="10px"
            top="633px"
            left="243px"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Voltar"
            {...getOverrideProps(overrides, "Button4367752")}
          ></Button>
          <Icon
            width="31px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 31, height: 5 }}
            paths={[
              {
                d: "M29.173 0L1.827 0C0.817977 0 0 1.11929 0 2.49999L0 2.50001C0 3.88072 0.817977 5 1.827 5L29.173 5C30.182 5 31 3.88072 31 2.50001L31 2.49999C31 1.11929 30.182 0 29.173 0Z",
                fill: "rgba(202,202,203,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="84.27%"
            bottom="15.05%"
            left="12.85%"
            right="82.29%"
            {...getOverrideProps(overrides, "Vector39885478")}
          ></Icon>
          <Icon
            width="12px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 12, height: 5 }}
            paths={[
              {
                d: "M1.8788 0L10.1212 0C11.1588 0 12 1.11929 12 2.5C12 3.88071 11.1588 5 10.1212 5L1.8788 5C0.841169 5 0 3.88071 0 2.5C0 1.11929 0.841167 0 1.8788 0Z",
                fill: "rgba(202,202,203,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="86.18%"
            bottom="13.13%"
            left="12.85%"
            right="85.27%"
            {...getOverrideProps(overrides, "Vector39885479")}
          ></Icon>
          <Icon
            width="9px"
            height="12px"
            viewBox={{ minX: 0, minY: 0, width: 9, height: 12 }}
            paths={[
              {
                d: "M0.0452627 3.99953C-0.0339745 3.54832 -0.00909322 3.16854 0.119248 2.87072C0.266037 2.53007 0.548573 2.30141 0.958956 2.19105C1.01629 2.0928 1.72957 0.878805 2.00382 0.821762C2.02482 0.737973 2.17142 0.190584 2.45234 0.0383936C2.58467 -0.0332886 2.72629 -0.0045018 2.87327 0.123964L2.87967 0.129575L2.87879 0.14052C2.87763 0.154825 2.76885 1.57873 3.30845 2.3047C3.61781 2.7209 4.07938 2.83189 4.68045 2.63436C4.71249 2.60624 5.13977 2.03207 5.42107 1.65035L5.43232 1.63509L7.37859 7.59178L8.85711 10.3874C9.04294 10.7387 9.04801 11.2353 8.86943 11.5948C8.71716 11.9014 8.45586 12.0537 8.20374 11.9828L6.98435 11.64C6.47483 11.4967 5.98488 11.1796 5.56746 10.7228L0.683754 5.37831C0.367344 5.03205 0.140586 4.54239 0.0452627 3.99953Z",
                fill: "rgba(9,8,20,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="94.94%"
            bottom="3.42%"
            left="7.99%"
            right="90.6%"
            {...getOverrideProps(overrides, "Vector39885481")}
          ></Icon>
          <Icon
            width="12px"
            height="7px"
            viewBox={{ minX: 0, minY: 0, width: 12, height: 7 }}
            paths={[
              {
                d: "M0.448082 6.4675C0.169906 6.18209 0.0197486 5.8634 0.00180327 5.52023C-0.0187335 5.12771 0.13623 4.70657 0.462321 4.2685C0.470148 4.14245 0.571356 2.58066 0.796886 2.301C0.77798 2.2174 0.663103 1.66316 0.851416 1.30327C0.940127 1.13375 1.08312 1.03494 1.27643 1.00958L1.28485 1.0085L1.28902 1.01782C1.29447 1.03002 1.84326 2.23817 2.66877 2.34424C3.14205 2.40505 3.6159 2.09644 4.07716 1.42672C4.09374 1.37724 4.22407 0.561525 4.3082 0.0215855L4.31156 0L8.80952 2.99645L11.4388 3.91852C11.7692 4.03441 12 4.41886 12 4.85342C12 5.22396 11.8297 5.56713 11.5662 5.72766L10.2918 6.50409C9.75927 6.82852 9.16549 7 8.57462 7L1.66163 7C1.21374 7 0.782758 6.81089 0.448082 6.4675Z",
                fill: "rgba(9,8,20,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="96.03%"
            bottom="3.01%"
            left="12.23%"
            right="85.89%"
            {...getOverrideProps(overrides, "Vector39885483")}
          ></Icon>
          <Icon
            width="31px"
            height="67px"
            viewBox={{ minX: 0, minY: 0, width: 31, height: 67 }}
            paths={[
              {
                d: "M11.9786 0L26.2447 0L31 67L26.2447 67L18.9139 24.0079L16.734 36.1378L4.72849 62.6355L0 56.1582L10.1958 33.5L11.9786 0Z",
                fill: "rgba(9,8,20,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="86.73%"
            bottom="4.1%"
            left="8.31%"
            right="86.83%"
            {...getOverrideProps(overrides, "Vector39885484")}
          ></Icon>
          <Icon
            width="9px"
            height="22px"
            viewBox={{ minX: 0, minY: 0, width: 9, height: 22 }}
            paths={[
              {
                d: "M0 6.80717C0 3.04765 2.01473 0 4.49997 0C6.98527 0 9 3.04765 9 6.80717C9 9.85612 7.67476 12.4366 5.84821 13.3032L4.97828 22L0.543481 16.4096C0.543481 16.4096 1.50151 14.5636 2.01534 12.4822C0.800996 11.2631 0 9.17701 0 6.80717Z",
                fill: "rgba(232,152,155,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="80.57%"
            bottom="16.42%"
            left="10.82%"
            right="87.77%"
            {...getOverrideProps(overrides, "Vector39885485")}
          ></Icon>
          <Icon
            width="10px"
            height="15px"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 15 }}
            paths={[
              {
                d: "M3.13228 15C3.13228 15 2.27321 8.29162 3.51485 9.09011C4.7565 9.88859 4.42425 11.2384 4.42425 11.2384L5.61416 8.52358L5.61416 5.40951L6.39019 4.05209L9.70124 6.20799C9.70124 6.20799 11.4602 -1.77683 6.44192 0.778313C6.44192 0.778313 2.1479 -1.93652 0.906254 2.77452C-2.03745 13.387 3.13228 15 3.13228 15Z",
                fill: "rgba(9,8,20,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="80.3%"
            bottom="17.65%"
            left="10.66%"
            right="87.77%"
            {...getOverrideProps(overrides, "Vector39885486")}
          ></Icon>
          <Icon
            width="14px"
            height="31px"
            viewBox={{ minX: 0, minY: 0, width: 14, height: 31 }}
            paths={[
              {
                d: "M0.393664 30.9149L12.2807 30.9955C13.2703 31.0718 14.0865 30.1731 13.9926 29.1105L11.74 3.60544L7.71194 0.379486C6.86214 -0.301093 5.82079 -0.049329 5.15 0.99888L2.76295 4.729C2.13685 5.70738 1.73457 6.83112 1.5889 8.00857L0.474479 24.8941C0.401242 25.4861 0.464063 26.0883 0.657442 26.6482L1.09463 27.9138C1.55804 29.2553 -0.933211 30.8126 0.393664 30.9149Z",
                fill: "rgba(234,191,63,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="82.63%"
            bottom="13.13%"
            left="10.19%"
            right="87.62%"
            {...getOverrideProps(overrides, "Vector39885487")}
          ></Icon>
          <Icon
            width="9px"
            height="10px"
            viewBox={{ minX: 0, minY: 0, width: 9, height: 10 }}
            paths={[
              {
                d: "M3.95584 6.7626L0 3.17927L1.51994 0L5.47578 3.58334C6.16271 3.37305 6.96841 3.56859 7.67314 4.20695C8.90622 5.32393 9.36143 7.36812 8.68988 8.77282C8.01832 10.1775 6.47432 10.4108 5.24123 9.29378C4.53651 8.65542 4.0873 7.71419 3.95584 6.7626Z",
                fill: "rgba(232,152,155,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="86.32%"
            bottom="12.31%"
            left="11.91%"
            right="86.68%"
            {...getOverrideProps(overrides, "Vector39885488")}
          ></Icon>
          <Icon
            width="13px"
            height="28px"
            viewBox={{ minX: 0, minY: 0, width: 13, height: 28 }}
            paths={[
              {
                d: "M0 6.60861L1.24149 20.7554L9.3349 28L13 22.8274L5.1183 16.6904L6.30265 0",
                fill: "rgba(234,191,63,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="83.31%"
            bottom="12.86%"
            left="10.66%"
            right="87.3%"
            {...getOverrideProps(overrides, "Vector39885489")}
          ></Icon>
          <Icon
            width="19px"
            height="22px"
            viewBox={{ minX: 0, minY: 0, width: 19, height: 22 }}
            paths={[
              {
                d: "M1.00155 0.24909C1.97736 -0.446221 3.24226 0.364007 3.82678 2.05881C4.16083 3.0274 4.19926 4.07437 3.98967 4.92431L4.00297 4.96288L7.83802 14.776L14.7009 9.5898C15.9874 8.45054 17.5373 8.14367 18.4334 9.89261C19.5437 12.0597 18.9581 15.1484 17.2365 16.2064L8.2814 21.7095C7.00916 22.4913 5.53697 21.6407 4.9951 19.8108L1.78109 6.49799C1.18355 6.22315 0.627108 5.54531 0.29305 4.57672C-0.291483 2.88193 0.0257502 0.944402 1.00155 0.24909Z",
                fill: "rgba(155,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="82.08%"
            bottom="14.91%"
            left="88.4%"
            right="8.62%"
            {...getOverrideProps(overrides, "Vector39885490")}
          ></Icon>
          <Icon
            width="11px"
            height="8px"
            viewBox={{ minX: 0, minY: 0, width: 11, height: 8 }}
            paths={[
              {
                d: "M9.47684 8L3.13993 8C2.59831 8 2.054 7.80402 1.56586 7.43324L0.397629 6.5459C0.156081 6.36243 0 5.97024 0 5.54676C0 5.05012 0.211567 4.61076 0.514484 4.47831L2.92461 3.42451L7.04774 0L7.05082 0.0246698C7.12793 0.641742 7.2474 1.57398 7.2626 1.63053C7.68543 2.39592 8.11978 2.74862 8.55362 2.67912C9.31034 2.5579 9.81339 1.17716 9.81839 1.16323L9.82222 1.15257L9.82994 1.15381C10.0071 1.18278 10.1382 1.29571 10.2195 1.48945C10.3921 1.90075 10.2868 2.53416 10.2695 2.62971C10.4762 2.94933 10.569 4.73423 10.5762 4.87829C10.8751 5.37894 11.0172 5.86025 10.9983 6.30884C10.9819 6.70103 10.8442 7.06525 10.5893 7.39142C10.2825 7.78387 9.8874 8 9.47684 8Z",
                fill: "rgba(9,8,20,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="95.9%"
            bottom="3.01%"
            left="88.24%"
            right="10.03%"
            {...getOverrideProps(overrides, "Vector39885493")}
          ></Icon>
          <Icon
            width="11px"
            height="9px"
            viewBox={{ minX: 0, minY: 0, width: 11, height: 9 }}
            paths={[
              {
                d: "M9.79181 6.21454L3.56028 8.79025C3.02766 9.0104 2.45693 9.05835 1.90978 8.9289L0.60033 8.61913C0.329585 8.55508 0.105099 8.27173 0.0284332 7.89728C-0.0614786 7.45813 0.067011 6.98364 0.34091 6.7434L2.52018 4.83197L5.95477 0.128007L5.96226 0.148575C6.14981 0.66287 6.43607 1.43863 6.46125 1.48245C7.01562 1.98737 7.5066 2.12269 7.92064 1.8849C8.64283 1.47014 8.88755 0.0447643 8.88994 0.0304075L8.89177 0.0194265L8.89959 0.0173863C9.07909 -0.029014 9.22843 0.0175686 9.34347 0.15583C9.58768 0.44935 9.5988 1.05223 9.59905 1.14376C9.86022 1.34235 10.2746 2.8829 10.3077 3.00737C10.6923 3.32857 10.9191 3.69641 10.9818 4.10073C11.0367 4.4542 10.9672 4.8322 10.7755 5.22426C10.5449 5.69598 10.1955 6.04767 9.79181 6.21454Z",
                fill: "rgba(9,8,20,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="95.76%"
            bottom="3.01%"
            left="91.54%"
            right="6.74%"
            {...getOverrideProps(overrides, "Vector39885495")}
          ></Icon>
          <Icon
            width="10px"
            height="23px"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 23 }}
            paths={[
              {
                d: "M10 7.11658C10 3.18621 7.76143 0 5.00001 0C2.2386 0 0 3.18621 0 7.11658C0 10.3041 1.47249 13.0019 3.50202 13.9079L4.4686 23L9.39612 17.1555C9.39612 17.1555 8.33163 15.2256 7.76076 13.0495C9.11001 11.7751 10 9.59417 10 7.11658Z",
                fill: "rgba(155,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="80.71%"
            bottom="16.14%"
            left="89.97%"
            right="8.46%"
            {...getOverrideProps(overrides, "Vector39885496")}
          ></Icon>
          <Icon
            width="27px"
            height="96px"
            viewBox={{ minX: 0, minY: 0, width: 27, height: 96 }}
            paths={[
              {
                d: "M19.5483 26.7157L20.2439 12.5899C20.3042 11.3649 20.1975 10.1346 19.9297 8.96957L17.8683 0L11.7963 2.82884L9.23419 11.3307L7.83871 15.0413C7.20348 16.7306 7.41148 18.825 8.34948 20.1856L9.23419 21.4688L8.00076 28.0287L8.13053 28.022L7.95581 28.0545C7.95581 28.0545 -0.287265 64.0282 0.00773314 94.6215L10.5895 94.6215L11.2176 59.1076L13.0558 96L27 94.8354L19.5483 26.7157Z",
                fill: "rgba(202,202,203,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="82.76%"
            bottom="4.1%"
            left="88.71%"
            right="7.05%"
            {...getOverrideProps(overrides, "Vector39885497")}
          ></Icon>
          <Icon
            width="12px"
            height="20px"
            viewBox={{ minX: 0, minY: 0, width: 12, height: 20 }}
            paths={[
              {
                d: "M11.946 17.2814C11.946 17.2814 11.7243 19.7553 9.67023 19.8361C6.89237 19.9454 5.50344 20 5.50344 20C5.50344 20 9.02581 7.3925 7.57746 8.81282C6.12911 10.2331 2.26686 4.27871 2.26686 4.27871L1.12724 7.42222C1.12724 7.42222 -1.5954 5.97217 1.42199 2.42136C1.42199 2.42136 5.02217 -1.67232 8.8442 0.785942C12.6662 3.2442 11.946 17.2814 11.946 17.2814Z",
                fill: "rgba(9,8,20,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="80.57%"
            bottom="16.69%"
            left="89.81%"
            right="8.31%"
            {...getOverrideProps(overrides, "Vector39885498")}
          ></Icon>
          <Icon
            width="17px"
            height="23px"
            viewBox={{ minX: 0, minY: 0, width: 17, height: 23 }}
            paths={[
              {
                d: "M0.00226382 20.2105C-0.0551558 18.5708 0.986726 17.1585 2.32939 17.0561C3.09673 16.9976 3.7952 17.3808 4.26448 18.0249L4.29503 18.0226L12.2521 16.8065L11.6552 5.15088C11.4343 2.89623 11.8633 0.624163 13.3677 0.113384C15.2319 -0.519528 17.0087 1.57769 17 4.40042L16.9543 19.0825C16.9478 21.1684 15.7955 22.8506 14.382 22.8377L4.3944 21.7362C3.9726 22.4483 3.30463 22.9356 2.53729 22.9941C1.19463 23.0965 0.0596835 21.8502 0.00226382 20.2105Z",
                fill: "rgba(155,97,106,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="83.99%"
            bottom="12.86%"
            left="89.03%"
            right="8.31%"
            {...getOverrideProps(overrides, "Vector39885499")}
          ></Icon>
          <Icon
            width="7px"
            height="15px"
            viewBox={{ minX: 0, minY: 0, width: 7, height: 15 }}
            paths={[
              {
                d: "M0 1.24095L0.469702 15L7 14.3102L5.84516 0",
                fill: "rgba(202,202,203,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="83.86%"
            bottom="14.09%"
            left="90.75%"
            right="8.15%"
            {...getOverrideProps(overrides, "Vector39885500")}
          ></Icon>
          <Icon
            width="41px"
            height="6px"
            viewBox={{ minX: 0, minY: 0, width: 41, height: 6 }}
            paths={[
              {
                d: "M39.1418 0L1.8582 0C0.831942 0 0 1.34314 0 3L0 3C0 4.65686 0.831942 6 1.8582 6L39.1418 6C40.1681 6 41 4.65686 41 3C41 1.34314 40.1681 0 39.1418 0Z",
                fill: "rgba(234,191,63,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="81.53%"
            bottom="17.65%"
            left="83.07%"
            right="10.5%"
            {...getOverrideProps(overrides, "Vector39885501")}
          ></Icon>
          <Icon
            width="34px"
            height="6px"
            viewBox={{ minX: 0, minY: 0, width: 34, height: 6 }}
            paths={[
              {
                d: "M32.0836 0L1.91637 0C0.857986 0 0 1.34314 0 2.99999L0 3.00001C0 4.65686 0.857986 6 1.91637 6L32.0836 6C33.142 6 34 4.65686 34 2.99999C34 1.34314 33.142 0 32.0836 0Z",
                fill: "rgba(234,191,63,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="84.54%"
            bottom="14.64%"
            left="84.17%"
            right="10.5%"
            {...getOverrideProps(overrides, "Vector39885502")}
          ></Icon>
          <Icon
            width="9px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 9, height: 5 }}
            paths={[
              {
                d: "M1.81169 0L7.18831 0C8.18888 0 9 1.11929 9 2.5C9 3.88071 8.18888 5 7.18831 5L1.81169 5C0.811122 5 0 3.88071 0 2.5C0 1.11929 0.81112 0 1.81169 0Z",
                fill: "rgba(234,191,63,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="86.59%"
            bottom="12.72%"
            left="88.09%"
            right="10.5%"
            {...getOverrideProps(overrides, "Vector39885503")}
          ></Icon>
          <Icon
            width="31px"
            height="5px"
            viewBox={{ minX: 0, minY: 0, width: 31, height: 5 }}
            paths={[
              {
                d: "M29.1008 0L1.89921 0C0.850303 0 0 1.11929 0 2.5L0 2.5C0 3.88071 0.850303 5 1.89921 5L29.1008 5C30.1497 5 31 3.88071 31 2.5C31 1.11929 30.1497 0 29.1008 0Z",
                fill: "rgba(234,191,63,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="82.63%"
            bottom="16.69%"
            left="84.64%"
            right="10.5%"
            {...getOverrideProps(overrides, "Vector39885504")}
          ></Icon>
          <Icon
            width="27px"
            height="30px"
            viewBox={{ minX: 0, minY: 0, width: 27, height: 30 }}
            paths={[
              {
                d: "M13.5 15C11.6438 15 10.0547 14.2656 8.73281 12.7969C7.41094 11.3281 6.75 9.5625 6.75 7.5C6.75 5.4375 7.41094 3.67187 8.73281 2.20312C10.0547 0.734375 11.6438 0 13.5 0C15.3562 0 16.9453 0.734375 18.2672 2.20312C19.5891 3.67187 20.25 5.4375 20.25 7.5C20.25 9.5625 19.5891 11.3281 18.2672 12.7969C16.9453 14.2656 15.3562 15 13.5 15ZM0 30L0 24.75C0 23.6875 0.246094 22.7109 0.738281 21.8203C1.23047 20.9297 1.88438 20.25 2.7 19.7812C4.44375 18.8125 6.21562 18.0859 8.01562 17.6016C9.81563 17.1172 11.6438 16.875 13.5 16.875C15.3562 16.875 17.1844 17.1172 18.9844 17.6016C20.7844 18.0859 22.5562 18.8125 24.3 19.7812C25.1156 20.25 25.7695 20.9297 26.2617 21.8203C26.7539 22.7109 27 23.6875 27 24.75L27 30L0 30ZM3.375 26.25L23.625 26.25L23.625 24.75C23.625 24.4062 23.5477 24.0938 23.393 23.8125C23.2383 23.5312 23.0344 23.3125 22.7812 23.1562C21.2625 22.3125 19.7297 21.6797 18.1828 21.2578C16.6359 20.8359 15.075 20.625 13.5 20.625C11.925 20.625 10.3641 20.8359 8.81719 21.2578C7.27031 21.6797 5.7375 22.3125 4.21875 23.1562C3.96563 23.3125 3.76172 23.5312 3.60703 23.8125C3.45234 24.0938 3.375 24.4062 3.375 24.75L3.375 26.25ZM13.5 11.25C14.4281 11.25 15.2227 10.8828 15.8836 10.1484C16.5445 9.41406 16.875 8.53125 16.875 7.5C16.875 6.46875 16.5445 5.58594 15.8836 4.85156C15.2227 4.11719 14.4281 3.75 13.5 3.75C12.5719 3.75 11.7773 4.11719 11.1164 4.85156C10.4555 5.58594 10.125 6.46875 10.125 7.5C10.125 8.53125 10.4555 9.41406 11.1164 10.1484C11.7773 10.8828 12.5719 11.25 13.5 11.25Z",
                fill: "rgba(232,234,237,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="292px"
            left="205px"
            {...getOverrideProps(overrides, "Vector3997659")}
          ></Icon>
          <Icon
            width="27px"
            height="30px"
            viewBox={{ minX: 0, minY: 0, width: 27, height: 30 }}
            paths={[
              {
                d: "M0 30L0 6.66667L6 6.66667L6 0L21 0L21 13.3333L27 13.3333L27 30L15 30L15 23.3333L12 23.3333L12 30L0 30ZM3 26.6667L6 26.6667L6 23.3333L3 23.3333L3 26.6667ZM3 20L6 20L6 16.6667L3 16.6667L3 20ZM3 13.3333L6 13.3333L6 10L3 10L3 13.3333ZM9 20L12 20L12 16.6667L9 16.6667L9 20ZM9 13.3333L12 13.3333L12 10L9 10L9 13.3333ZM9 6.66667L12 6.66667L12 3.33333L9 3.33333L9 6.66667ZM15 20L18 20L18 16.6667L15 16.6667L15 20ZM15 13.3333L18 13.3333L18 10L15 10L15 13.3333ZM15 6.66667L18 6.66667L18 3.33333L15 3.33333L15 6.66667ZM21 26.6667L24 26.6667L24 23.3333L21 23.3333L21 26.6667ZM21 20L24 20L24 16.6667L21 16.6667L21 20Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="432px"
            left="205px"
            {...getOverrideProps(overrides, "Vector3997657")}
          ></Icon>
        </View>
      </View>
    </View>
  );
}
