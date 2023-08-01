import React, { ReactNode } from "react";
import "./AppLayout.css"

export interface AppLayoutProps { children?: ReactNode }
const AppLayout = ({children}: AppLayoutProps) => {
    return(
        <div className="app-layout" data-testid="app-layout">
            {children}
        </div>
    );
}

export default AppLayout;