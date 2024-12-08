/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, IconProps, ImageProps, SelectFieldProps, SwitchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ConfigsAcessibilidadeOverridesProps = {
    ConfigsAcessibilidade?: PrimitiveOverrideProps<ViewProps>;
    "Fundo Novo"?: PrimitiveOverrideProps<ImageProps>;
    Acessibilidade?: PrimitiveOverrideProps<TextProps>;
    "Group 471"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 104"?: PrimitiveOverrideProps<ViewProps>;
    "Line 16"?: PrimitiveOverrideProps<IconProps>;
    "Line 17"?: PrimitiveOverrideProps<IconProps>;
    "Line 18"?: PrimitiveOverrideProps<IconProps>;
    "Group 76"?: PrimitiveOverrideProps<ViewProps>;
    "Assist\u00EAncia com IA"?: PrimitiveOverrideProps<TextProps>;
    thumb?: PrimitiveOverrideProps<ViewProps>;
    "Desativar Anima\u00E7\u00F5es"?: PrimitiveOverrideProps<TextProps>;
    "Tamanho da Fonte"?: PrimitiveOverrideProps<TextProps>;
    Temas?: PrimitiveOverrideProps<TextProps>;
    Button39884393?: PrimitiveOverrideProps<ButtonProps>;
    Button39884394?: PrimitiveOverrideProps<ButtonProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    "ThemeIcon 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector4045903?: PrimitiveOverrideProps<IconProps>;
    SwitchField40451500?: PrimitiveOverrideProps<SwitchFieldProps>;
    SwitchField40451493?: PrimitiveOverrideProps<SwitchFieldProps>;
    NavBarMenu?: PrimitiveOverrideProps<FlexProps>;
    "Frame 3214329861"?: PrimitiveOverrideProps<FlexProps>;
    Button4329862?: PrimitiveOverrideProps<ButtonProps>;
    Button4329863?: PrimitiveOverrideProps<ButtonProps>;
    Button4329864?: PrimitiveOverrideProps<ButtonProps>;
    Vector4045897?: PrimitiveOverrideProps<IconProps>;
    NavBarHeaderConecta?: PrimitiveOverrideProps<FlexProps>;
    "Frame 3214374794"?: PrimitiveOverrideProps<FlexProps>;
    Vector4374795?: PrimitiveOverrideProps<IconProps>;
    Vector4374796?: PrimitiveOverrideProps<IconProps>;
    Vector4374797?: PrimitiveOverrideProps<IconProps>;
    Vector4374798?: PrimitiveOverrideProps<IconProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    "logo_branca_conecta 2"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 3214374801"?: PrimitiveOverrideProps<FlexProps>;
    Button4374802?: PrimitiveOverrideProps<ButtonProps>;
    Button4374803?: PrimitiveOverrideProps<ButtonProps>;
    "Group 477"?: PrimitiveOverrideProps<ViewProps>;
    Vector44262408?: PrimitiveOverrideProps<IconProps>;
    "Line 10"?: PrimitiveOverrideProps<IconProps>;
    "Line 12"?: PrimitiveOverrideProps<IconProps>;
    "Line 11"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ConfigsAcessibilidadeProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: any;
} & {
    overrides?: ConfigsAcessibilidadeOverridesProps | undefined | null;
}>;
export default function ConfigsAcessibilidade(props: ConfigsAcessibilidadeProps): React.ReactElement;
