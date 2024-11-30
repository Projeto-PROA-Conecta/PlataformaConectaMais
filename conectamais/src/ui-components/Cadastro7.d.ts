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
export declare type Cadastro7OverridesProps = {
    Cadastro7?: PrimitiveOverrideProps<ViewProps>;
    Vector40241188?: PrimitiveOverrideProps<IconProps>;
    Vector40241189?: PrimitiveOverrideProps<IconProps>;
    Group40241190?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ImageProps>;
    "undraw_profile_pic_re_iwgo 1"?: PrimitiveOverrideProps<ViewProps>;
    "Group 59"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 104"?: PrimitiveOverrideProps<IconProps>;
    "Group 93"?: PrimitiveOverrideProps<ViewProps>;
    "Group 61"?: PrimitiveOverrideProps<ViewProps>;
    "Group 60"?: PrimitiveOverrideProps<ViewProps>;
    Group40241198?: PrimitiveOverrideProps<ViewProps>;
    Group40241199?: PrimitiveOverrideProps<ViewProps>;
    Vector40241200?: PrimitiveOverrideProps<IconProps>;
    Vector40241201?: PrimitiveOverrideProps<IconProps>;
    Vector40241202?: PrimitiveOverrideProps<IconProps>;
    Vector40241203?: PrimitiveOverrideProps<IconProps>;
    Vector40241204?: PrimitiveOverrideProps<IconProps>;
    "Group 42"?: PrimitiveOverrideProps<ViewProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    "EditIcon 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector40241209?: PrimitiveOverrideProps<IconProps>;
    "logo_branca_conecta 1"?: PrimitiveOverrideProps<ImageProps>;
    Button40241211?: PrimitiveOverrideProps<ButtonProps>;
    Button40241212?: PrimitiveOverrideProps<ButtonProps>;
    Button40241213?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type Cadastro7Props = React.PropsWithChildren<Partial<ViewProps> & {
    bancoImagens?: BancoImagens;
} & {
    overrides?: Cadastro7OverridesProps | undefined | null;
}>;
export default function Cadastro7(props: Cadastro7Props): React.ReactElement;
