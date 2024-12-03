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
export declare type Cadastro5OverridesProps = {
    Cadastro5?: PrimitiveOverrideProps<ViewProps>;
    Vector40241083?: PrimitiveOverrideProps<IconProps>;
    Vector40241084?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ImageProps>;
    "undraw_profile_pic_re_iwgo 1"?: PrimitiveOverrideProps<ViewProps>;
    "Group 59"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 104"?: PrimitiveOverrideProps<IconProps>;
    "undraw_female_avatar_efig 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector40241091?: PrimitiveOverrideProps<IconProps>;
    Vector40241092?: PrimitiveOverrideProps<IconProps>;
    Vector40241093?: PrimitiveOverrideProps<IconProps>;
    Vector40241094?: PrimitiveOverrideProps<IconProps>;
    Vector40241095?: PrimitiveOverrideProps<IconProps>;
    Vector40241096?: PrimitiveOverrideProps<IconProps>;
    Vector40241097?: PrimitiveOverrideProps<IconProps>;
    "Group 42"?: PrimitiveOverrideProps<ViewProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    "EditIcon 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector40241102?: PrimitiveOverrideProps<IconProps>;
    "logo_branca_conecta 1"?: PrimitiveOverrideProps<ImageProps>;
    Button40241104?: PrimitiveOverrideProps<ButtonProps>;
    Button40241105?: PrimitiveOverrideProps<ButtonProps>;
    Button40241106?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type Cadastro5Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Cadastro5OverridesProps | undefined | null;
}>;
export default function Cadastro5(props: Cadastro5Props): React.ReactElement;
