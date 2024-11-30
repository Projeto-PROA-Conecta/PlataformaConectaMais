/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BancoImagens } from "../models";
import { ButtonProps, IconProps, ImageProps, SwitchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ConfigsOverridesProps = {
    Configs?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 27"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 26"?: PrimitiveOverrideProps<ViewProps>;
    "Group 68"?: PrimitiveOverrideProps<ViewProps>;
    "Group 381"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 19"?: PrimitiveOverrideProps<ViewProps>;
    "logo_branca_conecta 1"?: PrimitiveOverrideProps<ImageProps>;
    "Group 433"?: PrimitiveOverrideProps<ViewProps>;
    Vector39882529?: PrimitiveOverrideProps<IconProps>;
    Vector41002263?: PrimitiveOverrideProps<IconProps>;
    Ajuda?: PrimitiveOverrideProps<TextProps>;
    Vector39882534?: PrimitiveOverrideProps<IconProps>;
    Vector39882535?: PrimitiveOverrideProps<IconProps>;
    "Noise & Texture"?: PrimitiveOverrideProps<ImageProps>;
    "DALL\u00B7E 2024-11-02 01.57.03 - A softer abstract background with a pattern of faceted polygons in calming colors such as soft blues, greens, purples, and muted yellows. The shapes s 1"?: PrimitiveOverrideProps<ImageProps>;
    "Group 383"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 103"?: PrimitiveOverrideProps<ViewProps>;
    "Acesso e Seguran\u00E7a"?: PrimitiveOverrideProps<TextProps>;
    "Line 1039882541"?: PrimitiveOverrideProps<IconProps>;
    "Group 55"?: PrimitiveOverrideProps<ViewProps>;
    Acessibilidade?: PrimitiveOverrideProps<TextProps>;
    "Group 56"?: PrimitiveOverrideProps<ViewProps>;
    "Apar\u00EAncia"?: PrimitiveOverrideProps<TextProps>;
    "Group 57"?: PrimitiveOverrideProps<ViewProps>;
    "Notifica\u00E7\u00E3o"?: PrimitiveOverrideProps<TextProps>;
    "Line 11"?: PrimitiveOverrideProps<IconProps>;
    "Line 12"?: PrimitiveOverrideProps<IconProps>;
    Vector39882550?: PrimitiveOverrideProps<IconProps>;
    "Group 393"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 104"?: PrimitiveOverrideProps<ViewProps>;
    "arrow_left_alt_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 2"?: PrimitiveOverrideProps<ViewProps>;
    Vector39882554?: PrimitiveOverrideProps<IconProps>;
    "arrow_left_alt_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 5"?: PrimitiveOverrideProps<ViewProps>;
    Vector39882556?: PrimitiveOverrideProps<IconProps>;
    "arrow_left_alt_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 4"?: PrimitiveOverrideProps<ViewProps>;
    Vector39882558?: PrimitiveOverrideProps<IconProps>;
    "Acesso \u00E0 conta"?: PrimitiveOverrideProps<TextProps>;
    "Endere\u00E7o de e-mail"?: PrimitiveOverrideProps<TextProps>;
    "Trocar de senha"?: PrimitiveOverrideProps<TextProps>;
    "N\u00FAmeros de telefone"?: PrimitiveOverrideProps<TextProps>;
    "Verifica\u00E7\u00E3o de duas etapas"?: PrimitiveOverrideProps<TextProps>;
    "Suas sess\u00F5es ativas"?: PrimitiveOverrideProps<TextProps>;
    "Line 1039882565"?: PrimitiveOverrideProps<IconProps>;
    "Line 1039882566"?: PrimitiveOverrideProps<IconProps>;
    "Line 1039882567"?: PrimitiveOverrideProps<IconProps>;
    "Line 1039882568"?: PrimitiveOverrideProps<IconProps>;
    "arrow_left_alt_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 6"?: PrimitiveOverrideProps<ViewProps>;
    Vector39882572?: PrimitiveOverrideProps<IconProps>;
    SwitchField?: PrimitiveOverrideProps<SwitchFieldProps>;
    "Jo\u00E3o Pedro Borges"?: PrimitiveOverrideProps<TextProps>;
    "no_encryption_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1"?: PrimitiveOverrideProps<ViewProps>;
    "lock_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector39882578?: PrimitiveOverrideProps<IconProps>;
    "palette_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 2"?: PrimitiveOverrideProps<ViewProps>;
    Vector39882580?: PrimitiveOverrideProps<IconProps>;
    "notifications_off_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 2"?: PrimitiveOverrideProps<ViewProps>;
    Vector39882582?: PrimitiveOverrideProps<IconProps>;
    "AvatarPerfil 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 24"?: PrimitiveOverrideProps<ViewProps>;
    Button41021364?: PrimitiveOverrideProps<ButtonProps>;
    Button41021365?: PrimitiveOverrideProps<ButtonProps>;
    Button41021366?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ConfigsProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: BancoImagens;
} & {
    overrides?: ConfigsOverridesProps | undefined | null;
}>;
export default function Configs(props: ConfigsProps): React.ReactElement;
