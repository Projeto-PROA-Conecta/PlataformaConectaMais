/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BancoImagens } from "../models";
import { ButtonProps, IconProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CadastroFotoOverridesProps = {
    CadastroFoto?: PrimitiveOverrideProps<ViewProps>;
    Vector40241260?: PrimitiveOverrideProps<IconProps>;
    Vector40241261?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ImageProps>;
    "Group 4240241284"?: PrimitiveOverrideProps<ViewProps>;
    "AvatarPerfil 1"?: PrimitiveOverrideProps<ImageProps>;
    "logo_branca_conecta 1"?: PrimitiveOverrideProps<ImageProps>;
    Button40241266?: PrimitiveOverrideProps<ButtonProps>;
    Button40241267?: PrimitiveOverrideProps<ButtonProps>;
    Button40241268?: PrimitiveOverrideProps<ButtonProps>;
    "Group 4240241269"?: PrimitiveOverrideProps<ViewProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    "EditIcon 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector40241273?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type CadastroFotoProps = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: BancoImagens;
} & {
    overrides?: CadastroFotoOverridesProps | undefined | null;
}>;
export default function CadastroFoto(props: CadastroFotoProps): React.ReactElement;
