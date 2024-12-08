/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, IconProps, ImageProps, SwitchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
    "Frame 3224329822"?: PrimitiveOverrideProps<FlexProps>;
    "Fundo Novo"?: PrimitiveOverrideProps<ImageProps>;
    "Group 451"?: PrimitiveOverrideProps<ViewProps>;
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
    "Group 477"?: PrimitiveOverrideProps<ViewProps>;
    Vector44197018?: PrimitiveOverrideProps<IconProps>;
    SwitchField?: PrimitiveOverrideProps<SwitchFieldProps>;
    NavBarHeaderConecta?: PrimitiveOverrideProps<FlexProps>;
    "Frame 3214374775"?: PrimitiveOverrideProps<FlexProps>;
    Vector4374776?: PrimitiveOverrideProps<IconProps>;
    Vector4374777?: PrimitiveOverrideProps<IconProps>;
    Vector4374778?: PrimitiveOverrideProps<IconProps>;
    Vector4374779?: PrimitiveOverrideProps<IconProps>;
    "Frame 3224374780"?: PrimitiveOverrideProps<FlexProps>;
    "logo_branca_conecta 2"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 3214374782"?: PrimitiveOverrideProps<FlexProps>;
    Button4374783?: PrimitiveOverrideProps<ButtonProps>;
    Button4374784?: PrimitiveOverrideProps<ButtonProps>;
    NavBarMenu?: PrimitiveOverrideProps<FlexProps>;
    "Frame 3214329836"?: PrimitiveOverrideProps<FlexProps>;
    Button4329837?: PrimitiveOverrideProps<ButtonProps>;
    Button4329838?: PrimitiveOverrideProps<ButtonProps>;
    Button4329839?: PrimitiveOverrideProps<ButtonProps>;
    "Line 1044197604"?: PrimitiveOverrideProps<IconProps>;
    "Line 12"?: PrimitiveOverrideProps<IconProps>;
    "Line 11"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ConfigsProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: any;
} & {
    overrides?: ConfigsOverridesProps | undefined | null;
}>;
export default function Configs(props: ConfigsProps): React.ReactElement;
