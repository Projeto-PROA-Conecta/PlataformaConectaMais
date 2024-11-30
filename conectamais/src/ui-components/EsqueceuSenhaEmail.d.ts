/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BancoImagens } from "../models";
import { ButtonProps, FlexProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type EsqueceuSenhaEmailOverridesProps = {
    EsqueceuSenhaEmail?: PrimitiveOverrideProps<ViewProps>;
    "Esqueceu a Senha"?: PrimitiveOverrideProps<ViewProps>;
    "Noise & Texture"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "DALL\u00B7E 2024-11-02 01.57.03 - A softer abstract background with a pattern of faceted polygons in calming colors such as soft blues, greens, purples, and muted yellows. The shapes s 1"?: PrimitiveOverrideProps<ImageProps>;
    "Esqueceu a senha"?: PrimitiveOverrideProps<TextProps>;
    "Group 9"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Button Group"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 14"?: PrimitiveOverrideProps<ViewProps>;
    Email?: PrimitiveOverrideProps<TextProps>;
    Telefone?: PrimitiveOverrideProps<TextProps>;
    Button39884796?: PrimitiveOverrideProps<ButtonProps>;
    Button39884797?: PrimitiveOverrideProps<ButtonProps>;
    "6c7044335d43831eaf92e9862f42656b-security-key-removebg-preview 1"?: PrimitiveOverrideProps<ImageProps>;
    "Insira seu e-mail para redefinir sua senha."?: PrimitiveOverrideProps<TextProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EsqueceuSenhaEmailProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: BancoImagens;
} & {
    overrides?: EsqueceuSenhaEmailOverridesProps | undefined | null;
}>;
export default function EsqueceuSenhaEmail(props: EsqueceuSenhaEmailProps): React.ReactElement;
