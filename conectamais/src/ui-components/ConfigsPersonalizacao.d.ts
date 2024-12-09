/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, FlexProps, IconProps, ImageProps, SelectFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    "logo_branca_conecta 2"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    Vector38512069?: PrimitiveOverrideProps<IconProps>;
    Vector38512070?: PrimitiveOverrideProps<IconProps>;
    Vector38512071?: PrimitiveOverrideProps<IconProps>;
    Vector38512072?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 205"?: PrimitiveOverrideProps<ViewProps>;
    Divider38512086?: PrimitiveOverrideProps<ViewProps>;
    Divider38512087?: PrimitiveOverrideProps<ViewProps>;
    Vector38512088?: PrimitiveOverrideProps<IconProps>;
    Vector38512089?: PrimitiveOverrideProps<IconProps>;
    Vector38512090?: PrimitiveOverrideProps<IconProps>;
    Divider38512091?: PrimitiveOverrideProps<ViewProps>;
    Vector38512092?: PrimitiveOverrideProps<IconProps>;
    Acessibilidade?: PrimitiveOverrideProps<TextProps>;
    "Acesso e Seguran\u00E7a"?: PrimitiveOverrideProps<TextProps>;
    "Apar\u00EAncia"?: PrimitiveOverrideProps<TextProps>;
    "Notifica\u00E7\u00E3o"?: PrimitiveOverrideProps<TextProps>;
    "Group 478"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 104"?: PrimitiveOverrideProps<ViewProps>;
    "Personalizando sua experi\u00EAncia"?: PrimitiveOverrideProps<TextProps>;
    "edit_24dp_000000_FILL0_wght400_GRAD0_opsz24 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector38512103?: PrimitiveOverrideProps<IconProps>;
    SelectField38531446?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField38531456?: PrimitiveOverrideProps<SelectFieldProps>;
    Divider38531472?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type ConfigsPersonalizacaoProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: any;
} & {
    overrides?: ConfigsPersonalizacaoOverridesProps | undefined | null;
}>;
export default function ConfigsPersonalizacao(props: ConfigsPersonalizacaoProps): React.ReactElement;
