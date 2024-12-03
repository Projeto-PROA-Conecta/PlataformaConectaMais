/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CheckboxFieldProps, IconProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CadastroEmpresas1OverridesProps = {
    CadastroEmpresas1?: PrimitiveOverrideProps<ViewProps>;
    Cadastro?: PrimitiveOverrideProps<ViewProps>;
    "Noise & Texture"?: PrimitiveOverrideProps<ImageProps>;
    "Group 394"?: PrimitiveOverrideProps<ViewProps>;
    "back gorund"?: PrimitiveOverrideProps<ViewProps>;
    Vector42342805?: PrimitiveOverrideProps<IconProps>;
    Vector42342806?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    TextField40271492?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40271468?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40271450?: PrimitiveOverrideProps<TextFieldProps>;
    Pronto?: PrimitiveOverrideProps<TextProps>;
    "Cadastre sua Empresa"?: PrimitiveOverrideProps<TextProps>;
    TextField40271484?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40271458?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40271510?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40271476?: PrimitiveOverrideProps<TextFieldProps>;
    "Group 13"?: PrimitiveOverrideProps<ViewProps>;
    "Group 44"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1239884679"?: PrimitiveOverrideProps<ViewProps>;
    "Cadastrar-se"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1239884681"?: PrimitiveOverrideProps<ViewProps>;
    Voltar?: PrimitiveOverrideProps<TextProps>;
    "Conecte-se aos melhores talentos neurodiversos e fortale\u00E7a sua marca empregadora."?: PrimitiveOverrideProps<TextProps>;
    "image-removebg-preview (4) 2"?: PrimitiveOverrideProps<ImageProps>;
    CheckboxField?: PrimitiveOverrideProps<CheckboxFieldProps>;
} & EscapeHatchProps;
export declare type CadastroEmpresas1Props = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: any;
} & {
    overrides?: CadastroEmpresas1OverridesProps | undefined | null;
}>;
export default function CadastroEmpresas1(props: CadastroEmpresas1Props): React.ReactElement;
