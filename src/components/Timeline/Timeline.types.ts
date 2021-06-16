
type BaseTimelineProps =  {
    derection:'vertical'|'horizontal',
    reverse ?:boolean
    children?:React.ReactNode 
}

export type TimelineProps = Partial<BaseTimelineProps & React.ButtonHTMLAttributes<HTMLElement>>