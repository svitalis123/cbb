import React from "react"
import { cn } from "@/lib/utils"

export const H1 = ({ children, className }) => (
  <h1 className={cn(
    "text-[4.167rem] font-normal leading-tight tracking-tight",
    className
  )}>
    {children}
  </h1>
)

export const H2 = ({ children, className }) => (
  <h2 className={cn(
    "text-[3.111rem] font-normal leading-tight tracking-tight",
    className
  )}>
    {children}
  </h2>
)

export const H3 = ({ children, className }) => (
  <h3 className={cn(
    "text-[2.333rem] font-normal leading-tight tracking-tight",
    className
  )}>
    {children}
  </h3>
)

export const H4 = ({ children, className }) => (
  <h4 className={cn(
    "text-[1.778rem] font-medium leading-tight tracking-tight",
    className
  )}>
    {children}
  </h4>
)

export const H5 = ({ children, className }) => (
  <h5 className={cn(
    "text-[1.333rem] font-medium leading-tight tracking-tight",
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
    "text-[1.333rem] font-medium leading-tight tracking-tight",
    className
  )}>
    {children}
  </h6>
)

export const BodyLarge = ({ children, className }) => (
  <p className={cn(
    "text-base leading-relaxed",
    className
  )}>
    {children}
  </p>
)

export const BodySmall = ({ children, className }) => (
  <p className={cn(
    "text-[0.778rem] leading-relaxed",
    className
  )}>
    {children}
  </p>
)

export const Caption = ({ children, className }) => (
  <p className={cn(
    "text-[0.556rem] leading-relaxed",
    className
  )}>
    {children}
  </p>
)