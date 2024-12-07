/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
    "\u00DAltimas perguntas"?: PrimitiveOverrideProps<TextProps>;
    "Group 476"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 109"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 108"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 110"?: PrimitiveOverrideProps<IconProps>;
    SelectField40341860?: PrimitiveOverrideProps<SelectFieldProps>;
    TextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Button40341863?: PrimitiveOverrideProps<ButtonProps>;
    Button40341864?: PrimitiveOverrideProps<ButtonProps>;
    "Question\u00E1rio"?: PrimitiveOverrideProps<TextProps>;
    SelectField40341865?: PrimitiveOverrideProps<SelectFieldProps>;
    "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type CadastroUsuario5Props = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: any;
} & {
    overrides?: CadastroUsuario5OverridesProps | undefined | null;
}>;
export default function CadastroUsuario5(props: CadastroUsuario5Props): React.ReactElement;
