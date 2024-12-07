/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, IconProps, ImageProps, PasswordFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CadastroUsuario1OverridesProps = {
    CadastroUsuario1?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    "Group 456"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<ViewProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "Bem-vindo!"?: PrimitiveOverrideProps<TextProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    Pronto?: PrimitiveOverrideProps<TextProps>;
    PasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    "Crie sua conta"?: PrimitiveOverrideProps<TextProps>;
    TextField40191512?: PrimitiveOverrideProps<TextFieldProps>;
    "Ellipse 10039885530"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 10039885531"?: PrimitiveOverrideProps<IconProps>;
    "Que bom que voc\u00EA quer"?: PrimitiveOverrideProps<TextProps>;
    "Se juntar a n\u00F3s"?: PrimitiveOverrideProps<TextProps>;
    TextField40191407?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40191415?: PrimitiveOverrideProps<TextFieldProps>;
    Button39885537?: PrimitiveOverrideProps<ButtonProps>;
    Button39885538?: PrimitiveOverrideProps<ButtonProps>;
    "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type CadastroUsuario1Props = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: any;
} & {
    overrides?: CadastroUsuario1OverridesProps | undefined | null;
}>;
export default function CadastroUsuario1(props: CadastroUsuario1Props): React.ReactElement;
