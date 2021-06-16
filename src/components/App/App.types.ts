interface AppBaseProps {
 children?:React.ReactNode 
}

export type AppProps = Partial<AppBaseProps & React.HTMLAttributes<HTMLDivElement>>