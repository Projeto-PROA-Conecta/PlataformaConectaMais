/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BancoImagens } from "../models";
import { ButtonProps, IconProps, ImageProps, SelectFieldProps, TextAreaFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CadastroUsuario5OverridesProps = {
    CadastroUsuario5?: PrimitiveOverrideProps<ViewProps>;
    Cadastro?: PrimitiveOverrideProps<ViewProps>;
    "DALL\u00B7E 2024-11-02 01.57.03 - A softer abstract background with a pattern of faceted polygons in calming colors such as soft blues, greens, purples, and muted yellows. The shapes s 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "\u00DAltimas perguntas"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 11"?: PrimitiveOverrideProps<ViewProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "image-removebg-preview (4) 5"?: PrimitiveOverrideProps<ImageProps>;
    "question\u00E1rio"?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 108"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 109"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 110"?: PrimitiveOverrideProps<IconProps>;
    SelectField40341860?: PrimitiveOverrideProps<SelectFieldProps>;
    TextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    "Prox\u00EDmo"?: PrimitiveOverrideProps<TextProps>;
    Button40341863?: PrimitiveOverrideProps<ButtonProps>;
    Button40341864?: PrimitiveOverrideProps<ButtonProps>;
    SelectField40341865?: PrimitiveOverrideProps<SelectFieldProps>;
    "Voc\u00EA possui alguma outra condi\u00E7\u00E3o diagnosticada al\u00E9m do TEA?"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CadastroUsuario5Props = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: BancoImagens;
} & {
    overrides?: CadastroUsuario5OverridesProps | undefined | null;
}>;
export default function CadastroUsuario5(props: CadastroUsuario5Props): React.ReactElement;
