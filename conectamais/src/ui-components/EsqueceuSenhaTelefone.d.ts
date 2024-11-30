/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BancoImagens } from "../models";
import { ButtonProps, IconProps, ImageProps, PhoneNumberFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type EsqueceuSenhaTelefoneOverridesProps = {
    EsqueceuSenhaTelefone?: PrimitiveOverrideProps<ViewProps>;
    "Esqueceu a Senha"?: PrimitiveOverrideProps<ViewProps>;
    "Noise & Texture"?: PrimitiveOverrideProps<ImageProps>;
    "DALL\u00B7E 2024-11-02 01.57.03 - A softer abstract background with a pattern of faceted polygons in calming colors such as soft blues, greens, purples, and muted yellows. The shapes s 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Esqueceu a senha"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    Button39884768?: PrimitiveOverrideProps<ButtonProps>;
    "6c7044335d43831eaf92e9862f42656b-security-key-removebg-preview 1"?: PrimitiveOverrideProps<ImageProps>;
    "Insira seu n\u00FAmero de telefone para recuperar sua conta"?: PrimitiveOverrideProps<TextProps>;
    Button39884771?: PrimitiveOverrideProps<ButtonProps>;
    PhoneNumberField?: PrimitiveOverrideProps<PhoneNumberFieldProps>;
    "Rectangle 14"?: PrimitiveOverrideProps<ViewProps>;
    Email?: PrimitiveOverrideProps<TextProps>;
    Telefone?: PrimitiveOverrideProps<TextProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type EsqueceuSenhaTelefoneProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: BancoImagens;
} & {
    overrides?: EsqueceuSenhaTelefoneOverridesProps | undefined | null;
}>;
export default function EsqueceuSenhaTelefone(props: EsqueceuSenhaTelefoneProps): React.ReactElement;
