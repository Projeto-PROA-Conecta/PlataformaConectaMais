/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
    "Fundo Novo"?: PrimitiveOverrideProps<ImageProps>;
    "Group 441"?: PrimitiveOverrideProps<ViewProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview"?: PrimitiveOverrideProps<ImageProps>;
    Button39885475?: PrimitiveOverrideProps<ButtonProps>;
    Button39885476?: PrimitiveOverrideProps<ButtonProps>;
    Button44393551?: PrimitiveOverrideProps<ButtonProps>;
    Vector39885478?: PrimitiveOverrideProps<IconProps>;
    Vector39885479?: PrimitiveOverrideProps<IconProps>;
    Vector39885481?: PrimitiveOverrideProps<IconProps>;
    Vector39885483?: PrimitiveOverrideProps<IconProps>;
    Vector39885484?: PrimitiveOverrideProps<IconProps>;
    Vector39885485?: PrimitiveOverrideProps<IconProps>;
    Vector39885486?: PrimitiveOverrideProps<IconProps>;
    Vector39885487?: PrimitiveOverrideProps<IconProps>;
    Vector39885488?: PrimitiveOverrideProps<IconProps>;
    Vector39885489?: PrimitiveOverrideProps<IconProps>;
    Vector39885490?: PrimitiveOverrideProps<IconProps>;
    Vector39885493?: PrimitiveOverrideProps<IconProps>;
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
    Vector3997659?: PrimitiveOverrideProps<IconProps>;
    Vector3997657?: PrimitiveOverrideProps<IconProps>;
    "Qual seu tipo de conta?"?: PrimitiveOverrideProps<TextProps>;
    "Bem-vindo!"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EscolhaDeContaProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: any;
} & {
    overrides?: EscolhaDeContaOverridesProps | undefined | null;
}>;
export default function EscolhaDeConta(props: EscolhaDeContaProps): React.ReactElement;
