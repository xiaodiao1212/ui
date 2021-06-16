interface BaseOverlayProps {
    show:boolean,
    opacity ?:string|number
    zIndex?:string|number
    shy?:boolean,
    children?:React.ReactNode 
}

export type OverlayProps = Partial<BaseOverlayProps & React.HTMLAttributes<HTMLDivElement>>