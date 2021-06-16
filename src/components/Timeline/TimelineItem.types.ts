interface BaseTimelineItemProps {
    derection:'vertical'|'horizontal',
    index:number,
    children?:React.ReactNode 
}

export type TimelineItemProps = Partial<BaseTimelineItemProps & React.ButtonHTMLAttributes<HTMLElement>>