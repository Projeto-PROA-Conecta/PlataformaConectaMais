/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BancoImagens } from "../models";
import { ButtonProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type EscolhaDeContaOverridesProps = {
    EscolhaDeConta?: PrimitiveOverrideProps<ViewProps>;
    Login?: PrimitiveOverrideProps<ViewProps>;
    "Noise & Texture"?: PrimitiveOverrideProps<ImageProps>;
    "DALL\u00B7E 2024-11-02 01.57.03 - A softer abstract background with a pattern of faceted polygons in calming colors such as soft blues, greens, purples, and muted yellows. The shapes s 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Qual seu tipo de conta?"?: PrimitiveOverrideProps<TextProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview"?: PrimitiveOverrideProps<ImageProps>;
    "Bem-vindo!"?: PrimitiveOverrideProps<TextProps>;
    Button39885475?: PrimitiveOverrideProps<ButtonProps>;
    Button39885476?: PrimitiveOverrideProps<ButtonProps>;
    Voltar?: PrimitiveOverrideProps<TextProps>;
    Vector39885478?: PrimitiveOverrideProps<IconProps>;
    Vector39885479?: PrimitiveOverrideProps<IconProps>;
    Vector39885480?: PrimitiveOverrideProps<IconProps>;
    Vector39885481?: PrimitiveOverrideProps<IconProps>;
    Vector39885482?: PrimitiveOverrideProps<IconProps>;
    Vector39885483?: PrimitiveOverrideProps<IconProps>;
    Vector39885484?: PrimitiveOverrideProps<IconProps>;
    Vector39885485?: PrimitiveOverrideProps<IconProps>;
    Vector39885486?: PrimitiveOverrideProps<IconProps>;
    Vector39885487?: PrimitiveOverrideProps<IconProps>;
    Vector39885488?: PrimitiveOverrideProps<IconProps>;
    Vector39885489?: PrimitiveOverrideProps<IconProps>;
    Vector39885490?: PrimitiveOverrideProps<IconProps>;
    Vector39885491?: PrimitiveOverrideProps<IconProps>;
    Vector39885492?: PrimitiveOverrideProps<IconProps>;
    Vector39885493?: PrimitiveOverrideProps<IconProps>;
    Vector39885494?: PrimitiveOverrideProps<IconProps>;
    Vector39885495?: PrimitiveOverrideProps<IconProps>;
    Vector39885496?: PrimitiveOverrideProps<IconProps>;
    Vector39885497?: PrimitiveOverrideProps<IconProps>;
    Vector39885498?: PrimitiveOverrideProps<IconProps>;
    Vector39885499?: PrimitiveOverrideProps<IconProps>;
    Vector39885500?: PrimitiveOverrideProps<IconProps>;
    Vector39885501?: PrimitiveOverrideProps<IconProps>;
    Vector39885502?: PrimitiveOverrideProps<IconProps>;
    Vector39885503?: PrimitiveOverrideProps<IconProps>;
    Vector39885504?: PrimitiveOverrideProps<IconProps>;
    Vector3997663?: PrimitiveOverrideProps<IconProps>;
    Vector3997659?: PrimitiveOverrideProps<IconProps>;
    Vector3997655?: PrimitiveOverrideProps<IconProps>;
    Vector3997657?: PrimitiveOverrideProps<IconProps>;
    "Line 53"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type EscolhaDeContaProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: BancoImagens;
} & {
    overrides?: EscolhaDeContaOverridesProps | undefined | null;
}>;
export default function EscolhaDeConta(props: EscolhaDeContaProps): React.ReactElement;
