import Carousel from '../../components/Carousel/Carousel'

const Home = () => {
  const arrayImgs = [
    {
      src: '/images/close-up-illuminated-lamp-table-against-wall.webp',
      alt: 'Image 1'
    },
    {
      src: '/images/freepik__retouch__4429.webp',
      alt: 'Image 2'
    },
    {
      src: '/images/modern-living-room-interior-design.webp',
      alt: 'Image 3'
    }
  ]
  return (
    <div>
      <Carousel images={arrayImgs} />
    </div>
  )
}

export default Home
