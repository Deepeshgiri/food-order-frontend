import { Restaurant } from '@/Types'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Dot } from 'lucide-react'

type Props = {
    restaurant:Restaurant
}

export default function RestaurantInfo({restaurant}: Props) {
  return (
    <Card className="border-sla">
        <CardHeader>
            <CardTitle className='text-3xl font-bold tracking-tight'>
{restaurant.restaurantName}
            </CardTitle>
            <CardDescription>
                {restaurant.city},{restaurant.country}
            </CardDescription>
        </CardHeader>
        <CardContent className='flex'>
{restaurant.cuisines.map((item , index)=>(<span className='flex '>
    <span>{item}</span>
    {index<restaurant.cuisines.length -1 && <Dot/>}
</span>))}
        </CardContent>
    </Card>
  )
}