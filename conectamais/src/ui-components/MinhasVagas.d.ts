/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BancoImagens } from "../models";
import { ButtonProps, IconProps, ImageProps, SearchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type MinhasVagasOverridesProps = {
    MinhasVagas?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 27"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 26"?: PrimitiveOverrideProps<ViewProps>;
    "Noise & Texture"?: PrimitiveOverrideProps<ImageProps>;
    "DALL\u00B7E 2024-11-02 01.57.03 - A softer abstract background with a pattern of faceted polygons in calming colors such as soft blues, greens, purples, and muted yellows. The shapes s 1"?: PrimitiveOverrideProps<ImageProps>;
    "Group 394"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 19"?: PrimitiveOverrideProps<ViewProps>;
    "image-removebg-preview (4) 4"?: PrimitiveOverrideProps<ImageProps>;
    "Group 430"?: PrimitiveOverrideProps<ViewProps>;
    Vector41051345?: PrimitiveOverrideProps<IconProps>;
    Ajuda?: PrimitiveOverrideProps<TextProps>;
    Vector41051347?: PrimitiveOverrideProps<IconProps>;
    Vector41051348?: PrimitiveOverrideProps<IconProps>;
    Vector41051349?: PrimitiveOverrideProps<IconProps>;
    "Jo\u00E3o Pedro Borges"?: PrimitiveOverrideProps<TextProps>;
    "Minhas Vagas"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 19339886708"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 19339886709"?: PrimitiveOverrideProps<ViewProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    "Group 424"?: PrimitiveOverrideProps<ViewProps>;
    "Analista de Dados"?: PrimitiveOverrideProps<TextProps>;
    "REKTR TEC"?: PrimitiveOverrideProps<TextProps>;
    "R$ 5.200,00"?: PrimitiveOverrideProps<TextProps>;
    "22/02/202439886717"?: PrimitiveOverrideProps<TextProps>;
    "22/02/202439886718"?: PrimitiveOverrideProps<TextProps>;
    "1 Vaga: S\u00E3o Paulo - SP39886719"?: PrimitiveOverrideProps<TextProps>;
    "Qual ser\u00E1 sua miss\u00E3o: Voc\u00EA ser\u00E1 respons\u00E1vel por coletar, organizar e analisar grandes volumes de dados, fornecendo insights valiosos para a tomada de decis\u00F5es estrat\u00E9gicas. Entre as principais responsabilidades est\u00E3o a cria\u00E7\u00E3o de relat\u00F3rios, identifica\u00E7\u00E3o de padr\u00F5es e tend\u00EAncias, e o desenvolvimento de solu\u00E7\u00F5es para otimizar processos internos."?: PrimitiveOverrideProps<TextProps>;
    Button39886721?: PrimitiveOverrideProps<ButtonProps>;
    "Group 425"?: PrimitiveOverrideProps<ViewProps>;
    "SEGURAN\u00C7A DA INFORMA\u00C7\u00C3O"?: PrimitiveOverrideProps<TextProps>;
    "CITY CORP"?: PrimitiveOverrideProps<TextProps>;
    "R$ 4.700,00"?: PrimitiveOverrideProps<TextProps>;
    "1 Vaga: S\u00E3o Paulo - SP39886726"?: PrimitiveOverrideProps<TextProps>;
    Button39886727?: PrimitiveOverrideProps<ButtonProps>;
    "AvatarPerfil 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 24"?: PrimitiveOverrideProps<ViewProps>;
    Button41002154?: PrimitiveOverrideProps<ButtonProps>;
    Button41002155?: PrimitiveOverrideProps<ButtonProps>;
    Button41002156?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type MinhasVagasProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: BancoImagens;
} & {
    overrides?: MinhasVagasOverridesProps | undefined | null;
}>;
export default function MinhasVagas(props: MinhasVagasProps): React.ReactElement;
