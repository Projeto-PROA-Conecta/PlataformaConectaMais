/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
    "Frame 32238511759"?: PrimitiveOverrideProps<FlexProps>;
    "Fundo Novo"?: PrimitiveOverrideProps<ImageProps>;
    "Group 451"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 104"?: PrimitiveOverrideProps<ViewProps>;
    "arrow_left_alt_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 2"?: PrimitiveOverrideProps<ViewProps>;
    Vector38511765?: PrimitiveOverrideProps<IconProps>;
    "arrow_left_alt_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 5"?: PrimitiveOverrideProps<ViewProps>;
    Vector38511767?: PrimitiveOverrideProps<IconProps>;
    "arrow_left_alt_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 4"?: PrimitiveOverrideProps<ViewProps>;
    Vector38511769?: PrimitiveOverrideProps<IconProps>;
    "Acesso \u00E0 conta"?: PrimitiveOverrideProps<TextProps>;
    "Endere\u00E7o de e-mail"?: PrimitiveOverrideProps<TextProps>;
    "Trocar de senha"?: PrimitiveOverrideProps<TextProps>;
    "N\u00FAmeros de telefone"?: PrimitiveOverrideProps<TextProps>;
    "Verifica\u00E7\u00E3o de duas etapas"?: PrimitiveOverrideProps<TextProps>;
    "Suas sess\u00F5es ativas"?: PrimitiveOverrideProps<TextProps>;
    Divider38511776?: PrimitiveOverrideProps<ViewProps>;
    Divider38511777?: PrimitiveOverrideProps<ViewProps>;
    Divider38511778?: PrimitiveOverrideProps<ViewProps>;
    Divider38511779?: PrimitiveOverrideProps<ViewProps>;
    "arrow_left_alt_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 6"?: PrimitiveOverrideProps<ViewProps>;
    Vector38511781?: PrimitiveOverrideProps<IconProps>;
    "Group 480"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 205"?: PrimitiveOverrideProps<ViewProps>;
    Divider38511784?: PrimitiveOverrideProps<ViewProps>;
    Divider38511785?: PrimitiveOverrideProps<ViewProps>;
    Vector38511786?: PrimitiveOverrideProps<IconProps>;
    Vector38511787?: PrimitiveOverrideProps<IconProps>;
    Vector38511788?: PrimitiveOverrideProps<IconProps>;
    Divider38511789?: PrimitiveOverrideProps<ViewProps>;
    Vector38511790?: PrimitiveOverrideProps<IconProps>;
    Acessibilidade?: PrimitiveOverrideProps<TextProps>;
    "Acesso e Seguran\u00E7a"?: PrimitiveOverrideProps<TextProps>;
    "Apar\u00EAncia"?: PrimitiveOverrideProps<TextProps>;
    "Notifica\u00E7\u00E3o"?: PrimitiveOverrideProps<TextProps>;
    SwitchField?: PrimitiveOverrideProps<FlexProps>;
    NavBarHeaderConecta?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32238511802"?: PrimitiveOverrideProps<FlexProps>;
    "logo_branca_conecta 2"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    Vector38511798?: PrimitiveOverrideProps<IconProps>;
    Vector38511799?: PrimitiveOverrideProps<IconProps>;
    Vector38511800?: PrimitiveOverrideProps<IconProps>;
    Vector38511801?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ConfigsProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: any;
} & {
    overrides?: ConfigsOverridesProps | undefined | null;
}>;
export default function Configs(props: ConfigsProps): React.ReactElement;
