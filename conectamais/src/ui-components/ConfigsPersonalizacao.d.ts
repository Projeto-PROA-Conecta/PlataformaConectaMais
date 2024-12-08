/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, IconProps, ImageProps, SelectFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
    "Fundo Novo"?: PrimitiveOverrideProps<ImageProps>;
    NavBarHeaderConecta?: PrimitiveOverrideProps<FlexProps>;
    "Frame 3214376835"?: PrimitiveOverrideProps<FlexProps>;
    Vector4376836?: PrimitiveOverrideProps<IconProps>;
    Vector4376837?: PrimitiveOverrideProps<IconProps>;
    Vector4376838?: PrimitiveOverrideProps<IconProps>;
    Vector4376839?: PrimitiveOverrideProps<IconProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    "logo_branca_conecta 2"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 3214376842"?: PrimitiveOverrideProps<FlexProps>;
    Button4376843?: PrimitiveOverrideProps<ButtonProps>;
    Button4376844?: PrimitiveOverrideProps<ButtonProps>;
    SelectField40981704?: PrimitiveOverrideProps<SelectFieldProps>;
    "Personalizando sua experi\u00EAncia"?: PrimitiveOverrideProps<TextProps>;
    SelectField40981746?: PrimitiveOverrideProps<SelectFieldProps>;
    NavBarMenu?: PrimitiveOverrideProps<FlexProps>;
    "Frame 3214329877"?: PrimitiveOverrideProps<FlexProps>;
    Button4329878?: PrimitiveOverrideProps<ButtonProps>;
    Button4329879?: PrimitiveOverrideProps<ButtonProps>;
    Button4329880?: PrimitiveOverrideProps<ButtonProps>;
    "Group 477"?: PrimitiveOverrideProps<ViewProps>;
    Vector44262549?: PrimitiveOverrideProps<IconProps>;
    "Line 10"?: PrimitiveOverrideProps<IconProps>;
    "Line 12"?: PrimitiveOverrideProps<IconProps>;
    "Line 11"?: PrimitiveOverrideProps<IconProps>;
    "edit_24dp_000000_FILL0_wght400_GRAD0_opsz24 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector44263497?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ConfigsPersonalizacaoProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: any;
} & {
    overrides?: ConfigsPersonalizacaoOverridesProps | undefined | null;
}>;
export default function ConfigsPersonalizacao(props: ConfigsPersonalizacaoProps): React.ReactElement;
