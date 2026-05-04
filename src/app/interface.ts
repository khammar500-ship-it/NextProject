export interface NavLink{
     name :string
     path :string
     text ? :string
}
export interface Section1{
     photo : string
     title : string
     text: string
}
export interface Scroll{
     photo:string
     name:string
     text:string
     text2?:string
}
export interface display{
     question :string
     Answer :string
}
export interface HeroPage{
     title1:string
     title2 :string
     text:string
     ImgArr?:Array<string>
     textArr?:Array<string>
}
export interface Rooms{
     imgs:Array<string>
     title:string
     text:string
     
}