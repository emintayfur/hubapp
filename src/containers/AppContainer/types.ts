import type { ReactNode } from "react";

export interface IAppContainerGlobalProps {
    children: ReactNode | ReactNode[];
}

export interface IAppContainerMediumProps extends IAppContainerGlobalProps {}
export interface IAppContainerLargeProps extends IAppContainerGlobalProps {}
