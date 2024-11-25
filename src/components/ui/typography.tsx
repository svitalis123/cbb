import React from "react"
import { cn } from "@/lib/utils"

export const H1 = ({ children, className }) => (
  <h1 className={cn(
    "text-[2.25rem] lg:text-h1 font-normal leading-tight tracking-tight",
    className
  )}>
    {children}
  </h1>
)

export const H2 = ({ children, className }) => (
  <h2 className={cn(
    "text-h5 lg:text-h2 font-normal leading-tight tracking-tight",
    className
  )}>
    {children}
  </h2>
)

export const H3 = ({ children, className }) => (
  <h3 className={cn(
    "text-[2rem] lg:text-h3 font-normal leading-tight tracking-tight",
    className
  )}>
    {children}
  </h3>
)

export const H4 = ({ children, className }) => (
  <h4 className={cn(
    "text-body lg:text-h4 font-medium leading-tight tracking-tight",
    className
  )}>
    {children}
  </h4>
)

export const H5 = ({ children, className }) => (
  <h5 className={cn(
    "text-h5 font-medium leading-tight tracking-tight",
    className
  )}>
    {children}
  </h5>
)

export const Quote = ({ children, className }) => (
  <blockquote className={cn(
    "text-[1.556rem] font-normal leading-relaxed italic",
    className
  )}>
    {children}
  </blockquote>
)

export const Subheading = ({ children, className }) => (
  <h6 className={cn(
    "text-body font-medium leading-tight tracking-tight",
    className
  )}>
    {children}
  </h6>
)

export const BodyLarge = ({ children, className }) => (
  <p className={cn(
    "text-bodyalpha leading-relaxed",
    className
  )}>
    {children}
  </p>
)

export const BodySmall = ({ children, className }) => (
  <p className={cn(
    "text-bodysmall leading-relaxed",
    className
  )}>
    {children}
  </p>
)

export const Caption = ({ children, className }) => (
  <p className={cn(
    "text-small leading-relaxed",
    className
  )}>
    {children}
  </p>
)