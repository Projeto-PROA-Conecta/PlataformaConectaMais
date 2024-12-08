/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, IconProps, ImageProps, SelectFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeOverridesProps = {
    Home?: PrimitiveOverrideProps<ViewProps>;
    "Fundo Novo"?: PrimitiveOverrideProps<ViewProps>;
    NavBarHeaderConecta?: PrimitiveOverrideProps<FlexProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    "logo_branca_conecta 2"?: PrimitiveOverrideProps<ImageProps>;
    Button44402345?: PrimitiveOverrideProps<ButtonProps>;
    Button44402939?: PrimitiveOverrideProps<ButtonProps>;
    Button442412293?: PrimitiveOverrideProps<ButtonProps>;
    Button442412321?: PrimitiveOverrideProps<ButtonProps>;
    Button442914236?: PrimitiveOverrideProps<ButtonProps>;
    Button442412389?: PrimitiveOverrideProps<ButtonProps>;
    Button442412429?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    Button42762783?: PrimitiveOverrideProps<ButtonProps>;
    Button42762784?: PrimitiveOverrideProps<ButtonProps>;
    BackgroundDaHome?: PrimitiveOverrideProps<ImageProps>;
    "Conecte-se com oportunidades que valorizam suas habilidades"?: PrimitiveOverrideProps<TextProps>;
    "Sobre n\u00F3s n\u00F3s"?: PrimitiveOverrideProps<TextProps>;
    "Sabemos que pessoas com TEA possuem certas limita\u00E7\u00F5es, como a necessidade de interfaces mais simples e menos sobrecarregadas de informa\u00E7\u00E3o. Assim, criamos a Conecta+, uma plataforma que conecta empregadores e candidatos com TEA, promovendo a inclus\u00E3o no mercado de trabalho."?: PrimitiveOverrideProps<TextProps>;
    "Categorias de vagas"?: PrimitiveOverrideProps<TextProps>;
    "Frame 432 1"?: PrimitiveOverrideProps<ImageProps>;
    "Group 468"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 112"?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<IconProps>;
    "Sa\u00FAde"?: PrimitiveOverrideProps<TextProps>;
    Tecnologia?: PrimitiveOverrideProps<TextProps>;
    Vector42779214?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 94"?: PrimitiveOverrideProps<ViewProps>;
    Design?: PrimitiveOverrideProps<TextProps>;
    Vector42779217?: PrimitiveOverrideProps<IconProps>;
    Vector42779218?: PrimitiveOverrideProps<IconProps>;
    Vector42779231?: PrimitiveOverrideProps<IconProps>;
    Vector42789234?: PrimitiveOverrideProps<IconProps>;
    "Recomenda\u00E7\u00E3o de vaga"?: PrimitiveOverrideProps<TextProps>;
    "RecomendacaoImg 1"?: PrimitiveOverrideProps<ImageProps>;
    "Group 467"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 202"?: PrimitiveOverrideProps<IconProps>;
    "ANALISTA DE DADOS"?: PrimitiveOverrideProps<TextProps>;
    "4,5"?: PrimitiveOverrideProps<TextProps>;
    Vector42789421?: PrimitiveOverrideProps<IconProps>;
    "REKTR TEC"?: PrimitiveOverrideProps<TextProps>;
    Vector42789426?: PrimitiveOverrideProps<IconProps>;
    "1.783 avalia\u00E7\u00F5es"?: PrimitiveOverrideProps<TextProps>;
    "S\u00E3o Paulo - SP"?: PrimitiveOverrideProps<TextProps>;
    "R$ 5.200,00"?: PrimitiveOverrideProps<TextProps>;
    "H\u00EDbrido"?: PrimitiveOverrideProps<TextProps>;
    Vector42789437?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 203"?: PrimitiveOverrideProps<ViewProps>;
    REKTR?: PrimitiveOverrideProps<TextProps>;
    HomeFooter?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 204"?: PrimitiveOverrideProps<ViewProps>;
    "Copyright \u00A9 2024-2024 ConectaMais"?: PrimitiveOverrideProps<TextProps>;
    Suporte?: PrimitiveOverrideProps<TextProps>;
    Contato?: PrimitiveOverrideProps<TextProps>;
    "Mapa do site"?: PrimitiveOverrideProps<TextProps>;
    "Redes Sociais"?: PrimitiveOverrideProps<TextProps>;
    Vector42789506?: PrimitiveOverrideProps<IconProps>;
    Vector42789507?: PrimitiveOverrideProps<IconProps>;
    Vector42789508?: PrimitiveOverrideProps<IconProps>;
    Vector42789510?: PrimitiveOverrideProps<IconProps>;
    Vector42789511?: PrimitiveOverrideProps<IconProps>;
    Vector42789512?: PrimitiveOverrideProps<IconProps>;
    "In\u00EDcio"?: PrimitiveOverrideProps<TextProps>;
    Vagas?: PrimitiveOverrideProps<TextProps>;
    Perfil?: PrimitiveOverrideProps<TextProps>;
    Plus?: PrimitiveOverrideProps<TextProps>;
    Ajuda?: PrimitiveOverrideProps<TextProps>;
    SearchField?: PrimitiveOverrideProps<FlexProps>;
    Button42982257?: PrimitiveOverrideProps<ButtonProps>;
    "Rectangle 184"?: PrimitiveOverrideProps<ViewProps>;
    Button42982280?: PrimitiveOverrideProps<ButtonProps>;
    Vector42982285?: PrimitiveOverrideProps<IconProps>;
    Vector42982286?: PrimitiveOverrideProps<IconProps>;
    "WokIconT 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector42982305?: PrimitiveOverrideProps<IconProps>;
    SelectField43022402?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField43022422?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField43022412?: PrimitiveOverrideProps<SelectFieldProps>;
    Button44401543?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type HomeProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HomeOverridesProps | undefined | null;
}>;
export default function Home(props: HomeProps): React.ReactElement;
