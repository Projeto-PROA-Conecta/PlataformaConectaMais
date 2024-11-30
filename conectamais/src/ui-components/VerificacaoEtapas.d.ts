/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BancoImagens } from "../models";
import { ButtonProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type VerificacaoEtapasOverridesProps = {
    VerificacaoEtapas?: PrimitiveOverrideProps<ViewProps>;
    Login?: PrimitiveOverrideProps<ViewProps>;
    "Noise & Texture"?: PrimitiveOverrideProps<ImageProps>;
    "DALL\u00B7E 2024-11-02 01.57.03 - A softer abstract background with a pattern of faceted polygons in calming colors such as soft blues, greens, purples, and muted yellows. The shapes s 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "de duas etapas"?: PrimitiveOverrideProps<TextProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "WhatsApp_Image_2024-09-20_at_19.01.06-removebg-preview"?: PrimitiveOverrideProps<ImageProps>;
    "Verifica\u00E7\u00E3o"?: PrimitiveOverrideProps<TextProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    "Insira o c\u00F3digo exibido no seu aplicativo de autentica\u00E7\u00E3o"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type VerificacaoEtapasProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: BancoImagens;
} & {
    overrides?: VerificacaoEtapasOverridesProps | undefined | null;
}>;
export default function VerificacaoEtapas(props: VerificacaoEtapasProps): React.ReactElement;
