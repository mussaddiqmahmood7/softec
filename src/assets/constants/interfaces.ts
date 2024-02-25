export interface Data {
    created_at:string;
    description:string;
    img:string;
    id:string;
    slug:string;
    title:string;
  }

  
  export interface Root {

    id: number
  
    category: Category
  
    name: string
  
    slug: string
  
    description: string
  
    start_price: number
  
    last_price: number
  
    min_persons: number
  
    max_persons: number
  
    itinerary: string
  
    inclusion: string
  
    exclusion: string
  
    duration: string
  
    thumbnail: string
  
    video_url: string
  
    created_at: string
  
    provider: number
  
    destination: number
  
  }
  
   
  
  export interface Category {
  
    id: number
  
    title: string
  
    slug: string
  
    description: string
  
    img: string
  
    created_at: string
  
  }