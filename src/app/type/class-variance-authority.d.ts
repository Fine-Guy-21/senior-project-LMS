declare module "class-variance-authority" {
    import type { ClassValue } from "clsx";

    export declare const cva: <T = any>(
        base?: ClassValue,
        config?: any
    ) => (props?: any) => string;

    export type VariantProps<T extends (...args: any) => any> =
        T extends (options: infer O) => any ? Omit<O, "class" | "className"> : never;

    export declare const cx: (...classes: ClassValue[]) => string;
}
