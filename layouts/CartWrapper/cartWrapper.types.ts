import React from "react";

export interface CartWrapperProps {
  children: React.ReactNode;
}

export interface TotalStylesProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
}
