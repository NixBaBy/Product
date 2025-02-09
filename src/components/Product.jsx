import Link from 'next/link'
import React from 'react'

const products = [
  {
    img: "https://cbu01.alicdn.com/img/ibank/O1CN01sgLEuG1Y3smJ41GKk_!!2215812213004-0-cib.jpg",
    tittle: "Нүдний шил нэг удаагийн арчих цаасан линз зөөврийн шил даавуу гар утасны дэлгэцийн камер тусгай толин тусгал алчуур",
    price: "18,000",
    id: "1"
  },
  {
    img: "https://w.ladicdn.com/s750x1050/6513a52323c204001244ad79/db54a48543fe503a4b568f4f622ac60c1036111488581006449649en224065dcb3fc5772c900a9236bcfcfa9e-20241029074132-xklvo-20241120044650-m0u6x.jpg",
    tittle: " Эрэгтэйчүүдэд зориулсан өнгөлөгч  Арьсны хорт бодисыг гадагшлуулж, арьсыг чангалж, аюулгүй, хоргүй байгалийн гаралтай найрлагатай",
    price: "18,000",
    id: "2"
  },
  {
    img: "https://cbu01.alicdn.com/img/ibank/O1CN01sgLEuG1Y3smJ41GKk_!!2215812213004-0-cib.jpg",
    tittle: "Нүдний шил нэг удаагийн арчих цаасан линз зөөврийн шил даавуу гар утасны дэлгэцийн камер тусгай толин тусгал алчуур",
    price: "18,000",
    id: "3"
  }
]

const Product = () => {
  return (
    <div className='w-full h-[84vh] '>
      <div>Хямдралтай Бараа</div>
   <div className='flex ml-10 mt-10 gap-10 flex-wrap'>
   {products.map((product)=>{
        return <Link href={`dynamic-detail/${product.id}`}  key={product.id}>
          <div className='max-w-[260px] p-2 hover:border-[1px] border-solid border-orange-700 rounded-lg cursor-pointer flex flex-col gap-5 ' >
        <img src={product.img} alt="" className='w-[250px] h-[250px] rounded-lg' />
        <p>{product.tittle}</p>
        <p className='text-orange-700 font-bold  underline'>{product.price}</p>
      </div>
        </Link>
      })}
   </div>
    </div>
  )
}

export default Product