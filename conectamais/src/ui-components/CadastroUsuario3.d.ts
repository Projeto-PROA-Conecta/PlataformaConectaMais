/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BancoImagens } from "../models";
import { ButtonProps, IconProps, ImageProps, SelectFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CadastroUsuario3OverridesProps = {
    CadastroUsuario3?: PrimitiveOverrideProps<ViewProps>;
    Cadastro?: PrimitiveOverrideProps<ViewProps>;
    "DALL\u00B7E 2024-11-02 01.57.03 - A softer abstract background with a pattern of faceted polygons in calming colors such as soft blues, greens, purples, and muted yellows. The shapes s 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "Algumas perguntas"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 11"?: PrimitiveOverrideProps<ViewProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 201"?: PrimitiveOverrideProps<ViewProps>;
    "Privacidade dos Dados \u2028Todos os arquivos e informa\u00E7\u00F5es fornecidos por voc\u00EA ser\u00E3o estritamente privados e usados apenas para melhorar sua experi\u00EAncia na plataforma. Seus dados n\u00E3o ser\u00E3o compartilhados com terceiros. Para mais informa\u00E7\u00F5es, entre em contato com nossa equipe de suporte."?: PrimitiveOverrideProps<TextProps>;
    "image-removebg-preview (4) 4"?: PrimitiveOverrideProps<ImageProps>;
    "question\u00E1rio"?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 108"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 109"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 110"?: PrimitiveOverrideProps<IconProps>;
    SelectField40371448?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField40371458?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField40371468?: PrimitiveOverrideProps<SelectFieldProps>;
    "Prox\u00EDmo"?: PrimitiveOverrideProps<TextProps>;
    Button39885571?: PrimitiveOverrideProps<ButtonProps>;
    Button4027869?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CadastroUsuario3Props = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: BancoImagens;
} & {
    overrides?: CadastroUsuario3OverridesProps | undefined | null;
}>;
export default function CadastroUsuario3(props: CadastroUsuario3Props): React.ReactElement;
