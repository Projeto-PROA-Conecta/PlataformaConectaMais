/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
export declare type Cadastro8OverridesProps = {
    Cadastro8?: PrimitiveOverrideProps<ViewProps>;
    Vector40241225?: PrimitiveOverrideProps<IconProps>;
    Vector40241226?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ImageProps>;
    "undraw_profile_pic_re_iwgo 1"?: PrimitiveOverrideProps<ViewProps>;
    "Group 59"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 104"?: PrimitiveOverrideProps<IconProps>;
    "Group 93"?: PrimitiveOverrideProps<ViewProps>;
    "Group 91"?: PrimitiveOverrideProps<ViewProps>;
    "undraw_male_avatar_g98d 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector40241235?: PrimitiveOverrideProps<IconProps>;
    Vector40241236?: PrimitiveOverrideProps<IconProps>;
    Vector40241237?: PrimitiveOverrideProps<IconProps>;
    Vector40241238?: PrimitiveOverrideProps<IconProps>;
    Vector40241239?: PrimitiveOverrideProps<IconProps>;
    "Group 42"?: PrimitiveOverrideProps<ViewProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    "EditIcon 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector40241244?: PrimitiveOverrideProps<IconProps>;
    "logo_branca_conecta 1"?: PrimitiveOverrideProps<ImageProps>;
    Button40241246?: PrimitiveOverrideProps<ButtonProps>;
    Button40241247?: PrimitiveOverrideProps<ButtonProps>;
    Button40241248?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type Cadastro8Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Cadastro8OverridesProps | undefined | null;
}>;
export default function Cadastro8(props: Cadastro8Props): React.ReactElement;
