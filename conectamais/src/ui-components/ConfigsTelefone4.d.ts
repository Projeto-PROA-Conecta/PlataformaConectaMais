/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BancoImagens } from "../models";
import { ButtonProps, IconProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ConfigsTelefone4OverridesProps = {
    ConfigsTelefone4?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 27"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 26"?: PrimitiveOverrideProps<ViewProps>;
    "Group 68"?: PrimitiveOverrideProps<ViewProps>;
    "Group 381"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 19"?: PrimitiveOverrideProps<ViewProps>;
    "logo_branca_conecta 2"?: PrimitiveOverrideProps<ImageProps>;
    "Group 433"?: PrimitiveOverrideProps<ViewProps>;
    Vector41051432?: PrimitiveOverrideProps<IconProps>;
    Vector41051433?: PrimitiveOverrideProps<IconProps>;
    Ajuda?: PrimitiveOverrideProps<TextProps>;
    Vector41051435?: PrimitiveOverrideProps<IconProps>;
    Vector41051436?: PrimitiveOverrideProps<IconProps>;
    "Noise & Texture"?: PrimitiveOverrideProps<ImageProps>;
    "DALL\u00B7E 2024-11-02 01.57.03 - A softer abstract background with a pattern of faceted polygons in calming colors such as soft blues, greens, purples, and muted yellows. The shapes s 1"?: PrimitiveOverrideProps<ImageProps>;
    "Group 383"?: PrimitiveOverrideProps<ViewProps>;
    "Group 426"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 103"?: PrimitiveOverrideProps<ViewProps>;
    "no_encryption_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1"?: PrimitiveOverrideProps<ViewProps>;
    "lock_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector39883673?: PrimitiveOverrideProps<IconProps>;
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
    Vector39883684?: PrimitiveOverrideProps<IconProps>;
    Vector39883685?: PrimitiveOverrideProps<IconProps>;
    "notifications_off_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 2"?: PrimitiveOverrideProps<ViewProps>;
    Vector39883687?: PrimitiveOverrideProps<IconProps>;
    "Group 390"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 104"?: PrimitiveOverrideProps<ViewProps>;
    Button39883690?: PrimitiveOverrideProps<ButtonProps>;
    Button40551571?: PrimitiveOverrideProps<ButtonProps>;
    Telefones?: PrimitiveOverrideProps<TextProps>;
    "Enviamos um c\u00F3digo de verifica\u00E7\u00E3o ao seu telefone. Confira seu telefone e insira o c\u00F3digo."?: PrimitiveOverrideProps<TextProps>;
    "Jo\u00E3o Pedro Borges"?: PrimitiveOverrideProps<TextProps>;
    "AvatarPerfil 1"?: PrimitiveOverrideProps<ImageProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    "Rectangle 20"?: PrimitiveOverrideProps<ViewProps>;
    Button41021434?: PrimitiveOverrideProps<ButtonProps>;
    Button41021435?: PrimitiveOverrideProps<ButtonProps>;
    Button41021436?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ConfigsTelefone4Props = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: BancoImagens;
} & {
    overrides?: ConfigsTelefone4OverridesProps | undefined | null;
}>;
export default function ConfigsTelefone4(props: ConfigsTelefone4Props): React.ReactElement;
