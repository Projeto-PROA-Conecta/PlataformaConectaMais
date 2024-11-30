/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BancoImagens } from "../models";
import { ButtonProps, IconProps, ImageProps, SelectFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ConfigsPersonalizacaoOverridesProps = {
    ConfigsPersonalizacao?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 27"?: PrimitiveOverrideProps<ViewProps>;
    background_azul?: PrimitiveOverrideProps<ViewProps>;
    "Group 68"?: PrimitiveOverrideProps<ViewProps>;
    "Group 381"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 19"?: PrimitiveOverrideProps<ViewProps>;
    "logo_branca_conecta 2"?: PrimitiveOverrideProps<ImageProps>;
    "Group 433"?: PrimitiveOverrideProps<ViewProps>;
    Vector41051481?: PrimitiveOverrideProps<IconProps>;
    Vector41051482?: PrimitiveOverrideProps<IconProps>;
    Ajuda?: PrimitiveOverrideProps<TextProps>;
    Vector41051484?: PrimitiveOverrideProps<IconProps>;
    Vector41051485?: PrimitiveOverrideProps<IconProps>;
    "Noise & Texture"?: PrimitiveOverrideProps<ImageProps>;
    "DALL\u00B7E 2024-11-02 01.57.03 - A softer abstract background with a pattern of faceted polygons in calming colors such as soft blues, greens, purples, and muted yellows. The shapes s 1"?: PrimitiveOverrideProps<ImageProps>;
    "Group 383"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 103"?: PrimitiveOverrideProps<ViewProps>;
    "no_encryption_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1"?: PrimitiveOverrideProps<ViewProps>;
    "lock_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector40881729?: PrimitiveOverrideProps<IconProps>;
    "Acesso e Seguran\u00E7a"?: PrimitiveOverrideProps<TextProps>;
    "Line 10"?: PrimitiveOverrideProps<IconProps>;
    "Group 55"?: PrimitiveOverrideProps<ViewProps>;
    Acessibilidade?: PrimitiveOverrideProps<TextProps>;
    "Group 56"?: PrimitiveOverrideProps<ViewProps>;
    "Apar\u00EAncia"?: PrimitiveOverrideProps<TextProps>;
    "Group 57"?: PrimitiveOverrideProps<ViewProps>;
    "Notifica\u00E7\u00E3o"?: PrimitiveOverrideProps<TextProps>;
    "Line 11"?: PrimitiveOverrideProps<IconProps>;
    "Line 12"?: PrimitiveOverrideProps<IconProps>;
    Vector40881740?: PrimitiveOverrideProps<IconProps>;
    Vector40881741?: PrimitiveOverrideProps<IconProps>;
    "notifications_off_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 2"?: PrimitiveOverrideProps<ViewProps>;
    Vector40881743?: PrimitiveOverrideProps<IconProps>;
    "Frame 16"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 17"?: PrimitiveOverrideProps<ViewProps>;
    SelectField40981704?: PrimitiveOverrideProps<SelectFieldProps>;
    "Personalizando sua experi\u00EAncia"?: PrimitiveOverrideProps<TextProps>;
    SelectField40981746?: PrimitiveOverrideProps<SelectFieldProps>;
    "Jo\u00E3o Pedro Borges"?: PrimitiveOverrideProps<TextProps>;
    "AvatarPerfil 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 20"?: PrimitiveOverrideProps<ViewProps>;
    Button41021532?: PrimitiveOverrideProps<ButtonProps>;
    Button41021533?: PrimitiveOverrideProps<ButtonProps>;
    Button41021534?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ConfigsPersonalizacaoProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: BancoImagens;
} & {
    overrides?: ConfigsPersonalizacaoOverridesProps | undefined | null;
}>;
export default function ConfigsPersonalizacao(props: ConfigsPersonalizacaoProps): React.ReactElement;
