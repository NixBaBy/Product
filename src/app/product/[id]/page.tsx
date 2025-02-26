"use client";
import React, { useEffect, useState } from "react";
type ProductDetail = {
  images: string[];
  tittle: string;
  discounted: string;
  firstPrice: string;
  secondPrice: string;
  id: string;
  shopName: string;
};
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { House, Star } from "lucide-react";
import MyForm from "../components/Form";
import ProductDetail from "../components/ProductDetail";

const Page = ({ params }: { params: { id: string } }) => {
  const [fetchData, setFetchData] = useState<ProductDetail | null>(null);
  const [mainImage, setMainImage] = useState<string>("");
  const [count, setCount] = useState<number>(1); // Set initial count to 1
  const [price, setPrice] = useState(0); // Set initial price to 0

  const [unwrappedParams, setUnwrappedParams] = useState<{ id: string } | null>(
    null
  );

  // Unwrap params using React.use() if params is a Promise
  useEffect(() => {
    if (params) {
      const unwrapParams = async () => {
        const resolvedParams = await params; // Await the promise to unwrap params
        setUnwrappedParams(resolvedParams);
      };
      unwrapParams();
    }
  }, [params]);

  useEffect(() => {
    if (unwrappedParams) {
      const getData = async () => {
        try {
          const res = await fetch(
            `http://localhost:8080/Products/${unwrappedParams.id}`
          );
          if (!res.ok) throw new Error("Мэдээлэл авахад алдаа гарлаа");
          const data: ProductDetail = await res.json();
          setFetchData(data);
          console.log(data);
          if (data.images && data.images.length > 0) {
            setMainImage(data.images[0]); // Эхний зургийг үндсэн зураг болгож тохируулах
          }
          const secondPrice = parseFloat(
            data.secondPrice.replace(/[^0-9.-]+/g, "")
          ); // Remove currency symbols, if any
          setPrice(secondPrice * count); // Set the initial price
        } catch (error) {
          console.error("Мэдээлэл авах явцад алдаа:", error);
        }
      };
      getData();
    }
  }, [unwrappedParams?.id, count]); // Add count as a dependency so price updates when count changes

  const handleThumbnailClick = (image: string) => {
    setMainImage(image); // Жижиг зураг дээр дарахад үндсэн зураг солигдох
  };

  const countPlusHandler = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      const secondPrice = parseFloat(
        fetchData?.secondPrice.replace(/[^0-9.-]+/g, "") || "0"
      ); // Remove currency symbols
      setPrice(secondPrice * newCount); // Update price based on the new count
      return newCount;
    });
  };

  const countMinusHandler = () => {
    if (count > 1) {
      setCount((prevCount) => {
        const newCount = prevCount - 1;
        const secondPrice = parseFloat(
          fetchData?.secondPrice.replace(/[^0-9.-]+/g, "") || "0"
        ); // Remove currency symbols
        setPrice(secondPrice * newCount); // Update price based on the new count
        return newCount;
      });
    }
  };

  return (
    <div className="flex flex-col w-[63%] m-auto mt-7">
      {fetchData ? (
        <div className="flex gap-7">
          <div>
            {mainImage && (
              <div className="relative w-[430px] h-[430px]">
                <img
                  src={mainImage}
                  alt="Үндсэн зураг"
                  className="w-full h-full"
                />
                <div className="absolute top-[-20px] right-[-20px] text-white text-[35px] bg-pink-300 p-5 rounded-[50%]">
                  <p>{fetchData.discounted}%</p>
                </div>
              </div>
            )}
            <div className="flex mt-2">
              {fetchData.images && fetchData.images.length > 0 ? (
                fetchData.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Зураг ${index}`}
                    className="w-[78px] h-[78px] cursor-pointer mr-2 border-[1px] border-solid border-gray-200"
                    onClick={() => handleThumbnailClick(image)}
                  />
                ))
              ) : (
                <p>Зураг байхгүй байна.</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#666] text-[20px]">
              {fetchData.tittle.slice(0, 60)}...
            </p>
            <div
              style={{
                backgroundImage: `url('https://eworld.mn/themes/eworld/images/old-price.png')`,
              }}
              className="w-[100px] h-[23px] bg-cover bg-center text-[20px] text-[#676767] "
            >
              <div>
                <p>{fetchData.firstPrice} ₮</p>
              </div>
            </div>
            <p className="text-[30px] text-red-500 font-bold">
              {fetchData.secondPrice} ₮
            </p>
            <div className="flex flex-col gap-2">
              <p>Тоо ширхэг:</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <button
                    className="border-solid border-[1px] border-gray-300 w-[30px] h-[25px] flex justify-center items-center bg-gray-100"
                    onClick={() => countMinusHandler()}
                  >
                    -
                  </button>
                  <p className="border-solid border-[1px] border-gray-300 w-[30px] h-[25px] flex justify-center items-center bg-gray-100">
                    {count}
                  </p>
                  <button
                    className="border-solid border-[1px] border-gray-300 w-[30px] h-[25px] flex justify-center items-center bg-gray-100"
                    onClick={() => countPlusHandler()}
                  >
                    +
                  </button>
                </div>
                <div className="flex gap-2 items-center">
                  <p>ширхэгийн, нийт үнэ</p>
                  <p className="text-[20px] text-red-500 font-bold">
                    {price.toLocaleString()} ₮
                  </p>
                </div>
              </div>
              <Dialog>
                <DialogTrigger>
                  <div className="text-[15px] w-[250px] font-bold text-white bg-red-600 rounded-lg p-[5px] mt-20">
                    Одоо худалдаж авах
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[700px]">
                  <DialogHeader>
                    <DialogTitle>Захиалга үүсгэх</DialogTitle>
                    <DialogDescription>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 w-full bg-[#f4f4f5]">
                          <House />
                          <div>Гэрийн хаяг</div>
                        </div>
                        <div>
                          <MyForm />
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="bg-[#f4f4f5] border-[1px] border-solid border-gray-300 w-[225px] h-[540px] p-2 flex flex-col gap-2">
            <p>Нэр: {fetchData.shopName}</p>
            <p>Байршил: Улаанбаатар</p>
            <div className="flex gap-2 items-center">
              <p> Зэрэглэл: </p>
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
        </div>
      ) : (
        <p>Ачааллаж байна...</p>
      )}
      <ProductDetail fetchData={fetchData} />
    </div>
  );
};

export default Page;
