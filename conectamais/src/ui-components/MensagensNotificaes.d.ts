/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BancoImagens } from "../models";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type MensagensNotificaesOverridesProps = {
    MensagensNotificaes?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 27"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 26"?: PrimitiveOverrideProps<ViewProps>;
    "Group 394"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 19"?: PrimitiveOverrideProps<ViewProps>;
    "Group 430"?: PrimitiveOverrideProps<ViewProps>;
    Vector41051352?: PrimitiveOverrideProps<IconProps>;
    Ajuda?: PrimitiveOverrideProps<TextProps>;
    Vector41051354?: PrimitiveOverrideProps<IconProps>;
    Vector41051355?: PrimitiveOverrideProps<IconProps>;
    Vector41051356?: PrimitiveOverrideProps<IconProps>;
    "image-removebg-preview (4) 4"?: PrimitiveOverrideProps<ImageProps>;
    "Noise & Texture"?: PrimitiveOverrideProps<ImageProps>;
    "DALL\u00B7E 2024-11-02 01.57.03 - A softer abstract background with a pattern of faceted polygons in calming colors such as soft blues, greens, purples, and muted yellows. The shapes s 1"?: PrimitiveOverrideProps<ImageProps>;
    "Line 19"?: PrimitiveOverrideProps<IconProps>;
    "Line 20"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 109"?: PrimitiveOverrideProps<IconProps>;
    "Group 395"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 107"?: PrimitiveOverrideProps<ViewProps>;
    "AvatarPerfil 2"?: PrimitiveOverrideProps<ImageProps>;
    "AvatarPerfil 3"?: PrimitiveOverrideProps<ImageProps>;
    "Mateus Souza comentou a publica\u00E7\u00E3o de Mariana Portela: Foi fant\u00E1stico!"?: PrimitiveOverrideProps<TextProps>;
    "Maria Silva comentou a publica\u00E7\u00E3o de Mariana Portela: Foi fant\u00E1stico!"?: PrimitiveOverrideProps<TextProps>;
    "Jo\u00E3o Melo e outras pessoas adicionaram 5 coment\u00E1rios \u00E0 publica\u00E7\u00E3o de Lucas"?: PrimitiveOverrideProps<TextProps>;
    "59 min"?: PrimitiveOverrideProps<TextProps>;
    "2 h"?: PrimitiveOverrideProps<TextProps>;
    "3 h"?: PrimitiveOverrideProps<TextProps>;
    "AvatarPerfil 5"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 108"?: PrimitiveOverrideProps<ViewProps>;
    "Parab\u00E9ns pela sua conquista, Lucas! \u2764\uFE0F"?: PrimitiveOverrideProps<TextProps>;
    "55 rea\u00E7\u00F5es - 5 coment\u00E1rios"?: PrimitiveOverrideProps<TextProps>;
    "Gente, acabei de conquistar meu primeiro emprego na New Berg, mal posso esperar pelo..."?: PrimitiveOverrideProps<TextProps>;
    "Line 21"?: PrimitiveOverrideProps<IconProps>;
    "Line 22"?: PrimitiveOverrideProps<IconProps>;
    "Line 23"?: PrimitiveOverrideProps<IconProps>;
    "AvatarPerfil 6"?: PrimitiveOverrideProps<ImageProps>;
    Conversas?: PrimitiveOverrideProps<TextProps>;
    "Voc\u00EA ainda n\u00E3o tem mensagens :(\u2028\u2028"?: PrimitiveOverrideProps<TextProps>;
    "Vamos nos Conetar+ mande messagens para as pessoas ou empresas"?: PrimitiveOverrideProps<TextProps>;
    "Jo\u00E3o Pedro Borges"?: PrimitiveOverrideProps<TextProps>;
    "AvatarPerfil 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type MensagensNotificaesProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: BancoImagens;
} & {
    overrides?: MensagensNotificaesOverridesProps | undefined | null;
}>;
export default function MensagensNotificaes(props: MensagensNotificaesProps): React.ReactElement;
